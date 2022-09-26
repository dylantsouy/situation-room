import { IconButton, Menu, MenuItem } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../auths/Auth';
import LangSelect from '../LangSelect';
import './styles.scss';
import { useTranslation } from '../../langs/useTranslation';
import PropTypes from 'prop-types';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import FormatIndentDecreaseIcon from '@mui/icons-material/FormatIndentDecrease';
import { StoreContext } from '../../contexts/StoreContext';
import { People } from '@mui/icons-material';
export default function Header(props) {
    const { login } = props;
    const { pathname } = useLocation();
    const { t } = useTranslation('common');
    const { logout } = useContext(AuthContext);
    const { sidebarShow, toggleSidebar } = useContext(StoreContext);
    const [anchorEl, setAnchorEl] = useState(null);

    const logoutHandler = (e) => {
        e.preventDefault();
        logout();
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const locationHandler = () => {
        const pageName = pathname?.slice(1);

        if (pathname === '/') {
            return t('home');
        } else {
            return t(pageName);
        }
    };

    return login ? (
        <div className='header-wrapper'>
            <div className='buttonWrapper'>
                <LangSelect />
            </div>
        </div>
    ) : (
        <div className='header-wrapper'>
            <div className='header-left'>
                <div className='header-bar'>
                    {sidebarShow === 'close' ? (
                        <FormatIndentIncreaseIcon onClick={() => toggleSidebar('open')} />
                    ) : (
                        <FormatIndentDecreaseIcon onClick={() => toggleSidebar('close')} />
                    )}
                </div>
                <div className='page'>{locationHandler()}</div>
            </div>
            <div className='header-right'>
                <IconButton
                    size='large'
                    aria-label='user'
                    aria-controls='menu-user'
                    aria-haspopup='true'
                    onClick={handleMenu}
                    color='inherit'
                >
                    <People color='gray' />
                </IconButton>
                <Menu
                    id='menu-user'
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={logoutHandler}> {t('logout')}</MenuItem>
                </Menu>
                <LangSelect />
            </div>
        </div>
    );
}

Header.propTypes = {
    login: PropTypes.bool,
};
