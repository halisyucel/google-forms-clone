import React from 'react';
import { LoadingLayoutProps } from '../../lib/types';

const LoadingLayout = (props: LoadingLayoutProps) => {
	return props.loading ? (
		<div>
			loading...
		</div>
	) : (<>
		{props.children}
	</>);
};

export default LoadingLayout;
