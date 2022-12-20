import React from "react";
import { useState } from "react";
import classes from "./CRB.module.css";
import TagInput from "react-taggables-input";
import "react-taggables-input/dist/tags.css";
import { useAuth } from "../../Contexts/AuthContext/AuthContext";
import fileDownload from "js-file-download";
import { API } from "../../App";
export default function CRB() {
  const [isFile, setIsFile] = useState(false);
  const [keywords, setKeywords] = useState([]);
  const [loading, setLoading] = useState(false)
  const { setNotif } = useAuth()
  const submit = async (e) => {

    e.preventDefault();
    const formData = new FormData(e.target)
    formData.append('keywords', JSON.stringify(keywords));
    console.log(keywords);
    try {
      setLoading(true)
      const { data } = await API.post(
        "crb",
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
        fileDownload(data, "results.xlsx");
      }
    } catch (error) {

      setNotif(error.message || 'Unkown Error')
    }
    setLoading(false)
  };
  return (
    <form onSubmit={submit} className={classes.container}>
      <h2 style={{ alignSelf: "flex-start", fontWeight: "200" }}>CRB TOOL</h2>
      <div className={classes.method}>
        <span>Select a method for keyword input:</span>
        <label htmlFor="manual">Manual</label>
        <input
          type="radio"
          name="manual"
          id="manual"
          onChange={() => { }}
          checked={!isFile}
          onClick={() => setIsFile(false)}
        />
        <label htmlFor="file">File</label>
        <input
          type="radio"
          name="file"
          id="file"
          onChange={() => { }}
          checked={isFile}
          onClick={() => setIsFile(true)}
        />
      </div>

      {isFile ? (
        <input required type="file" name="excel-file" className="input" accept=".xlsx" />
      ) : (
        <div className={classes.tag}>
          <TagInput
            value={keywords}
            onChange={(tags) => setKeywords(tags)}
            placeholder="Keywords (Type and press enter)"
          />
        </div>
      )}

      <button type="submit" disabled={loading} className="button" style={{ margin: "0px auto" }}>
        SUBMIT
      </button>
    </form>
  );
}
