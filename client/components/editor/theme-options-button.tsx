import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import { IconButton, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import styles from '../../styles/components/editor.theme-options-button.module.scss';
import ThemeDrawer from './theme-drawer';

const ThemeOptionsButton = () => {
	const [themeDrawerIsOpen, setThemeDrawerIsOpen] = useState<boolean>(false);
	return (
		<React.Fragment>
			<Tooltip title={'Customize Theme'}>
				<IconButton
					size={'large'}
					className={styles.theme_options_button}
					onClick={() => setThemeDrawerIsOpen(!themeDrawerIsOpen)}
				>
					<PaletteOutlinedIcon />
				</IconButton>
			</Tooltip>
			<ThemeDrawer open={themeDrawerIsOpen} onClose={() => setThemeDrawerIsOpen(false)} />
		</React.Fragment>
	);
};

export default ThemeOptionsButton;
