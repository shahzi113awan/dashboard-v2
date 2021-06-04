
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import $ from 'jquery'
import '../assets/css/pre-approval.css'
import refreshImg from '../assets/images/refresh.png'
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
    <div class='newappWrap'>
      <div class='container-fluid'>
        <table>
          <thead>
            <tr>
              <th width='6%'>
                {' '}
                <div class='td-preaproval'>Ref: </div>
              </th>
              <th>&nbsp;</th>
              <th width='20%'>
                {' '}
                <div class='td-preaproval'>COMPANY NAME </div>
              </th>
              <th>&nbsp;</th>
              <th width='10%'>
                {' '}
                <div class='td-preaproval'>SOLUTION </div>
              </th>
              <th>&nbsp;</th>
              <th width='10%'>
                {' '}
                <div class='td-preaproval'>APPLICATION DATE </div>
              </th>
              <th>&nbsp;</th>
              <th width='12%'>
                {' '}
                <div class='td-preaproval'>Trading Sector / Product </div>
              </th>
              <th>&nbsp;</th>
              <th width='12%'>
                {' '}
                <div class='td-preaproval'>Trading / New To Cards </div>
              </th>
              <th>&nbsp;</th>
              <th width='12%'>
                {' '}
                <div class='td-preaproval'> Vertical / Trading Sector </div>
              </th>
              <th>&nbsp;</th>
              <th width='9%'>
                {' '}
                <div class='td-preaproval'>Compliance Country Location </div>
              </th>
              <th>&nbsp;</th>
              <th width='9%'>
                {' '}
                <div class='td-preaproval'>Licence Yes / No </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td width='6%'>
                <div class='td-preaproval-lt'> {ref} </div>
              </td>
              <td>&nbsp;</td>
              <td width='20%'>
                <div class='td-preaproval-lt blueborder'>{data1.af_rcn} </div>
              </td>
              <td>&nbsp;</td>
              <td width='10%'>
                <div class='td-preaproval-lt blueborder'>{data1.af_sol} </div>
              </td>
              <td>&nbsp;</td>
              <td width='10%'>
                <div class='td-preaproval-lt blueborder'>{data1.af_ad}</div>
              </td>
              <td>&nbsp;</td>
              <td width='12%'>
                <div class='td-preaproval-lt'>{tradeSector} </div>
              </td>
              <td>&nbsp;</td>
              <td width='12%'>
                <div class='td-preaproval-lt'>{data1.af_ntc} </div>
              </td>
              <td>&nbsp;</td>
              <td width='12%'>
                <div class='td-preaproval-lt'>{data1.af_vts} </div>
              </td>
              <td>&nbsp;</td>
              <td width='9%'>
                <div class='td-preaproval-lt'> {data1.af_ccl}</div>
              </td>
              <td>&nbsp;</td>
              <td width='9%'>
                <div class='td-preaproval-lt'> {licence}</div>
              </td>
            </tr>
          </tbody>
        </table>
        {/* <form> */}
        <table>
          <tbody>
            <tr>
              <td width='34%'>
                <table width='100%' class='mb-4'>
                  <tbody>
                    <tr>
                      <td colspan='3'>
                        <div class='pre-banner-title mb-3'>
                          {' '}
                          PRE-APPROVAL APPLICATION
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td colspan='3'>
                        <div class='acri-sec text-center'>
                          ACQUIRING / SOLUTION SELECTION
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td width='30%'>
                        <div class='acri-sec  acri-sec2 text-center'>
                          {' '}
                          PROPOSED SOLUTION
                        </div>
                      </td>
                      <td width='1%'>&nbsp;</td>
                      <td width='69%'>
                        <div class='acri-sec  acri-sec2 text-center'>
                          {' '}
                          WEBSITE ADDRESS
                        </div>
                      </td>
                    </tr>
                    <tr>
                     <td>
                    <select    onChange={handleInput}
                          value={Wb.proposedSol}
                          name="proposedSol"   class="acri-sec padding-right0 rightt_linkk">
                          <option value="CCBILL">CCBILL</option>
                        <option value="Global Gate">Global Gate Solution</option>
                        <option value="e-Shop Payment">e-Shop Payment</option>
                        <option value="FIDO">FIDO</option>
                        <option value="Netsix">Netsix</option>
                        <option value="Octapay">Octapay</option>
                        <option value="Safecharge">Safecharge</option>             </select>
                </td>
                      <td width='1'>&nbsp;</td>
                      <td>
                        <input
                          type='text'
                          onChange={handleInput}
                          value={Wb.webAddress}
                          name="webAddress"
                          class='acri-sec text-center blueclrr'
                        />
                      </td>
                    </tr>
                    <tr>
                     <td>
                    <select    onChange={handleInput}
                          value={Wb.proposedSol2}
                          name="proposedSol2" class="acri-sec padding-right0 rightt_linkk">
                          <option value="CCBILL">CCBILL</option>
                        <option value="Global Gate">Global Gate Solution</option>
                        <option value="e-Shop Payment">e-Shop Payment</option>
                        <option value="FIDO">FIDO</option>
                        <option value="Netsix">Netsix</option>
                        <option value="Octapay">Octapay</option>
                        <option value="Safecharge">Safecharge</option>
                    </select>
                </td>
                      <td width='1'>&nbsp;</td>
                      <td>
                        <input
                          type='text'
                          onChange={handleInput}
                          value={Wb.webAddress1}
                          name="webAddress1"
                          class='acri-sec text-center blueclrr'
                        />
                      </td>
                    </tr>
                    <tr>
                     <td>
                    <select    onChange={handleInput}
                          value={Wb.proposedSol3}
                          name="proposedSol3" class="acri-sec padding-right0 rightt_linkk">
                          <option value="CCBILL">CCBILL</option>
                        <option value="Global Gate">Global Gate Solution</option>
                        <option value="e-Shop Payment">e-Shop Payment</option>
                        <option value="FIDO">FIDO</option>
                        <option value="Netsix">Netsix</option>
                        <option value="Octapay">Octapay</option>
                        <option value="Safecharge">Safecharge</option>             </select>
                </td>
                      <td width='1'>&nbsp;</td>
                      <td>
                        <input
                          type='text'
                          onChange={handleInput}
                          value={Wb.webAddress2}
                          name="webAddress2"
                          class='acri-sec text-center blueclrr'
                        />
                      </td>
                    </tr>
                    <tr>
                     <td>
                    <select    onChange={handleInput}
                          value={Wb.proposedSol4}
                          name="proposedSol4" class="acri-sec padding-right0 rightt_linkk">
                          <option value="CCBILL">CCBILL</option>
                        <option value="Global Gate">Global Gate Solution</option>
                        <option value="e-Shop Payment">e-Shop Payment</option>
                        <option value="FIDO">FIDO</option>
                        <option value="Netsix">Netsix</option>
                        <option value="Octapay">Octapay</option>
                        <option value="Safecharge">Safecharge</option>             </select>
                </td>
                      <td width='1'>&nbsp;</td>
                      <td>
                        <input
                          type='text'
                          onChange={handleInput}
                          value={Wb.webAddress3}
                          name="webAddress3"
                          class='acri-sec text-center blueclrr'
                        />
                      </td>
                    </tr>
                    <tr>
                     <td>
                    <select    onChange={handleInput}
                          value={Wb.proposedSol5}
                          name="proposedSol5" class="acri-sec padding-right0 rightt_linkk">
                          <option value="CCBILL">CCBILL</option>
                        <option value="Global Gate">Global Gate Solution</option>
                        <option value="e-Shop Payment">e-Shop Payment</option>
                        <option value="FIDO">FIDO</option>
                        <option value="Netsix">Netsix</option>
                        <option value="Octapay">Octapay</option>
                        <option value="Safecharge">Safecharge</option>             </select>
                </td>
                      <td width='1'>&nbsp;</td>
                      <td>
                        <input
                          type='text'
                          onChange={handleInput}
                          value={Wb.webAddress4}
                          name="webAddress4"
                          class='acri-sec text-center blueclrr'
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td className="td-width-fix">&nbsp;</td>
              <td width='34%' valign='top'>
                <table class='mb-3' width='100%'>
                  <tbody>
                    <tr>
                      <td width='5%'>
                        <div  class='pre-imgg'>
                          <Link to={"/app/"+urlid}>
                          <img src={refreshImg} alt='' />
                          </Link>
                        </div>
                      </td>
                      <td width='44%'>&nbsp;</td>
                      <td width='35%'>
                        <div class='pre-day blueborder'>TOTAL AGED DAYS</div>
                      </td>
                      <td width='1%'>&nbsp;</td>
                      <td width='15%'>
                        <div class='pre-day blueborder'>{cal(data1.af_ad)}</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class='mb-4'>
                  <tbody>
                    <tr>
                      <td colspan='9'>
                        <div class='acri-sec text-center'>
                          ACQUIRING / SOLUTION SELECTION
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td width='20%'>
                        <div class='acri-sec acri-sec2 blueborder text-center'>
                          APPROVAL BUY RATE
                        </div>
                      </td>
                      <td width='1%'>&nbsp;</td>
                      <td width='20%'>
                        <div class='acri-sec acri-sec2 text-center'>
                          {' '}
                          INTERMEDIARY COST + 0.3%
                        </div>
                      </td>
                      <td width='1%'>&nbsp;</td>
                      <td width='20%'>
                        <div class='acri-sec acri-sec2 text-center'>
                          PARTNER COST + 1%
                        </div>
                      </td>
                      <td width='1%'>&nbsp;</td>
                      <td width='21%'>
                        <div class='acri-sec acri-sec2 blueborder text-center'>
                          EMS SELL RATE + 1%
                        </div>
                      </td>
                      <td width='1%'>&nbsp;</td>
                      <td width='20%'>
                        <div class='acri-sec acri-sec2 blueborder text-center'>
                          MERCHANT ACCEPTED
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          type='text'
                          onChange={handleInput}
                          value={Wb.ApprovalBuyRate}
                          name="ApprovalBuyRate"
                          class='acri-sec blueborder text-center'
                        />
                      </td>
                      <td>&nbsp;</td>
                      <td>
                        <input
                          type='text'
                          onChange={handleInput}
                          value={Wb.INTERMEDIARYCOST1}
                          name="INTERMEDIARYCOST1"
                          class='acri-sec text-center'
                        />
                      </td>
                      <td>&nbsp;</td>
                      <td>
                        <input
                          type='text'
                          onChange={handleInput}
                          value={Wb.PARTNERCOST5}
                          name="PARTNERCOST5"
                          class='acri-sec text-center'
                        />
                      </td>
                      <td>&nbsp;</td>
                      <td>
                        <input
                          type='text'
                          onChange={handleInput}
                          value={Wb.EMSSELLRATE}
                          name="EMSSELLRATE"
                          class='acri-sec blueborder text-center'
                        />
                      </td>
                      <td>&nbsp;</td>
                      <td>
                        <div class='acri-sec blueborder text-center zero-padding'>
                          <div class='checkbox'>
                            <input
                              type='checkbox'
                              value='yes'
                              id='check2'
                              name='merchant-checkbox'
                            />
                            <label for='check2'></label>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          type='text'
                          onChange={handleInput}
                          value={Wb.ApprovalBuyRate1}
                          name="ApprovalBuyRate1"
                          class='acri-sec blueborder text-center'
                        />
                      </td>
                      <td>&nbsp;</td>
                      <td>
                        <input
                          type='text'
                          onChange={handleInput}
                          value={Wb.INTERMEDIARYCOST2}
                          name="INTERMEDIARYCOST2"
                          class='acri-sec text-center'
                        />
                      </td>
                      <td>&nbsp;</td>
                      <td>
                        <input
                          type='text'
                          onChange={handleInput}
                          value={Wb.PARTNERCOST1}
                          name="PARTNERCOST1"
                          class='acri-sec text-center'
                        />
                      </td>
                      <td>&nbsp;</td>
                      <td>
                        <input
                          type='text'
                          onChange={handleInput}
                          value={Wb.EMSSELLRATE1}
                          name="EMSSELLRATE1"
                          class='acri-sec blueborder text-center'
                        />
                      </td>
                      <td>&nbsp;</td>
                      <td>
                        <div class='acri-sec blueborder text-center zero-padding'>
                          <div class='checkbox'>
                            <input
                              type='checkbox'
                              value='yes'
                              id='check3'
                              name='merchant-checkbox'
                            />
                            <label for='check3'></label>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          type='text'
                          onChange={handleInput}
                          value={Wb.ApprovalBuyRate2}
                          name="ApprovalBuyRate2"
                          class='acri-sec blueborder text-center'
                        />
                      </td>
                      <td>&nbsp;</td>
                      <td>
                        <input
                          type='text'
                          onChange={handleInput}
                          value={Wb.INTERMEDIARYCOST3}
                          name="INTERMEDIARYCOST3"
                          class='acri-sec text-center'
                        />
                      </td>
                      <td>&nbsp;</td>
                      <td>
                        <input
                          type='text'
                          onChange={handleInput}
                          value={Wb.PARTNERCOST}
                          name="PARTNERCOST"
                          class='acri-sec text-center'
                        />
                      </td>
                      <td>&nbsp;</td>
                      <td>
                        <input
                          type='text'
                          onChange={handleInput}
                          value={Wb.EMSSELLRATE2}
                          name="EMSSELLRATE2"
                          class='acri-sec blueborder text-center'
                        />
                      </td>
                      <td>&nbsp;</td>
                      <td>
                        <div class='acri-sec blueborder text-center zero-padding'>
                          <div class='checkbox'>
                            <input
                              type='checkbox'
                              value='yes'
                              id='check4'
                              name='merchant-checkbox'
                            />
                            <label for='check4'></label>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          type='text'
                          onChange={handleInput}
                          value={Wb.ApprovalBuyRate3}
                          name="ApprovalBuyRate3"
                          class='acri-sec blueborder text-center'
                        />
                      </td>
                      <td>&nbsp;</td>
                      <td>
                        <input
                          type='text'
                          onChange={handleInput}
                          value={Wb.INTERMEDIARYCOST4}
                          name="INTERMEDIARYCOST4"
                          class='acri-sec text-center'
                        />
                      </td>
                      <td>&nbsp;</td>
                      <td>
                        <input
                          type='text'
                          onChange={handleInput}
                          value={Wb.PARTNERCOST3}
                          name="PARTNERCOST3"
                          class='acri-sec text-center'
                        />
                      </td>
                      <td>&nbsp;</td>
                      <td>
                        <input
                          type='text'
                          onChange={handleInput}
                          value={Wb.EMSSELLRATE4}
                          name="EMSSELLRATE4"
                          class='acri-sec blueborder text-center'
                        />
                      </td>
                      <td>&nbsp;</td>
                      <td>
                        <div class='acri-sec blueborder text-center zero-padding'>
                          <div class='checkbox'>
                            <input
                              type='checkbox'
                              value='yes'
                              id='check5'
                              name='merchant-checkbox'
                            />
                            <label for='check5'></label>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          type='text'
                          onChange={handleInput}
                          value={Wb.ApprovalBuyRate4}
                          name="ApprovalBuyRate4"
                          class='acri-sec blueborder text-center'
                        />
                      </td>
                      <td>&nbsp;</td>
                      <td>
                        <input
                          type='text'
                          onChange={handleInput}
                          value={Wb.INTERMEDIARYCOST}
                          name="INTERMEDIARYCOST"
                          class='acri-sec text-center'
                        />
                      </td>
                      <td>&nbsp;</td>
                      <td>
                        <input
                          type='text'
                          onChange={handleInput}
                          value={Wb.PARTNERCOST4}
                          name="PARTNERCOST4"
                          class='acri-sec text-center'
                        />
                      </td>
                      <td>&nbsp;</td>
                      <td>
                        <input
                          type='text'
                          onChange={handleInput}
                          value={Wb.EMSSELLRATE3}
                          name="EMSSELLRATE3"
                          class='acri-sec blueborder text-center'
                        />
                      </td>
                      <td>&nbsp;</td>
                      <td>
                        <div class='acri-sec blueborder text-center zero-padding'>
                          <div class='checkbox'>
                            <input
                              type='checkbox'
                              value={true}
                              id='check6'
                              name='merchant-checkbox'
                            />
                            <label for='check6'></label>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td className="td-width-fix">&nbsp;</td>
              <td width='34%' valign='top'>
                <table
                  width='100%'
                  border='1'
                  cellpadding='0'
                  cellspacing='0'
                  class='mb-2 bordercllr'
                >
                  <tr>
                    <td colspan='2'>
                      <div class='td-preaproval solu-notess'>
                        SOLUTION NOTES & ACTIVITY
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td width='33%'>
                      <div class='td-preaproval solu-dates'>
                        &nbsp;&nbsp; DATE &nbsp;&nbsp;
                      </div>
                    </td>
                    <td width='67%'>
                      <div class='td-preaproval solu-dates'>
                        E-mail | Skype | WhatsApp | Telegram
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type='date'
                        onChange={handleInput}
                        value={Wb.Date}
                        name="Date"
                        class='acri-sec no_bordr'
                      />
                    </td>
                    <td>
                      <input
                        type='text'
                        onChange={handleInput}
                        value={Wb.Notes}
                        name="Notes"
                        class='acri-sec no_bordr'
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type='date'
                        onChange={handleInput}
                        value={Wb.Date1}
                        name="Date1"
                        class='acri-sec no_bordr'
                      />
                    </td>
                    <td>
                      <input
                        type='text'
                        onChange={handleInput}
                        value={Wb.Notes1}
                        name="Notes1"
                        class='acri-sec no_bordr'
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type='date'
                        onChange={handleInput}
                        value={Wb.Date2}
                        name="Date2"
                        class='acri-sec no_bordr'
                      />
                    </td>
                    <td>
                      <input
                        type='text'
                        onChange={handleInput}
                        value={Wb.Notes2}
                        name="Notes2"
                        class='acri-sec no_bordr'
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type='date'
                        onChange={handleInput}
                        value={Wb.Date3}
                        name="Date3"
                        class='acri-sec no_bordr'
                      />
                    </td>
                    <td>
                      <input
                        type='text'
                        onChange={handleInput}
                        value={Wb.Notes3}
                        name="Notes3"
                        class='acri-sec no_bordr'
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type='date'
                        onChange={handleInput}
                        value={Wb.Date4}
                        name="Date4"
                        class='acri-sec no_bordr'
                      />
                    </td>
                    <td>
                      <input
                        type='text'
                        onChange={handleInput}
                        value={Wb.Notes4}
                        name="Notes4"
                        class='acri-sec no_bordr'
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type='date'
                        onChange={handleInput}
                        value={Wb.Date5}
                        name="Date5"
                        class='acri-sec no_bordr'
                      />
                    </td>
                    <td>
                      <input
                        type='text'
                        onChange={handleInput}
                        onChange={handleInput}
                        value={Wb.Date6}
                        name="Date6"
                        class='acri-sec no_bordr'
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type='date'
                        onChange={handleInput}
                        value={Wb.Date7}
                        name="Date7"
                        class='acri-sec no_bordr'
                      />
                    </td>
                    <td>
                      <input
                        type='text'
                        onChange={handleInput}
                        value={Wb.Notes6}
                        name="Notes6"
                        class='acri-sec no_bordr'
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type='date'
                        onChange={handleInput}
                        value={Wb.Date8}
                        name="Date8"
                        class='acri-sec no_bordr'
                      />
                    </td>
                    <td>
                      <input
                        type='text'
                        onChange={handleInput}
                        value={Wb.Notes7}
                        name="Notes7"
                        class='acri-sec no_bordr'
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type='date'
                        onChange={handleInput}
                        value={Wb.Date9}
                        name="Date9"
                        class='acri-sec no_bordr'
                      />
                    </td>
                    <td>
                      <input
                        type='text'
                        onChange={handleInput}
                        value={Wb.Notes8}
                        name="Notes8"
                        class='acri-sec no_bordr'
                      />
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-primary" onClick={e => { onUpdateSubmit(e) }}> Submit</button>
        {/* </form> */}
      </div>
    </div>
  )
}
