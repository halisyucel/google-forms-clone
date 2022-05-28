import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {
    Avatar,
    IconButton,
    InputAdornment,
    TextField,
    Tooltip,
} from '@mui/material';
import React, { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import useHeader from '../../hooks/useHeader';
import styles from '../../styles/components/dashboard.header.module.scss';
import Account from './account';
import Apps from './apps';
import Drawer from './drawer';

const Header = () => {
    const {
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
        searchSubmit,
    } = useHeader();
    return (
        <header className={styles.header}>
            <Tooltip title={'Menu'}>
                <IconButton
                    className={styles.header__button}
                    size={'large'}
                    onClick={() => setDrawerOpen(true)}
                >
                    <MenuIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title={'Forms'}>
                <Link to={'/'} className={styles.header__title}>
                    <img src={'/forms-brand.svg'} alt={'Forms'} />
                    <h1>Forms Clone</h1>
                </Link>
            </Tooltip>
            <div className={styles.header__search}>
                <TextField
                    value={searchValue}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setSearchValue(e.target.value)
                    }
                    className={`${styles.header__search__input} ${
                        focus ? styles.header__search__input__focus : ''
                    }`.trim()}
                    placeholder={'Search'}
                    size={'small'}
                    variant={'outlined'}
                    spellCheck={false}
                    onKeyPress={(e) => e.key === 'Enter' && searchSubmit()}
                    autoComplete={'off'}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment
                                className={
                                    styles.header__search__input__adornment
                                }
                                position={'start'}
                                onClick={() => searchSubmit()}
                            >
                                <SearchIcon />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment
                                style={{
                                    visibility:
                                        searchValue.trim() === ''
                                            ? 'hidden'
                                            : 'visible',
                                }}
                                className={
                                    styles.header__search__input__adornment
                                }
                                position={'end'}
                                onClick={() => setSearchValue('')}
                            >
                                <CloseIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </div>
            <Tooltip title={'Google Apps'}>
                <IconButton
                    ref={appsButtonRef}
                    className={styles.header__button}
                    size={'large'}
                    onClick={() => popupToggle('apps')}
                >
                    <AppsRoundedIcon />
                </IconButton>
            </Tooltip>
            <Tooltip
                title={
                    <div className={styles.header__tooltip}>
                        <div style={{ marginBottom: '4px' }}>
                            Google Account
                        </div>
                        <div>
                            {credentials.firstName + credentials.lastName}
                        </div>
                        <div>{credentials.username + '@gmail.com'}</div>
                    </div>
                }
            >
                <Avatar
                    className={styles.header__button}
                    onClick={() => popupToggle('account')}
                >
                    {credentials.firstName.charAt(0).toUpperCase()}
                </Avatar>
            </Tooltip>
            <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
            <Apps isOpen={appsOpen} />
            <Account isOpen={accountOpen} />
        </header>
    );
};

export default Header;
