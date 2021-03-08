import React, { useState, useEffect, useMemo } from "react";
import { Col, Row, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import moment from "moment";
import countryList from "react-select-country-list";
import Select from "react-select";
import { useDispatch, useSelector, connect } from "react-redux";
import { Received, pending } from "../actions/completedAction";
import { CreateKYC, GetOneKYC } from "../actions/kycAction";
const KYC = ({ Done, Received, pending }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const data = useSelector((state) => state.kycReducer.state);
  const id = useSelector((state) => state.ciReducer.id);
  const { urlid } = useParams();
  const link = `/cti/${urlid}`;

  console.log(id);
  useEffect(() => {
    urlid ? dispatch(GetOneKYC(urlid)) : console.log("creating");
  }, [urlid]);

  // console.log(id);
  // console.log(data)
  const [KYC, setKYC] = useState({
    // kyc_name: '',
    // kyc_sHolds: '',
    // kyc_pID: '',
    // kyc_startDate: '',
    // kyc_ExpiryDate: '12',
    // kyc_nationality: '',
    // kyc_notarized: '',
    // kyc_Address: '',
    // kyc_toProof: '',
    // kyc_paDocument: '',
  });
  function handleInput(evt) {
    console.log(KYC);
    setKYC({
      ...KYC,
      [evt.target.name]: evt.target.value,
    });
  }
  useEffect(() => {
    setKYC(data);
  }, [data]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(KYC);
    dispatch(CreateKYC(KYC, id));

    history.push("/KYB");
  };
  const onUpdateSubmit = (e) => {
    e.preventDefault();
    dispatch(CreateKYC(KYC, urlid));
    history.push("/KYB/" + urlid);
  };

  const [remainig, setremainig] = useState(0);
  const [color, setColor] = useState("none");
  const [remainig1, setremainig1] = useState(0);
  const [color1, setColor1] = useState("none");

  // const [value, setValue] = useState("");
  // const options = useMemo(() => countryList().getData(), []);
  // const changeHandler = (value) => {
  //   console.log(value.label);
  //   setKYC({ kyc_nationality: value.label });
  // };

  //CalculateDays
  useEffect(() => {
    if (KYC.kyc_startDate && KYC.kyc_ExpiryDate) {
      const Start = moment(KYC.kyc_startDate);

      console.log(Start);
      const End = moment(KYC.kyc_ExpiryDate);
      console.log(End);
      console.log(KYC.kyc_ExpiryDate);
      const days = moment.duration(End.diff(Start)).asDays();

      setremainig(days);
      if (days < 180) setColor("#ADFF2F");
      // else if (days < 180 && days > 45) setColor("#FFBF00");
      else setColor("	#FA8072");
      return days;
    }
  }, [KYC.kyc_ExpiryDate, KYC.kyc_startDate]);
  useEffect(() => {
    if (KYC.kyc_adstartDate && KYC.kyc_adExpiryDate) {
      const Start = moment(KYC.kyc_adstartDate);

      console.log(Start);
      const End = moment(KYC.kyc_adExpiryDate);
      console.log(End);
      console.log(KYC.kyc_adExpiryDate);
      const days = moment.duration(End.diff(Start)).asDays();

      setremainig1(days);
      if (days < 45) setColor1("#ADFF2F");
      // else if (days < 90 && days > 45) setColor1("#FFBF00");
      else setColor1("	#FA8072");
      return days;
    }
  }, [KYC.kyc_adExpiryDate, KYC.kyc_adstartDate]);

  return (
    <div className="container">
      <div>
        <h2>
          <span class="badge badge-success">KNOW YOUR CUSTOMER (KYC)</span>
        </h2>
      </div>
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="Name">Name</Label>
              <Input
                className={"custom-select"}
                value={KYC.kyc_name}
                name="kyc_name"
                onChange={handleInput}
                type="text"
                id="Name"
                placeholder="Share Holder Name"
              ></Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="shareRegister">Holders</Label>
              <select
                className={"custom-select"}
                value={KYC.kyc_sholders}
                id="1"
                name="kyc_sholders"
                onChange={handleInput}
              >
                <option>Director</option>
                <option>Shareholder Director</option>
                <option>Shareholder</option>
              </select>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="shareHolds">Share Holds percentage</Label>
              <Input
                className={"custom-select"}
                value={KYC.kyc_sHolds}
                name="kyc_sHolds"
                onChange={handleInput}
                type="number"
                id="shareHolds"
                placeholder="Share Holds Percent"
              ></Input>
            </FormGroup>
          </Col>
          <Col md={12}>
            <FormGroup>
              <h4>
                <span>Passport / ID</span>
              </h4>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="passportID">Passport</Label>
              <Input
                className={"custom-select"}
                value={KYC.kyc_pID}
                name="kyc_pID"
                onChange={handleInput}
                type="text"
                id="passportID"
                placeholder=" Passport or ID"
              ></Input>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="ExpiryDate">Issue Date</Label>
              <Input
                className={"custom-select"}
                value={KYC.kyc_startDate}
                name="kyc_startDate"
                onChange={handleInput}
                type="date"
                id="startDate"
                placeholder=" Passport or ID"
              ></Input>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="ExpiryDate">Expiry Date</Label>
              <Input
                className={"custom-select"}
                value={KYC.kyc_ExpiryDate}
                name="kyc_ExpiryDate"
                onChange={handleInput}
                type="date"
                id="ExpiryDate"
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="remainingDays">Remaining Days</Label>
              <Input
                style={{ backgroundColor: color }}
                type="text"
                disabled={true}
                value={remainig}
              ></Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="Nationality">Country/Nationality</Label>
              <Input
                className="cusrom"
                onChange={handleInput}
                required={false}
                type="text"
                value={KYC.kyc_nationality}
                name="kyc_nationality"
                id="Name"
                placeholder="Company Name"
              ></Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="Notaized">Notarized</Label>
              <Input
                className={"custom-select"}
                value={KYC.kyc_notarized}
                name="kyc_notarized"
                onChange={handleInput}
                type="select"
                placeholder=" Nationality"
              >
                <option value="No">No</option>
                <option value="yes">yes</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={12}>
            <FormGroup>
              <h4>
                <span>Proof of Personal Address (POA)</span>
              </h4>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="Address">Proof of Address</Label>
              <Input
                className={"custom-select"}
                value={KYC.kyc_Address}
                name="kyc_Address"
                onChange={handleInput}
                type="text"
                id="Address"
                placeholder="Address"
              />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="ExpiryDate">Issue Date</Label>
              <Input
                className={"custom-select"}
                value={KYC.kyc_adstartDate}
                name="kyc_adstartDate"
                onChange={handleInput}
                type="date"
                id="adstartDate"
              ></Input>
            </FormGroup>
          </Col>

          <Col md={3}>
            <FormGroup>
              <Label for="ExpiryDate">Expiry Date</Label>
              <Input
                className={"custom-select"}
                value={KYC.kyc_adExpiryDate}
                name="kyc_adExpiryDate"
                onChange={handleInput}
                type="date"
                id="adExpiryDate"
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="remainingDays">Remaining Days</Label>
              <Input
                style={{ backgroundColor: color1 }}
                type="text"
                disabled={true}
                value={remainig1}
              ></Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="typeOfProof">Type of Proof</Label>
              <Input
                type="select"
                name="kyc_toProof"
                onChange={handleInput}
                className={"custom-select"}
                value={KYC.kyc_toProof}
              >
                <option value="Utility Bill">Utility Bill</option>
                <option value="Utility Bill">Bank</option>
                <option value="Utility Bill">Credit</option>
                <option value="Utility Bill">Council</option>
                <option value="Utility Bill">Tax</option>
                <option value="Utility Bill">Other</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md={12}>
            <FormGroup>
              <h4>
                <span>Power Of Attorney Document:</span>
              </h4>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="PAd">Power Of Attorney Document:</Label>
              <Input
                name="kyc_paDocument"
                onChange={handleInput}
                className={"custom-select"}
                // value={KYC.kyc_paDocument}
                value={"Not Required"}
                readOnly
              >
                <option value="Pending">Pending</option>
                <option value="Received">Received</option>
              </Input>
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
            Save and Next
          </Button>
        )}
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  Done: state.completedReducer.complete,
});
export default connect(mapStateToProps, {
  Received,
  pending,
})(KYC);
