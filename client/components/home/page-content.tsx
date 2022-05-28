import React from 'react';
import styles from '../../styles/components/home.page-content.module.scss';
import FeaturesSection from './features-section';
import OverviewSection from './overview-section';
import PageBreakSection from './page-break-section';
import PricingSection from './pricing-section';
import ReadySection from './ready-section';
import SecuritySection from './security-section';
import TemplatesSection from './templates-section';

const PageContent = () => {
    return (
        <div className={styles.page_content}>
            <OverviewSection />
            <PageBreakSection />
            <FeaturesSection />
            <SecuritySection />
            <PricingSection />
            <TemplatesSection />
            <ReadySection />
        </div>
    );
};

export default PageContent;
