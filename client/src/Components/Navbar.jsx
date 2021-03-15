import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// import { load } from "dotenv/types";
import { Get } from "../actions/ciAction";
import { GetLive } from "../actions/ciAction";
import { GetTrading } from "../actions/ciAction";

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
    <div className="container" style={{ marginBottom: 10 }}>
      <Navbar color="light" light expand="md">
        <NavLink
          onClick={(e) => {
            loadData(e);
          }}
          tag={Link}
          to="/"
        >
          Home
        </NavLink>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/Applications">
                Applications
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/mainApp">
                Approvals
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Solutions</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>ISO Partners</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Merchant/IBAN</NavLink>
            </NavItem>

            <NavItem>
              <NavLink>Reports</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                onClick={(e) => {
                  dispatch(GetTrading());
                }}
                tag={Link}
                to="/TradingDb"
              >
                <img
                  style={{ height: "20%", width: "20%" }}
                  src="./dashboard-icon-3.png"
                  alt="Tradimg Dashboard"
                />
              </NavLink>
              Trading Dashboard
            </NavItem>
            <NavItem>
              <NavLink
                onClick={(e) => {
                  dispatch(GetLive());
                }}
                tag={Link}
                to="/LiveDb"
              >
                <img
                  style={{ height: "20%", width: "20%", textAlign: "center" }}
                  src="./images.png"
                  alt="Tradimg Dashboard"
                />
              </NavLink>
              Live Dashboard
            </NavItem>
            <NavItem>
              <NavLink>Reports</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={handleLogout}>Logout</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
