import React from "react";
import { SubscriptionsTable } from "../../components/Tables/Table";
import { Pages } from "../Subscriptions/Subscriptions";

const subs = [
  {
    name: "name",
    purchaseDate: "p date",
    start: "s date",
    end: "e date",
    paid: "25$",
    id: "id",
  },
  {
    name: "name",
    purchaseDate: "p date",
    start: "s date",
    end: "e date",
    paid: "25$",
    id: "id",
  },
  {
    name: "name",
    purchaseDate: "p date",
    start: "s date",
    end: "e date",
    paid: "25$",
    id: "id",
  },
  {
    name: "name",
    purchaseDate: "p date",
    start: "s date",
    end: "e date",
    paid: "25$",
    id: "id",
  },
  {
    name: "name",
    purchaseDate: "p date",
    start: "s date",
    end: "e date",
    paid: "25$",
    id: "id",
  },
  {
    name: "name",
    purchaseDate: "p date",
    start: "s date",
    end: "e date",
    paid: "25$",
    id: "id",
  },
  {
    name: "name",
    purchaseDate: "p date",
    start: "s date",
    end: "e date",
    paid: "25$",
    id: "id",
  },
  {
    name: "name",
    purchaseDate: "p date",
    start: "s date",
    end: "e date",
    paid: "25$",
    id: "id",
  },
];

export default function SubscriptionsHistory() {
  return (
    <div style={{ width: "100%", padding: "15px" }}>
      <div style={{ padding: "10px", border: "1px solid var(--gray)" }}>
        <h2>Your Subscriptions History</h2>
        <br />
        <SubscriptionsTable sub={subs} />
        <Pages />
      </div>
    </div>
  );
}
