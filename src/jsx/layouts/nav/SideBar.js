import MetisMenu from "metismenujs";
import React, { Component, useContext, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Link } from "react-router-dom";
import useScrollPosition from "use-scroll-position";
import { ThemeContext } from "../../../context/ThemeContext";
import profile from "../../../images/profile/pic1.jpg";

class MM extends Component {
  componentDidMount() {
    this.$el = this.el;
    this.mm = new MetisMenu(this.$el);
  }
  componentWillUnmount() {
    //  this.mm("dispose");
    // console.log(this.mm);
  }
  render() {
    return (
      <div className="mm-wrapper">
        <ul className="metismenu" ref={(el) => (this.el = el)}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

const SideBar = () => {
  const { iconHover, sidebarposition, headerposition, sidebarLayout } =
    useContext(ThemeContext);

  useEffect(() => {
    var btn = document.querySelector(".nav-control");
    var aaa = document.querySelector("#main-wrapper");
    function toggleFunc() {
      return aaa.classList.toggle("menu-toggle");
    }
    if (btn) {
      btn.addEventListener("click", toggleFunc);
    }
    //sidebar icon Heart blast
    var handleheartBlast = document.querySelector(".heart");
    function heartBlast() {
      return handleheartBlast.classList.toggle("heart-blast");
    }
    if (handleheartBlast) {
      handleheartBlast.addEventListener("click", heartBlast);
    }
  }, []);
  let scrollPosition = useScrollPosition();

  /// Path
  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];

  /// Active menu
  let dashboard = ["dashboard"],
    site = ["site", "create-site", "site-details", "generate-quote"]
    // multiSite = ["multi-site"],
    // multiSiteQuote = ["multi-site-quote"],
    // companyDetail = ["companies"],
    // reminder = ["reminders"],
    // note = ["notes"],
    // documents = ["documents"];

  // const [toggle, setToggle] = useState("");
  // const onClick = (name) => setToggle(toggle === name ? "" : name);

  return (
    <div
      className={`deznav ${iconHover} ${
        sidebarposition.value === "fixed" &&
        sidebarLayout.value === "horizontal" &&
        headerposition.value === "static"
          ? scrollPosition > 120
            ? "fixed"
            : ""
          : ""
      }`}
    >
      <PerfectScrollbar className="deznav-scroll d-flex justify-content-between align-items-center">
        <MM className="metismenu" id="menu">
          <li className={`${dashboard.includes(path) ? "mm-active" : ""}`}>
            <Link to="/dashboard" className="ai-icon" aria-expanded="false">
              <span className="nav-text">Dashboard</span>
            </Link>
          </li>
          <li className={`${site.includes(path) ? "mm-active" : ""}`}>
            <Link to="/site" className="ai-icon" aria-expanded="false">
              <span className="nav-text">Sites</span>
            </Link>
          </li>
          {/* <li className={`${multiSite.includes(path) ? "mm-active" : ""}`}>
            <Link to="/multi-site" className="ai-icon" aria-expanded="false">
              <span className="nav-text">Multi Sites</span>
            </Link>
          </li> */}
          {/* <li className={`${multiSiteQuote.includes(path) ? "mm-active" : ""}`}>
            <Link
              to="/multi-site-quote"
              className="ai-icon"
              aria-expanded="false"
            >
              <span className="nav-text">Group Quote</span>
            </Link>
          </li> */}
          {/* <li className={`${companyDetail.includes(path) ? "mm-active" : ""}`}>
            <Link to="/companies" className="ai-icon" aria-expanded="false">
              <span className="nav-text">Company</span>
            </Link>
          </li> */}
          {/* <li className={`${documents.includes(path) ? "mm-active" : ""}`}>
            <Link to="/documents" className="ai-icon" aria-expanded="false">
              <span className="nav-text">Documents</span>
            </Link>
          </li> */}
          {/* <li className={`${note.includes(path) ? "mm-active" : ""}`}>
            <Link to="/notes" className="ai-icon" aria-expanded="false">
              <span className="nav-text">Notes</span>
            </Link>
          </li> */}
          {/* <li className={`${reminder.includes(path) ? "mm-active" : ""}`}>
            <Link to="/reminders" className="ai-icon" aria-expanded="false">
              <span className="nav-text">Reminders</span>
            </Link>
          </li> */}
          {/* <li>
            <Link to="/reminders" className="ai-icon" aria-expanded="false">
              <span className="nav-text">Progress</span>
            </Link>
          </li> */}
          {/* <li>
            <Link to="/companies" className="ai-icon" aria-expanded="false">
              <span className="nav-text">Reports</span>
            </Link>
          </li> */}
        </MM>
        <ul className="metismenu navbar-nav header-right" id="menu">
          <Dropdown as="li" className="nav-item dropdown header-profile">
            <Dropdown.Toggle
              variant=""
              as="a"
              className="nav-link i-false c-pointer"
              role="button"
              data-toggle="dropdown"
            >
              <img src={profile} width={20} alt="profile" />
              <div className="header-info">
                <span className="text-white">Johndoe</span>
                <small className="text-white">Super Admin</small>
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu align="right" className="mt-2">
              {/* <Link
                to="/user-settings"
                className="dropdown-item ai-icon d-flex justify-content-center align-items-center"
              >
                <i className="flaticon-381-settings-2 text-black h2"></i>
                <span className="text-black">Settings </span>
              </Link> */}
              <Link
                to="/login"
                className="dropdown-item ai-icon d-flex justify-content-center align-items-center"
              >
                <i className="flaticon-381-exit-2 text-black"></i>
                <span className="text-black">Logout </span>
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </ul>
      </PerfectScrollbar>
    </div>
  );
};

export default SideBar;
