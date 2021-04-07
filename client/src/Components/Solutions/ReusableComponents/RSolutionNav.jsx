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
          <select
            className={"custom-select"}
            value={props.value}
            name={props.name}
            onChange={props.handleChange}
          >
            <option>Pending</option>
            <option>Not Required</option>
            <option>If Available</option>
          </select>
        </FormGroup>
      </Col>
    </React.Fragment>
  );
};
export default RSolutionNav;
