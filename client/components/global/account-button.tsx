import { Avatar, Tooltip } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import styles from '../../styles/components/global.account.module.scss';

export interface AccountButtonProps {
	onClick: () => void;
}

const AccountButton: React.FC<AccountButtonProps> = ({ onClick }) => {
	const credentials = useSelector((state: RootState) => state.credentials);
	return (
		<Tooltip
			title={
				<div className={styles.account_tooltip}>
					<div style={{ marginBottom: '4px' }}>Google Account</div>
					<div>{credentials.firstName + credentials.lastName}</div>
					<div>{credentials.username + '@gmail.com'}</div>
				</div>
			}
		>
			<Avatar className={styles.account_button} onClick={() => onClick()}>
				{credentials.firstName.charAt(0).toUpperCase()}
			</Avatar>
		</Tooltip>
	);
};

export default AccountButton;
