import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

export interface BackdropsState {
	dashboard: boolean;
	editor: boolean;
}

export interface UpdateBackdropProps {
	name: string;
	status: boolean;
}

const initialState: BackdropsState = {
	dashboard: false,
	editor: true,
};

export const backdropsSlice = createSlice({
	name: 'backdrops',
	initialState,
	reducers: {
		updateBackdrop: (
			state: Draft<BackdropsState>,
			action: PayloadAction<UpdateBackdropProps>,
		) => {
			(state as any)[action.payload.name] = action.payload.status;
		},
	},
});

export const { updateBackdrop } = backdropsSlice.actions;

export default backdropsSlice.reducer;
