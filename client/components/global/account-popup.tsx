import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import {
	Avatar,
	Button,
	Chip,
	Dialog,
	DialogActions,
	DialogContent,
	Divider,
	Paper,
} from '@mui/material';
import axios from 'axios';
import lookie from 'lookie';
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Config from '../../config';
import { throwAlert, updateBackdrop } from '../../redux/actions';
import { RootState } from '../../redux/store';
import styles from '../../styles/components/global.account.module.scss';
import { PopupProps } from '../../utils/types';

// TODO: burayı hook'a al
// TODO: ayrıca bu elemanın görünürlük sorunu var

const AccountPopup = (props: PopupProps) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const credentials = useSelector((state: RootState) => state.credentials);
	const [openDialog, setOpenDialog] = useState<boolean>(false);
	const logout = useCallback(() => {
		lookie.remove('GOOGLE_FORMS_CLONE_CREDENTIALS');
		navigate('/', { replace: true });
	}, []);
	const deleteAccount = useCallback(() => {
		setOpenDialog(false);
		dispatch(updateBackdrop({ name: 'dashboard', status: true }));
		axios({
			method: 'DELETE',
			url: `${Config.API_URL}/user/`,
			headers: {
				Authorization: `Bearer ${credentials.token}`,
			},
		})
			.then(() => {
				logout();
			})
			.catch(() => {
				dispatch(
					throwAlert({
						message: 'Oops! Something went wrong.',
						severity: 'error',
					}),
				);
			})
			.finally(() => {
				dispatch(
					updateBackdrop({
						name: 'dashboard',
						status: false,
					}),
				);
			});
	}, [logout, credentials.token, dispatch]);
	return (
		<React.Fragment>
			<Paper
				elevation={2}
				className={styles.account_popup}
				style={{ display: props.isOpen ? 'block' : 'none' }}
			>
				<div className={styles.account_popup__manage}>
					<div className={styles.account_popup__manage__image}>
						<Avatar
							sx={{ width: 80, height: 80 }}
							style={{
								fontSize: '36px',
								fontWeight: '500',
							}}
						>
							{credentials.firstName.charAt(0).toUpperCase()}
						</Avatar>
						<span className={styles.account_popup__manage__image__new_photo}>
							<PhotoCameraIcon />
						</span>
					</div>
					<div className={styles.account_popup__manage__name}>
						{credentials.firstName + ' ' + credentials.lastName}
					</div>
					<div className={styles.account_popup__manage__username}>
						{credentials.username + '@gmail.com'}
					</div>
					<Chip
						className={styles.account_popup__manage__chip}
						variant={'outlined'}
						label={'Manage your Google Account'}
						clickable={true}
						component={'a'}
						href={'/just-clone'}
					/>
				</div>
				<Divider />
				<div className={styles.account_popup__button_area}>
					<button
						className={styles.account_popup__button_area__button}
						onClick={() => setOpenDialog(true)}
					>
						Delete account permanently
					</button>
				</div>
				<Divider />
				<div className={styles.account_popup__button_area}>
					<button className={styles.account_popup__button_area__button} onClick={logout}>
						Sign out of all accounts
					</button>
				</div>
				<Divider />
				<div className={styles.account_popup__links}>
					<Link to={'/just-clone'}>Privacy Policy</Link>
					&nbsp;&#8226;&nbsp;
					<Link to={'/just-clone'}>Terms of Service</Link>
				</div>
			</Paper>
			<Dialog
				open={openDialog}
				onClose={() => setOpenDialog(false)}
				className={styles.account_dialog}
			>
				<DialogContent className={styles.account_dialog__content}>
					Your account and data will be permanently deleted and cannot be restored. Are
					you sure?
				</DialogContent>
				<DialogActions className={styles.account_dialog__actions}>
					<Button
						className={styles.account_dialog__actions__button}
						onClick={() => setOpenDialog(false)}
					>
						Cancel
					</Button>
					<Button
						className={styles.account_dialog__actions__button}
						variant={'contained'}
						color={'secondary'}
						disableElevation={true}
						onClick={deleteAccount}
					>
						Yes, delete my account
					</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
};

export default AccountPopup;
