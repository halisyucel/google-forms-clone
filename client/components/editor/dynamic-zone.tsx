import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import styles from '../../styles/components/editor.dynamic-zone.module.scss';
import Questions from './questions';

const DynamicZone = () => {
	const { backgroundColor } = useSelector((state: RootState) => state.form);
	const { tabsValue } = useSelector((state: RootState) => state.editor);
	return (
		<div className={styles.dynamic_zone} style={{ backgroundColor }}>
			<Questions open={tabsValue === 'questions'} />
		</div>
	);
};

export default DynamicZone;
