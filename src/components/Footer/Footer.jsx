import React from "react";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={classes.container}>
      <b>“We are persistent and love challenges’.</b>

      <div className={classes.social}>
        <p>
          <a
            href="https://web.facebook.com/Internet-Removals-US-606766489794393/?_rdc=1&amp;_rdr"
            target="_blank"
            rel="noopener"
          >
            <img
              src="https://internetremovals.com/wp-content/uploads/2020/12/Facebook_40.png"
              alt=""
              width="40"
              height="40"
            />
          </a>
          <a
            href="https://twitter.com/IntrnetRemovals"
            target="_blank"
            rel="noopener"
          >
            <img
              src="https://internetremovals.com/wp-content/uploads/2020/12/Twitter_40.png"
              alt=""
              width="40"
              height="40"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/internet-removals-us/"
            target="_blank"
            rel="noopener"
          >
            <img
              src="https://internetremovals.com/wp-content/uploads/2020/12/LinkedIn_40.png"
              alt=""
              width="40"
              height="40"
            />
          </a>
          <a
            href="https://www.instagram.com/internetremovals/"
            target="_blank"
            rel="noopener"
          >
            <img
              src="https://internetremovals.com/wp-content/uploads/2020/12/Instagram_40.png"
              alt=""
              width="40"
              height="40"
            />
          </a>
        </p>
      </div>
    </div>
  );
}
