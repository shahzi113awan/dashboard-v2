
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import $ from 'jquery'
import '../assets/css/trading-book.css'
import TR from './ComplianceR'
import TR1 from './ComplianceR1'
import TR2 from './ComplianceR2'
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
  
export default function PreApproval() {
 
  
   
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
                    <td width="12%"><a href="#" class="compliance-td-fonts blueborder text-center"><img src="/images/card-img10.png" /></a></td>
                    <td width="76%">&nbsp;</td>
                    <td width="12%"><a href="#" class="compliance-td-fonts blueborder text-center"><img src="/images/card-img7.png" /></a></td>
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

                    <TR id={'check9'} id1={'check10'} id3={'check11'} name={"Fully Completed Application Form"} status={"COMPLETE"} />
                    <TR id={'check12'} id1={'check13'} id3={'check14'} name={"Bank Information (Welcome Letter)"} status={"COMPLETE"} />
                    <TR id={'check15'} id1={'check16'} id3={'check17'} name={"Office Tenancy Agreement"} status={"COMPLETE"} />
                    <TR id={'check18'} id1={'check19'} id3={'check20'} name={"Acquiring Processing Statements"} status={"COMPLETE"} />
                    <TR id={'check21'} id1={'check22'} id3={'check23'} name={"Headline Website URL Address"} status={"COMPLETE"} />
                    <TR id={'check24'} id1={'check25'} id3={'check26'} name={"Website Compliance"} status={"COMPLETE"} />
                    <TR id={'check27'} id1={'check28'} id3={'check29'} name={"Website URL - Proof of Domain"} status={"COMPLETE"} />
                    <TR id={'check30'} id1={'check31'} id3={'check32'} name={"Ownership Structure Chart"} status={"COMPLETE"} />
                    <TR id={'check9'} id1={'check'} id3={'check35'} name={"Business Plan"} status={"COMPLETE"} />

                  </tbody>
                </table></td>
              <td width="30%" valign="top"><table width="100%">
                <tbody>
                  <tr>
                    <td width="5%">&nbsp;</td>
                    <td width="15%"><a href="#" class="compliance-td-fonts blueborder text-center"><img src="/images/card-img6.png" /></a></td>
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
                        <input type="checkbox" value="yes" id="check9" name="merchant-checkbox" />
                        <label for="check9"></label>
                      </div>
                    </div></td>
                    <td width="5%">&nbsp;</td>
                    <td width="50%"><table width="100%" cellspacing="0">
                      <tbody>
                        <tr>
                          <td width="30%"><a href="#" class="compliance-td-fonts yellobg text-center min_heightt marign_bt"><img src="/images/card-img10.png" /></a></td>
                          <td width="5%">&nbsp;</td>
                          <td width="30%"><a href="#" class="compliance-td-fonts yellobg text-center min_heightt marign_bt"><img src="/images/card-img7.png" /></a></td>
                          <td width="5%">&nbsp;</td>
                          <td width="30%"><a href="#" class="compliance-td-fonts yellobg text-center min_heightt marign_bt"><img src="/images/card-img8.png" /></a></td>
                        </tr>
                      </tbody>
                    </table></td>
                    <td width="5%">&nbsp;</td>
                    <td width="15%"><a href="#" class="compliance-td-fonts yellobg text-center min_heightt marign_bt"><img src="/images/card-img9.png" /></a></td>
                    <td width="5%">&nbsp;</td>
                  </tr>
                  <TR1 id2={'check9'} id1={'check10'} id3={'check11'} />
<TR1 id2={'check12'} id1={'check13'} id3={'check14'}/>
<TR1 id2={'check15'} id1={'check16'} id3={'check17'}/>
<TR1 id2={'check18'} id1={'check19'} id3={'check20'}/>
<TR1 id2={'check21'} id1={'check22'} id3={'check23'}/>
<TR1 id2={'check24'} id1={'check25'} id3={'check26'}/>
<TR1 id2={'check29'} id1={'check28'} id3={'check27'}/>
<TR1 id2={'check30'} id1={'check31'} id3={'check32'}/>
<TR1 id2={'check35'} id1={'check34'} id3={'check33'}/>
<TR1 id2={'check38'} id1={'check37'} id3={'check36'}/>

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
                  <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                  <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                </tr>
                <tr>
                  <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                  <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                </tr>
                <tr>
                  <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                  <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                </tr>
                <tr>
                  <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                  <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                </tr>
                <tr>
                  <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                  <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                </tr>
                <tr>
                  <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                  <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                </tr>
                <tr>
                  <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                  <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                </tr>
                <tr>
                  <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                  <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                </tr>
                <tr>
                  <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                  <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                </tr>
                <tr>
                  <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                  <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                </tr>
                <tr>
                  <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                  <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                </tr>
              </table></td>
            </tr>
          </thead>
        </table>

        <div class="accordion" id="accordionExample">
          <div class="card">
            <div class="card-header" id="headingOne">
              <h2 class="mb-0">
                <button class="btn  btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                  KNOW YOUR CUSTOMER (KYC)
                </button>
              </h2>
            </div>

            <div id="collapseOne" class="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">

              <table>
                <thead>
                  <tr>
                    <td width="35%" valign="top"><table width="100%">
                      <tbody>
                        <tr>
                          <td width="10%"><a href="#" class="compliance-td-fonts blueborder text-center"><img src="/images/card-img10.png" /></a></td>
                          <td width="3%">&nbsp;</td>

                          <td width="10%"><a href="#" class="compliance-td-fonts blueborder text-center"><img src="/images/card-img10.png" /></a></td>
                          <td width="3%">&nbsp;</td>

                          <td width="10%"><a href="#" class="compliance-td-fonts blueborder text-center"><img src="/images/card-img10.png" /></a></td>
                          <td width="3%">&nbsp;</td>

                          <td width="10%"><a href="#" class="compliance-td-fonts blueborder text-center"><img src="/images/card-img10.png" /></a></td>
                          <td width="30%">&nbsp;</td>
                          <td width="12%"><a href="#" class="compliance-td-fonts blueborder text-center"><img src="/images/card-img7.png" /></a></td>
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
                            <td width="58%"><div class="compliance-td-fonts min_heightt marign_bt3">Lead (1st) Director - Passport</div></td>
                            <td width="35%"><div class="compliance-td-fonts yellobg text-center min_heightt marign_bt3"> COMPLETE</div></td>
                          </tr>

                          <TR id={'check9'} id1={'check10'} id3={'check11'} name={"Lead (1st) Director - Proof of Address"} status={"COMPLETE"} />
                          <TR id={'check12'} id1={'check13'} id3={'check14'} name={"Second (2nd) Director - Passport"} status={"COMPLETE"} />
                          <TR id={'check15'} id1={'check16'} id3={'check17'} name={"Second (2nd) Director - Proof of Address"} status={"COMPLETE"} />
                          <TR id={'check18'} id1={'check19'} id3={'check20'} name={"Third (3rd) Director - Passport"} status={"COMPLETE"} />
                          <TR id={'check21'} id1={'check22'} id3={'check23'} name={"Third (3rd) Director - Proof of Address"} status={"COMPLETE"} />
                          <TR id={'check24'} id1={'check25'} id3={'check26'} name={"Fourth (4th) Director - Passport"} status={"COMPLETE"} />
                          <TR id={'check27'} id1={'check28'} id3={'check29'} name={"Fourth (4th) Director - Proof of Address"} status={"COMPLETE"} />
                          <TR id={'check30'} id1={'check31'} id3={'check32'} name={"Power of Attorney Document"} status={"COMPLETE"} />

                        </tbody>
                      </table></td>
                    <td width="30%" valign="top"><table width="100%">
                      <tbody>
                        <tr>
                          <td width="5%">&nbsp;</td>
                          <td width="15%"><a href="#" class="compliance-td-fonts blueborder text-center"><img src="/images/card-img6.png" /></a></td>
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
                              <input type="checkbox" value="yes" id="check9" name="merchant-checkbox" />
                              <label for="check9"></label>
                            </div>
                          </div></td>
                          <td width="5%">&nbsp;</td>
                          <td width="50%"><table width="100%" cellspacing="0">
                            <tbody>
                              <tr>
                                <td width="30%"><a href="#" class="compliance-td-fonts yellobg text-center min_heightt marign_bt"><img src="/images/card-img10.png" /></a></td>
                                <td width="5%">&nbsp;</td>
                                <td width="30%"><a href="#" class="compliance-td-fonts yellobg text-center min_heightt marign_bt"><img src="/images/card-img7.png" /></a></td>
                                <td width="5%">&nbsp;</td>
                                <td width="30%"><a href="#" class="compliance-td-fonts yellobg text-center min_heightt marign_bt"><img src="/images/card-img8.png" /></a></td>
                              </tr>
                            </tbody>
                          </table></td>
                          <td width="5%">&nbsp;</td>
                          <td width="15%"><a href="#" class="compliance-td-fonts yellobg text-center min_heightt marign_bt"><img src="/images/card-img9.png" /></a></td>
                          <td width="5%">&nbsp;</td>
                        </tr>
                        <TR1 id2={'check9'} id1={'check10'} id3={'check11'} />
<TR1 id2={'check12'} id1={'check13'} id3={'check14'}/>
<TR1 id2={'check15'} id1={'check16'} id3={'check17'}/>
<TR1 id2={'check18'} id1={'check19'} id3={'check20'}/>
<TR1 id2={'check21'} id1={'check22'} id3={'check23'}/>
<TR1 id2={'check24'} id1={'check25'} id3={'check26'}/>
<TR1 id2={'check29'} id1={'check28'} id3={'check27'}/>
<TR1 id2={'check30'} id1={'check31'} id3={'check32'}/>
<TR1 id2={'check35'} id1={'check34'} id3={'check33'}/>
<TR1 id2={'check38'} id1={'check37'} id3={'check36'}/>
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
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                    </table></td>
                  </tr>
                </thead>
              </table>

            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingTwo">
              <h2 class="mb-0">
                <button class="btn  btn-block text-left collapsed " type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  KNOW YOUR BUSINESS (KYB)
                </button>
              </h2>
            </div>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">

              <table>
                <thead>
                  <tr>
                    <td width="35%" valign="top"><table width="100%">
                      <tbody>
                        <tr>
                          <td width="12%"><a href="#" class="compliance-td-fonts blueborder text-center"><img src="/images/card-img10.png" /></a></td>
                          <td width="76%">&nbsp;</td>
                          <td width="12%"><a href="#" class="compliance-td-fonts blueborder text-center"><img src="/images/card-img7.png" /></a></td>
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
                            <td width="58%"><div class="compliance-td-fonts min_heightt marign_bt3">Certificate of Incorporation</div></td>
                            <td width="35%"><div class="compliance-td-fonts yellobg text-center min_heightt marign_bt3"> COMPLETE</div></td>
                          </tr>

                          <TR id={'check9'} id1={'check10'} id3={'check11'} name={"Certificate of Incorporation"} status={"COMPLETE"} />
                          <TR id={'check12'} id1={'check13'} id3={'check14'} name={"Memorandum of Association"} status={"COMPLETE"} />
                          <TR id={'check15'} id1={'check16'} id3={'check17'} name={"Articles of Association"} status={"COMPLETE"} />
                          <TR id={'check18'} id1={'check19'} id3={'check20'} name={"Share Register"} status={"COMPLETE"} />
                          <TR id={'check21'} id1={'check22'} id3={'check23'} name={"Share Certificate(s) - Signed"} status={"COMPLETE"} />
                          <TR id={'check24'} id1={'check25'} id3={'check26'} name={"Current Commercial Register Extract"} status={"COMPLETE"} />
                          <TR id={'check27'} id1={'check28'} id3={'check29'} name={"Current Letter of Good Standing"} status={"COMPLETE"} />


                        </tbody>
                      </table></td>
                    <td width="30%" valign="top"><table width="100%">
                      <tbody>
                        <tr>
                          <td width="5%">&nbsp;</td>
                          <td width="15%"><a href="#" class="compliance-td-fonts blueborder text-center"><img src="/images/card-img6.png" /></a></td>
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
                              <input type="checkbox" value="yes" id="check9" name="merchant-checkbox" />
                              <label for="check9"></label>
                            </div>
                          </div></td>
                          <td width="5%">&nbsp;</td>
                          <td width="50%"><table width="100%" cellspacing="0">
                            <tbody>
                              <tr>
                                <td width="30%"><a href="#" class="compliance-td-fonts yellobg text-center min_heightt marign_bt"><img src="/images/card-img10.png" /></a></td>
                                <td width="5%">&nbsp;</td>
                                <td width="30%"><a href="#" class="compliance-td-fonts yellobg text-center min_heightt marign_bt"><img src="/images/card-img7.png" /></a></td>
                                <td width="5%">&nbsp;</td>
                                <td width="30%"><a href="#" class="compliance-td-fonts yellobg text-center min_heightt marign_bt"><img src="/images/card-img8.png" /></a></td>
                              </tr>
                            </tbody>
                          </table></td>
                          <td width="5%">&nbsp;</td>
                          <td width="15%"><a href="#" class="compliance-td-fonts yellobg text-center min_heightt marign_bt"><img src="/images/card-img9.png" /></a></td>
                          <td width="5%">&nbsp;</td>
                        </tr>
                        <TR1 id2={'check9'} id1={'check10'} id3={'check11'} />
<TR1 id2={'check12'} id1={'check13'} id3={'check14'}/>
<TR1 id2={'check15'} id1={'check16'} id3={'check17'}/>
<TR1 id2={'check18'} id1={'check19'} id3={'check20'}/>
<TR1 id2={'check21'} id1={'check22'} id3={'check23'}/>
<TR1 id2={'check24'} id1={'check25'} id3={'check26'}/>
<TR1 id2={'check29'} id1={'check28'} id3={'check27'}/>
<TR1 id2={'check30'} id1={'check31'} id3={'check32'}/>
<TR1 id2={'check35'} id1={'check34'} id3={'check33'}/>
<TR1 id2={'check38'} id1={'check37'} id3={'check36'}/>

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
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                    </table></td>
                  </tr>
                </thead>
              </table>

            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingThree">
              <h2 class="mb-0">
                <button class="btn  btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  SUPPORTING DOCUMENTS
                </button>
              </h2>
            </div>
            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">

              <table>
                <thead>
                  <tr>
                    <td width="35%" valign="top"><table width="100%">
                      <tbody>
                        <tr>
                          <td width="12%"><a href="#" class="compliance-td-fonts blueborder text-center"><img src="/images/card-img10.png" /></a></td>
                          <td width="76%">&nbsp;</td>
                          <td width="12%"><a href="#" class="compliance-td-fonts blueborder text-center"><img src="/images/card-img7.png" /></a></td>
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
                            <td width="58%"><div class="compliance-td-fonts min_heightt marign_bt3">Fulfilment or Drop Shipping Agreement</div></td>
                            <td width="35%"><div class="compliance-td-fonts yellobg text-center min_heightt marign_bt3"> COMPLETE</div></td>
                          </tr>

                          <TR id={'check9'} id1={'check10'} id3={'check11'} name={"Copywrite or Re-seller Agreement"} status={"COMPLETE"} />
                          <TR id={'check12'} id1={'check13'} id3={'check14'} name={"Corporate Bank Statements"} status={"COMPLETE"} />
                          <TR id={'check15'} id1={'check16'} id3={'check17'} name={"Personal Bank Statements"} status={"COMPLETE"} />
                          <TR id={'check18'} id1={'check19'} id3={'check20'} name={"Proof of Wealth"} status={"COMPLETE"} />
                          <TR id={'check21'} id1={'check22'} id3={'check23'} name={"Company AML Policy"} status={"COMPLETE"} />
                          <TR id={'check24'} id1={'check25'} id3={'check26'} name={"Gambling or Forex License"} status={"COMPLETE"} />
                          <TR id={'check27'} id1={'check28'} id3={'check29'} name={"FBO (Food) Company Registration"} status={"COMPLETE"} />


                        </tbody>
                      </table></td>
                    <td width="30%" valign="top"><table width="100%">
                      <tbody>
                        <tr>
                          <td width="5%">&nbsp;</td>
                          <td width="15%"><a href="#" class="compliance-td-fonts blueborder text-center"><img src="/images/card-img6.png" /></a></td>
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
                              <input type="checkbox" value="yes" id="check9" name="merchant-checkbox" />
                              <label for="check9"></label>
                            </div>
                          </div></td>
                          <td width="5%">&nbsp;</td>
                          <td width="50%"><table width="100%" cellspacing="0">
                            <tbody>
                              <tr>
                                <td width="30%"><a href="#" class="compliance-td-fonts yellobg text-center min_heightt marign_bt"><img src="/images/card-img10.png" /></a></td>
                                <td width="5%">&nbsp;</td>
                                <td width="30%"><a href="#" class="compliance-td-fonts yellobg text-center min_heightt marign_bt"><img src="/images/card-img7.png" /></a></td>
                                <td width="5%">&nbsp;</td>
                                <td width="30%"><a href="#" class="compliance-td-fonts yellobg text-center min_heightt marign_bt"><img src="/images/card-img8.png" /></a></td>
                              </tr>
                            </tbody>
                          </table></td>
                          <td width="5%">&nbsp;</td>
                          <td width="15%"><a href="#" class="compliance-td-fonts yellobg text-center min_heightt marign_bt"><img src="/images/card-img9.png" /></a></td>
                          <td width="5%">&nbsp;</td>
                        </tr>
                        <TR1 id2={'check9'} id1={'check10'} id3={'check11'} />
<TR1 id2={'check12'} id1={'check13'} id3={'check14'}/>
<TR1 id2={'check15'} id1={'check16'} id3={'check17'}/>
<TR1 id2={'check18'} id1={'check19'} id3={'check20'}/>
<TR1 id2={'check21'} id1={'check22'} id3={'check23'}/>
<TR1 id2={'check24'} id1={'check25'} id3={'check26'}/>
<TR1 id2={'check29'} id1={'check28'} id3={'check27'}/>
<TR1 id2={'check30'} id1={'check31'} id3={'check32'}/>
<TR1 id2={'check35'} id1={'check34'} id3={'check33'}/>
<TR1 id2={'check38'} id1={'check37'} id3={'check36'}/>

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
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                    </table></td>
                  </tr>
                </thead>
              </table>

            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingThree">
              <h2 class="mb-0">
                <button class="btn  btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="collapseThree">
                  MISCELLANEOUS DOCUMENTS
                </button>
              </h2>
            </div>
            <div id="collapsefour" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">

              <table>
                <thead>
                  <tr>
                    <td width="35%" valign="top"><table width="100%">
                      <tbody>
                        <tr>
                          <td width="12%"><a href="#" class="compliance-td-fonts blueborder text-center"><img src="/images/card-img10.png" /></a></td>
                          <td width="76%">&nbsp;</td>
                          <td width="12%"><a href="#" class="compliance-td-fonts blueborder text-center"><img src="/images/card-img7.png" /></a></td>
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
                            <td width="58%"><div class="compliance-td-fonts min_heightt marign_bt3">Sales Handoff Sheet (CCBill Only)</div></td>
                            <td width="35%"><div class="compliance-td-fonts yellobg text-center min_heightt marign_bt3"> COMPLETE</div></td>
                          </tr>

                          <TR id={'check9'} id1={'check10'} id3={'check11'} name={"Confirmation & Declaration Form (GGS Only)"} status={"COMPLETE"} />
                          <TR id={'check12'} id1={'check13'} id3={'check14'} name={"spare"} status={"COMPLETE"} />
                          <TR id={'check15'} id1={'check16'} id3={'check17'} name={"spare"} status={"COMPLETE"} />
                          <TR id={'check18'} id1={'check19'} id3={'check20'} name={"spare"} status={"COMPLETE"} />
                          <TR id={'check21'} id1={'check22'} id3={'check23'} name={"spare"} status={"COMPLETE"} />
                          <TR id={'check24'} id1={'check25'} id3={'check26'} name={"spare"} status={"COMPLETE"} />
                          <TR id={'check27'} id1={'check28'} id3={'check29'} name={"spare"} status={"COMPLETE"} />
                          <TR id={'check30'} id1={'check31'} id3={'check32'} name={"spare"} status={"COMPLETE"} />
                          <TR id={'check9'} id1={'check'} id3={'check35'} name={"spare  "} status={"COMPLETE"} />

                        </tbody>
                      </table></td>
                    <td width="30%" valign="top"><table width="100%">
                      <tbody>
                        <tr>
                          <td width="5%">&nbsp;</td>
                          <td width="15%"><a href="#" class="compliance-td-fonts blueborder text-center"><img src="/images/card-img6.png" /></a></td>
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
                              <input type="checkbox" value="yes" id="check59" name="merchant-checkbox" />
                              <label for="check59"></label>
                            </div>
                          </div></td>
                          <td width="5%">&nbsp;</td>
                          <td width="50%"><table width="100%" cellspacing="0">
                            <tbody>
                              <tr>
                                <td width="30%"><a href="#" class="compliance-td-fonts yellobg text-center min_heightt marign_bt"><img src="/images/card-img10.png" /></a></td>
                                <td width="5%">&nbsp;</td>
                                <td width="30%"><a href="#" class="compliance-td-fonts yellobg text-center min_heightt marign_bt"><img src="/images/card-img7.png" /></a></td>
                                <td width="5%">&nbsp;</td>
                                <td width="30%"><a href="#" class="compliance-td-fonts yellobg text-center min_heightt marign_bt"><img src="/images/card-img8.png" /></a></td>
                              </tr>
                            </tbody>
                          </table></td>
                          <td width="5%">&nbsp;</td>
                          <td width="15%"><a href="#" class="compliance-td-fonts yellobg text-center min_heightt marign_bt"><img src="/images/card-img9.png" /></a></td>
                          <td width="5%">&nbsp;</td>
                        </tr>
                        <TR1 id2={'check9'} id1={'check10'} id3={'check11'} />
<TR1 id2={'check12'} id1={'check13'} id3={'check14'}/>
<TR1 id2={'check15'} id1={'check16'} id3={'check17'}/>
<TR1 id2={'check18'} id1={'check19'} id3={'check20'}/>
<TR1 id2={'check21'} id1={'check22'} id3={'check23'}/>
<TR1 id2={'check24'} id1={'check25'} id3={'check26'}/>
<TR1 id2={'check29'} id1={'check28'} id3={'check27'}/>
<TR1 id2={'check30'} id1={'check31'} id3={'check32'}/>
<TR1 id2={'check35'} id1={'check34'} id3={'check33'}/>
<TR1 id2={'check38'} id1={'check37'} id3={'check36'}/>
                        

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
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                    </table></td>
                  </tr>
                </thead>
              </table>

            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingThree">
              <h2 class="mb-0">
                <button class="btn  btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapsefive" aria-expanded="false" aria-controls="collapseThree">
                  SEND FULL PACKAGE TO THE SOLUTION
                </button>
              </h2>
            </div>
            <div id="collapsefive" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">

              <table>
                <thead>
                  <tr>
                    <td width="35%" valign="top"><table width="100%">
                      <tbody>
                        <tr>
                          <td width="12%"><a href="#" class="compliance-td-fonts blueborder text-center"><img src="/images/card-img10.png" /></a></td>
                          <td width="76%">&nbsp;</td>
                          <td width="12%"><a href="#" class="compliance-td-fonts blueborder text-center"><img src="/images/card-img7.png" /></a></td>
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
                            <td width="58%"><div class="compliance-td-fonts min_heightt marign_bt3">TRADING INFORMATION</div></td>
                            <td width="35%"><div class="compliance-td-fonts yellobg text-center min_heightt marign_bt3"> COMPLETE</div></td>
                          </tr>

                          <TR id={'check9'} id1={'check10'} id3={'check11'} name={"KNOW YOUR CUSTOMER (KYC)"} status={"COMPLETE"} />
                          <TR id={'check12'} id1={'check13'} id3={'check14'} name={"KNOW YOUR BUSINESS (KYB)"} status={"COMPLETE"} />
                          <TR id={'check15'} id1={'check16'} id3={'check17'} name={"SUPPORTING DOCUMENTS"} status={"COMPLETE"} />
                          <TR id={'check18'} id1={'check19'} id3={'check20'} name={"MISCELLANEOUS DOCUMENTS"} status={"COMPLETE"} />
                          <TR id={'check21'} id1={'check22'} id3={'check23'} name={"CHECKED BY:"} status={"COMPLETE"} />

                          <tr>
                            <td width="58%"><div class="compliance-td-fonts min_heightt marign_bt3"> CHECKED BY:</div></td>
                            <td>
                        <input
                          type='text'
                         
                          value={""}
                          name="ApprovalBuyRate2"
                          class='acri-sec blueborder text-center'
                        />
                      </td>
                          </tr>
                          <tr>
                            <td width="58%"><div class="compliance-td-fonts min_heightt marign_bt3"> SENT TO SOLUTION BY:</div></td>
                            <td>
                        <input
                          type='text'
                         
                          value={""}
                          name="ApprovalBuyRate2"
                          class='acri-sec blueborder text-center'
                        />
                      </td>
                          </tr>
                          <tr>
                            <td width="58%"><div class="compliance-td-fonts min_heightt marign_bt3">DATE SENT TO SOLUTION:</div></td>
                            <td>
                        <input
                          type='text'
                         
                          value={""}
                          name="ApprovalBuyRate2"
                          class='acri-sec blueborder text-center'
                        />
                      </td>
                          </tr>
                          


                        </tbody>
                      </table></td>
                    <td width="30%" valign="top"><table width="100%">
                      <tbody>
                        <tr>
                          <td width="5%">&nbsp;</td>
                          <td width="15%"><a href="#" class="compliance-td-fonts blueborder text-center"><img src="/images/card-img6.png" /></a></td>
                          <td width="5%">&nbsp;</td>
                          <td width="50%"><div class="compliance-td-fonts blueborder redcolor text-center">TOTAL AGED DAYS</div></td>
                          <td width="5%">&nbsp;</td>
                          <td width="30%"><div class="compliance-td-fonts blueborder redcolor text-center">25</div></td>
                          <td width="5%">&nbsp;</td>
                        </tr>
                        <tr>
                          <td width="5%">&nbsp;</td>
                          <td width="30%"><div class="  text-center zero-padding min_heightt marign_bt">
                             
                          </div></td>
                          <td width="50%">&nbsp;</td>
                          <td width="100%"><table width="100%" cellspacing="0">
                            <tbody>
                              <tr>
                    
                              </tr>
                            </tbody>
                          </table></td>
                          <td width="5%">&nbsp;</td>
                          <td width="5%">&nbsp;</td>
                        </tr>
                        <TR2 id={'check9'} id1={'check10'} id3={'check11'} />
<TR2 id={'check12'} id1={'check13'} id3={'check14'}/>
<TR2 id={'check15'} id1={'check16'} id3={'check17'}/>
<TR2 id={'check18'} id1={'check19'} id3={'check20'}/>
<TR2 id={'check21'} id1={'check22'} id3={'check23'}/>
                        <TR2 />
                        <TR2 />


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
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                      <tr>
                        <td><input type="date" name="note-date" value="" class="acri-sec no_bordr" /></td>
                        <td><input type="text" name="note-box" value="Sent to IFX" class="acri-sec no_bordr" /></td>
                      </tr>
                    </table></td>
                  </tr>
                </thead>
              </table>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
