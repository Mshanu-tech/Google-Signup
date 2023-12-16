  import React, { useEffect } from 'react';
  import jwt from 'jsonwebtoken';


  const SignUpPage = () => {
    const handleCallbackResponse = (response) => {
      // Handle the Google Sign-Up response
      const token = response.credential;
      const decodedToken = jwt.decode(token);
      console.log("JWT ID: " + decodedToken.sub);
    };
    

    useEffect(() => {
      
      google.accounts.id.initialize({
        client_id:"659923643572-c10atj9s2mvpac0oue46nsmepu1p1v80.apps.googleusercontent.com",
        callback:handleCallbackResponse
      })

      google.accounts.id.renderButton(
        document.getElementById("singInDiv"),
        {theme: "outline", size: "large"}
      );
    }, [])

    return (
      <div>
        <h2>Sign Up</h2>
        <div id='singInDiv'></div>
      </div>
    );
  };

  export default SignUpPage;
