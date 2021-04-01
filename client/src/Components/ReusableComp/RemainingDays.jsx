import React from 'react'
import { Col, FormGroup, Label, Input, } from "reactstrap";
import moment from "moment";


export default function RemainingDays(props) {
    console.log(props.stdate, props.expdate);
    return (
        <div>
            <Col md={2}>
                <FormGroup >
                    <Label for="remainingDays">Remaining Days</Label>
                    <Input
                        style={{
                            backgroundColor:
                                moment
                                    .duration(
                                        moment(props.stdate).diff(
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
                            props.dateValue
                                ? Math.ceil(moment
                                    .duration(
                                        moment(new Date()).diff(
                                            moment(props.expdate)
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
}

