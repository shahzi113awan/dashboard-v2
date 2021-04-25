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
import { NavLink as NAV, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CgMediaPodcast } from 'react-icons/cg'

import { IoMdArchive } from 'react-icons/io'
import { BsGraphUp } from 'react-icons/bs'
// import { load } from "dotenv/types";
import { Get, GetLive, GetTrading } from "../../actions/ciAction";
import { Get as GetDB, GetLost, GetApproved } from '../../actions/appActions'
import { GetContacts } from '../../actions/contactAction'

import { firebase } from "../../Config";

export const Header = (props) => {
  const history = useHistory()
  const path = "./dashboard-icon-3";
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const loadData = (e) => {
    console.log("loading daata");
    dispatch(Get());
  };
  const handleLogout = async () => {
    await firebase.auth().signOut();
    dispatch(Get())
    history.push("/")
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
                  <DropdownItem activeClassName="activelink1" tag={NAV} to="/ArchiveDb" onClick={e => { dispatch(Get()); }} >
                    <span className="span1">Archive Dashboard</span>
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
                    <span className="span1">Main   Dashboard</span>
                  </DropdownItem>
                  <DropdownItem activeClassName="activelink1" tag={NAV} to="/appdb" onClick={e => { dispatch(GetApproved()) }}>
                    <span className="span1">Approval Dashboard</span>
                  </DropdownItem>
                  {/* <DropdownItem divider /> */}
                  <DropdownItem activeClassName="activelink1" tag={NAV} to="/lostappdb" onClick={e => { dispatch(GetLost()) }} >
                    <span className="span1">Lost Dashboard</span>
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
            <NavItem className="itemLogo">
              <NavLink activeClassName="activelink" className="navlink"
                onClick={(e) => {
                  dispatch(GetTrading());
                }}
                tag={NAV}
                to="/TradingDb"
              >
                <BsGraphUp className="logo"  ></BsGraphUp>
                <span className="span"> Trading</span>
              </NavLink>
            </NavItem>

            <NavItem className="itemLogo">
              <NavLink activeClassName="activelink" className="navlink"
                onClick={(e) => {
                  dispatch(GetLive());
                }}
                tag={NAV}
                to="/LiveDb"
              >

                <CgMediaPodcast className="logo" size={30}></CgMediaPodcast>
                <span className="span"> Live</span>
              </NavLink>
            </NavItem>


            <NavItem className="itemLogo">
              <NavLink activeClassName="activelink" className="navlink"
                onClick={(e) => {
                  dispatch(Get());
                }}
                tag={NAV}
                to="/ArchiveDb"
              >
                <IoMdArchive className="logo" size={30}></IoMdArchive>
                <span className="span"> Archive</span>
              </NavLink>
            </NavItem>

            <NavItem className="item">
              <NavLink activeClassName="activelink" className="navlink"> <span className="span">Reports</span></NavLink>
            </NavItem>
            <NavItem style={{ cursor: "pointer", float: 'right' }} className="item">
              <NavLink activeClassName="activelink" className="navlink" onClick={handleLogout}> <span className="span">Logout</span></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
