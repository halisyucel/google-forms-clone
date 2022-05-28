import React from 'react';
import { Helmet } from 'react-helmet';

const Example = () => {
    return (
        <div>
            <Helmet>
                <title>Google Forms Clone: An Example</title>
                <link
                    rel={'icon'}
                    type={'image/png'}
                    href={'/favicon-forms.png'}
                />
            </Helmet>
            example
        </div>
    );
};

export default Example;
