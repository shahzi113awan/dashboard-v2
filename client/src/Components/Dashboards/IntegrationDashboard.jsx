import { Button } from "reactstrap";
import '../../assets/css/db.css'

import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Get, Delete } from "../../actions/ciAction";
import Loader from "react-loader-spinner";
import { HiOutlineDocumentReport,HiArrowRight,HiArrowLeft } from 'react-icons/hi'

import moment from "moment";

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


  useEffect(() => {
    setDb(data);
  }, [data]);

  // console.log(isLoading);
  const del = async (id) => {
    await dispatch(Delete(id));
    window.location.reload();
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
    <div className="container-fluid"  >
  <div  onClick={() => scroll(-2000)} className="scrollers"><HiArrowLeft  style={{marginTop:'700%',position:'sticky'}} size={50} color={'white'}></HiArrowLeft></div>
        <div  onClick={() => scroll(2000)} style={{marginLeft:'96%'}}  className="scrollers"><HiArrowRight  style={{marginTop:'700%',position:'sticky'}} size={50} color={'white'}></HiArrowRight></div>
      {/* <table>
          <thead>
            <tr>
              <th  colspan="2">Pending Documents</th>
              <th>Commercials</th>
            </tr>
          </thead>
        </table> */}

      <table style={{ fontSize: 'smaller' }} onScroll={onScrolling} ref={ref} id="scrolling" className="table table-responsive">

      

        <thead style={{ position: 'sticky' }}>
          <tr >
            <th colSpan='1'></th>
            <th className="shadowci" colSpan='4'  >Company Information</th>

            <th className="shadowci" colSpan='6'  >Business Approvals</th>
            <th className="shadowci" colSpan='4'></th>


            <th className="shadowci" colSpan='3'  >Website Compliance & Understanding</th>
            <th className="shadowci" colSpan='3'></th>

            
            <th className="shadowsd" style={{ backgroundColor: '#b19cd9' }} colSpan='2'>Acquiring / Solution Selection</th>
            <th className="shadowsd" style={{ backgroundColor: '#b19cd9' }} colSpan='6'> Blended Acquiring / Solution Processing Rates</th>
             
          </tr>
        </thead>
        <thead className="thead">
          <tr className="tr ">
            <th className="th" scope="col"> ID </th>
            <th style={{ width: "100%" }} className="thci" scope="col" style={{ width: "200px" }}  >
              Registered Company Name
              </th>
            <th className="thci" scope="col">Business / Referral Partner</th>
            <th className="thci" scope="col" >Assigned BDM /Owner</th>
            <th className="thci" scope="col"> Introductory  Person </th>
            <th className="thci" scope="col">Total - Active                         Approvals</th>
            <th className="thci" scope="col ">Total - In Hand</th>
            <th className="thci" scope="col">Total - Accepted</th>
            <th className="thci" scope="col">Total - Rates Approved</th>
            <th className="thci" scope="col ">Total - Approvals Lost</th>
            <th className="thci" scope="col">10 Day Report</th>
             


            <th className="thci" scope="col ">Application Boarded Date</th>
            <th className="thci" scope="col">Aged Days</th>
            <th className="thci" scope="col">Trading / New to Cards (NTC)</th>
            <th className="thci" scope="col ">Vertical / Trading Sector</th>
           
            <th className="thci" scope="col">Trading                    Website Address</th>
              
            <th className="thci" scope="col">Website                             Backoffice / Access                         - User Name</th>
              <th className="thci" scope="col">Website                             Backoffice / Access                        - Password</th>
            <th className="thci" scope="col">Compliance Country Location</th>
            <th className="thci" scope="col">EEA Documents</th>
            <th className="thci" scope="col "> Trading License or Agreements Required</th>

          
           
            <th className="thsd" scope="col "> Proposed / Allocated                        - Acquirer / Solution</th>
            <th className="thsd" scope="col">Accepted or Declined by the Acquirer / Solution</th>
            <th className="thsd" scope="col">Approval                      EMS Buy Rate</th>
            <th className="thsd" scope="col ">Intermediary                            Cost Percentage</th>
            <th className="thsd" scope="col">Approval                      EMS Buy Rate</th>
            <th className="thsd" scope="col ">Accepted by                           ISO / Partner</th>
            <th className="thsd" scope="col ">Minimum + 2%                   EMS Sell Rate</th>
            <th className="thsd" scope="col ">Accepted by                           Merchant</th>
           
          </tr>
        </thead>
        <tbody >
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
                    <tr style={{ border: Index == index ? 'solid black 3px' : '' }} onClick={e => { toggle(e, index) }}>
                      <th scope="row">  <span className="badge badge-pill badge-success">{index + 1}</span></th>

                      <td className="tdci" style={{ position: "relative" }}>
                        {" "}
                        <Link className="name" to={"/ci/" + res._id}>
                          {res.ci.tpi_rcName != " "
                            ? res.ci.tpi_rcName
                            : "Default Name"}
                        </Link>
                      </td>
                      <td className="tdci">{res.ci.tpi_brPartner}</td>
                      <td className="tdci">{res.ci.tpi_aBdmOwner}</td>

                      <td className="tdci">{res.ci.tpi_iP}</td>

                      <td className="tdci">22</td>
                      <td className="tdci" >{res.cl.pendingCount.length}</td>
                      <td className="tdci">{22 - res.cl.pendingCount.length}</td>
                      <td className="tdci">
                        <Link><HiOutlineDocumentReport size={30}></HiOutlineDocumentReport>  </Link>

                        {/* <button type="submit">0</button> */}
                      </td>
                      <td className="tdci">
                        {res.ci.tpi_aaSolution ? res.ci.tpi_aaSolution : ""}
                      </td>
                      <td className="tdci"
                        style={{
                          textDecoration: "underline black",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          window.open(`https://${res.ci.tci_wUrl}`, "_blank");
                        }}
                      >
                        {/* <a href="https://www.google.com" type="submit">
                        url
                      </a> */}

                        {res.ci.tci_wUrl}
                      </td>
                      <td className="tdci">4.95%</td>
                      <td className="tdci">6.95%</td>


                      <td className="tdci">{res.ci.tpi_date}</td>
                      <td className="tdci" className={cal(res.ci.tpi_date) > 90 ? "date" : "okdate"}>{res.ci.tpi_date ? cal(res.ci.tpi_date) : ""}</td>
                      <td className="tdci">{res.ci.tpi_ntc ? res.ci.tpi_ntc : ""}</td>
                      <td className="tdci">
                        {res.ci.tpi_vtSector ? res.ci.tpi_vtSector : ""}
                      </td>
                      {/* <td className="tdci">
                          {res.ci.tpi_brPartner ? res.ci.tpi_brPartner : ""}
                        </td>
                        <td className="tdci">
                          {res.ci.tpi_aBdmOwner ? res.ci.tpi_aBdmOwner : ""}
                        </td> */}
                      <td className="tdci">
                        {res.ci.tpi_ccLocation ? res.ci.tpi_ccLocation : ""}
                      </td>
                      <td className="tdci">
                        {res.ci.tpi_EEADocuments
                          ? res.ci.tpi_EEADocuments
                          : ""}
                      </td>
                      <td className="tdci">{res.ci.tpi_TLoAR ? res.ci.tpi_TLoAR : ""}</td>
                      <td className="tdcti">{res.cl.fcaf_status ? res.cl.fcaf_status : ""}</td>
                      <td className="tdcti">{res.cl.bi_status ? res.cl.bi_status : ""}</td>
                      <td className="tdcti">
                        {res.cti.cti_otAgreement
                          ? res.cti.cti_otAgreement
                          : ""}
                      </td>
                      <td className="tdcti"  > {res.cl.aps_status}</td>
                      <td className="tdcti">{res.cl.hwua_status}</td>
                      <td className="tdcti">{res.cl.wc_status}</td>
                      <td className="tdcti">{res.cl.wuod_status}</td>
                      <td className="tdcti">{res.cl.owsc_status}</td>
                      <td className="tdcti">{res.cti.cti_bPlan ? res.cti.cti_bPlan : ""}</td>
                      <td>
                        <Button tag={Link} to={"/kycshowcase/" + res._id}>
                          Go To shareholds
                          </Button>
                      </td>
                      {/* <td>{res.kyc.kyc_name ? res.kyc.kyc_name : ""}</td>
                    <td>{res.kyc.kyc_sHolds ? res.kyc.kyc_sHolds : ""}</td>
                    <td>{res.kyc.kyc_notarized}</td>
                    <td>
                      {res.kyc.kyc_nationality ? res.kyc.kyc_nationality : ""}
                    </td>
                    <td>
                      {res.kyc.kyc_notarized ? res.kyc.kyc_notarized : ""}
                    </td>
                    <td>
                      {res.kyc.kyc_ExpiryDate ? res.kyc.kyc_ExpiryDate : ""}
                    </td>
                    <td>{res.kyc.kyc_Address ? res.kyc.kyc_Address : ""}</td>
                    <td>{res.kyc.kyc_toProof ? res.kyc.kyc_toProof : ""}</td>
                    <td>
                      {res.kyc.kyc_notarized ? res.kyc.kyc_notarized : ""}
                    </td>
                    <td>01 January, 2021</td>
                    <td>1 April, 2021</td>
                    <td>3</td>
                    <td>
                      {res.kyc.kyc_paDocument ? res.kyc.kyc_paDocument : ""}
                    </td> */}
                      <td className="tdkyb">{res.cl.coi_status}</td>
                      <td className="tdkyb">{res.cl.moa_status}</td>
                      <td className="tdkyb">{res.cl.aoa_status}</td>
                      <td className="tdkyb">{res.cl.sr_status}</td>
                      <td className="tdkyb">{res.cl.scs_status}</td>
                      <td className="tdkyb">{res.cl.ccre_status}</td>
                      <td className="tdkyb">{res.cl.coi_note}</td>
                      <td className="tdsd">{res.sd.fsd_cbs ? res.sd.fsd_cbs : ""}</td>
                      <td className="tdsd">{res.sd.fsd_pbs ? res.sd.fsd_pbs : ""}</td>
                      <td className="tdsd">{res.sd.fsd_pow ? res.sd.fsd_pow : ""}</td>
                      <td className="tdsd">{res.sd.fsd_cap ? res.sd.fsd_cap : ""}</td>
                      <td className="tdsd">{res.sd.lta_gfl ? res.sd.lta_gfl : ""}</td>
                      <td className="tdsd">{res.cl.cora_status}</td>
                      <td className="tdsd">{res.sd.lta_fdsa ? res.sd.lta_fdsa : ""}</td>
                      <td className="tdsd"> </td>
                      <td className="tdsd">{res.cl.shs_status}</td>

                      <td>
                        {" "}
                        <Button tag={Link} to={"/spareshowcase/" + res._id}>
                          Check Spare docs
                          </Button>
                      </td>
                      {/* <td></td> */}
                      <td>
                        <Button
                          onClick={(e) => {
                            del(res._id);
                          }}
                        >
                          Delete
                          </Button>
                      </td>
                    </tr>
                  );
                }
              }
            })}
        </tbody>

      </table>

    </div>


  );
}
