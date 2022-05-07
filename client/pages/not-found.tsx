import React from 'react';
import {Helmet} from 'react-helmet';

const NotFound = () => {
	return (
		<div>
			<Helmet>
				<title>Not Found</title>
				<meta name={'robots'} content={'noindex, nofollow'} />
			</Helmet>
			not found
		</div>
	);
};

export default NotFound;
