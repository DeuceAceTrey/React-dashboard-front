import React from "react";
import { useState } from "react";
import { Pie, Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

import classes from "./Dashboard.module.css";
import Search, {
  AllToolsLogo,
  AnalysisHistory,
  ArrowLogo,
  ContentHistoryIcon,
  CopyIcon,
  DCMALogo,
  GoogleLogo,
  GoogleMapLogo,
  ImputationLogo,
  LogoFlag,
  LogOutIcon,
  MenuLogo,
  RemovalIcon,
  ScreenshotIcon,
  SettingsLogo2,
  SubHistory,
  SubIcon,
  ToolsIcon,
  UploadIcon,
  WorkIcon,
} from "./icons/search";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { API, PATH } from "../../App";
import { useAuth } from "../../Contexts/AuthContext/AuthContext";
import { useEffect } from "react";

import { List, ListItem, SimpleListItem } from "@rmwc/list";
import "@rmwc/list/styles";
const menuWidth = "2.5rem";

const Navbar = ({ open }) => {
  return (
    <div className={classes.navbar}>
      <div
        className={classes.menu}
        style={{ width: menuWidth, minWidth: menuWidth }}
      >
        <MenuLogo onClick={open} />
      </div>
      <img
        style={{ height: "3rem" }}
        src={require("../../static/logo.png")}
        alt="internet"
      />

      <div
        style={{
          marginLeft: "auto",
          display: "flex",
          gap: "5px",
          paddingRight: "5px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "gray",
            justifyContent: "space-evenly",
            alignItems: "flex-end",
          }}
        >
          <b>RENCEE MCKELVEY</b>
          <p>Account Setting</p>
        </div>
        <img
          style={{ height: "3rem" }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png"
          alt="profile photo"
        />
      </div>
    </div>
  );
};

const InsertURLs = ({ setChartData , setImpText}) => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const { setNotif } = useAuth();
  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("text", url);
    try {
      setLoading(true);
      const { data } = await API.post(
        "sentiment_analysis_prediction",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setLoading(false);
      setNotif(data.message);
      if (data.success) {
        setChartData(data.result['sentiment_review']);
        let imp = data.result['imputation'];
        var text = '';
        let counts = imp['COUNTS'];
        let im = imp['IMPUTATION'];
        let word = imp['WORD'];
        for(var i=0;i<counts.length;i++)
        {
          text += word[i] + '\t' + counts[i] + '\t' + im[i] + '\n';
        }
        setImpText(text);
        // (imp).forEach(im => {
        //   text += im
        // });
        /*negative;
        positive;
        neutral;
        review;*/
      }
    } catch (error) {
      setNotif(error.message);
    }
    setLoading(false);
  };
  return (
    <form className={classes.Urls} onSubmit={submit}>
      <h2 className="capital">URL Analysis Tool</h2>
      <br />
      <i style={{ color: "rgb(80,80,80)", fontSize: "0.9rem" }}>
        Insert any URL below and our system will conduct a preliminary analysis
        to determine whether we think there are any prospects of success. <br />{" "}
        Please note this is for text based URLs, i.e. not for removal of images.
        Please only insert ONE URL at a time.{" "}
      </i>
      <br />
      <input
        required
        value={url}
        onChange={(e) => setUrl(e.currentTarget.value)}
        type="text"
        placeholder="URL"
        className="input"
      />
      <br />
      <button disabled={loading} className="hover button">
        {loading ? "Analyzing" : "Analyze"}
      </button>
    </form>
  );
};

const ProgressBar = ({ progress = 50, title }) => {
  return (
    <div style={{ marginBottom: "5px" }}>
      <p>
        {title}: {progress}%
      </p>
      <div className={classes.bar}>
        <div style={{ width: progress + "%" }} />
      </div>
    </div>
  );
};

const Analysis = ({progress=80,imputation_text=''}) => {
  return (
    <div className={classes.analysisContainer}>
      <div className={classes.Analysis}>
        <h2 className="capital" style={{ color: "var(--dark-blue)" }}>
          Analysis
        </h2>
        <div
          style={{
            backgroundColor: "var(--gray)",
            padding: "2px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <SettingsLogo2 />
        </div>
      </div>
      <div className={classes.ProgressContainer}>
        <ProgressBar progress={80} title="URL Prospects of Success" />
      </div>
      <br />
      <i style={{ color: "rgb(80,80,80)", fontSize: "0.9rem" }}>
        Our analysis is based on 11 years of experience and over 800,000
        previous successes. While we are confident in our prediction, past
        performance is not always an indicator of future results. For more
        information, please contact our team.{" "}
      </i>
      <br />
      <br />
      <p className="capital">Word Frequency</p>
      <br />
      <div className={"input " + classes.wordFreq}>{imputation_text}</div>
    </div>
  );
};

const CircularChart = ({ data }) => {
  console.log(data);
  return (
    <div className={classes.chartContainer}>
      <h3
        className="capital"
        style={{
          textAlign: "center",
          color: "var(--dark-blue)",
          padding: "15px 0px",
        }}
      >
        sentiment Analysis
      </h3>
      <Pie data={data} options={{}} />
    </div>
  );
};

const ServiceItem = ({ children, price }) => {
  return (
    <div className={classes.Item}>
      <p>{children}</p>
      <button className="hover">${price}</button>
    </div>
  );
};

const Services = () => {
  return (
    <div className={classes.Services}>
      <h2 className="capital">Services</h2>
      <p>
        Would you like to proceed with applications to remove this URL, or a
        group of URLS?
      </p>

      <Link to={PATH.services}>
        <button
          className="button"
          style={{
            marginTop: "1rem",
            color: "var(--yellow)",
            backgroundColor: "var(--dark-blue)",
            width: "100%",
          }}
        >
          REMOVE NOW!
        </button>
      </Link>
      {/*<ServiceItem price={99}>
        Content Removal Applications against all inserted URLs for a period of
        up to 6 months. click <a href="#">{"<here>"}</a> to view our Service
        inclusions
      </ServiceItem>{" "}
      <ServiceItem price={"199.00"}>
        all of the inclusions of the above, plus X ABC
      </ServiceItem>
      <ServiceItem price={"99.00"}>
        {" "}
        Inclusions of Formal Legal Letter provided by IRG Law
      </ServiceItem>
      <ServiceItem price={"299.00"}>
        {" "}
        all of the inclusions of the above, plus X ABC
  </ServiceItem>*/}
    </div>
  );
};

const MenuItems = () => {
  const ItemsArray = [
    { path: PATH.dashboard, logo: <Search /> },
    { path: PATH.analysisHistory, logo: <AnalysisHistory /> },
    { path: PATH.services, logo: <RemovalIcon /> },
    { path: PATH.submitURLs, logo: <WorkIcon /> },
    { path: PATH.uploadContent, logo: <UploadIcon /> },
    { path: PATH.contentHistory, logo: <ContentHistoryIcon /> },
    { path: PATH.tools, logo: <ToolsIcon /> },
    //{ path: PATH.DCMA, logo: <DMCAicon /> },
    { path: PATH.subscriptionsHistory, logo: <SubHistory /> },
    { path: PATH.subscriptions, logo: <SubIcon /> },
    { path: PATH.editAccount, logo: <SettingsLogo2 /> },
  ];
  const navigate = useNavigate();
  const { logout } = useAuth();
  const location = useLocation();
  const [index, setIndex] = useState(() =>
    ItemsArray.findIndex((e) => e.path === location.pathname)
  );
  
  useEffect(() => {
    setIndex(ItemsArray.findIndex((e) => e.path === location.pathname));
  }, [location.pathname]);
  return (
    <div className={classes.menuItems}>
      {ItemsArray.map((m, i) => {
        return (
          <Link
            key={i}
            to={m.path}
            className={i === index ? classes.active : ""}
          >
            {m.logo}
          </Link>
        );
      })}
      <div
        onClick={() => {
          logout();
          navigate(PATH.login);
        }}
      >
        <LogOutIcon />
      </div>
    </div>
  );
};

export const Dashboard = ({ }) => {
  const init = [
    {
      id: 2,
      title: "Negative",
      value: 1,
      color: "rgb(255, 126, 148)",
    },
    {
      id: 1,
      title: "Positive",
      value: 1,
      color: "rgb(98, 255, 0)",
    },
    {
      id: 3,
      title: "Neautral",
      value: 1,
      color: "rgb(155, 155, 155)",
    },
  ];
  const [impText,setImpText] = useState('');
  const [data, setData] = useState({
    labels: init.map((u) => u.title),
    datasets: [
      {
        label: "users gain",
        data: init.map((i) => i.value),
        backgroundColor: init.map((d) => d.color),
      },
    ],
  });
  const setChartData = (data) => {
    setData({
      labels: init.map((u) => u.title),
      datasets: [
        {
          label: "users gain",
          data: [data.negative * 100, data.positive * 100, data.neutral * 100],
          backgroundColor: init.map((d) => d.color),
        },
      ],
    });
  };
  return (
    <div
      style={{
        padding: "25px 35px",
        display: "flex",
        flexDirection: "column",
        gap: "25px",
        margin: "0px auto",
      }}
    >
      <InsertURLs setChartData={setChartData} setImpText = {setImpText} />
      <div
        style={{
          display: "flex",

          justifyContent: "space-between",
        }}
      >
        <Analysis imputation_text={impText}/>
        <CircularChart data={data} />
      </div>
      <Services />
    </div>
  );
};

export default function DashboardContainer({ children }) {
  const [open, setOpen] = useState(false);
  const [back, setBack] = useState(false);
  const [openTools, setOpenTools] = useState(false);
  const setOpenMenu = (val) => {
    if (val) {
      setBack(val);
      setTimeout(() => {
        setOpen(val);
      }, 5);
    } else {
      setOpen(false);
      setOpenTools(false);
      setTimeout(() => setBack(false), 300);
    }
  };

  const ItemsArray = [
    { path: PATH.dashboard, logo: <Search />, text: "Home" },
    {
      path: PATH.analysisHistory,
      logo: <AnalysisHistory />,
      text: "Analysis History",
    },
    {
      path: PATH.contentHistory,
      logo: <ContentHistoryIcon />,
      text: "Uploaded Content History",
    },

    {
      path: PATH.subscriptionsHistory,
      logo: <SubHistory />,
      text: "Subscription History",
    },
    { path: PATH.subscriptions, logo: <SubIcon />, text: "Subscriptions" },
    {
      path: PATH.editAccount,
      logo: <SettingsLogo2 />,
      text: "Edit Account Info",
    },
  ];
  const tools = [
    {
      path: PATH.services,
      logo: <RemovalIcon />,
      text: "Content Removal Services",
    },
    { path: PATH.uploadContent, logo: <UploadIcon />, text: "Protect Content" },
    { path: PATH.DCMA, logo: <DCMALogo />, text: "DCMA" },
    { path: PATH.tools, logo: <ToolsIcon />, text: "Web Research" },
    { path: PATH.submitURLs, logo: <WorkIcon />, text: "Submit URLs" },
    //new
    {
      path: PATH.autoflagger,
      logo: <LogoFlag />,
      text: "Auto Flagger",
    },
    {
      path: PATH.CRB,
      logo: <CopyIcon />,
      text: "CRB",
    },
    {
      path: PATH.imputaion,
      logo: <ImputationLogo />,
      text: "Imputation",
    },
    {
      path: PATH.screenshot,
      logo: <ScreenshotIcon />,
      text: "Screenshot",
    },
    {
      path: PATH.GMBSUBMIT,
      logo: <GoogleMapLogo />,
      text: "Google Map Submit",
    },
    {
      path: PATH.GSEARCHSUBMIT,
      logo: <GoogleLogo />,
      text: "Google Search Submit",
    },
  ];

  const navigate = useNavigate();
  const { logout } = useAuth();
  const location = useLocation();
  const [index, setIndex] = useState(() =>
    ItemsArray.findIndex((e) => e.path === location.pathname)
  );
  const [toolsIndex, setToolsIndex] = useState(() =>
    tools.findIndex((e) => e.path === location.pathname)
  );

  useEffect(() => {
    setIndex(ItemsArray.findIndex((e) => e.path === location.pathname));
    setToolsIndex(tools.findIndex((e) => e.path === location.pathname));
  }, [location.pathname]);
  return (
    <>
      <Navbar open={() => setOpenMenu(true)} />

      <div className={classes.container}>
        <div
          className={classes.newMenu}
          style={{ display: back ? "" : "none" }}
          onClick={() => setOpenMenu(false)}
        >
          <List
            style={{
              left: open ? "0" : "-35%",
            }}
            onClick={(e) => e.stopPropagation()}
            className={classes.list}
          >
            {ItemsArray.map((l, i) => (
              <SimpleListItem
                onClick={() => {
                  setOpenMenu(false);
                  navigate(l.path);
                }}
                style={{ backgroundColor: index === i ? "#ffbf0020" : "" }}
                key={i}
                graphic={l.logo}
                text={l.text}
              />
            ))}
            <SimpleListItem
              onClick={() => setOpenTools((o) => !o)}
              text="Tools"
              style={{
                backgroundColor:
                  toolsIndex !== -1 && !openTools ? "#ffbf0020" : "",
              }}
              graphic={<AllToolsLogo />}
              metaIcon={<ArrowLogo down={openTools} />}
            />
            <div
              style={{
                maxHeight: openTools ? tools.length * 3 + "rem" : "0",
                transition: "max-height 0.3s ease-in-out",
                overflow: "hidden",
              }}
            >
              {tools.map((t, i) => {
                return (
                  <SimpleListItem
                    onClick={() => {
                      setOpenMenu(false);
                      navigate(t.path);
                    }}
                    style={{
                      backgroundColor: toolsIndex === i ? "#ffbf0020" : "",
                    }}
                    key={i}
                    text={t.text}
                    graphic={t.logo}
                  />
                );
              })}
            </div>
            <SimpleListItem
              onClick={logout}
              text="Log out"
              graphic={<LogOutIcon />}
            />
          </List>
        </div>

        {children}
      </div>
    </>
  );
}
