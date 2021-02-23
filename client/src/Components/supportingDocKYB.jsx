import React, { useState, useEffect } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Create, GetOne } from "../actions/sdAction";

export default function CTI() {
  const dispatch = useDispatch();
  const history = useHistory();
  const id = useSelector((state) => state.ciReducer.id);
  // console.log(id);
  const data = useSelector((state) => state.sdReducer.state);
  console.log(data);
  const { urlid } = useParams();
  useEffect(() => {
    urlid ? dispatch(GetOne(urlid)) : console.log("creating");
  }, [urlid]);
  const [KYB_SD, setKYB_SD] = useState({
    // fsd_cbs: 'Pending',
    // fsd_pbs: 'Pending',
    // fsd_pow: 'Pending',
    // fsd_cap: 'Pending',
    // lta_gfl: 'Pending',
    // lta_cra: 'Pending',
    // lta_fdsa: 'Pending',
    // lta_fbo_cr: 'Pending',
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
  const onSubmit = (e) => {
    console.log(KYB_SD);
    dispatch(Create(KYB_SD, id));

    history.push("/check-list");
  };
  const onUpdateSubmit = (e) => {
    dispatch(Create(KYB_SD, urlid));
    history.push("/check-list/" + urlid);
  };
  return (
    <div className="container">
      <div>
        <h2>
          <span class="badge badge-success">Supporting Documents (KYB):</span>
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
              <select
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
              </select>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="memo">Personal Bank Statements:</Label>
              <select
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
              </select>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="articles">Proof of Wealth:</Label>
              <select
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
              </select>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="shareRegister">Company AML Policy:</Label>
              <select
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
              </select>
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
              <select
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
              </select>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="CCR">Copywrite or Re-seller Agreement:</Label>
              <select
                className={
                  KYB_SD.lta_cra === "Pending"
                    ? "border-red custom-select"
                    : "custom-select"
                }
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
                className={
                  KYB_SD.lta_fdsa === "Pending"
                    ? "border-red custom-select"
                    : "custom-select"
                }
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
              <select
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
              </select>
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
}
