import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Form, FormGroup, Label, Button, Input } from "reactstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import { CreateKYB, GetOneKYB } from "../actions/kybAction";

export default function KYB() {
  const dispatch = useDispatch();
  const { urlid } = useParams();
  const history = useHistory();
  const data = useSelector((state) => state.kybReducer.state);
  const id = useSelector((state) => state.ciReducer.id);
  console.log(id);
  const link =`/kyc/${urlid}`
  const [KYB, setKYB] = useState({
    // kyb_coi: 'Pending',
    // kyb_moa: 'Pending',
    // kyb_aoa: 'Pending',
    // kyb_sRegister: 'Pending',
    // kyb_scs: 'Pending',
    // kyb_ccre: 'Pending',
  });
  useEffect(() => {
    urlid ? dispatch(GetOneKYB(urlid)) : console.log("creating");
  }, [urlid]);
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
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(KYB);
    dispatch(CreateKYB(KYB, id));

    history.push("/sdkyb");
  };
  const onUpdateSubmit = (e) => {
    e.preventDefault();
    dispatch(CreateKYB(KYB, urlid));
    history.push("/sdkyb/" + urlid);
  };

  return (
    <div className="container">
      <div>
        <h2>
          <span class="badge badge-success">Know Your Business (KYB):</span>
        </h2>
      </div>
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="certificate">Certificate of Incorporation:</Label>
              <select
                className={
                  KYB.kyb_coi === "Pending"
                    ? "border-red custom-select"
                    : "custom-select"
                }
                value={KYB.kyb_coi}
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
                className={
                  KYB.kyb_moa === "Pending"
                    ? "border-red custom-select"
                    : "custom-select"
                }
                value={KYB.kyb_moa}
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
                className={
                  KYB.kyb_sRegister === "Pending"
                    ? "border-red custom-select"
                    : "custom-select"
                }
                value={KYB.kyb_sRegister}
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
                className={
                  KYB.kyb_scs === "Pending"
                    ? "border-red custom-select"
                    : "custom-select"
                }
                value={KYB.kyb_scs}
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
