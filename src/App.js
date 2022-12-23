import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

const HomeTest = ({ user }) => {
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <h2>Home (Protected: authenticated user required)</h2>;
};
export default function App() {
  const [user, setUser] = React.useState(null);

  const handleLogin = () => setUser({ id: "1", name: "robin" });
  const handleLogout = () => setUser(null);

  return (
    <>
      {user ? (
        <button onClick={handleLogout}>Sign Out</button>
      ) : (
        <button onClick={handleLogin}>Sign In</button>
      )}
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="home" element={<Home user={user} />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="contact" element={<Contact />} />
          <Route exact path="auth/login" element={<Login />} />
          <Route exact path="auth/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}
