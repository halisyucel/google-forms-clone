import React from 'react';
import { useSelector } from 'react-redux';
import Config from '../../config';
import { RootState } from '../../redux/store';
import styles from '../../styles/components/editor.header-image.module.scss';

const HeaderImage = () => {
	const form = useSelector((state: RootState) => state.form);
	return (
		<div
			className={styles.header_image}
			style={{
				display: form.headerImage ? 'block' : 'none',
				backgroundImage: `url(${Config.UPLOADS_URL}/${form.headerImage})`,
			}}
		/>
	);
};

export default HeaderImage;
