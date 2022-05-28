import { configureStore } from '@reduxjs/toolkit';
import credentialsReducer from './features/credentialsSlice';
import settingsReducer from './features/settingsSlice';
import snackbarReducer from './features/snackbarSlice';

export const store = configureStore({
    reducer: {
        credentials: credentialsReducer,
        settings: settingsReducer,
        snackbar: snackbarReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
