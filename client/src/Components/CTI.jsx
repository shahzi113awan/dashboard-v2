import React, { useState, useEffect } from "react";
import { Col, Row, Form, FormGroup, Label, Button, Input } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { GetOneCL } from "../actions/clAction";
import SideNav from './Sidebar/Sidebar'

import { CreateCTI, GetOneCTI } from "../actions/ctiAction";
import { GetOneKYC, INITIATEKYC } from "../actions/kycAction";

const CTI = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { urlid } = useParams();
  const data = useSelector((state) => state.ctiReducer.state);
  const dataCL = useSelector((state) => state.clReducer.state);
  const dataKYc = useSelector((state) => state.kycReducer.state);
  console.log(dataKYc);
  const id = useSelector((state) => state.ciReducer.id);
  console.log(id);
  const link = `/ci/${urlid}`;

  useEffect(() => {
    urlid ? dispatch(GetOneCTI(urlid)) : console.log("creating");
    urlid ? dispatch(GetOneCL(urlid)) : console.log("No Check List");
  }, [urlid]);
  const [CL, setCL] = useState({});
  const [KYC, setKYC] = useState([
    {
      Rdays: "",
      kyc_name: "",
      kyc_sHolds: "",
      kyc_sholders: "",
      kyc_pID: "",
      kyc_startDate: "",
      kyc_ExpiryDate: "",
      kyc_nationality: "",
      kyc_notarized: "",
      kyc_Address: "",
      kyc_adstartDate: "",
      kyc_adExpiryDate: "",
      kyc_toProof: "",
      kyc_paDocument: "",
    },
  ]);
  useEffect(() => {
    dispatch(INITIATEKYC(KYC));
  }, [dispatch]);
  const [CTI, setCTI] = React.useState({
    cti_fcaForm: "Pending",
    cti_bInformation: "Pending",
    cti_otAgreement: "",
    cti_hwUrl: "Pending",
    cti_wCompliance: "",
    cti_wUrl_proofDomain: "Pending",
    cti_osChart: "Pending",
    cti_bPlan: "Pending",
  });
  // console.log(CTI)
  const [arr, setarr] = useState();
  function handleInput(evt) {
    setCTI({
      ...CTI,
      [evt.target.name]: evt.target.value,
    });
  }
  console.log(CTI);

  useEffect(() => {
    setCTI(data);
  }, [data]);
  
  const handler = async (name) => {
    console.log(name);

  }
  useEffect(() => {
    setCL(dataCL);
  }, [dataCL]);

  const onSubmit = async (e) => {
    console.log("now it is called");
    console.log(CTI);
    await dispatch(CreateCTI(CTI, id));

    history.push("/KYC");
  };
  const onUpdateSubmit = (e) => {
    dispatch(CreateCTI(CTI, urlid));
    history.push("/KYC/" + urlid);
  };

  return (
    <div className={urlid ? "container-fluid" : "container"}>
      <div className="row">
        {urlid ? (<div className="col-md-2"> <SideNav id={urlid}></SideNav> </div>) : (<div></div>)}
        <div className={urlid ? "col-md-8" : "col-md-12"}>
          <div>
            <h2>
              <span class="badge badge-success colspan">COMPANY TRADING INFORMATION</span>
            </h2>
          </div>
          <Form>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="certificate">Fully Completed Application Form:</Label>
                  <select
                    className={"custom-select"}
                    value={CL.fcaf_status ? CL.fcaf_status : CTI.cti_fcaForm}
                    // value={'Not Required'}
                    id="1"
                    name="cti_fcaForm"
                    onChange={handleInput}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Received">Received</option>
                  </select>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="memo">Bank Information (Welcome Letter):</Label>
                  <select
                    className={"custom-select"}
                    value={CL.bi_status ? CL.bi_status : CTI.cti_bInformation}
                    // value={"Not Required"}
                    id="1"
                    name="cti_bInformation"
                    onChange={handleInput}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Received">Received</option>
                  </select>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="OTA">Office Tenancy Agreement:</Label>

                  <Input
                    readOnly
                    // className={
                    //   CTI.cti_otAgreement === ""
                    //     ? "border-red custom-select"
                    //     : "custom-select"
                    // }
                    // value={CTI.cti_otAgreement}
                    value={"Not Required"}
                    name="cti_otAgreement"
                    onChange={handleInput}
                    required={false}
                    type="text"
                    className="NotR"
                    placeholder="OTA"
                  ></Input>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="shareRegister">Headline Website URL Address:</Label>
                  <select
                    className={"custom-select"}
                    value={CL.hwua_status ? CL.hwua_status : CTI.cti_hwUrl}
                    id="1"
                    name="cti_hwUrl"
                    onChange={handleInput}
                  >
                    <option selected value="Pending">
                      Pending
                    </option>
                    <option value="Received">Received</option>
                  </select>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="shareCertificate">Website Compliance:</Label>
                  <Input
                    className={"custom-select"}
                    value={CL.wc_status ? CL.wc_status : CTI.cti_wCompliance}
                    name="cti_wCompliance"
                    onChange={handleInput}
                    type="url"
                    id="Url"
                    placeholder="Company URL"
                  ></Input>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="CCR">Website URL - Proof of Domain:</Label>
                  <select
                    className={"custom-select"}
                    value={
                      CL.wuod_status ? CL.wuod_status : CTI.cti_wUrl_proofDomain
                    }
                    value={"Not Required"}
                    id="1"
                    name="cti_wUrl_proofDomain"
                    onChange={handleInput}
                  >
                    <option selected value="Pending">
                      Pending
                    </option>
                    <option value="Received">Received</option>
                  </select>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="CCR">Ownership Structure Chart:</Label>
                  <Input readOnly name="cti_osChart" className="NotR" value={"Not Required"}></Input>
                  {/* <select
                className={"custom-select"}
                // value={CTI.cti_osChart}
                value={"Not Required"}
                id="1"
                name="cti_osChart"
                onChange={handleInput}
              >
                <option selected value="Pending">
                  Pending
                </option>
                <option value="Received">Received</option>
              </select> */}
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="CCR">Business Plan:</Label>
                  <Input readOnly name="cti_bPlan" className="NotR" value={"Not Required"}></Input>
                  {/* <select
                className={"custom-select"}
                // value={CTI.cti_bPlan}
                value={"Not Required"}
                id="1"
                name="cti_bPlan"
                onChange={handleInput}
              >
                <option value="Pending"> Pending </option>
                <option value="Received">Received</option>
              </select> */}
                </FormGroup>
              </Col>
            </Row>
            {/* <Button tag={Link} to={link}>
          Previous
        </Button> */}
            {urlid ? (
              <div>
                <Button tag={Link} to={link}>
                  Previous
                </Button>
                <Button style={{ marginLeft: "10%" }} onClick={onUpdateSubmit}>
                  Update and Next
                </Button>
              </div>
            ) : (
              <Button style={{ marginLeft: "10%" }} onClick={onSubmit}>
                Save and Next{" "}
              </Button>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CTI;
