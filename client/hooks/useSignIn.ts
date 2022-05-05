import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { FormElement, HelperText } from '../lib/types';
import { createHelperText } from '../lib/helper';
import axios, { AxiosResponse } from 'axios';
import lookie from 'lookie';
import Config from '../config';

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
	const usernameHelperText = useMemo(() => createHelperText(usernameHelperTextProps), [usernameHelperTextProps]);
	useEffect(() => {
		document.getElementById('email_or_phone_input')!.focus();
	}, []);
	const handleSubmit = useCallback(() => {
		if (username.value.trim().length === 0) {
			setUsername({ value: username.value, error: true });
			setUsernameHelperTextProps({ type: 'error', message: 'Enter an email or phone number' });
		} else {
			setUsername({ value: username.value, error: false });
			setUsernameHelperTextProps({ type: 'none' });
			setLoading(true);
			axios({
				method: 'post',
				url: `${Config.API_URL}/user/check`,
				data: {
					username: username.value.trim().split('@gmail.com')[0],
				},
			})
				.then((response: AxiosResponse) => {
					if (response.status === 200) {
						setLoading(false);
						setUsername({ value: username.value, error: false });
						setUsernameHelperTextProps({ type: 'none' });
						lookie.set('token', response.data.token, '8h');
						navigate(`/sign-in/password/${username.value.trim().split('@gmail.com')[0]}`);
					}
				})
				.catch(() => {
					setLoading(false);
					setUsername({ value: username.value, error: true });
					setUsernameHelperTextProps({ type: 'error', message: 'Couldn\'t find your Google Account' });
				});
		}
	}, [
		username.value,
		navigate
	]);
	return {
		loading,
		username,
		usernameHelperText,
		handleSubmit,
		setUsername,
	};
}