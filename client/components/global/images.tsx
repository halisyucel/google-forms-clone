import { Divider } from '@mui/material';
import axios, { AxiosResponse } from 'axios';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Config from '../../config';
import { throwAlert, updateImages } from '../../redux/actions';
import { RootState } from '../../redux/store';
import imageStyles from '../../styles/components/global.image.module.scss';
import styles from '../../styles/components/global.images.module.scss';
import { defaultImages, Image as ImageObject } from '../../utils/images';
import AddImage from './add-image';
import Image from './image';

export interface ImagesProps {
	open: boolean;
}

const Images: React.FC<ImagesProps> = ({ open }) => {
	const dispatch = useDispatch();
	const { token } = useSelector((state: RootState) => state.credentials);
	const { backgroundColor } = useSelector((state: RootState) => state.form);
	const imageSelector = useSelector((state: RootState) => state.imageSelector);
	const [selectedImage, setSelectedImage] = useState<string | null>(null);
	const rows = useMemo<ImageObject[][]>(() => {
		const rowList: ImageObject[][] = [];
		for (let i = 0; i < imageSelector.images.length; i += 4) {
			rowList.push(imageSelector.images.slice(i, i + 4));
		}
		return rowList;
	}, [imageSelector.images]);
	const handleSelect = useCallback((url: string) => {
		setSelectedImage(url);
	}, []);
	useEffect(() => {
		if (!token) return;
		axios({
			method: 'GET',
			url: `${Config.API_URL}/assets`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then((res: AxiosResponse) => {
				dispatch(
					updateImages(
						res.data.map((image: any) => ({
							url: image.name,
						})),
					),
				);
			})
			.catch(() => {
				dispatch(
					throwAlert({
						message: 'Failed to fetch images',
						severity: 'error',
					}),
				);
			});
	}, [token]);
	useEffect(() => {
		setSelectedImage(null);
	}, [imageSelector.open]);
	return (
		<React.Fragment>
			<div style={{ display: open ? 'block' : 'none' }} className={styles.images}>
				<div className={styles.images__row}>
					{defaultImages.slice(0, 4).map((image, index) => (
						<Image
							key={index}
							isDefault={true}
							isSelected={selectedImage === image.url}
							onSelect={handleSelect}
							{...image}
						/>
					))}
				</div>
				<div className={styles.images__row}>
					{defaultImages.slice(4).map((image, index) => (
						<Image
							key={index}
							isDefault={true}
							isSelected={selectedImage === image.url}
							onSelect={handleSelect}
							{...image}
						/>
					))}
				</div>
				<Divider style={{ marginBottom: '14px' }} />
				{rows.map((row, index) => (
					<div key={index} className={styles.images__row}>
						{row.map((image, index) => (
							<Image
								key={index}
								isDefault={false}
								isSelected={selectedImage === image.url}
								onSelect={handleSelect}
								{...image}
							/>
						))}
					</div>
				))}
			</div>
			<AddImage
				open={open && selectedImage !== null}
				onClose={() => setSelectedImage(null)}
				onSubmit={() => selectedImage as string}
			/>
			<style
				dangerouslySetInnerHTML={{
					__html: `
						.${imageStyles.image}[aria-selected="true"] {
							border: 6px solid ${backgroundColor};
							border-radius: 8px;
						}
					`,
				}}
			/>
		</React.Fragment>
	);
};

export default Images;
