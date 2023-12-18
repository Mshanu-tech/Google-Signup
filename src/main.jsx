import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';

ReactDOM.render(
    <GoogleOAuthProvider clientId="659923643572-c10atj9s2mvpac0oue46nsmepu1p1v80.apps.googleusercontent.com">
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </GoogleOAuthProvider>,
    document.getElementById('root')
);

















// 659923643572-c10atj9s2mvpac0oue46nsmepu1p1v80.apps.googleusercontent.com