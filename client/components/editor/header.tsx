import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { IconButton, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/components/editor.header.module.scss';
import Account from '../global/account';
import SendButton from './send-button';
import Title from './title';

const Header = () => {
	const [accountIsOpen, setAccountIsOpen] = useState(false);
	return (
		<header className={styles.header}>
			<Link
				to={'/dashboard'}
				className={`${styles.header__button} ${styles.header__button__logo}`}
			>
				<IconButton>
					<img src={'/forms-brand.svg'} alt={'Google Forms Clone'} />
				</IconButton>
			</Link>
			<Title />
			<div style={{ flex: '1' }} />
			<Tooltip title={'Customize Theme'}>
				<IconButton size={'large'} className={styles.header__button}>
					<PaletteOutlinedIcon />
				</IconButton>
			</Tooltip>
			<Tooltip title={'Preview'}>
				<IconButton size={'large'} className={styles.header__button}>
					<RemoveRedEyeOutlinedIcon />
				</IconButton>
			</Tooltip>
			<Tooltip title={'Delete Form'}>
				<IconButton size={'large'} className={styles.header__button}>
					<DeleteOutlinedIcon />
				</IconButton>
			</Tooltip>
			<SendButton />
			<Account
				popupIsOpen={accountIsOpen}
				buttonOnClick={() => setAccountIsOpen(!accountIsOpen)}
			/>
		</header>
	);
};

export default Header;
