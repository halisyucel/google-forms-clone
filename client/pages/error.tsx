import React from 'react';
import { Helmet } from 'react-helmet';

const Error = () => {
    return (
        <div>
            <Helmet>
                <title>Oops! Something went wrong.</title>
                <meta name={'robots'} content={'noindex, nofollow'} />
            </Helmet>
            error
        </div>
    );
};

export default Error;
