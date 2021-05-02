import React, { useState, useEffect, useMemo } from "react";
import { Col, Row, Form, FormGroup, Label, Input, Button, CarouselIndicators } from "reactstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import moment from "moment";
import Rdays from './ReusableComp/RemainingDays'
import countryList from "react-select-country-list";
import Select from "react-select";
import { useDispatch, useSelector, connect } from "react-redux";
import { CreateKYC, GetOneKYC, INITIATEKYC } from "../actions/kycAction";
import { INITIATEKYB } from "../actions/kybAction";
import SideNav from './Sidebar/Sidebar'

import Loader from "react-loader-spinner";

const KYC = () => {
  //initializing functions
  const dispatch = useDispatch();
  const history = useHistory();
  //getting data from reducers
  const data = useSelector((state) => state.kycReducer.state);
  const id = useSelector((state) => state.ciReducer.id);
  const isLoading = useSelector((state) => state.kycReducer.isLoading);
  console.log(isLoading);

  const { urlid } = useParams();
  const link = `/cti/${urlid}`;

  console.log(typeof data);

  useEffect(async () => {
    urlid ? await dispatch(GetOneKYC(urlid)) : console.log("creating");
  }, [urlid]);
  const [KYB, setKYB] = useState({
    kyb_coi: "Pending",
    kyb_moa: "Pending",
    kyb_aoa: "Pending",
    kyb_sRegister: "Pending",
    kyb_scs: "Pending",
    kyb_ccre: "Pending",
  });
  useEffect(() => {
    dispatch(INITIATEKYB(KYB));
  }, [dispatch]);
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

  const handleInput = async (e, index) => {
    e.preventDefault();
    const { name, value } = e.target;
    const list = [...KYC];
    list[index][name] = value;
    console.log(KYC);
    setKYC(list);
  };
  //handle add and remove
  const handleRemoveClick = (e, index) => {
    const list = [...KYC];
    list.splice(index, 1);
    setKYC(list);
  };

  // handle click event of the Add button
  const handleAddClick = (e) => {
    e.preventDefault();
    setKYC([
      ...KYC,
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
  };

  useEffect(() => {
    setKYC(data);
  }, [data]);
  console.log(data);
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

  const validator = (e, id) => {
    if (e.target.value > 100 || e.target.value < 0) {
      alert("Please Type Percentage within 0 and 100 Thanks");
      e.target.value = 0;
    }
  };
  console.log(moment(KYC[0].kyc_startDate))
  return urlid && isLoading ? (
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
    <div className="container-fluid">
      <div className="row">

     
      { urlid ? (<div className="col-md-2"> <SideNav id={urlid}></SideNav></div>) : (<div></div>)}
      <div className= {urlid?"col-md-8": "col-md-12"}>
        {KYC.map((kyc, id) => {
          return (

            <div style={{ display: "flex" }}>
              <Col md={3}>
                {/* <Rdays datevalue={kyc.kyc_ExpiryDate} stdate={kyc.kyc_startDate} expdate={kyc.kyc_adExpiryDate}/> */}
                <FormGroup>
                  <Label for="Name">Name</Label>
                  <Input
                    className={"custom-select"}
                    value={kyc.kyc_name}
                    name="kyc_name"
                    onChange={(e) => handleInput(e, id)}

                    type="text"
                    id="Name"
                    placeholder="Share Holder Name"
                  ></Input>
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="shareRegister">Holders</Label>
                  <select
                    className={"custom-select"}
                    value={kyc.kyc_sholders}
                    id="1"
                    name="kyc_sholders"
                    onChange={(e) => {
                      handleInput(e, id);
                    }}
                  >
                    <option>Director</option>
                    <option>Shareholder Director</option>
                    <option>Shareholder</option>
                  </select>
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label for="remainingDays">Passport</Label>
                  <Input
                    style={{
                      backgroundColor:
                        moment
                          .duration(
                            moment(kyc.kyc_ExpiryDate).diff(
                              moment(new Date())
                            )
                          )
                          .asDays() < 180
                          ? "pink"
                          : "#32CD32",
                    }}
                    type="text"
                    disabled={true}
                    value={
                      kyc.kyc_ExpiryDate
                        ? Math.ceil(moment
                          .duration(
                            moment(kyc.kyc_ExpiryDate).diff(
                              moment(new Date())
                            )
                          )
                          .asDays())
                        : ""
                    }
                  ></Input>
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label for="remainingDays">POA</Label>
                  <Input
                    style={{
                      backgroundColor:
                        Math.ceil(moment
                          .duration(
                            moment(kyc.kyc_adExpiryDate).diff(
                              moment(new Date())
                            )
                          )
                          .asDays()) < 45
                          ? "pink"
                          : "#32CD32",
                    }}
                    type="text"
                    disabled={true}
                    value={
                      kyc.kyc_adExpiryDate
                        ? Math.ceil(moment
                          .duration(
                            moment(kyc.kyc_adExpiryDate).diff(
                              moment(new Date())
                            )
                          )
                          .asDays())
                        : ""
                    }
                  ></Input>
                </FormGroup>
              </Col>
            </div>

          )
        })}
        <div>
          <h2>
            <span class="badge badge-success">KNOW YOUR CUSTOMER (KYC)</span>
          </h2>
        </div>

        <Form>
          {KYC.map((kyc, id) => {
            return (
              <div>
                <Row form>
                  <Col md={6}>
                    {/* <Rdays datevalue={kyc.kyc_ExpiryDate} stdate={kyc.kyc_startDate} expdate={kyc.kyc_adExpiryDate}/> */}
                    <FormGroup>
                      <Label for="Name">Name</Label>
                      <Input
                        className={"custom-select"}
                        value={kyc.kyc_name}
                        name="kyc_name"
                        onChange={(e) => handleInput(e, id)}

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
                        value={kyc.kyc_sholders}
                        id="1"
                        name="kyc_sholders"
                        onChange={(e) => {
                          handleInput(e, id);
                        }}
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
                        value={kyc.kyc_sHolds}
                        name="kyc_sHolds"
                        onChange={(e) => {
                          validator(e, id);
                          handleInput(e, id);
                        }}
                        type="number"
                        min="1"
                        max="100"
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
                        value={kyc.kyc_pID}
                        name="kyc_pID"
                        onChange={(e) => {
                          handleInput(e, id);
                        }}
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
                        value={kyc.kyc_startDate}
                        name="kyc_startDate"
                        onChange={(e) => {
                          handleInput(e, id);
                        }}
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
                        value={kyc.kyc_ExpiryDate}
                        name="kyc_ExpiryDate"
                        onChange={(e) => {
                          handleInput(e, id);
                        }}
                        type="date"
                        id="ExpiryDate"
                      ></Input>
                    </FormGroup>
                  </Col>
                  <Col md={2}>
                    <FormGroup>
                      <Label for="remainingDays">Remaining Days</Label>
                      <Input
                        style={{
                          backgroundColor:
                            moment
                              .duration(
                                moment(kyc.kyc_ExpiryDate).diff(
                                  moment(new Date())
                                )
                              )
                              .asDays() < 180
                              ? "pink"
                              : "#32CD32",
                        }}
                        type="text"
                        disabled={true}
                        value={
                          kyc.kyc_ExpiryDate
                            ? Math.ceil(moment
                              .duration(
                                moment(kyc.kyc_ExpiryDate).diff(
                                  moment(new Date())
                                )
                              )
                              .asDays())
                            : ""
                        }
                      ></Input>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="Nationality">Country/Nationality</Label>
                      <Input
                        className="cusrom"
                        onChange={(e) => {
                          handleInput(e, id);
                        }}
                        required={false}
                        type="text"
                        value={kyc.kyc_nationality}
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
                        value={kyc.kyc_notarized}
                        name="kyc_notarized"
                        onChange={(e) => {
                          handleInput(e, id);
                        }}
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
                        value={kyc.kyc_Address}
                        name="kyc_Address"
                        onChange={(e) => {
                          handleInput(e, id);
                        }}
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
                        value={kyc.kyc_adstartDate}
                        name="kyc_adstartDate"
                        onChange={(e) => {
                          handleInput(e, id);
                        }}
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
                        value={kyc.kyc_adExpiryDate}
                        name="kyc_adExpiryDate"
                        onChange={(e) => {
                          handleInput(e, id);
                        }}
                        type="date"
                        id="adExpiryDate"
                      ></Input>
                    </FormGroup>
                  </Col>
                  <Col md={2}>
                    <FormGroup>
                      <Label for="remainingDays">Remaining Days</Label>
                      <Input
                        style={{
                          backgroundColor:
                            Math.ceil(moment
                              .duration(
                                moment(kyc.kyc_adExpiryDate).diff(
                                  moment(new Date())
                                )
                              )
                              .asDays()) < 45
                              ? "pink"
                              : "#32CD32",
                        }}
                        type="text"
                        disabled={true}
                        value={
                          kyc.kyc_adExpiryDate
                            ? Math.ceil(moment
                              .duration(
                                moment(kyc.kyc_adExpiryDate).diff(
                                  moment(new Date())
                                )
                              )
                              .asDays())
                            : ""
                        }
                      ></Input>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="typeOfProof">Type of Proof</Label>
                      <Input
                        type="select"
                        name="kyc_toProof"
                        onChange={(e) => {
                          handleInput(e, id);
                        }}
                        className={"custom-select"}
                        value={kyc.kyc_toProof}
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
                        onChange={(e) => {
                          handleInput(e, id);
                        }}
                        className={"custom-select"}
                        // value={kyc.kyc_paDocument}
                        value={"Not Required"}
                        readOnly
                      >
                        <option value="Pending">Pending</option>
                        <option value="Received">Received</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <div className="btn-box" style={{ margin: "2%" }}>
                  {KYC.length !== 1 && (
                    <Button
                      className="mr10"
                      onClick={() => handleRemoveClick(id)}
                    >
                      Remove
                    </Button>
                  )}

                  <Button
                    style={{ marginLeft: "90%" }}
                    onClick={(e) => handleAddClick(e)}
                  >
                    Add Another
                </Button>
                </div>
              </div>
            );
          })}
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
              Save and Next
            </Button>
          )}
        </Form>
      </div>
    </div>
    </div>
  );
};


