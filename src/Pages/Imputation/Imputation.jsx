import axios from "axios";
import fileDownload from "js-file-download";
import React from "react";
import { useState } from "react";
import { API } from "../../App";
import { useAuth } from "../../Contexts/AuthContext/AuthContext";
import classes from "./Imputation.module.css";
export default function Imputation() {
  const [login, setLogin] = useState(true)
  const [loading, setLoading] = useState(false)
  const { setNotif } = useAuth()
  const [fileName , setFileName] = useState('');
  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData);
    try {
      setLoading(true)
      const { data } = await API.post(
        "imputation",
        formData,
        {
          //headers: { "Content-Type": "multipart/form-data" },
          responseType: "blob",
        }
      );
      setLoading(false)
      if (data.success === false) {
        setNotif(data.message);
      } else {
        fileDownload(data, fileName);
      }
    } catch (error) {

      setNotif(error.message || 'Unkown Error')
    }
    setLoading(false)
  };
  return (
    <form onSubmit={submit} className={classes.container}>
      <h2 style={{ alignSelf: "flex-start", fontWeight: "200" }}>Imputation</h2>
      <p style={{ width: "100%" }}>Enter the URL you want to analyse:</p>
      <input
        type="text"
        required
        name='url'
        placeholder="URL"
        className="input"
        style={{ width: "100%" }}
      />
      <p style={{ width: "100%" }}>What do you want to save the file as?:</p>
      <input
        type="text"
        required
        name='file-name'
        placeholder="File name"
        className="input"
        onChange={(e)=> setFileName(e.target.value)}
        value={fileName}
        style={{ width: "100%" }}
      />
      <span style={{ display: "flex", gap: "0.5rem", width: "100%" }}>
        <label htmlFor="needLogin">Google login required?</label>
        <input
          checked={login}
          type="checkbox"
          name="login"
          onClick={() => setLogin(o => !o)}
          id="needLogin"
          onChange={() => { }}
        />
      </span>
      {login && (
        <>
          <p style={{ width: "100%" }}>Insert Google Account Username:</p>
          <input
            name='username'
            type="text"
            required
            placeholder="Gmail"
            className="input"
            style={{ width: "100%" }}
          />
          <p style={{ width: "100%" }}>Insert Google Account Password:</p>
          <input
            type="password"
            required
            name='password'
            placeholder="password"
            className="input"
            style={{ width: "100%" }}
          />
        </>
      )}

      <button disabled={loading} className="button">Submit</button>
    </form>
  );
}
