import React, { ReactNode } from 'react';

// todo burası geliştirilecek

export type LoadingLayoutProps = {
    children: ReactNode;
    loading: boolean;
};

const LoadingLayout = (props: LoadingLayoutProps) => {
    return props.loading ? (
        <div>loading...</div>
    ) : (
        <React.Fragment>{props.children}</React.Fragment>
    );
};

export default LoadingLayout;
