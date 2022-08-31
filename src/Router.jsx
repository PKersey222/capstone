import React from "react";
import { Routes, Route, Navigate } from "react-router";
import Home from "./components/Home";
import CreateSession from "./components/CreateSession";
import Vote from "./components/Vote";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

//props rendered by App.js
const ProtectedRoute = (props) => {
  const { user, component: Component, ...rest } = props;
  const checkAuth = () => !!user;

  return checkAuth() === true ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" />
  );
};

const Router = (props) => {
  const { user } = props;
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/vote"
          element={<ProtectedRoute user={user} component={Vote} />}
        />
        <Route
          path="/createsession"
          element={<ProtectedRoute user={user} component={CreateSession} />}
        />
      </Routes>
    </div>
  );
};

export default Router;