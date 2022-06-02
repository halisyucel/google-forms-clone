import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { IconButton, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles/components/editor.toolbar.module.scss';
import Account from '../global/account';
import SendButton from './send-button';
import ThemeOptionsButton from './theme-options-button';
import Title from './title';

const Toolbar = () => {
	const [accountIsOpen, setAccountIsOpen] = useState<boolean>(false);
	return (
		<div className={styles.toolbar}>
			<Link
				to={'/dashboard'}
				className={`${styles.toolbar__button} ${styles.toolbar__button__logo}`}
			>
				<IconButton>
					<img src={'/forms-brand.svg'} alt={'Google Forms Clone'} />
				</IconButton>
			</Link>
			<Title />
			<div style={{ flex: '1' }} />
			<ThemeOptionsButton />
			<Tooltip title={'Preview'}>
				<IconButton size={'large'} className={styles.toolbar__button}>
					<RemoveRedEyeOutlinedIcon />
				</IconButton>
			</Tooltip>
			<Tooltip title={'Delete Form'}>
				<IconButton size={'large'} className={styles.toolbar__button}>
					<DeleteOutlinedIcon />
				</IconButton>
			</Tooltip>
			<SendButton />
			<Account
				popupIsOpen={accountIsOpen}
				buttonOnClick={() => setAccountIsOpen(!accountIsOpen)}
			/>
		</div>
	);
};

export default Toolbar;
