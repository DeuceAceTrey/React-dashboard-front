import React from "react";
import {
  GreenTick,
  RedX,
  TickIcon,
  TickIcon2,
} from "../../Pages/Dashbord/icons/search";
import classes from "./SubscriptionCard.module.css";

export default function SubscriptionCard({
  name,
  price,
  options,
  color,
  background,
}) {
  return (
    <div className={classes.container}>
      <div
        className="container"
        style={{ background: background.color, background: background.linear }}
      >
        <div className={classes.title}>
          <h2 style={{ backgroundColor: color }}>{name}</h2>
          <p>{price}$/month</p>
        </div>
        <br />
        <hr />
        <br />
        <table className={classes.options}>
          <tbody>
            {options.map((m, i) => {
              return (
                <tr key={i}>
                  <td key={i}>{m.desciption}</td>
                  <td style={{ textAlign: "center" }}>
                    {m.has ? <GreenTick /> : <RedX />}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <button className={"button " + classes.btn}>Add to Cart</button>
    </div>
  );
}
