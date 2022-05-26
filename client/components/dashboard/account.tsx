import React, { useState, useCallback } from 'react';
import {
	Avatar, Backdrop,
	Button,
	Chip, CircularProgress,
	Dialog,
	DialogActions,
	DialogContent,
	Divider,
	Paper,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PopupProps } from '../../utils/types';
import { RootState } from '../../redux/store';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Config from '../../config';
import styles from '../../styles/components/dashboard.account.module.scss';
import lookie from 'lookie';
import axios from 'axios';

const Account = (props: PopupProps) => {
	const navigate = useNavigate();
	const credentials = useSelector((state: RootState) => state.credentials);
	const [openDialog, setOpenDialog] = useState<boolean>(false);
	const [openProgress, setOpenProgress] = useState<boolean>(false);
	const logout = useCallback(() => {
		lookie.remove('GOOGLE_FORMS_CLONE_CREDENTIALS');
		navigate('/', { replace: true });
	}, []);
	const deleteAccount = useCallback(() => {
		setOpenDialog(false);
		setOpenProgress(true);
		axios({
			method: 'DELETE',
			url: `${Config.API_URL}/user/`,
			headers: {
				Authorization: `Bearer ${credentials.token}`
			}
		})
			.then(() => {
				logout();
				setOpenProgress(false);
			})
			.catch(err => {
				setOpenProgress(false);
				console.error(err); // todo - add snackbar
			});
	}, [
		logout,
		credentials.token
	]);
	return (
		<>
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
				<div className={styles.account__button_area}>
					<button
						className={styles.account__button_area__button}
						onClick={() => setOpenDialog(true)}
					>
						Delete account permanently
					</button>
				</div>
				<Divider />
				<div className={styles.account__button_area}>
					<button
						className={styles.account__button_area__button}
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
			<Dialog
				open={openDialog}
				onClose={() => setOpenDialog(false)}
				className={styles.dialog}
			>
				<DialogContent
					className={styles.dialog_content}
				>
					Your account and data will be permanently deleted and cannot be restored. Are you sure?
				</DialogContent>
				<DialogActions
					className={styles.dialog__actions}
				>
					<Button
						className={styles.dialog__actions__button}
						onClick={() => setOpenDialog(false)}
					>
						Cancel
					</Button>
					<Button
						className={styles.dialog__actions__button}
						variant={'contained'}
						color={'secondary'}
						disableElevation={true}
						onClick={deleteAccount}
					>
						Yes, delete my account
					</Button>
				</DialogActions>
			</Dialog>
			<Backdrop
				sx={{ color: '#fff', zIndex: '110' }}
				open={openProgress}
			>
				<CircularProgress color={'inherit'} />
			</Backdrop>
		</>
	);
};

export default Account;
