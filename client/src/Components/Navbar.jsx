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
import {firebase} from '../Config'

export const Header = (props) => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const loadData = (e) => {
    console.log("loading daata");
    dispatch(Get());
  };
  const handleLogout=()=>{
    firebase.auth().signOut()
  }
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
              <NavLink>Approvals</NavLink>
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
              <NavLink onClick={handleLogout}>Logout</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
