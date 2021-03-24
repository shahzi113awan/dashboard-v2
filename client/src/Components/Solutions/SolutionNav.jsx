import React, { useState, useEffect } from "react";
import { Col, Row, Form, FormGroup, Label, Button, Input } from "reactstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import RSolutionNav from "./ReusableComponents/RSolutionNav";
import {
  Createsol,
  GetOnesol,
  UpdateOne,
} from "../../actions/solutionNavAction";

const SolutionNav = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { urlid } = useParams();
  console.log(urlid);
  const data = useSelector((state) => state.solReducer.state);

  useEffect(() => {
    urlid ? dispatch(GetOnesol(urlid)) : console.log("creating");
  }, [urlid]);
  const [SN, setSN] = useState({
    solution_name: "",
    solution_type: "",
    fcaf: "",
    bi: "",
    ota: "",
    aps: "",
    hwurla: "",
    wc: "",
    wurlpod: "",
    osc: "",
    bp: "",
    lds: "",
    ldoa: "",
    poad: "",
    sdp: "",
    sdpoa: "",
    tdp: "",
    tdpoa: "",
    fdp: "",
    fdpa: "",
    coi: "",
    moa: "",
    aoa: "",
    sr: "",
    scs: "",
    ccre: "",
    cbs: "",
    pbs: "",
    pow: "",
    cap: "",
    gfl: "",
    cra: "",
    fdsa: "",
    fcr: "",
    shs: "",
    cdf: "",
    spare: "",
    spare1: "",
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
    await dispatch(Createsol(SN));

    history.push("/solution-nav-params");
  };
  const onUpdateSubmit = async () => {
    await dispatch(UpdateOne(SN, urlid));

    history.push("/solution-nav-params/" + urlid);
  };
  return (
    <div className="container">
      <div>
        <h2>
          <span class="badge badge-success">
            SOLUTION DOCUMENT & COMPLIANCE REQUIREMENT
          </span>
        </h2>
      </div>
      <Form>
        <Row form>
          <Col md={6}>
            <Input type="text" value={"Solution-Name"} readOnly></Input>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Input
                className="custom"
                onChange={(e) => {
                  handleChange(e);
                }}
                required={true}
                type="text"
                value={SN.solution_name}
                name="solution_name"
                id="Name"
                placeholder="Solution Name"
              ></Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <Input type="text" value={"Solution-Type"} readOnly></Input>
          </Col>
          <Col md={6}>
            <FormGroup>
              <select
                className="custom-select"
                id="1"
                name="solution_type"
                value={SN.solution_type}
                onChange={(e) => {
                  handleChange(e);
                }}
              >
                <option>Licensed Acquiring Bank</option>
                <option>Licnesed Payment Facilitator </option>
                <option>Licensed EMI IBAN Banker </option>
                <option>PSP</option>
                <option>Otthers</option>
              </select>
            </FormGroup>
          </Col>

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
                <span>Trading Information</span>
              </h6>
            </FormGroup>
          </Col>

          <RSolutionNav
            text={"Fully Completed Application Form"}
            name={"fcaf"}
            value={SN.fcaf}
            handleChange={(e) => {
              handleInput(e);
            }}
          />
          <RSolutionNav
            text={"Bank Information (Welcome Letter)"}
            name={"bi"}
            value={SN.bi}
            handleChange={(e) => {
              handleInput(e);
            }}
          />
          <RSolutionNav
            text={"Office Tenancy Agreement"}
            name={"ota"}
            value={SN.ota}
            handleChange={(e) => {
              handleInput(e);
            }}
          />
          <RSolutionNav
            text={"Acquiring Processing Statements"}
            name={"aps"}
            value={SN.aps}
            handleChange={(e) => {
              handleInput(e);
            }}
          />
          <RSolutionNav
            text={"Headline Website URL Address"}
            name={"hwurla"}
            value={SN.hwurla}
            handleChange={(e) => {
              handleInput(e);
            }}
          />
          <RSolutionNav
            text={"Website Compliance"}
            name={"wc"}
            value={SN.wc}
            handleChange={(e) => {
              handleInput(e);
            }}
          />
          <RSolutionNav
            text={"Website URL - Proof of Domain"}
            name={"wurlpod"}
            value={SN.wurlpod}
            handleChange={(e) => {
              handleInput(e);
            }}
          />
          <RSolutionNav
            text={"Ownership Structure Chart"}
            name={"osc"}
            value={SN.osc}
            handleChange={(e) => {
              handleInput(e);
            }}
          />
          <RSolutionNav
            text={"Business Plan"}
            name={"bp"}
            value={SN.bp}
            handleChange={(e) => {
              handleInput(e);
            }}
          />

          <Col md={10}>
            <FormGroup>
              <h6>
                <span>Know Your Customer (KYC)</span>
              </h6>
            </FormGroup>
          </Col>
          <RSolutionNav
            text={"Lead Director - Passport"}
            name={"lds"}
            value={SN.lds}
            handleChange={(e) => {
              handleInput(e);
            }}
          />
          <RSolutionNav
            text={"Lead Director - Proof of Address"}
            name={"ldpoa"}
            value={SN.lpdoa}
            handleChange={(e) => {
              handleInput(e);
            }}
          />
          <RSolutionNav
            text={"Power of Attorney Document"}
            name={"poad"}
            value={SN.poad}
            handleChange={(e) => {
              handleInput(e);
            }}
          />
          <RSolutionNav
            text={"Second Director - Passport"}
            name={"sdp"}
            value={SN.sdp}
            handleChange={(e) => {
              handleInput(e);
            }}
          />
          <RSolutionNav
            text={"Second Director - Proof of Address"}
            name={"sdpoa"}
            value={SN.sdpoa}
            handleChange={(e) => {
              handleInput(e);
            }}
          />
          <RSolutionNav
            text={"Third Director - Passport"}
            name={"tdp"}
            value={SN.tdp}
            handleChange={(e) => {
              handleInput(e);
            }}
          />
          <RSolutionNav
            text={"Third Director - Proof of Address"}
            name={"tdpoa"}
            value={SN.tdpoa}
            handleChange={(e) => {
              handleInput(e);
            }}
          />
          <RSolutionNav
            text={"Fourth Director - Passport"}
            name={"fdp"}
            value={SN.fdp}
            handleChange={(e) => {
              handleInput(e);
            }}
          />
          <RSolutionNav
            text={"Fourth Director - Proof of Address"}
            name={"fdpoa"}
            value={SN.fdpoa}
            handleChange={(e) => {
              handleInput(e);
            }}
          />
          <Col md={10}>
            <FormGroup>
              <h6>
                <span>Know Your Business</span>
              </h6>
            </FormGroup>
          </Col>
          <RSolutionNav
            text={"Certificate of Incorporation"}
            name={"coi"}
            value={SN.coi}
            handleChange={(e) => {
              handleInput(e);
            }}
          />
          <RSolutionNav
            text={"Memorandum of Association"}
            name={"moa"}
            value={SN.moa}
            handleChange={(e) => {
              handleInput(e);
            }}
          />
          <RSolutionNav
            text={"Articles of Association"}
            name={"aoa"}
            value={SN.aoa}
            handleChange={(e) => {
              handleInput(e);
            }}
          />
          <RSolutionNav
            text={"Share Register"}
            name={"sr"}
            value={SN.sr}
            handleChange={(e) => {
              handleInput(e);
            }}
          />
          <RSolutionNav
            text={"Share Certificate(s) - Signed"}
            name={"scs"}
            value={SN.scs}
            handleChange={(e) => {
              handleInput(e);
            }}
          />
          <RSolutionNav
            text={"Current Commercial Register Extract"}
            name={"ccre"}
            value={SN.ccre}
            handleChange={(e) => {
              handleInput(e);
            }}
          />
          <Col md={10}>
            <FormGroup>
              <h6>
                <span>Supporting Documents</span>
              </h6>
            </FormGroup>
          </Col>
          <RSolutionNav
            text={"Corporate Bank Statements"}
            name={"cbs"}
            value={SN.cbs}
            handleChange={(e) => {
              handleInput(e);
            }}
          />
          <RSolutionNav
            text={"Personal Bank Statements"}
            name={"pbs"}
            value={SN.pbs}
            handleChange={(e) => {
              handleInput(e);
            }}
          />
          <RSolutionNav
            text={"Proof of Wealth"}
            name={"pow"}
            value={SN.pow}
            handleChange={(e) => {
              handleInput(e);
            }}
          />
          <RSolutionNav
            text={"Company AML Policy"}
            name={"cap"}
            value={SN.cap}
            handleChange={(e) => {
              handleInput(e);
            }}
          />
          <RSolutionNav
            text={"Gambling or Forex License"}
            name={"gfl"}
            value={SN.gfl}
            handleChange={(e) => {
              handleInput(e);
            }}
          />
          <RSolutionNav
            text={"Copywrite or Re-seller Agreement"}
            name={"cra"}
            value={SN.cra}
            handleChange={(e) => {
              handleInput(e);
            }}
          />
          <RSolutionNav
            text={"Fulfilment or Drop Shipping Agreement"}
            name={"fdsa"}
            value={SN.fdsa}
            handleChange={(e) => {
              handleInput(e);
            }}
          />
          <RSolutionNav
            text={"FBO Company Registration"}
            name={"fcr"}
            value={SN.fcr}
            handleChange={(e) => {
              handleInput(e);
            }}
          />
          <Col md={10}>
            <FormGroup>
              <h6>
                <span>Miscellaneous </span>
              </h6>
            </FormGroup>
          </Col>

          <RSolutionNav
            text={"Sales Handoff Sheet (CCBill Only)"}
            name={"shs"}
            value={SN.shs}
            handleChange={(e) => {
              handleInput(e);
            }}
          />

          <RSolutionNav
            text={"Confirmation & Declaration Form (GGS Only)"}
            name={"cdf"}
            value={SN.cdf}
            handleChange={(e) => {
              handleInput(e);
            }}
          />

          <RSolutionNav
            text={"SPARE"}
            name={"spare"}
            value={SN.spare}
            handleChange={(e) => {
              handleInput(e);
            }}
          />

          <RSolutionNav
            text={"SPARE"}
            name={"spare1"}
            value={SN.spare1}
            handleChange={(e) => {
              handleInput(e);
            }}
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

export default SolutionNav;
