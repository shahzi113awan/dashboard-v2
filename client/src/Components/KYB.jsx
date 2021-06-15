import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Form, FormGroup, Label, Button, Input } from "reactstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import { CreateKYB, GetOneKYB, INITIATEKYB } from "../actions/kybAction";
import { GetOneCL } from "../actions/clAction";
import SideNav from './Sidebar/Sidebar'

import { INITIATESD } from "../actions/sdAction";


export default function KYB() {
  const dispatch = useDispatch();
  const { urlid } = useParams();
  const history = useHistory();
  const data = useSelector((state) => state.kybReducer.state);
  const dataCL = useSelector((state) => state.clReducer.state);

  const id = useSelector((state) => state.ciReducer.id);
  console.log(id);
  const link = `/kyc/${urlid}`;
  const [KYB, setKYB] = useState({
    kyb_coi: "Pending",
    kyb_moa: "Pending",
    kyb_aoa: "Pending",
    kyb_sRegister: "Pending",
    kyb_scs: "Pending",
    kyb_ccre: "Pending",
  });
  const [KYB_SD, setKYB_SD] = useState({
    fsd_cbs: "Pending",
    fsd_pbs: "Pending",
    fsd_pow: "Pending",
    fsd_cap: "Pending",
    lta_gfl: "Pending",
    lta_cra: "Pending",
    lta_fdsa: "Pending",
    lta_fbo_cr: "Pending",
  });
  useEffect(() => {
    dispatch(INITIATESD(KYB_SD));
  }, [dispatch]);
  useEffect(() => {
    urlid ? dispatch(GetOneKYB(urlid)) : console.log("creating");
    urlid ? dispatch(GetOneCL(urlid)) : console.log("No Check List");

  }, [urlid]);
  const [CL, setCL] = useState({});


  console.log(KYB);
  function handleInput(evt) {
    console.log(KYB);
    setKYB({
      ...KYB,
      [evt.target.name]: evt.target.value,
    });
  }

  useEffect(() => {
    setKYB(data);
  }, [data]);
  useEffect(() => {
    setCL(dataCL);
  }, [dataCL]);
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(KYB);
    await dispatch(CreateKYB(KYB, id));
    INITIATEKYB(KYB);

    history.push("/sdkyb");
  };
  const onUpdateSubmit = (e) => {
    e.preventDefault();
    dispatch(CreateKYB(KYB, urlid));
    history.push("/sdkyb/" + urlid);
  };

  return (
    <div className={urlid ? "container-fluid" : "container"}>
      <div className="row">
        {urlid ? (<div className="col-md-2"> <SideNav id={urlid} /></div>) : (<div></div>)}
        <div className={urlid ? "col-md-8" : "col-md-12"}>
          <div>
            <h2>
              <span class="badge badge-success colspan">Know Your Business (KYB):</span>
            </h2>
          </div>
          <Form>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="certificate">Certificate of Incorporation:</Label>
                  <select
                    className={"custom-select"}
                    value={CL.coi_status ? CL.coi_status : KYB.kyb_coi}
                    // value={"Not Required"}
                    id="1"
                    name="kyb_coi"
                    onChange={handleInput}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Received">Received</option>
                  </select>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="memo">Memorandum of Association:</Label>
                  <select
                    className={"custom-select"}
                    value={CL.moa_status ? CL.moa_status : KYB.kyb_moa}
                    // value={"Not Required"}
                    id="1"
                    name="kyb_moa"
                    onChange={handleInput}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Received">Received</option>
                  </select>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="articles">Articles of Association:</Label>
                  <Input
                    readOnly
                    value={"Not Required"}
                    name="kyb_aoa"
                    onLoad={handleInput}
                  ></Input>

                  {/* <select
              
                className={"custom-select"}
                // value={KYB.kyb_aoa}
                value={"Not Required"}
                id="1"
                name="kyb_aoa"
                onChange={handleInput}
              >
                <option value="Pending">Pending</option>
                <option value="Received">Received</option>
              </select> */}
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="shareRegister">Share Register:</Label>
                  <select
                    className={"custom-select"}
                    value={CL.sr_status ? CL.sr_status : KYB.kyb_sRegister}
                    // value={"Not Required"}
                    id="1"
                    name="kyb_sRegister"
                    onChange={handleInput}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Received">Received</option>
                  </select>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="shareCertificate">
                    Share Certificate(s) - Signed:
                  </Label>
                  <select
                    className={"custom-select"}
                    value={CL.scs_status ? CL.scs_status : KYB.kyb_scs}
                    // value={"Not Required"}
                    id="1"
                    name="kyb_scs"
                    onChange={handleInput}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Received">Received</option>
                  </select>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="CCR">Current Commercial Register Extract:</Label>
                  <Input readOnly value={"Not Required"}></Input>
                  {/* <select
                className={
                  KYB.kyb_ccre === "Pending"
                    ? "border-red custom-select"
                    : "custom-select"
                }
                value={KYB.kyb_ccre}
                // value={"Not Required"}
                id="1"
                name="kyb_ccre"
                onChange={handleInput}
              >
                <option value="Pending">Pending</option>
                <option value="Received">Received</option>
              </select> */}
                </FormGroup>
              </Col>
            </Row>
            {/* <Button tag={Link} to={link}>
          Previous
        </Button> */}
            {/* <Link to='/supporting-doc-kyb'> */}
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
                Save and Next
              </Button>
            )}
            {/* </Link> */}
          </Form>
        </div>
      </div>
    </div>
  );
}
