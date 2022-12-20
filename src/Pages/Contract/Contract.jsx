import React, { Fragment } from "react";
import classes from "./Contract.module.css";
const info = {
  name: "Justin",
  urls: [
    "https://www.google.com/maps/contrib/109342094412327373421/place/ChIJpaM9-3eiEmsReAZXraZXhcI/@-33.8396633,150.8877329,17z/data=!4m6!1m5!8m4!1e1!2s109342094412327373421!3m1!1e1?hl=en-US",
    "https://goo.gl/maps/QbzqNpJLtWqvjtRJ8",
    "https://goo.gl/maps/Jb7A7hd1NEvztvLTA",
    "https://goo.gl/maps/Q1kXLaHvd8iwJL3n6",
    "https://goo.gl/maps/RAujxcDufWT9Jk4g6",
    "https://goo.gl/maps/5oKE1r4BigXsBVst8",
  ],
  base: 50,
  extention: "Local Google Extension: .COM.AU",
  id: "6cn6gnfw8rscggb6cn618qd986cu8etd",
};

const calcFee = (count, base) => {
  //base should not be less than max count
  let result = 0;
  for (let i = 0; i < count; i++) {
    result += base - i;
  }
  return result;
};

export default function Contract() {
  return (
    <div className={classes.container}>
      <h4 className="capital" style={{ fontSize: "1.5rem" }}>
        content removal application services
      </h4>
      <br />
      <pre className={classes.proposal}>
        {`Hi ${info.name},
        
As discussed, I have put together our official fee proposal below which outlines the content within our scope, our methodology, fees and terms. As with any quote, please make sure you read through and understand our material prior to moving forward.

`}
        <b>Content</b>
        {`

Based on the information you have provided, I understand that the following URLs are of concern to you:

`}
        {info.urls.map((u, i) => {
          return (
            <Fragment key={i}>
              {i + 1}.{" "}
              <a target="_blank" href={u}>
                {u}
              </a>
              <br />
              <br />
            </Fragment>
          );
        })}
        {`

In the event we have missed the content you believe warrants removal, please let us know before providing instructions to proceed.

`}
        <b>Methodology</b>
        {`

In this instance, we undertake to employ method 1 contained at page 5 of our Service Inclusions found here: https://bit.ly/37Wz6Db.
Further to this, as per our offer, please note that we will provide unlimited applications for 3 months. This clause takes priority over all other references to time periods in our proposal.

${info.extention}


`}
        <b>Our Fees</b>
        {`

Our fees for standard content removal applications in relation to the content listed in the above URLs are $${calcFee(
          info.urls.length,
          info.base
        )}AUD inclusive of GST.


`}
        <b>Moving Forward</b>
        {`

Please navigate to`}{" "}
        {
          <a target="_blank" href="https://internetremovals.com/onboarding-au/">
            https://internetremovals.com/onboarding-au/
          </a>
        }{" "}
        {`and read through our Terms, Proposal and Service Inclusions.

If you are happy to proceed as set out above, please complete our Services Agreement found here:`}{" "}
        {
          <a target="_blank" href="http://bit.ly/ir-services-agreement">
            http://bit.ly/ir-services-agreement
          </a>
        }
        {`. Upon receipt of your agreement I will arrange for our invoice to be issued and the onboarding process to begin.

`}
        <b>Proposal ID</b> {`: ${info.id}`}
      </pre>
      <br />
      <button className={"button capital " + classes.btn}>
        I agree TO THESE TERMS
      </button>
    </div>
  );
}
