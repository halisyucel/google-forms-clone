import React from 'react';
import { Helmet } from 'react-helmet';
import useAuthentication from '../hooks/useAuthentication';
import LoadingLayout from '../components/global/loading-layout';

const Dashboard = () => {
	const { loading } = useAuthentication({ fallback: '/sign-in' });
	return (
		<LoadingLayout loading={loading}>
			<Helmet>
				<title>Google Forms Clone</title>
				<link rel={'icon'} type={'image/png'} href={'/favicon-forms.png'} />
				<meta name={'robots'} content={'noindex, nofollow'} />
			</Helmet>
			dashboard
		</LoadingLayout>
	);
};

export default Dashboard;
