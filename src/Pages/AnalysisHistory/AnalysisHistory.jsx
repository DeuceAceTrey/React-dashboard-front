import React from "react";
import { AnalysisTable } from "../../components/Tables/Table";
import { Pages } from "../Subscriptions/Subscriptions";

const analysis = [
  { url: "url", date: "date", type: "type", id: "id" },
  { url: "url", date: "date", type: "type", id: "id" },
  { url: "url", date: "date", type: "type", id: "id" },
  { url: "url", date: "date", type: "type", id: "id" },
  { url: "url", date: "date", type: "type", id: "id" },
  { url: "url", date: "date", type: "type", id: "id" },
  { url: "url", date: "date", type: "type", id: "id" },
  { url: "url", date: "date", type: "type", id: "id" },
  { url: "url", date: "date", type: "type", id: "id" },
  { url: "url", date: "date", type: "type", id: "id" },
];

export default function AnalysisHistory() {
  return (
    <div style={{ width: "100%", padding: "15px" }}>
      <div style={{ padding: "10px", border: "1px solid var(--gray)" }}>
        <h2>Your Analysis History</h2>
        <br />
        <AnalysisTable analysis={analysis} />
        <Pages />
      </div>
    </div>
  );
}
