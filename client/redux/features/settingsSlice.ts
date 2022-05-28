import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

export interface SettingsState {
    showRecentlyUsedTemplates: boolean;
    isOpenSettingsDialog: boolean;
}

export interface SetSettingsProps {
    key: string;
    value: any;
}

const initialState: SettingsState = {
    showRecentlyUsedTemplates: true,
    isOpenSettingsDialog: false,
};

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setSetting: (
            state: Draft<SettingsState>,
            action: PayloadAction<SetSettingsProps>,
        ) => {
            if (action.payload.key)
                if (state.hasOwnProperty(action.payload.key))
                    (state as any)[action.payload.key] = action.payload.value;
        },
    },
});

export const { setSetting } = settingsSlice.actions;

export default settingsSlice.reducer;
