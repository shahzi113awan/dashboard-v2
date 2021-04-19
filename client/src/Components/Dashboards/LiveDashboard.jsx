import { Button } from "reactstrap";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { GetLive, Delete } from "../../actions/ciAction";
import '../../assets/css/db.css'

import Loader from "react-loader-spinner";

import moment from "moment";

export default function MainDashboard() {
  const history = useHistory();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetLive());
  }, [dispatch]);
  const [db, setDb] = useState([]);
  const data = useSelector((state) => state.ciReducer.state);
  // const isLoading = 'useSelector((state) => state.ciReducer.isLoading)'
  console.log(data);
  useEffect(() => {
    setDb(data);
  }, [data]);
  console.log(db);
  const isLoading = useSelector((state) => state.ciReducer.isLoading);

  console.log(isLoading);
  const del = async (id) => {
    await dispatch(Delete(id));
    window.location.reload();
    // dispatch(GetLive());
  };
  const cal = (val) => {
    console.log(val);
    const Start = moment(new Date());
    console.log(Start);
    const End = moment(val).add(90, "d").format("YYYY-MM-DD");
    const Ending = moment(End);
    console.log(Ending);
    const days = Math.ceil(moment.duration(Ending.diff(Start)).asDays());
    console.log(days);
    return days;
  };
  console.log(isLoading);
  console.log(db);
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
    <div className="container-fluid" >
      <div className="table-responsive mt-5">
        {/* <table>
          <thead>
            <tr>
              <th  colspan="2">Pending Documents</th>
              <th>Commercials</th>
            </tr>
          </thead>
        </table> */}
        <table class="table table-striped">
          <thead>
            <tr>
              <th colSpan='1'></th>
              <th colSpan='4' style={{ textAlign: 'center', border: '1px solid grey', backgroundColor: '#FFFACD' }}>Company Information</th>

              <th style={{ textAlign: 'center', border: '1px solid grey', backgroundColor: 'pink' }} colSpan='4'  >Pending Documents</th>
              <th colSpan='2'></th>


              <th style={{ textAlign: 'center', border: '1px solid grey', backgroundColor: '#d3d3d3' }} colSpan='2'>Commercials</th>
              <th colSpan='9'></th>
              <th style={{ textAlign: 'center', border: '1px solid grey', backgroundColor: '#add8e6' }} colSpan='9'>Company Trading Information</th>
              <th style={{ textAlign: 'center', border: '1px solid grey', backgroundColor: '#B0B0B0' }} colSpan='1'>KYC/Share Holds</th>
              <th style={{ textAlign: 'center', border: '1px solid grey', backgroundColor: '#FED8B0' }} colSpan='7'>KYB/Know Your Business</th>
              <th style={{ textAlign: 'center', border: '1px solid grey', backgroundColor: '#b19cd9' }} colSpan='9'>Supporting Documents</th>
              <th style={{ textAlign: 'center', border: '1px solid grey', backgroundColor: '#FFFACD' }} colSpan='1'>Spare</th>
              <th style={{ textAlign: 'center', border: '1px solid grey', backgroundColor: '	#ADFF2F' }} colSpan='1'>Delete</th>
            </tr>
          </thead>
          <thead className="thead">
            <tr className="tr ">
              <th className="th" scope="col"> # </th>
              <th style={{ width: "100%" }} className="th" scope="col" style={{ width: "200px" }}  >
                Registered Company Name
              </th>
              <th className="th" scope="col">Business / Referral Partner</th>
              <th className="th" scope="col" >Assigned BDM /Owner</th>
              <th className="th" scope="col"> Introductory  Person </th>
              <th className="th" scope="col">Total Pending</th>
              <th className="th" scope="col ">Total Collected</th>
              <th className="th" scope="col">Total Outstanding</th>
              <th className="th" scope="col">10 Day Report</th>
              <th className="th" scope="col ">Allocated Acquirer / Solution</th>
              <th className="th" scope="col">Company Info & Checkout Page</th>
              <th className="th" scope="col">Pre Approval ems Buy Rate</th>
              <th className="th" scope="col ">Pre Approval ems Sel Rate</th>
              <th></th>
              <th></th>
              <th className="th" scope="col ">Application Boarded Date</th>
              <th className="th" scope="col">Aged Days</th>
              <th className="th" scope="col">Trading / New to Cards (NTC)</th>
              <th className="th" scope="col ">Vertical / Trading Sector</th>
              {/* <th className="th" scope="col ">Business / Referral Partner</th>
              <th className="th" scope="col ">Assigned BDM / Owner</th> */}
              <th className="th" scope="col">Compliance Country Location</th>
              <th className="th" scope="col">EEA Documents</th>
              <th className="th" scope="col "> Trading License or Agreements Required</th>

              <th className="th" scope="col ">Fully Completed Application Form</th>
              <th className="th" scope="col ">Bank Information (Welcome Letter)</th>
              <th className="th" scope="col">Office Tenancy Agreement</th>
              <th className="th" scope="col">Acquiring Processing Statements</th>
              <th className="th" scope="col "> Headline Website URL Address</th>
              <th className="th" scope="col">Website Compliance</th>
              <th className="th" scope="col "> Website URL - Proof of Domain</th>
              <th className="th" scope="col ">Ownership Structure Chart</th>
              <th className="th" scope="col ">Business Plan</th>
              <th className="th" scope="col ">Shareholds</th>

              {/* <th className="th" scope='col'>Shareholder / Director Name</th>
              <th className="th" scope='col'>Shareholding Percentage</th>
              <th className="th" scope='col '> Lead Director Passport</th>
              <th className="th" scope='col'>Country / Nationality</th>
              <th className="th" scope='col'>Notarised</th>
              <th className="th" scope='col '> Expiry Date</th>
              <th className="th" scope='col'>Proof of Address (POA)</th>
              <th className="th" scope='col '> Type of POA</th>
              <th className="th" scope='col '>Notarised</th>
              <th className="th" scope='col '>POA Start Date</th>
              <th className="th" scope='col'>POA Expiry Date (+90 days)</th>
              <th className="th" scope='col'>Expiry Days</th>
              <th className="th" scope='col '> Power of Attorney Document</th> */}
              {/* <th className="th" scope="col">Shareholder / Director Name</th>
              <th className="th" scope="col">Shareholding Percentage</th>
              <th className="th" scope="col "> Client Passport</th>
              <th className="th" scope="col">Country / Nationality</th>
              <th className="th" scope="col "> Notarised</th>
              <th className="th" scope="col ">Expiry Date</th>
              <th className="th" scope="col ">Proof of Address (POA)</th>
              <th className="th" scope="col">Type of POA</th>
              <th className="th" scope="col">Notarised</th>
              <th className="th" scope="col "> POA Start Date</th>
              <th className="th" scope="col">POA Expiry Date (+90 days)</th>
              <th className="th" scope="col">Expiry Days</th>
              */}
              <th className="th" scope="col "> Certificate of Incorporation</th>
              <th className="th" scope="col">Memorandum of Association</th>
              <th className="th" scope="col ">Articles of Association</th>
              <th className="th" scope="col ">Share Register</th>
              <th className="th" scope="col ">Share Certificate(s) - Signed</th>
              <th className="th" scope="col">Current Commercial Register Extract</th>
              <th className="th" scope="col">Notarised</th>
              <th className="th" scope="col "> Corporate Bank Statements</th>
              <th className="th" scope="col">Personal Bank Statements</th>
              <th className="th" scope="col">Proof of Wealth</th>
              <th className="th" scope="col "> Company AML Policy</th>
              <th className="th" scope="col">Gambling or Forex License</th>
              <th className="th" scope="col ">Copywrite or Re-seller Agreement</th>
              <th className="th" scope="col ">Fulfilment or Drop shipping Agreement</th>
              <th className="th" scope="col ">FBO Company Registration (Nutra Merchants)</th>
              <th className="th" scope="col">Sales Handoff Sheet (CCBill Only)</th>
              {/* <th className="th" scope="col">SPARE</th> */}
              <th className="th" scope="col "> SPARE</th>
              <th className="th" scope="col "> Delete</th>
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
                        <th scope="row">{index + 1}</th>
                        <td style={{ position: "relative" }}>
                          {" "}
                          <Link className="name" to={"/ci/" + res._id}>
                            {res.ci.tpi_rcName != " "
                              ? res.ci.tpi_rcName
                              : "Default Name"}
                          </Link>
                        </td>
                        <td>{res.ci.tpi_brPartner}</td>
                        <td>{res.ci.tpi_aBdmOwner}</td>

                        <td>{res.ci.tpi_iP}</td>
                        <td>22</td>
                        <td >{res.cl.pendingCount.length}</td>
                        <td>{22 - res.cl.pendingCount.length}</td>
                        <td>
                          <Link> <img style={{ width: "50%" }} src="./report.png" alt="report" /></Link>

                          {/* <button type="submit">0</button> */}
                        </td>
                        <td>
                          {res.ci.tpi_aaSolution ? res.ci.tpi_aaSolution : ""}
                        </td>
                        <td
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
                        <td>4.95%</td>
                        <td>6.95%</td>
                        <td></td>
                        <td></td>
                        <td>{res.ci.tpi_date}</td>
                        <td className={cal(res.ci.tpi_date) > 90 ? "date" : "okdate"}>{res.ci.tpi_date ? cal(res.ci.tpi_date) : ""}</td>
                        <td>{res.ci.tpi_ntc ? res.ci.tpi_ntc : ""}</td>
                        <td>
                          {res.ci.tpi_vtSector ? res.ci.tpi_vtSector : ""}
                        </td>
                        {/* <td>
                          {res.ci.tpi_brPartner ? res.ci.tpi_brPartner : ""}
                        </td>
                        <td>
                          {res.ci.tpi_aBdmOwner ? res.ci.tpi_aBdmOwner : ""}
                        </td> */}
                        <td>
                          {res.ci.tpi_ccLocation ? res.ci.tpi_ccLocation : ""}
                        </td>
                        <td>
                          {res.ci.tpi_EEADocuments
                            ? res.ci.tpi_EEADocuments
                            : ""}
                        </td>
                        <td>{res.ci.tpi_TLoAR ? res.ci.tpi_TLoAR : ""}</td>
                        <td>{res.cl.fcaf_status ? res.cl.fcaf_status : ""}</td>
                        <td>{res.cl.bi_status ? res.cl.bi_status : ""}</td>
                        <td>
                          {res.cti.cti_otAgreement
                            ? res.cti.cti_otAgreement
                            : ""}
                        </td>
                        <td  > {res.cl.aps_status}</td>
                        <td>{res.cl.hwua_status}</td>
                        <td>{res.cl.wc_status}</td>
                        <td>{res.cl.wuod_status}</td>
                        <td>{res.cl.owsc_status}</td>
                        <td>{res.cti.cti_bPlan ? res.cti.cti_bPlan : ""}</td>
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
                        <td>{res.cl.coi_status}</td>
                        <td>{res.cl.moa_status}</td>
                        <td>{res.cl.aoa_status}</td>
                        <td>{res.cl.sr_status}</td>
                        <td>{res.cl.scs_status}</td>
                        <td>{res.cl.ccre_status}</td>
                        <td>{res.cl.coi_note}</td>
                        <td>{res.sd.fsd_cbs ? res.sd.fsd_cbs : ""}</td>
                        <td>{res.sd.fsd_pbs ? res.sd.fsd_pbs : ""}</td>
                        <td>{res.sd.fsd_pow ? res.sd.fsd_pow : ""}</td>
                        <td>{res.sd.fsd_cap ? res.sd.fsd_cap : ""}</td>
                        <td>{res.sd.lta_gfl ? res.sd.lta_gfl : ""}</td>
                        <td>{res.cl.cora_status}</td>
                        <td>{res.sd.lta_fdsa ? res.sd.lta_fdsa : ""}</td>
                        <td> </td>
                        <td>{res.cl.shs_status}</td>

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
    </div>
  );
}
