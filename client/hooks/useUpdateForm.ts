import axios, { AxiosResponse } from 'axios';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Config from '../config';
import { updateEditor } from '../redux/features/editorSlice';
import { setFormState, updateFormAttribute } from '../redux/features/formSlice';
import { throwAlert } from '../redux/features/snackbarSlice';
import { RootState } from '../redux/store';

export interface UpdateFormProps {
	key: string;
	value: string | boolean | null;
}

export default () => {
	const params = useParams();
	const dispatch = useDispatch();
	const credentials = useSelector((state: RootState) => state.credentials);
	return useCallback(
		(props: UpdateFormProps): void => {
			dispatch(
				updateEditor({
					key: 'save',
					value: 'saving',
				}),
			);
			dispatch(
				updateFormAttribute({
					key: props.key,
					value: props.value,
				}),
			);
			axios({
				method: 'PUT',
				url: `${Config.API_URL}/form/`,
				headers: { Authorization: `Bearer ${credentials.token}` },
				data: {
					id: params.id,
					key: props.key,
					value: props.value,
				},
			})
				.then((res: AxiosResponse) => {
					dispatch(
						updateEditor({
							key: 'save',
							value: 'saved',
						}),
					);
					dispatch(
						setFormState({
							...res.data,
						}),
					);
				})
				.catch(() => {
					dispatch(
						updateEditor({
							key: 'save',
							value: 'error',
						}),
					);
					dispatch(
						throwAlert({
							message: 'Oops! Something went wrong.',
							severity: 'error',
						}),
					);
				});
		},
		[dispatch, credentials, params],
	);
};
