import React from "react";
import { ContentHistoryTable } from "../../components/Tables/Table";
import { Pages } from "../Subscriptions/Subscriptions";

const dummyHistory = [
  { name: "rights.pdf", date: "2022/02/03", reviewed: true, id: "id" },
  { name: "words.pdf", date: "2022/01/23", reviewed: false, id: "id" },
  { name: "image.jpg", date: "2022/01/05", reviewed: true, id: "id" },
  { name: "project.pdf", date: "2022/01/01", reviewed: false, id: "id" },
  { name: "pictures.pdf", date: "2022/01/02", reviewed: true, id: "id" },
];

export default function ContentHistory() {
  return (
    <div
      style={{
        width: "100%",
        margin: "10px",
        padding: "10px",
        border: "1px solid var(--gray)",
        overflowY: "auto",
      }}
    >
      <h2 style={{ marginBottom: "20px", color: "var(--dark-blue)" }}>
        Uploaded Content History
      </h2>
      <ContentHistoryTable history={dummyHistory} />
      <Pages />
    </div>
  );
}
