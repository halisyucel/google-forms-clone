import React from 'react';
import OverviewSection from './overview-section';
import styles from '../../styles/components/home.page-content.module.scss';
import PageBreakSection from './page-break-section';

const PageContent = () => {
	return (
		<div className={styles.page_content}>
			<OverviewSection />
			<PageBreakSection />
		</div>
	);
};

export default PageContent;
