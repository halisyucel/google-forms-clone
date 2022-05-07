import React from 'react';
import { Helmet } from 'react-helmet';

const Dashboard = () => {
	return (
		<div>
			<Helmet>
				<title>Google Forms Clone</title>
				<link rel={'icon'} type={'image/png'} href={'/favicon-forms.png'} />
				<meta name={'robots'} content={'noindex, nofollow'} />
			</Helmet>
			dashboard
		</div>
	);
};

export default Dashboard;
