import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { useAuth } from "../../Contexts/AuthContext/AuthContext";
import classes from "./UploadContent.module.css";

export const DragDrop = ({ files, setFiles, small = false }) => {
  const [count, setCount] = useState(0);
  const { setNotif } = useAuth();
  const fileTypes = ["JPG", "PNG", "GIF"];
  const onSizeError = () => {
    setNotif("A file cannot be more than 50MB!");
    setFiles(null);
  };
  const onDrop = () => {
    if (files) {
      setCount(files.length);
    } else {
      setCount(0);
    }
  };

  useEffect(() => {
    if (files) {
      setCount(files.length);
    } else {
      setCount(0);
    }
  }, [files]);
  return (
    <div style={{ width: "100%" }}>
      <FileUploader
        handleChange={(files) => {
          if (files.length > 10) {
            setNotif("Cannot select more than 10 files!");
          } else {
            setFiles(files);
          }
        }}
        classes={classes.upload + (small ? " " + classes.smallUpload : "")}
        name="file"
        multiple
        maxSize={50}
        onSizeError={onSizeError}
        onDrop={onDrop}
        onSelect={onDrop}
      >
        Drag the files here OR click to select files <br />
        {count} file{"(s) "}selected
      </FileUploader>
      <button
        onClick={(e) => {
          setFiles(null);
        }}
        type="button"
        className={"button " + classes.clearFiles}
      >
        Clear files
      </button>
    </div>
  );
};

export default function UploadContent() {
  const [files, setFiles] = useState(null);
  const { setNotif } = useAuth();
  const submit = (e) => {
    e.preventDefault();
    if (files === null || files.length === 0) {
      setNotif("Please select at least 1 file");
      return;
    }
  };
  return (
    <form className={classes.container} onSubmit={submit}>
      <h5 style={{ color: "var(--dark-blue)", fontSize: "1.5rem" }}>
        Upload Content
      </h5>
      <h5>Upload any content you would like our team to protect.</h5>
      <div
        style={{
          margin: "10px auto",
          display: "flex",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <DragDrop files={files} setFiles={setFiles} />
      </div>
      <button
        className="button + capital"
        style={{
          color: "white",
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
