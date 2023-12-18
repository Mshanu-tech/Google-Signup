import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";

function App() {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
        setProfile(null)
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <Container component="main" maxWidth="xs" sx={{height:"97vh",display:"flex",justifyContent:"center"}}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection:"column",
          marginTop: "20px",
        }}
      >
        <h2>React Google Login</h2>
        <br />
        <br />
        {profile ? (
          <div>
            <Avatar sx={{height:"60px",width:"60px"}} src={profile.picture} />
            <h3>User Logged in</h3>
            <p>Name: {profile.name}</p>
            <p>Email Address: {profile.email}</p>
            <br />
            <br />
            <Button variant="outlined" onClick={logOut}>Log out</Button>
          </div>
        ) : (
            <Button variant="contained" onClick={() => login()}>Sign in with Google 🚀</Button>
        )}
      </Box>
    </Container>
  );
}
export default App;
