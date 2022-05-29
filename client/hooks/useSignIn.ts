import axios, { AxiosResponse } from 'axios';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Config from '../config';
import { createHelperText } from '../utils/helper';
import { FormElement, HelperText } from '../utils/types';

export default () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState<boolean>(false);
	const [username, setUsername] = useState<FormElement>({
		value: '',
		error: false,
	});
	const [usernameHelperTextProps, setUsernameHelperTextProps] = useState<HelperText>({
		type: 'none',
		message: '',
	});
	const usernameHelperText = useMemo(
		() => createHelperText(usernameHelperTextProps),
		[usernameHelperTextProps],
	);
	useEffect(() => {
		const emailOrPhoneInput = document.getElementById('email_or_phone_input') as HTMLElement;
		emailOrPhoneInput.focus();
	}, []);
	const handleSubmit = useCallback(() => {
		if (!username.value.trim()) {
			setUsername({ value: username.value, error: true });
			setUsernameHelperTextProps({
				type: 'error',
				message: 'Enter an email or phone number',
			});
			return;
		}
		setUsername({ value: username.value, error: false });
		setUsernameHelperTextProps({ type: 'none' });
		setLoading(true);
		axios({
			method: 'POST',
			url: `${Config.API_URL}/user/check`,
			data: {
				username: username.value.trim().split('@gmail.com')[0],
			},
		})
			.then((response: AxiosResponse) => {
				setUsername({ value: username.value, error: false });
				setUsernameHelperTextProps({ type: 'none' });
				navigate(`/sign-in/password/${username.value.trim().split('@gmail.com')[0]}`);
			})
			.catch(() => {
				setUsername({ value: username.value, error: true });
				setUsernameHelperTextProps({
					type: 'error',
					message: "Couldn't find your Google Account",
				});
			})
			.finally(() => {
				setLoading(false);
			});
	}, [username.value, navigate]);
	return {
		loading,
		username,
		usernameHelperText,
		handleSubmit,
		setUsername,
	};
};
