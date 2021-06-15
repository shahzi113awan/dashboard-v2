import React, { useState, useEffect } from "react";
import { Col, Row, Form, FormGroup, Label, Button, Input } from "reactstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import RSolutionNav from "./ReusableComponents/RsolNavParam";
import Options from "./ReusableComponents/RParams";
import {
  CreatesolParams,
  GetOnesol,
  UpdateOne,
} from "../../actions/solutionNavparamAction";
import { Get } from '../../actions/solutionNavAction'
const SolutionNavParam = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { urlid } = useParams();
  console.log(urlid);
  const data = useSelector((state) => state.solParamsReducer.state);
  const id = useSelector((state) => state.solReducer.id);
  console.log(id);
  console.log(data);
  useEffect(() => {
    urlid ? dispatch(GetOnesol(urlid)) : console.log("creating");
  }, [urlid]);
  const [SN, setSN] = useState({
    params_sol_name: "",
    params_web: "",

    params_mdr: "",
    params_trate: "",
    params_rollingR: "",
    params_reffee: "",
    params_chbackfee: "",
    params_accfee: "",
    params_currSet: "",
    params_settfee: "",
    params_nmsa: "",
    params_msh: "",
    params_mersett: "",
    params_rras: "",
    params_prs: "",
    params_bp: "",
    params_tcur: "",
    params_mintv: "",
    params_maxtv: "",
    params_maxtrc: "",
    params_partset: "",
    params_note: "",
    params_note2: "",
    params_note3: "",
  });
  useEffect(() => {
    setSN(data);
  }, [data]);
  const handleInput = (e) => {
    setSN({
      ...SN,
      [e.target.name]: e.target.value,
    });
  };
  const handleChange = (e) => {
    setSN({
      ...SN,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    setSN(SN);
  }, SN);

  console.log(SN);
  const onSubmit = async (e) => {
    // console.log(SN);
    await dispatch(CreatesolParams(SN, id));
    dispatch(Get())
    history.push("/solution-DB");
  };
  const onUpdateSubmit = async () => {
    await dispatch(UpdateOne(SN, urlid));
    dispatch(Get())

    history.push("/solution-DB");
  };
  return (
    <div className="container">
      <div>
        <h2>
          <span class="badge badge-success colspan">
            SOLUTION PARAMETERS & COMMERCIALS
          </span>
        </h2>
      </div>
      <Form>
        <Row form>
          <RSolutionNav
            text={"Solution Name:"}
            value={SN.params_sol_name}
            name="params_sol_name"
            handleChange={(e) => handleChange(e)}
            placeholder={"Solution Name"}
          />
          <RSolutionNav
            text={"Website:"}
            value={SN.params_web}
            name="params_web"
            handleChange={(e) => handleChange(e)}
            placeholder={"Website"}
          />

          {/* <RSolutionNav
            text={"Solution Name:"}
            value={SN.params_""}
            name="params_"
            handleChange={(e) => handleChange(e)}
            placeholder={""}
          /> */}
          <Col md={10}>
            <FormGroup>
              <h4>
                <span>Company Documents & Website Check:</span>
              </h4>
            </FormGroup>
          </Col>
          <Col md={10}>
            <FormGroup>
              <h6>
                <span>Commercials</span>
              </h6>
            </FormGroup>
          </Col>
          <RSolutionNav
            text={"Merchant Discount Rate:"}
            value={SN.params_mdr}
            name="params_mdr"
            handleChange={(e) => handleChange(e)}
            placeholder={""}
          />
          <RSolutionNav
            text={"Transaction Rate:"}
            value={SN.params_trate}
            name="params_trate"
            handleChange={(e) => handleChange(e)}
            placeholder={""}
          />
          <RSolutionNav
            text={"Rolling Reserve: "}
            value={SN.params_rollingR}
            name="params_rollingR"
            handleChange={(e) => handleChange(e)}
            placeholder={""}
          />
          <RSolutionNav
            text={"Refund Fee:"}
            value={SN.params_reffee}
            name="params_reffee"
            handleChange={(e) => handleChange(e)}
            placeholder={""}
          />
          <RSolutionNav
            text={"Chargeback Fee:	"}
            value={SN.params_chbackfee}
            name="params_chbackfee"
            handleChange={(e) => handleChange(e)}
            placeholder={""}
          />
          <RSolutionNav
            text={"Account Fees:"}
            value={SN.params_accfee}
            name="params_accfee"
            handleChange={(e) => handleChange(e)}
            placeholder={""}
          />
          <Col md={10}>
            <FormGroup>
              <h6>
                <span>Settlement Terms</span>
              </h6>
            </FormGroup>
          </Col>
          <RSolutionNav
            text={"Currency Settlement:"}
            value={SN.params_currSet}
            name="params_currSet"
            handleChange={(e) => handleChange(e)}
            placeholder={""}
          />
          <RSolutionNav
            text={"Settlement Fees:"}
            value={SN.params_settfee}
            name="params_settfee"
            handleChange={(e) => handleChange(e)}
            placeholder={""}
          />
          <RSolutionNav
            text={"No Minimum Settlement Amount "}
            value={SN.params_nmsa}
            name="params_nmsa"
            handleChange={(e) => handleChange(e)}
            placeholder={""}
          />
          <RSolutionNav
            text={"Merchant Settlement Hold: "}
            value={SN.params_msh}
            name="params_msh"
            handleChange={(e) => handleChange(e)}
            placeholder={""}
          />

          <RSolutionNav
            text={"Merchant Settlement: "}
            value={SN.params_mersett}
            name="params_mersett"
            handleChange={(e) => handleChange(e)}
            placeholder={""}
          />
          <Col md={10}>
            <FormGroup>
              <Label>Note</Label>
              <textarea
                style={{ width: "120%" }}
                value={SN.params_Note1}
                name={"params_Note1"}
                onChange={(e) => handleChange(e)}
              />
            </FormGroup>
          </Col>
          <Col md={10}>
            <FormGroup>
              <h6>
                <span>Risk Parameters</span>
              </h6>
            </FormGroup>
          </Col>
          <RSolutionNav
            text={"Risk Policy Available & Sectors: "}
            value={SN.params_rras}
            name="params_rras"
            handleChange={(e) => handleChange(e)}
            placeholder={""}
          />
          <Options
            text={"Processing Statements:"}
            value={SN.params_prs}
            name="params_prs"
            handleChange={(e) => handleChange(e)}
            placeholder={""}
            arr={["", "If Possible", "Not Required"]}
          />
          <Options
            text={"Business Plan: "}
            value={SN.params_bp}
            name="params_bp"
            handleChange={(e) => handleChange(e)}
            placeholder={""}
            arr={["", "If Possible", "Not Required"]}
          />
          <Col md={10}>
            <FormGroup>
              <Label>Note</Label>
              <textarea
                style={{ width: "120%" }}
                name={"params_note2"}
                value={SN.params_note2}
                onChange={(e) => handleChange(e)}
              />
            </FormGroup>
          </Col>
          <Col md={10}>
            <FormGroup>
              <h6>
                <span>Payment Parameters</span>
              </h6>
            </FormGroup>
          </Col>
          <RSolutionNav
            text={"Transaction Currencies:"}
            value={SN.params_tcur}
            name="params_tcur"
            handleChange={(e) => handleChange(e)}
            placeholder={""}
          />
          <RSolutionNav
            text={"Minimum Transaction Value: "}
            value={SN.params_mintv}
            name="params_mintv"
            handleChange={(e) => handleChange(e)}
            placeholder={""}
          />
          <RSolutionNav
            text={"Maximum Transaction Value: "}
            value={SN.params_maxtv}
            name="params_maxtv"
            handleChange={(e) => handleChange(e)}
            placeholder={""}
          />
          <RSolutionNav
            text={"Maximum Transaction Counts per day / month "}
            value={SN.params_maxtrc}
            name="params_maxtrc"
            handleChange={(e) => handleChange(e)}
            placeholder={""}
          />
          <Col md={10}>
            <FormGroup>
              <Label>Note</Label>
              <textarea
                style={{ width: "120%" }}
                name={"params_note3"}
                value={SN.params_note3}
                onChange={(e) => handleChange(e)}
              />
            </FormGroup>
          </Col>
          <Col md={10}>
            <FormGroup>
              <h6>
                <span>Miscellaneous </span>
              </h6>
            </FormGroup>
          </Col>
          <RSolutionNav
            text={"Partner Settlement:  "}
            value={SN.params_partset}
            name="params_partset"
            handleChange={(e) => handleChange(e)}
            placeholder={""}
          />
        </Row>

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

export default SolutionNavParam;
