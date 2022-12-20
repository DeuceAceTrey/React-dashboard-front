import React from "react";
import SubscriptionCard from "../../components/SubscriptionCard/SubscriptionCard";
import { SubscriptionsTable } from "../../components/Tables/Table";

import classes from "./Subscriptions.module.css";

const dummyOptions = [
  { desciption: "24/7 support", has: true },
  { desciption: "option 2", has: true },
  { desciption: "option 3", has: true },
  { desciption: "option 4", has: false },
  { desciption: "option 5", has: true },
  { desciption: "option 6", has: false },
];

export const Pages = ({}) => {
  return (
    <div className={classes.pages}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div style={{ backgroundColor: "white", color: "var(--dark-blue)" }}>
        4
      </div>
      <span>...</span>
      <div>10</div>
    </div>
  );
};

export default function Subscriptions() {
  return (
    <div className={classes.main}>
      <div style={{ border: "1px solid var(--gray)" }}>
        <h2>Our Subsciptions</h2>
        <div className={classes.container}>
          <SubscriptionCard
            name={"Basic"}
            options={dummyOptions}
            price="25"
            color="rgb(200, 200, 255)"
            background={{
              color: "rgb(200, 200, 255)",
              linear:
                "linear-gradient(0deg,rgba(200, 200, 255, 1) 0%,rgba(255, 255, 255, 1) 10%)",
            }}
          />
          <SubscriptionCard
            name={"Pro"}
            options={dummyOptions}
            price="50"
            color="rgb(172, 255, 48)"
            background={{
              color: "rgb(172, 255, 48)",
              linear:
                "linear-gradient(0deg,rgba(172, 255, 48, 1) 0%,rgba(255, 255, 255, 1) 10%)",
            }}
          />
          <SubscriptionCard
            name={"Premium"}
            options={dummyOptions}
            price="100"
            color="rgb(255, 19, 255,0.3)"
            background={{
              color: "rgb(255, 19, 255)",
              linear:
                "linear-gradient(0deg,rgba(255, 19, 255, 0.3) 0%,rgba(255, 255, 255, 1) 10%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
