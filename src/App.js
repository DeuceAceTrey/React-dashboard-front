import { Routes, Route, Link } from "react-router-dom";

import { useAuth } from "./Contexts/AuthContext/AuthContext";
import { PrivateRoute } from "./Contexts/AuthContext/PrivateRoute";
import { EditAccount, SignUp } from "./Pages/AccountInfo/AccountInfo";
import AnalysisHistory from "./Pages/AnalysisHistory/AnalysisHistory";
import DashboardContainer, { Dashboard } from "./Pages/Dashbord/Dashboard";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import Contaniner, { Login } from "./Pages/Login/Login";
import SubscriptionsHistory from "./Pages/SubscriptionsHistory/SubscriptionsHistory";
import "@rmwc/snackbar/styles";
import "./styles.css";
import { Snackbar, SnackbarAction } from "@rmwc/snackbar";
import Services from "./Pages/Services/Services";
import Contract from "./Pages/Contract/Contract";
import SubmitUrls from "./Pages/SubmitUrls/SubmitUrls";
import UploadContent from "./Pages/UploadContent/UploadContent";
import NewSubscriptions from "./Pages/NewSubscriptions/NewSubscriptions";
import ContentHistory from "./Pages/ContentHistory/ContentHistory";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Tools from "./components/Tools/Tools";
import DCMA from "./Pages/DCMA/DCMA";
import CRB from "./Pages/CRB/CRB";
import AutoFlagger from "./Pages/AutoFlagger/AutoFlagger";
import Screenshot from "./Pages/Screenshot/Screenshot";
import Imputation from "./Pages/Imputation/Imputation";
import GoogleTool from "./Pages/GoogleSeacrhTool/GoogleSeacrhTool";
import axios from "axios";

// export const API = axios.create({ baseURL: 'http://162.213.250.5/' })
export const API = axios.create({baseURL:'http://localhsot:5000'})
export const PATH = {
  dashboard: "/home",
  login: "/login",
  signup: "/signup",
  forgot: "/forgot-password",
  editAccount: "/edit-account",
  subscriptions: "/subscriptions",
  analysisHistory: "/analysis-history",
  subscriptionsHistory: "/subscriptions-history",
  services: "/services",
  contract: "/contract",
  submitURLs: "/submit-urls",
  uploadContent: "/upload-content",
  contentHistory: "/content-history",
  tools: "/tools",
  DCMA: "/DMCA",
  autoflagger: "/auto-flagger",
  CRB: "/CRB",
  imputaion: "/imputation",
  screenshot: "/screenshot",
  GMBSUBMIT: "/google-map-submit",
  GSEARCHSUBMIT: "/google-search-submit",
};

function App() {
  const { notif, setNotif, currentUser } = useAuth();
  return (
    <>
      <Snackbar
        open={notif !== undefined}
        onClose={() => {
          setNotif(undefined);
        }}
        message={notif}
        dismissesOnAction
        action={<SnackbarAction label="close" />}
      />

      <Routes>
        <Route
          exact
          path={PATH.dashboard}
          element={
            <PrivateRoute>
              <DashboardContainer>
                <Dashboard />
              </DashboardContainer>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path={PATH.editAccount}
          element={
            <PrivateRoute>
              <DashboardContainer>
                <EditAccount />
              </DashboardContainer>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path={PATH.CRB}
          element={
            <PrivateRoute>
              <DashboardContainer>
                <CRB />
              </DashboardContainer>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path={PATH.autoflagger}
          element={
            <PrivateRoute>
              <DashboardContainer>
                <AutoFlagger />
              </DashboardContainer>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path={PATH.imputaion}
          element={
            <PrivateRoute>
              <DashboardContainer>
                <Imputation />
              </DashboardContainer>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path={PATH.GSEARCHSUBMIT}
          element={
            <PrivateRoute>
              <DashboardContainer>
                <GoogleTool />
              </DashboardContainer>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path={PATH.GMBSUBMIT}
          element={
            <PrivateRoute>
              <DashboardContainer>
                <GoogleTool isMap />
              </DashboardContainer>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path={PATH.screenshot}
          element={
            <PrivateRoute>
              <DashboardContainer>
                <Screenshot />
              </DashboardContainer>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path={PATH.login}
          element={
            <Contaniner>
              <Login />
            </Contaniner>
          }
        />

        <Route
          exact
          path={PATH.signup}
          element={
            <Contaniner>
              <SignUp />
            </Contaniner>
          }
        />
        <Route
          exact
          path={PATH.forgot}
          element={
            <Contaniner>
              <ForgotPassword />
            </Contaniner>
          }
        />
        <Route
          exact
          path={PATH.subscriptions}
          element={
            <PrivateRoute>
              <DashboardContainer>
                <NewSubscriptions />
              </DashboardContainer>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path={PATH.analysisHistory}
          element={
            <PrivateRoute>
              <DashboardContainer>
                <AnalysisHistory />
              </DashboardContainer>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path={PATH.DCMA}
          element={
            <PrivateRoute>
              <DashboardContainer>
                <DCMA />
              </DashboardContainer>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path={PATH.subscriptionsHistory}
          element={
            <PrivateRoute>
              <DashboardContainer>
                <SubscriptionsHistory />
              </DashboardContainer>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path={PATH.services}
          element={
            ///
            <PrivateRoute>
              <DashboardContainer>
                <Services />
              </DashboardContainer>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path={PATH.contract}
          element={
            ///
            <PrivateRoute>
              <DashboardContainer>
                <Contract />
              </DashboardContainer>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path={PATH.submitURLs}
          element={
            ///
            <PrivateRoute>
              <DashboardContainer>
                <SubmitUrls />
              </DashboardContainer>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path={PATH.uploadContent}
          element={
            ///
            <PrivateRoute>
              <DashboardContainer>
                <UploadContent />
              </DashboardContainer>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path={PATH.contentHistory}
          element={
            ///
            <PrivateRoute>
              <DashboardContainer>
                <ContentHistory />
              </DashboardContainer>
            </PrivateRoute>
          }
        />

        <Route
          exact
          path={PATH.tools}
          element={
            ///
            <PrivateRoute>
              <DashboardContainer>
                <Tools />
              </DashboardContainer>
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={
            currentUser ? (
              <DashboardContainer>
                <p style={{ textAlign: "center", width: "100%" }}>
                  404 Not found
                </p>
              </DashboardContainer>
            ) : (
              <>
                <Header />
                <br />
                <br />
                <p style={{ textAlign: "center", width: "100%" }}>
                  404 Not found
                </p>
                <br />
                <br />
                <Link style={{ textDecoration: "none" }} to={PATH.login}>
                  <button
                    className="button"
                    style={{
                      display: "block",
                      margin: "10px auto",

                      backgroundColor: "var(--dark-blue)",
                      color: "var(--yellow)",
                    }}
                  >
                    Log in
                  </button>
                </Link>
                <Footer />
              </>
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
