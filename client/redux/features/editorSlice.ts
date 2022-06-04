import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

export interface EditorState {
	save: 'empty' | 'saving' | 'saved' | 'error';
	tabsValue: string;
	selectedEntity: string | null;
}

export interface UpdateEditorProps {
	key: string;
	value: string | null;
}

const initialState: EditorState = {
	save: 'empty',
	tabsValue: 'questions',
	selectedEntity: null,
};

export const editorSlice = createSlice({
	name: 'editor',
	initialState,
	reducers: {
		updateEditor: (state: Draft<EditorState>, action: PayloadAction<UpdateEditorProps>) => {
			(state as any)[action.payload.key] = action.payload.value;
		},
	},
});

export const { updateEditor } = editorSlice.actions;

export default editorSlice.reducer;
