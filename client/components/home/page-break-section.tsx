import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React from 'react';
import styles from '../../styles/components/home.page-break-section.module.scss';

const PageBreakSection = () => {
	return (
		<section className={styles.page_break_section}>
			<a href={'#features'} className={styles.page_break_section__content}>
				<span className={styles.page_break_section__content__text}>
					See what you can do with Google Forms
				</span>
				<ArrowBackIosIcon className={styles.page_break_section__content__svg} />
			</a>
			<img
				className={styles.page_break_section__background_image}
				src={'/background-image-1.png'}
				alt={'Google Forms Clone'}
			/>
		</section>
	);
};

export default PageBreakSection;
