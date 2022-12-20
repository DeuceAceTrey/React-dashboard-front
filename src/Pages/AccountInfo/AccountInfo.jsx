import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PATH } from "../../App";
import { useAuth } from "../../Contexts/AuthContext/AuthContext";
import classes from "./AccountInfo.module.css";

const AccountInformation = ({ title, isEdit = false, onSubmit }) => {
  const email = useRef(null),
    first = useRef(null),
    last = useRef(null),
    password = useRef(null),
    repeat = useRef(null),
    current = useRef(null),
    business = useRef(null);
  const [type, setType] = useState("Individual");
  return (
    <form
      action=""
      className="container"
      style={{
        margin: isEdit ? "30px auto" : "",
      }}
      onSubmit={onSubmit}
    >
      <h2>{title}</h2>
      <div className={classes.button}>
        <input
          ref={first}
          type="text"
          placeholder="First Name"
          required
          className="input"
          disabled={isEdit}
        />
        <input
          ref={last}
          type="text"
          placeholder="Last Name"
          required
          className="input"
          disabled={isEdit}
        />
        <input
          type="email"
          defaultValue={isEdit ? "test@gmaail.com" : ""}
          placeholder="Email"
          required
          ref={email}
          className="input"
          disabled={isEdit}
        />
        {isEdit && (
          <input
            type="password"
            ref={current}
            defaultValue={isEdit ? "hhh" : ""}
            placeholder="Current password"
            className="input"
          />
        )}
        <input
          ref={password}
          type="Password"
          placeholder={isEdit ? "New Password" : "Password"}
          required
          className="input"
        />
        <input
          ref={repeat}
          type="Password"
          placeholder={isEdit ? "Confirm New Password" : "Confirm Password"}
          required
          className="input"
        />
        <p>You are a:</p>
        <select
          value={type}
          onChange={(e) => {
            setType(e.currentTarget.value);
          }}
          disabled={isEdit}
          required
          className="input"
        >
          <option value="Individual">Inidividual</option>
          <option value="Business">Business owner</option>
        </select>
        {type !== "Individual" && (
          <input
            placeholder="Business Name"
            required
            className="input"
            ref={business}
          />
        )}
        {/*<span>
          <label htmlFor="busibess"> Are you a </label>
          <input id="busibess" type="checkbox" />
        </span>*/}
      </div>
      <button className={"button " + classes.SingUp}>
        {isEdit ? "Edit" : "Sign up"}
      </button>
      {!isEdit && (
        <p style={{ margin: "15px auto", textAlign: "center" }}>
          Already Have an Account? <Link to={PATH.login}>Log in</Link>
        </p>
      )}
    </form>
  );
};

export const SignUp = ({}) => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const signUp = (e) => {
    e.preventDefault();
    login("username", "password", "remember");
    navigate(PATH.dashboard);
  };
  return <AccountInformation title="Sign Up" onSubmit={signUp} />;
};

export const EditAccount = ({}) => {
  return (
    <div
      style={{
        width: "100%",
        height: "fit-content",
        padding: "10px",
      }}
    >
      <div style={{ border: "1px solid var(--gray)" }}>
        <AccountInformation title="Edit Account Information" isEdit />
      </div>
    </div>
  );
};
