import { Button } from "reactstrap";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Get, Delete, GetApproved } from "../../actions/appActions";
import Loader from "react-loader-spinner";
import {IoIosArrowDropdownCircle} from 'react-icons/io'
import {GrDocumentTime} from 'react-icons/gr'
import {FaFilter} from 'react-icons/fa'
import moment from "moment";

export default function MainDashboard() {
  const history = useHistory();
// const [search, setsearch] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Get());
  }, [dispatch]);
  const [db, setDb] = useState([]);
  const [showSolutionFilter, setShowSolutionFilter] = useState(true)
  const [showRefFilter, setShowRefFilter] = useState(true)
  const [showNameFilter, setShowNameFilter] = useState(true)
  const [showDateFilter, setShowDateFilter] = useState(true)
  const [showDaysFilter, setShowDaysFilter] = useState(true)
  const [search, setSearch] = useState('')
  const [solutionSearch, setSolutionSearch] = useState('')
  const [nameSearch, setNameSearch] = useState('')
  const [refSearch, setRefSearch] = useState('')
  const [dateSearch, setDateSearch] = useState('')
  const [daysSearch, setDaysSearch] = useState('')
  const [isReady, setIsReady] = useState(false)
  const data = useSelector((state) => state.appReducer.state);
  // const isLoading = 'useSelector((state) => state.ciReducer.isLoading)'
  console.log(data);
  useEffect(() => {
    setDb(data);
  }, [data]);
  console.log(db);
  const isLoading = useSelector((state) => state.appReducer.isLoading);
  // if (!data) {
  //   window.location.reload();
  // }
  console.log(isLoading);
  const del = async (id) => {
    await dispatch(Delete(id));
    window.location.reload();
    // dispatch(Get());
  };

  useEffect(() => {
    // console.log(db);
  if (db && db.length > 0 ){
    db.map((el, Index) => {
      console.log(Index);
      const Start = moment(new Date());
      // console.log(Start);
      const End = moment(el.App.af_ad).add(90, "d").format("YYYY-MM-DD");
      const Ending = moment(End);
      // console.log(Ending);
      const days = Math.ceil(moment.duration(Ending.diff(Start)).asDays());
      el.App.days = days.toString()
      el.App.ref = Index.toString()
    })
    setIsReady(!isReady)
  }
  }, [db, isLoading]);
console.log(db);
  // const cal = (val) => {
  //   // console.log(val);
  //   const Start = moment(new Date());
  //   // console.log(Start);
  //   const End = moment(val).add(90, "d").format("YYYY-MM-DD");
  //   const Ending = moment(End);
  //   // console.log(Ending);
  //   const days = Math.ceil(moment.duration(Ending.diff(Start)).asDays());
  //   // console.log(days);
  //   return days;
  // };
   
  let extractedData = []
  let extractedData2 = []
  let extractedData3 = []
  let extractedData4 = []
  let extractedData5 = []
  let extractedData6 = []

  const filterForEveryOne = (item) => {
    return item.filter((object) => {
      const checkField =
        typeof object.App.af_rcn === 'string' ? object.App.af_rcn.toLowerCase() : ''
      const filteredField = search.toLowerCase()

      return checkField.includes(filteredField)
    })
  }
  const filterForEveryOne2 = (item) => {
    return item.filter((object) => {
      const checkField =
        typeof object.App.af_sol === 'string' ? object.App.af_sol.toLowerCase() : ''
      const filteredField = solutionSearch.toLowerCase()

      return checkField.includes(filteredField)
    })
  }
  const filterForEveryOne3 = (item) => {
    return item.filter((object) => {
      const checkField =
        typeof object.App.af_rcn === 'string' ? object.App.af_rcn.toLowerCase() : ''
      const filteredField = nameSearch.toLowerCase()

      return checkField.includes(filteredField)
    })
  }
  const filterForEveryOne4 = (item) => {
    return item.filter((object) => {
      console.log(object.App.days);
      const checkField =       object.App.days ? object.App.days:'';
      const filteredField = daysSearch.toLowerCase()

      return checkField.includes(filteredField)
    })
  }
  const filterForEveryOne5 = (item) => {
    return item.filter((object) => {
      const checkField =
        typeof object.App.af_ad === 'string' ? object.App.af_ad.toLowerCase() : ''
      const filteredField = dateSearch.toLowerCase()

      return checkField.includes(filteredField)
    })
  }
  const filterForEveryOne6 = (item) => {
    return item.filter((object) => {
      const checkField = object.App.ref  ? object.App.ref : '';
      const filteredField = refSearch.toLowerCase()

      return checkField.includes(filteredField)
    })
  }
