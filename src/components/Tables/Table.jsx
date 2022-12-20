import React from "react";
import { GreenTick, RedX } from "../../Pages/Dashbord/icons/search";
import classes from "./Table.module.css";

export const SubscriptionsTable = ({ sub }) => {
  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th>=</th>
          <th>Subscription Name</th>
          <th>Purchase Date</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Paid</th>
          <th>ID</th>
        </tr>
      </thead>
      <tbody>
        {sub.map((m, i) => {
          return (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{m.name}</td>
              <td>{m.purchaseDate}</td>
              <td>{m.start}</td>
              <td>{m.end}</td>
              <td>{m.paid}</td>
              <td>{m.id}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export const AnalysisTable = ({ analysis }) => {
  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th>=</th>
          <th>Analyzed URL</th>
          <th>Date</th>
          <th>Analysis Type</th>
          <th>Results</th>
          <th>ID</th>
        </tr>
      </thead>
      <tbody>
        {analysis.map((m, i) => {
          return (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{m.url}</td>
              <td>{m.date}</td>
              <td>{m.type}</td>
              <td>
                <a href="#">download</a>{" "}
              </td>
              <td>{m.id}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export const ContentHistoryTable = ({ history }) => {
  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th>=</th>
          <th>Content Name</th>
          <th>Upload Date</th>
          <th>Reviewed</th>
          <th>Results</th>
          <th>ID</th>
        </tr>
      </thead>
      <tbody>
        {history.map((m, i) => {
          return (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{m.name}</td>
              <td>{m.date}</td>
              <td>{m.reviewed ? <GreenTick /> : <RedX />}</td>
              <td>
                <a href="#">View</a>
              </td>
              <td>{m.id}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
