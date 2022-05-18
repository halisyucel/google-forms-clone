import React, { ReactNode } from 'react';

// todo burası geliştirilecek

export type LoadingLayoutProps = {
	children: ReactNode,
	loading: boolean,
}

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
