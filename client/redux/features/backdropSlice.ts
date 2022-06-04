import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

export interface BackdropState {
	open: boolean;
	color: string;
	backgroundColor: string;
}

export interface UpdateBackdropProps {
	open: boolean;
	color?: string;
	backgroundColor?: string;
}

const initialState: BackdropState = {
	open: false,
	color: 'rgb(26, 115, 232)',
	backgroundColor: 'rgba(255, 255, 255, 0.5)',
};

export const backdropSlice = createSlice({
	name: 'backdrop',
	initialState,
	reducers: {
		updateBackdrop: (
			state: Draft<BackdropState>,
			action: PayloadAction<UpdateBackdropProps>,
		) => {
			state.open = action.payload.open;
			state.color = action.payload.color || initialState.color;
			state.backgroundColor = action.payload.backgroundColor || initialState.backgroundColor;
		},
	},
});

export const { updateBackdrop } = backdropSlice.actions;

export default backdropSlice.reducer;
