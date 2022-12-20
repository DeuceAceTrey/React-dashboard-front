import axios from "axios";
import React from "react";
import { useState } from "react";
import { API } from "../../App";
import { useAuth } from "../../Contexts/AuthContext/AuthContext";
import classes from "./AutoFlagger.module.css";

const PairInputs = ({ pairs, setPairs }) => {
  const [count, setCount] = useState(1)
  const { setNotif } = useAuth();
  return (
    <div className={classes.pairs}>
      {new Array(count).fill("").map((p, i) => (
        <span key={i}>
          <input

            required
            type="text"
            name={`URL${i}`}
            className="input"
            placeholder="URL"
          />
          <input
            name={`violation${i}`}
            required
            type="text"
            className="input"
            placeholder="Volation"
          />
          <button
            onClick={() => {
              if (count <= 1) {
                return setNotif("At least 1 Pair of URL & Violation is required!");
              }
              setCount(c => c - 1)
            }}
            type="button"
          >
            Remove
          </button>
        </span>
      ))}
      <br />
      <button
        onClick={() => {
          if (count > 50) {
            return setNotif("Maximum 50 pairs of URLs and Violations are allowed in Manual Method!");
          }
          setCount(c => c + 1)
        }}
        type="button"
      >
        Add
      </button>
    </div>
  );
};
const tabs = ["Auto Flagger", "Auto Flagger 2", "Submitter"];
export default function AutoFlagger() {
  const [tab, setTab] = useState(0);
  const [isFile, setIsFile] = useState(false);
  const [loading, setLoading] = useState(false)
  const { setNotif } = useAuth()
  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    try {
      setLoading(true)

      const { data } = await API.post(
        "auto-flagger1",
        formData,
        {
          //headers: { "Content-Type": "multipart/form-data" },
          //responseType: "blob",
        }
      );
      setLoading(false)
      console.log(data);
      if (data.success) {
        setNotif(data.message || 'Successful!')
      } else {
        setNotif(data.message || 'Unkown Error!')
      }
    } catch (error) {

      setNotif(error.message || 'Unkown Error')
    }
    setLoading(false)
  };
  return (
    <form onSubmit={submit} className={classes.container}>
      <h2 style={{ alignSelf: "flex-start", fontWeight: "200" }}>
        Auto Flagger
      </h2>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          alignSelf: "flex-start",
        }}
      >
        {tabs.map((t, i) => {
          return (
            <span
              className="button"
              style={
                i === tab
                  ? {
                    padding: "0.5rem 1rem",
                    color: "var(--yellow)",
                    background: "var(--dark-blue)",
                  }
                  : {
                    padding: "0.5rem 1rem",
                    color: "var(--dark-blue)",
                    background: "var(--gray)",
                  }
              }
              key={i}
              onClick={() => { if (!loading) setTab(i) }}
            >
              {t}
            </span>
          );
        })}
      </div>
      {tab !== 1 && (
        <>
          <input
            required
            name='gmail-id'
            type="text"
            placeholder="Gmail ID"
            className="input"
          />
          <input
            required
            name='password'
            type="password"
            placeholder="Password"
            className="input"
          />
        </>
      )}

      <div className={classes.method}>
        <span>Select a method for input:</span>
        <label htmlFor="manual">Manual</label>
        <input
          type="radio"
          name="manual"
          id="manual"
          checked={!isFile}
          onChange={() => { }}
          onClick={() => setIsFile(false)}
        />
        <label htmlFor="file">File</label>
        <input
          onChange={() => { }}
          type="radio"
          name="file"
          id="file"
          checked={isFile}
          onClick={() => setIsFile(true)}
        />
      </div>
      {isFile ? (
        <input required type="file" name='excel-file' className="input" accept=".xlsx" />
      ) : (
        <PairInputs />
      )}
      <button disabled={loading} className="button"> Submit</button>
    </form>
  );
}
