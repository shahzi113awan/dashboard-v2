import React from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";
import { useHistory } from "react-router-dom";

const MainApp = () => {
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
          <CardTitle tag="h5">Approval  Dashboard</CardTitle>

          <Button
            onClick={(e) => {
              history.push("/appdb");
            }}
          >
            Go to Approval Dashboard
          </Button>
        </Card>
      </div>
      <div>
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
          <CardTitle tag="h5">Lost Dashboard</CardTitle>

          <Button
            onClick={(e) => {
              history.push("/lostappdb");
            }}
          >
            Go to Lost Dashboard
          </Button>
        </Card>
      </div>
      <div></div>
        <Card
          body
          inverse
          style={{
            backgroundColor: "#3f3a3a",
            borderColor: "#333",
            marginBottom: "5%",
          }}
        >
          <CardTitle tag="h5">Add New</CardTitle>

          <Button
            onClick={(e) => {
              history.push("/app");
            }}
          >
            Add new Client
          </Button>
        </Card>
      </div>
      
        
    </div>
  );
};

export default MainApp;
