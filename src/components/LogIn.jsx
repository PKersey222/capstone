import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FoodPairContext } from "../Context/FoodPairProvider";

const Login = () => {
  const { setUser } = useContext(FoodPairContext);
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCredential) => {
        setUser(userCredential.user);
        navigate("/createsession");
      })
      .catch((error) => {
        console.error("ERROR LOGGING IN", error);
        alert("Invalid Email or Password. Please Try Again!");
      });
  };

  return (
    <div className="App">
      <Container maxWidth="sm">
        <form className="login-form" onSubmit={login}>
          <TextField
            required
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
            value={loginEmail}
            name="Email"
            label="Email"
            type="text"
          />
          <TextField
            required
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
            value={loginPassword}
            name="password"
            label="Password"
            type="password"
          />
          <Button
            type="submit"
            className="login-button"
            variant="contained"
            color="primary"
          >
            Log In
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Login;
