import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { AppBar, Button, Tab, Tabs } from '@mui/material';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../styles/components/home.header.module.scss';
import { ElevationScroll } from '../../utils/home';
import WorkspacePopUp from './workspace-pop-up';

const Header = () => {
    const navigate = useNavigate();
    const [tab, setTab] = useState<number>(0);
    const [toolsIsOpen, setToolsIsOpen] = useState<boolean>(false);
    useEffect(() => {
        if (window.location.hash !== '') {
            const targetElement = document.querySelector(
                window.location.hash,
            ) as HTMLElement;
            targetElement.scrollIntoView();
            switch (window.location.hash) {
                case '#overview':
                    setTab(0);
                    break;
                case '#features':
                    setTab(1);
                    break;
                case '#security':
                    setTab(2);
                    break;
                case '#pricing':
                    setTab(3);
            }
        }
    }, []);
    return (
        <ElevationScroll>
            <AppBar className={styles.header}>
                <Link to={'/'} className={styles.header__logo}>
                    <img src={'/logo.svg'} alt={'Google Forms Clone'} />
                </Link>
                <Tabs
                    value={tab}
                    onChange={(_event: SyntheticEvent, value: number) =>
                        setTab(value)
                    }
                    className={styles.header__tabs}
                >
                    <Tab
                        className={styles.header__tabs__tab}
                        label={'Overview'}
                        href={'#overview'}
                    />
                    <Tab
                        className={styles.header__tabs__tab}
                        label={'Features'}
                        href={'#features'}
                    />
                    <Tab
                        className={styles.header__tabs__tab}
                        label={'Security'}
                        href={'#security'}
                    />
                    <Tab
                        className={styles.header__tabs__tab}
                        label={'Pricing'}
                        href={'#pricing'}
                    />
                </Tabs>
                <div style={{ flex: '1' }} />
                <div className={styles.header__buttons}>
                    <Button
                        size={'large'}
                        className={styles.header__buttons__button}
                        onClick={() => setToolsIsOpen(!toolsIsOpen)}
                    >
                        More Tools
                        <ArrowBackIosIcon
                            className={styles.header__buttons__button__icon}
                        />
                    </Button>
                    <Button
                        size={'large'}
                        className={styles.header__buttons__button}
                        onClick={() => navigate('/sign-in')}
                    >
                        Sign in
                    </Button>
                    <Button
                        size={'large'}
                        className={styles.header__buttons__button}
                        variant={'outlined'}
                        onClick={() => navigate('/dashboard')}
                    >
                        Go to Forms
                    </Button>
                    <Button
                        size={'large'}
                        className={styles.header__buttons__button}
                        variant={'contained'}
                        disableElevation={true}
                        onClick={() => navigate('/dashboard')}
                    >
                        Try Forms for Work
                    </Button>
                </div>
                <WorkspacePopUp onClose={setToolsIsOpen} isOpen={toolsIsOpen} />
            </AppBar>
        </ElevationScroll>
    );
};

export default Header;
