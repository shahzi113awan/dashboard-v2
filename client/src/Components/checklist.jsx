import React, { useState, useEffect } from 'react'

import { Row, Button, Form } from 'reactstrap'
import { Link, useHistory, useParams } from 'react-router-dom'
import ChecklistR from './CheckList/checklistR'
import { useDispatch, useSelector } from 'react-redux'
import { CreateCL, GetOneCL } from '../actions/clAction'
import { Get } from '../actions/ciAction'
import axios from 'axios'
import { firebase } from '../Config'
export const CheckList = () => {
  const dispatch = useDispatch()

  const history = useHistory()
  const data = useSelector((state) => state.clReducer.state)
  const id = useSelector((state) => state.ciReducer.id)
  console.log('tio update data')
  console.log(data)
  //States

  const [image, setImage] = useState('')
  const [countArr, setcountArr] = useState([])
  const [url, setURL] = useState('')

  const { urlid } = useParams()
  const link = `/sdkyb/${urlid}`

  useEffect(() => {
    urlid
      ? dispatch(GetOneCL(urlid)) && setcountArr(data.pendingCount)
      : console.log('creating')
  }, [urlid])
  const [CL, setCL] = React.useState({
    // fcaf_status: "",
    // fcaf_fileName: "Pending",
    // cdf_status: "pending",
    // cdf_fileName: "fileName",
    // bi_status: "pending",
    // bi_fileName: "fileName",
    // ota_status: "pending",
    // ota_fileName: "fileName",
    // aps_status: "pending",
    // aps_fileName: "fileName",
    // hwua_status: "pending",
    // hwua_fileName: "fileName",
    // wc_status: "pending",
    // wc_fileName: "fileName",
    // wuod_status: "pending",
    // wuod_fileName: "fileName",
    // owsc_status: "pending",
    // owsc_fileName: "fileName",
    // bp_status: "pending",
    // bp_fileName: "fileName",
    // ldp_status: "pending",
    // ldp_fileName: "fileName",
    // ldpa_status: "pending",
    // ldpa_fileName: "fileName",
    // pad_status: "pending",
    // pad_fileName: "fileName",
    // sdp_tatus: "pending",
    // sdp_fileName: "fileName",
    // sdpa_status: "pending",
    // sdpa_fileName: "fileName",
    // tdp_status: "pending",
    // tdp_fileName: "fileName",
    // tdpa_status: "pending",
    // tdpa_fileName: "fileName",
    // fdp_status: "pending",
    // fdp_fileName: "fileName",
    // fdpa_status: "pending",
    // fdpa_fileName: "fileName",
    // coi_status: "pending",
    // coi_fileName: "fileName",
    // moa_status: "pending",
    // moa_fileName: "fileName",
    // aoa_status: "pending",
    // aoa_fileName: "fileName",
    // sr_status: "pending",
    // sr_fileName: "fileName",
    // scs_status: "pending",
    // scs_fileName: "fileName",
    // ccre_status: "pending",
    // ccre_fileName: "fileName",
    // cbs_status: "pending",
    // cbs_fileName: "fileName",
    // pbs_status: "pending",
    // pbs_fileName: "fileName",
    // pow_status: "pending",
    // pow_fileName: "fileName",
    // cap_status: "pending",
    // cap_fileName: "fileName",
    // gofl_status: "pending",
    // gofl_fileName: "fileName",
    // cora_status: "pending",
    // cora_fileName: "fileName",
    // fodsa_status: "pending",
    // fodsa_fileName: "fileName",
    // status: "pending",
    // fcr_fileName: "fileName",
    // shs_status: "pending",
    // shs_fileName: "fileName",
    // df_status: "pending",
    // df_fileName: "fileName",
  })

  useEffect(() => {
    setcountArr(data.pendingCount)
    setCL(data)
  }, [data])
  // console.log(CL);
  const handleChange = (e) => {
    console.log(e.target.value)
    console.log(countArr)
    if (e.target.value === 'Received') {
      countArr.push(e.target.value)
    } else {
      countArr.pop(e.target.value)
    }

    setCL({
      ...CL,
      [e.target.name]: e.target.value,
    })
  }

  // console.log(CL);
  //ImageHandler
  const ImageHandler = async (e) => {
    console.log(e)
    const file = e.target.files[0]
    const fileName = e.target.files[0].name
    // console.log(fileName);
    // console.log(e.target.name);
    const formData = new FormData()
    formData.append('', file)
    try {
      let fName = new Date().getTime() + '_' + fileName
      const uploadTask = firebase.storage().ref(`/files/${fName}`).put(file)
      uploadTask.on('state_changed', console.log, console.error, () => {
        firebase
          .storage()
          .ref('files')
          .child(fName)
          .getDownloadURL()
          .then((url) => {
            // file = null
            setURL(url)
            console.log(url)
            // const config = {
            //   headers: {
            //     "Content-Type": "multipart/form-data",
            //   },
            // };
            // const { data } = axios.post("api/upload", formData, config);
            setImage(url)
            setCL({
              ...CL,
              [e.target.name]: url,
            })
          })
      })
    } catch (error) {
      console.log(error)
    }
    console.log(url)
  }

  console.log(CL)
  const onSubmit = (e) => {
    e.preventDefault()
    urlid
      ? dispatch(CreateCL(CL, urlid)) && dispatch(Get())
      : dispatch(CreateCL(CL, id))
    history.push('/')
  }

  return (
    <div className='container'>
      <div>
        <h2>
          <span class='badge badge-success'>COMPANY INFORMATION </span>
        </h2>
      </div>

      <Form>
        <Row form>
          <ChecklistR
            text={'Fully Completed Application Form '}
            name={'fcaf_status'}
            value={CL.fcaf_status}
            fc='fcaf_fileName'
            path={CL.fcaf_fileName}
            Change={(e) => {
              handleChange(e)
            }}
            FileUpload={(e) => {
              ImageHandler(e)
            }}
          />
          <ChecklistR
            text={'Bank Information (Welcome Letter) '}
            name={'bi_status'}
            value={CL.bi_status}
            fc='bi_fileName'
            path={CL.bi_fileName}
            Change={(e) => {
              console.log('changing')
              handleChange(e)
            }}
            FileUpload={(e) => {
              ImageHandler(e)
            }}
          />
          <ChecklistR
            text={'Office Tenancy Agreement '}
            name={'ota_status'}
            value={CL.ota_status}
            fc='ota_fileName'
            Change={(e) => {
              handleChange(e)
            }}
            FileUpload={(e) => {
              ImageHandler(e)
            }}
          />
          <ChecklistR
            text={' Acquiring Processing Statements'}
            name={'aps_status'}
            value={CL.aps_status}
            fc='aps_fileName'
            Change={(e) => {
              handleChange(e)
            }}
            FileUpload={(e) => {
              ImageHandler(e)
            }}
          />
          <ChecklistR
            text={'Headline Website URL Address'}
            name={'hwua_status'}
            value={CL.hwua_status}
            fc='hwua_fileName'
            Change={(e) => {
              handleChange(e)
            }}
            FileUpload={(e) => {
              ImageHandler(e)
            }}
          />
          <ChecklistR
            text={'Website Compliance '}
            name={'wc_status'}
            value={CL.wc_status}
            fc='wc_fileName'
            Change={(e) => {
              handleChange(e)
            }}
            FileUpload={(e) => {
              ImageHandler(e)
            }}
          />
          <ChecklistR
            text={'Website URL-Proof of Domain'}
            name={'wuod_status'}
            value={CL.wuod_status}
            fc='CL.wuod_fileName'
            Change={(e) => {
              handleChange(e)
            }}
            FileUpload={(e) => {
              ImageHandler(e)
            }}
          />
          <ChecklistR
            text={'Ownership Structure Chart '}
            name={'owsc_status'}
            value={CL.owsc_status}
            fc='owsc_fileName'
            Change={(e) => {
              handleChange(e)
            }}
            FileUpload={(e) => {
              ImageHandler(e)
            }}
          />
          <ChecklistR
            text={'Business Plan'}
            name={'bp_status'}
            value={CL.bp_status}
            fc='bp_fileName'
            Change={(e) => {
              handleChange(e)
            }}
            FileUpload={(e) => {
              ImageHandler(e)
            }}
          />

          <ChecklistR
            text={'Lead Director-Passport '}
            name={'ldp_status'}
            value={CL.ldp_status}
            fc='ldp_fileName'
            Change={(e) => {
              handleChange(e)
            }}
            FileUpload={(e) => {
              ImageHandler(e)
            }}
          />
          <ChecklistR
            text={'Lead Director-Proof of Address'}
            name={'ldpa_status'}
            value={CL.ldpa_status}
            fc='ldpa_fileName'
            Change={(e) => {
              handleChange(e)
            }}
            FileUpload={(e) => {
              ImageHandler(e)
            }}
          />
          <ChecklistR
            text={'Power of Attorney Document: '}
            name={'pad_status'}
            value={CL.pad_status}
            fc='pad_fileName'
            Change={(e) => {
              handleChange(e)
            }}
            FileUpload={(e) => {
              ImageHandler(e)
            }}
          />
          <ChecklistR
            text={'Second Director-Passport'}
            name={'sdp_status'}
            value={CL.sdp_status}
            fc='sdp_fileName'
            Change={(e) => {
              handleChange(e)
            }}
            FileUpload={(e) => {
              ImageHandler(e)
            }}
          />
          <ChecklistR
            text={'Second Director-Proof of Address'}
            name={'sdpa_status'}
            value={CL.sdpa_status}
            fc='sdpa_fileName'
            Change={(e) => {
              handleChange(e)
            }}
            FileUpload={(e) => {
              ImageHandler(e)
            }}
          />
          <ChecklistR
            text={'Third Director-Passport'}
            name={'tdp_status'}
            value={CL.tdp_status}
            fc='tdp_fileName'
            Change={(e) => {
              handleChange(e)
            }}
            FileUpload={(e) => {
              ImageHandler(e)
            }}
          />
          <ChecklistR
            text={'Third Director-Proof of Address'}
            name={'tdpa_status'}
            value={CL.tdpa_status}
            fc='tdpa_fileName'
            Change={(e) => {
              handleChange(e)
            }}
            FileUpload={(e) => {
              ImageHandler(e)
            }}
          />
          <ChecklistR
            text={'Fourth Director-Passport'}
            name={'fdp_status'}
            value={CL.fdp_status}
            fc='fdp_fileName'
            Change={(e) => {
              handleChange(e)
            }}
            FileUpload={(e) => {
              ImageHandler(e)
            }}
          />
          <ChecklistR
            text={'Fourth Director-Proof of Address'}
            name={'fdpa_status'}
            value={CL.fdpa_status}
            fc='fdpa_fileName'
            Change={(e) => {
              handleChange(e)
            }}
            FileUpload={(e) => {
              ImageHandler(e)
            }}
          />
          <ChecklistR
            text={'Certificate of Incorporation '}
            name={'coi_status'}
            value={CL.coi_status}
            fc='coi_fileName'
            Change={(e) => {
              handleChange(e)
            }}
            FileUpload={(e) => {
              ImageHandler(e)
            }}
          />
          <ChecklistR
            text={'Memorandum of Association'}
            name={'moa_status'}
            value={CL.moa_status}
            fc='moa_fileName'
            Change={(e) => {
              handleChange(e)
            }}
            FileUpload={(e) => {
              ImageHandler(e)
            }}
          />
          <ChecklistR
            text={'Articles of Association'}
            name={'aoa_status'}
            value={CL.aoa_status}
            fc='aoa_fileName'
            Change={(e) => {
              handleChange(e)
            }}
            FileUpload={(e) => {
              ImageHandler(e)
            }}
          />
          <ChecklistR
            text={'Share Register'}
            name={'sr_status'}
            value={CL.sr_status}
            fc='sr_fileName'
            Change={(e) => {
              handleChange(e)
            }}
            FileUpload={(e) => {
              ImageHandler(e)
            }}
          />
          <ChecklistR
            text={'Share Certificate(s)-Signed'}
            name={'scs_status'}
            value={CL.scs_status}
            fc='scs_fileName'
            Change={(e) => {
              handleChange(e)
            }}
            FileUpload={(e) => {
              ImageHandler(e)
            }}
          />
          <ChecklistR
            text={'Current Commercial Register Extract'}
            name={'ccre_status'}
            value={CL.ccre_status}
            fc='ccre_fileName'
            Change={(e) => {
              handleChange(e)
            }}
            FileUpload={(e) => {
              ImageHandler(e)
            }}
          />
          <ChecklistR
            text={'Corporate Bank Statements'}
            name={'cbs_status'}
            value={CL.cbs_status}
            fc='cbs_fileName'
            Change={(e) => {
              handleChange(e)
            }}
            FileUpload={(e) => {
              ImageHandler(e)
            }}
          />
          <ChecklistR
            text={'Personal Bank Statements'}
            name={'pbs_status'}
            value={CL.pbs_status}
            fc='pbs_fileName'
            Change={(e) => {
              handleChange(e)
            }}
            FileUpload={(e) => {
              ImageHandler(e)
            }}
          />
          <ChecklistR
            text={'Proof of Wealth'}
            name={'pow_status'}
            value={CL.pow_status}
            fc='pow_fileName'
            Change={(e) => {
              handleChange(e)
            }}
            FileUpload={(e) => {
              ImageHandler(e)
            }}
          />
          <ChecklistR
            text={'Company AML Policy'}
            name={'cap_status'}
            value={CL.cap_status}
            fc='cap_fileName'
            Change={(e) => {
              handleChange(e)
            }}
            FileUpload={(e) => {
              ImageHandler(e)
            }}
          />
          <ChecklistR
            text={'Gambling or Forex License'}
            name={'gofl_status'}
            value={CL.gofl_status}
            fc='gofl_fileName'
            Change={(e) => {
              handleChange(e)
            }}
            FileUpload={(e) => {
              ImageHandler(e)
            }}
          />
          <ChecklistR
            text={'Copywrite or Re-seller Agreement'}
            name={'cora_status'}
            value={CL.cora_status}
            fc='cora_fileName'
            Change={(e) => {
              handleChange(e)
            }}
            FileUpload={(e) => {
              ImageHandler(e)
            }}
          />
          <ChecklistR
            text={'Fulfilment or Drop Shipping Agreement'}
            name={'fodsa_status'}
            value={CL.fodsa_status}
            fc='fodsa_fileName'
            Change={(e) => {
              handleChange(e)
            }}
            FileUpload={(e) => {
              ImageHandler(e)
            }}
          />
          <ChecklistR
            text={'FBO Company Registration'}
            name={'fcR_status'}
            value={CL.fcR_status}
            fc='fcR_fileName'
            Change={(e) => {
              handleChange(e)
            }}
            FileUpload={(e) => {
              ImageHandler(e)
            }}
          />
          <ChecklistR
            text={'Sales Handoff Sheet (CCBill Only)'}
            name={'shs_status'}
            value={CL.shs_status}
            fc='shs_fileName'
            Change={(e) => {
              handleChange(e)
            }}
            FileUpload={(e) => {
              ImageHandler(e)
            }}
          />
          <ChecklistR
            text={'Confirmation & Declaration Form (GGS Only)'}
            name={'cdf_status'}
            value={CL.cdf_status}
            fc='cdf_fileName'
            Change={(e) => {
              handleChange(e)
            }}
            FileUpload={(e) => {
              ImageHandler(e)
            }}
          />
        </Row>
        <Button tag={Link} to={link}>
          Previous
        </Button>
        <Link>
          <Button style={{ marginLeft: '10%' }} onClick={onSubmit}>
            Update Details
          </Button>
        </Link>
      </Form>
    </div>
  )
}
