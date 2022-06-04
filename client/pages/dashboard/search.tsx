import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import Header from '../../components/dashboard/header';
import AuthProvider from '../../components/layouts/auth-provider';

const Search = () => {
	const { query } = useParams();
	return (
		<AuthProvider fallback={'/sign-in'}>
			<Helmet>
				<title>Google Forms Clone | Search</title>
				<link rel={'icon'} type={'image/png'} href={'/favicon-forms.png'} />
				<meta name={'robots'} content={'noindex, nofollow'} />
			</Helmet>
			<Header />
			{query}
		</AuthProvider>
	);
};

export default Search;
