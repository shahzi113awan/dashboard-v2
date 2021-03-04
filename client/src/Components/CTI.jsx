import React, { useState, useEffect } from "react";
import { Col, Row, Form, FormGroup, Label, Button, Input } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, useHistory, useParams } from "react-router-dom";

import { CreateCTI, GetOneCTI } from "../actions/ctiAction";

// import { completed, pending } from '../actions/completedAction'

const CTI = ({ Done, completed, pending }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  // const historyback = BrowserRouter();
  const { urlid } = useParams();
  // console.log(urlid);
  const data = useSelector((state) => state.ctiReducer.state);
  const dataKYc = useSelector((state) => state.kycReducer.state);
  console.log(data);
  const id = useSelector((state) => state.ciReducer.id);
  const link = `/ci/${urlid}`;

  // console.log(data);
  // console.log(id);
  useEffect(() => {
    urlid ? dispatch(GetOneCTI(urlid)) : console.log("creating");
  }, [urlid]);

  const [CTI, setCTI] = React.useState({
    // cti_fcaForm: 'Pending',
    // cti_bInformation: 'Pending',
    // cti_otAgreement: '',
    // cti_hwUrl: 'Pending',
    // cti_wCompliance: '',
    // cti_wUrl_proofDomain: 'Pending',
    // cti_osChart: 'Pending',
    // cti_bPlan: 'Pending',
  });
  // console.log(CTI)
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
  
  const onSubmit = (e) => {
    console.log(CTI);
    dispatch(CreateCTI(CTI, id));

    history.push("/KYC");
  };
  const onUpdateSubmit = (e) => {
    dispatch(CreateCTI(CTI, urlid));
    history.push("/KYC/" + urlid);
  };

  return (
    <div className="container">
      <div>
        <h2>
          <span class="badge badge-success">COMPANY TRADING INFORMATION</span>
        </h2>
      </div>
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="certificate">Fully Completed Application Form:</Label>
              <select
                className={"custom-select"}
                value={CTI.cti_fcaForm}
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
                value={CTI.cti_bInformation}
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
                onLoad={handleInput}
                required={false}
                type="text"
                id="Name"
                placeholder="OTA"
              ></Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="shareRegister">Headline Website URL Address:</Label>
              <select
                className={"custom-select"}
                value={CTI.cti_hwUrl}
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
                value={CTI.cti_wCompliance}
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
                value={CTI.cti_wUrl_proofDomain}
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
              <Input readOnly value={"Not Required"}></Input>
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
              <Input readOnly value={"Not Required"}></Input>
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
        <Button tag={Link} to={link}>
          Previous
        </Button>
        {urlid ? (
          <Button style={{ marginLeft: "10%" }} onClick={onUpdateSubmit}>
            Update and Next
          </Button>
        ) : (
          <Button style={{ marginLeft: "10%" }} onClick={onSubmit}>
            Save and Next{" "}
          </Button>
        )}
      </Form>
    </div>
  );
};

export default CTI;
