import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as localforage from 'localforage';

export const StoreContext = React.createContext({});
export default function Store(props) {
    const { children } = props;
    const [sidebarShow, setSidebarShow] = useState('open');

    const toggleSidebar = async (e) => {
        await localforage.setItem('sidebarShow', e);
        setSidebarShow(e);
    };
    const getLocalData = async () => {
        let data = await localforage.getItem('sidebarShow');
        if (data) {
            setSidebarShow(data);
        }
    };
    useEffect(() => {
        getLocalData();
    }, []);

    return <StoreContext.Provider value={{ sidebarShow, toggleSidebar }}>{children}</StoreContext.Provider>;
}

Store.propTypes = {
    children: PropTypes.element,
};
