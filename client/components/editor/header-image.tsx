import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useSelector } from 'react-redux';
import Config from '../../config';
import { RootState } from '../../redux/store';
import styles from '../../styles/components/editor.header-image.module.scss';

const HeaderImage = () => {
	const { headerImage } = useSelector((state: RootState) => state.form);
	return headerImage ? (
		<div className={styles.header_image}>
			<div className={styles.header_image__wrapper}>
				<LazyLoadImage
					src={`${Config.UPLOADS_URL}/${headerImage}`}
					alt={'header image'}
					width={'100%'}
				/>
			</div>
		</div>
	) : null;
};

export default HeaderImage;
