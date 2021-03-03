import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Form, FormGroup, Label, Button, Input } from "reactstrap";
import { Link, useHistory, useParams } from "react-router-dom";

export default function ApprovalForm() {
  const [AF, setAF] = useState({
af_rcn:"",
af_ad:"",
af_sol:"",
af_brp:"",
af_abo:"",
af_iP:"",
af_appB:"",
af_appS:"",
af_ntc:"",
af_vts:"",
af_twa:"",
af_wbaN:"",
af_wbaP:"",
af_ccl:"",
af_eea:"",
af_tla:""
  });
  const onUpdateSubmit = (e) => {
    e.preventDefault();
    dispatch(CreateKYB(KYB, urlid));
    history.push("/sdkyb/" + urlid);
  };

  return (
    <div className="container">
      <div>
        <h2>
          <span class="badge badge-success">Application Information</span>
        </h2>
      </div>
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="certificate">Registered Company Name: </Label>
              <Input
                className="custom"
                onChange={handleInput}
                required={true}
                type="text"
                value={AF.af_rcn}
                name="af_rcn"
                id="Name"
                placeholder="Company Name"
              ></Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="certificate">Application Date </Label>
              <Input
                className="custom"
                onChange={handleInput}
                required={true}
                type="date"
                value={AF.af_ad}
                name="af_ad"
                id="Name"
              ></Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="memo">Allocated Acquirer / Solution:</Label>
              <select
                className="custom-select"
                id="1"
                name="af_solution"
                value={AF.af_sol}
                onChange={handleInput}
              >
                <option>CCBILL</option>
                <option>Global Gate Solution</option>
                <option>e-Shop Payment</option>
                <option>FIDO</option>
                <option>Netsix</option>
                <option>Octapay</option>
                <option>SafeCharge</option>
              </select>
            </FormGroup>
          </Col>
          <div>
            <h2>
              <span class="badge badge-success">EMS / PayWyz Information:</span>
            </h2>
          </div>
          <Col md={6}>
            <FormGroup>
              <Label for="CCR">Business / Referral Partner:</Label>
              <Input
                className="cusrom"
                onChange={handleInput}
                required={false}
                type="text"
                value={AF.af_brp}
                name="af_brp"
                id="Name"
                placeholder="Referral Partner"
              ></Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="CCR">Assigned - BDM / Owner:</Label>
              <Input
                className="cusrom"
                onChange={handleInput}
                required={false}
                type="text"
                value={AF.af_abo}
                name="af_abo"
                id="Name"
                placeholder="Assigned - BDM"
              ></Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="CCR">Introductory Person:</Label>
              <Input
                className="cusrom"
                onChange={handleInput}
                required={false}
                type="text"
                value={AF.af_iP}
                name="af_iP"
                id="Name"
                placeholder="Introductory Person"
              ></Input>
            </FormGroup>
          </Col>{" "}
          <div>
            <h2>
              <span class="badge badge-success">
                Expected / Offered Commercials:
              </span>
            </h2>
          </div>
          <Col md={6}>
            <FormGroup>
              <Label for="CCR">Approval EMS / PayWyz - Buy Rate:</Label>
              <Input
                className="cusrom"
                onChange={handleInput}
                required={false}
                type="text"
                value={AF.af_appB}
                name="af_appB"
                id="Name"
                placeholder="Approval EMS Buy rate"
              ></Input>
            </FormGroup>
          </Col>{" "}
          <Col md={6}>
            <FormGroup>
              <Label for="CCR">Approval EMS / PayWyz - Sell Rate:</Label>
              <Input
                className="cusrom"
                onChange={handleInput}
                required={false}
                type="text"
                value={Af.af_appS}
                name="af_appS"
                id="Name"
                placeholder="Approval EMS sell rate"
              ></Input>
            </FormGroup>
          </Col>{" "}
          <div>
            <h2>
              <span class="badge badge-success">
                Company Trading Information:
              </span>
            </h2>
          </div>
          <Col md={6}>
            <FormGroup>
              <Label for="CCR">Trading / New To Cards (NTC)*:</Label>
              <Input
                className="cusrom"
                onChange={handleInput}
                required={false}
                type="text"
                value={AF.af_ntc}
                name="af_ntc"
                id="Name"
                placeholder="NTC"
              ></Input>
            </FormGroup>
          </Col>{" "}
          <Col md={6}>
            <FormGroup>
              <Label for="CCR">Vertical / Trading Sector*:</Label>
              <Input
                className="cusrom"
                onChange={handleInput}
                required={false}
                type="text"
                value={AF.af_vts}
                name="af_vts"
                id="Name"
                placeholder="Trading Sector"
              ></Input>
            </FormGroup>
          </Col>{" "}
          <Col md={6}>
            <FormGroup>
              <Label for="CCR">Trading Website Address*:</Label>
              <Input
                className="cusrom"
                onChange={handleInput}
                required={false}
                type="text"
                value={AF.af_twa}
                name="af_twa"
                id="Name"
                placeholder="Trading Website Address"
              ></Input>
            </FormGroup>
          </Col>{" "}
          <Col md={6}>
            <FormGroup>
              <Label for="CCR">Website Backoffice/Access - User Name:</Label>
              <Input
                className="cusrom"
                onChange={handleInput}
                required={false}
                type="text"
                value={AF.af_wbaN}
                name="af_wbaN"
                id="Name"
                placeholder="Website Backoffice=user name"
              ></Input>
            </FormGroup>
          </Col>{" "}
          <Col md={6}>
            <FormGroup>
              <Label for="CCR">Website Backoffice/Access - Password:</Label>
              <Input
                className="cusrom"
                onChange={handleInput}
                required={false}
                type="text"
                value={AF.af_wbaP}
                name="af_wbaP"
                id="Name"
                placeholder="Website Backoffice-Password"
              ></Input>
            </FormGroup>
          </Col>{" "}
          <Col md={6}>
            <FormGroup>
              <Label for="CCR">Compliance Country Location*:</Label>
              <Input
                className="cusrom"
                onChange={handleInput}
                required={false}
                type="text"
                value={AF.af_ccl}
                name="af_ccl"
                id="Name"
                placeholder="Country Location"
              ></Input>
            </FormGroup>
          </Col>{" "}
          <Col md={6}>
            <FormGroup>
              <Label for="CCR">EEA Documents*:</Label>
              <Input
                className="cusrom"
                onChange={handleInput}
                required={false}
                type="text"
                value={AF.af_eea}
                name="af_eea"
                id="Name"
                placeholder="EEA Documents"
              ></Input>
            </FormGroup>
          </Col>{" "}
          <Col md={6}>
            <FormGroup>
              <Label for="CCR">Trading License or Agreements Required*:</Label>
              <Input
                className="cusrom"
                onChange={handleInput}
                required={false}
                type="text"
                value={AF.af_tla}
                name="af_tla"
                id="Name"
                placeholder="Trading License"
              ></Input>
            </FormGroup>
          </Col>{" "}
        </Row>
        <Button tag={Link} to={link}>
          Previous
        </Button>
        {/* <Link to='/supporting-doc-kyb'> */}
        {urlid ? (
          <Button style={{ marginLeft: "10%" }} onClick={onUpdateSubmit}>
            Update and Next
          </Button>
        ) : (
          <Button style={{ marginLeft: "10%" }} onClick={onSubmit}>
            Save and Next
          </Button>
        )}
        {/* </Link> */}
      </Form>
    </div>
  );
}
