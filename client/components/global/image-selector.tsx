import CloseIcon from '@mui/icons-material/Close';
import { IconButton, LinearProgress } from '@mui/material';
import React, { MouseEvent, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeImageSelector } from '../../redux/features/imageSelectorSlice';
import { RootState } from '../../redux/store';
import styles from '../../styles/components/global.image-selector.module.scss';
import Images from './images';
import UploadImage from './upload-image';

const ImageSelector = () => {
	const dispatch = useDispatch();
	const form = useSelector((state: RootState) => state.form);
	const imageSelector = useSelector((state: RootState) => state.imageSelector);
	const [tabValue, setTabValue] = useState<string>('images');
	const handleClick = useCallback(
		(event: MouseEvent<HTMLDivElement>) => {
			if (event.target !== event.currentTarget) return;
			dispatch(closeImageSelector());
		},
		[dispatch],
	);
	const handleClose = useCallback(() => {
		dispatch(closeImageSelector());
	}, [dispatch]);
	useEffect(() => {
		setTabValue('images');
	}, [imageSelector.open]);
	return (
		<React.Fragment>
			<div
				onClick={handleClick}
				className={styles.image_selector}
				style={{
					display: imageSelector.open ? 'flex' : 'none',
				}}
			>
				<div className={styles.image_selector__popup}>
					<div className={styles.image_selector__popup__header}>
						<div className={styles.image_selector__popup__header__title}>
							<h4>{imageSelector.headerText}</h4>
							<IconButton onClick={handleClose}>
								<CloseIcon />
							</IconButton>
						</div>
						<div className={styles.image_selector__popup__header__tabs}>
							<div
								className={styles.image_selector__popup__header__tabs__tab}
								aria-checked={tabValue === 'images'}
								onClick={() => setTabValue('images')}
							>
								IMAGES
							</div>
							<div
								className={styles.image_selector__popup__header__tabs__tab}
								aria-checked={tabValue === 'upload'}
								onClick={() => setTabValue('upload')}
							>
								UPLOAD
							</div>
							<span
								className={styles.image_selector__popup__header__tabs__cursor}
								style={{
									left: tabValue === 'images' ? '0' : '80px',
									backgroundColor: form.themeColor,
								}}
							/>
						</div>
					</div>
					<div className={styles.image_selector__popup__body}>
						<Images open={tabValue === 'images'} />
						<UploadImage open={tabValue === 'upload'} />
					</div>
					<LinearProgress
						className={styles.image_selector__popup__loading_bar}
						style={{ display: imageSelector.loading ? 'block' : 'none' }}
					/>
				</div>
			</div>
			<style
				dangerouslySetInnerHTML={{
					__html: `
						.${styles.image_selector__popup__loading_bar} {
							background-color: ${form.backgroundColor};
						}
						.${styles.image_selector__popup__loading_bar} > span {
							background-color: ${form.themeColor};
						}
						.${styles.image_selector__popup__header__tabs__tab}:hover {
							background-color: ${form.backgroundColor};
						}
					`,
				}}
			/>
		</React.Fragment>
	);
};

export default ImageSelector;
