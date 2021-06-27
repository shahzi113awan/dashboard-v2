import React, { useState, useEffect } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CreateSD, GetOneSD, INITIATESD } from "../actions/sdAction";
import { GetOneCL } from "../actions/clAction";
import { INITIATESpare } from '../actions/spareAction'
import SideNav from './Sidebar/Sidebar'

export default function CTI({ide}) {
  const dispatch = useDispatch();
  const history = useHistory();
  const id = useSelector((state) => state.ciReducer.id);
  // console.log(id);
  const data = useSelector((state) => state.sdReducer.state);
  const dataCL = useSelector((state) => state.clReducer.state);
  const [Spare, setSpare] = useState([{
    text: "",
    note: "",
    status: "",
    path: ""
  }])
  useEffect(() => {
    dispatch(INITIATESpare(Spare));
  }, [dispatch]);

  console.log(data);
  const { urlid } = useParams();
  const link = `/kyb/${urlid}`;

  useEffect(() => {
    urlid ? dispatch(GetOneSD(urlid)) : console.log("creating");
    urlid ? dispatch(GetOneCL(urlid)) : console.log("No Check List");
  }, [urlid]);
  const [CL, setCL] = useState({});

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
  function handleInput(evt) {
    console.log(KYB_SD);
    setKYB_SD({
      ...KYB_SD,
      [evt.target.name]: evt.target.value,
    });
  }
  useEffect(() => {
    setKYB_SD(data);
  }, [data]);
  useEffect(() => {
    setCL(dataCL);
  }, [dataCL]);
  const onSubmit = async (e) => {
    console.log(KYB_SD);
    await dispatch(CreateSD(KYB_SD, id));
    INITIATESD(KYB_SD);
    history.push("/check-list");
  };
  const onUpdateSubmit = (e) => {
    e.preventDefault();
    urlid && !ide
      ? dispatch(CreateSD(KYB_SD, urlid))
      : dispatch(CreateSD(KYB_SD, ide));
    urlid && !ide
      ? history.push("/check-list/" + urlid)
      : history.push("/complianceworkbook/" + ide);
  };
  return (
    <div>
      <div className={urlid ? "container-fluid" : "container"}>
        <div className="row">
          {urlid ? (<div className="col-md-2"><SideNav id={urlid}></SideNav></div>) : (<div></div>)}
          <div className={urlid ? "col-md-8" : "col-md-12"}>
            <div>
              <h2>
                <span class="badge badge-success colspan">Supporting Documents (KYB):</span>
              </h2>
            </div>
            <Form>
              <Row form>
                <Col md={10}>
                  <FormGroup>
                    <h4>
                      <span>Financial Support Documents:</span>
                    </h4>
                  </FormGroup>
                </Col>

                <Col md={6}>
                  <FormGroup>
                    <Label for="certificate">Corporate Bank Statements:</Label>
                    <Input
                      readOnly
                      value={"Not Required"}
                      name="kyb_aoa"
                      onLoad={handleInput}
                    ></Input>
                    {/* <select
                className={
                  KYB_SD.fsd_cbs === "Pending"
                    ? "border-red custom-select"
                    : "custom-select"
                }
                value={KYB_SD.fsd_cbs}
                id="1"
                name="fsd_cbs"
                onChange={handleInput}
              >
                <option value="Pending">Pending</option>
                <option value="Received">Received</option>
              </select> */}
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="memo">Personal Bank Statements:</Label>
                    <Input
                      readOnly
                      value={"Not Required"}
                      name="kyb_aoa"
                      onLoad={handleInput}
                    ></Input>
                    {/* <select
                className={
                  KYB_SD.fsd_pbs === "Pending"
                    ? "border-red custom-select"
                    : "custom-select"
                }
                value={KYB_SD.fsd_pbs}
                id="1"
                name="fsd_pbs"
                onChange={handleInput}
              >
                <option value="Pending">Pending</option>
                <option value="Received">Received</option>
              </select> */}
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="articles">Proof of Wealth:</Label>
                    <Input
                      readOnly
                      value={"Not Required"}
                      name="kyb_aoa"
                      onLoad={handleInput}
                    ></Input>
                    {/* <select
                className={
                  KYB_SD.fsd_pow === "Pending"
                    ? "border-red custom-select"
                    : "custom-select"
                }
                value={KYB_SD.fsd_pow}
                id="1"
                name="fsd_pow"
                onChange={handleInput}
              >
                <option value="Pending">Pending</option>
                <option value="Received">Received</option>
              </select> */}
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="shareRegister">Company AML Policy:</Label>
                    <Input
                      readOnly
                      value={"Not Required"}
                      name="kyb_aoa"
                      onLoad={handleInput}
                    ></Input>
                    {/* <select
                className={
                  KYB_SD.fsd_cap === "Pending"
                    ? "border-red custom-select"
                    : "custom-select"
                }
                value={KYB_SD.fsd_cap}
                id="1"
                name="fsd_cap"
                onChange={handleInput}
              >
                <option value="Pending">Pending</option>
                <option value="Received">Received</option>
              </select> */}
                  </FormGroup>
                </Col>
                <Col md={10}>
                  <FormGroup>
                    <h4>
                      <span>Licence & Trading Agreements</span>
                    </h4>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="shareCertificate">Gambling or Forex License:</Label>
                    <Input
                      readOnly
                      value={"Not Required"}
                      name="kyb_aoa"
                      onLoad={handleInput}
                    ></Input>
                    {/* <select
                className={
                  KYB_SD.lta_gfl === "Pending"
                    ? "border-red custom-select"
                    : "custom-select"
                }
                value={KYB_SD.lta_gfl}
                id="1"
                name="lta_gfl"
                onChange={handleInput}
              >
                <option value="Pending">Pending</option>
                <option value="Received">Received</option>
              </select> */}
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="CCR">Copywrite or Re-seller Agreement:</Label>
                    <select
                      className={"custom-select"}
                      value={KYB_SD.lta_cra}
                      id="1"
                      name="lta_cra"
                      onChange={handleInput}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Received">Received</option>
                    </select>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="CCR">Fulfilment or Drop Shipping Agreement:</Label>
                    <select
                      className={"custom-select"}
                      value={KYB_SD.lta_fdsa}
                      id="1"
                      name="lta_fdsa"
                      onChange={handleInput}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Received">Received</option>
                    </select>
                  </FormGroup>
                </Col>

                <Col md={6}>
                  <FormGroup>
                    <Label for="CCR">
                      FBO Company Registration (Nutra Merchants):
                    </Label>
                    <Input
                      readOnly
                      value={"Not Required"}
                      name="kyb_aoa"
                      onLoad={handleInput}
                    ></Input>
                    {/* <select
                className={
                  KYB_SD.lta_fbo_cr === "Pending"
                    ? "border-red custom-select"
                    : "custom-select"
                }
                value={KYB_SD.lta_fbo_cr}
                id="1"
                name="lta_fbo_cr"
                onChange={handleInput}
              >
                <option value="Pending">Pending</option>
                <option value="Received">Received</option>
              </select> */}
                  </FormGroup>
                </Col>
              </Row>

              {urlid ? (
                <div>
                  {/* <Button tag={Link} to={link}>
                    Previous
                  </Button> */}
                  <Button style={{ marginLeft: "10%" }} onClick={onUpdateSubmit}>
                    Update 
                  </Button>
                </div>
              ) : (
                <Button style={{ marginLeft: "10%" }} onClick={onSubmit}>
                  Save and Next
                </Button>
              )}
            </Form>
          </div>
        </div>
      </div></div>
  );
}
