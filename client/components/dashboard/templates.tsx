import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
    IconButton,
    List,
    ListItem,
    ListItemButton,
    Paper,
    Tooltip,
} from '@mui/material';
import axios, { AxiosResponse } from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Config from '../../config';
import { updateBackdrop } from '../../redux/features/backdropsSlice';
import { setSetting } from '../../redux/features/settingsSlice';
import { throwAlert } from '../../redux/features/snackbarSlice';
import { RootState } from '../../redux/store';
import styles from '../../styles/components/dashboard.templates.module.scss';

export interface TemplateProps {
    schema: string;
    title: string;
    imageUrl?: string;
    onClick: (schema: string) => void;
}

export interface HideAllTemplatePopupProps {
    top: number;
    left: number;
}

const Template: React.FC<TemplateProps> = ({
    schema,
    title,
    imageUrl,
    onClick,
}) => {
    return (
        <div
            className={styles.templates__items__item}
            onClick={() => onClick(schema)}
        >
            <div
                className={styles.templates__items__item__image}
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className={styles.templates__items__item__title}>{title}</div>
        </div>
    );
};

const Templates = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const settings = useSelector((state: RootState) => state.settings);
    const credentials = useSelector((state: RootState) => state.credentials);
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
    const createForm = useCallback(
        (schema = 'empty') => {
            // TODO: bütün reslere AxiosResponse typescript eklenecek
            dispatch(
                updateBackdrop({
                    backdropName: 'dashboard',
                    backdropState: true,
                }),
            );
            axios({
                method: 'POST',
                url: `${Config.API_URL}/form/`,
                data: { schema },
                headers: { Authorization: `Bearer ${credentials.token}` },
            })
                .then((res: AxiosResponse) => {
                    navigate(`/dashboard/editor/${res.data.id}`);
                })
                .catch(() => {
                    dispatch(
                        throwAlert({
                            message: 'Oops! Something went wrong.',
                            severity: 'error',
                        }),
                    );
                })
                .finally(() => {
                    dispatch(
                        updateBackdrop({
                            backdropName: 'dashboard',
                            backdropState: false,
                        }),
                    );
                });
        },
        [navigate, dispatch, credentials.token],
    );
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
                    <Template
                        schema={'empty'}
                        title={'Empty'}
                        onClick={createForm}
                        imageUrl={'/template-empty.png'}
                    />
                    <Template
                        schema={'event-rsvp'}
                        title={'Event RSVP Form'}
                        onClick={createForm}
                    />
                    <Template
                        schema={'t-shirt-request'}
                        title={'T-Shirt Request Form'}
                        onClick={createForm}
                    />
                    <Template
                        schema={'contact-information'}
                        title={'Contact Information'}
                        onClick={createForm}
                    />
                    <Template
                        schema={'party-invitation'}
                        title={'Party Invitation'}
                        onClick={createForm}
                    />
                    <Template
                        schema={'event-registration-form'}
                        title={'Event Registration Form'}
                        onClick={createForm}
                    />
                </div>
            </div>
            <Paper
                className={styles.show_recently_used_templates_popup}
                elevation={1}
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
            <Tooltip title={'Create a new form'} placement={'left'}>
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
                    <span className={styles.hidden_button__real_button}>
                        <EditOutlinedIcon />
                    </span>
                </button>
            </Tooltip>
        </React.Fragment>
    );
};

export default Templates;
