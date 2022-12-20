import axios from "axios";
import fileDownload from "js-file-download";
import React from "react";
import { useState } from "react";
import { API } from "../../App";
import { useAuth } from "../../Contexts/AuthContext/AuthContext";
import classes from "./DCMA.module.css";
export default function DCMA() {
  const [client, setClient] = useState("");
  const [urls, setUrls] = useState([]);
  const [db, setDb] = useState([]);
  const { setNotif } = useAuth();
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    // if (db.length === 0) {
    //   setNotif("Please Insert A Database File");
    //   return;
    // }
    if (urls.length === 0) {
      setNotif("Please Insert A Contact URLs File");
      return;
    }
    const formData = new FormData();
    formData.append("client-name", client);
    formData.append("db-file", db[0]);
    formData.append("urls-file", urls[0]);
    try {
      setLoading(true);
      const { data } = await API.post(
        "DCMA",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          responseType: "blob",
        }
      );
      if (data.success === false) {
        setNotif(data.message);
      } else {
        fileDownload(data, "results.zip");
      }
      setLoading(false);
    } catch (error) {
      setNotif(error.message);
    }
    setLoading(false);
  };
  return (
    <form onSubmit={submit} className={classes.container}>
      <h3>DCMA Sender</h3>
      <div className={classes.flex}>
        <div className={classes.inputs}>
          {/* <label htmlFor="file">Insert Contact Database</label>
          <input
            required
            type="file"
            className="input"
            id="file"
            onChange={(e) => setDb(e.currentTarget.files)}
            accept=".csv"
          />
          <br /> */}
          <label htmlFor="name">Client Name</label>
          <input
            value={client}
            onChange={(e) => setClient(e.currentTarget.value)}
            required
            placeholder="Name"
            className="input"
            id="name"
          />
          <br />
          <label htmlFor="urls">Insert Contact URLs</label>
          <input
            required
            placeholder="URLs"
            className="input"
            id="urls"
            type="file"
            accept=".xlsx"
            onChange={(e) => setUrls(e.currentTarget.files)}
          />
          <br />
          <label htmlFor="success">Success File Name</label>
          <input
            value={`${client}-success-id`}
            readOnly
            type="text"
            className="input"
            id="success"
          />
          <br />
          <label htmlFor="failure">Failure File Name</label>
          <input
            readOnly
            value={`${client}-failure-id`}
            type="text"
            className="input"
            id="failure"
          />
          <br />
        </div>
        <div className={classes.inputs} style={{ height: "36rem" }}>
          <label htmlFor="results">Results</label>
          <textarea
            className="input"
            readOnly
            value={"Results goes here"}
          ></textarea>
          <button
            className="button capital"
            style={{
              margin: "auto",
              backgroundColor: loading ? "var(--gray)" : "var(--dark-blue)",
              color: loading ? "var(--blue)" : "var(--yellow)",
            }}
            disabled={loading}
          >
            Remove now
          </button>
        </div>
      </div>
    </form>
  );
}
