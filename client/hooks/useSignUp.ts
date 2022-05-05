import { useCallback, useState } from 'react';
import { HelperText, FormElement } from '../lib/types';


export default function useSignUp() {
	const [loading, setLoading] = useState<boolean>(false);
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [firstName, setFirstName] = useState<FormElement>({ value: '', error: false });
	const [lastName, setLastName] = useState<FormElement>({ value: '', error: false });
	const [username, setUsername] = useState<FormElement>({ value: '', error: false });
	const [password, setPassword] = useState<FormElement>({ value: '', error: false });
	const [passwordConfirm, setPasswordConfirm] = useState<FormElement>({ value: '', error: false });
	const [namesHelperText, setNamesHelperText] = useState<HelperText>({
		type: 'none'
	});
	const [usernameHelperText, setUsernameHelperText] = useState<HelperText>({
		type: 'info',
		message: 'You can use letters, numbers & periods'
	});
	const [passwordsHelperText, setPasswordsHelperText] = useState<HelperText>({
		type: 'info',
		message: 'Use 8 or more characters with a mix of letters, numbers & symbols'
	});
	const setFormInput = useCallback((inputName: string, key: string, value: string | boolean) => {
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
	}, [
		firstName,
		lastName,
		username,
		password,
		passwordConfirm
	]);
	const formValidation = useCallback(() => {
		let result = true;
		(() => {
			if (firstName.value.trim().length < 1) {
				setFormInput('firstName', 'error', true);
				result = false;
			} else
				setFormInput('firstName', 'error', false);
		})();
		(() => {
			if (lastName.value.trim().length < 1) {
				setFormInput('lastName', 'error', true);
				result = false;
			} else
				setFormInput('lastName', 'error', false);
		})();
		(() => {
			if (username.value.trim().length < 1) {
				setFormInput('username', 'error', true);
				setUsernameHelperText({ type: 'error', message: 'Choose a Gmail address' });
				result = false;
			} else if (!(new RegExp(/^[a-zA-Z0-9.]+$/).test(username.value))) {
				setFormInput('username', 'error', true);
				setUsernameHelperText({ type: 'error', message: 'Sorry, only letters (a-z), numbers (0-9), and periods (.) are allowed.' });
				result = false;
			} else
				setFormInput('username', 'error', false);
		})();
		(() => {
			if (password.value.trim().length < 8) {
				setFormInput('password', 'error', true);
				setPasswordsHelperText({ type: 'error', message: 'Use 8 characters or more for your password' });
				result = false;
			} else if (!(new RegExp(/^[a-zA-Z0-9.+\-*/!'^%&()\[\]{}?_|#$,;:]+$/).test(password.value))) {
				setFormInput('password', 'error', true);
				setPasswordsHelperText({ type: 'error', message: 'Only use letters, numbers, and common punctuation characters' });
				result = false;
			} else
				setFormInput('password', 'error', false);
		})();
		(() => {
			if (passwordConfirm.value !== password.value && (new RegExp(/^[a-zA-Z0-9.+\-*/!'^%&()\[\]{}?_|#$,;:]+$/).test(password.value))) {
				setFormInput('passwordConfirm', 'error', true);
				setPasswordsHelperText({ type: 'error', message: 'Those passwords didn\'t match. Try again.' });
				result = false;
			} else
				setFormInput('passwordConfirm', 'error', false);
		})();
		(() => {
			if (firstName.value.trim().length < 1 && lastName.value.trim().length < 1) {
				setNamesHelperText({type: 'error', message: 'Enter first and last names'});
				result = false;
			} else if (firstName.value.trim().length < 1 && lastName.value.trim().length > 0) {
				setNamesHelperText({type: 'error', message: 'Enter first name'});
				result = false;
			} else if (lastName.value.trim().length < 1 && firstName.value.trim().length > 0) {
				setNamesHelperText({type: 'error', message: 'Enter last name'});
				result = false;
			} else
				setNamesHelperText({ type: 'none' });
		})();
		return result;
	}, [
		firstName,
		lastName,
		username,
		password,
		passwordConfirm,
		setFormInput
	]);
	return {
		loading,
		firstName,
		lastName,
		username,
		password,
		passwordConfirm,
		showPassword,
		formValidation,
		setFormInput,
		setShowPassword,
		setLoading,
		namesHelperText,
		passwordsHelperText,
		usernameHelperText
	};
};
