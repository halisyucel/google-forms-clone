import { Button, CircularProgress } from '@mui/material';
import axios from 'axios';
import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Config from '../../config';
import { throwAlert, updateImages } from '../../redux/actions';
import { RootState } from '../../redux/store';
import styles from '../../styles/components/global.upload-image.module.scss';
import AddImage from './add-image';

export interface UploadImageProps {
	open: boolean;
}

export type UploadImageSection = 'browse' | 'uploading' | 'uploaded';

const UploadImage: React.FC<UploadImageProps> = ({ open }) => {
	const dispatch = useDispatch();
	const form = useSelector((state: RootState) => state.form);
	const imageSelector = useSelector((state: RootState) => state.imageSelector);
	const credentials = useSelector((state: RootState) => state.credentials);
	const [section, setSection] = useState<UploadImageSection>('browse');
	const [uploadedImage, setUploadedImage] = useState<string | null>(null);
	const fileInputRef = useRef<HTMLInputElement>(null);
	const fileInputHandler = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			if (!(event.target.files && event.target.files.length > 0)) return;
			const file = event.target.files[0];
			if (file.size > 5242880) {
				dispatch(
					throwAlert({
						message: 'Image is too large',
						severity: 'error',
					}),
				);
				return;
			}
			setSection('uploading');
			const formData = new FormData();
			formData.append('file', file);
			axios({
				method: 'POST',
				url: `${Config.API_URL}/assets/upload`,
				headers: {
					'Content-Type': 'multipart/form-data',
					Authorization: `Bearer ${credentials.token}`,
				},
				data: formData,
			})
				.then((res) => {
					setSection('uploaded');
					setUploadedImage(res.data.name);
					dispatch(
						throwAlert({
							message: 'Image uploaded successfully',
							severity: 'success',
						}),
					);
					dispatch(
						updateImages(
							res.data.images.map((image: any) => ({
								url: image.name,
							})),
						),
					);
				})
				.catch(() => {
					setSection('browse');
					dispatch(
						throwAlert({
							message: 'Image upload failed',
							severity: 'error',
						}),
					);
				});
		},
		[credentials.token, dispatch],
	);
	const handleClose = useCallback(() => {
		setSection('browse');
		setUploadedImage(null);
	}, []);
	useEffect(() => {
		setSection('browse');
		setUploadedImage(null);
	}, [imageSelector.open]);
	return (
		<React.Fragment>
			<div style={{ display: open ? 'flex' : 'none' }} className={styles.upload_image}>
				<div
					style={{ display: section === 'browse' ? 'flex' : 'none' }}
					className={styles.upload_image__browse}
				>
					<input
						type={'file'}
						ref={fileInputRef}
						style={{ display: 'none' }}
						accept={'image/jpeg, image/png'}
						onChange={fileInputHandler}
					/>
					<img src={'/upload_background.png'} alt={'upload'} />
					<Button
						variant={'contained'}
						disableElevation={true}
						className={styles.upload_image__browse__button}
						onClick={() => fileInputRef.current?.click()}
					>
						Browse
					</Button>
					<span>or drag a file here</span>
				</div>
				<div
					style={{ display: section === 'uploading' ? 'flex' : 'none' }}
					className={styles.upload_image__uploading}
				>
					<CircularProgress color={'inherit'} />
				</div>
				<div
					style={{ display: section === 'uploaded' ? 'flex' : 'none' }}
					className={styles.upload_image__uploaded}
				>
					<div
						className={styles.upload_image__uploaded__image}
						style={{
							backgroundImage: `url(${Config.UPLOADS_URL}/${uploadedImage})`,
						}}
					/>
				</div>
			</div>
			<AddImage
				open={open && section === 'uploaded'}
				onClose={handleClose}
				onSubmit={() => uploadedImage as string}
			/>
			<style
				dangerouslySetInnerHTML={{
					__html: `
						.${styles.upload_image__browse__button} {
							background-color: ${form.themeColor} !important;
						}
						.${styles.upload_image__uploading} {
							color: ${form.themeColor} !important;
						}
					`,
				}}
			/>
		</React.Fragment>
	);
};

export default UploadImage;
