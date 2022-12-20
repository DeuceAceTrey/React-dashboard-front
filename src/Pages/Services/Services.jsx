import React, { Fragment } from "react";
import { useState } from "react";
import { CountryDropdown } from "react-country-region-selector";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../App";
import { useAuth } from "../../Contexts/AuthContext/AuthContext";
import classes from "./Services.module.css";

export default function Services() {
  const [country, setCountry] = useState("");
  const [urls, setUrls] = useState([""]);
  const { setNotif } = useAuth();
  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    navigate(PATH.contract);
  };
  return (
    <div style={{ padding: "10px" }}>
      <div className={classes.container}>
        <div style={{ margin: "15px 0px" }}>
          <h3>SERVICES</h3>
          <h3 className="capital">content removal application services</h3>
          <p>
            Our Content Removal Application process has successfully removed all
            types of content on over 800 231 occasions We provide our clients
            with this service whereby we draft, submit and manage applications
            for the removal of potentially illegal content from the internet
            <br />
            <br />
            <b>Content Examples:</b>
            Negative Reviews, Revenge Porn, Doxing, Film Piracy, Counterfeiting,
            Unauthorised Social Media Pages, Impersonation, Spam Reviews
            <br />
            <br />
            <b>Platform Examples:</b> Google {"(Search)"}, Google {"(Reviews)"},
            Facebook, Instagram, YouTube, Ripoff Report
            <br />
          </p>
        </div>
        <form onSubmit={submit}>
          <div className={classes.form}>
            <div>
              <h4 className="capital">insert urls</h4>
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
                    style={{ width: "100%" }}
                    placeholder={"URL " + (i + 1)}
                  />
                );
              })}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
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
            </div>
            <div className={classes.input}>
              <div className="input">
                <input type="checkbox" required />
                <label htmlFor="checkbox">
                  Have you read &nbsp;
                  <a target="_blank" href="#" style={{ color: "black" }}>
                    our terms?
                  </a>
                  *
                </label>{" "}
              </div>
              <div className="input">
                <input type="checkbox" required />
                <label htmlFor="checkbox">
                  Have you read &nbsp;
                  <a target="_blank" href="#" style={{ color: "black" }}>
                    our services inclusions?
                  </a>
                  *
                </label>
              </div>
              <label htmlFor="select">
                Please select your country of residence
              </label>
              <CountryDropdown
                showDefaultOption={false}
                classes="input"
                value={country}
                onChange={(val) => setCountry(val)}
              />
              <label htmlFor="select">Please select your representative</label>
              <select className="input">
                <option value="1">representative 1</option>
                <option value="2">representative 2</option>
                <option value="3">representative 3</option>
              </select>
            </div>
          </div>
          <button
            className="button capital"
            style={{
              color: "var(--yellow)",
              backgroundColor: "var(--dark-blue)",
              borderColor: "var(--yellow)",
              margin: "0px auto",
              display: "block",
            }}
          >
            <b>remove now</b>
          </button>
        </form>
      </div>
    </div>
  );
}
