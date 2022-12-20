import React from "react";
import { useState } from "react";
import { useAuth } from "../../Contexts/AuthContext/AuthContext";
import classes from "./SubmitUrls.module.css";

export default function SubmitUrls() {
  const [urls, setUrls] = useState([""]);
  const { setNotif } = useAuth();
  return (
    <form className={classes.container}>
      <h5 style={{ color: "var(--dark-blue)", fontSize: "1.5rem" }}>
        Submit URLs
      </h5>
      <h5>Submit any URLs that you would like our team to work on.</h5>
      {urls.map((u, i) => {
        return (
          <input
            required
            key={i}
            className="input"
            value={u}
            onChange={(e) => {
              const copy = [...urls];
              copy[i] = e.currentTarget.value;
              setUrls(copy);
            }}
            style={{ width: "100%", marginBottom: "10px" }}
            placeholder={"URL " + (i + 1)}
          />
        );
      })}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <p
          className={classes.add}
          onClick={() => {
            if (urls.length <= 50) {
              const copy = [...urls];
              copy.push("");
              setUrls(copy);
            } else {
              setNotif("Maximum 50 URLs at a time");
            }
          }}
        >
          Add URL
        </p>{" "}
        <p
          className={classes.add}
          onClick={() => {
            if (urls.length > 1) {
              const copy = [...urls];
              copy.pop();
              setUrls(copy);
            } else {
              setNotif("Minimum 1 URL is required");
            }
          }}
        >
          Delete URL
        </p>
      </div>
      <h5 style={{ color: "var(--dark-blue)", fontSize: "1.5rem" }}>
        Or Upload CSV file
      </h5>
      <input type="file" accept=".csv" className="input" />
      <button
        className="button capital"
        style={{
          color: "var(--yellow)",
          backgroundColor: "var(--dark-blue)",
          margin: "0px auto",
          display: "block",
        }}
      >
        Submit
      </button>
    </form>
  );
}
