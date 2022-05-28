import { configureStore } from '@reduxjs/toolkit';
import backdropsReducer from './features/backdropsSlice';
import credentialsReducer from './features/credentialsSlice';
import editorReducer from './features/editorSlice';
import settingsReducer from './features/settingsSlice';
import snackbarReducer from './features/snackbarSlice';

export const store = configureStore({
    reducer: {
        backdrops: backdropsReducer,
        credentials: credentialsReducer,
        editor: editorReducer,
        settings: settingsReducer,
        snackbar: snackbarReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
