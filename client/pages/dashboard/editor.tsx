import axios, { AxiosResponse } from 'axios';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import DynamicZone from '../../components/editor/dynamic-zone';
import Header from '../../components/editor/header';
import AuthProvider from '../../components/layouts/auth-provider';
import Config from '../../config';
import { setFormState, throwAlert, updateBackdrop } from '../../redux/actions';
import { RootState } from '../../redux/store';

const Editor: React.FC = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();
	const { token } = useSelector((state: RootState) => state.credentials);
	const { title } = useSelector((state: RootState) => state.form);
	useEffect(() => {
		if (!token) return;
		dispatch(updateBackdrop({ open: true, backgroundColor: 'rgba(255, 255, 255, 1)' }));
		axios({
			method: 'GET',
			url: `${Config.API_URL}/form/`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
			params: { id },
		})
			.then((res: AxiosResponse) => {
				dispatch(setFormState({ ...res.data }));
				dispatch(updateBackdrop({ open: false }));
			})
			.catch(() => {
				dispatch(
					throwAlert({
						message: 'Oops! Could not load page.',
						severity: 'error',
					}),
				);
				setTimeout(() => {
					navigate('/dashboard');
				}, 2000);
			});
	}, [id, token, dispatch, navigate]);
	return (
		<AuthProvider fallback={'/sign-in'}>
			<Helmet>
				<title>{title} - Google Forms Clone</title>
				<link rel={'icon'} type={'image/png'} href={'/favicon-forms.png'} />
				<meta name={'robots'} content={'noindex, nofollow'} />
			</Helmet>
			<Header />
			<DynamicZone />
		</AuthProvider>
	);
};

export default Editor;
