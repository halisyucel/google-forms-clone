import { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export default () => {
	const navigate = useNavigate();
	const credentials = useSelector((state: RootState) => state.credentials);
	const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
	const [appsOpen, setAppsOpen] = useState<boolean>(false);
	const [accountOpen, setAccountOpen] = useState<boolean>(false);
	const [searchValue, setSearchValue] = useState<string>('');
	const [focus, setFocus] = useState<boolean>(false);
	const appsButtonRef = useRef<HTMLButtonElement>(null);
	const popupToggle = useCallback((popup: 'apps' | 'account') => {
		if (popup === 'apps') {
			setAppsOpen(!appsOpen);
			if (!appsOpen)
				setAccountOpen(false);
		}
		else if (popup === 'account') {
			setAccountOpen(!accountOpen);
			if (!accountOpen)
				setAppsOpen(false);
		}
	}, [appsOpen, accountOpen]);
	const searchSubmit = useCallback(() => {
		if (searchValue.trim() !== '')
			navigate(`/dashboard/search/${searchValue}`);
	}, [searchValue]);
	return {
		credentials,
		drawerOpen,
		setDrawerOpen,
		appsOpen,
		accountOpen,
		searchValue,
		setSearchValue,
		focus,
		setFocus,
		appsButtonRef,
		popupToggle,
		searchSubmit
	};
};