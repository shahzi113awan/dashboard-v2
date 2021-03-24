import React from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";
import { Get } from "../../actions/solutionNavAction";
import { GetContacts } from "../../actions/contactAction";


const Applications = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className="container" style={{ width: "20%" }}>
      <div className="container" style={{ flexDirection: "row" }}>
        <div style={{ flex: 1 }}>
          <Card
            body
            inverse
            style={{
              backgroundColor: "#333",
              borderColor: "#333",
              marginBottom: "5%",
            }}
          >
            <CardTitle tag="h5">Contact List</CardTitle>

            <Button
              onClick={(e) => {
                              dispatch(GetContacts());

                history.push("/contact-list");
              }}
            >
              ContactList
            </Button>
          </Card>
        </div>
        <div style={{ flex: 1 }}>
          <Card
            body
            inverse
            style={{
              backgroundColor: "#333",
              borderColor: "#333",
              marginBottom: "5%",
            }}
          >
            <CardTitle tag="h5">Add Contact </CardTitle>

            <Button
              onClick={(e) => {
                history.push("/contact");
              }}
            >
              Add New Contact
            </Button>
          </Card>
        </div>
        <div>
          <Card
            body
            inverse
            style={{
              backgroundColor: "#3f3a3a",
              borderColor: "#333",
              marginBottom: "5%",
            }}
          >
            <CardTitle tag="h5">Add New Solution</CardTitle>

            <Button
              onClick={(e) => {
                history.push("/solution-nav");
              }}
            >
              Add new Client
            </Button>
          </Card>
        </div>
        <div>
          <Card
            body
            inverse
            style={{
              backgroundColor: "#3f3a3a",
              borderColor: "#333",
              marginBottom: "5%",
            }}
          >
            <CardTitle tag="h5"> Dashboard</CardTitle>

            <Button
              onClick={(e) => {
                dispatch(Get());
                history.push("/solution-DB");
              }}
            >
              Dashboard
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Applications;
