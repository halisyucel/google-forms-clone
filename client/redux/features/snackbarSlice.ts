import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

export interface SnackbarState {
	open: boolean;
	message: string;
	severity: 'success' | 'error' | 'warning' | 'info';
}

export interface ThrowAlertProps {
	message: string;
	severity: 'success' | 'error' | 'warning' | 'info';
}

const initialState: SnackbarState = {
	open: false,
	message: '',
	severity: 'info',
};

export const snackbarSlice = createSlice({
	name: 'snackbar',
	initialState,
	reducers: {
		throwAlert: (state: Draft<SnackbarState>, action: PayloadAction<ThrowAlertProps>) => {
			state.open = true;
			state.message = action.payload.message;
			state.severity = action.payload.severity;
		},
		closeAlert: (state: Draft<SnackbarState>) => {
			state.open = false;
		},
	},
});

export const { throwAlert, closeAlert } = snackbarSlice.actions;

export default snackbarSlice.reducer;
