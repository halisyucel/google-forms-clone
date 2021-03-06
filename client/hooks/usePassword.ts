import axios, { AxiosResponse } from 'axios';
import lookie from 'lookie';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Config from '../config';
import { setCredentials } from '../redux/actions';
import { RootState } from '../redux/store';
import { createHelperText } from '../utils/helper';
import { FormElement, HelperText } from '../utils/types';

export interface PasswordParams {
	username?: string;
}

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
		type: 'none',
	});
	const passwordHelperText = useMemo(
		() => createHelperText(passwordHelperTextProps),
		[passwordHelperTextProps],
	);
	useEffect(() => {
		const passwordInput = document.getElementById('password_input') as HTMLElement;
		passwordInput.focus();
	}, []);
	const handleSubmit = useCallback(() => {
		if (!password.value.trim()) {
			setPassword({ value: password.value, error: true });
			setPasswordHelperTextProps({
				type: 'error',
				message: 'Enter a password',
			});
			return;
		}
		setPassword({ value: password.value, error: false });
		setPasswordHelperTextProps({ type: 'none' });
		setLoading(true);
		axios({
			method: 'POST',
			url: `${Config.API_URL}/user/sign-in`,
			data: {
				username: params.username,
				password: password.value,
			},
		})
			.then((res: AxiosResponse) => {
				setPassword({ value: password.value, error: false });
				setPasswordHelperTextProps({ type: 'none' });
				lookie.set('GOOGLE_FORMS_CLONE_CREDENTIALS', { ...res.data });
				dispatch(setCredentials({ ...res.data }));
				navigate('/dashboard');
			})
			.catch(() => {
				setPassword({ value: password.value, error: true });
				setPasswordHelperTextProps({
					type: 'error',
					message: 'Wrong password. Try again or click Forgot password to reset it.',
				});
			})
			.finally(() => {
				setLoading(false);
			});
	}, [password.value, params.username, navigate, credentials, dispatch]);
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
