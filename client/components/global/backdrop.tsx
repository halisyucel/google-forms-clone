import { Backdrop as MuiBackdrop, CircularProgress } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

// TODO: React.FC<T> use all props

const Backdrop = () => {
	const { open, color, backgroundColor } = useSelector((state: RootState) => state.backdrop);
	return (
		<MuiBackdrop
			sx={{
				zIndex: '110',
				color: color ?? 'rgb(26, 115, 232)',
				backgroundColor: backgroundColor ?? 'rgba(255, 255, 255, 0.5)',
			}}
			open={open ?? false}
		>
			<CircularProgress color={'inherit'} />
		</MuiBackdrop>
	);
};

export default Backdrop;
