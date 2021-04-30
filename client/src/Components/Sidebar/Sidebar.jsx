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



        <Nav style={{position:"fixed" ,left:'0px'}} className="navside" vertical expand="md">
            <NavItem tag={Link} to={`/ci/${id}`} className="itemside">
                Company Information
            </NavItem>
            <NavItem tag={Link} to={`/cti/${id}`} className="itemside">
            Company Trading  Information
            </NavItem>
            <NavItem tag={Link} to={`/kyc/${id}`} className="itemside">
              Know Your Customer
            </NavItem>
            <NavItem tag={Link} to={`/kyb/${id}`} className="itemside">
              Know Your Business
            </NavItem>
            <NavItem tag={Link} to={`/sdkyb/${id}`} className="itemside">
                Supporting Doc    
            </NavItem>
            <NavItem tag={Link} to={`/check-list/${id}`} className="itemside">
               Document-List
            </NavItem>
            <NavItem onClick={e => { dispatch(Get()) }} tag={Link} to={`/`} className="itemside">
                Dashboard
            </NavItem>
        </Nav>




    );

}
