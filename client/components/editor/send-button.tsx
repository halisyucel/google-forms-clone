import CloseIcon from '@mui/icons-material/Close';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	IconButton,
} from '@mui/material';
import React, { useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { throwAlert } from '../../redux/features/snackbarSlice';
import { RootState } from '../../redux/store';
import styles from '../../styles/components/editor.send-button.module.scss';

const SendButton = () => {
	const dispatch = useDispatch();
	const form = useSelector((state: RootState) => state.form);
	const linkInput = useRef<HTMLInputElement>(null);
	const formUrl = useMemo(() => {
		if (!form.id) return '';
		return `${window.location.origin}/form/${form.id}`;
	}, [form.id]);
	const [dialogIsOpen, setDialogIsOpen] = useState(false);
	return (
		<React.Fragment>
			<Button className={styles.send_button} onClick={() => setDialogIsOpen(true)}>
				Send
			</Button>
			<Dialog
				open={dialogIsOpen}
				onClose={() => setDialogIsOpen(false)}
				className={styles.send_dialog}
			>
				<DialogTitle className={styles.send_dialog__title}>
					<span>Send form</span>
					<IconButton
						style={{ marginRight: '-8px' }}
						onClick={() => setDialogIsOpen(false)}
					>
						<CloseIcon />
					</IconButton>
				</DialogTitle>
				<DialogContent className={styles.send_dialog__content}>
					<div className={styles.send_dialog__content__tools}>
						<div className={styles.send_dialog__content__tools__text}>
							Copy the link
						</div>
						<div style={{ flex: '1' }} />
						<a
							href={`https://www.facebook.com/sharer/sharer.php?u=${formUrl}`}
							target={'_blank'}
							rel={'noopener noreferrer'}
						>
							<IconButton>
								<FacebookIcon />
							</IconButton>
						</a>
						<a
							href={`https://twitter.com/share?url=${formUrl}`}
							target={'_blank'}
							rel={'noopener noreferrer'}
						>
							<IconButton>
								<TwitterIcon />
							</IconButton>
						</a>
					</div>
					<div className={styles.send_dialog__content__link}>
						<input
							ref={linkInput}
							value={`${window.location.origin}/form/${form.id}`}
							onClick={() => linkInput.current?.select()}
						/>
					</div>
				</DialogContent>
				<DialogActions className={styles.send_dialog__actions}>
					<Button
						className={styles.send_dialog__actions__button}
						onClick={() => setDialogIsOpen(false)}
					>
						Cancel
					</Button>
					<Button
						className={styles.send_dialog__actions__button}
						variant={'outlined'}
						onClick={() => {
							navigator.clipboard
								.writeText(formUrl)
								.then(() => {
									dispatch(
										throwAlert({
											message: 'Link copied to clipboard',
											severity: 'success',
										}),
									);
								})
								.catch(() => {
									dispatch(
										throwAlert({
											message: 'Failed to copy link to clipboard',
											severity: 'error',
										}),
									);
								});
						}}
					>
						Copy
					</Button>
				</DialogActions>
			</Dialog>
			<style
				dangerouslySetInnerHTML={{
					__html: `
					.${styles.send_button} {
						color: var(--color-white) !important;
						background-color: ${form.themeColor} !important;
					}
					.${styles.send_dialog__content__link} {
						background-color: ${form.backgroundColor};
					}
					.${styles.send_dialog__actions__button}:nth-child(1) {
						color: var(--color-gray-primary) !important;
						margin-right: 8px;
					}
					.${styles.send_dialog__actions__button}:nth-child(2) {
						color: ${form.themeColor} !important;
						border: 2px solid ${form.themeColor} !important;
					}`,
				}}
			/>
		</React.Fragment>
	);
};

export default SendButton;
