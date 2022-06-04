import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/dashboard/header';
import Settings from '../../components/dashboard/settings';
import Templates from '../../components/dashboard/templates';
import AuthProvider from '../../components/layouts/auth-provider';

const Dashboard = () => {
	return (
		<AuthProvider fallback={'/sign-in'}>
			<Helmet>
				<title>Google Forms Clone</title>
				<link rel={'icon'} type={'image/png'} href={'/favicon-forms.png'} />
				<meta name={'robots'} content={'noindex, nofollow'} />
			</Helmet>
			<Header />
			<Templates />
			<Settings />
		</AuthProvider>
	);
};

export default Dashboard;
