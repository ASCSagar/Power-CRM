import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route,useHistory } from "react-router-dom";
import "./index.css";
import "./chart.css";
import "./step.css";
import Nav from "./layouts/nav";
import Footer from "./layouts/Footer";

/// Pages
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import { ThemeContext } from "../context/ThemeContext";
import SiteList from "./pages/Site";
import CreateSite from "./components/Site/CreateSite";
import SiteDetails from "./components/Site/SiteDetails";
import GenerateQuote from "./components/GenerateQuote";
import MultiSiteList from "./pages/MultiSite";
import MultiSiteGenerateQuote from "./pages/MultiSiteQuote";
import CompanyDetailsListPage from "./pages/CompanyDetails";
import CreateCompany from "./components/CompanyDetails/CreateCompany";
import ViewCompanyDetails from "./components/CompanyDetails/ViewCompanyDetails";
import Dashboard from "./components/Dashboard/Dashboard";
import Reminders from "./pages/Reminder";
import Notes from "./pages/Notes";
import Documents from "./pages/Documents";
import useIsLoggedIn from "../hooks/useIsLoggedIn";
 
const Main = () => {
  const { menuToggle } = useContext(ThemeContext);
  const routes = [
    { url: "", component: Dashboard },
    { url: "site", component: SiteList },
    { url: "register", component: Registration },
    { url: "login", component: Login },
    { url: "forgot-password", component: ForgotPassword },
    { url: "site", component: SiteList },
    { url: "create-site", component: CreateSite },
    { url: "site-details/:id", component: SiteDetails },
    { url: "generate-quote", component: GenerateQuote },
    { url: "multi-site", component: MultiSiteList },
    { url: "multi-site-quote", component: MultiSiteGenerateQuote },
    { url: "companies", component: CompanyDetailsListPage },
    { url: "create-company", component: CreateCompany },
    { url: "company-details/:id", component: ViewCompanyDetails },
    { url: "dashboard", component: Dashboard },
    { url: "reminders", component: Reminders },
    { url: "notes", component: Notes },
    { url: "documents", component: Documents },
  ];
  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];

  let pagePath = path.split("-").includes("page");
  return (
    <Router basename="/">
      <div
        id={`${!pagePath ? "main-wrapper" : ""}`}
        className={`${!pagePath ? "show" : "mh100vh"}  ${
          menuToggle ? "menu-toggle" : ""
        }`}
      >
        {!pagePath && <Nav />}
        <div className={`${!pagePath ? "content-body" : ""}`}>
          <div
            className={`${!pagePath ? "container-fluid" : ""}`}
            style={{
              minHeight: window.screen.height - 60,
              background: "#f0f2f5",
            }}
          >
            <Switch>
              {routes.map((data, i) => (
                <Route
                  key={i}
                  exact
                  path={`/${data.url}`}
                  component={data.component}
                />
              ))}
            </Switch>
          </div>
        </div>
        {!pagePath && <Footer />}
      </div>
    </Router>
  );
};

export default Main;
