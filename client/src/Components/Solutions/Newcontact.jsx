import React, { useState, useEffect } from "react";
import { Col, Row, Form, FormGroup, Label, Button, Input } from "reactstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import RSolutionNav from "./ReusableComponents/RsolNavParam";
import Options from "./ReusableComponents/RParams";
import {
  CreateContact,
  GetOnecontact,
  UpdateOne,
} from "../../actions/contactAction";

const SolutionNavParam = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { urlid } = useParams();
  console.log(urlid);
  const data = useSelector((state) => state.contactReducer.state);
  //   const id = useSelector((state) => state.solReducer.id);
  console.log(data);
  useEffect(() => {
    urlid ? dispatch(GetOnecontact(urlid)) : console.log("creating");
  }, [urlid]);
  const [Contact, setContact] = useState({
    fn: "",
    comp: "",
    jt: "",
    fa: "",
    email: "",
    da: "",
    waAdd: "",
    IMAdd: "",
    business: "",
    home: "",
    Bfax: "",
    mob: "",
    Add: "",
  });
  console.log(Contact);
  useEffect(() => {
    setContact(data);
  }, [data]);

  const handleChange = (e) => {
    setContact({
      ...Contact,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    setContact(Contact);
  }, Contact);

  const onSubmit = async (e) => {
    await dispatch(CreateContact(Contact));

    history.push("/solution-app");
  };
  const onUpdateSubmit = async () => {
    await dispatch(UpdateOne(Contact, urlid));

    history.push("/solution-app/");
  };
  return (
    <div className="container">
      <div style={{ display: "flex" }}>
        <div style={{ alignContent: "flex-start" }}>
          <h2>
            <span class="badge badge-success">SOLUTION CONTACTS</span>
          </h2>
        </div>
        <div style={{ alignContent: "flex-end" }}>
          {/* <div style={{ width: "100%", border: "1px solid black" }}>
            <h1>hahah</h1>
          </div> */}
        </div>
      </div>
      <Form>
        <Row form>
          <RSolutionNav
            text={"Full Name"}
            value={Contact.fn}
            name="fn"
            handleChange={(e) => handleChange(e)}
            placeholder={"Solution Name"}
          />
          <RSolutionNav
            text={"Company"}
            value={Contact.comp}
            name="comp"
            handleChange={(e) => handleChange(e)}
            placeholder={"Company Name"}
          />
          <RSolutionNav
            text={"Job Title"}
            value={Contact.jt}
            name="jt"
            handleChange={(e) => handleChange(e)}
            placeholder={"Job Title"}
          />
          <RSolutionNav
            text={"File As"}
            value={Contact.fa}
            name="fa"
            handleChange={(e) => handleChange(e)}
            placeholder={"File As"}
          />
          <Col md={10}>
            <FormGroup>
              <h6>
                <span>Internet</span>
              </h6>
            </FormGroup>
          </Col>
          <RSolutionNav
            text={"Email"}
            value={Contact.email}
            name="email"
            handleChange={(e) => handleChange(e)}
            placeholder={"Email"}
          />
          <RSolutionNav
            text={"Display As"}
            value={Contact.da}
            name="da"
            handleChange={(e) => handleChange(e)}
            placeholder={"Display As"}
          />
          <RSolutionNav
            text={"Web Page Address"}
            value={Contact.waAdd}
            name="waAdd"
            handleChange={(e) => handleChange(e)}
            placeholder={"Web App Address"}
          />
          <RSolutionNav
            text={"IM Address"}
            value={Contact.IMAdd}
            name="IMAdd"
            handleChange={(e) => handleChange(e)}
            placeholder={"IM Address"}
          />
          <Col md={10}>
            <FormGroup>
              <h6>
                <span>Phone Numbers</span>
              </h6>
            </FormGroup>
          </Col>
          <RSolutionNav
            text={"Business"}
            value={Contact.business}
            name="business"
            handleChange={(e) => handleChange(e)}
            placeholder={"Business Contact"}
          />
          <RSolutionNav
            text={"Home"}
            value={Contact.home}
            name="home"
            handleChange={(e) => handleChange(e)}
            placeholder={"Home Contact"}
          />
          <RSolutionNav
            text={"Business Fax"}
            value={Contact.Bfax}
            name="Bfax"
            handleChange={(e) => handleChange(e)}
            placeholder={"Business Fax"}
          />
          <RSolutionNav
            text={"Mobile"}
            value={Contact.mob}
            name="mob"
            handleChange={(e) => handleChange(e)}
            placeholder={"Mobile Contact"}
          />
          <Col md={10}>
            <FormGroup>
              <h6>
                <span>Address</span>
              </h6>
            </FormGroup>
          </Col>
          <RSolutionNav
            text={"Address"}
            value={Contact.Add}
            name="Add"
            handleChange={(e) => handleChange(e)}
            placeholder={"Address"}
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
