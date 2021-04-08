import React from 'react';
import Auth from '../components/Auth';

const AuthPage = ({
    isAuthenticated,
    authHandler
}) => {
    return <Auth
    isAuthenticated = {
        isAuthenticated
    }
    authHandler = {
        authHandler
    }
    />

};

export default AuthPage;