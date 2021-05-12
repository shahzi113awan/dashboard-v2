import React, { useEffect, useState } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CreateCI, Update, GetOneCI, UpdateOne } from "../actions/ciAction";
import { INITIATECTI } from "../actions/ctiAction";
import SideNav from './Sidebar/Sidebar'

export default function CI(props) {
  const [copy, setCopy] = useState(false)
  const dispatch = useDispatch();
  const { urlid } = useParams();

  useEffect(() => {
    urlid ? dispatch(GetOneCI(urlid)) : console.log("creating");
  }, [urlid]);
  const data1 = useSelector((state) => state.ciReducer.state);
  const isLoading = useSelector((state) => state.ciReducer.isLoading);
  const id = useSelector((state) => state.ciReducer._id);
  console.log(id);
  console.log(data1.ci);
  console.log(urlid);
  console.log(isLoading);
  const history = useHistory();

  // console.log('**********')
  // console.log(isLoading)

  const [CI, setCI] = React.useState({
    tpi_rcName: " ",
    tpi_aaSolution: "CCBILL",
    tpi_ntc: "",
    tpi_vtSector: "",
    tpi_date: "",
    tpi_brPartner: "",
    tpi_aBdmOwner: "",
    tpi_ccLocation: "",
    tpi_EEADocuments: "",
    tpi_TLoAR: "",
    mci_crAddress: "",
    mci_crNumber: "",
    mci_ctAddress: "",
    mci_vtSector: "",
    cci_cName: "",
    cci_skypeAddress: "",
    cci_mNumber: "",
    cci_lNumber: "",
    cci_otpMNumber: "",
    cci_otpMNumber1: "",
    tci_crAddress: "",
    tci_crNumber: "",
    tci_ctAddress: "",
    tci_wUrl: "",
    cci_2_cName: "",
    cci_2_Position: "",
    cci_2_mNumber: "",
    cci_2_lNumber: "",
    cci_2_otpMNumber: "",
    cci_2_skypeAddress: "",
  });
  useEffect(() => {
    setCI(data1);
  }, [data1]);

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
  useEffect(() => {
    dispatch(INITIATECTI(CTI));
  }, [dispatch]);

  function handleInput(evt) {
    if (copy === true) {
      evt.target.value = ""
    }
    setCopy(false)
    setCI({
      ...CI,
      [evt.target.name]: evt.target.value,
    });
  }
  useEffect(() => {
    setCI(CI);
  }, [CI]);
  console.log(CI);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(CI);
    dispatch(CreateCI(CI));

    history.push("/CTI");
  };
  const onUpdateSubmit = (e) => {
    e.preventDefault();
    dispatch(UpdateOne(CI, urlid));
    history.push("/CTI/" + urlid);
  };
  // return isLoading && urlid ? (
  //   <h1>Loading</h1>
  // ) :
  const paste = (e) => {
    setCopy(true)
    console.log(e.target.value)
    alert("please  don'paste in this field")

  }
  return (
    <div style={{ position: "relative" }}  >
      <div  className={urlid?"container-fluid":"container"}>
        <div className="row">
          {urlid ? (<div className="col-md-2"> < SideNav id={urlid} /> </div>) : (<div   ></div>)}
          <div className={urlid ? "col-md-8" : "col-md-12"}>
            <Label>MOVE TO</Label>
            <select
              className={"custom-select"}
              value={CI.cistatus}
              // value={"Not Required"}
              id="1"
              name="cistatus"
              onChange={handleInput}
            >
              <option> </option>
              <option> Live </option>
              <option>Trading</option>
              <option>Archive</option>
            </select>


            <div>
              <h2>
                <span class="badge badge-success">COMPANY INFORMATION </span>
              </h2>
            </div>
            <hr className="border-primary " />
            <Form>
              <div className="border p-3 shadow">
                <div>
                  <h2>
                    <span class="badge badge-success">
                      Trading / Processing Information:
              </span>
                  </h2>
                </div>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="certificate">Registered Company Name: </Label>
                      <Input
                        className="custom"
                        onChange={handleInput}
                        required={true}
                        type="text"
                        value={CI.tpi_rcName}
                        name="tpi_rcName"
                        id="Name"
                        placeholder="Company Name"
                      ></Input>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="memo">Allocated Acquirer / Solution:</Label>
                      <select
                        className="custom-select"
                        id="1"
                        name="tpi_aaSolution"
                        value={CI.tpi_aaSolution}
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
                  <Col md={6}>
                    <FormGroup>
                      <Label for="NTC">Trading / New To Cards (NTC):</Label>

                      <select
                        className="custom-select"
                        value={CI.tpi_ntc}
                        id="1"
                        name="tpi_ntc"
                        onChange={handleInput}
                      >
                        <option> NTC </option>
                        <option>New to Cards</option>
                      </select>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="shareRegister">Vertical / Trading Sector: :</Label>
                      <Input
                        className="cusrom"
                        onChange={handleInput}
                        required={false}
                        type="text"
                        value={CI.tpi_vtSector}
                        name="tpi_vtSector"
                        id="Name"
                        placeholder=" Trading Sector"
                      ></Input>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="shareCertificate">Application Boarded Date:</Label>
                      <Input
                        className="cusrom"
                        value={CI.tpi_date}
                        onChange={handleInput}
                        type="date"
                        name="tpi_date"
                        id="date"
                      // placeholder="Company URL"
                      ></Input>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="CCR">Business / Referral Partner:</Label>
                      <Input
                        className="cusrom"
                        onChange={handleInput}
                        required={false}
                        type="text"
                        value={CI.tpi_brPartner}
                        name="tpi_brPartner"
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
                        value={CI.tpi_aBdmOwner}
                        name="tpi_aBdmOwner"
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
                        value={CI.tpi_iP}
                        name="tpi_iP"
                        id="Name"
                        placeholder="Name"
                      ></Input>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="CCR">Compliance Country Location:</Label>
                      <Input
                        className="cusrom"
                        onChange={handleInput}
                        required={false}
                        type="text"
                        value={CI.tpi_ccLocation}
                        name="tpi_ccLocation"
                        id="Name"
                        placeholder="Compliance Location"
                      ></Input>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="CCR">Documents:</Label>
                      <select
                        className="custom-select"
                        value={CI.tpi_EEADocuments}
                        id="1"
                        name="tpi_EEADocuments"
                        onChange={handleInput}
                      >
                        <option> EEA </option>
                        <option>USA</option>
                        <option>International</option>
                      </select>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="CCR">Trading License or Agreements Required:</Label>
                      <select
                        className="custom-select"
                        value={CI.tpi_TLoAR}
                        id="1"
                        name="tpi_TLoAR"
                        onChange={handleInput}
                      >
                        <option>Not Required</option>

                        <option>unlicenced</option>
                        {/* <option>Licenced </option> */}
                        <option>Gambling</option>
                        <option>Forex</option>
                        <option>Trade</option>
                        <option>Fulfilment</option>
                        <option>Other</option>
                      </select>
                    </FormGroup>
                  </Col>
                </Row>
              </div>

              {/* **************************** */}

              <hr className="border-primary" />
              <div className="border p-3 shadow">
                <div>
                  <h2>
                    <span class="badge badge-success">
                      Application/ Company Trading  Information:
              </span>
                  </h2>
                </div>

                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="address">Company Registered Address:</Label>
                      <Input
                        className="cusrom"
                        value={CI.tci_crAddress}
                        name="tci_crAddress"
                        onChange={handleInput}
                        required={false}
                        type="address"
                        id="address"
                        placeholder="address"
                      ></Input>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="address">Company Registered Number: </Label>
                      <Input
                        className="cusrom"
                        value={CI.tci_crNumber}
                        name="tci_crNumber"
                        onChange={handleInput}
                        required={false}
                        type="number"
                        id="regnumber"
                        placeholder="Registeration Number"
                      ></Input>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="address">
                        Company Trading Address (If Applicable):
                </Label>
                      <Input
                        className="cusrom"
                        value={CI.tci_ctAddress}
                        name="tci_ctAddress"
                        onChange={handleInput}
                        required={false}
                        type="address"
                        id="address"
                        placeholder="Company Trading Address :"
                      ></Input>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="address">Website: </Label>
                      <Input
                        className="cusrom"
                        value={CI.tci_wUrl}
                        name="tci_wUrl"
                        onChange={handleInput}
                        required={false}
                        type="url"
                        id="Website url"
                        placeholder="Website url :"
                      ></Input>
                    </FormGroup>
                  </Col>
                </Row>
                {/* **************************** */}
                <hr className="border-primary" />
                <div>
                  <h2>
                    <span class="badge badge-success">
                      Application/ Company Contact Information:{" "}
                    </span>
                  </h2>
                </div>

                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="address">Contact Name:</Label>
                      <Input
                        className="cusrom"
                        value={CI.cci_2_cName}
                        name="cci_2_cName"
                        onChange={handleInput}
                        required={false}
                        type="Text"
                        id="Contact-name"
                        placeholder="Contact name"
                      ></Input>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="address">Position:</Label>
                      <Input
                        className="cusrom"
                        value={CI.cci_2_Position}
                        name="cci_2_Position"
                        onChange={handleInput}
                        required={false}
                        type="text"
                        id="position"
                        placeholder="Position:											
                                "
                      ></Input>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="address">Mobile Number: </Label>
                      <Input
                        className="cusrom"
                        value={CI.cci_2_mNumber}
                        name="cci_2_mNumber"
                        onChange={handleInput}
                        required={false}
                        type="phone"
                        id="mobile"
                        placeholder="Mobile Number:"
                      ></Input>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="address">Landline Number: </Label>
                      <Input
                        className="cusrom"
                        value={CI.cci_2_lNumber}
                        name="cci_2_lNumber"
                        onChange={handleInput}
                        required={false}
                        type="phone"
                        id="landlinemobile"
                        placeholder="Landline Number:  "
                      ></Input>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="address">Email: </Label>
                      <Input
                        className="cusrom"
                        value={CI.cci_2_otpMNumber}
                        name="cci_2_otpMNumber"
                        onChange={handleInput}
                        required={false}
                        type="otpmobile"
                        id="address"
                        placeholder="Email :"
                      ></Input>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="address">Skype Address:</Label>
                      <Input
                        className="cusrom"
                        value={CI.cci_2_skypeAddress}
                        name="cci_2_skypeAddress"
                        onChange={handleInput}
                        required={false}
                        type="text"
                        id="skypeAddress"
                        placeholder="Skype Address:	"
                      ></Input>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="address"> Retype Email: </Label>
                      <Input
                        className="cusrom"
                        onPaste={e => { paste(e) }}
                        value={CI.cci_2_otpMNumber1}
                        name="cci_2_otpMNumber1"
                        onChange={handleInput}
                        required={false}
                        type="otpmobile"
                        id="address"
                        placeholder="Email :"
                      ></Input>
                    </FormGroup>
                  </Col>
                </Row>

                {/* **************************** */}

                <hr className="border-primary" />
                <div className="border p-3 shadow">
                  <div>
                    <h2>
                      <span class="badge badge-success">
                        Management Company Contact Information:
                </span>
                    </h2>
                  </div>

                  <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="mci_crAddress">Management Company Address:</Label>
                        <Input
                          className="cusrom"
                          value={CI.mci_mcrAddress}
                          name="mci_mcrAddress"
                          onChange={handleInput}
                          required={false}
                          type="address"
                          id="address"
                          placeholder="Management Company Registered Address"
                        ></Input>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="mci_crAddress">Company Registered Address:</Label>
                        <Input
                          className="cusrom"
                          value={CI.mci_crAddress}
                          name="mci_crAddress"
                          onChange={handleInput}
                          required={false}
                          type="address"
                          id="address"
                          placeholder="Company Registered Address"
                        ></Input>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="address">Company Registered Number: </Label>
                        <Input
                          className="cusrom"
                          value={CI.mci_crNumber}
                          name="mci_crNumber"
                          onChange={handleInput}
                          required={false}
                          type="number"
                          id="regnumber"
                          placeholder="Registeration Number"
                        ></Input>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="address">
                          Company Trading Address (If Applicable):
                  </Label>
                        <Input
                          className="cusrom"
                          value={CI.mci_ctAddress}
                          name="mci_ctAddress"
                          onChange={handleInput}
                          required={false}
                          type="address"
                          id="address"
                          placeholder="Company Trading Address :"
                        ></Input>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="address">Vertical / Trading Sector: </Label>
                        <Input
                          className="cusrom"
                          value={CI.mci_vtSector}
                          name="mci_vtSector"
                          onChange={handleInput}
                          required={false}
                          type="text"
                          id="address"
                          placeholder="Company Trading Address :"
                        ></Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  {/* **************************** */}
                  {/* <hr className="border-primary"/> */}
                  <div>
                    <h2>
                      <span class="badge badge-success">
                        Application/ Company Contact Information:
                </span>
                    </h2>
                  </div>

                  <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="address">Contact Name:</Label>
                        <Input
                          className="cusrom"
                          value={CI.cci_cName}
                          name="cci_cName"
                          onChange={handleInput}
                          required={false}
                          type="Text"
                          id="Contact-name"
                          placeholder="Contact name"
                        ></Input>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="address">E-mail Address:</Label>
                        <Input
                          className="cusrom"
                          value={CI.cci_email}
                          name="cci_email"
                          onChange={handleInput}
                          required={false}
                          type="Text"
                          id="Contact-email"
                          placeholder="Email"
                        ></Input>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="address">Skype Address:</Label>
                        <Input
                          className="cusrom"
                          value={CI.cci_skypeAddress}
                          name="cci_skypeAddress"
                          onChange={handleInput}
                          required={false}
                          type="text"
                          id="skypeAddress"
                          placeholder="Skype Address:											
                                "
                        ></Input>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="address">Mobile Number: </Label>
                        <Input
                          className="cusrom"
                          value={CI.cci_mNumber}
                          name="cci_mNumber"
                          onChange={handleInput}
                          required={false}
                          type="phone"
                          id="mobile"
                          placeholder="Mobile Number:"
                        ></Input>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="address">Landline Number: </Label>
                        <Input
                          className="cusrom"
                          value={CI.cci_lNumber}
                          name="cci_lNumber"
                          onChange={handleInput}
                          required={false}
                          type="phone"
                          id="landlinemobile"
                          placeholder="Landline Number:  "
                        ></Input>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="address">OTP Mobile Number (IBAN Only): </Label>
                        <Input
                          className="cusrom"
                          value={CI.cci_otpMNumber}
                          name="cci_otpMNumber"
                          onChange={handleInput}
                          required={false}
                          type="phone"
                          id="address"
                          placeholder="OTP Mobile Number (IBAN Only)"
                        ></Input>
                      </FormGroup>
                    </Col>
                  </Row>
                </div>

                {/* ================================================ */}

                {urlid ? (
                  <div style={{ margin: '2%' }}>
                    <Button onClick={onUpdateSubmit}>Update and Next</Button>
                  </div>
                ) : (
                  <div style={{ margin: '2%' }}>
                    <Button onClick={onSubmit}>Save and Next</Button></div>
                )}
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
