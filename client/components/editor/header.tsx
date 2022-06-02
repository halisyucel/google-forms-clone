import React from 'react';
import styles from '../../styles/components/editor.header.module.scss';
import Tabs from './tabs';
import Toolbar from './toolbar';

const Header = () => {
	return (
		<header className={styles.header}>
			<Toolbar />
			<Tabs />
		</header>
	);
};

export default Header;
