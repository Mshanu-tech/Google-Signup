import React from 'react';
import GoogleLogin from '@leecheuk/react-google-login';

const GoogleSignUp = ({ onSignUp }) => {
  const responseGoogle = (response) => {
    // Handle the Google Sign-Up response
    onSignUp(response);
  };

  return (
    <GoogleLogin
      clientId="659923643572-c10atj9s2mvpac0oue46nsmepu1p1v80.apps.googleusercontent.com "
      buttonText="Sign up with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleSignUp;
