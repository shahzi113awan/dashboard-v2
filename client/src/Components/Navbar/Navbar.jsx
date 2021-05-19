import React, { useState } from "react";
 
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
import { NavLink as NAV, useHistory,Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CgMediaPodcast } from 'react-icons/cg'

import { IoMdArchive } from 'react-icons/io'
import { BsGraphUp } from 'react-icons/bs'
// import { load } from "dotenv/types";
import { Get, GetLive, GetTrading,GetArchive } from "../../actions/ciAction";
import { Get as GetDB, GetLost, GetApproved } from '../../actions/appActions'
import { GetContacts } from '../../actions/contactAction'
import './style.css'
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
    <div >
     <div class="newappWrap">
            <div class="container-fluid">

                <div class="mainTabWrap">
                  
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-app-tab" data-toggle="pill" href="#pills-app" role="tab" aria-controls="pills-app" aria-selected="true">NEW APPLICATION</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-dashboard-tab" data-toggle="pill" href="#pills-dashboard" role="tab" aria-controls="pills-dashboard" aria-selected="false">DASHBOARDS</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-solution-tab" data-toggle="pill" href="#pills-solution" role="tab" aria-controls="pills-solution" aria-selected="false">SOLUTION PARTNERS</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-iso-tab" data-toggle="pill" href="#pills-iso" role="tab" aria-controls="pills-iso" aria-selected="false">ISO PARTNERS</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-adress-tab" data-toggle="pill" href="#pills-adress" role="tab" aria-controls="pills-adress" aria-selected="false">ADDRESS BOOK</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-report-tab" data-toggle="pill" href="#pills-report" role="tab" aria-controls="pills-report" aria-selected="false">REPORTS</button>
                        </li>
                    </ul>



                
                    <div class="tab-content" id="pills-tabContent">



                      
                        <div class="tab-pane fade show active" id="pills-app" role="tabpanel" aria-labelledby="pills-app-tab">

                        <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-app" role="tabpanel" aria-labelledby="pills-app-tab">
                        <div class="inn-app-tabs">
                            <ul class="nav nav-pills" id="pills-tab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <Link class="nav-link active text-center" id="pills-pre-aproval-tab" data-toggle=" " to="/app"   role="tab"   aria-selected="true">PRE-APPOVAL APPLICATION</Link>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <Link class="nav-link" id="pills-card-processing-tab" data-toggle=" " to="/ci"     role="tab"    aria-selected="false">CARD PROCESSING COMPLIANCE APPLICATION</Link>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <Link class="nav-link" id="pills-iban-bank-tab" data-toggle="pill"  to="/ci"   role="tab"   aria-selected="false">IBAN BANK ACCOUNT COMPLIANCE APPLICATION</Link>
                                </li>
                            </ul>
                            </div></div></div>
                          
                        </div>


 
                        <div class="tab-pane fade" id="pills-dashboard" role="tabpanel" aria-labelledby="pills-dashboard-tab">  <div class="tab-content" id="pills-tabContent">
                                    <div class="tab-pane fade active show" id="pills-pre-vet" role="tabpanel" aria-labelledby="pills-pre-vet-tab">PRE-VET DASHBOARD</div>
                                    <div class="tab-pane fade" id="pills-complience-dash" role="tabpanel" aria-labelledby="pills-complience-dash-tab">COMPLIANCE DASHBOARD</div>
                                    <div class="tab-pane fade" id="pills-bording-dash" role="tabpanel" aria-labelledby="pills-bording-dash-tab">BOARDING DASHBOARD</div>
                                    <div class="tab-pane fade" id="pills-inte-dash" role="tabpanel" aria-labelledby="pills-inte-dash-tab">INTEGRATION DASHBOARD</div>
                                    <div class="tab-pane fade" id="pills-iban-bank" role="tabpanel" aria-labelledby="pills-iban-bank-tab">BOARDING DASHBOARD</div>
                                    <div class="tab-pane fade" id="pills-trading-dash" role="tabpanel" aria-labelledby="pills-trading-dash-tab">TRADING DASHBOARD</div>
                                    <div class="tab-pane fade" id="pills-arch-dash" role="tabpanel" aria-labelledby="pills-arch-dash-tab">ARCHIVE DASHBOARD</div>





                                </div></div>
                        


                      
                        <div class="tab-pane fade" id="pills-solution" role="tabpanel" aria-labelledby="pills-solution-tab">SOLUTION PARTNERS</div>
                        

 
                        <div class="tab-pane fade" id="pills-iso" role="tabpanel" aria-labelledby="pills-iso-tab">ISO PARTNERS</div>
                        



                     
                        <div class="tab-pane fade" id="pills-adress" role="tabpanel" aria-labelledby="pills-adress-tab">ADDRESS BOOK</div>
                        



                      
                        <div class="tab-pane fade" id="pills-report" role="tabpanel" aria-labelledby="pills-report-tab">REPORTS</div>


                        
                    </div>
                    
                </div>
                

                 
            </div>
        </div>
        
    </div>
  );
};
