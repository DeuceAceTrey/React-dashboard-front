import axios from "axios";
import React, { useState } from "react";
import { API } from "../../App";
import { useAuth } from "../../Contexts/AuthContext/AuthContext";
import classes from "./GoogleSeacrhTool.module.css";
export default function GoogleTool({ isMap = false }) {
  const [loading, setLoading] = useState(false)
  const { setNotif } = useAuth()
  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    try {
      setLoading(true)
      const { data } = await API.post(
        `${isMap ? 'google-maps' : 'google-search'}`,
        formData,
        {
          //headers: { "Content-Type": "multipart/form-data" },
          //responseType: "blob",
        }
      );
      setLoading(false)
      console.log(data);
      if (data.success) {
        ///
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
      <h2 style={{ fontWeight: "200", alignSelf: "flex-start" }}>
        {isMap ? "Google Maps Tool" : "Google Search Tool"}
      </h2>
      <p style={{ width: "100%" }}>Please Enter The Google spreadsheet ID:</p>
      <input
        required
        type="password"
        className="input"
        name="id"
        style={{ width: "100%" }}
        placeholder="ID"
      />
      <button disabled={loading} className="button">Submit</button>
    </form>
  );
}
