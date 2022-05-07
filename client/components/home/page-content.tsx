import React from 'react';
import OverviewSection from './overview-section';
import styles from '../../styles/components/home.page-content.module.scss';

const PageContent = () => {
	return (
		<div className={styles.page_content}>
			<OverviewSection />
		</div>
	);
};

export default PageContent;
