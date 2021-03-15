import React, { useState, useEffect } from "react";

import { Row, Button, Form } from "reactstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import ChecklistR from "./CheckList/checklistR";
import SpChecklistR from "./CheckList/spchecklistR";
import { useDispatch, useSelector } from "react-redux";
import { CreateCL, GetOneCL } from "../actions/clAction";
import { Get, setLoading } from "../actions/ciAction";
import axios from "axios";
import Loader from "react-loader-spinner";
import { firebase } from "../Config";
export const CheckList = () => {
  const dispatch = useDispatch();

  const history = useHistory();
  const data = useSelector((state) => state.clReducer.state);
  const id = useSelector((state) => state.ciReducer.id);
  console.log(data);
  //States

  const [image, setImage] = useState("");
  const [countArr, setcountArr] = useState([]);
  const [url, setURL] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { urlid } = useParams();
  const link = `/sdkyb/${urlid}`;

  useEffect(() => {
    urlid
      ? dispatch(GetOneCL(urlid)) && setcountArr(data.pendingCount)
      : console.log("creating");
  }, [urlid]);
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
  });

  useEffect(() => {
    setcountArr(data.pendingCount);
    setCL(data);
  }, [data]);
  // console.log(CL);
  const handletext = (e) => {
    console.log(e.target.name);
    setCL({
      ...CL,
      [e.target.name]: e.target.value,
    });
  };

  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(countArr);
    if (e.target.value === "Received") {
      countArr.push(e.target.value);
    } else {
      countArr.pop(e.target.value);
    }

    setCL({
      ...CL,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeSpare = (e) => {
    setCL({
      ...CL,
      [e.target.name]: e.target.value,
    });
  };
  console.log(isLoading);
  // console.log(CL);
  //ImageHandler
  const ImageHandler = async (e) => {
    console.log(e.target.name);
    const file = e.target.files[0];
    const fileName = e.target.files[0].name;
    // console.log(fileName);
    // console.log(e.target.name);
    const formData = new FormData();
    formData.append("", file);
    setIsLoading(true);
    try {
      let fName = new Date().getTime() + "_" + fileName;
      const uploadTask = firebase.storage().ref(`/files/${fName}`).put(file);
      uploadTask.on("state_changed", console.log, console.error, () => {
        firebase
          .storage()
          .ref("files")
          .child(fName)
          .getDownloadURL()
          .then((url) => {
            // file = null
            setURL(url);
            console.log(url);
            // const config = {
            //   headers: {
            //     "Content-Type": "multipart/form-data",
            //   },
            // };
            // const { data } = axios.post("api/upload", formData, config);
            setImage(url);
            setCL({
              ...CL,
              [e.target.name]: url,
            });
            setIsLoading(false);
          });
      });
    } catch (error) {
      console.log(error);
    }
    console.log(url);
  };

  console.log(CL);
  const onSubmit = async (e) => {
    e.preventDefault();
    urlid
      ? (await dispatch(CreateCL(CL, urlid))) && dispatch(Get())
      : dispatch(CreateCL(CL, id)) && dispatch(Get());
    history.push("/");
  };
  console.log(isLoading);
  return (
    <div className="container">
      {isLoading == true ? (
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
        ""
      )}

      <div>
        <h2>
          <span class="badge badge-success">COMPANY INFORMATION </span>
        </h2>
      </div>

      <Form>
        <Row form>
          <ChecklistR
            text={"Fully Completed Application Form "}
            name={"fcaf_status"}
            value={CL.fcaf_status}
            fc="fcaf_fileName"
            path={CL.fcaf_fileName}
            Change={(e) => {
              handleChange(e);
            }}
            FileUpload={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Bank Information (Welcome Letter) "}
            name={"bi_status"}
            value={CL.bi_status}
            fc="bi_fileName"
            path={CL.bi_fileName}
            Change={(e) => {
              console.log("changing");
              handleChange(e);
            }}
            FileUpload={(e) => {
              ImageHandler(e);
            }}
          />
          {/* <ChecklistR
            text={"Office Tenancy Agreement "}
            name={"ota_status"}
            fc='ota_fileName'
            value={CL.ota_status}
            path={CL.ota_fileName}

            Change={(e) => {
              handleChange(e)
            }}
            FileUpload={(e) => {
              ImageHandler(e)
            }}
          /> */}
          <ChecklistR
            text={" Acquiring Processing Statements"}
            name={"aps_status"}
            fc="aps_fileName"
            value={CL.aps_status}
            path={CL.aps_fileName}
            Change={(e) => {
              handleChange(e);
            }}
            FileUpload={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Headline Website URL Address"}
            name={"hwua_status"}
            fc="hwua_fileName"
            value={CL.hwua_status}
            path={CL.hwua_fileName}
            Change={(e) => {
              handleChange(e);
            }}
            FileUpload={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Website Compliance "}
            name={"wc_status"}
            fc="wc_fileName"
            value={CL.wc_status}
            path={CL.wc_fileName}
            Change={(e) => {
              handleChange(e);
            }}
            FileUpload={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Website URL-Proof of Domain"}
            name={"wuod_status"}
            fc="CL.wuod_fileName"
            value={CL.wuod_status}
            path={CL.wuod_fileName}
            Change={(e) => {
              handleChange(e);
            }}
            FileUpload={(e) => {
              ImageHandler(e);
            }}
          />
          {/* <ChecklistR
            text={"Ownership Structure Chart "}
            name={"owsc_status"}
            fc='owsc_fileName'
            value={CL.owsc_status}
            path={CL.owsc_fileName}

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
            fc='bp_fileName'
            value={CL.bp_status}
            path={CL.bp_fileName}

            Change={(e) => {
              handleChange(e)
            }}
            FileUpload={(e) => {
              ImageHandler(e)
            }}
          /> */}

          <ChecklistR
            text={"Lead Director-Passport "}
            name={"ldp_status"}
            fc="ldp_fileName"
            value={CL.ldp_status}
            path={CL.ldp_fileName}
            Change={(e) => {
              handleChange(e);
            }}
            FileUpload={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Lead Director-Proof of Address"}
            name={"ldpa_status"}
            fc="ldpa_fileName"
            value={CL.ldpa_status}
            path={CL.ldpa_fileName}
            Change={(e) => {
              handleChange(e);
            }}
            FileUpload={(e) => {
              ImageHandler(e);
            }}
          />
          {/* <ChecklistR
            text={"Power of Attorney Document: "}
            name={"pad_status"}
            fc='pad_fileName'
            value={CL.pad_status}
            path={CL.pad_fileName}

            Change={(e) => {
              handleChange(e)
            }}
            FileUpload={(e) => {
              ImageHandler(e)
            }}
          /> */}
          <ChecklistR
            text={"Second Director-Passport"}
            name={"sdp_status"}
            fc="sdp_fileName"
            value={CL.sdp_status}
            path={CL.sdp_fileName}
            Change={(e) => {
              handleChange(e);
            }}
            FileUpload={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Second Director-Proof of Address"}
            name={"sdpa_status"}
            fc="sdpa_fileName"
            value={CL.sdpa_status}
            path={CL.sdpa_fileName}
            Change={(e) => {
              handleChange(e);
            }}
            FileUpload={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Third Director-Passport"}
            name={"tdp_status"}
            fc="tdp_fileName"
            value={CL.tdp_status}
            path={CL.tdp_fileName}
            Change={(e) => {
              handleChange(e);
            }}
            FileUpload={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Third Director-Proof of Address"}
            name={"tdpa_status"}
            fc="tdpa_fileName"
            value={CL.tdpa_status}
            path={CL.tdpa_fileName}
            Change={(e) => {
              handleChange(e);
            }}
            FileUpload={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Fourth Director-Passport"}
            name={"fdp_status"}
            fc="fdp_fileName"
            value={CL.fdp_status}
            path={CL.fdp_fileName}
            Change={(e) => {
              handleChange(e);
            }}
            FileUpload={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Fourth Director-Proof of Address"}
            name={"fdpa_status"}
            fc="fdpa_fileName"
            value={CL.fdpa_status}
            path={CL.fdpa_fileName}
            Change={(e) => {
              handleChange(e);
            }}
            FileUpload={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Certificate of Incorporation "}
            name={"coi_status"}
            fc="coi_fileName"
            value={CL.coi_status}
            path={CL.coi_fileName}
            Change={(e) => {
              handleChange(e);
            }}
            FileUpload={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Memorandum of Association"}
            name={"moa_status"}
            fc="moa_fileName"
            value={CL.moa_status}
            path={CL.moa_fileName}
            Change={(e) => {
              handleChange(e);
            }}
            FileUpload={(e) => {
              ImageHandler(e);
            }}
          />
          {/* <ChecklistR
            text={"Articles of Association"}
            name={"aoa_status"}
            fc="aoa_fileName"
            value={CL.aoa_status}
            path={CL.aoa_fileName}
            Change={(e) => {
              handleChange(e);
            }}
            FileUpload={(e) => {
              ImageHandler(e);
            }}
          /> */}
          <ChecklistR
            text={"Share Register"}
            name={"sr_status"}
            fc="sr_fileName"
            value={CL.sr_status}
            path={CL.sr_fileName}
            Change={(e) => {
              handleChange(e);
            }}
            FileUpload={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Share Certificate(s)-Signed"}
            name={"scs_status"}
            fc="scs_fileName"
            value={CL.scs_status}
            path={CL.scs_fileName}
            Change={(e) => {
              handleChange(e);
            }}
            FileUpload={(e) => {
              ImageHandler(e);
            }}
          />
          {/* <ChecklistR
            text={"Current Commercial Register Extract"}
            name={"ccre_status"}
            fc='ccre_fileName'
            value={CL.ccre_status}
            path={CL.ccre_fileName}

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
            fc='cbs_fileName'
            value={CL.cbs_status}
            path={CL.cbs_fileName}

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
            fc='pbs_fileName'
            value={CL.pbs_status}
            path={CL.pbs_fileName}

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
            fc='pow_fileName'
            value={CL.pow_status}
            path={CL.pow_fileName}

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
            fc='cap_fileName'
            value={CL.cap_status}
            path={CL.cap_fileName}

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
            fc='gofl_fileName'
            value={CL.gofl_status}
            path={CL.gofl_fileName}

            Change={(e) => {
              handleChange(e)
            }}
            FileUpload={(e) => {
              ImageHandler(e)
            }}
          /> */}
          <ChecklistR
            text={"Copywrite or Re-seller Agreement"}
            name={"cora_status"}
            fc="cora_fileName"
            value={CL.cora_status}
            path={CL.cora_fileName}
            Change={(e) => {
              handleChange(e);
            }}
            FileUpload={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Fulfilment or Drop Shipping Agreement"}
            name={"fodsa_status"}
            fc="fodsa_fileName"
            value={CL.fodsa_status}
            path={CL.fodsa_fileName}
            Change={(e) => {
              handleChange(e);
            }}
            FileUpload={(e) => {
              ImageHandler(e);
            }}
          />
          {/* <ChecklistR
            text={"FBO Company Registration"}
            name={"fcR_status"}
            fc='fcR_fileName'
            value={CL.fcR_status}
            path={CL.fcR_fileName}

            Change={(e) => {
              handleChange(e)
            }}
            FileUpload={(e) => {
              ImageHandler(e)
            }}
          /> */}
          <ChecklistR
            text={"Sales Handoff Sheet (CCBill Only)"}
            name={"shs_status"}
            fc="shs_fileName"
            value={CL.shs_status}
            path={CL.shs_fileName}
            Change={(e) => {
              handleChange(e);
            }}
            FileUpload={(e) => {
              ImageHandler(e);
            }}
          />

          {/* spare */}

          <SpChecklistR
            placeholder={"spare"}
            name={"spare"}
            nameT="spare_Text"
            fc="spare_fileName"
            value={CL.spare}
            valueT={CL.spare_Text}
            path={CL.spare_fileName}
            onChangetext={(e) => {
              handletext(e);
            }}
            Change={(e) => {
              handleChangeSpare(e);
            }}
            FileUpload={(e) => {
              ImageHandler(e);
            }}
          />
          <SpChecklistR
            placeholder={"spare"}
            name={"spare1"}
            nameT="spare1_Text"
            fc="spare1_fileName"
            value={CL.spare1}
            valueT={CL.spare1_Text}
            path={CL.spare1_fileName}
            onChangetext={(e) => {
              handletext(e);
            }}
            Change={(e) => {
              handleChangeSpare(e);
            }}
            FileUpload={(e) => {
              ImageHandler(e);
            }}
          />
          <SpChecklistR
            placeholder={"spare"}
            name={"spare2"}
            nameT="spare2_Text"
            fc="spare2_fileName"
            value={CL.spare2}
            valueT={CL.spare2_Text}
            path={CL.spare2_fileName}
            onChangetext={(e) => {
              handletext(e);
            }}
            Change={(e) => {
              handleChangeSpare(e);
            }}
            FileUpload={(e) => {
              ImageHandler(e);
            }}
          />
          <SpChecklistR
            placeholder={"spare"}
            name={"spare3"}
            nameT="spare3_Text"
            fc="spare3_fileName"
            value={CL.spare3}
            valueT={CL.spare3_Text}
            path={CL.spare3_fileName}
            onChangetext={(e) => {
              handletext(e);
            }}
            Change={(e) => {
              handleChangeSpare(e);
            }}
            FileUpload={(e) => {
              ImageHandler(e);
            }}
          />
          <SpChecklistR
            placeholder={"spare"}
            name={"spare4"}
            nameT="spare4_Text"
            fc="spare4_fileName"
            value={CL.spare4}
            valueT={CL.spare4_Text}
            path={CL.spare4_fileName}
            onChangetext={(e) => {
              handletext(e);
            }}
            Change={(e) => {
              handleChangeSpare(e);
            }}
            FileUpload={(e) => {
              ImageHandler(e);
            }}
          />
          <SpChecklistR
            placeholder={"spare"}
            name={"spare5"}
            nameT="spare5_Text"
            fc="spare5_fileName"
            value={CL.spare5}
            valueT={CL.spare5_Text}
            path={CL.spare5_fileName}
            onChangetext={(e) => {
              handletext(e);
            }}
            Change={(e) => {
              handleChangeSpare(e);
            }}
            FileUpload={(e) => {
              ImageHandler(e);
            }}
          />
          {/* <SpChecklistR
            text={"Confirmation & Declaration Form (GGS Only)"}
            name={"cdf_status"}
            fc='cdf_fileName'
            value={CL.cdf_status}
            path={CL.cdf_fileName}

            Change={(e) => {
              handleChange(e)
            }}
            FileUpload={(e) => {
              ImageHandler(e)
            }}
          /> */}
        </Row>
        <Button tag={Link} to={link}>
          Previous
        </Button>
        <Link>
          <Button style={{ marginLeft: "10%" }} onClick={onSubmit}>
            Update Details
          </Button>
        </Link>
      </Form>
    </div>
  );
};
