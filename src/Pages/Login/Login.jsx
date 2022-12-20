import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PATH } from "../../App";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import {
  parseUserFromStorage,
  useAuth,
} from "../../Contexts/AuthContext/AuthContext";
import classes from "./Login.module.css";

const Left = () => {
  return (
    <div className={classes.left}>
      <h1>
        Internet
        <br />
        Removals
      </h1>
      <p>A lifetime to build, a moment to destroy.</p>
      <a target="_blank" href="https://internetremovals.com/about-us/">
        <button className="button">Learn More</button>
      </a>
    </div>
  );
};

export const Login = () => {
  const email = useRef(null),
    password = useRef(null);
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const logIn = (e) => {
    e.preventDefault();
    login("A user", "gg", "ggg");
    navigate(PATH.dashboard);
  };
  return (
    <form className="container" onSubmit={logIn}>
      <h2 className="capital">log in</h2>
      <div className={classes.top}>
        <input
          type="email"
          placeholder="Email"
          className="input"
          required
          ref={email}
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="input"
          required
        />
      </div>
      <div
        onClick={() => {
          setRemember((r) => !r);
        }}
        style={{ width: "fit-content" }}
      >
        <input
          style={{ marginBottom: "20px" }}
          checked={remember}
          type="checkbox"
          onChange={() => {}}
        />{" "}
        <label htmlFor="checkbox">Remember me</label>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <button
          className="button "
          style={{ backgroundColor: "var(--yellow)" }}
        >
          Log in
        </button>
        <br />
        <Link to={PATH.forgot}>Forgot Password?</Link>

        <p>
          Don't have an Account? <Link to={PATH.signup}>Sign Up</Link>
        </p>
      </div>
    </form>
  );
};

export default function Container({ children }) {
  const { setNotif } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const user = parseUserFromStorage();
    if (user) {
      //if (user && user.token) {
      setNotif("You are already logged in!");
      navigate(PATH.dashboard);
    }
  }, []);
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.center}>
        <Left />
        {children}
      </div>
      <Footer />
    </div>
  );
}
