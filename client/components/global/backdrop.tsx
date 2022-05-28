import { Backdrop as MuiBackdrop, CircularProgress } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

// TODO: diğer elementlerde de bunu kullan
export interface BackdropProps {
    name: string;
}

const Backdrop: React.FC<BackdropProps> = ({ name }) => {
    const backdrops = useSelector((state: RootState) => state.backdrops);
    return (
        <MuiBackdrop
            sx={{ color: '#fff', zIndex: '110' }}
            open={(backdrops as any)[name]}
        >
            <CircularProgress color={'inherit'} />
        </MuiBackdrop>
    );
};

export default Backdrop;