// useEffect(()=>{

  if ( db && db.length > 0) {
    extractedData = filterForEveryOne(db)
  }
  if ( db && db.length > 0) {
    extractedData2 = filterForEveryOne2(extractedData)
  }
  if ( db && db.length > 0) {
    extractedData3 = filterForEveryOne3(extractedData2)
  }
  if ( db && db.length > 0) {
    extractedData4 = filterForEveryOne4(extractedData3)
  }
  if ( db && db.length > 0) {
    extractedData5 = filterForEveryOne5(extractedData4)
  }
  if ( db && db.length > 0) {
    extractedData6 = filterForEveryOne6(extractedData5)
  }
// },[isReady])
  console.log(extractedData6)
  console.log(showSolutionFilter)
  //   console.log(data[0].App.af_rcn);
  console.log(isLoading);
  //   console.log(db);
  return isLoading || !db ? (
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

    {/* <h3 className="text-center">Approval Dashboard</h3> */}


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
                      <th>
                          <div class='td-font-link'>
                            <button
                              style={{
                                backgroundColor: 'white',
                                border: '0px',
                                color: '#007bff',
                                fontWeight: 'bold',
                             marginRight:4 }}
                              onClick={() => setSearch('1')}
                            >
                              1
                            </button>
                            <button
                              style={{
                                backgroundColor: 'white',
                                border: '0px',
                                color: '#007bff',
                                fontWeight: 'bold',
                             marginRight:4 }}
                              onClick={() => setSearch('2')}
                            >
                              2
                            </button>
                            <button
                              style={{
                                backgroundColor: 'white',
                                border: '0px',
                                color: '#007bff',
                                fontWeight: 'bold',
                             marginRight:4 }}
                              onClick={() => setSearch('3')}
                            >
                              3
                            </button>
                            <button
                              style={{
                                backgroundColor: 'white',
                                border: '0px',
                                color: '#007bff',
                                fontWeight: 'bold',
                             marginRight:4 }}
                              onClick={() => setSearch('4')}
                            >
                              4
                            </button>
                            <button
                              style={{
                                backgroundColor: 'white',
                                border: '0px',
                                color: '#007bff',
                                fontWeight: 'bold',
                             marginRight:4 }}
                              onClick={() => setSearch('a')}
                            >
                              A
                            </button>
                            <button
                              style={{
                                backgroundColor: 'white',
                                border: '0px',
                                color: '#007bff',
                                fontWeight: 'bold',
                             marginRight:4 }}
                              onClick={() => setSearch('B')}
                            >
                              B
                            </button>
                            <button
                              style={{
                                backgroundColor: 'white',
                                border: '0px',
                                color: '#007bff',
                                fontWeight: 'bold',
                             marginRight:4 }}
                              onClick={() => setSearch('C')}
                            >
                              C
                            </button>
                            <button
                              style={{
                                backgroundColor: 'white',
                                border: '0px',
                                color: '#007bff',
                                fontWeight: 'bold',
                             marginRight:4 }}
                              onClick={() => setSearch('D')}
                            >
                              D
                            </button>
                            <button
                              style={{
                                backgroundColor: 'white',
                                border: '0px',
                                color: '#007bff',
                                fontWeight: 'bold',
                             marginRight:4 }}
                              onClick={() => setSearch('E')}
                            >
                              E
                            </button>
                            <button
                              style={{
                                backgroundColor: 'white',
                                border: '0px',
                                color: '#007bff',
                                fontWeight: 'bold',
                             marginRight:4 }}
                              onClick={() => setSearch('F')}
                            >
                              F
                            </button>
                            <button
                              style={{
                                backgroundColor: 'white',
                                border: '0px',
                                color: '#007bff',
                                fontWeight: 'bold',
                             marginRight:4 }}
                              onClick={() => setSearch('G')}
                            >
                              G
                            </button>
                            <button
                              style={{
                                backgroundColor: 'white',
                                border: '0px',
                                color: '#007bff',
                                fontWeight: 'bold',
                             marginRight:4 }}
                              onClick={() => setSearch('H')}
                            >
                              H
                            </button>
                            <button
                              style={{
                                backgroundColor: 'white',
                                border: '0px',
                                color: '#007bff',
                                fontWeight: 'bold',
                             marginRight:4 }}
                              onClick={() => setSearch('I')}
                            >
                              I
                            </button>
                            <button
                              style={{
                                backgroundColor: 'white',
                                border: '0px',
                                color: '#007bff',
                                fontWeight: 'bold',
                             marginRight:4 }}
                              onClick={() => setSearch('J')}
                            >
                              J
                            </button>
                            <button
                              style={{
                                backgroundColor: 'white',
                                border: '0px',
                                color: '#007bff',
                                fontWeight: 'bold',
                             marginRight:4 }}
                              onClick={() => setSearch('K')}
                            >
                              K
                            </button>
                            <button
                              style={{
                                backgroundColor: 'white',
                                border: '0px',
                                color: '#007bff',
                                fontWeight: 'bold',
                             marginRight:4 }}
                              onClick={() => setSearch('L')}
                            >
                              L
                            </button>
                            <button
                              style={{
                                backgroundColor: 'white',
                                border: '0px',
                                color: '#007bff',
                                fontWeight: 'bold',
                             marginRight:4 }}
                              onClick={() => setSearch('M')}
                            >
                              M
                            </button>
                            <button
                              style={{
                                backgroundColor: 'white',
                                border: '0px',
                                color: '#007bff',
                                fontWeight: 'bold',
                             marginRight:4 }}
                              onClick={() => setSearch('N')}
                            >
                              N
                            </button>
                            <button
                              style={{
                                backgroundColor: 'white',
                                border: '0px',
                                color: '#007bff',
                                fontWeight: 'bold',
                             marginRight:4 }}
                              onClick={() => setSearch('O')}
                            >
                              O
                            </button>
                            <button
                              style={{
                                backgroundColor: 'white',
                                border: '0px',
                                color: '#007bff',
                                fontWeight: 'bold',
                             marginRight:4 }}
                              onClick={() => setSearch('P')}
                            >
                              P
                            </button>
                            <button
                              style={{
                                backgroundColor: 'white',
                                border: '0px',
                                color: '#007bff',
                                fontWeight: 'bold',
                             marginRight:4 }}
                              onClick={() => setSearch('Q')}
                            >
                              Q
                            </button>
                            <button
                              style={{
                                backgroundColor: 'white',
                                border: '0px',
                                color: '#007bff',
                                fontWeight: 'bold',
                             marginRight:4 }}
                              onClick={() => setSearch('R')}
                            >
                              R
                            </button>
                            <button
                              style={{
                                backgroundColor: 'white',
                                border: '0px',
                                color: '#007bff',
                                fontWeight: 'bold',
                             marginRight:4 }}
                              onClick={() => setSearch('S')}
                            >
                              S
                            </button>
                            <button
                              style={{
                                backgroundColor: 'white',
                                border: '0px',
                                color: '#007bff',
                                fontWeight: 'bold',
                             marginRight:4 }}
                              onClick={() => setSearch('T')}
                            >
                              T
                            </button>
                            <button
                              style={{
                                backgroundColor: 'white',
                                border: '0px',
                                color: '#007bff',
                                fontWeight: 'bold',
                             marginRight:4 }}
                              onClick={() => setSearch('U')}
                            >
                              U
                            </button>
                            <button
                              style={{
                                backgroundColor: 'white',
                                border: '0px',
                                color: '#007bff',
                                fontWeight: 'bold',
                             marginRight:4 }}
                              onClick={() => setSearch('V')}
                            >
                              V
                            </button>
                            <button
                              style={{
                                backgroundColor: 'white',
                                border: '0px',
                                color: '#007bff',
                                fontWeight: 'bold',
                             marginRight:4 }}
                              onClick={() => setSearch('W')}
                            >
                              W
                            </button>
                            <button
                              style={{
                                backgroundColor: 'white',
                                border: '0px',
                                color: '#007bff',
                                fontWeight: 'bold',
                             marginRight:4 }}
                              onClick={() => setSearch('X')}
                            >
                              X
                            </button>
                            <button
                              style={{
                                backgroundColor: 'white',
                                border: '0px',
                                color: '#007bff',
                                fontWeight: 'bold',
                             marginRight:4 }}
                              onClick={() => setSearch('Y')}
                            >
                              Y
                            </button>
                            <button
                              style={{
                                backgroundColor: 'white',
                                border: '0px',
                                color: '#007bff',
                                fontWeight: 'bold',
                             marginRight:4 }}
                              onClick={() => setSearch('Z')}
                            >
                              Z
                            </button>
                            - 
                            <button
                              style={{
                                backgroundColor: 'white',
                                border: '0px',
                                color: '#007bff',
                                fontWeight: 'bold',
                             marginRight:4 }}
                              onClick={() => setSearch('')}
                            >
                              Reset
                            </button>
                            
                            {/* <a href='#'>Z</a> - <a href='#'>Reset</a> */}
                          </div>
                        </th> </tr>
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
                  <th width="5%"><div class="td-fonts td-font-icon">{showRefFilter? 
                    <dev>
                    Ref:
                    </dev>
                    :
                    <input type='text' style={{width:30}} onChange={(e)=>setRefSearch(e.target.value)} />
                    
                    }
                    <div class='filter-icon'>
                    <button onClick={()=>setShowRefFilter(!showRefFilter)} style={{border:'none', backgroundColor:'transparent'}}>

                        <i class='fas fa-filter'></i>
                      </button>
                    </div></div></th>
                  <th bgcolor="#ffffff">&nbsp;</th>
                  <th width="20%"><div class="td-fonts td-font-icon text-center"> {showNameFilter ? 
                    <div>

                    COMPANY NAME
                    </div>
                  :  <input type='text' style={{width:200}} onChange={(e)=>setNameSearch(e.target.value)} />
                  }

                    <div class='filter-icon'>
                    <button onClick={()=>setShowNameFilter(!showNameFilter)} style={{border:'none', backgroundColor:'transparent'}}>

                        <i class='fas fa-filter'></i>
                      </button>
                    </div></div></th>
                  <th bgcolor="#ffffff" height="60">&nbsp;</th>
                  <th width="9%"><div class="td-fonts td-font-icon">   {showSolutionFilter? 
                    <div>
                    SOLUTION
                    </div>
                    :
                    <input type='text' style={{width:80}} onChange={(e)=>setSolutionSearch(e.target.value)} />
                  }
                    <div class='filter-icon'>
                      <button onClick={()=>setShowSolutionFilter(!showSolutionFilter)} style={{border:'none', backgroundColor:'transparent'}}>
                        <i class='fas fa-filter'></i>
                      </button>
                    </div></div></th>
                  <th bgcolor="#ffffff" height="60">&nbsp;</th>
                  <th width="9%"><div class="td-fonts blueborder td-fonts td-font-icon">{showDateFilter ? 
                    <div>

                   APPLICATION DATE
                    </div>
                  :  <input type='text' style={{width:80}} onChange={(e)=>setDateSearch(e.target.value)} />
                  }

                    <div class='filter-icon'>
                    <button onClick={()=>setShowDateFilter(!showDateFilter)} style={{border:'none', backgroundColor:'transparent'}}>

                        <i class='fas fa-filter'></i>
                      </button>
                      </div></div></th>
                  <th bgcolor="#ffffff" height="60">&nbsp;</th>
                  <th width="13%"><div class="td-fonts blueborder">TRADING WEBSITE ADDRESS</div></th>
                  <th bgcolor="#ffffff" height="60">&nbsp;</th>
                  <th width="4%"><div class="td-fonts blueborder text-center">Buy Rate</div></th>
                  <th bgcolor="#ffffff" height="60">&nbsp;</th>
                  <th width="4%"><div class="td-fonts blueborder text-center">Sell Rate</div></th>
                  <th bgcolor="#ffffff" height="60">&nbsp;</th>
                  <th width="4%"><div class="td-fonts blueborder text-center">GP %</div></th>
                  <th bgcolor="#ffffff" height="60">&nbsp;</th>
                  <th width="5%"><div class="td-fonts td-font-icon redborder"> {showDaysFilter ? 
                    <div>

                    DAYS
                    </div>
                  :  <input type='text' style={{width:30}} onChange={(e)=>setDaysSearch(e.target.value)} />
                  }

                    <div class='filter-icon'>
                    <button onClick={()=>setShowDaysFilter(!showDaysFilter)} style={{border:'none', backgroundColor:'transparent'}}>

                        <i class='fas fa-filter'></i>
                      </button>
                    </div></div></th>
                  <th bgcolor="#ffffff" height="60">&nbsp;</th>
                  <th width="9%"><div class="td-fonts text-center">Business / Referral Partner</div></th>
                  <th bgcolor="#ffffff" height="60">&nbsp;</th>
                  <th width="9%"><div class="td-fonts text-center">Assigned BDM / Owner </div></th>
                  <th bgcolor="#ffffff" height="60">&nbsp;</th>
                  <th width="9%"><div class="td-fonts blueborder text-center">WON / LOST / ARCHICE</div></th>
                </tr>
              </thead>
              <tbody>
                {extractedData6 &&
                  extractedData6.map((res, index) => {
                     
                        return (
                          <tr>
                            <td><div class="small-fonts">{res.App.ref}</div></td>
                            <td bgcolor="#ffffff" width="1">&nbsp;</td>
                            <td><div class="small-fonts">{  <Link to={"/preappw/" + res._id}>
                        {res.App.af_rcn ? res.App.af_rcn : "Default Name"}
                      </Link>}</div></td>
                            {/* <td><div class="small-fonts">{  <Link to={"/app/" + res._id}>
                        {res.App.af_rcn ? res.App.af_rcn : "Default Name"}
                      </Link>}</div></td> */}
                            <td bgcolor="#ffffff" width="1">&nbsp;</td>
                            <td><div class="small-fonts">{res.App.af_sol}</div></td>
                            <td bgcolor="#ffffff" width="1">&nbsp;</td>
                            <td><div class="small-fonts">{res.App.af_ad}</div></td>
                            <td bgcolor="#ffffff" width="1">&nbsp;</td>
                            <td ><div    onClick={() => {
                        window.open(`https://${res.App.af_twa}`, "_blank")}} class="small-fonts"> {res.App.af_twa?res.App.af_twa:"Default"}</div></td>
                            <td bgcolor="#ffffff" width="1">&nbsp;</td>
                            <td><div class="small-fonts">{res.App.af_appB}</div></td>
                            <td bgcolor="#ffffff" width="1">&nbsp;</td>
                            <td><div class="small-fonts">{res.App.af_appS}</div></td>
                            <td bgcolor="#ffffff" width="1">&nbsp;</td>
                            <td><div class="small-fonts blueborder">2.0%</div></td>
                            <td bgcolor="#ffffff" width="1">&nbsp;</td>
                            <td><div class={res.App.days < 90 ? "small-fonts redborder":"small-fonts greenborder"}>{res.App.days ? res.App.days : ""}</div></td>
                            <td bgcolor="#ffffff" width="1">&nbsp;</td>
                            <td><div class="small-fonts">{res.App.af_brp}</div></td>
                            <td bgcolor="#ffffff" width="1">&nbsp;</td>
                            <td><div class="small-fonts">{res.App.af_abo} </div></td>
                            <td bgcolor="#ffffff" width="1">&nbsp;</td>
                            <td>
                        
                         
            <select class="compliance-select compliance-small-fonts">
              <option value="0">Won</option>
              <option value="1">Lost</option>
              <option value="2">Archive</option>
    
            </select>
         
                      </td>
                          </tr>
                        );
                     
                  })}
              </tbody>
            </table>
          </div>
          {/* <div class="tab-pane fade" id="pills-complience-dash" role="tabpanel" aria-labelledby="pills-complience-dash-tab">COMPLIANCE DASHBOARD</div>
          <div class="tab-pane fade" id="pills-bording-dash" role="tabpanel" aria-labelledby="pills-bording-dash-tab">BOARDING DASHBOARD</div>
          <div class="tab-pane fade" id="pills-inte-dash" role="tabpanel" aria-labelledby="pills-inte-dash-tab">INTEGRATION DASHBOARD</div>
          <div class="tab-pane fade" id="pills-iban-bank" role="tabpanel" aria-labelledby="pills-iban-bank-tab">BOARDING DASHBOARD</div>
          <div class="tab-pane fade" id="pills-trading-dash" role="tabpanel" aria-labelledby="pills-trading-dash-tab">TRADING DASHBOARD</div>
          <div class="tab-pane fade" id="pills-arch-dash" role="tabpanel" aria-labelledby="pills-arch-dash-tab">ARCHIVE DASHBOARD</div>
        </div> */}

      </div>
    </div>
  </div>
    </div>

 );
}
