import React, { useState } from "react";
import './Navbar.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";
import { NavLink as NAV } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// import { load } from "dotenv/types";
import { Get, GetLive, GetTrading } from "../actions/ciAction";
import { Get as GetDB, GetLost, GetApproved } from '../actions/appActions'
import { GetContacts } from '../actions/contactAction'

import { firebase } from "../Config";

export const Header = (props) => {
  const path = "./dashboard-icon-3";
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const loadData = (e) => {
    console.log("loading daata");
    dispatch(Get());
  };
  const handleLogout = () => {
    firebase.auth().signOut();
  };
  return (
    <div style={{ marginBottom: 10 }}>
      <Navbar className="container-fluid" className="nav" light expand="md">
        <NavItem className="item" className="item">
          <NavLink
            className="navlink"
            activeClassName="activelink"
            onClick={(e) => {
              loadData(e);
            }}
            tag={NAV}
            to="/"
          >
            Home
        </NavLink>
        </NavItem>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="item">
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="navlink" nav caret>
                  <span className="span">Applications</span>
                </DropdownToggle>

                <DropdownMenu className="DropdownMenu1" right>
                  <DropdownItem activeClassName="activelink1" tag={NAV} to='/ci'   >
                    <span className="span1">Add New Application</span>
                  </DropdownItem>
                  <DropdownItem activeClassName="activelink1" tag={NAV} to='/' onClick={e => { dispatch(Get()) }}>
                    <span className="span1">Main  Dashboard</span>
                  </DropdownItem>
                  <DropdownItem activeClassName="activelink1" tag={NAV} to="/LiveDb" onClick={e => { dispatch(GetLive()) }}>
                    <span className="span1">Live Dashboard</span>
                  </DropdownItem>
                  {/* <DropdownItem divider /> */}
                  <DropdownItem activeClassName="activelink1" tag={NAV} to="/TradingDb" onClick={e => { dispatch(GetTrading()) }} >
                    <span className="span1">Trading Dashboard</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              {/* <NavLink activeClassName="activelink" className="navlink" tag={NAV} to="/Applications">
                <span className="span"> Applications</span>
              </NavLink> */}
            </NavItem>
            <NavItem className="item">
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="navlink" nav caret>
                  <span className="span">Approvals</span>
                </DropdownToggle>
                <DropdownMenu className="DropdownMenu1" right>
                  <DropdownItem activeClassName="activelink1" tag={NAV} to="/app"   >
                    <span className="span1">Add New</span>
                  </DropdownItem>
                  <DropdownItem activeClassName="activelink1" tag={NAV} to='/mainappdb' onClick={e => { dispatch(GetDB()) }}>
                    <span className="span1">Main Approval Dashboard</span>
                  </DropdownItem>
                  <DropdownItem activeClassName="activelink1" tag={NAV} to="/appdb" onClick={e => { dispatch(GetApproved()) }}>
                    <span className="span1">Approval Dashboard</span>
                  </DropdownItem>
                  {/* <DropdownItem divider /> */}
                  <DropdownItem activeClassName="activelink1" tag={NAV} to="/lostappdb" onClick={e => { dispatch(GetLost()) }} >
                    <span className="span1">LostDashboard</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              {/* <NavLink activeClassName="activelink" className="navlink" tag={NAV} to="/mainApp"> */}
              {/* <span className="span">Approvals</span> */}
              {/* </NavLink> */}
            </NavItem>
            <NavItem className="item">
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="navlink" nav caret>
                  <span className="span">Solutions</span>
                </DropdownToggle>
                <DropdownMenu className="DropdownMenu1" right>
                  <DropdownItem activeClassName="activelink1" tag={NAV} to="/contact"   >
                    <span className="span1">Add New Contact</span>
                  </DropdownItem>
                  {/* <DropdownItem divider /> */}
                  <DropdownItem activeClassName="activelink1" tag={NAV} to="/solution-nav"   >
                    <span className="span1">Add New Solution</span>
                  </DropdownItem>
                  <DropdownItem activeClassName="activelink1" tag={NAV} to='/contact-list' onClick={e => { dispatch(GetContacts()) }}>
                    <span className="span1">Contact Dashboard</span>
                  </DropdownItem>
                  <DropdownItem activeClassName="activelink1" tag={NAV} to="/solution-DB"   >
                    <span className="span1"> Solution Dashboard</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              {/* <NavLink activeClassName="activelink" className="navlink" tag={NAV} to="/solution-app">
                <span className="span">Solutions</span>
              </NavLink> */}
            </NavItem>
            <NavItem className="item">
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="navlink" nav caret>
                  <span className="span">ISO Partners</span>
                </DropdownToggle>
                <DropdownMenu className="DropdownMenu1" right>
                  <DropdownItem activeClassName="activelink1" tag={NAV} to="/contact"   >
                    <span className="span1">Add New Contact</span>
                  </DropdownItem>
                  {/* <DropdownItem divider /> */}
                  <DropdownItem activeClassName="activelink1" tag={NAV} to="/solution-nav"   >
                    <span className="span1">Add New Solution</span>
                  </DropdownItem>
                  <DropdownItem activeClassName="activelink1" tag={NAV} to='/contact-list' onClick={e => { dispatch(GetContacts()) }}>
                    <span className="span1">Contact Dashboard</span>
                  </DropdownItem>
                  <DropdownItem activeClassName="activelink1" tag={NAV} to="/solution-DB"   >
                    <span className="span1"> Solution Dashboard</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              {/* <NavLink activeClassName="activelink" className="navlink" tag={NAV} to="/solution-app">
                <span className="span">Solutions</span>
              </NavLink> */}
            </NavItem>
            {/* <NavItem className="item">
              <NavLink activeClassName="activelink" className="navlink"> <span className="span">ISO Partners</span></NavLink>
            </NavItem> */}
            <NavItem className="item">
              <NavLink activeClassName="activelink" className="navlink"> <span className="span">Merchant/IBAN</span></NavLink>
            </NavItem>

            <NavItem className="item">
              <NavLink activeClassName="activelink" className="navlink"> <span className="span">Reports</span></NavLink>
            </NavItem>
            <div style={{ width: "10%", padding: "0% !important" }}>
              <NavItem className="item">
                <NavLink activeClassName="activelink" className="navlink"
                  onClick={(e) => {
                    dispatch(GetTrading());
                  }}
                  tag={NAV}
                  to="/TradingDb"
                >
                  <img
                    style={{ height: "20%", width: "30%", marginRight: "2%" }}
                    src="./dashboard-icon-3.png"
                    alt="Tradimg Dashboard"
                  />
                  <span className="span">Trading</span>
                </NavLink>
              </NavItem>
            </div>
            <div style={{ width: "10%", padding: "0% !important" }}>
              <NavItem className="item">
                <NavLink activeClassName="activelink" className="navlink"
                  onClick={(e) => {
                    dispatch(GetLive());
                  }}
                  tag={NAV}
                  to="/LiveDb"
                >
                  <img
                    style={{
                      height: "20%",
                      width: "30%",
                      textAlign: "center",
                      marginRight: "2%",
                    }}
                    src="./images.png"
                    alt="Tradimg Dashboard"
                  />
                  <span className="span">Live</span>
                </NavLink>
              </NavItem>
            </div>
            <div style={{ width: "10%", padding: "0% !important" }}>
              <NavItem className="item">
                <NavLink activeClassName="activelink" className="navlink"
                  onClick={(e) => {
                    dispatch(Get());
                  }}
                  tag={NAV}
                  to="/ArchiveDb"
                >
                  <img
                    style={{
                      height: "20%",
                      width: "30%",
                      textAlign: "center",
                      marginRight: "2%",
                    }}
                    src="./archive.png"
                    alt="Archive Dashboard"
                  />
                  <span className="span">Archive</span>
                </NavLink>
              </NavItem>
            </div>
            <NavItem className="item">
              <NavLink activeClassName="activelink" className="navlink"> <span className="span">Reports</span></NavLink>
            </NavItem>
            <NavItem style={{ cursor: "pointer" }} className="item">
              <NavLink activeClassName="activelink" className="navlink" onClick={handleLogout}> <span className="span">Logout</span></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
