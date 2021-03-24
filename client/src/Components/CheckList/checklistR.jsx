import React, { useState } from "react";
// import pic from "./pp.jpg";
import {
  AiOutlineFolderView,
  AiFillEdit,
  AiOutlineReload,
} from "react-icons/ai";
import {
  Col,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
// import { Link } from "react-router-dom";
const ChecklistR = (props) => {
  const path = "./pp.jpg";
  // const path = "../../assets/uploads/react-native.png";
  const [view, setView] = useState(false);
  // const [CL, setCL] = React.useState({
  //   fcaf_status: "",
  //   fcaf_fileName: "Pending",
  //   cdf_status: "pending",
  //   cdf_fileName: "fileName",

  //   bi_status: "pending",
  //   bi_fileName: "fileName",
  //   ota_status: "pending",
  //   ota_fileName: "fileName",
  //   aps_status: "pending",
  //   aps_fileName: "fileName",
  //   hwua_status: "pending",
  //   hwua_fileName: "fileName",
  //   wc_status: "pending",
  //   wc_fileName: "fileName",
  //   wuod_status: "pending",
  //   wuod_fileName: "fileName",
  //   owsc_status: "pending",
  //   owsc_fileName: "fileName",
  //   bp_status: "pending",
  //   bp_fileName: "fileName",
  //   ldp_status: "pending",
  //   ldp_fileName: "fileName",
  //   ldpa_status: "pending",
  //   ldpa_fileName: "fileName",
  //   pad_status: "pending",
  //   pad_fileName: "fileName",
  //   sdp_tatus: "pending",
  //   sdp_fileName: "fileName",
  //   sdpa_status: "pending",
  //   sdpa_fileName: "fileName",
  //   tdp_status: "pending",
  //   tdp_fileName: "fileName",
  //   tdpa_status: "pending",
  //   tdpa_fileName: "fileName",
  //   fdp_status: "pending",
  //   fdp_fileName: "fileName",
  //   fdpa_status: "pending",
  //   fdpa_fileName: "fileName",
  //   coi_status: "pending",
  //   coi_fileName: "fileName",
  //   moa_status: "pending",
  //   moa_fileName: "fileName",
  //   aoa_status: "pending",
  //   aoa_fileName: "fileName",
  //   sr_status: "pending",
  //   sr_fileName: "fileName",
  //   scs_status: "pending",
  //   scs_fileName: "fileName",
  //   ccre_status: "pending",
  //   ccre_fileName: "fileName",
  //   cbs_status: "pending",
  //   cbs_fileName: "fileName",
  //   pbs_status: "pending",
  //   pbs_fileName: "fileName",
  //   pow_status: "pending",
  //   pow_fileName: "fileName",
  //   cap_status: "pending",
  //   cap_fileName: "fileName",
  //   gofl_status: "pending",
  //   gofl_fileName: "fileName",
  //   cora_status: "pending",
  //   cora_fileName: "fileName",
  //   fodsa_status: "pending",
  //   fodsa_fileName: "fileName",
  //   status: "pending",
  //   fcr_fileName: "fileName",
  //   shs_status: "pending",
  //   shs_fileName: "fileName",
  //   df_status: "pending",
  //   df_fileName: "fileName",
  // });
  const toggler = () => {
    setView(!view);
  };
  const handleClickRead = (e) => {
    // console.log(props.path.slice("./"));
    console.log(props.notesVal);
    if (props.path != "fileName") window.open(props.path);
    else alert("No file");
    console.log(props.path);
    console.log(view);
    if (view) return <div></div>;
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
        <Input type="text" value={props.text} readOnly></Input>
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
          <Input
            type="file"
            name={props.fc}
            value={props.file}
            onChange={props.FileUpload}
          ></Input>
        </FormGroup>
      </Col>
      <Col md={1}>
        <AiOutlineFolderView
          path={props.path}
          color={props.path === "fileName" ? "green" : "black"}
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
            color={props.notesVal === " " ? "green" : "black"}
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
export default ChecklistR;
