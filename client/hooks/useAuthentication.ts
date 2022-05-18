import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { setCredentials, CredentialsState } from '../redux/features/credentialsSlice';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import Config from '../config';
import lookie from 'lookie';

export interface UseAuthenticationProps {
	next?: string,
	fallback?: string,
}

export default (props: UseAuthenticationProps) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const credentials = useSelector((state: RootState) => state.credentials);
	const [loading, setLoading] = useState<boolean>(true);
	const _next = () => props.next && navigate(props.next, { replace: true });
	const _fallback = () => props.fallback && navigate(props.fallback, { replace: true });
	useEffect(() => {
		const localCredentials = lookie.get('GOOGLE_FORMS_CLONE_CREDENTIALS') as CredentialsState;
		if (localCredentials) {
			axios({
				method: 'post',
				url: `${Config.API_URL}/user/authenticate`,
				headers: {
					Authorization: `Bearer ${localCredentials.token}`,
				}
			})
				.then((res: AxiosResponse) => {
					const newCredentials = { ...res.data };
					lookie.set('GOOGLE_FORMS_CLONE_CREDENTIALS', newCredentials);
					dispatch(setCredentials(newCredentials));
					setLoading(false);
					_next();
				})
				.catch(() => {
					setLoading(false);
					_fallback();
				});
		} else {
			setLoading(false);
			_fallback();
		}
	}, [
		credentials,
		_next,
		_fallback,
	]);
	return {
		loading
	};
};