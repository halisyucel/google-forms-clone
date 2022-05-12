import React from 'react';
import Header from '../components/home/header';
import PageContent from '../components/home/page-content';
import Footer from '../components/home/footer';
import styles from '../styles/pages/home.module.scss';

const Home = () => {
	return (
		<div className={styles.home}>
			<Header />
			<PageContent />
			<Footer />
		</div>
	);
};

export default Home;