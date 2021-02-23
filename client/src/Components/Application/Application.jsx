import React from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";
import { useHistory } from "react-router-dom";

const Applications = () => {
  const history = useHistory();

  return (
    <div className="container" style={{ width: "20%", flexDirection: "row" }}>
      <div>
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

          <Button disabled>Pending</Button>
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
          <CardTitle tag="h5">TradingDAshboard</CardTitle>

          <Button disabled>Pending</Button>
        </Card>
      </div>
      <div></div>
    </div>
  );
};

export default Applications;
