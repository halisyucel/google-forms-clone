import DeleteIcon from '@mui/icons-material/Delete';
import SourceIcon from '@mui/icons-material/Source';
import { IconButton } from '@mui/material';
import axios, { AxiosResponse } from 'axios';
import React, { MouseEvent, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Config from '../../config';
import { throwAlert, updateImages, updateLoading } from '../../redux/actions';
import { RootState } from '../../redux/store';
import styles from '../../styles/components/global.image.module.scss';

export interface ImageProps {
	url: string;
	isSelected: boolean;
	onSelect: (url: string) => void;
	src?: string;
	isDefault?: boolean;
}

const Image: React.FC<ImageProps> = ({ url, isSelected, onSelect, src, isDefault = false }) => {
	const dispatch = useDispatch();
	const credentials = useSelector((state: RootState) => state.credentials);
	const [deleteButtonIsDisabled, setDeleteButtonIsDisabled] = useState<boolean>(false);
	const handleSelect = useCallback(
		(event: MouseEvent<HTMLDivElement>) => {
			if (event.target !== event.currentTarget) return;
			onSelect(url);
		},
		[onSelect, url],
	);
	const handleDelete = useCallback(() => {
		if (deleteButtonIsDisabled) return;
		if (!credentials.token) return;
		dispatch(updateLoading(true));
		setDeleteButtonIsDisabled(true);
		axios({
			method: 'DELETE',
			url: `${Config.API_URL}/assets`,
			headers: {
				Authorization: `Bearer ${credentials.token}`,
			},
			data: {
				name: url,
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
				dispatch(
					throwAlert({
						message: 'Image deleted',
						severity: 'success',
					}),
				);
			})
			.catch(() => {
				dispatch(
					throwAlert({
						message: 'Image delete failed',
						severity: 'error',
					}),
				);
			})
			.finally(() => {
				dispatch(updateLoading(false));
				setDeleteButtonIsDisabled(false);
			});
	}, [dispatch, credentials.token, url, deleteButtonIsDisabled]);
	return (
		<div
			key={url}
			className={styles.image}
			style={{
				backgroundImage: `url(${Config.UPLOADS_URL}/${url})`,
			}}
			onClick={handleSelect}
			aria-selected={isSelected}
		>
			{isDefault ? (
				<a href={src} target={'_blank'} rel={'noopener noreferrer'}>
					<IconButton size={'small'}>
						<SourceIcon />
					</IconButton>
				</a>
			) : (
				<a aria-disabled={deleteButtonIsDisabled} onClick={handleDelete}>
					<IconButton size={'small'}>
						<DeleteIcon />
					</IconButton>
				</a>
			)}
		</div>
	);
};

export default Image;
