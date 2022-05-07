import React from 'react';
import { Card, LinearProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { GoogleGlobalLayoutProps } from '../lib/types';
import styles from '../styles/components/google-global-layout.module.scss';

const GoogleGlobalLayout = (props: GoogleGlobalLayoutProps) => {
	return (
		<div className={styles.google_global_layout}>
			<div className={`${styles.google_global_layout__container} ${props.containerClassName}`.trim()}>
				<Card className={styles.google_global_layout__card} variant={'outlined'}>
					<LinearProgress
						className={styles.google_global_layout__card__linear_progress}
						style={{ display: props.loading ? 'block' : 'none' }}
					/>
					<div
						className={styles.google_global_layout__card__loading_screen}
						style={{ display: props.loading ? 'block' : 'none' }}
					/>
					{props.children}
				</Card>
				<div className={styles.google_global_layout__footer}>
					<div style={{ flex: '1' }} />
					<Link to={'/just-clone'} className={styles.google_global_layout__footer__button}>
						Help
					</Link>
					<Link to={'/just-clone'} className={styles.google_global_layout__footer__button}>
						Privacy
					</Link>
					<Link to={'/just-clone'} className={styles.google_global_layout__footer__button}>
						Terms
					</Link>
				</div>
			</div>
		</div>
	);
};

export default GoogleGlobalLayout;
