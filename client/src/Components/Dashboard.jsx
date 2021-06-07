import React, { useState, useEffect, useRef, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { Get, Delete, UpdateStatus} from '../actions/ciAction'
 
import Loader from 'react-loader-spinner'
import moment from 'moment'

import img1 from '../assets/images/card-img1.png'
import img2 from '../assets/images/card-img2.png'
import img3 from '../assets/images/card-img3.png'
import img4 from '../assets/images/card-img4.png'
import img5 from '../assets/images/card-img5.png'
import '../assets/css/db.css'
import '../assets/css/style.css'
import '../assets/css/all.css'
import '../assets/css/select2.min.css'
import { Button } from 'bootstrap'

function Dashboard({ data }) {
  const history = useHistory()
  const ref = useRef(null)

  const dispatch = useDispatch()
  const [db, setDb] = useState([])
  const [search, setSearch] = useState('')
  const [search2, setSearch2] = useState('')

  const [highlight, sethighlight] = useState(false)
  const [Index, setIndex] = useState()
  const onScrolling = (e) => {
    // console.log(e.target, 'window')
  }

  // const tableinstance = useTable({
  //   columns : COLUMNS,
  //   data: data
  // })
  // const { prepareRow, getTableProps, getTableBodyProps, headerGroups, rows } = tableinstance

  useEffect(() => {
    setDb(data)
  }, [data])

  // console.log(isLoading);
  const del = async (id) => {
    await dispatch(Delete(id))
    window.location.reload()
    // dispatch(Get());
  }
  const updateStatus = async (e, status, id) => {
    e.preventDefault()
    console.log(status)
    await dispatch(UpdateStatus(status, id))

    // dispatch(Get());
  }
  const cal = (val) => {
    // console.log(val);
    const Start = moment(new Date())
    // console.log(Start);
    const End = moment(val).add(90, 'd').format('YYYY-MM-DD')
    const Ending = moment(End)
    // console.log(Ending);
    const days = Math.ceil(moment.duration(Ending.diff(Start)).asDays())
    // console.log(days);
    return days
  }
  // console.log(isLoading);
  // const scroll = (scrollOffset) => {
  //   ref.current.scrollLeft += scrollOffset;
  // };
  const toggle = (e, index) => {
    console.log('JJJ')
    setIndex(index)
    console.log(Index)
    sethighlight(!highlight)
  }
  console.log(Index)
  console.log(db)

  
  let extractedData = []
  let extractedData2 = []

  const filterForEveryOne = (item) => {
    return item.filter((object) => {
      const checkField =
        typeof object.name === 'string' ? object.name.toLowerCase() : ''
      const filteredField = search.toLowerCase()

      return checkField.includes(filteredField)
    })
  }
  const filterForEveryOne2 = (item) => {
    return item.filter((object) => {
      const checkField =
        typeof object.ci.tpi_aaSolution === 'string' ? object.ci.tpi_aaSolution.toLowerCase() : ''
      const filteredField = search2.toLowerCase()

      return checkField.includes(filteredField)
    })
  }

  if (db && db.length > 0) {
    extractedData = filterForEveryOne(db)
  }
  if (db && db.length > 0) {
    extractedData2 = filterForEveryOne2(extractedData)
  }
  console.log(extractedData2)
  console.log(search2)
  return (

    <>
      <div class='compliance-dashboard-card'>
        <div class='container-fluid'>
          <table>
            <thead>
              <tr>
             
                <th width='33%' valign='top'>
                  <table width='100%'>
                    <thead>
                      <tr>
                        <th class='compliance-dashboard-title'>
                          CARD PROCESSING - PRE-APPROVAL APPLICATION
                        </th>
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
                        </th>
                      </tr>
                    </thead>
                  </table>
                </th>
                <th width='41%' valign='middle'>
                  {' '}
                  <table width='100%'>
                    <thead>
                      <tr>
                        <th width='10%'>
                          <div class='compliance-td-fonts text-center blueborder'>
                            <img src={img1} />
                          </div>
                        </th>
                        <th width='10%'>
                          <div class='compliance-td-fonts text-center blueborder'>
                            <img src={img2} />
                          </div>
                        </th>
                        <th width='37%'>
                          <div class='compliance-td-fonts text-center blueborder'>
                            PENDING DOCUMENTS
                          </div>
                        </th>
                        <th width='28%'>
                          <div class='compliance-td-fonts text-center blueborder'>
                            COMMERCIALS
                          </div>
                        </th>
                        <th width='11%'>
                          <div class='compliance-td-fonts text-center redborder'>
                            TOTAL AGED DAYS
                          </div>
                        </th>
                      </tr>
                    </thead>
                  </table>
                </th>
                <th width='26%'>&nbsp;</th>
              </tr>
            </thead>
          </table>

          <input type='text' onChange={(e)=> setSearch2(e.target.value)} placeholder='Search By Solution' style={{ borderRadius:0, padding:5, margin:10}} />

          <table>
            <thead>
              <tr>
                <td width='5%'>
                  <div class='compliance-td-fonts td-font-icon'>
                    Ref:
                    <div class='filter-icon'>
                      <a href='#'>
                        <i class='fas fa-filter'></i>
                      </a>
                    </div>
                  </div>
                </td>
                <td width='19%'>
                  <div class='compliance-td-fonts td-font-icon text-center'>
                    COMPANY NAME
                    <div class='filter-icon'>
                      <a href='#'>
                        <i class='fas fa-filter'></i>
                      </a>
                    </div>
                  </div>
                </td>
                <td width='10%'>
                  <div class='compliance-td-fonts td-font-icon'>
                    SOLUTION
                    <div class='filter-icon'>
                      <a href='#'>
                        <i class='fas fa-filter'></i>
                      </a>
                    </div>
                  </div>
                </td>
                <td width='10%'>
                  <div class='compliance-td-fonts blueborder compliance-td-fonts td-font-icon'>
                    APPLICATION DATE
                    <div class='filter-icon'>
                      <a href='#'>
                        <i class='fas fa-filter'></i>
                      </a>
                    </div>
                  </div>
                </td>
                <td width='5%'>
                  <a
                    class='compliance-td-fonts blueborder text-center'
                    type='button'
                    data-toggle='modal'
                    data-target='#exampleModal'
                  >
                    <img src={img3} />
                  </a>
                </td>
                <td width='5%'>
                  <a
                    class='compliance-td-fonts blueborder text-center'
                    type='button'
                    data-toggle='modal'
                    data-target='#exampleModal'
                  >
                    <img src={img4} />
                  </a>
                </td>
                <td width='5%'>
                  <a
                    class='compliance-td-fonts blueborder text-center'
                    type='button'
                    data-toggle='modal'
                    data-target='#exampleModal'
                  >
                    <img src={img5} />
                  </a>
                </td>
                <td width='4%'>
                  <div class='compliance-td-fonts blueborder text-center'>
                    Buy Rate
                  </div>
                </td>
                <td width='4%'>
                  <div class='compliance-td-fonts blueborder text-center'>
                    Sell Rate
                  </div>
                </td>
                <td width='4%'>
                  <div class='compliance-td-fonts blueborder text-center'>
                    GP %
                  </div>
                </td>
                <td width='5%'>
                  <div class='compliance-td-fonts td-font-icon redborder'>
                    DAYS
                    <div class='filter-icon'>
                      <a href='#'>
                        <i class='fas fa-filter'></i>
                      </a>
                    </div>
                  </div>
                </td>
                <td width='8%'>
                  <div class='compliance-td-fonts text-center'>
                    Business / Referral Partner
                  </div>
                </td>
                <td width='8%'>
                  <div class='compliance-td-fonts text-center'>
                    Assigned BDM / Owner{' '}
                  </div>
                </td>
                <td width='8%'>
                  <div class='compliance-td-fonts blueborder text-center'>
                    WON / LOST / ARCHICE
                  </div>
                </td>
              </tr>
            </thead>
            <tbody>
              {extractedData2 &&
                extractedData2.map((res, index) => {
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
                      <td>
                        <div class='compliance-small-fonts'>{index+1}</div>
                      </td>
                      <td>
                        <div class='compliance-small-fonts'>{res.name}</div>
                      </td>
                      <td>
                        <div class='compliance-small-fonts'>
                          {res.ci.tpi_aaSolution}
                        </div>
                      </td>
                      <td>
                        <div class='compliance-small-fonts text-center'>
                          {res.ci.tpi_date}
                          {/* 12 December 2020 */}
                        </div>
                      </td>
                      <td>
                        <div class='compliance-small-fonts text-center'>22</div>
                      </td>
                      <td>
                        <div class='compliance-small-fonts text-center'>
                        {res.cl.pendingCount.length}
                        </div>
                      </td>
                      <td>
                        <div class='compliance-small-fonts text-center redcolor blueborder'>
                        {22 - res.cl.pendingCount.length}
                        </div>
                      </td>
                      <td>
                        <div class='compliance-small-fonts text-center'>
                          3.5%
                        </div>
                      </td>
                      <td>
                        <div class='compliance-small-fonts text-center'>
                          5.5%
                        </div>
                      </td>
                      <td>
                        <div class='compliance-small-fonts blueborder text-center'>
                          2.0%
                        </div>
                      </td>
                      <td>
                        <div class='compliance-small-fonts redborder text-center'>
                       { cal(res.ci.tpi_date)}
                        </div>
                      </td>
                      <td>
                        <div class='compliance-small-fonts'>
                          {res.ci.tpi_brPartner}
                        </div>
                      </td>
                      <td>
                        <div class='compliance-small-fonts text-center'>
                          {res.ci.tpi_aBdmOwner}
                        </div>
                      </td>
                      <td>
                        
                         
            <select class="compliance-select compliance-small-fonts">
              <option value="0">Won</option>
              <option value="1">Lost</option>
              <option value="2">Archive</option>
    
            </select>
         
                      </td>
                    </tr>
                  )
                  }
                })}
            </tbody>
          </table>
        </div>
      </div>

      <div
        class='modal fade'
        id='exampleModal'
        tabindex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title' id='exampleModalLabel'>
                Modal title
              </h5>
              <button
                type='button'
                class='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div class='modal-body'>...</div>
            <div class='modal-footer'>
              <button
                type='button'
                class='btn btn-secondary'
                data-dismiss='modal'
              >
                Close
              </button>
              <button type='button' class='btn btn-primary'>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
 
 )
}

export default Dashboard
