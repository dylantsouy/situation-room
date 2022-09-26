import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layouts/Layout';
import Auth from './auths/Auth';
import Dashboard from './containers/Dashboard';
import Login from './containers/Login';
import Snackbar from './providers/Snackbar';
import Theme from './providers/Theme';
import { LanguageProvider } from './langs/LanguageProvider';
import Store from './contexts/StoreContext';
import Page404 from './containers/Page404';

//路由進入點
function App() {
    return (
        <Theme>
            <Snackbar>
                <LanguageProvider>
                    <Store>
                        <Auth>
                            <Layout>
                                <Routes>
                                    <Route index path='/dashboard' element={<Dashboard />} />
                                    <Route index path='/login' element={<Login />} />
                                    <Route path='/' element={<Navigate to='/dashboard' replace />} />
                                    <Route path='*' element={<Page404 />} />
                                </Routes>
                            </Layout>
                        </Auth>
                    </Store>
                </LanguageProvider>
            </Snackbar>
        </Theme>
    );
}

export default App;
