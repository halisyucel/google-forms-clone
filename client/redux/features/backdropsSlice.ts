import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface BackdropsState {
    dashboard: boolean;
}

export interface SetBackdropProps {
    backdropName: string;
    backdropState: boolean;
}

const initialState: BackdropsState = {
    dashboard: false,
};

export const backdropsSlice = createSlice({
    name: 'backdrops',
    initialState,
    reducers: {
        updateBackdrop: (state, action: PayloadAction<SetBackdropProps>) => {
            (state as any)[action.payload.backdropName] =
                action.payload.backdropState;
        },
    },
});

export const { updateBackdrop } = backdropsSlice.actions;

export default backdropsSlice.reducer;
