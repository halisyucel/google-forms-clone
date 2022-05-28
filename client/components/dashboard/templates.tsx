import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
    IconButton,
    List,
    ListItem,
    ListItemButton,
    Paper,
} from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSetting } from '../../redux/features/settingsSlice';
import { RootState } from '../../redux/store';
import styles from '../../styles/components/dashboard.templates.module.scss';

export interface HideAllTemplatePopupProps {
    top: number;
    left: number;
}

const Templates = () => {
    const dispatch = useDispatch();
    const settings = useSelector((state: RootState) => state.settings);
    const hideAllTemplatesButton = useRef<HTMLButtonElement>(null);
    const [openHideAllTemplatesButton, setOpenHideAllTemplatesButton] =
        useState<boolean>(false);
    const [hideAllTemplatesPopupPosition, setHideAllTemplatesPopupPosition] =
        useState<HideAllTemplatePopupProps>({
            top: 0,
            left: 0,
        });

    useEffect(() => {
        const locationInfo =
            hideAllTemplatesButton.current?.getBoundingClientRect();
        setHideAllTemplatesPopupPosition({
            top: (locationInfo?.top ?? 0) + (locationInfo?.height ?? 0) + 5,
            left:
                (locationInfo?.left ?? 0) - 78 + (locationInfo?.width ?? 0) / 2,
        });
    }, [hideAllTemplatesButton]);
    return (
        <React.Fragment>
            <div
                className={styles.templates}
                style={{
                    display: settings.showRecentlyUsedTemplates
                        ? 'flex'
                        : 'none',
                }}
            >
                <div className={styles.templates__toolbar}>
                    <div className={styles.templates__toolbar__title}>
                        Start preparing a new form
                    </div>
                    <IconButton
                        ref={hideAllTemplatesButton}
                        onClick={() =>
                            setOpenHideAllTemplatesButton(
                                !openHideAllTemplatesButton,
                            )
                        }
                    >
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className={styles.templates__items}>
                    <div className={styles.templates__items__item}>
                        <div
                            className={styles.templates__items__item__image}
                            style={{
                                backgroundImage: 'url(/template-empty.png)',
                            }}
                        />
                        <div className={styles.templates__items__item__title}>
                            Empty
                        </div>
                    </div>
                    <div className={styles.templates__items__item}>
                        <div className={styles.templates__items__item__image} />
                        <div className={styles.templates__items__item__title}>
                            Event RSVP Form
                        </div>
                    </div>
                    <div className={styles.templates__items__item}>
                        <div className={styles.templates__items__item__image} />
                        <div className={styles.templates__items__item__title}>
                            T-Shirt Request Form
                        </div>
                    </div>
                    <div className={styles.templates__items__item}>
                        <div className={styles.templates__items__item__image} />
                        <div className={styles.templates__items__item__title}>
                            Contact Information
                        </div>
                    </div>
                    <div className={styles.templates__items__item}>
                        <div className={styles.templates__items__item__image} />
                        <div className={styles.templates__items__item__title}>
                            Party Invitation
                        </div>
                    </div>
                    <div className={styles.templates__items__item}>
                        <div className={styles.templates__items__item__image} />
                        <div className={styles.templates__items__item__title}>
                            Event Registration Form
                        </div>
                    </div>
                </div>
            </div>
            <Paper
                elevation={1}
                className={styles.show_recently_used_templates_popup}
                style={{
                    display: openHideAllTemplatesButton ? 'block' : 'none',
                    top: hideAllTemplatesPopupPosition.top,
                    left: hideAllTemplatesPopupPosition.left,
                }}
            >
                <List>
                    <ListItem disablePadding={true}>
                        <ListItemButton
                            className={
                                styles.show_recently_used_templates_popup__item
                            }
                            onClick={() => {
                                setOpenHideAllTemplatesButton(false);
                                dispatch(
                                    setSetting({
                                        key: 'showRecentlyUsedTemplates',
                                        value: false,
                                    }),
                                );
                            }}
                        >
                            Hide all templates
                        </ListItemButton>
                    </ListItem>
                </List>
            </Paper>
            <button
                className={styles.hidden_button}
                style={{
                    display: settings.showRecentlyUsedTemplates
                        ? 'none'
                        : 'flex',
                }}
            >
                <span className={styles.hidden_button__pseudo_button}>
                    <img src={'/new-form-button.png'} alt={'New Form'} />
                </span>
                {/* TODO üzerine popover yapıalcak */}
                <span className={styles.hidden_button__real_button}>
                    <EditOutlinedIcon />
                </span>
            </button>
        </React.Fragment>
    );
};

export default Templates;
