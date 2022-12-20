import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { PATH } from "../../App";
import { useAuth } from "../../Contexts/AuthContext/AuthContext";
import classes from "./ForgotPassword.module.css";

export default function ForgotPassword() {
  const email = useRef(null);

  return (
    <form className="container">
      <h2>Enter Your Email Address</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input
          type="email"
          placeholder="Email"
          className="input"
          ref={email}
          style={{ margin: "15px 0px" }}
        />
        <button className={"button " + classes.btn}>Send Email</button>
        <Link to={PATH.login} style={{ margin: "0px auto", marginTop: "10px" }}>
          Return to Login
        </Link>
      </div>
    </form>
  );
}
