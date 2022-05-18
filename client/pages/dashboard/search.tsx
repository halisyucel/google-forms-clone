import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import useAuthentication from '../../hooks/useAuthentication';
import LoadingLayout from '../../components/layouts/loading-layout';
import Header from '../../components/dashboard/header';

export interface SearchParams {
	query?: string
}

const Search = () => {
	const { loading } = useAuthentication({ fallback: '/sign-in' });
	const params: SearchParams = useParams();
	return (
		<LoadingLayout loading={loading}>
			<Helmet>
				<title>Google Forms Clone | Search</title>
				<link rel={'icon'} type={'image/png'} href={'/favicon-forms.png'} />
				<meta name={'robots'} content={'noindex, nofollow'} />
			</Helmet>
			<Header />
			{params.query}
		</LoadingLayout>
	);
};

export default Search;
