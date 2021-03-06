import React, { useState } from "react";
// import pic from "./pp.jpg";
import {
  AiOutlineFolderView,
  AiFillEdit,
  AiOutlineReload,
  AiFillPlusCircle,
  AiOutlineDelete
} from "react-icons/ai";
import {
  Col,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  Label,
  CustomInput,
  
} from "reactstrap";
// import { Link } from "react-router-dom";
const SpChecklistR = (props) => {
  const [view, setView] = useState(false);

  const toggler = () => {
    setView(!view);
  };
  const handleClickRead = (e) => {
    console.log(props.path);
    // console.log(props.path.slice("./"));
    if (props.path != "") window.open(props.path);
    else alert("No file");
  };
  const handleClickEdit = (e) => {
    console.log("hi from edit");
  };
  const handleClickReload = (e) => {
    console.log("hi from reload");
  };

  // console.log(CL.fcaf_status);
  return (
    <React.Fragment>
      <Col md={3}>
        <Input
          type="text"
          name={props.nameT}
          value={props.valueT}
          placeholder={props.placeholder}
          onChange={props.onChangetext}
        ></Input>
      </Col>
      <Col style={{ marginLeft: "3%" }} md={-1}></Col>
      <Col md={-2}>
        <FormGroup>
          <Input
            className="custom-checkbox-lg"
            size={20}
            type="checkbox"
          ></Input>
        </FormGroup>
      </Col>
      <Col md={2}>
        <FormGroup>
          <Input type="file" id="CustomFileBrowser" name={props.fc} value={props.file} onChange={props.FileUpload} />
          {/* <Input
            type="file"
            name={props.fc}
            value={props.file}
            onChange={props.FileUpload}
          ></Input> */}
        </FormGroup>
      </Col>
      <Col md={1}>
        <AiOutlineFolderView
          path={props.path}
          color={props.path === "" ? "green" : "black"}
          size={30}
          onClick={(e) => {
            handleClickRead(e, props.path);
          }}
        />
      </Col>
      <Col md={3}>
        <FormGroup>
          <select
            className={
              // CL.fcaf_status === "Pending"
              //   ? "border-red custom-select"
              //   :
              "custom-select"
            }
            value={props.value}
            // id="1"
            name={props.name}
            onChange={props.Change}
          >
            <option value="Pending">Pending</option>
            <option value="Received">Received</option>
          </select>
        </FormGroup>
      </Col>
      <Col>
        <FormGroup>
          <AiFillEdit
            size={30}
            color={props.notesVal === undefined ? "green" : "black"}
            onClick={(e) => {
              setView(true) && handleClickEdit(e);
            }}
          />
        </FormGroup>
      </Col>
      <Col>
        <FormGroup>
          <AiOutlineReload
            size={30}
            onClick={(e) => {
              handleClickReload(e);
            }}
          />
        </FormGroup>
      </Col>
      <Col>
        <FormGroup>
          <AiFillPlusCircle

            size={30}
            onClick={props.add}
          />
        </FormGroup>
      </Col>
      <Col>
        <FormGroup>
          <AiOutlineDelete
            size={30}
            onClick={props.delete}
          />
        </FormGroup>
      </Col>
      <Modal isOpen={view} toggle={toggler}>
        <ModalHeader toggle={toggler}>Note</ModalHeader>
        <ModalBody style={{ backgroundColor: "#32CD32" }}>
          <textarea
            style={{ width: "100%" }}
            name={props.note}
            value={props.notesVal}
            onChange={props.notesHandle}
          />
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};
export default SpChecklistR;
