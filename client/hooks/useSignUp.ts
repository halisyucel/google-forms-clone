import axios, { AxiosError, AxiosResponse } from 'axios';
import lookie from 'lookie';
import { useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Config from '../config';
import { createHelperText } from '../utils/helper';
import { FormElement, HelperText } from '../utils/types';

export default function useSignUp() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [firstName, setFirstName] = useState<FormElement>({
        value: '',
        error: false,
    });
    const [lastName, setLastName] = useState<FormElement>({
        value: '',
        error: false,
    });
    const [username, setUsername] = useState<FormElement>({
        value: '',
        error: false,
    });
    const [password, setPassword] = useState<FormElement>({
        value: '',
        error: false,
    });
    const [passwordConfirm, setPasswordConfirm] = useState<FormElement>({
        value: '',
        error: false,
    });
    const [namesHelperTextProps, setNamesHelperTextProps] =
        useState<HelperText>({
            type: 'none',
        });
    const namesHelperText = useMemo(
        () => createHelperText(namesHelperTextProps),
        [namesHelperTextProps],
    );
    const [usernameHelperTextProps, setUsernameHelperTextProps] =
        useState<HelperText>({
            type: 'info',
            message: 'You can use letters, numbers & periods',
        });
    const usernameHelperText = useMemo(
        () => createHelperText(usernameHelperTextProps),
        [usernameHelperTextProps],
    );
    const [passwordsHelperTextProps, setPasswordsHelperTextProps] =
        useState<HelperText>({
            type: 'info',
            message:
                'Use 8 or more characters with a mix of letters, numbers & symbols',
        });
    const passwordsHelperText = useMemo(
        () => createHelperText(passwordsHelperTextProps),
        [passwordsHelperTextProps],
    );
    const setFormInput = useCallback(
        (inputName: string, key: string, value: string | boolean) => {
            switch (inputName) {
                case 'firstName':
                    setFirstName({ ...firstName, [key]: value });
                    break;
                case 'lastName':
                    setLastName({ ...lastName, [key]: value });
                    break;
                case 'username':
                    setUsername({ ...username, [key]: value });
                    break;
                case 'password':
                    setPassword({ ...password, [key]: value });
                    break;
                case 'passwordConfirm':
                    setPasswordConfirm({ ...passwordConfirm, [key]: value });
                    break;
                default:
                    break;
            }
        },
        [firstName, lastName, username, password, passwordConfirm],
    );
    const formValidation = useCallback(() => {
        let result = true;
        (() => {
            if (firstName.value.trim().length < 1) {
                setFormInput('firstName', 'error', true);
                result = false;
            } else setFormInput('firstName', 'error', false);
        })();
        (() => {
            if (lastName.value.trim().length < 1) {
                setFormInput('lastName', 'error', true);
                result = false;
            } else setFormInput('lastName', 'error', false);
        })();
        (() => {
            if (username.value.trim().length < 1) {
                setFormInput('username', 'error', true);
                setUsernameHelperTextProps({
                    type: 'error',
                    message: 'Choose a Gmail address',
                });
                result = false;
            } else if (!new RegExp(/^[a-zA-Z0-9.]+$/).test(username.value)) {
                setFormInput('username', 'error', true);
                setUsernameHelperTextProps({
                    type: 'error',
                    message:
                        'Sorry, only letters (a-z), numbers (0-9), and periods (.) are allowed.',
                });
                result = false;
            } else {
                setFormInput('username', 'error', false);
                setUsernameHelperTextProps({
                    type: 'info',
                    message: 'You can use letters, numbers & periods',
                });
            }
        })();
        (() => {
            if (password.value.trim().length < 8) {
                setFormInput('password', 'error', true);
                setPasswordsHelperTextProps({
                    type: 'error',
                    message: 'Use 8 characters or more for your password',
                });
                result = false;
            } else if (
                !new RegExp(/^[a-zA-Z0-9.+\-*/!'^%&()[\]{}?_|#$,;:]+$/).test(
                    password.value,
                )
            ) {
                setFormInput('password', 'error', true);
                setPasswordsHelperTextProps({
                    type: 'error',
                    message:
                        'Only use letters, numbers, and common punctuation characters',
                });
                result = false;
            } else setFormInput('password', 'error', false);
        })();
        (() => {
            if (
                passwordConfirm.value !== password.value &&
                new RegExp(/^[a-zA-Z0-9.+\-*/!'^%&()[\]{}?_|#$,;:]+$/).test(
                    password.value,
                )
            ) {
                setFormInput('passwordConfirm', 'error', true);
                setPasswordsHelperTextProps({
                    type: 'error',
                    message: "Those passwords didn't match. Try again.",
                });
                result = false;
            } else setFormInput('passwordConfirm', 'error', false);
        })();
        (() => {
            if (
                firstName.value.trim().length < 1 &&
                lastName.value.trim().length < 1
            ) {
                setNamesHelperTextProps({
                    type: 'error',
                    message: 'Enter first and last names',
                });
                result = false;
            } else if (
                firstName.value.trim().length < 1 &&
                lastName.value.trim().length > 0
            ) {
                setNamesHelperTextProps({
                    type: 'error',
                    message: 'Enter first name',
                });
                result = false;
            } else if (
                lastName.value.trim().length < 1 &&
                firstName.value.trim().length > 0
            ) {
                setNamesHelperTextProps({
                    type: 'error',
                    message: 'Enter last name',
                });
                result = false;
            } else setNamesHelperTextProps({ type: 'none' });
        })();
        return result;
    }, [
        firstName,
        lastName,
        username,
        password,
        passwordConfirm,
        setFormInput,
    ]);
    const handleSubmit = useCallback(() => {
        const isValid = formValidation();
        if (isValid) {
            setLoading(true);
            setFormInput('username', 'error', false);
            setUsernameHelperTextProps({
                type: 'info',
                message: 'You can use letters, numbers & periods',
            });
            axios({
                method: 'post',
                url: `${Config.API_URL}/user/sign-up`,
                data: {
                    firstName: firstName.value,
                    lastName: lastName.value,
                    username: username.value,
                    password: password.value,
                },
            })
                .then((response: AxiosResponse) => {
                    if (response.status === 200) {
                        setLoading(false);
                        setFormInput('username', 'error', false);
                        setUsernameHelperTextProps({ type: 'none' });
                        lookie.set('token', response.data.token, '8h');
                        navigate('/');
                    }
                })
                .catch((error: AxiosError) => {
                    if (error.response?.status === 409) {
                        setLoading(false);
                        setFormInput('username', 'error', true);
                        setUsernameHelperTextProps({
                            type: 'error',
                            message: 'That username is taken. Try another.',
                        });
                    } else {
                        setLoading(false);
                        navigate('/error');
                    }
                });
        }
    }, [
        formValidation,
        username.value,
        setFormInput,
        setUsernameHelperTextProps,
    ]);
    return {
        loading,
        firstName,
        lastName,
        username,
        password,
        passwordConfirm,
        showPassword,
        handleSubmit,
        setFormInput,
        setShowPassword,
        setLoading,
        namesHelperText,
        passwordsHelperText,
        usernameHelperText,
    };
}
