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



        // <Nav className="side" vertical style={{ }}    >
        //     <NavItem>
        //         <NavLink className="text-white text-center" tag={Link} to={`/ci/${id}`} >Company Information</NavLink>

        //     </NavItem>
        
        //     <NavItem >
        //         <NavLink className="text-white text-center" tag={Link} to={`/cti/${id}`}>Company Trading  Information</NavLink>

        //     </NavItem>
        //     <NavItem >
        //         <NavLink className="text-white text-center" tag={Link} to={`/kyc/${id}`}> Know Your Customer</NavLink>

        //     </NavItem>
        //     <NavItem >
        //         <NavLink className="text-white text-center" tag={Link} to={`/kyb/${id}`} > Know Your Business</NavLink>

        //     </NavItem>
        //     <NavItem>
        //         <NavLink className="text-white text-center" tag={Link} to={`/sdkyb/${id}`} > Supporting Doc  </NavLink>

        //     </NavItem>
        //     <NavItem  >
        //         <NavLink className="text-white text-center" tag={Link} to={`/check-list/${id}`}> Document-List</NavLink>

        //     </NavItem>
        //     <NavItem  >
        //         <NavLink className="text-white text-center" onClick={e => { dispatch(Get()) }} tag={Link} to={`/`}> Dashboard</NavLink>

        //     </NavItem>
        // </Nav>
<div></div>



    );

}
