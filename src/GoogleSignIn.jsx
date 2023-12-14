import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleSignin = ({ onSignIn }) => {
  const responseGoogle = (response) => {
    // Handle the Google Sign-In response
    onSignIn(response);
  };

  return (
    <GoogleLogin
      clientId="659923643572-c10atj9s2mvpac0oue46nsmepu1p1v80.apps.googleusercontent.com "
      buttonText="Sign in with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleSignin;
