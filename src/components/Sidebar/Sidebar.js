import React, { useState } from "react";
import "./Sidebar.css";
import { styled } from "@material-ui/core/styles";
import amazonIcon from "../../assets/icon.svg";
//import amazonIcon from "../assets/logo1.png";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import BookmarksRoundedIcon from "@material-ui/icons/BookmarksRounded";
import WatchLaterRoundedIcon from "@material-ui/icons/WatchLaterRounded";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import { NavLink, useHistory } from "react-router-dom";
import defaultImage from "../../assets/default.jpg";
import ReactTooltip from "react-tooltip";
import { useStateValue } from "../../StateProvider";

const iconStyle = (fontsize) => {
  return {
    fill: "transparent",
    stroke: "#1a1a2c",
    strokeWidth: 1,
    fontSize: fontsize,
  };
};

const Container = styled("div")(({ theme }) => ({
  background: theme.palette.secondary.background,
  minWidth: "5rem",
  width: "clamp(80px, 10vw, 78px)",
  height: "100vh",
  position: "fixed",
  zIndex: "99",
  top: 0,
  left: 0,
  boxShadow: "0 0 1rem rgba(26, 26, 44, 0.05)",
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "3rem 0",
}));

function Sidebar() {
  const history = useHistory();
  const [{ user, cart, bookmarks }] = useStateValue();
  const [sidebarActive, setSidebarActive] = useState(false);
  const toggleSidebar = () =>
    setSidebarActive((sidebarActive) => !sidebarActive);

  return (
    <Container className={`sidebar ${sidebarActive ? "active" : ""}`}>
      <img src={amazonIcon} className="sidebar__icon" onClick={toggleSidebar} />
      <div className="sidebar__menu">
        <NavLink
          to="/"
          exact
          className="sidebar__menuItem"
          activeClassName="active"
          data-tip="Home"
          data-for="sidebarTooltip"
          onClick={toggleSidebar}
        >
          <HomeRoundedIcon
            className="sidebar__menuIcon"
            style={iconStyle(36)}
          />
        </NavLink>
        <NavLink
          to="/cart"
          className="sidebar__menuItem"
          activeClassName="active"
          data-tip="Cart"
          data-for="sidebarTooltip"
          onClick={toggleSidebar}
        >
          <ShoppingCartRoundedIcon
            className="sidebar__menuIcon"
            style={iconStyle(34)}
          />
          <span className="sidebar__itemValue">{cart?.length || 0}</span>
        </NavLink>
        <NavLink
          to="/bookmarks"
          className="sidebar__menuItem"
          activeClassName="active"
          data-tip="Bookmarks"
          data-for="sidebarTooltip"
          onClick={toggleSidebar}
        >
          <BookmarksRoundedIcon
            className="sidebar__menuIcon"
            style={iconStyle(30)}
          />
          <span className="sidebar__itemValue">{bookmarks?.length || 0}</span>
        </NavLink>
        <NavLink
          to="/orders"
          className="sidebar__menuItem"
          activeClassName="active"
          data-tip="Orders"
          data-for="sidebarTooltip"
          onClick={toggleSidebar}
        >
          <WatchLaterRoundedIcon
            className="sidebar__menuIcon"
            style={iconStyle(32)}
          />
        </NavLink>
      </div>
      {user ? (
        <img
          src={user?.photoURL || defaultImage}
          onClick={() => {
            history.push("/profile");
            toggleSidebar();
          }}
          data-tip="My Account"
          data-for="sidebarTooltip"
          className="sidebar__avatar"
        />
      ) : (
        <NavLink
          to="/login"
          className="sidebar__menuItem"
          activeClassName="active"
          data-tip="Login / Register"
          data-for="sidebarTooltip"
          onClick={toggleSidebar}
        >
          <AccountCircleRoundedIcon
            className="sidebar__menuIcon"
            style={iconStyle(36)}
          />
        </NavLink>
      )}
      <ReactTooltip
        place="right"
        className="app__toolTip"
        id="sidebarTooltip"
        backgroundColor="#1a1a2cee"
        effect="solid"
      />
    </Container>
  );
}
export default Sidebar;
