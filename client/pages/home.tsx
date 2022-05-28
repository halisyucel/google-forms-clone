import React from 'react';
import Footer from '../components/home/footer';
import Header from '../components/home/header';
import PageContent from '../components/home/page-content';

const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <PageContent />
            <Footer />
        </React.Fragment>
    );
};

export default Home;
