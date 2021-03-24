import React, { useState } from "react";

import { Col, FormGroup, Input, Label } from "reactstrap";
const RSolutionNav = (props) => {
  return (
    <React.Fragment>
      <Col md={6}>
        <Input type="text" value={props.text} readOnly></Input>
      </Col>

      <Col md={6}>
        <FormGroup>
          <Input
            className="custom"
            onChange={props.handleChange}
            required={true}
            type="text"
            value={props.value}
            name={props.name}
            id="Name"
            placeholder={props.placeholder}
          ></Input>
        </FormGroup>
      </Col>
    </React.Fragment>
  );
};
export default RSolutionNav;
