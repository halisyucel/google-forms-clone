import { useCallback, useEffect, useMemo, useState } from 'react';
import { FormElement, HelperText, PasswordParams } from '../lib/types';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { createHelperText } from '../lib/helper';
import { setCredentials } from '../redux/features/credentialsSlice';
import { RootState } from '../redux/store';
import axios, { AxiosResponse } from 'axios';
import Config from '../config';
import lookie from 'lookie';

export default () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const credentials = useSelector((state: RootState) => state.credentials);
	const params: PasswordParams = useParams();
	const [loading, setLoading] = useState<boolean>(false);
	const [password, setPassword] = useState<FormElement>({
		value: '',
		error: false,
	});
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [passwordHelperTextProps, setPasswordHelperTextProps] = useState<HelperText>({
		type: 'none'
	});
	const passwordHelperText = useMemo(() => createHelperText(passwordHelperTextProps), [passwordHelperTextProps]);
	useEffect(() => {
		const passwordInput = document.getElementById('password_input') as HTMLElement;
		passwordInput.focus();
	}, []);
	const handleSubmit = useCallback(() => {
		if (password.value.trim().length === 0) {
			setPassword({ value: password.value, error: true });
			setPasswordHelperTextProps({ type: 'error', message: 'Enter a password' });
		} else {
			setPassword({ value: password.value, error: false });
			setPasswordHelperTextProps({ type: 'none' });
			setLoading(true);
			axios({
				method: 'post',
				url: `${Config.API_URL}/user/sign-in`,
				data: {
					username: params.username,
					password: password.value,
				},
			})
				.then((res: AxiosResponse) => {
					if (res.status === 200) {
						setLoading(false);
						setPassword({ value: password.value, error: false });
						setPasswordHelperTextProps({ type: 'none' });
						lookie.set('GOOGLE_FORMS_CLONE_CREDENTIALS', { ...res.data });
						dispatch(setCredentials({ ...res.data }));
						navigate('/dashboard');
					}
				})
				.catch(() => {
					setLoading(false);
					setPassword({ value: password.value, error: true });
					setPasswordHelperTextProps({ type: 'error', message: 'Wrong password. Try again or click Forgot password to reset it.' });
				});
		}
	}, [
		password.value,
		params.username,
		navigate,
		credentials,
		dispatch,
	]);
	return {
		params,
		loading,
		password,
		showPassword,
		passwordHelperText,
		handleSubmit,
		setPassword,
		setShowPassword,
	};
};