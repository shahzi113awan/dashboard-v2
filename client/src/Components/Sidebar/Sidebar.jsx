import { NavLink as Link, useHistory, useParams } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,


} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { Get } from "../../actions/ciAction";



import './sidebar.css'

import React from 'react'

export default function Sidebar({ id }) {
    const dispatch = useDispatch()
    return (



        <Nav className="navside" vertical expand="md">
            <NavItem tag={Link} to={`/ci/${id}`} className="itemside">
                Company information
            </NavItem>
            <NavItem tag={Link} to={`/cti/${id}`} className="itemside">
                Company Trading information
            </NavItem>
            <NavItem tag={Link} to={`/kyc/${id}`} className="itemside">
                Know your customer(KYC)
            </NavItem>
            <NavItem tag={Link} to={`/kyb/${id}`} className="itemside">
                Know your Business(KYB)
            </NavItem>
            <NavItem tag={Link} to={`/sdkyb/${id}`} className="itemside">
                Supporting Documents
            </NavItem>
            <NavItem tag={Link} to={`/check-list/${id}`} className="itemside">
                Documents Check List
            </NavItem>
            <NavItem onClick={e => { dispatch(Get()) }} tag={Link} to={`/`} className="itemside">
                Main Dashboard
            </NavItem>
        </Nav>




    );

}
