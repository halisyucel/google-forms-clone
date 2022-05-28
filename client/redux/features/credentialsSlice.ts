import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CredentialsState {
    token: string;
    id: number;
    firstName: string;
    lastName: string;
    username: string;
}

export interface SetCredentialsProps {
    token?: string;
    id?: number;
    firstName?: string;
    lastName?: string;
    username?: string;
}

const initialState: CredentialsState = {
    token: '',
    id: 0,
    username: '',
    firstName: '',
    lastName: '',
};

export const credentialsSlice = createSlice({
    name: 'credentials',
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<SetCredentialsProps>) => {
            state.token = action.payload.token || state.token;
            state.id = action.payload.id || state.id;
            state.username = action.payload.username || state.username;
            state.firstName = action.payload.firstName || state.firstName;
            state.lastName = action.payload.lastName || state.lastName;
        },
        clearCredentials: (state) => {
            state.token = '';
            state.id = 0;
            state.username = '';
            state.firstName = '';
            state.lastName = '';
        },
    },
});

export const { setCredentials, clearCredentials } = credentialsSlice.actions;

export default credentialsSlice.reducer;
