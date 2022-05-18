import React, {useCallback} from 'react';
import { Avatar, Chip, Divider, Paper } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PopupProps } from '../../utils/types';
import { RootState } from '../../redux/store';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import styles from '../../styles/components/dashboard.account.module.scss';
import lookie from 'lookie';

const Account = (props: PopupProps) => {
	const navigate = useNavigate();
	const credentials = useSelector((state: RootState) => state.credentials);
	const logout = useCallback(() => {
		lookie.remove('GOOGLE_FORMS_CLONE_CREDENTIALS');
		navigate('/', { replace: true });
	}, []);
	return (
		<Paper
			elevation={2}
			className={styles.account}
			style={{ display: props.isOpen ? 'block' : 'none' }}
		>
			<div className={styles.account__manage}>
				<div className={styles.account__manage__image}>
					<Avatar
						sx={{ width: 80, height: 80 }}
						style={{
							fontSize: '36px',
							fontWeight: '500'
						}}
					>
						{credentials.firstName.charAt(0).toUpperCase()}
					</Avatar>
					<span className={styles.account__manage__image__new_photo}>
						<PhotoCameraIcon />
					</span>
				</div>
				<div className={styles.account__manage__name}>
					{credentials.firstName + ' ' + credentials.lastName}
				</div>
				<div className={styles.account__manage__username}>
					{credentials.username + '@gmail.com'}
				</div>
				<Chip
					className={styles.account__manage__chip}
					variant={'outlined'}
					label={'Manage your Google Account'}
					clickable={true}
					component={'a'}
					href={'/just-clone'}
				/>
			</div>
			<Divider />
			<div className={styles.account__sign_out}>
				<button
					className={styles.account__sign_out__button}
					onClick={logout}
				>
					Sign out of all accounts
				</button>
			</div>
			<Divider />
			<div className={styles.account__links}>
				<Link to={'/just-clone'}>
					Privacy Policy
				</Link>
				&nbsp;&#8226;&nbsp;
				<Link to={'/just-clone'}>
					Terms of Service
				</Link>
			</div>
		</Paper>
	);
};

export default Account;
