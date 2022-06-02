import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { Image } from '../../utils/images';

export interface ImageSelectorState {
	open: boolean;
	headerText: string;
	images: Image[];
	loading: boolean;
	ref: string | null;
	selectedImage: string | null;
}

export interface openImageSelectorProps {
	ref: string;
	headerText: string;
}

const initialState: ImageSelectorState = {
	open: false,
	headerText: 'Select an Image',
	images: [],
	loading: false,
	ref: null,
	selectedImage: null,
};

export const imageSelectorSlice = createSlice({
	name: 'imageSelector',
	initialState,
	reducers: {
		openImageSelector: (
			state: Draft<ImageSelectorState>,
			action: PayloadAction<openImageSelectorProps>,
		) => {
			state.open = true;
			state.headerText = action.payload.headerText;
			state.ref = action.payload.ref;
			state.selectedImage = null;
		},
		closeImageSelector: (state: Draft<ImageSelectorState>) => {
			state.open = false;
		},
		updateSelectedImage: (state: Draft<ImageSelectorState>, action: PayloadAction<string>) => {
			state.selectedImage = action.payload;
		},
		updateImages: (state: Draft<ImageSelectorState>, action: PayloadAction<Image[]>) => {
			state.images = action.payload;
		},
		updateLoading: (state: Draft<ImageSelectorState>, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		},
	},
});

export const {
	openImageSelector,
	closeImageSelector,
	updateImages,
	updateLoading,
	updateSelectedImage,
} = imageSelectorSlice.actions;

export default imageSelectorSlice.reducer;
