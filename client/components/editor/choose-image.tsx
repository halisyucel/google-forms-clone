import CloseIcon from '@mui/icons-material/Close';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useUpdateForm from '../../hooks/useUpdateForm';
import { openImageSelector } from '../../redux/actions';
import { RootState } from '../../redux/store';
import styles from '../../styles/components/editor.choose-image.module.scss';

const ChooseImage = () => {
	const dispatch = useDispatch();
	const updateForm = useUpdateForm();
	const { headerImage } = useSelector((state: RootState) => state.form);
	const { ref, selectedImage } = useSelector((state: RootState) => state.imageSelector);
	const closeButtonRef = useRef<HTMLSpanElement>(null);
	const handleClick = useCallback(() => {
		dispatch(
			openImageSelector({
				ref: 'header-image',
				headerText: 'Choose Image',
			}),
		);
	}, [dispatch]);
	const handleRemove = useCallback(() => {
		updateForm({
			key: 'headerImage',
			value: null,
		});
	}, [updateForm]);
	useEffect(() => {
		if (ref === 'header-image' && selectedImage) {
			updateForm({
				key: 'headerImage',
				value: selectedImage,
			});
		}
	}, [ref, selectedImage, headerImage]);
	return (
		<section className={styles.choose_image}>
			<h5>Header</h5>
			<button
				className={`${styles.choose_image__button} ${
					headerImage !== null ? styles.choose_image__button__success : ''
				}`.trim()}
			>
				<ImageOutlinedIcon className={styles.choose_image__button__image_icon} />
				<span>{headerImage !== null ? 'Image Uploaded' : 'Choose an Image'}</span>
				<span
					ref={closeButtonRef}
					className={styles.choose_image__button__close_icon}
					style={{
						display: headerImage !== null ? 'inline-flex' : 'none',
					}}
					onClick={handleRemove}
				>
					<CloseIcon />
				</span>
				<span onClick={handleClick} className={styles.choose_image__button__ghost} />
			</button>
		</section>
	);
};

export default ChooseImage;
