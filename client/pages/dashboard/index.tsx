import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/dashboard/header';
import Settings from '../../components/dashboard/settings';
import Templates from '../../components/dashboard/templates';
import LoadingLayout from '../../components/layouts/loading-layout';
import useAuthentication from '../../hooks/useAuthentication';

const Dashboard = () => {
    const { loading } = useAuthentication({ fallback: '/sign-in' });
    return (
        <LoadingLayout loading={loading}>
            <Helmet>
                <title>Google Forms Clone</title>
                <link
                    rel={'icon'}
                    type={'image/png'}
                    href={'/favicon-forms.png'}
                />
                <meta name={'robots'} content={'noindex, nofollow'} />
            </Helmet>
            <Header />
            <Templates />
            <Settings />
        </LoadingLayout>
    );
};

export default Dashboard;
