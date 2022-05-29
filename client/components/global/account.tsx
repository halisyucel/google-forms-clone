import React from 'react';
import AccountButton from './account-button';
import AccountPopup from './account-popup';

export interface AccountProps {
	popupIsOpen: boolean;
	buttonOnClick: () => void;
}

const Account: React.FC<AccountProps> = ({ buttonOnClick, popupIsOpen }) => {
	return (
		<React.Fragment>
			<AccountButton onClick={buttonOnClick} />
			<AccountPopup isOpen={popupIsOpen} />
		</React.Fragment>
	);
};

export default Account;
