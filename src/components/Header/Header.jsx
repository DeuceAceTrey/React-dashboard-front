import React from "react";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <div className={classes.container}>
      <img src={require("../../static/logo.png")} alt="Internet Removals" />
      <p>The Content Removals Experts</p>
    </div>
  );
}
