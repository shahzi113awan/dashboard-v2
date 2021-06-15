import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Form, FormGroup, Label, Button, Input } from "reactstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import {
  CreateApp,
  Update,
  GetOneApp,
  UpdateOne,

} from "../../actions/appActions";
import { Get } from '../../actions/appActions'
export default function ApprovalForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { urlid } = useParams();
  console.log(urlid);
  useEffect(() => {
    urlid ? dispatch(GetOneApp(urlid)) : console.log("creating");
  }, [urlid]);
  const data1 = useSelector((state) => state.appReducer.state);
  console.log(data1);

  const [App, setApp] = useState(
    {
      status: " ",
      af_rcn: "",
      af_ad: "",
      af_sol: "",
      af_brp: "",
      af_abo: "",
      af_iP: "",
      af_appB: "",
      af_appS: "",
      af_ntc: "",
      af_vts: "",
      af_twa: "",
      af_wbaN: "",
      af_wbaP: "",
      af_ccl: "",
      af_eea: "",
      af_tla: "",
    },

  );

  useEffect(() => {
    setApp(data1);
  }, [data1]);

  function handleInput(evt) {
    setApp({
      ...App,
      [evt.target.name]: evt.target.value,
    });
  }
  useEffect(() => {
    setApp(App);
  }, App);
  const onUpdateSubmit = async (e) => {
    e.preventDefault();
    await dispatch(UpdateOne(App, urlid));
    dispatch(Get());
    history.push("/appdb");

    // history.push("/sdkyb/" + urlid);
  };
  const onSubmit = async (e) => {
    console.log(App);
    e.preventDefault();
    console.log(App);
    await dispatch(CreateApp(App));
    dispatch(Get());
    history.push("/appdb");
  };
  return (
    <div className="container">
      <div>
        <h2>
          <span class="badge badge-success colspan">Application Information</span>
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
                value={App.af_rcn}
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
                value={App.af_ad}
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
                name="af_sol"
                value={App.af_sol}
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
          <Col md={12}>
            <div>
              <h2>
                <span class="badge badge-success colspan">
                  EMS / PayWyz Information:
                </span>
              </h2>
            </div>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="CCR">Business / Referral Partner:</Label>
              <Input
                className="cusrom"
                onChange={handleInput}
                required={false}
                type="text"
                value={App.af_brp}
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
                value={App.af_abo}
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
                value={App.af_iP}
                name="af_iP"
                id="Name"
                placeholder="Introductory Person"
              ></Input>
            </FormGroup>
          </Col>{" "}
          <Col md={12}>
            <div>
              <h2>
                <span class="badge badge-success colspan">
                  Expected / Offered Commercials:
                </span>
              </h2>
            </div>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="CCR">Approval EMS / PayWyz - Buy Rate:</Label>
              <Input
                className="cusrom"
                onChange={handleInput}
                required={false}
                type="text"
                value={App.af_appB}
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
                value={App.af_appS}
                name="af_appS"
                id="Name"
                placeholder="Approval EMS sell rate"
              ></Input>
            </FormGroup>
          </Col>{" "}
          <Col md={12}>
            <div>
              <h2>
                <span class="badge badge-success colspan">
                  Company Trading Information:
                </span>
              </h2>
            </div>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="CCR">Trading / New To Cards (NTC)*:</Label>
              <select
                className="custom-select"
                value={App.af_ntc}
                id="1"
                name="af_ntc"
                onChange={handleInput}
              >
                <option> NTC </option>
                <option>New to Cards</option>
              </select>
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
                value={App.af_vts}
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
                value={App.af_twa}
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
                value={App.af_wbaN}
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
                value={App.af_wbaP}
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
                value={App.af_ccl}
                name="af_ccl"
                id="Name"
                placeholder="Country Location"
              ></Input>
            </FormGroup>
          </Col>{" "}
          <Col md={6}>
            <FormGroup>
              <Label for="CCR"> Documents*:</Label>
              <select
                className="custom-select"
                value={App.af_eea}
                id="1"
                name="af_eea"
                onChange={handleInput}
              >
                <option> EEA </option>
                <option>USA</option>
                <option>International</option>
              </select>
            </FormGroup>
          </Col>{" "}
          <Col md={6}>
            <FormGroup>
              <Label for="CCR">Trading License or Agreements Required*:</Label>
              <select
                className="custom-select"
                value={App.af_tla}
                id="1"
                name="af_tla"
                onChange={handleInput}
              >
                <option>Licenced </option>
                <option>Gambling</option>
                <option>Forex</option>
                <option>Trade</option>
                <option>Fulfilment</option>
                <option>Other</option>
                <option>unlicenced</option>
              </select>
            </FormGroup>
          </Col>{" "}
          <Col md={12}>
            <FormGroup>
              <Label for="memo">Status</Label>
              <select
                className="custom-select"
                id="1"
                name="status"
                value={App.status}
                onChange={handleInput}
              >
                <option></option>
                <option>Approve</option>
                <option>Lost</option>
              </select>
            </FormGroup>
          </Col>
        </Row>
        {/* <Button tag={Link} to={"/appdb"} type="submit" onClick={onSubmit}>
          Submit
        </Button> */}
        {/* <Button tag={Link} to={link}>
          Previous
        </Button> */}
        <Link to="/appdb">
          {urlid ? (
            <Button onClick={onUpdateSubmit}>Update</Button>
          ) : (
            <Button onClick={onSubmit}>Save</Button>
          )}
        </Link>
      </Form>
    </div>
  );
}
