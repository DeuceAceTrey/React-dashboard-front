import React, { useState } from "react";
import { useAuth } from "../../Contexts/AuthContext/AuthContext";
import { DragDrop } from "../../Pages/UploadContent/UploadContent";

import classes from "./Tools.module.css";

export default function Tools() {
  const [urls, setUrls] = useState([""]);
  const [files, setFiles] = useState(null);
  const { setNotif } = useAuth();
  return (
    <form className={classes.container}>
      <h2 style={{ color: "var(--dark-blue)" }}>Web Research</h2>
      <br />
      <div className={classes.top}>
        <div>
          <p>Insert URLs: </p>
          <br />
          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            {urls.map((u, i) => {
              return (
                <input
                  required //not required if user uploades content, i.e files && files.length>0
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
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              margin: "1rem 0px",
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
        <div>
          <p>Upload URLs:</p>
          <br />
          <DragDrop small files={files} setFiles={setFiles} />
        </div>
      </div>
      {/*<div className={classes.fields}>
        <p>Template Fields:</p>
        <input placeholder="field1" type="text" className="input" />
        <input placeholder="field2" type="text" className="input" />
        <input placeholder="field3" type="text" className="input" />
      </div>*/}
      <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button className="button">Search</button>
        <button className="button" type="button">
          Refresh
        </button>
      </div>
      <br />
      <hr style={{ color: "var(--gray)" }} />
      <br />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>Results:</p>
        <a href="#">Download</a>
      </div>

      <br />
      <div className="input" style={{ height: "10rem", padding: "10px" }}>
        Here we will have a sample or part of the results, user will need to
        download the results if its too big for this field
      </div>
    </form>
  );
}
