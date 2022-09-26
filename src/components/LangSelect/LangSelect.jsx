import React, { useContext, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { LanguageContext } from '../../langs/LanguageContext';
import { languageOptions } from '../../langs/index';
import './styles.scss';
import { Public } from '@mui/icons-material';
import { IconButton, Menu } from '@mui/material';

const LangSelect = () => {
    const { userLanguageChange } = useContext(LanguageContext);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLangChange = (id) => {
        userLanguageChange(id);
        setAnchorEl(null);
    };

    const renderLangMenu = (
        <>
            <IconButton
                size='large'
                aria-label='lang'
                aria-controls='menu-lang'
                aria-haspopup='true'
                onClick={handleMenu}
                color='inherit'
            >
                <Public color='gray' />
            </IconButton>
            <Menu
                id='menu-lang'
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
                {Object.entries(languageOptions).map(([id, name]) => (
                    <MenuItem key={id} value={id} name={id} onClick={() => handleLangChange(id)}>
                        {name}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
    return <div className='langSelect-wrapper'>{renderLangMenu}</div>;
};

export default LangSelect;
