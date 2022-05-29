import { configureStore } from '@reduxjs/toolkit';
import backdropsReducer from './features/backdropsSlice';
import credentialsReducer from './features/credentialsSlice';
import editorReducer from './features/editorSlice';
import formReducer from './features/formSlice';
import settingsReducer from './features/settingsSlice';
import snackbarReducer from './features/snackbarSlice';

export const store = configureStore({
	reducer: {
		backdrops: backdropsReducer,
		credentials: credentialsReducer,
		form: formReducer,
		settings: settingsReducer,
		snackbar: snackbarReducer,
		editor: editorReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
