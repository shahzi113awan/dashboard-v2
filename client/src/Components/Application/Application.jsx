import React from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";
import { Get, GetLive, GetTrading } from "../../actions/ciAction";

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
            <CardTitle tag="h5">Main Dashboard</CardTitle>

            <Button
              onClick={(e) => {
                dispatch(Get());
                history.push("/");
              }}
            >
              Go to Dashboard
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
            <CardTitle tag="h5">Clients</CardTitle>

            <Button
              onClick={(e) => {
                history.push("/ci");
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
            <CardTitle tag="h5">Live DAshboard</CardTitle>

            <Button
              onClick={(e) => {
                dispatch(GetLive());
                history.push("/LiveDb");
              }}
            >
              Go to Live Dashboard
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
            <CardTitle tag="h5">Trading Dashboard</CardTitle>

            <Button
              onClick={(e) => {
                dispatch(GetTrading());
                history.push("/TradingDb");
              }}
            >
              Go to Trading Dashboard
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Applications;
