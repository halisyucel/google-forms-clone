import { Backdrop as MuiBackdrop, CircularProgress } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

// TODO: diğer elementlerde de bunu kullan
export interface BackdropProps {
    name: string;
    backgroundColor?: string;
    color?: string;
}

const Backdrop: React.FC<BackdropProps> = ({
    color,
    backgroundColor,
    name,
}) => {
    const backdrops = useSelector((state: RootState) => state.backdrops);
    return (
        <MuiBackdrop
            sx={{
                zIndex: '110',
                color: color ?? 'rgb(26, 115, 232)',
                backgroundColor: backgroundColor ?? 'rgba(255, 255, 255, 0.5)',
            }}
            open={name === 'layout' || (backdrops as any)[name]}
        >
            <CircularProgress color={'inherit'} />
        </MuiBackdrop>
    );
};

export default Backdrop;
