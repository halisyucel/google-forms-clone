import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import styles from '../../styles/components/editor.dynamic-zone.module.scss';

const DynamicZone: React.FC = () => {
	const form = useSelector((state: RootState) => state.form);
	return (
		<div
			className={styles.dynamic_zone}
			style={{
				backgroundColor: form.backgroundColor,
			}}
		/>
	);
};

export default DynamicZone;
