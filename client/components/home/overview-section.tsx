import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/components/home.overview-section.module.scss';

const OverviewSection = () => {
	const navigate = useNavigate();
	const [overviewSlideNumber, setOverviewSlideNumber] = useState<number>(1);
	useEffect(() => {
		const asyncFunc = async () => {
			const cursor = document.querySelector(
				`.${styles.overview__slide_show__cursor}`,
			) as HTMLElement;
			cursor.style.top = '75px';
			cursor.style.left = '400px';
			await new Promise((r) => setTimeout(r, 1500));
			cursor.style.opacity = '0';
			setOverviewSlideNumber(2);
			await new Promise((r) => setTimeout(r, 1500));
			setOverviewSlideNumber(3);
			await new Promise((r) => setTimeout(r, 1500));
			setOverviewSlideNumber(4);
			await new Promise((r) => setTimeout(r, 1500));
			setOverviewSlideNumber(5);
		};
		asyncFunc().catch(console.error);
	}, []);
	return (
		<section id={'overview'} className={styles.overview}>
			<div className={styles.overview__content}>
				<h2>Get insights quickly, with Google Forms</h2>
				<p>
					Easily create and share online forms and surveys, and analyze responses in
					real-time.
				</p>
				<div className={styles.overview__content__buttons}>
					<Button
						size={'large'}
						variant={'contained'}
						disableElevation={true}
						onClick={() => navigate('/dashboard')}
						className={styles.overview__content__buttons__button}
					>
						Try Forms for Work
					</Button>
					<Button
						size={'large'}
						variant={'outlined'}
						onClick={() => navigate('/dashboard')}
						className={styles.overview__content__buttons__button}
					>
						Go to Forms
					</Button>
				</div>
				<div className={styles.overview__content__sign_up}>
					<p>Don&apos;t have an account?</p>
					<Button
						size={'large'}
						onClick={() => navigate('/sign-up')}
						className={styles.overview__content__sign_up__button}
					>
						Sign up for free
					</Button>
				</div>
			</div>
			<div className={styles.overview__slide_show}>
				<img
					className={styles.overview__slide_show__image}
					src={`/overview-slide-${overviewSlideNumber}.png`}
					alt={'Google Forms Overview'}
				/>
				<img
					className={styles.overview__slide_show__cursor}
					src={'/overview-cursor.png'}
					alt={'Google Forms Overview'}
					style={{
						display: `${overviewSlideNumber === 1 ? 'block' : 'none'}`,
					}}
				/>
			</div>
		</section>
	);
};

export default OverviewSection;
