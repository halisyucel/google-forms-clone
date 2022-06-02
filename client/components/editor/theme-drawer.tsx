import CloseIcon from '@mui/icons-material/Close';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import { Divider, IconButton } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import styles from '../../styles/components/editor.theme-drawer.module.scss';
import BackgroundColor from './background-color';
import ChooseFont from './choose-font';
import ChooseImage from './choose-image';
import ThemeColor from './theme-color';

export interface ThemeDrawerProps {
	open: boolean;
	onClose: () => void;
}

const ThemeDrawer: React.FC<ThemeDrawerProps> = ({ open, onClose }) => {
	const form = useSelector((state: RootState) => state.form);
	return (
		<div
			className={styles.theme_drawer}
			style={{
				right: open ? '0' : '-320px',
			}}
		>
			<div className={styles.theme_drawer__header}>
				<PaletteOutlinedIcon style={{ color: form.themeColor }} />
				<h3>Theme options</h3>
				<IconButton onClick={onClose}>
					<CloseIcon />
				</IconButton>
			</div>
			<ChooseImage />
			<Divider />
			<ThemeColor />
			<Divider />
			<BackgroundColor />
			<Divider />
			<ChooseFont />
		</div>
	);
};

export default ThemeDrawer;
