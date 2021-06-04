import { Button } from "reactstrap";
import '../assets/css/db.css'

import React, { useState, useEffect, useRef, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Get, Delete, UpdateStatus } from "../actions/ciAction";
import Loader from "react-loader-spinner";
import moment from "moment";
import {FaFilter} from 'react-icons/fa'
import {GrDocumentTime} from 'react-icons/gr'
import {IoIosArrowDropdownCircle} from 'react-icons/io'
import { useTable } from 'react-table'
import { COLUMNS } from './coulmns'

import { HiOutlineDocumentReport, HiArrowRight, HiArrowLeft } from 'react-icons/hi'


export default function Dashboard({ data, isLoading }) {
  const history = useHistory();
  const ref = useRef(null);

  const dispatch = useDispatch();
  const [db, setDb] = useState([]);

  const [highlight, sethighlight] = useState(false);
  const [Index, setIndex] = useState();
  const onScrolling = (e) => {
    // console.log(e.target, 'window')
  }

  // const tableinstance = useTable({
  //   columns : COLUMNS,
  //   data: data
  // })
  // const { prepareRow, getTableProps, getTableBodyProps, headerGroups, rows } = tableinstance

  useEffect(() => {
    setDb(data);
  }, [data]);

  // console.log(isLoading);
  const del = async (id) => {
    await dispatch(Delete(id));
    window.location.reload();
    // dispatch(Get());
  };
  const updateStatus = async (e, status, id) => {

    e.preventDefault()
    console.log(status);
    await dispatch(UpdateStatus(status, id));

    // dispatch(Get());
  };
  const cal = (val) => {
    // console.log(val);
    const Start = moment(new Date());
    // console.log(Start);
    const End = moment(val).add(90, "d").format("YYYY-MM-DD");
    const Ending = moment(End);
    // console.log(Ending);
    const days = Math.ceil(moment.duration(Ending.diff(Start)).asDays());
    // console.log(days);
    return days;
  };
  // console.log(isLoading);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  const toggle = (e, index) => {
    console.log("JJJ")
    setIndex(index)
    console.log(Index);
    sethighlight(!highlight)
  }
  console.log(Index);
  return isLoading ? (
    <div
      style={{
        position: "absolute",
        zIndex: 10,
        width: "100%",
        height: "100%",
        backgroundColor: "lightgrey",
        opacity: 0.8,
        left: 0,
        // bottom: 0,
      }}
    >
      <div
        style={{
          textAlign: "center",
          // color: "white",
          marginTop: "20%",
        }}
      >
        <Loader type="Puff" color="#161f22" height={100} width={100} />
      </div>
    </div>
  ) : (

    <div class="newappWrap">
      <div class="container-fluid">
        <div class="inn-app-tabs dash-navvbar">



          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade active show" id="pills-pre-vet" role="tabpanel" aria-labelledby="pills-pre-vet-tab">
              <table width="100%">
                <tbody>
                  <tr>
                    <td width="33%"><table border="0" cellpadding="0" cellSpacing="0" width="100%">
                      <tbody>
                        <tr>
                          <td align="center" bgcolor="#4472c4" height="58" className="tdstyle" valign="middle">CARD PROCESSING - PRE-APPROVAL APPLICATION</td>
                        </tr>
                        <tr>
                          <td align="center" bgcolor="#fff" height="20" className="tdstylec" valign="middle"><a href="#">1234</a> / <a href="#">A</a> <a href="#">B</a> <a href="#">C</a> <a href="#">D</a> <a href="#">E</a> <a href="#">F</a> <a href="#">G</a> <a href="#">H</a> <a href="#">I</a> <a href="#">J</a> <a href="#">K</a> <a href="#">L</a> <a href="#">M</a> <a href="#">N</a> <a href="#">O</a> <a href="#">P</a> <a href="#">Q</a> <a href="#">R</a> <a href="#">S</a> <a href="#">T</a> <a href="#">U</a> <a href="#">V</a> <a href="#">W</a> <a href="#">X</a> <a href="#">Y</a> <a href="#">Z</a> - <a href="#">Reset</a></td>
                        </tr>
                      </tbody>
                    </table></td>
                    <td width="5%" valign="top"><div class="td-fonts"><GrDocumentTime size={50}></GrDocumentTime></div></td>
                    <td width="16%">&nbsp;</td>
                    <td valign="middle" width="20%"><table border="0" cellpadding="0" cellSpacing="0" width="100%">
                      <tbody>
                        <tr>
                          <td width="60%" height="50" align="center" valign="middle" bgcolor="#ffffff"><div class="td-fonts text-center blueborder">COMMERCIALS</div></td>
                          <th width="4%" bgcolor="#ffffff">&nbsp;</th>
                          <td width="22%" height="50" align="center" valign="middle" bgcolor="#ffffff"><div class="td-fonts text-center redborder">TOTAL AGED DAYS</div></td>
                          <th width="4%" bgcolor="#ffffff">&nbsp;</th>
                        </tr>
                      </tbody>
                    </table></td>
                    <td width="26%">&nbsp;</td>
                  </tr>
                </tbody>
              </table>
              <table>
                <thead>
                  <tr>
                    <th width="5%"><div class="td-fonts td-font-icon">Ref:<div class="filter-icon"><a href="#"><FaFilter></FaFilter></a></div></div></th>
                    <th bgcolor="#ffffff">&nbsp;</th>
                    <th width="20%"><div class="td-fonts td-font-icon text-center">COMPANY NAME<div class="filter-icon"><a href="#"><FaFilter></FaFilter></a></div></div></th>
                    <th bgcolor="#ffffff" height="60">&nbsp;</th>
                    <th width="9%"><div class="td-fonts td-font-icon">SOLUTION<div class="filter-icon"><a href="#"><FaFilter></FaFilter></a></div></div></th>
                    <th bgcolor="#ffffff" height="60">&nbsp;</th>
                    <th width="9%"><div class="td-fonts blueborder td-fonts td-font-icon">APPLICATION DATE<div class="filter-icon"><a href="#"><FaFilter></FaFilter></a></div></div></th>
                    <th bgcolor="#ffffff" height="60">&nbsp;</th>
                    <th width="13%"><div class="td-fonts blueborder">TRADING WEBSITE ADDRESS</div></th>
                    <th bgcolor="#ffffff" height="60">&nbsp;</th>
                    <th width="4%"><div class="td-fonts blueborder text-center">Buy Rate</div></th>
                    <th bgcolor="#ffffff" height="60">&nbsp;</th>
                    <th width="4%"><div class="td-fonts blueborder text-center">Sell Rate</div></th>
                    <th bgcolor="#ffffff" height="60">&nbsp;</th>
                    <th width="4%"><div class="td-fonts blueborder text-center">GP %</div></th>
                    <th bgcolor="#ffffff" height="60">&nbsp;</th>
                    <th width="5%"><div class="td-fonts td-font-icon redborder">DAYS<div class="filter-icon"><a href="#"><FaFilter></FaFilter></a></div></div></th>
                    <th bgcolor="#ffffff" height="60">&nbsp;</th>
                    <th width="9%"><div class="td-fonts text-center">Business / Referral Partner</div></th>
                    <th bgcolor="#ffffff" height="60">&nbsp;</th>
                    <th width="9%"><div class="td-fonts text-center">Assigned BDM / Owner </div></th>
                    <th bgcolor="#ffffff" height="60">&nbsp;</th>
                    <th width="9%"><div class="td-fonts blueborder text-center">WON / LOST / ARCHICE</div></th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.map((res, index) => {
                      {
                        if (
                          res.ci &&
                          res.cl &&
                          res.cti &&
                          res.kyc &&
                          res.kyb &&
                          res.sd
                        ) {
                          return (
                            <tr>
                              <td><div class="small-fonts">{index}</div></td>
                              <td bgcolor="#ffffff" width="1">&nbsp;</td>
                              <td><div class="small-fonts">{ <Link className="name" to={"/ci/" + res._id}>
                          {res.ci.tpi_rcName != " "
                            ? res.ci.tpi_rcName
                            : "Default Name"}
                        </Link>}</div></td>
                              <td bgcolor="#ffffff" width="1">&nbsp;</td>
                              <td><div class="small-fonts">{res.ci.tpi_aaSolution}</div></td>
                              <td bgcolor="#ffffff" width="1">&nbsp;</td>
                              <td><div class="small-fonts">{res.ci.tpi_date }</div></td>
                              <td bgcolor="#ffffff" width="1">&nbsp;</td>
                              <td ><div    onClick={() => {
                          window.open(`https://${res.ci.tci_wUrl}`, "_blank")}} class="small-fonts"> {res.ci.tci_wUrl?res.ci.tci_wUrl:"Default"}</div></td>
                              <td bgcolor="#ffffff" width="1">&nbsp;</td>
                              <td><div class="small-fonts">3.5%</div></td>
                              <td bgcolor="#ffffff" width="1">&nbsp;</td>
                              <td><div class="small-fonts">5.5%</div></td>
                              <td bgcolor="#ffffff" width="1">&nbsp;</td>
                              <td><div class="small-fonts blueborder">2.0%</div></td>
                              <td bgcolor="#ffffff" width="1">&nbsp;</td>
                              <td><div class={cal(res.ci.tpi_date) > 90 ? "small-fonts redborder":"small-fonts greenborder"}>{res.ci.tpi_date ? cal(res.ci.tpi_date) : ""}</div></td>
                              <td bgcolor="#ffffff" width="1">&nbsp;</td>
                              <td><div class="small-fonts">{res.ci.tpi_brPartner}</div></td>
                              <td bgcolor="#ffffff" width="1">&nbsp;</td>
                              <td><div class="small-fonts">{res.ci.tpi_aBdmOwner} </div></td>
                              <td bgcolor="#ffffff" width="1">&nbsp;</td>
                              <td><div class="small-fonts yellobg">Won <div class="filter-icon-2"><a href="#"><IoIosArrowDropdownCircle size={20}></IoIosArrowDropdownCircle></a></div></div></td>
                            </tr>
                          );
                        }
                      }
                    })}
                </tbody>
              </table>
            </div>
            <div class="tab-pane fade" id="pills-complience-dash" role="tabpanel" aria-labelledby="pills-complience-dash-tab">COMPLIANCE DASHBOARD</div>
            <div class="tab-pane fade" id="pills-bording-dash" role="tabpanel" aria-labelledby="pills-bording-dash-tab">BOARDING DASHBOARD</div>
            <div class="tab-pane fade" id="pills-inte-dash" role="tabpanel" aria-labelledby="pills-inte-dash-tab">INTEGRATION DASHBOARD</div>
            <div class="tab-pane fade" id="pills-iban-bank" role="tabpanel" aria-labelledby="pills-iban-bank-tab">BOARDING DASHBOARD</div>
            <div class="tab-pane fade" id="pills-trading-dash" role="tabpanel" aria-labelledby="pills-trading-dash-tab">TRADING DASHBOARD</div>
            <div class="tab-pane fade" id="pills-arch-dash" role="tabpanel" aria-labelledby="pills-arch-dash-tab">ARCHIVE DASHBOARD</div>
          </div>

        </div>
      </div>
    </div>
    //  </div>


  );
}
