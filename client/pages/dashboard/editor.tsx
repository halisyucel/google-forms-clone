import axios, { AxiosResponse } from 'axios';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import DynamicZone from '../../components/editor/dynamic-zone';
import Header from '../../components/editor/header';
import Backdrop from '../../components/global/backdrop';
import LoadingLayout from '../../components/layouts/loading-layout';
import Config from '../../config';
import useAuthentication from '../../hooks/useAuthentication';
import { setFormState, throwAlert, updateBackdrop } from '../../redux/actions';
import { RootState } from '../../redux/store';

const Editor: React.FC = () => {
	const { loading } = useAuthentication({ fallback: '/sign-in' });
	const params = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const credentials = useSelector((state: RootState) => state.credentials);
	const form = useSelector((state: RootState) => state.form);
	useEffect(() => {
		if (!credentials.token) return;
		axios({
			method: 'GET',
			url: `${Config.API_URL}/form/`,
			headers: {
				Authorization: `Bearer ${credentials.token}`,
			},
			params: {
				id: params.id,
			},
		})
			.then((res: AxiosResponse) => {
				dispatch(setFormState({ ...res.data }));
			})
			.catch(() => {
				dispatch(
					throwAlert({
						message: 'Oops! Something went wrong.',
						severity: 'error',
					}),
				);
				setTimeout(() => navigate('/error'), 3000);
			})
			.finally(() => {
				dispatch(
					updateBackdrop({
						name: 'editor',
						status: false,
					}),
				);
			});
	}, [params.id, credentials.token]);
	return (
		<LoadingLayout loading={loading}>
			<Helmet>
				<title>{form.title} - Google Forms Clone</title>
				<link rel={'icon'} type={'image/png'} href={'/favicon-forms.png'} />
				<meta name={'robots'} content={'noindex, nofollow'} />
			</Helmet>
			<Header />
			<DynamicZone />
			<Backdrop name={'editor'} backgroundColor={'rgba(255, 255, 255, 1)'} />
		</LoadingLayout>
	);
};

export default Editor;
