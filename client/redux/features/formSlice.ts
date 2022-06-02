import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { colors } from '../../utils/editor';

export interface FormState {
	id: string;
	title: string;
	description: string | null;
	answersAreAcceptable: boolean;
	showProgressBar: boolean;
	shuffleTheOrderOfTheQuestions: boolean;
	confirmationMessage: string;
	showLinkToPostAnotherReply: boolean;
	headerImage: string | null;
	themeColor: string;
	backgroundColor: string;
	fontStyle: string;
	screenshot: string | null;
	createdAt: string;
	updatedAt: string;
}

export interface UpdateFormAttributeProps {
	key: string;
	value: string | boolean | null;
}

const initialState: FormState = {
	id: '',
	title: 'Untitled Form',
	description: null,
	answersAreAcceptable: false,
	showProgressBar: false,
	shuffleTheOrderOfTheQuestions: false,
	confirmationMessage: 'Your response has been recorded',
	showLinkToPostAnotherReply: false,
	headerImage: null,
	themeColor: '#673ab7',
	backgroundColor: '#f0ebf8',
	fontStyle: 'BASIC',
	screenshot: null,
	createdAt: '',
	updatedAt: '',
};

export const formSlice = createSlice({
	name: 'form',
	initialState,
	reducers: {
		updateFormAttribute: (
			state: Draft<FormState>,
			action: PayloadAction<UpdateFormAttributeProps>,
		) => {
			(state as any)[action.payload.key] = action.payload.value;
			const currentColor = colors.find(({ color }) => color === action.payload.value);
			if (currentColor && action.payload.key === 'themeColor')
				(state as any)['backgroundColor'] = currentColor.bgColors[0];
		},
		setFormState: (state: Draft<FormState>, action: PayloadAction<FormState>) => {
			for (const key in action.payload) (state as any)[key] = (action.payload as any)[key];
		},
	},
});

export const { setFormState, updateFormAttribute } = formSlice.actions;

export default formSlice.reducer;
