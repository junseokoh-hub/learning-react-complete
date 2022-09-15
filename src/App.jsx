import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AuthContext from "./store/authContext";

function App() {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <Layout>
      <Routes>
        {isLoggedIn && <Route path="/" element={<HomePage />} />}
        {!isLoggedIn && <Route path="/" element={<Navigate to="/auth" />} />}
        {!isLoggedIn && <Route path="/auth" element={<AuthPage />} />}
        {isLoggedIn && <Route path="/profile" element={<UserProfile />} />}
        {!isLoggedIn && (
          <Route path="/profile" element={<Navigate to="/auth" />} />
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
