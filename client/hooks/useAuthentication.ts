import axios, { AxiosResponse } from 'axios';
import lookie from 'lookie';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Config from '../config';
import {
    CredentialsState,
    setCredentials,
} from '../redux/features/credentialsSlice';
import { RootState } from '../redux/store';

export interface UseAuthenticationProps {
    next?: string;
    fallback?: string;
}

// TODO: .then .catch lere .finally eklenecek
// TODO: if else lerdeki elseler kaldırılacak
// TODO: prettier eklenecek

export default (props: UseAuthenticationProps) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const credentials = useSelector((state: RootState) => state.credentials);
    const [loading, setLoading] = useState<boolean>(true);
    const _next = () => props.next && navigate(props.next, { replace: true });
    const _fallback = () =>
        props.fallback && navigate(props.fallback, { replace: true });
    useEffect(() => {
        const localCredentials = lookie.get(
            'GOOGLE_FORMS_CLONE_CREDENTIALS',
        ) as CredentialsState;
        if (!localCredentials) {
            setLoading(false);
            _fallback();
            return;
        }
        axios({
            method: 'POST',
            url: `${Config.API_URL}/user/authenticate`,
            headers: {
                Authorization: `Bearer ${localCredentials.token}`,
            },
        })
            .then((res: AxiosResponse) => {
                const newCredentials = { ...res.data };
                lookie.set('GOOGLE_FORMS_CLONE_CREDENTIALS', newCredentials);
                dispatch(setCredentials(newCredentials));
                _next();
            })
            .catch(() => {
                _fallback();
            })
            .finally(() => {
                setLoading(false);
            });
    }, [credentials, _next, _fallback]);
    return {
        loading,
    };
};
