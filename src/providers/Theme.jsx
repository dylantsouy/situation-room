import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';

const theme = createTheme({
    palette: {
        primary: {
            main: '#131e52',
            contrastText: '#fff',
        },
        secondary: {
            main: '#3386c0',
            contrastText: '#fff',
        },
        gray: {
            main: '#869cce',
            contrastText: '#fff',
        },
    },
});

const Theme = (props) => {
    const { children } = props;

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default Theme;

Theme.propTypes = {
    children: PropTypes.element,
};
