import React, { useContext } from 'react';
import './styles.scss';
import { useTranslation } from '../../langs/useTranslation';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Assessment, Map } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { StoreContext } from '../../contexts/StoreContext';
import { useNavigate } from 'react-router-dom';
import HasPermission from '../../auths/HasPermission';
import logo from '../../assets/images/logo.png';

export default function Sidebar() {
    const { t } = useTranslation('common');
    const { sidebarShow } = useContext(StoreContext);
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const listItems = [
        {
            listIcon: <Assessment />,
            listText: t('dashboard'),
            path: 'dashboard',
        },
        {
            listIcon: <Map />,
            listText: t('map'),
            path: 'map',
        },
    ];

    const goHandler = (path) => {
        navigate(path);
    };

    return (
        <div className={`sidebar-wrapper ${sidebarShow === 'close' ? 'hidden' : ''}`}>
            <div className='title' onClick={() => goHandler('/dashboard')}>
                <div className='logo'>
                    <img src={logo} alt='compal' onClick={() => goHandler('/dashboard')} />{' '}
                </div>
                <h1>SR Demo</h1>
            </div>
            <div className='logoRwd'>
                <img src={logo} alt='compal' onClick={() => goHandler('/dashboard')} />
            </div>
            <Box className='menu-items' component='div'>
                <List>
                    {listItems.map((e) => (
                        <HasPermission key={e.path} permission={e.path}>
                            <ListItem
                                className={`list-item ${`/${e.path}` === pathname && 'active'}`}
                                button
                                onClick={() => goHandler(`/${e.path}`)}
                            >
                                <ListItemIcon className='list-item-icon'>{e.listIcon}</ListItemIcon>
                                <ListItemText primary={e.listText} />
                            </ListItem>
                        </HasPermission>
                    ))}
                </List>
            </Box>
        </div>
    );
}
