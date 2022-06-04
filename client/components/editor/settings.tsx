import { Button, Divider, Paper, Switch, TextField } from '@mui/material';
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useUpdateForm from '../../hooks/useUpdateForm';
import { RootState } from '../../redux/store';
import styles from '../../styles/components/editor.settings.module.scss';

export interface SettingsProps {
	open: boolean;
}

const Settings: React.FC<SettingsProps> = ({ open }) => {
	const updateForm = useUpdateForm();
	const {
		shuffleTheOrderOfTheQuestions,
		showProgressBar,
		showLinkToPostAnotherReply,
		confirmationMessage,
	} = useSelector((state: RootState) => state.form);
	const [isEditConfirmationMessage, setIsEditConfirmationMessage] = useState<boolean>(false);
	const [confirmationMessageValue, setConfirmationMessageValue] =
		useState<string>(confirmationMessage);
	useEffect(() => {
		setConfirmationMessageValue(confirmationMessage);
	}, [confirmationMessage]);
	const handleChangeConfirmationMessage = (event: ChangeEvent<HTMLInputElement>) => {
		setConfirmationMessageValue(event.target.value);
	};
	const handleCancelConfirmationMessage = useCallback(() => {
		setIsEditConfirmationMessage(false);
		setConfirmationMessageValue(confirmationMessage);
	}, [confirmationMessage]);
	const handleSaveConfirmationMessage = useCallback(() => {
		setIsEditConfirmationMessage(false);
		if (!confirmationMessageValue.trim()) {
			setConfirmationMessageValue(confirmationMessage);
			return;
		}
		updateForm({
			key: 'confirmationMessage',
			value: confirmationMessageValue,
		});
	}, [confirmationMessage, confirmationMessageValue, updateForm]);
	const handleKeyPressConfirmationMessage = useCallback(
		(event: React.KeyboardEvent<HTMLInputElement>) => {
			if (event.key === 'Enter') {
				handleSaveConfirmationMessage();
			}
		},
		[handleSaveConfirmationMessage],
	);
	useEffect(() => {
		if (!open) handleCancelConfirmationMessage();
	}, [open, handleCancelConfirmationMessage]);
	return (
		<Paper
			elevation={0}
			variant={'outlined'}
			className={styles.settings}
			sx={{
				display: open ? 'block' : 'none',
			}}
		>
			<h2>Settings</h2>
			<Divider className={styles.settings__divider} />
			<div className={styles.settings__item}>
				<div className={styles.settings__item__text}>
					<div className={styles.settings__item__text__main}>
						Shuffle the order of the questions
					</div>
				</div>
				<Switch
					checked={shuffleTheOrderOfTheQuestions}
					onChange={() =>
						updateForm({
							key: 'shuffleTheOrderOfTheQuestions',
							value: !shuffleTheOrderOfTheQuestions,
						})
					}
				/>
			</div>
			<div className={styles.settings__item}>
				<div className={styles.settings__item__text}>
					<div className={styles.settings__item__text__main}>Show progress bar</div>
				</div>
				<Switch
					checked={showProgressBar}
					onChange={() =>
						updateForm({
							key: 'showProgressBar',
							value: !showProgressBar,
						})
					}
				/>
			</div>
			<div className={styles.settings__item}>
				<div className={styles.settings__item__text}>
					<div className={styles.settings__item__text__main}>
						Show link to post another reply
					</div>
				</div>
				<Switch
					checked={showLinkToPostAnotherReply}
					onChange={() =>
						updateForm({
							key: 'showLinkToPostAnotherReply',
							value: !showLinkToPostAnotherReply,
						})
					}
				/>
			</div>
			<div className={styles.settings__item}>
				<div className={styles.settings__item__text}>
					<div
						style={{ display: isEditConfirmationMessage ? 'none' : 'block' }}
						className={styles.settings__item__text__main}
					>
						Confirmation message
					</div>
					<div
						style={{ display: isEditConfirmationMessage ? 'none' : 'block' }}
						className={styles.settings__item__text__sub}
					>
						{confirmationMessage}
					</div>
					<TextField
						sx={{
							display: isEditConfirmationMessage ? 'flex' : 'none',
							width: '400px',
						}}
						label={'Confirmation message'}
						size={'small'}
						value={confirmationMessageValue}
						spellCheck={false}
						autoComplete={'off'}
						onChange={handleChangeConfirmationMessage}
						onKeyPress={handleKeyPressConfirmationMessage}
					/>
				</div>
				<div style={{ flex: '1' }} />
				<Button
					style={{ display: isEditConfirmationMessage ? 'none' : 'block' }}
					className={styles.settings__item__button}
					onClick={() => setIsEditConfirmationMessage(true)}
				>
					Edit
				</Button>
				<Button
					style={{ display: isEditConfirmationMessage ? 'block' : 'none' }}
					className={styles.settings__item__button}
					onClick={handleSaveConfirmationMessage}
				>
					Save
				</Button>
				<Button
					style={{ display: isEditConfirmationMessage ? 'block' : 'none' }}
					className={`${styles.settings__item__button} ${styles.settings__item__button__cancel}`}
					onClick={handleCancelConfirmationMessage}
				>
					Cancel
				</Button>
			</div>
		</Paper>
	);
};

export default Settings;
