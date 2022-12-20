import React from "react";
import classes from "./NewSubscriptions.module.css";

const SubCard = ({
  name,
  price,
  recommended,
  copyRightNum,
  removalApplications,
  copyrightTypes,
  rows,
  boxShadow = false,
}) => {
  return (
    <div
      style={{
        boxShadow: boxShadow ? "0 0 6px 6px rgba(0, 0, 0, 0.08)" : "",
        padding: "10px",
        height: "fit-content",
      }}
    >
      <table className={classes.table}>
        <thead>
          <tr>
            <th>{name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <b
                  style={{
                    alignSelf: "flex-start",
                    transform: "translateY(0.7rem)",
                    fontSize: "1.3rem",
                  }}
                >
                  USD$
                </b>
                <b
                  style={{
                    color: "var(--yellow)",
                    alignSelf: "center",
                    fontSize: "3.5rem",
                  }}
                >
                  {price}
                </b>
                <i
                  style={{
                    alignSelf: "flex-end",
                    transform: "translateY(-0.7rem)",
                    color: "var(--gray)",
                    fontWeight: "bold",
                  }}
                >
                  monthly
                </i>
              </div>
            </td>
          </tr>
          <tr>
            <td>{recommended}</td>
          </tr>
          <tr>
            <td>24/7 Monitoring</td>
          </tr>
          <tr>
            <td>24/7 Email Support</td>
          </tr>
          <tr>
            <td>
              <b>Number of Copyrights Monitored: </b>
              {copyRightNum}
            </td>
          </tr>
          <tr>
            <td>
              <b>URL Removal Applications: </b>
              {removalApplications}
            </td>
          </tr>
          <tr>
            <td>
              <b>Copyright Types: </b>
              {copyrightTypes}
            </td>
          </tr>
          {rows.map((r, i) => {
            return (
              <tr key={i}>
                <td>{r}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const dummySubs = [
  {
    name: "Standard",
    price: 99,
    recommended: "Recommended for creators with low content uploads.",
    copyrightNum: 10,
    removalApplications: 150,
    copyrightTypes: "Images + Videos",
    rows: [],
    shadow: false,
  },
  {
    name: "Comprehensive",
    price: 199,
    recommended: "Recommended for creators with low content uploads.",
    copyrightNum: 50,
    removalApplications: 300,
    copyrightTypes: "Images + Videos",
    rows: [
      "Dedicated URL Reporting Portal",
      "Dedicated Image/Video Upload Portal",
      "Takedown Requests issued to ISPs and Web Hosts",
      "Monthly Reports",
    ],
    shadow: true,
  },
  {
    name: "Premium",
    price: 299,
    recommended: "Recommended for creators with low content uploads.",
    copyrightNum: 100,
    removalApplications: "Unlimited",
    copyrightTypes: "Images + Videos",
    rows: [
      "Dedicated URL Reporting Portal",
      "Dedicated Image/Video Upload Portal",
      "Takedown Requests issued to ISPs and Web Hosts",
      "Monthly Reports",
      "24 Hour Priority Service",
      "Dedicated Account Manager",
      "Digital Watermarking",
    ],
    shadow: false,
  },
];

const Benefit = ({ image, index, title, description }) => {
  return (
    <div className={classes.benefit}>
      <h3 style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <img src={image} alt="" />
        {index}. {title}
      </h3>
      <br />
      <p>{description}</p>
    </div>
  );
};

const dummyBenefits = [
  {
    title: "We complete our Onboarding Process",
    description:
      "When you decide to proceed, we begin our onboarding process. This includes obtaining a copy of your ID, a signed letter of authority and other documentation or information you may deem to be relevant.",
  },
  {
    title: "Documentation",
    description:
      "Our experts will require your ID and a letter of Authority as per our onboarding process. Once we have this, we can proceed to step 3 in our services.",
  },
  {
    title: "Removal Requests",
    description:
      "Once we have everything we need from you, our team begins contacting all responsible platforms demanding removal of the offending content. ",
  },
  {
    title: "Success!",
    description:
      "Once the platforms comply with our demands, we will notify you via email of what content has been removed. This typically can take anywhere from 24 hours, to a few days.",
  },
  {
    title: "Rinse and Repeat",
    description:
      "We continue working tirelessly on your matter, monitoring for new infringements and applying to remove any that occur. ",
  },
];

const Benefits = () => {
  return (
    <>
      <h2
        style={{
          color: "var(--dark-blue)",
          textAlign: "center",
          margin: "2.5rem 0px",
          fontSize: "2.5rem",
        }}
      >
        What happens when I sign up?
      </h2>
      <div className={classes.benefitsContainer}>
        {dummyBenefits.map((b, i) => {
          return (
            <Benefit
              key={i}
              description={b.description}
              title={b.title}
              index={i + 1}
              image={require(`../../static/Container${i + 1}.png`)}
            />
          );
        })}
      </div>
    </>
  );
};

export default function NewSubscriptions() {
  return (
    <div
      style={{
        padding: "10px",

        width: "calc(100% - 2.5rem)",
      }}
    >
      <h1>Membership Plans</h1>
      <p>
        Our membership plans below relates to applications to monitor for and
        remove offending content, such as images, videos or otherwise described.
      </p>
      <br />
      <br />
      <div className={classes.cardsContainer}>
        {dummySubs.map((s, i) => {
          return (
            <SubCard
              key={i}
              copyRightNum={s.copyrightNum}
              copyrightTypes={s.copyrightTypes}
              name={s.name}
              price={s.price}
              removalApplications={s.removalApplications}
              rows={s.rows}
              recommended={s.recommended}
              boxShadow={s.shadow}
            />
          );
        })}
      </div>
      <br />
      <div className={classes.buttonsContainer}>
        {dummySubs.map((m, i) => {
          return (
            <div key={i}>
              <p style={{ fontSize: "1.5rem" }}>{m.name}</p>
              <br />
              <p>30 Day Cancellation</p>
              <br />
              <button className="button capital">Get started</button>
            </div>
          );
        })}
      </div>
      <Benefits />
      <h3
        style={{
          color: "var(--dark-blue)",
          textAlign: "center",
          margin: "2.5rem 0px",
          fontSize: "2.5rem",
        }}
      >
        Want to learn more about how we protect you online?
      </h3>
      <a
        style={{ textDecoration: "none" }}
        target="_blank"
        href="https://protect.internetremovals.com/onboarding/"
      >
        <button
          className="button"
          style={{
            margin: "0px auto",
            display: "block",
            backgroundColor: "var(--dark-blue)",
            color: "var(--yellow)",
          }}
        >
          Learn More
        </button>
      </a>
    </div>
  );
}
