import axios, { AxiosResponse } from 'axios';
import lookie from 'lookie';
import React, { ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Config from '../../config';
import { updateBackdrop } from '../../redux/features/backdropSlice';
import { CredentialsState, setCredentials } from '../../redux/features/credentialsSlice';

export interface AuthProviderProps {
	children: ReactNode;
	next?: string;
	fallback?: string;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children, next, fallback }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(
			updateBackdrop({
				open: true,
				backgroundColor: 'rgba(255, 255, 255, 1)',
			}),
		);
		const local = lookie.get('GOOGLE_FORMS_CLONE_CREDENTIALS') as CredentialsState;
		if (!local) {
			dispatch(updateBackdrop({ open: false }));
			fallback && navigate(fallback, { replace: true });
			return;
		}
		axios({
			method: 'POST',
			url: `${Config.API_URL}/user/authenticate`,
			headers: {
				Authorization: `Bearer ${local.token}`,
			},
		})
			.then((response: AxiosResponse) => {
				const credentials = { ...response.data };
				lookie.set('GOOGLE_FORMS_CLONE_CREDENTIALS', credentials);
				dispatch(setCredentials(credentials));
				next && navigate(next, { replace: true });
			})
			.catch(() => {
				fallback && navigate(fallback, { replace: true });
			})
			.finally(() => {
				dispatch(updateBackdrop({ open: false }));
			});
	}, [next, fallback, navigate, dispatch]);
	return <React.Fragment>{children}</React.Fragment>;
};

export default AuthProvider;
