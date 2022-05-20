import React from 'react';
import styles from '../../styles/components/dashboard.templates.module.scss';
import { IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Templates = () => {
	const settings = useSelector((state: RootState) => state.settings);
	return (
		<React.Fragment>
			<div
				className={styles.templates}
				style={{ display: settings.showRecentlyUsedTemplates ? 'flex' : 'none' }}
			>
				<div className={styles.templates__toolbar}>
					<div className={styles.templates__toolbar__title}>Start preparing a new form</div>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>
				<div className={styles.templates__items}>
					<div className={styles.templates__items__item}>
						<div
							className={styles.templates__items__item__image}
							style={{ backgroundImage: 'url(/template-empty.png)' }}
						/>
						<div className={styles.templates__items__item__title}>
							Empty
						</div>
					</div>
					<div className={styles.templates__items__item}>
						<div
							className={styles.templates__items__item__image}
						/>
						<div className={styles.templates__items__item__title}>
							Event RSVP Form
						</div>
					</div>
					<div className={styles.templates__items__item}>
						<div
							className={styles.templates__items__item__image}
						/>
						<div className={styles.templates__items__item__title}>
							T-Shirt Request Form
						</div>
					</div>
					<div className={styles.templates__items__item}>
						<div
							className={styles.templates__items__item__image}
						/>
						<div className={styles.templates__items__item__title}>
							Contact Information
						</div>
					</div>
					<div className={styles.templates__items__item}>
						<div
							className={styles.templates__items__item__image}
						/>
						<div className={styles.templates__items__item__title}>
							Party Invitation
						</div>
					</div>
					<div className={styles.templates__items__item}>
						<div
							className={styles.templates__items__item__image}
						/>
						<div className={styles.templates__items__item__title}>
							Event Registration Form
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Templates;
