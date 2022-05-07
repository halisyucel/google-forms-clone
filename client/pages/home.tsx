import React from 'react';
import Header from '../components/home/header';
import PageContent from '../components/home/page-content';
import styles from '../styles/pages/home.module.scss';

// TODO: Head değiştirici ekle buraya

const Home = () => {

	return (
		<div className={styles.home}>
			<Header />
			<PageContent />
		</div>
	);
};

export default Home;
