import CloseIcon from '@mui/icons-material/Close';
import { Button, IconButton } from '@mui/material';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeImageSelector, updateSelectedImage } from '../../redux/features/imageSelectorSlice';
import { RootState } from '../../redux/store';
import styles from '../../styles/components/global.add-image.module.scss';

export interface AddImageProps {
	open: boolean;
	onClose: () => void;
	onSubmit: () => string;
}

const AddImage: React.FC<AddImageProps> = ({ open, onClose, onSubmit }) => {
	const dispatch = useDispatch();
	const form = useSelector((state: RootState) => state.form);
	const handleSubmit = useCallback(() => {
		const url = onSubmit();
		dispatch(updateSelectedImage(url));
		dispatch(closeImageSelector());
	}, [dispatch, onSubmit]);
	return (
		<React.Fragment>
			<div
				className={styles.add_image}
				style={{
					backgroundColor: form.backgroundColor,
					display: open ? 'flex' : 'none',
				}}
			>
				<IconButton onClick={() => onClose()}>
					<CloseIcon />
				</IconButton>
				<Button
					variant={'contained'}
					disableElevation={true}
					className={styles.add_image__button}
					size={'small'}
					onClick={handleSubmit}
				>
					Add
				</Button>
			</div>
			<style
				dangerouslySetInnerHTML={{
					__html: `
						.${styles.add_image__button} {
							background-color: ${form.themeColor} !important;
						}
					`,
				}}
			/>
		</React.Fragment>
	);
};

export default AddImage;
