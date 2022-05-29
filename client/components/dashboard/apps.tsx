import { Avatar, Divider, Paper } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import styles from '../../styles/components/dashboard.apps.module.scss';
import { listOfApps } from '../../utils/dashboard';
import { PopupProps } from '../../utils/types';

const Apps = (props: PopupProps) => {
	const credentials = useSelector((state: RootState) => state.credentials);
	return (
		<Paper
			elevation={2}
			className={styles.apps}
			style={{ display: props.isOpen ? 'block' : 'none' }}
		>
			<div className={styles.apps__list}>
				<a
					href={'/just-clone'}
					target={'_blank'}
					rel={'noopener noreferrer'}
					className={styles.apps__list__item}
				>
					<Avatar className={styles.apps__list__item__image}>
						{credentials.firstName.charAt(0).toUpperCase()}
					</Avatar>
					<span>Account</span>
				</a>
				{listOfApps.map((app, index) => (
					<a
						key={index}
						href={'/just-clone'}
						target={'_blank'}
						rel={'noopener noreferrer'}
						className={styles.apps__list__item}
					>
						<img
							className={styles.apps__list__item__image}
							src={app.image}
							alt={app.name}
						/>
						<span>{app.name}</span>
					</a>
				))}
			</div>
			<Divider />
			<a
				href={'https://workspace.google.com/marketplace'}
				target={'_blank'}
				rel={'noopener noreferrer'}
				className={styles.apps__others}
			>
				Other apps on the Google Workspace Marketplace
			</a>
		</Paper>
	);
};

export default Apps;
