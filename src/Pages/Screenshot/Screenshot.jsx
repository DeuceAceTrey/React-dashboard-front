import axios from "axios";
import fileDownload from "js-file-download";
import React, { useState } from "react";
import { API } from "../../App";
import { useAuth } from "../../Contexts/AuthContext/AuthContext";
import classes from "./Screenshot.module.css";

export default function Screenshot() {
  const [loading, setLoading] = useState(false)
  const { setNotif } = useAuth()
  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    try {
      setLoading(true)
      const { data } = await API.post(
        "screenshot",
        formData,
        {
          //headers: { "Content-Type": "multipart/form-data" },
          //responseType: "blob",
        }
      );
      setLoading(false)

      if (data.success === false) {
        setNotif(data.message);
      } else {
        fileDownload(data, "results.pdf");
      }
    } catch (error) {
      setNotif(error.message || 'Unkown Error')
    }
    setLoading(false)
  };
  return (
    <form
      onSubmit={submit}
      className={classes.container}
    >
      <h2 style={{ alignSelf: "flex-start", fontWeight: "200" }}>
        Screeenshot Tool
      </h2>
      <p style={{ alignSelf: "flex-start" }}>Please select a file of URLs:</p>
      <input required style={{ width: "100%" }} type="file" className="input" accept=".txt" name='file' />
      <button disabled={loading} className="button">Submit</button>
    </form>
  );
}
