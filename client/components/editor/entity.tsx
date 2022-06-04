import { Paper } from '@mui/material';
import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateEditor } from '../../redux/features/editorSlice';
import { RootState } from '../../redux/store';
import styles from '../../styles/components/editor.entity.module.scss';

export interface EntityProps {
	id: string;
	children: React.ReactNode;
	title?: boolean;
}

const Entity: React.FC<EntityProps> = ({ id, children, title = false }) => {
	const dispatch = useDispatch();
	const { selectedEntityId } = useSelector((state: RootState) => state.editor);
	const { themeColor } = useSelector((state: RootState) => state.form);
	const selected = useMemo(() => selectedEntityId === id, [selectedEntityId, id]);
	const handleClick = useCallback(() => {
		if (selected) return;
		dispatch(
			updateEditor({
				key: 'selectedEntityId',
				value: id,
			}),
		);
	}, [dispatch, id, selected]);
	return (
		<Paper
			elevation={0}
			variant={'outlined'}
			className={styles.entity}
			onClick={handleClick}
			style={title ? { borderTop: 'none' } : {}}
		>
			<span className={styles.entity__cursor} style={{ opacity: selected ? '1' : '0' }} />
			{title && (
				<span
					style={{ backgroundColor: themeColor }}
					className={styles.entity__title_line}
				/>
			)}
			{children}
		</Paper>
	);
};

export default Entity;
