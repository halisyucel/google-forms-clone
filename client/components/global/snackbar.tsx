import { Alert, Snackbar as MuiSnackbar, Stack } from '@mui/material';
import React, { SyntheticEvent, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeAlert } from '../../redux/features/snackbarSlice';
import { RootState } from '../../redux/store';

const Snackbar = () => {
    const dispatch = useDispatch();
    const snackbar = useSelector((state: RootState) => state.snackbar);
    const handleClose = useCallback(
        (event?: SyntheticEvent | Event, reason?: string) => {
            if (reason === 'clickaway') return;
            dispatch(closeAlert());
        },
        [dispatch],
    );
    useEffect(() => {
        if (snackbar.open) {
            const timeout = setTimeout(() => {
                dispatch(closeAlert());
            }, 6000);
            return () => clearTimeout(timeout);
        }
    }, [dispatch, snackbar.open]);
    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <MuiSnackbar open={snackbar.open} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity={snackbar.severity}
                    sx={{ width: '100%' }}
                >
                    {snackbar.message}
                </Alert>
            </MuiSnackbar>
        </Stack>
    );
};

export default Snackbar;