export default KYC;

//LOgic of days calculator
// useEffect(() => {
//   if (KYC.kyc_adstartDate && KYC.kyc_adExpiryDate) {
//     const Start = moment(KYC.kyc_adstartDate);

//     console.log(Start);
//     const End = moment(KYC.kyc_adExpiryDate);
//     console.log(End);
//     console.log(KYC.kyc_adExpiryDate);
//     const days = moment.duration(End.diff(Start)).asDays();

//     setremainig1(days);
//     if (days < 45) setColor1("#ADFF2F");
//     // else if (days < 90 && days > 45) setColor1("#FFBF00");
//     else setColor1("	#FA8072");
//     return days;
//   }
// }, [KYC.kyc_adExpiryDate, KYC.kyc_adstartDate]);
//  function calculate(date1, date2) {
//    const d1 = new Date(date1);
//    const d2 = new Date(date2);
//    const diffInMs = Math.abs(d2 - d1);
//    return diffInMs / (1000 * 60 * 60 * 24);

// const [remainig, setremainig] = useState(0);
// const [color, setColor] = useState("none");
// const [remainig1, setremainig1] = useState(0);
// const [color1, setColor1] = useState("none");
// console.log(KYC.kyc_startDate);
// const calculate = (e, id) => {
//   console.log(id);
//   console.log(KYC[id].kyc_startDate);

//   const Start = moment(KYC[id].kyc_startDate);

//   console.log(Start);
//   const End = moment(KYC[id].kyc_ExpiryDate);
//   console.log(End);
//   console.log(KYC[id].kyc_ExpiryDate);
//   const days = moment.duration(End.diff(Start)).asDays();

//   // const list = [...KYC[id]];
//   // list[id][Rdays] = days;
//   // console.log(KYC);
//   // setKYC(list);
//   setKYC({
//     ...KYC[id],
//     Rdays: days,
//   });
//   return days;

//   //At the End logic of days calculator
// };
