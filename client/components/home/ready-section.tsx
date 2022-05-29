import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/components/home.ready-section.module.scss';

const ReadySection = () => {
	const navigate = useNavigate();
	return (
		<section className={styles.ready_section}>
			<h2>Ready to get started?</h2>
			<div className={styles.ready_section__buttons}>
				<Button
					size={'large'}
					variant={'contained'}
					disableElevation={true}
					onClick={() => navigate('/dashboard')}
					className={styles.ready_section__buttons__button}
				>
					Try Forms for Work
				</Button>
				<Button
					size={'large'}
					variant={'outlined'}
					onClick={() => navigate('/dashboard')}
					className={styles.ready_section__buttons__button}
				>
					Go to Forms
				</Button>
			</div>
			<img
				className={styles.ready_section__background_image}
				src={'/background-image-4.png'}
				alt={'Google Forms Clone'}
			/>
		</section>
	);
};

export default ReadySection;
