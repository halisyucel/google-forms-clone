import {
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSetting } from '../../redux/features/settingsSlice';
import { RootState } from '../../redux/store';
import styles from '../../styles/components/dashboard.settings.module.scss';

const Settings = () => {
    const dispatch = useDispatch();
    const settings = useSelector((state: RootState) => state.settings);
    return (
        <Dialog
            open={settings.isOpenSettingsDialog}
            className={styles.settings}
            onClose={() =>
                dispatch(
                    setSetting({
                        key: 'isOpenSettingsDialog',
                        value: false,
                    }),
                )
            }
        >
            <DialogTitle className={styles.settings__title}>
                Settings
            </DialogTitle>
            <DialogContent className={styles.settings__content}>
                <h3>Templates</h3>
                <label className={styles.settings__content__label}>
                    <Checkbox
                        checked={settings.showRecentlyUsedTemplates}
                        className={styles.settings__content__label__checkbox}
                        onChange={() =>
                            dispatch(
                                setSetting({
                                    key: 'showRecentlyUsedTemplates',
                                    value: !settings.showRecentlyUsedTemplates,
                                }),
                            )
                        }
                    />
                    Show recently used templates on home screens
                </label>
            </DialogContent>
            <DialogActions className={styles.settings__actions}>
                <Button
                    variant={'contained'}
                    color={'primary'}
                    disableElevation={true}
                    className={styles.settings__actions__button}
                    onClick={() =>
                        dispatch(
                            setSetting({
                                key: 'isOpenSettingsDialog',
                                value: false,
                            }),
                        )
                    }
                >
                    OK
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Settings;
