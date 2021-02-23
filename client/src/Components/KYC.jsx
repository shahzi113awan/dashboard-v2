import React, { useState, useEffect, useMemo } from "react";
import { Col, Row, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import moment from "moment";
import countryList from "react-select-country-list";
import Select from "react-select";
import { useDispatch, useSelector, connect } from "react-redux";
import { Received, pending } from "../actions/completedAction";
import { Create, GetOne } from "../actions/kycAction";
const KYC = ({ Done, Received, pending }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const data = useSelector((state) => state.kycReducer.state);
  const id = useSelector((state) => state.ciReducer.id);
  const { urlid } = useParams();
  console.log(id);
  useEffect(() => {
    urlid ? dispatch(GetOne(urlid)) : console.log("creating");
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
    dispatch(Create(KYC, id));

    history.push("/KYB");
  };
  const onUpdateSubmit = (e) => {
    e.preventDefault();
    dispatch(Create(KYC, urlid));
    history.push("/KYB/" + urlid);
  };

  const [remainig, setremainig] = useState(0);
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const [color, setColor] = useState("none");

  // const changeHandler = (value) => {
  //   console.log(value.label);
  //   setKYC({ kyc_nationality: value.label });
  // };

  //CalculateDays
  useEffect(() => {
    if (KYC.kyc_startDate && KYC.kyc_ExpiryDate) {
      const Start = moment(new Date()).format("MM/DD/YYYY");

      console.log(Start);
      const End = moment(KYC.kyc_ExpiryDate);
      console.log(KYC.kyc_ExpiryDate);
      const days = moment.duration(End.diff(Start)).asDays();

      setremainig(days);
      if (days > 90) setColor("#ADFF2F");
      else if (days < 90 && days > 45) setColor("#FFBF00");
      else setColor("	#FA8072");
      return days;
    }
  }, [KYC.kyc_ExpiryDate, KYC.kyc_startDate]);

  console.log(KYC.kyc_nationality);

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
                className={
                  KYC.kyc_name === ""
                    ? "border-red custom-select"
                    : "custom-select"
                }
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
              <Label for="shareHolds">Share Holds</Label>
              <Input
                className={
                  KYC.kyc_sHolds === ""
                    ? "border-red custom-select"
                    : "custom-select"
                }
                value={KYC.kyc_sHolds}
                name="kyc_sHolds"
                onChange={handleInput}
                type="number"
                id="shareHolds"
                placeholder="Share Holds Percent"
              ></Input>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="passportID">Passport / ID</Label>
              <Input
                className={
                  KYC.kyc_pID === ""
                    ? "border-red custom-select"
                    : "custom-select"
                }
                value={KYC.kyc_pID}
                name="kyc_pID"
                onChange={handleInput}
                type="number"
                id="passportID"
                placeholder=" Passport or ID"
              ></Input>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="ExpiryDate">Start Date</Label>
              <Input
                className={
                  KYC.kyc_startDate === ""
                    ? "border-red custom-select"
                    : "custom-select"
                }
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
                className={
                  KYC.kyc_ExpiryDate === ""
                    ? "border-red custom-select"
                    : "custom-select"
                }
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
                className={
                  KYC.kyc_notarized === "" ? "border-red " : "custom-select"
                }
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
          <Col md={6}>
            <FormGroup>
              <Label for="Address">Address</Label>
              <Input
                className={
                  KYC.kyc_Address === ""
                    ? "border-red custom-select"
                    : "custom-select"
                }
                value={KYC.kyc_Address}
                name="kyc_Address"
                onChange={handleInput}
                type="text"
                id="Address"
                placeholder="Address"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="typeOfProof">Type of Proof</Label>
              <Input
                type="select"
                name="kyc_toProof"
                onChange={handleInput}
                className={
                  KYC.kyc_toProof === ""
                    ? "border-red custom-select"
                    : "custom-select"
                }
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
          <Col md={6}>
            <FormGroup>
              <Label for="PAd">Power Of Attorney Document:</Label>
              <Input
                name="kyc_paDocument"
                onChange={handleInput}
                className={
                  KYC.kyc_paDocument === ""
                    ? "border-red custom-select"
                    : "custom-select"
                }
                value={KYC.kyc_paDocument}
              >
                <option value="Pending">Pending</option>
                <option value="Received">Received</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>

        {urlid ? (
          <Button onClick={onUpdateSubmit}>Update and Next</Button>
        ) : (
          <Button onClick={onSubmit}>Save and Next</Button>
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
