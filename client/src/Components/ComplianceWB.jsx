
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import $ from 'jquery'
import '../assets/css/trading-book.css'
import TR  from './ComplianceR'
import TR1  from './ComplianceR1'
import { Link, useHistory, useParams } from "react-router-dom";
import moment from "moment";

import {


  GetOneApp,
  UpdateOne,
  Get

} from "../actions/appActions";
import {

  CreateAPPW,
  GetOneAPPW,
  INITIATEAPPW

} from "../actions/PreAppwork";
import { FaDraft2Digital } from "react-icons/fa";
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
export default function PreApproval() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { urlid } = useParams();
  console.log(urlid);
  const [Wb, setWb] = useState({
    proposedSol: "",
    proposedSol1: "",
    proposedSol2: "",
    proposedSol3: "",
    proposedSol4: "",

    webAddress: "",
    webAddress1: "",
    webAddress2: "",
    webAddress3: "",
    webAddress4: "",

     ApprovalBuyRate: "",
    ApprovalBuyRate1: "",
    ApprovalBuyRate2: "",
    ApprovalBuyRate3: "",
    ApprovalBuyRate4: "",
    ApprovalBuyRate5: "",
    INTERMEDIARYCOST: "",
    INTERMEDIARYCOST1: "",
    INTERMEDIARYCOST2: "",
    INTERMEDIARYCOST3: "",
    INTERMEDIARYCOST4: "",
    INTERMEDIARYCOST5: "",
    PARTNERCOST: "",
    PARTNERCOST1: "",
    PARTNERCOST2: "",
    PARTNERCOST3: "",
    PARTNERCOST4: "",
    PARTNERCOST5: "",
    EMSSELLRATE: "",
    EMSSELLRATE1: "",
    EMSSELLRATE2: "",
    EMSSELLRATE3: "",
    EMSSELLRATE4: "",
    EMSSELLRATE5: "",
    MERCHANTACCEPTED: "",
    MERCHANTACCEPTED1: "",
    MERCHANTACCEPTED2: "",
    MERCHANTACCEPTED3: "",
    MERCHANTACCEPTED4: "",
    MERCHANTACCEPTED5: "",
    Date: "",
    Date1: "",
    Date2: "",
    Date3: "",
    Date4: "",
    Date5: "",
    Date6: "",
    Date7: "",
    Date8: "",
    Date9: "",
    Notes: "",
    Notes1: "",
    Notes2: "",
    Notes3: "",
    Notes4: "",
    Notes5: "",
    Notes6: "",
    Notes7: "",
    Notes8: "",
    Notes9: "",
  });
  useEffect(() => {
    urlid ? dispatch(GetOneApp(urlid)) : console.log("creating");
  }, [urlid]);
  const data1 = useSelector((state) => state.appReducer.state);
  const id = useSelector((state) => state.appReducer.id);
  console.log(id);

  useEffect(() => {
    console.log(id);
    
      
      urlid ? dispatch(GetOneAPPW(urlid)) : console.log("creating");
    
     
  }, [urlid]);
  const data2 = useSelector((state) => state.APPWReducer.state);

  // console.log(data1);
  console.log(data1);
  //   useEffect(() => {
  //     $(document).ready(function () {
  //       $('.js-example-basic-single').select2()
  //     })
  //   }, [])
  const [ref, setRef] = useState('helo');

  const [tradeSector, setTradeSector] = useState('helo');

  const [licence, setLicence] = useState('helo');

 
  useEffect(() => {
    if(data2!=null){
    setWb(data2);
    }
  }, [data2]);
  function handleInput(evt) {
    setWb({
      ...Wb,
      [evt.target.name]: evt.target.value,
    });
  }
  console.log(Wb);
  const onUpdateSubmit = async (e) => {
    e.preventDefault();
    await dispatch(CreateAPPW(Wb, urlid));
    dispatch(Get());
    history.push("/appdb");
  }
  return (
    <div class="compliance-dashboard-card">
    <div class="container-fluid">
      <table>
        <thead>
          <tr>
            <td width="5%"><div class="compliance-td-fonts yellobg text-center">Ref:</div></td>
            <td width="19%"><div class="compliance-td-fonts yellobg text-center">COMPANY NAME</div></td>
            <td width="10%"><div class="compliance-td-fonts yellobg text-center">SOLUTION </div></td>
            <td width="10%"><div class="compliance-td-fonts yellobg text-center">APPLICATION DATE</div></td>
            <td width="10%"><div class="compliance-td-fonts yellobg text-center">Trading Sector Product</div></td>
            <td width="10%"><div class="compliance-td-fonts yellobg text-center">Trading / New To Cards</div></td>
            <td width="8%"><div class="compliance-td-fonts yellobg text-center">Vertical / Trading Sector</div></td>
            <td width="8%"><div class="compliance-td-fonts yellobg text-center">Compliance Country Location</div></td>
            <td width="8%"><div class="compliance-td-fonts yellobg text-center">Licence Yes / No</div></td>
            <td width="12%">&nbsp;</td>
          </tr>
          <tr>
            <td width="5%"><div class="compliance-small-fonts">AP-003</div></td>
            <td width="19%"><div class="compliance-small-fonts blueborder">4xcube Limited </div></td>
            <td width="10%"><div class="compliance-small-fonts blueborder">CCBill </div></td>
            <td width="10%"><div class="compliance-small-fonts blueborder">1/1/2020</div></td>
            <td width="10%"><div class="compliance-small-fonts">Adult / Dating</div></td>
            <td width="10%"><div class="compliance-small-fonts text-center">NTC</div></td>
            <td width="8%"><div class="compliance-small-fonts text-center">Trading</div></td>
            <td width="8%"><div class="compliance-small-fonts">UK</div></td>
            <td width="8%"><div class="compliance-small-fonts">No</div></td>
            <td width="12%">&nbsp;</td>
          </tr>
        </thead>
      </table>
      <table>
        <thead>
          <tr>
            <td width="35%" valign="top"><table width="100%">
                <tbody>
                  <tr>
                    <td width="12%"><a href="#" class="compliance-td-fonts blueborder text-center"><img src="/images/card-img10.png"/></a></td>
                    <td width="76%">&nbsp;</td>
                    <td width="12%"><a href="#" class="compliance-td-fonts blueborder text-center"><img src="/images/card-img7.png"/></a></td>
                  </tr>
                </tbody>
              </table>
              <table width="100%">
                <tbody>
                  <tr>
                    <td colspan="2" width="65%" valign="top"><div class="tradding-title min_heightt marign_bt3">TRADING INFORMATION</div></td>
                    <td width="35%"><div class="tradding-title min_heightt marign_bt3"> DOCUMENT STATUS</div></td>
                  </tr>
                  <tr>
                    <td width="7%" rowspan="10"><div class="compliance-td-fonts text-rotate-div"><span class="text-rotate">COMPANY DOCUMENTS / WEBSITE REVIEW</span></div></td>
                    <td width="58%"><div class="compliance-td-fonts min_heightt marign_bt3">Fully Completed Application Form</div></td>
                    <td width="35%"><div class="compliance-td-fonts yellobg text-center min_heightt marign_bt3"> COMPLETE</div></td>
                  </tr>
                  
                  <TR name={"Fully Completed Application Form"}  status={"COMPLETE"}/>
                  <TR name={"Bank Information (Welcome Letter)"}  status={"COMPLETE"}/>
                  <TR name={"Office Tenancy Agreement"}  status={"COMPLETE"}/>
                  <TR name={"Acquiring Processing Statements"}  status={"COMPLETE"}/>
                  <TR name={"Headline Website URL Address"}  status={"COMPLETE"}/>
                  <TR name={"Website Compliance"}  status={"COMPLETE"}/>
                  <TR name={"Website URL - Proof of Domain"}  status={"COMPLETE"}/>
                  <TR name={"Ownership Structure Chart"}  status={"COMPLETE"}/>
                  <TR name={"Business Plan"}  status={"COMPLETE"}/>
                  
                </tbody>
              </table></td>
            <td width="30%" valign="top"><table width="100%">
                <tbody>
                  <tr>
                    <td width="5%">&nbsp;</td>
                    <td width="15%"><a href="#" class="compliance-td-fonts blueborder text-center"><img src="/images/card-img6.png"/></a></td>
                    <td width="5%">&nbsp;</td>
                    <td width="50%"><div class="compliance-td-fonts blueborder redcolor text-center">TOTAL AGED DAYS</div></td>
                    <td width="5%">&nbsp;</td>
                    <td width="15%"><div class="compliance-td-fonts blueborder redcolor text-center">25</div></td>
                    <td width="5%">&nbsp;</td>
                  </tr>
                  <tr>
                  <td width="5%">&nbsp;</td>
                  <td width="15%"><div class="checkbox-workbook text-center zero-padding min_heightt marign_bt">
                      <div class="checkbox">
                        <input type="checkbox" value="yes" id="check9" name="merchant-checkbox"/>
                        <label for="check9"></label>
                      </div>
                    </div></td>
                  <td width="5%">&nbsp;</td>
                  <td width="50%"><table width="100%" cellspacing="0">
                      <tbody>
                        <tr>
                          <td width="30%"><a href="#" class="compliance-td-fonts yellobg text-center min_heightt marign_bt"><img src="images/card-img10.png"/></a></td>
                          <td width="5%">&nbsp;</td>
                          <td width="30%"><a href="#" class="compliance-td-fonts yellobg text-center min_heightt marign_bt"><img src="images/card-img7.png"/></a></td>
                          <td width="5%">&nbsp;</td>
                          <td width="30%"><a href="#" class="compliance-td-fonts yellobg text-center min_heightt marign_bt"><img src="images/card-img8.png"/></a></td>
                        </tr>
                      </tbody>
                    </table></td>
                  <td width="5%">&nbsp;</td>
                  <td width="15%"><a href="#" class="compliance-td-fonts yellobg text-center min_heightt marign_bt"><img src="images/card-img9.png"/></a></td>
                  <td width="5%">&nbsp;</td>
                </tr>
                 <TR1/>
                 <TR1/>
                 <TR1/>
                 <TR1/>
                 <TR1/>
                 <TR1/>
                 <TR1/>
                 <TR1/>
                 <TR1/>
                 <TR1/>
                
                </tbody>
              </table></td>
            <td width="35%" valign="top"><table width="100%" border="1" cellpadding="0" cellspacing="0" class="mb-2 bordercllr">
                <tr>
                  <td colspan="2"><div class="td-preaproval solu-notess">SOLUTION NOTES & ACTIVITY</div></td>
                </tr>
                <tr>
                  <td width="33%"><div class="td-preaproval solu-dates no_bordr min_heightt">&nbsp;&nbsp; DATE &nbsp;&nbsp;</div></td>
                  <td width="67%"><div class="td-preaproval solu-dates no_bordr min_heightt">E-mail | Skype | WhatsApp | Telegram</div></td>
                </tr>
                <tr>
                  <td><input type="date" name="note-date" value="" class="acri-sec no_bordr"/></td>
                  <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr"/></td>
                </tr>
                <tr>
                  <td><input type="date" name="note-date" value="" class="acri-sec no_bordr"/></td>
                  <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr"/></td>
                </tr>
                <tr>
                  <td><input type="date" name="note-date" value="" class="acri-sec no_bordr"/></td>
                  <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr"/></td>
                </tr>
                <tr>
                  <td><input type="date" name="note-date" value="" class="acri-sec no_bordr"/></td>
                  <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr"/></td>
                </tr>
                <tr>
                  <td><input type="date" name="note-date" value="" class="acri-sec no_bordr"/></td>
                  <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr"/></td>
                </tr>
                <tr>
                  <td><input type="date" name="note-date" value="" class="acri-sec no_bordr"/></td>
                  <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr"/></td>
                </tr>
                <tr>
                  <td><input type="date" name="note-date" value="" class="acri-sec no_bordr"/></td>
                  <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr"/></td>
                </tr>
                <tr>
                  <td><input type="date" name="note-date" value="" class="acri-sec no_bordr"/></td>
                  <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr"/></td>
                </tr>
                <tr>
                  <td><input type="date" name="note-date" value="" class="acri-sec no_bordr"/></td>
                  <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr"/></td>
                </tr>
                <tr>
                  <td><input type="date" name="note-date" value="" class="acri-sec no_bordr"/></td>
                  <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr"/></td>
                </tr>
                <tr>
                  <td><input type="date" name="note-date" value="" class="acri-sec no_bordr"/></td>
                  <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr"/></td>
                </tr>
              </table></td>
          </tr>
        </thead>
      </table>
    </div>
  </div>
  )
}
