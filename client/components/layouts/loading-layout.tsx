import React from 'react';
import Backdrop from '../global/backdrop';

export type LoadingLayoutProps = {
    children: React.ReactNode;
    loading: boolean;
};

const LoadingLayout: React.FC<LoadingLayoutProps> = ({ children, loading }) => {
    return loading ? (
        <Backdrop name={'layout'} backgroundColor={'rgba(255, 255, 255, 1)'} />
    ) : (
        <React.Fragment>{children}</React.Fragment>
    );
};

export default LoadingLayout;
