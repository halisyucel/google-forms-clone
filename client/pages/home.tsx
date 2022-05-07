import React from 'react';
import HomeHeader from '../components/home-header';
import styles from '../styles/pages/home.module.scss';

// TODO: Head değiştirici ekle buraya

const Home = () => {
	return (
		<div className={styles.home}>
			<HomeHeader />
		</div>
	);
};

export default Home;
