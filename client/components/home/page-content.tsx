import React from 'react';
import OverviewSection from './overview-section';
import PageBreakSection from './page-break-section';
import FeaturesSection from './features-section';
import styles from '../../styles/components/home.page-content.module.scss';

const PageContent = () => {
	return (
		<div className={styles.page_content}>
			<OverviewSection />
			<PageBreakSection />
			<FeaturesSection />
		</div>
	);
};

export default PageContent;
