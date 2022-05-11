import React from 'react';
import styles from '../../styles/components/home.templates-section.module.scss';
import {Link} from 'react-router-dom';

const TemplatesSection = () => {
	return (
		<section className={styles.templates__section}>
			<div className={styles.templates__section__head}>
				<h2>Get a head start with templates</h2>
				<h3>Choose from a variety of surveys, questionnaires, and other professionally-designed templates to kick things off quickly.</h3>
			</div>
			<div className={styles.templates__section__templates}>
				<div className={styles.templates__section__templates__template}>
					<h3>Orders</h3>
					<img src={'/templates-orders.jpg'} alt={'Form Template Orders'}/>
				</div>
				<div className={styles.templates__section__templates__template}>
					<h3>Registration</h3>
					<img src={'/templates-registration.jpg'} alt={'Form Template Registration'}/>
				</div>
				<div className={styles.templates__section__templates__template}>
					<h3>Feedback</h3>
					<img src={'/templates-feedback.jpg'} alt={'Form Template Feedback'}/>
				</div>
				<div className={styles.templates__section__templates__template}>
					<h3>Assessment</h3>
					<img src={'/templates-assessment.jpg'} alt={'Form Template Assessment'}/>
				</div>
			</div>
			<p className={styles.templates__section__visit_link}>
				Visit the&nbsp;<Link to={'/just-clone'}>Forms Template Gallery</Link>&nbsp;for more.
			</p>
		</section>
	);
};

export default TemplatesSection;
