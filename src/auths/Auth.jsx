import React, { useState } from 'react';
import * as localforage from 'localforage';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom'; // version 5.2.0
import { useTranslation } from '../langs/useTranslation';

export const AuthContext = React.createContext({});
export default function Auth({ children }) {
    const { trans_lang } = useTranslation('lang');
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [userInfo, setUserInfo] = useState({});

    const checkAuth = async () => {
        const storedToken = await localforage.getItem('token');
        if (!storedToken) {
            setUserInfo({});
            await localforage.clear();
            setIsAuthenticated(false);
            navigate('/login');
            setIsLoading(false);
        } else {
            setIsAuthenticated(true);
            setIsLoading(false);
        }
    };

    const login = async (data) => {
        const { token, user, permission } = data;
        await localforage.setItem('token', token);
        await localforage.setItem('user', user);
        localStorage.setItem('permissionArray', JSON.stringify(permission));
        setUserInfo(user);
        setIsAuthenticated(true);
        navigate('/');
        enqueueSnackbar(trans_lang('auth.login_success'), { variant: 'success' });
    };

    const logout = async () => {
        // call Logout API
        await localforage.clear();
        localStorage.clear();
        setUserInfo({});
        setIsLoading(true);
        navigate('/');
        setIsAuthenticated(false);
        enqueueSnackbar(trans_lang('auth.logout_success'), { variant: 'success' });
    };

    return (
        // AuthContext.Provider will wrap the components
        // The wrapped components can use the value sent from the AuthContext.Provider
        // To use the value, the wrapped components should delcare 'useContext(AuthContext)'
        <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout, checkAuth, userInfo }}>
            {children}
        </AuthContext.Provider>
    );
}

Auth.propTypes = {
    children: PropTypes.element,
};
