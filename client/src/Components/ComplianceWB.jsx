import React, { useState, useEffect } from "react";
import $ from "jquery";
import "../assets/css/trading-book.css";
import TR from "./WBReusable/ComplianceR";
import SpareTR from "./WBReusable/ComplianceSpareR";
import TR1 from "./WBReusable/ComplianceR1";
import TRN from "./WBReusable/ComplianceRNotes";
import TRNR from "./WBReusable/ComplianceRNotesR";
import TR2 from "./WBReusable/ComplianceR2";
import moment from "moment";
import { Link, useHistory, useParams } from "react-router-dom";
import ChecklistR from "./CheckList/checklistR";
import SpChecklistR from "./CheckList/spchecklistR";
import { useDispatch, useSelector } from "react-redux";
import { CreateCL, GetOneCL } from "../actions/clAction";
import { Get, setLoading, GetOneCI } from "../actions/ciAction";
import axios from "axios";
import Loader from "react-loader-spinner";
import { firebase } from "../Config";
import CI from "./CI";
import KYC from "./KYC";
import KYB from "./KYB";
import SDC from "./supportingDocKYB";
import { CreateSpare } from "../actions/spareAction";
import {
  CreateNotes,
  GetOneNotes,
  INITIATENotes,
} from "../actions/notesActions";

import { FaDraft2Digital } from "react-icons/fa";
import { GetOneKYB } from "../actions/kybAction";
import { GetOneKYC } from "../actions/kycAction";

export default function PreApproval() {
  const dispatch = useDispatch();
  const [view, setView] = useState(false);

  const history = useHistory();
  const data = useSelector((state) => state.clReducer.state);
  const data1 = useSelector((state) => state.ciReducer.state);

  console.log(data1);
  const SpareData = useSelector((state) => state.SpareReducer.state);
  const NotesData = useSelector((state) => state.NotesReducer.state);
  console.log(NotesData);
  const id = useSelector((state) => state.ciReducer.id);
  //States

  const [image, setImage] = useState("");
  const [countArr, setcountArr] = useState([]);

  const [url, setURL] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { urlid } = useParams();
  const link = `/sdkyb/${urlid}`;

  useEffect(() => {
    urlid
      ? dispatch(GetOneCL(urlid)) &&
        setcountArr(data.pendingCount) &&
        dispatch(GetOneCI(urlid))
      : console.log("creating");
  }, [urlid]);
  useEffect(() => {
    urlid
      ? dispatch(GetOneCI(urlid)) && dispatch(GetOneNotes(urlid))
      : console.log("creating");
  }, [urlid]);
  const [Spare, setSpare] = useState([
    {
      text: "",
      note: "",
      status: "",
      path: "",
    },
  ]);
  const [Notes, setNotes] = useState([
    {
      text: "",
      date: "",
    },
  ]);

  const [CL, setCL] = React.useState({
    pendingCount: [],
    fcaf_status: "pending",
    fcaf_fileName: "fileName",
    fcaf_note: " ",
    cdf_status: "pending",
    cdf_fileName: "fileName",
    cdf_note: " ",
    bi_status: "pending",
    bi_fileName: "fileName",
    bi_note: " ",
    ota_status: "pending",
    ota_fileName: "fileName",
    ota_note: " ",
    aps_status: "pending",
    aps_fileName: "fileName",
    aps_note: " ",
    hwua_status: "pending",
    hwua_fileName: "fileName",
    hwua_note: " ",
    wc_status: "pending",
    wc_fileName: "fileName",
    wc_note: " ",
    wuod_status: "pending",
    wuod_fileName: "fileName",
    wuod_note: " ",
    owsc_status: "pending",
    owsc_fileName: "fileName",
    owsc_note: " ",
    bp_status: "pending",
    bp_fileName: "fileName",
    bp_note: " ",
    ldp_status: "pending",
    ldp_fileName: "fileName",
    ldp_note: " ",
    ldpa_status: "pending",
    ldpa_fileName: "fileName",
    ldpa_note: " ",
    pad_status: "pending",
    pad_fileName: "fileName",
    pad_note: " ",
    sdp_status: "pending",
    sdp_fileName: "fileName",
    sdp_note: " ",
    sdpa_status: "pending",
    sdpa_fileName: "fileName",
    sdpa_note: " ",
    tdp_status: "pending",
    tdp_fileName: "fileName",
    tdp_note: " ",
    tdpa_status: "pending",
    tdpa_fileName: "fileName",
    tdpa_note: " ",
    fdp_status: "pending",
    fdp_fileName: "fileName",
    fdp_note: " ",
    fdpa_status: "pending",
    fdpa_fileName: "fileName",
    fdpa_note: " ",
    coi_status: "pending",
    coi_fileName: "fileName",
    coi_note: " ",
    moa_status: "pending",
    moa_fileName: "fileName",
    moa_note: " ",
    aoa_status: "pending",
    aoa_fileName: "fileName",
    aoa_note: " ",
    sr_status: "pending",
    sr_fileName: "fileName",
    sr_note: " ",
    scs_status: "pending",
    scs_fileName: "fileName",
    scs_note: " ",
    ccre_status: "pending",
    ccre_fileName: "fileName",
    ccre_note: " ",
    cbs_status: "pending",
    cbs_fileName: "fileName",
    cbs_note: " ",
    pbs_status: "pending",
    pbs_fileName: "fileName",
    pbs_note: " ",
    pow_status: "pending",
    pow_fileName: "fileName",
    pow_note: " ",
    cap_status: "pending",
    cap_fileName: "fileName",
    cap_note: " ",
    gofl_status: "pending",
    gofl_fileName: "fileName",
    gofl_note: " ",
    cora_status: "pending",
    cora_fileName: "fileName",
    cora_note: " ",
    fodsa_status: "pending",
    fodsa_fileName: "fileName",
    fodsa_note: " ",
    status: "pending",
    fcr_fileName: "fileName",
    fcr_note: " ",
    shs_status: "pending",
    shs_fileName: "fileName",
    shs_note: " ",
    df_status: "pending",
    df_fileName: "fileName",
    df_note: " ",
    clg_status: "",
    clg_fileName: "fileName",
    TIC1: "",
    TIC2: "",
    TIC3: "",
    TIC4: "",
    TIC5: "",
    TIC6: "",
    TIC7: "",
    TIC8: "",
    TIC9: "",
    TIC21: "",
    TIC22: "",
    TIC23: "",
    TIC24: "",
    TIC25: "",
    TIC26: "",
    TIC27: "",
    TIC28: "",
    TIC29: "",

    KYCC1: "",
    KYCC2: "",
    KYCC3: "",
    KYCC4: "",
    KYCC5: "",
    KYCC6: "",
    KYCC7: "",
    KYCC8: "",
    KYCC9: "",
    KYCC10: "",
    KYCC21: "",
    KYCC22: "",
    KYCC23: "",
    KYCC24: "",
    KYCC25: "",
    KYCC26: "",
    KYCC27: "",
    KYCC28: "",
    KYCC29: "",

    KYBC1: "",
    KYBC2: "",
    KYBC3: "",
    KYBC4: "",
    KYBC5: "",
    KYBC6: "",
    KYBC7: "",
    KYBC8: "",
    KYBC9: "",
    KYBC10: "",
    KYBC21: "",
    KYBC22: "",
    KYBC23: "",
    KYBC24: "",
    KYBC25: "",
    KYBC26: "",
    KYBC27: "",
    KYBC28: "",
    KYBC29: "",

    SDC1: "",
    SDC2: "",
    SDC3: "",
    SDC4: "",
    SDC5: "",
    SDC6: "",
    SDC7: "",
    SDC8: "",
    SDC9: "",
    SDC10: "",
    SDC21: "",
    SDC22: "",
    SDC23: "",
    SDC24: "",
    SDC25: "",
    SDC26: "",
    SDC27: "",
    SDC28: "",
    SDC29: "",

    ti: "",
    kyc: "",
    kyb: "",
    sd: "",
    md: "",
    cb: "",
    sent: "",
    sentdate: "",
    ti_status: "pending",
    kyc_status: "pending",
    kyb_status: "pending",
    kyb_status: "pending",
    checkby: "",
    senttosolby: "",
    sentDate: "",
    spare: "",
    spare1: "",
    spare2: "",
    spare3: "",
    spare4: "",
    spare5: "",
    spare_Text: "",
    spare1_Text: "",
    spare2_Text: "",
    spare3_Text: "",
    spare4_Text: "",
    spare5_Text: "",
    spare_fileName: "",
    spare1_fileName: "",
    spare2_fileName: "",
    spare3_fileName: "",
    spare4_fileName: "",
    spare5_fileName: "",
  });
  //Spare Section -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=--
  useEffect(() => {
    setSpare(SpareData);
  }, [SpareData]);
  useEffect(() => {
    setNotes(NotesData);
  }, [NotesData]);
  const handletextSpare = async (e, index) => {
    e.preventDefault();
    const { name, value } = e.target;
    const list = [...Spare];
    list[index][name] = value;
    setSpare(list);
  };

  const handleChangeSpare = async (e, index) => {
    e.preventDefault();
    const { name, value } = e.target;
    const list = [...Spare];
    list[index][name] = value;
    setSpare(list);
  };
  const handleNotesSpare = async (e, index) => {
    e.preventDefault();
    const { name, value } = e.target;
    const list = [...Spare];
    list[index][name] = value;
    setSpare(list);
  };
  // handle click event of the Add button
  const handleAddClick = (e) => {
    e.preventDefault();
    setSpare([
      ...Spare,
      {
        sparetext: "",
        spare_status: "",
        spare_fileName: "",
      },
    ]);
  };
  const toggler = () => {
    setView(!view);
  };
  //handle add and remove
  const handleRemoveClick = (e, index) => {
    const list = [...Spare];
    list.splice(index, 1);
    setSpare(list);
  };
  const ImageHandlerSpare = async (e, index) => {
    console.log(e.target.name);
    const file = e.target.files[0];
    const fileName = e.target.files[0].name;
    // console.log(fileName);
    // console.log(e.target.name);
    const formData = new FormData();
    formData.append("", file);
    setIsLoading(true);
    try {
      let fName = new Date().getTime() + "_" + fileName;
      const uploadTask = firebase.storage().ref(`/files/${fName}`).put(file);
      uploadTask.on("state_changed", console.log, console.error, () => {
        firebase
          .storage()
          .ref("files")
          .child(fName)
          .getDownloadURL()
          .then((url) => {
            // file = null
            setURL(url);
            console.log(url);
            // const config = {
            //   headers: {
            //     "Content-Type": "multipart/form-data",
            //   },
            // };
            // const { data } = axios.post("api/upload", formData, config);
            setImage(url);
            e.preventDefault();
            const { name, value } = e.target;
            const list = [...Spare];
            list[index][name] = url;
            setSpare(list);
            setIsLoading(false);
          });
      });
    } catch (error) {
      console.log(error);
    }
    console.log(NotesData);
  };

  //Spare section End-=-=-=-=====-=-=-=-==============-=---=-=-=-===============-
  //HAndlers..............................................................
  const notesTextHandler = async (e, index) => {
    console.log("hell");
    e.preventDefault();
    const { name, value } = e.target;
    console.log(name);
    const list = [...Notes];
    list[index][name] = value;
    setNotes(list);
  };
  const handleDateChange = async (e, index) => {
    e.preventDefault();
    const { name, value } = e.target;
    const list = [...Notes];
    list[index][name] = value;
    setNotes(list);
  };

  const handleAddNotes = (e) => {
    e.preventDefault();
    setNotes([
      ...Notes,
      {
        text: "",
        date: "",
      },
    ]);
  };
  const handleCheck = (e) => {
    setCL({
      ...CL,
      [e.target.name]: e.target.checked,
    });
  };
  useEffect(() => {
    setcountArr(data.pendingCount);
    setCL(data);
  }, [data]);
  // console.log(CL);

  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(countArr);
    if (e.target.value === "Received") {
      countArr.push(e.target.value);
    } else {
      countArr.pop(e.target.value);
    }

    setCL({
      ...CL,
      [e.target.name]: e.target.value,
    });
  };

  // const handleChangeSpare = (e) => {
  //   setCL({
  //     ...CL,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  const handleNotes = (e) => {
    setCL({
      ...CL,
      [e.target.name]: e.target.value,
    });
  };
  console.log(isLoading);
  // console.log(CL);
  //ImageHandler
  const ImageHandler = async (e) => {
    console.log(e.target.name);
    const file = e.target.files[0];
    const fileName = e.target.files[0].name;
    // console.log(fileName);
    // console.log(e.target.name);
    const formData = new FormData();
    formData.append("", file);
    setIsLoading(true);
    try {
      let fName = new Date().getTime() + "_" + fileName;
      const uploadTask = firebase.storage().ref(`/files/${fName}`).put(file);
      uploadTask.on("state_changed", console.log, console.error, () => {
        firebase
          .storage()
          .ref("files")
          .child(fName)
          .getDownloadURL()
          .then((url) => {
            // file = null
            setURL(url);
            console.log(url);
            // const config = {
            //   headers: {
            //     "Content-Type": "multipart/form-data",
            //   },
            // };
            // const { data } = axios.post("api/upload", formData, config);
            setImage(url);
            setCL({
              ...CL,
              [e.target.name]: url,
            });
            setIsLoading(false);
          });
      });
    } catch (error) {
      console.log(error);
    }
    console.log(url);
  };

  console.log(Notes);
  const onSubmit = async (e) => {
    e.preventDefault();

    urlid
      ? (await dispatch(CreateCL(CL, urlid))) && dispatch(Get())
      : dispatch(CreateCL(CL, id)) && dispatch(Get());
    urlid
      ? await dispatch(CreateSpare(Spare, urlid))
      : dispatch(CreateSpare(Spare, id));
    urlid
      ? await dispatch(CreateNotes(Notes, urlid))
      : dispatch(CreateNotes(Notes, id));

    history.push("/");
  };
  const handleReset = (check1, check2, file, status) => {
    setCL({
      ...CL,
      [check1]: false,
      [check2]: false,
      [file]: "fileName",
      [status]: "pending",
    });
  };
  console.log(CL);
  return (
    <div class="compliance-dashboard-card">
      <div class="container-fluid">
        <table>
          <thead>
            <tr>
              <td width="5%">
                <div class="compliance-td-fonts yellobg text-center">Ref:</div>
              </td>
              <td width="19%">
                <div class="compliance-td-fonts yellobg text-center">
                  COMPANY NAME
                </div>
              </td>
              <td width="10%">
                <div class="compliance-td-fonts yellobg text-center">
                  SOLUTION{" "}
                </div>
              </td>
              <td width="10%">
                <div class="compliance-td-fonts yellobg text-center">
                  APPLICATION DATE
                </div>
              </td>
              <td width="10%">
                <div class="compliance-td-fonts yellobg text-center">
                  Trading Sector Product
                </div>
              </td>
              <td width="10%">
                <div class="compliance-td-fonts yellobg text-center">
                  Trading / New To Cards
                </div>
              </td>
              <td width="8%">
                <div class="compliance-td-fonts yellobg text-center">
                  Vertical / Trading Sector
                </div>
              </td>
              <td width="8%">
                <div class="compliance-td-fonts yellobg text-center">
                  Compliance Country Location
                </div>
              </td>
              <td width="8%">
                <div class="compliance-td-fonts yellobg text-center">
                  Licence Yes / No
                </div>
              </td>
              <td width="12%">&nbsp;</td>
            </tr>
            <tr>
              <td width="5%">
                <div class="compliance-small-fonts">AP-003</div>
              </td>
              <td width="19%">
                <div class="compliance-small-fonts blueborder">
                  {data1.tpi_rcName}
                </div>
              </td>
              <td width="10%">
                <div class="compliance-small-fonts blueborder">
                  {data1.tpi_aaSolution}
                </div>
              </td>
              <td width="10%">
                <div class="compliance-small-fonts blueborder">
                  {data1.tpi_date ? data1.tpi_date : "defalut"}
                </div>
              </td>
              <td width="10%">
                <div class="compliance-small-fonts">Adult / Dating</div>
              </td>
              <td width="10%">
                <div class="compliance-small-fonts text-center">
                  {data1.tpi_ntc}
                </div>
              </td>
              <td width="8%">
                <div class="compliance-small-fonts text-center">
                  {data1.tpi_vtSector}
                </div>
              </td>
              <td width="8%">
                <div class="compliance-small-fonts">{data1.tpi_ccLocation}</div>
              </td>
              <td width="8%">
                <div class="compliance-small-fonts">{data1.tpi_TLoAR}</div>
              </td>
              <td width="12%">&nbsp;</td>
            </tr>
          </thead>
        </table>

        <table>
          <thead>
            <tr>
              <td width="35%" valign="top">
                <table width="100%">
                  <tbody>
                    <tr>
                      <td width="12%">
                        <div
                          data-toggle="modal"
                          data-target="#exampleModal"
                          // to={`/ci/${urlid}`}
                          class="compliance-td-fonts blueborder text-center"
                        >
                          <img src="/images/card-img10.png" />
                        </div>
                      </td>
                      <td width="76%">&nbsp;</td>
                      <td width="12%">
                        <a
                          href="#"
                          class="compliance-td-fonts blueborder text-center"
                        >
                          <img src="/images/card-img7.png" />
                        </a>
                        {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button> */}

                        <div
                          class="modal fade"
                          id="exampleModal"
                          tabindex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog modal-dialog-scrollable">
                            <div class="modal-content">
                              <div class="modal-body">
                                <CI ide={urlid} />
                              </div>
                              <div class="modal-footer">
                                <button
                                  onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(GetOneCI(urlid));
                                  }}
                                  type="button"
                                  class="btn btn-secondary"
                                  data-dismiss="modal"
                                >
                                  Close
                                </button>
                                {/* <button type="button" class="btn btn-primary">Save changes</button> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table width="100%">
                  <tbody>
                    <tr>
                      <td colspan="2" width="65%" valign="top">
                        <div class="tradding-title min_heightt marign_bt3">
                          TRADING INFORMATION
                        </div>
                      </td>
                      <td width="35%">
                        <div class="tradding-title min_heightt marign_bt3">
                          {" "}
                          DOCUMENT STATUS
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td width="7%" class="border_2" rowspan="10">
                        <div class="compliance-td-fonts text-rotate-div">
                          <span class="text-rotate">
                            COMPANY DOCUMENTS / WEBSITE REVIEW
                          </span>
                        </div>
                      </td>
                    </tr>

                    <TR
                      name1={"Fully Completed Application Form"}
                      status={CL.fcaf_status}
                      name={"fcaf_status"}
                      Change={(e) => {
                        handleChange(e);
                      }}
                    />
                    <TR
                      name1={"Bank Information (Welcome Letter)"}
                      name={"bi_status"}
                      status={CL.bi_status}
                      Change={(e) => {
                        handleChange(e);
                      }}
                    />
                    <TR
                      name1={"Office Tenancy Agreement"}
                      name={"ota_status"}
                      status={CL.ota_status}
                      Change={(e) => {
                        handleChange(e);
                      }}
                    />
                    <TR
                      name1={"Acquiring Processing Statements"}
                      name={"aps_status"}
                      status={CL.aps_status}
                      Change={(e) => {
                        handleChange(e);
                      }}
                    />
                    <TR
                      name1={"Headline Website URL Address"}
                      name={"hwua_status"}
                      status={CL.hwua_status}
                      Change={(e) => {
                        handleChange(e);
                      }}
                    />
                    <TR
                      name1={"Website Compliance"}
                      name={"wc_status"}
                      status={CL.wc_status}
                      Change={(e) => {
                        handleChange(e);
                      }}
                    />
                    <TR
                      name1={"Website URL - Proof of Domain"}
                      name={"wuod_status"}
                      status={CL.wuod_status}
                      Change={(e) => {
                        handleChange(e);
                      }}
                    />
                    <TR
                      name1={"Ownership Structure Chart"}
                      name={"owsc_status"}
                      status={CL.owsc_status}
                      Change={(e) => {
                        handleChange(e);
                      }}
                    />
                    <TR
                      name1={"Business Plan"}
                      name={"bp_status"}
                      status={CL.bp_status}
                      Change={(e) => {
                        handleChange(e);
                      }}
                    />
                  </tbody>
                </table>
              </td>
              <td width="30%" valign="top">
                <table width="100%">
                  <tbody>
                    <tr>
                      <td width="5%">&nbsp;</td>
                      <td width="15%">
                        <a
                          href="#"
                          class="compliance-td-fonts blueborder text-center"
                        >
                          <img src="/images/card-img6.png" />
                        </a>
                      </td>
                      <td width="5%">&nbsp;</td>
                      <td width="50%">
                        <div class="compliance-td-fonts blueborder redcolor text-center">
                          TOTAL AGED DAYS
                        </div>
                      </td>
                      <td width="5%">&nbsp;</td>
                      <td width="15%">
                        <div class="compliance-td-fonts blueborder redcolor text-center">
                          25
                        </div>
                      </td>
                      <td width="5%">&nbsp;</td>
                    </tr>
                    <tr>
                      <td width="5%">&nbsp;</td>
                      <td width="15%">
                        <div class="checkbox-workbook text-center zero-padding min_heightt marign_bt">
                          <div class="checkbox">
                            <input
                              style={{ border: "2px solid black" }}
                              type="checkbox"
                              onChange={(e) => {
                                handleCheck(e);
                              }}
                              id="check9"
                              name="merchant-checkbox"
                            />
                            <label for="check9"></label>
                          </div>
                        </div>
                      </td>
                      <td width="5%">&nbsp;</td>
                      <td width="50%">
                        <table width="100%" cellspacing="0">
                          <tbody>
                            <tr>
                              <td width="30%">
                                <a
                                  href="#"
                                  class="compliance-td-fonts yellobg text-center min_heightt marign_bt"
                                >
                                  <img src="/images/card-img10.png" />
                                </a>
                              </td>
                              <td width="5%">&nbsp;</td>
                              <td width="30%">
                                <a
                                  href="#"
                                  class="compliance-td-fonts yellobg text-center min_heightt marign_bt"
                                >
                                  <img src="/images/card-img7.png" />
                                </a>
                              </td>
                              <td width="5%">&nbsp;</td>
                              <td width="30%">
                                <a
                                  href="#"
                                  class="compliance-td-fonts yellobg text-center min_heightt marign_bt"
                                >
                                  <img src="/images/card-img8.png" />
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      <td width="5%">&nbsp;</td>
                      <td width="15%">
                        <a
                          href="#"
                          class="compliance-td-fonts yellobg text-center min_heightt marign_bt"
                        >
                          <img src="/images/card-img9.png" />
                        </a>
                      </td>
                      <td width="5%">&nbsp;</td>
                    </tr>
                    {/* <TR1
                      checked2={true}
                      checkName={"TIC1"}
                      checkName2={"TIC21"}
                      id2={"check9"}
                      id1={"check10"}
                      id3={"check11"}
                      fc="fcaf_fileName"
                      check1={(e) => {
                        handleCheck(e);
                      }}
                      checked={true}
                      FileUpload={(e) => {
                        ImageHandler(e);
                      }}
                      resetHandler={(e) => {
                        handleReset(
                          "TIC2",
                          "TIC21",
                          "fcaf_fileName",
                          "fcaf_status"
                        );
                      }}
                    /> */}
                    <TR1
                      checkName={"TIC2"}
                      checkName2={"TIC21"}
                      fc="fcaf_fileName"
                      checked={CL.TIC2}
                      checked2={CL.TIC21}
                      path={CL.fcaf_fileName}
                      check1={(e) => {
                        handleCheck(e);
                      }}
                      FileUpload={(e) => {
                        ImageHandler(e);
                      }}
                      resetHandler={(e) => {
                        handleReset(
                          "TIC2",
                          "TIC21",
                          "fcaf_fileName",
                          "fcaf_status"
                        );
                      }}
                    />
                    <TR1
                      checkName={"TIC3"}
                      checkName2={"TIC22"}
                      fc="bi_fileName"
                      checked={CL.TIC3}
                      checked2={CL.TIC22}
                      path={CL.bi_fileName}
                      check1={(e) => {
                        handleCheck(e);
                      }}
                      FileUpload={(e) => {
                        ImageHandler(e);
                      }}
                      resetHandler={(e) => {
                        handleReset(
                          "TIC3",
                          "TIC22",
                          "bi_fileName",
                          "bi_status"
                        );
                      }}
                    />
                    <TR1
                      checkName={"TIC4"}
                      checkName2={"TIC23"}
                      fc="ota_fileName"
                      checked={CL.TIC4}
                      checked2={CL.TIC23}
                      path={CL.ota_fileName}
                      check1={(e) => {
                        handleCheck(e);
                      }}
                      FileUpload={(e) => {
                        ImageHandler(e);
                      }}
                      resetHandler={(e) => {
                        handleReset(
                          "TIC4",
                          "TIC23",
                          "ota_fileName",
                          "ota_status"
                        );
                      }}
                    />
                    <TR1
                      checkName={"TIC5"}
                      checkName2={"TIC24"}
                      fc="aps_fileName"
                      checked={CL.TIC5}
                      checked2={CL.TIC24}
                      path={CL.aps_fileName}
                      check1={(e) => {
                        handleCheck(e);
                      }}
                      FileUpload={(e) => {
                        ImageHandler(e);
                      }}
                      resetHandler={(e) => {
                        handleReset(
                          "TIC5",
                          "TIC24",
                          "aps_fileName",
                          "aps_status"
                        );
                      }}
                    />
                    <TR1
                      checkName={"TIC6"}
                      checkName2={"TIC25"}
                      fc="hwua_fileName"
                      checked={CL.TIC6}
                      checked2={CL.TIC25}
                      path={CL.hwua_fileName}
                      check1={(e) => {
                        handleCheck(e);
                      }}
                      FileUpload={(e) => {
                        ImageHandler(e);
                      }}
                      resetHandler={(e) => {
                        handleReset(
                          "TIC6",
                          "TIC25",
                          "hwua_fileName",
                          "hwua_status"
                        );
                      }}
                    />
                    <TR1
                      checkName={"TIC7"}
                      checkName2={"TIC26"}
                      fc="wc_fileName"
                      checked={CL.TIC7}
                      checked2={CL.TIC26}
                      path={CL.wc_fileName}
                      check1={(e) => {
                        handleCheck(e);
                      }}
                      FileUpload={(e) => {
                        ImageHandler(e);
                      }}
                      resetHandler={(e) => {
                        handleReset(
                          "TIC7",
                          "TIC26",
                          "wc_fileName",
                          "wc_status"
                        );
                      }}
                    />
                    <TR1
                      checkName={"TIC8"}
                      checkName2={"TIC27"}
                      fc="wuod_fileName"
                      checked={CL.TIC8}
                      checked2={CL.TIC27}
                      path={CL.wuod_fileName}
                      check1={(e) => {
                        handleCheck(e);
                      }}
                      FileUpload={(e) => {
                        ImageHandler(e);
                      }}
                      resetHandler={(e) => {
                        handleReset(
                          "TIC8",
                          "TIC27",
                          "wuod_fileName",
                          "wuod_status"
                        );
                      }}
                    />
                    <TR1
                      checkName={"TIC9"}
                      checkName2={"TIC28"}
                      fc="owsc_fileName"
                      checked={CL.TIC9}
                      checked2={CL.TIC28}
                      path={CL.owsc_fileName}
                      check1={(e) => {
                        handleCheck(e);
                      }}
                      FileUpload={(e) => {
                        ImageHandler(e);
                      }}
                      resetHandler={(e) => {
                        handleReset(
                          "TIC9",
                          "TIC28",
                          "owsc_fileName",
                          "owsc_status"
                        );
                      }}
                    />
                    <TR1
                      checkName={"TIC10"}
                      checkName2={"TIC29"}
                      fc="bp_fileName"
                      checked={CL.TIC10}
                      checked2={CL.TIC29}
                      path={CL.bp_fileName}
                      check1={(e) => {
                        handleCheck(e);
                      }}
                      FileUpload={(e) => {
                        ImageHandler(e);
                      }}
                      resetHandler={(e) => {
                        handleReset(
                          "TIC10",
                          "TIC29",
                          "bp_fileName",
                          "bp_status"
                        );
                      }}
                    />
                  </tbody>
                </table>
              </td>
              <td width="35%" valign="top">
                <TRN />
                {Notes.map((res, id) => {
                  return (
                    <TRNR
                      length={res.length}
                      name={"text"}
                      nameD={"date"}
                      valueD={res.date}
                      value={res.text}
                      dateChange={(e) => {
                        handleDateChange(e, id);
                      }}
                      textChangeHandle={(e) => {
                        notesTextHandler(e, id);
                      }}
                    />
                  );
                })}
                <button className="btn btn-primary" onClick={handleAddNotes}>
                  Add Note
                </button>
              </td>
            </tr>
          </thead>
        </table>

        <div class="accordion" id="accordionExample">
          <div class="card">
            <div class="card-header" id="headingOne">
              <h2 class="mb-0">
                <button
                  class="btn  btn-block collapsed text-left"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  KNOW YOUR CUSTOMER (KYC)
                </button>
              </h2>
            </div>

            <div
              id="collapseOne"
              class="collapse"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <table>
                <thead>
                  <tr>
                    <td width="35%" valign="top">
                      <table width="100%">
                        <tbody>
                          <tr>
                            <td width="10%">
                              <div
                                data-toggle="modal"
                                data-target="#exampleModal1"
                                href="#"
                                class="compliance-td-fonts blueborder text-center"
                              >
                                <img src="/images/card-img10.png" />
                              </div>
                            </td>
                            <td width="3%">&nbsp;</td>

                            <td width="10%">
                              <div
                                data-toggle="modal"
                                data-target="#exampleModal1"
                                href="#"
                                class="compliance-td-fonts blueborder text-center"
                              >
                                <img src="/images/card-img10.png" />
                              </div>
                            </td>
                            <td width="3%">&nbsp;</td>

                            <td width="10%">
                              <div
                                data-toggle="modal"
                                data-target="#exampleModal1"
                                href="#"
                                class="compliance-td-fonts blueborder text-center"
                              >
                                <img src="/images/card-img10.png" />
                              </div>
                            </td>
                            <td width="3%">&nbsp;</td>

                            <td width="10%">
                              <div
                                data-toggle="modal"
                                data-target="#exampleModal1"
                                href="#"
                                class="compliance-td-fonts blueborder text-center"
                              >
                                <img src="/images/card-img10.png" />
                              </div>
                            </td>
                            <td width="30%">&nbsp;</td>
                            <td width="12%">
                              <div
                                data-toggle="modal"
                                data-target="#exampleModal1"
                                href="#"
                                class="compliance-td-fonts blueborder text-center"
                              >
                                <img src="/images/card-img10.png" />
                              </div>

                              <div
                                class="modal fade"
                                id="exampleModal1"
                                tabindex="-1"
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                              >
                                <div class="modal-dialog modal-dialog-scrollable">
                                  <div class="modal-content">
                                    <div class="modal-body">
                                      <KYC ide={urlid} />
                                    </div>
                                    <div class="modal-footer">
                                      <button
                                        onClick={(e) => {
                                          e.preventDefault();
                                          dispatch(GetOneKYC(urlid));
                                        }}
                                        type="button"
                                        class="btn btn-secondary"
                                        data-dismiss="modal"
                                      >
                                        Save and Close
                                      </button>
                                      {/* <button type="button" class="btn btn-primary">Save changes</button> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table width="100%">
                        <tbody>
                          <tr>
                            <td colspan="2" width="65%" valign="top">
                              <div class="tradding-title min_heightt58 marign_bt4">
                                KYC
                              </div>
                            </td>
                            <td width="35%">
                              <div class="tradding-title min_heightt marign_bt3">
                                {" "}
                                DOCUMENT STATUS
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td width="7%" class="border_2" rowspan="10">
                              <div class="compliance-td-fonts text-rotate-div">
                                <span class="text-rotate">
                                  COMPANY DOCUMENTS / WEBSITE REVIEW
                                </span>
                              </div>
                            </td>
                          </tr>

                          <TR
                            name1={" Lead (1st) Director - Passport"}
                            status={CL.ldp_status}
                            name={"ldp_status"}
                            Change={(e) => {
                              handleChange(e);
                            }}
                          />
                          <TR
                            name1={"Lead (1st) Director - Proof of Address"}
                            status={CL.ldpa_status}
                            name={"ldpa_status"}
                            Change={(e) => {
                              handleChange(e);
                            }}
                          />
                          <TR
                            name1={"Second (2nd) Director - Passport"}
                            status={CL.sdp_status}
                            name={"sdp_status"}
                            Change={(e) => {
                              handleChange(e);
                            }}
                          />
                          <TR
                            name1={"Second (2nd) Director - Proof of Address"}
                            status={CL.sdpa_status}
                            name={"sdpa_status"}
                            Change={(e) => {
                              handleChange(e);
                            }}
                          />
                          <TR
                            name1={"Third (3rd) Director - Passport"}
                            status={CL.tdp_status}
                            name={"tdp_status"}
                            Change={(e) => {
                              handleChange(e);
                            }}
                          />
                          <TR
                            name1={"Third (3rd) Director - Proof of Address"}
                            status={CL.tdpa_status}
                            name={"tdpa_status"}
                            Change={(e) => {
                              handleChange(e);
                            }}
                          />
                          <TR
                            name1={"Fourth (4th) Director - Passport"}
                            status={CL.fdp_status}
                            name={"fdp_status"}
                            Change={(e) => {
                              handleChange(e);
                            }}
                          />
                          <TR
                            name1={"Fourth (4th) Director - Proof of Address"}
                            status={CL.fdpa_status}
                            name={"fdpa_status"}
                            Change={(e) => {
                              handleChange(e);
                            }}
                          />
                          <TR
                            name1={"Power of Attorney Document"}
                            status={CL.pad_status}
                            name={"pad_status"}
                            Change={(e) => {
                              handleChange(e);
                            }}
                          />
                        </tbody>
                      </table>
                    </td>
                    <td width="30%" valign="top">
                      <table width="100%">
                        <tbody>
                          <tr>
                            <td width="5%">&nbsp;</td>
                            <td width="15%">
                              <a
                                href="#"
                                class="compliance-td-fonts blueborder text-center"
                              >
                                <img src="/images/card-img6.png" />
                              </a>
                            </td>
                            <td width="5%">&nbsp;</td>
                            <td width="50%">
                              <div class="compliance-td-fonts blueborder redcolor text-center">
                                TOTAL AGED DAYS
                              </div>
                            </td>
                            <td width="5%">&nbsp;</td>
                            <td width="15%">
                              <div class="compliance-td-fonts blueborder redcolor text-center">
                                25
                              </div>
                            </td>
                            <td width="5%">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="5%">&nbsp;</td>
                            <td width="15%">
                              <div class="checkbox-workbook text-center zero-padding min_heightt marign_bt">
                                <div class="checkbox">
                                  <input
                                    type="checkbox"
                                    value="yes"
                                    id="check9"
                                    name="merchant-checkbox"
                                  />
                                  <label for="check9"></label>
                                </div>
                              </div>
                            </td>
                            <td width="5%">&nbsp;</td>
                            <td width="50%">
                              <table width="100%" cellspacing="0">
                                <tbody>
                                  <tr>
                                    <td width="30%">
                                      <a
                                        href="#"
                                        class="compliance-td-fonts yellobg text-center min_heightt marign_bt"
                                      >
                                        <img src="/images/card-img10.png" />
                                      </a>
                                    </td>
                                    <td width="5%">&nbsp;</td>
                                    <td width="30%">
                                      <a
                                        href="#"
                                        class="compliance-td-fonts yellobg text-center min_heightt marign_bt"
                                      >
                                        <img src="/images/card-img7.png" />
                                      </a>
                                    </td>
                                    <td width="5%">&nbsp;</td>
                                    <td width="30%">
                                      <a
                                        href="#"
                                        class="compliance-td-fonts yellobg text-center min_heightt marign_bt"
                                      >
                                        <img src="/images/card-img8.png" />
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                            <td width="5%">&nbsp;</td>
                            <td width="15%">
                              <a
                                href="#"
                                class="compliance-td-fonts yellobg text-center min_heightt marign_bt"
                              >
                                <img src="/images/card-img9.png" />
                              </a>
                            </td>
                            <td width="5%">&nbsp;</td>
                          </tr>
                          <TR1
                            checkName={"KYCC1"}
                            checkName2={"KYCC21"}
                            fc="ldp_fileName"
                            checked={CL.KYCC1}
                            checked2={CL.KYCC21}
                            path={CL.ldp_fileName}
                            check1={(e) => {
                              handleCheck(e);
                            }}
                            FileUpload={(e) => {
                              ImageHandler(e);
                            }}
                            resetHandler={(e) => {
                              handleReset(
                                "KYCC1",
                                "KYCC21",
                                "ldp_fileName",
                                "ldp_status"
                              );
                            }}
                          />
                          <TR1
                            checkName={"KYCC2"}
                            checkName2={"KYCC22"}
                            fc="ldpa_fileName"
                            checked={CL.KYCC2}
                            checked2={CL.KYCC22}
                            path={CL.ldpa_fileName}
                            check1={(e) => {
                              handleCheck(e);
                            }}
                            FileUpload={(e) => {
                              ImageHandler(e);
                            }}
                            resetHandler={(e) => {
                              handleReset(
                                "KYCC2",
                                "KYCC22",
                                "ldpa_fileName",
                                "ldpa_status"
                              );
                            }}
                          />
                          <TR1
                            checkName={"KYCC3"}
                            checkName2={"KYCC23"}
                            fc="sdp_fileName"
                            checked={CL.KYCC3}
                            checked2={CL.KYCC23}
                            path={CL.sdp_fileName}
                            check1={(e) => {
                              handleCheck(e);
                            }}
                            FileUpload={(e) => {
                              ImageHandler(e);
                            }}
                            resetHandler={(e) => {
                              handleReset(
                                "KYCC3",
                                "KYCC23",
                                "sdp_fileName",
                                "sdp_status"
                              );
                            }}
                          />
                          <TR1
                            checkName={"KYCC4"}
                            checkName2={"KYCC24"}
                            fc="sdpa_fileName"
                            checked={CL.KYCC4}
                            checked2={CL.KYCC24}
                            path={CL.sdpa_fileName}
                            check1={(e) => {
                              handleCheck(e);
                            }}
                            FileUpload={(e) => {
                              ImageHandler(e);
                            }}
                            resetHandler={(e) => {
                              handleReset(
                                "KYCC4",
                                "KYCC24",
                                "sdpa_fileName",
                                "sdpa_status"
                              );
                            }}
                          />
                          <TR1
                            checkName={"KYCC5"}
                            checkName2={"KYCC25"}
                            fc="tdp_fileName"
                            checked={CL.KYCC5}
                            checked2={CL.KYCC25}
                            path={CL.tdp_fileName}
                            check1={(e) => {
                              handleCheck(e);
                            }}
                            FileUpload={(e) => {
                              ImageHandler(e);
                            }}
                            resetHandler={(e) => {
                              handleReset(
                                "KYCC5",
                                "KYCC25",
                                "tdp_fileName",
                                "tdp_status"
                              );
                            }}
                          />
                          <TR1
                            checkName={"KYCC6"}
                            checkName2={"KYCC26"}
                            fc="tdpa_fileName"
                            checked={CL.KYCC6}
                            checked2={CL.KYCC26}
                            path={CL.tdpa_fileName}
                            check1={(e) => {
                              handleCheck(e);
                            }}
                            FileUpload={(e) => {
                              ImageHandler(e);
                            }}
                            resetHandler={(e) => {
                              handleReset(
                                "KYCC6",
                                "KYCC26",
                                "tdpa_fileName",
                                "tdpa_status"
                              );
                            }}
                          />
                          <TR1
                            checkName={"KYCC7"}
                            checkName2={"KYCC27"}
                            fc="fdp_fileName"
                            checked={CL.KYCC7}
                            checked2={CL.KYCC27}
                            path={CL.fdp_fileName}
                            check1={(e) => {
                              handleCheck(e);
                            }}
                            FileUpload={(e) => {
                              ImageHandler(e);
                            }}
                            resetHandler={(e) => {
                              handleReset(
                                "KYCC7",
                                "KYCC27",
                                "fdp_fileName",
                                "fdp_status"
                              );
                            }}
                          />
                          <TR1
                            checkName={"KYCC8"}
                            checkName2={"KYCC28"}
                            fc="fdpa_fileName"
                            checked={CL.KYCC8}
                            checked2={CL.KYCC28}
                            path={CL.fdpa_fileName}
                            check1={(e) => {
                              handleCheck(e);
                            }}
                            FileUpload={(e) => {
                              ImageHandler(e);
                            }}
                            resetHandler={(e) => {
                              handleReset(
                                "KYCC8",
                                "KYCC28",
                                "fdpa_fileName",
                                "fdpa_status"
                              );
                            }}
                          />
                          <TR1
                            checkName={"KYCC9"}
                            checkName2={"KYCC29"}
                            fc="pad_fileName"
                            checked={CL.KYCC10}
                            checked2={CL.KYCC29}
                            path={CL.pad_fileName}
                            check1={(e) => {
                              handleCheck(e);
                            }}
                            FileUpload={(e) => {
                              ImageHandler(e);
                            }}
                            resetHandler={(e) => {
                              handleReset(
                                "KYCC9",
                                "KYCC29",
                                "pad_fileName",
                                "pad_status"
                              );
                            }}
                          />
                          {/* <TR1
                           checkName={"KYCC10"}
                      checkName2={"KYCC3o"}
                      fc="bp_fileName"
                      checked={CL.KYCC10}
                      checked2={CL.KYCC29}
                      path={CL.bp_fileName}
                      check1={(e) => {
                        handleCheck(e);
                      }}
                      FileUpload={(e) => {
                        ImageHandler(e);
                      }}
                      resetHandler={(e) => {
                        handleReset(
                          "KYCC2",
                          "KYCC21",
                          "fcaf_fileName",
                          "fcaf_status"
                        );
                      }}
                           
                          /> */}
                        </tbody>
                      </table>
                    </td>
                    <td width="35%" valign="top">
                      <TRN />
                      {Notes.map((res, id) => {
                        return (
                          <TRNR
                            length={res.length}
                            name={"text"}
                            nameD={"date"}
                            valueD={res.date}
                            value={res.text}
                            dateChange={(e) => {
                              handleDateChange(e, id);
                            }}
                            textChangeHandle={(e) => {
                              notesTextHandler(e, id);
                            }}
                          />
                        );
                      })}
                      <button
                        className="btn btn-primary"
                        onClick={handleAddNotes}
                      >
                        Add Note
                      </button>
                    </td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingTwo">
              <h2 class="mb-0">
                <button
                  class="btn  btn-block collapsed text-left collapsed "
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  KNOW YOUR BUSINESS (KYB)
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <table>
                <thead>
                  <tr>
                    <td width="35%" valign="top">
                      <table width="100%">
                        <tbody>
                          <tr>
                            <td width="12%">
                              <div
                                data-toggle="modal"
                                data-target="#exampleModal2"
                                // to={`/ci/${urlid}`}
                                class="compliance-td-fonts blueborder text-center"
                              >
                                <img src="/images/card-img10.png" />
                              </div>
                            </td>
                            <td width="76%">&nbsp;</td>
                            <td width="12%">
                              <a
                                href="#"
                                class="compliance-td-fonts blueborder text-center"
                              >
                                <img src="/images/card-img7.png" />
                              </a>
                              <div
                                class="modal fade"
                                id="exampleModal2"
                                tabindex="-1"
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                              >
                                <div class="modal-dialog modal-dialog-scrollable">
                                  <div class="modal-content">
                                    <div class="modal-body">
                                      <KYB ide={urlid} />
                                    </div>
                                    <div class="modal-footer">
                                      <button
                                        onClick={(e) => {
                                          e.preventDefault();
                                          dispatch(GetOneKYB(urlid));
                                        }}
                                        type="button"
                                        class="btn btn-secondary"
                                        data-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                      {/* <button type="button" class="btn btn-primary">Save changes</button> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <table width="100%">
                        <tbody>
                          <tr>
                            <td colspan="2" width="65%" valign="top">
                              <div class="tradding-title min_heightt marign_bt3">
                                KYB
                              </div>
                            </td>
                            <td width="35%">
                              <div class="tradding-title min_heightt marign_bt3">
                                {" "}
                                DOCUMENT STATUS
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td width="7%" class="border_2" rowspan="10">
                              <div class="compliance-td-fonts text-rotate-div">
                                <span class="text-rotate">
                                  COMPANY DOCUMENTS / WEBSITE REVIEW
                                </span>
                              </div>
                            </td>
                          </tr>

                          <TR
                            name1={"Certificate of Incorporation"}
                            status={CL.coi_status}
                            name={"coi_status"}
                            Change={(e) => {
                              handleChange(e);
                            }}
                          />
                          <TR
                            name1={"Memorandum of Association"}
                            status={CL.moa_status}
                            name={"moa_status"}
                            Change={(e) => {
                              handleChange(e);
                            }}
                          />
                          <TR
                            name1={"Articles of Association"}
                            status={CL.aoa_status}
                            name={"aoa_status"}
                            Change={(e) => {
                              handleChange(e);
                            }}
                          />
                          <TR
                            name1={"Share Register"}
                            status={CL.sr_status}
                            name={"sr_status"}
                            Change={(e) => {
                              handleChange(e);
                            }}
                          />
                          <TR
                            name1={"Share Certificate(s) - Signed"}
                            status={CL.scs_status}
                            name={"scs_status"}
                            Change={(e) => {
                              handleChange(e);
                            }}
                          />
                          <TR
                            name1={"Current Commercial Register Extract"}
                            status={CL.ccre_status}
                            name={"ccre_status"}
                            Change={(e) => {
                              handleChange(e);
                            }}
                          />
                          <TR
                            name1={"Current Letter of Good Standing"}
                            status={CL.clg_status}
                            name={"clg_status"}
                            Change={(e) => {
                              handleChange(e);
                            }}
                          />
                        </tbody>
                      </table>
                    </td>
                    <td width="30%" valign="top">
                      <table width="100%">
                        <tbody>
                          <tr>
                            <td width="5%">&nbsp;</td>
                            <td width="15%">
                              <a
                                href="#"
                                class="compliance-td-fonts blueborder text-center"
                              >
                                <img src="/images/card-img6.png" />
                              </a>
                            </td>
                            <td width="5%">&nbsp;</td>
                            <td width="50%">
                              <div class="compliance-td-fonts blueborder redcolor text-center">
                                TOTAL AGED DAYS
                              </div>
                            </td>
                            <td width="5%">&nbsp;</td>
                            <td width="15%">
                              <div class="compliance-td-fonts blueborder redcolor text-center">
                                25
                              </div>
                            </td>
                            <td width="5%">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="5%">&nbsp;</td>
                            <td width="15%">
                              <div class="checkbox-workbook text-center zero-padding min_heightt marign_bt">
                                <div class="checkbox">
                                  <input
                                    type="checkbox"
                                    value="yes"
                                    id="check9"
                                    name="merchant-checkbox"
                                  />
                                  <label for="check9"></label>
                                </div>
                              </div>
                            </td>
                            <td width="5%">&nbsp;</td>
                            <td width="50%">
                              <table width="100%" cellspacing="0">
                                <tbody>
                                  <tr>
                                    <td width="30%">
                                      <a
                                        href="#"
                                        class="compliance-td-fonts yellobg text-center min_heightt marign_bt"
                                      >
                                        <img src="/images/card-img10.png" />
                                      </a>
                                    </td>
                                    <td width="5%">&nbsp;</td>
                                    <td width="30%">
                                      <a
                                        href="#"
                                        class="compliance-td-fonts yellobg text-center min_heightt marign_bt"
                                      >
                                        <img src="/images/card-img7.png" />
                                      </a>
                                    </td>
                                    <td width="5%">&nbsp;</td>
                                    <td width="30%">
                                      <a
                                        href="#"
                                        class="compliance-td-fonts yellobg text-center min_heightt marign_bt"
                                      >
                                        <img src="/images/card-img8.png" />
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                            <td width="5%">&nbsp;</td>
                            <td width="15%">
                              <a
                                href="#"
                                class="compliance-td-fonts yellobg text-center min_heightt marign_bt"
                              >
                                <img src="/images/card-img9.png" />
                              </a>
                            </td>
                            <td width="5%">&nbsp;</td>
                          </tr>
                          <TR1
                            checkName={"KYBC1"}
                            checkName2={"KYBC21"}
                            fc="coi_fileName"
                            checked={CL.KYBC1}
                            checked2={CL.KYBC21}
                            path={CL.coi_fileName}
                            check1={(e) => {
                              handleCheck(e);
                            }}
                            FileUpload={(e) => {
                              ImageHandler(e);
                            }}
                            resetHandler={(e) => {
                              handleReset(
                                "KYBC1",
                                "KYBC21",
                                "coi_fileName",
                                "coi_status"
                              );
                            }}
                          />
                          <TR1
                            checkName={"KYBC2"}
                            checkName2={"KYBC22"}
                            fc="moa_fileName"
                            checked={CL.KYBC2}
                            checked2={CL.KYBC22}
                            path={CL.moa_fileName}
                            check1={(e) => {
                              handleCheck(e);
                            }}
                            FileUpload={(e) => {
                              ImageHandler(e);
                            }}
                            resetHandler={(e) => {
                              handleReset(
                                "KYBC2",
                                "KYBC22",
                                "moa_fileName",
                                "moa_status"
                              );
                            }}
                          />
                          <TR1
                            checkName={"KYBC3"}
                            checkName2={"KYBC23"}
                            fc="aoa_fileName"
                            checked={CL.KYBC3}
                            checked2={CL.KYBC23}
                            path={CL.aoa_fileName}
                            check1={(e) => {
                              handleCheck(e);
                            }}
                            FileUpload={(e) => {
                              ImageHandler(e);
                            }}
                            resetHandler={(e) => {
                              handleReset(
                                "KYBC3",
                                "KYBC23",
                                "aoa_fileName",
                                "aoa_status"
                              );
                            }}
                          />
                          <TR1
                            checkName={"KYBC4"}
                            checkName2={"KYBC24"}
                            fc="sr_fileName"
                            checked={CL.KYBC4}
                            checked2={CL.KYBC24}
                            path={CL.sr_fileName}
                            check1={(e) => {
                              handleCheck(e);
                            }}
                            FileUpload={(e) => {
                              ImageHandler(e);
                            }}
                            resetHandler={(e) => {
                              handleReset(
                                "KYBC4",
                                "KYBC24",
                                "sr_fileName",
                                "sr_status"
                              );
                            }}
                          />
                          <TR1
                            checkName={"KYBC5"}
                            checkName2={"KYBC25"}
                            fc="scs_fileName"
                            checked={CL.KYBC5}
                            checked2={CL.KYBC25}
                            path={CL.scs_fileName}
                            check1={(e) => {
                              handleCheck(e);
                            }}
                            FileUpload={(e) => {
                              ImageHandler(e);
                            }}
                            resetHandler={(e) => {
                              handleReset(
                                "KYBC5",
                                "KYBC25",
                                "scs_fileName",
                                "scs_status"
                              );
                            }}
                          />
                          <TR1
                            checkName={"KYBC6"}
                            checkName2={"KYBC26"}
                            fc="ccre_fileName"
                            checked={CL.KYBC6}
                            checked2={CL.KYBC26}
                            path={CL.ccre_fileName}
                            check1={(e) => {
                              handleCheck(e);
                            }}
                            FileUpload={(e) => {
                              ImageHandler(e);
                            }}
                            resetHandler={(e) => {
                              handleReset(
                                "KYBC6",
                                "KYBC26",
                                "ccre_fileName",
                                "ccre_status"
                              );
                            }}
                          />
                          <TR1
                            checkName={"KYBC7"}
                            checkName2={"KYBC27"}
                            fc="clg_fileName"
                            checked={CL.KYBC7}
                            checked2={CL.KYBC27}
                            path={CL.clg_fileName}
                            check1={(e) => {
                              handleCheck(e);
                            }}
                            FileUpload={(e) => {
                              ImageHandler(e);
                            }}
                            resetHandler={(e) => {
                              handleReset(
                                "KYBC7",
                                "KYBC27",
                                "clg_fileName",
                                "clg_status"
                              );
                            }}
                          />
                          {/* <TR1
                           checkName={"KYBC8"}
                      checkName2={"KYBC28"}
                      fc="fdpa_fileName"
                      checked={CL.KYBC8}
                      checked2={CL.KYBC28}
                      path={CL.fdpa_fileName}
                      check1={(e) => {
                        handleCheck(e);
                      }}
                      FileUpload={(e) => {
                        ImageHandler(e);
                      }}
                      resetHandler={(e) => {
                        handleReset(
                          "KYBC2",
                          "KYBC21",
                          "fcaf_fileName",
                          "fcaf_status"
                        );
                      }}
                           
                          />
                          <TR1
                           checkName={"KYBC9"}
                      checkName2={"KYBC29"}
                      fc="pad_fileName"
                      checked={CL.KYBC10}
                      checked2={CL.KYBC29}
                      path={CL.pad_fileName}
                      check1={(e) => {
                        handleCheck(e);
                      }}
                      FileUpload={(e) => {
                        ImageHandler(e);
                      }} */}
                          {/* resetHandler=
                          {(e) => {
                            handleReset(
                              "KYBC2",
                              "KYBC21",
                              "fcaf_fileName",
                              "fcaf_status"
                            );
                          }} */}
                          {/* /> */}
                          {/* <TR1
                           checkName={"KYBC10"}
                      checkName2={"KYBC3o"}
                      fc="bp_fileName"
                      checked={CL.KYBC10}
                      checked2={CL.KYBC29}
                      path={CL.bp_fileName}
                      check1={(e) => {
                        handleCheck(e);
                      }}
                      FileUpload={(e) => {
                        ImageHandler(e);
                      }}
                      resetHandler={(e) => {
                        handleReset(
                          "TIC2",
                          "TIC21",
                          "fcaf_fileName",
                          "fcaf_status"
                        );
                      }}
                           
                          /> */}
                        </tbody>
                      </table>
                    </td>
                    <td width="35%" valign="top">
                      <TRN />
                      {Notes.map((res, id) => {
                        return (
                          <TRNR
                            length={res.length}
                            name={"text"}
                            nameD={"date"}
                            valueD={res.date}
                            value={res.text}
                            dateChange={(e) => {
                              handleDateChange(e, id);
                            }}
                            textChangeHandle={(e) => {
                              notesTextHandler(e, id);
                            }}
                          />
                        );
                      })}
                      <button
                        className="btn btn-primary"
                        onClick={handleAddNotes}
                      >
                        Add Note
                      </button>
                    </td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
          
          <div class="card">
            <div class="card-header" id="headingThree">
              <h2 class="mb-0">
                <button
                  class="btn  btn-block collapsed text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  SUPPORTING DOCUMENTS
                </button>
              </h2>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <table>
                <thead>
                  <tr>
                    <td width="35%" valign="top">
                      <table width="100%">
                        <tbody>
                          <tr>
                            <td width="12%">
                              <div
                                data-toggle="modal"
                                data-target="#exampleModal4"
                                // to={`/ci/${urlid}`}
                                class="compliance-td-fonts blueborder text-center"
                              >
                                <img src="/images/card-img10.png" />
                              </div>
                            </td>
                            <td width="76%">&nbsp;</td>
                            <td width="12%">
                              <a
                                href="#"
                                class="compliance-td-fonts blueborder text-center"
                              >
                                <img src="/images/card-img7.png" />
                              </a>

                              <div
                                class="modal fade"
                                id="exampleModal4"
                                tabindex="-1"
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                              >
                                <div class="modal-dialog modal-dialog-scrollable">
                                  <div class="modal-content">
                                    <div class="modal-body">
                                      <SDC ide={urlid} />
                                    </div>
                                    <div class="modal-footer">
                                      <button
                                        onClick={(e) => {
                                          e.preventDefault();
                                          dispatch(GetOneCI(urlid));
                                        }}
                                        type="button"
                                        class="btn btn-secondary"
                                        data-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                      {/* <button type="button" class="btn btn-primary">Save changes</button> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table width="100%">
                        <tbody>
                          <tr>
                            <td colspan="2" width="65%" valign="top">
                              <div class="tradding-title min_heightt marign_bt3">
                                Supporting Documents
                              </div>
                            </td>
                            <td width="35%">
                              <div class="tradding-title min_heightt marign_bt3">
                                {" "}
                                DOCUMENT STATUS
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td width="7%" class="border_2" rowspan="10">
                              <div class="compliance-td-fonts text-rotate-div">
                                <span class="text-rotate">
                                  COMPANY DOCUMENTS / WEBSITE REVIEW
                                </span>
                              </div>
                            </td>
                          </tr>

                          <TR
                            name={"cora_status"}
                            name1={"Copywrite or Re-seller Agreement"}
                            status={CL.cora_status}
                            Change={(e) => {
                              handleChange(e);
                            }}
                          />
                          <TR
                            name={"cbs_status"}
                            name1={"Corporate Bank Statements"}
                            status={CL.cbs_status}
                            Change={(e) => {
                              handleChange(e);
                            }}
                          />
                          <TR
                            name={"pbs_status"}
                            name1={"Personal Bank Statements"}
                            status={CL.pbs_status}
                            Change={(e) => {
                              handleChange(e);
                            }}
                          />
                          <TR
                            name={"pow_status"}
                            name1={"Proof of Wealth"}
                            status={CL.pow_status}
                            Change={(e) => {
                              handleChange(e);
                            }}
                          />
                          <TR
                            name={"cap_status"}
                            name1={"Company AML Policy"}
                            status={CL.cap_status}
                            Change={(e) => {
                              handleChange(e);
                            }}
                          />
                          <TR
                            name={"gofl_status"}
                            name1={"Gambling or Forex License"}
                            status={CL.gofl_status}
                            Change={(e) => {
                              handleChange(e);
                            }}
                          />
                          <TR
                            name={"fcR_status"}
                            name1={"FBO (Food) Company Registration"}
                            status={CL.fcR_status}
                            Change={(e) => {
                              handleChange(e);
                            }}
                          />
                        </tbody>
                      </table>
                    </td>
                    <td width="30%" valign="top">
                      <table width="100%">
                        <tbody>
                          <tr>
                            <td width="5%">&nbsp;</td>
                            <td width="15%">
                              <a
                                href="#"
                                class="compliance-td-fonts blueborder text-center"
                              >
                                <img src="/images/card-img6.png" />
                              </a>
                            </td>
                            <td width="5%">&nbsp;</td>
                            <td width="50%">
                              <div class="compliance-td-fonts blueborder redcolor text-center">
                                TOTAL AGED DAYS
                              </div>
                            </td>
                            <td width="5%">&nbsp;</td>
                            <td width="15%">
                              <div class="compliance-td-fonts blueborder redcolor text-center">
                                25
                              </div>
                            </td>
                            <td width="5%">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="5%">&nbsp;</td>
                            <td width="15%">
                              <div class="checkbox-workbook text-center zero-padding min_heightt marign_bt">
                                <div class="checkbox">
                                  <input
                                    type="checkbox"
                                    value="yes"
                                    id="check9"
                                    name="merchant-checkbox"
                                  />
                                  <label for="check9"></label>
                                </div>
                              </div>
                            </td>
                            <td width="5%">&nbsp;</td>
                            <td width="50%">
                              <table width="100%" cellspacing="0">
                                <tbody>
                                  <tr>
                                    <td width="30%">
                                      <a
                                        href="#"
                                        class="compliance-td-fonts yellobg text-center min_heightt marign_bt"
                                      >
                                        <img src="/images/card-img10.png" />
                                      </a>
                                    </td>
                                    <td width="5%">&nbsp;</td>
                                    <td width="30%">
                                      <a
                                        href="#"
                                        class="compliance-td-fonts yellobg text-center min_heightt marign_bt"
                                      >
                                        <img src="/images/card-img7.png" />
                                      </a>
                                    </td>
                                    <td width="5%">&nbsp;</td>
                                    <td width="30%">
                                      <a
                                        href="#"
                                        class="compliance-td-fonts yellobg text-center min_heightt marign_bt"
                                      >
                                        <img src="/images/card-img8.png" />
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                            <td width="5%">&nbsp;</td>
                            <td width="15%">
                              <a
                                href="#"
                                class="compliance-td-fonts yellobg text-center min_heightt marign_bt"
                              >
                                <img src="/images/card-img9.png" />
                              </a>
                            </td>
                            <td width="5%">&nbsp;</td>
                          </tr>
                          <TR1
                            checkName={"SDC1"}
                            checkName2={"SDC21"}
                            fc="cora_fileName"
                            checked={CL.SDC1}
                            checked2={CL.SDC21}
                            path={CL.cora_fileName}
                            check1={(e) => {
                              handleCheck(e);
                            }}
                            FileUpload={(e) => {
                              ImageHandler(e);
                            }}
                            resetHandler={(e) => {
                              handleReset(
                                "SDC1",
                                "SDC21",
                                "cora_fileName",
                                "cora_status"
                              );
                            }}
                          />
                          <TR1
                            checkName={"SDC2"}
                            checkName2={"SDC22"}
                            fc="cbs_fileName"
                            checked={CL.SDC2}
                            checked2={CL.SDC22}
                            path={CL.cbs_fileName}
                            check1={(e) => {
                              handleCheck(e);
                            }}
                            FileUpload={(e) => {
                              ImageHandler(e);
                            }}
                            resetHandler={(e) => {
                              handleReset(
                                "SDC2",
                                "SDC22",
                                "cbs_fileName",
                                "cbs_status"
                              );
                            }}
                          />
                          <TR1
                            checkName={"SDC3"}
                            checkName2={"SDC23"}
                            fc="pbs_fileName"
                            checked={CL.SDC3}
                            checked2={CL.SDC23}
                            path={CL.pbs_fileName}
                            check1={(e) => {
                              handleCheck(e);
                            }}
                            FileUpload={(e) => {
                              ImageHandler(e);
                            }}
                            resetHandler={(e) => {
                              handleReset(
                                "SDC3",
                                "SDC23",
                                "pbs_fileName",
                                "pbs_status"
                              );
                            }}
                          />
                          <TR1
                            checkName={"SDC4"}
                            checkName2={"SDC24"}
                            fc="pow_fileName"
                            checked={CL.SDC4}
                            checked2={CL.SDC24}
                            path={CL.pow_fileName}
                            check1={(e) => {
                              handleCheck(e);
                            }}
                            FileUpload={(e) => {
                              ImageHandler(e);
                            }}
                            resetHandler={(e) => {
                              handleReset(
                                "SDC4",
                                "SDC24",
                                "pow_fileName",
                                "pow_status"
                              );
                            }}
                          />
                          <TR1
                            checkName={"SDC5"}
                            checkName2={"SDC25"}
                            fc="cap_fileName"
                            checked={CL.SDC5}
                            checked2={CL.SDC25}
                            path={CL.cap_fileName}
                            check1={(e) => {
                              handleCheck(e);
                            }}
                            FileUpload={(e) => {
                              ImageHandler(e);
                            }}
                            resetHandler={(e) => {
                              handleReset(
                                "SDC5",
                                "SDC25",
                                "cap_fileName",
                                "cap_status"
                              );
                            }}
                          />
                          <TR1
                            checkName={"SDC6"}
                            checkName2={"SDC26"}
                            fc="gofl_fileName"
                            checked={CL.SDC6}
                            checked2={CL.SDC26}
                            path={CL.gofl_fileName}
                            check1={(e) => {
                              handleCheck(e);
                            }}
                            FileUpload={(e) => {
                              ImageHandler(e);
                            }}
                            resetHandler={(e) => {
                              handleReset(
                                "SDC6",
                                "SDC26",
                                "gofl_fileName",
                                "gofl_status"
                              );
                            }}
                          />
                          <TR1
                            checkName={"SDC7"}
                            checkName2={"SDC27"}
                            fc="fcR_fileName"
                            checked={CL.SDC7}
                            checked2={CL.SDC27}
                            path={CL.fcr_fileName}
                            check1={(e) => {
                              handleCheck(e);
                            }}
                            FileUpload={(e) => {
                              ImageHandler(e);
                            }}
                            resetHandler={(e) => {
                              handleReset(
                                "SDC7",
                                "SDC27",
                                "fcr_fileName",
                                "fcR_status"
                              );
                            }}
                          />
                        </tbody>
                      </table>
                    </td>
                    <td width="35%" valign="top">
                      <TRN />
                      {Notes.map((res, id) => {
                        return (
                          <TRNR
                            length={res.length}
                            name={"text"}
                            nameD={"date"}
                            valueD={res.date}
                            value={res.text}
                            dateChange={(e) => {
                              handleDateChange(e, id);
                            }}
                            textChangeHandle={(e) => {
                              notesTextHandler(e, id);
                            }}
                          />
                        );
                      })}
                      <button
                        className="btn btn-primary"
                        onClick={handleAddNotes}
                      >
                        Add Note
                      </button>
                    </td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
         

          <div class="card">
            <div class="card-header" id="headingThree">
              <h2 class="mb-0">
                <button
                  class="btn  btn-block collapsed text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
               MISCELLANEOUS DOCUMENTS
                </button>
              </h2>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <table>
                <thead>
                  <tr>
                    <td width="35%" valign="top">
                      <table width="100%">
                        <tbody>
                          <tr>
                            <td width="12%">
                              <div
                                data-toggle="modal"
                                data-target="#exampleModal4"
                                // to={`/ci/${urlid}`}
                                class="compliance-td-fonts blueborder text-center"
                              >
                                <img src="/images/card-img10.png" />
                              </div>
                            </td>
                            <td width="76%">&nbsp;</td>
                            <td width="12%">
                              <a
                                href="#"
                                class="compliance-td-fonts blueborder text-center"
                              >
                                <img src="/images/card-img7.png" />
                              </a>

                              <div
                                class="modal fade"
                                id="exampleModal4"
                                tabindex="-1"
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                              >
                                <div class="modal-dialog modal-dialog-scrollable">
                                  <div class="modal-content">
                                    <div class="modal-body">
                                      <SDC ide={urlid} />
                                    </div>
                                    <div class="modal-footer">
                                      <button
                                        onClick={(e) => {
                                          e.preventDefault();
                                          dispatch(GetOneCI(urlid));
                                        }}
                                        type="button"
                                        class="btn btn-secondary"
                                        data-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                      {/* <button type="button" class="btn btn-primary">Save changes</button> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table width="100%">
                        <tbody>
                          <tr>
                            <td colspan="2" width="65%" valign="top">
                              <div class="tradding-title min_heightt marign_bt3">
                                Supporting Documents
                              </div>
                            </td>
                            <td width="35%">
                              <div class="tradding-title min_heightt marign_bt3">
                                {" "}
                                DOCUMENT STATUS
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td width="7%" class="border_2" rowspan="10">
                              <div class="compliance-td-fonts text-rotate-div">
                                <span class="text-rotate">
                                  COMPANY DOCUMENTS / WEBSITE REVIEW
                                </span>
                              </div>
                            </td>
                          </tr>

                          {/* {
                                  Spare.map((res, id) => {
                return (
                  
                  <SpareTR
                            name={"sparetext"}
                            status={"spare_status"}


                            name1={res.sparetext}
                           value={res.spare_status}
                           onChangetext={(e) => {
                                handletextSpare(e, id);
                              }}
                             Change={(e) => {
                               handleChangeSpare(e, id);
                             }}
                             notesHandle={(e) => {
                               handleNotesSpare(e, id);
                             }}
                             FileUpload={(e) => {
                               ImageHandlerSpare(e, id);
                             }}
                             resetHandler={(e) => {
                        handleReset(
                          "TIC2",
                          "TIC21",
                          "fcaf_fileName",
                          "fcaf_status"
                        );
                      }}
                      
                             
                              
                          />
                       
                
                )
              })
            } */}
                        </tbody>
                      </table>
                    </td>
                    <td width="30%" valign="top">
                      <table width="100%">
                        <tbody>
                          <tr>
                            <td width="5%">&nbsp;</td>
                            <td width="15%">
                              <a
                                href="#"
                                class="compliance-td-fonts blueborder text-center"
                              >
                                <img src="/images/card-img6.png" />
                              </a>
                            </td>
                            <td width="5%">&nbsp;</td>
                            <td width="50%">
                              <div class="compliance-td-fonts blueborder redcolor text-center">
                                TOTAL AGED DAYS
                              </div>
                            </td>
                            <td width="5%">&nbsp;</td>
                            <td width="15%">
                              <div class="compliance-td-fonts blueborder redcolor text-center">
                                25
                              </div>
                            </td>
                            <td width="5%">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="5%">&nbsp;</td>
                            <td width="15%">
                              <div class="checkbox-workbook text-center zero-padding min_heightt marign_bt">
                                <div class="checkbox">
                                  <input
                                    type="checkbox"
                                    value="yes"
                                    id="check9"
                                    name="merchant-checkbox"
                                  />
                                  <label for="check9"></label>
                                </div>
                              </div>
                            </td>
                            <td width="5%">&nbsp;</td>
                            <td width="50%">
                              <table width="100%" cellspacing="0">
                                <tbody>
                                  <tr>
                                    <td width="30%">
                                      <a
                                        href="#"
                                        class="compliance-td-fonts yellobg text-center min_heightt marign_bt"
                                      >
                                        <img src="/images/card-img10.png" />
                                      </a>
                                    </td>
                                    <td width="5%">&nbsp;</td>
                                    <td width="30%">
                                      <a
                                        href="#"
                                        class="compliance-td-fonts yellobg text-center min_heightt marign_bt"
                                      >
                                        <img src="/images/card-img7.png" />
                                      </a>
                                    </td>
                                    <td width="5%">&nbsp;</td>
                                    <td width="30%">
                                      <a
                                        href="#"
                                        class="compliance-td-fonts yellobg text-center min_heightt marign_bt"
                                      >
                                        <img src="/images/card-img8.png" />
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                            <td width="5%">&nbsp;</td>
                            <td width="15%">
                              <a
                                href="#"
                                class="compliance-td-fonts yellobg text-center min_heightt marign_bt"
                              >
                                <img src="/images/card-img9.png" />
                              </a>
                            </td>
                            <td width="5%">&nbsp;</td>
                          </tr>
                          {/* {
                                  Spare.map((res, id) => {
                return (
                  
                  <TR1
                            name={"sparetext"}
                            status={"spare_status"}


                            name1={res.sparetext}
                           value={res.spare_status}
                           onChangetext={(e) => {
                                handletextSpare(e, id);
                              }}
                             Change={(e) => {
                               handleChangeSpare(e, id);
                             }}
                             notesHandle={(e) => {
                               handleNotesSpare(e, id);
                             }}
                             FileUpload={(e) => {
                               ImageHandlerSpare(e, id);
                             }}
                             resetHandler={(e) => {
                        handleReset(
                          "TIC2",
                          "TIC21",
                          "fcaf_fileName",
                          "fcaf_status"
                        );
                      }}
                      
                             
                              
                          />
                       
                
                )
              })
            } */}
                        </tbody>
                      </table>
                    </td>
                    <td width="35%" valign="top">
                      <TRN />
                      {Notes.map((res, id) => {
                        return (
                          <TRNR
                            length={res.length}
                            name={"text"}
                            nameD={"date"}
                            valueD={res.date}
                            value={res.text}
                            dateChange={(e) => {
                              handleDateChange(e, id);
                            }}
                            textChangeHandle={(e) => {
                              notesTextHandler(e, id);
                            }}
                          />
                        );
                      })}
                      <button
                        className="btn btn-primary"
                        onClick={handleAddNotes}
                      >
                        Add Note
                      </button>
                    </td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
         


          <div class="card">
            <div class="card-header" id="headingThree">
              <h2 class="mb-0">
                <button
                  class="btn  btn-block collapsed text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapsefive"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  SEND FULL PACKAGE TO THE SOLUTION
                </button>
              </h2>
            </div>
            <div
              id="collapsefive"
              class="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <table>
                <thead>
                  <tr>
                    <td width="35%" valign="top">
                      <table width="100%">
                        <tbody>
                          <tr>
                            <td width="12%">
                              <a
                                href="#"
                                class="compliance-td-fonts blueborder text-center"
                              >
                                <img src="/images/card-img10.png" />
                              </a>
                            </td>
                            <td width="76%">&nbsp;</td>
                            <td width="12%">
                              <a
                                href="#"
                                class="compliance-td-fonts blueborder text-center"
                              >
                                <img src="/images/card-img7.png" />
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table width="100%">
                        <tbody>
                          <tr>
                            <td colspan="2" width="65%" valign="top">
                              <div class="tradding-title min_heightt marign_bt3">
                                SEND FULL PACKAGE TO THE SOLUTION
                              </div>
                            </td>
                            <td width="35%">
                              <div class="tradding-title min_heightt marign_bt3">
                                {" "}
                                DOCUMENT STATUS
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td width="7%" class="border_2" rowspan="10">
                              <div class="compliance-td-fonts text-rotate-div">
                                <span class="text-rotate">
                                  COMPANY DOCUMENTS / WEBSITE REVIEW
                                </span>
                              </div>
                            </td>
                            <td width="58%"></td>
                          </tr>

                          <TR
                            name={"ti_status"}
                            name1={"Trading information"}
                            status={CL.ti_status}
                            Change={(e) => {
                              handleChange(e);
                            }}
                          />
                          <TR
                            name={"kyc_status"}
                            name1={"KNOW YOUR CUSTOMER (KYC)"}
                            status={CL.kyc_status}
                            Change={(e) => {
                              handleChange(e);
                            }}
                          />
                          <TR
                            name={"kyb_status"}
                            name1={"KNOW YOUR BUSINESS (KYB)"}
                            status={CL.kyb_status}
                            Change={(e) => {
                              handleChange(e);
                            }}
                          />
                          <TR
                            name={"sd_status"}
                            name1={"SUPPORTING DOCUMENTS"}
                            status={CL.sd_status}
                            Change={(e) => {
                              handleChange(e);
                            }}
                          />
                          <TR
                            name={"md_status"}
                            name1={"MISCELLANEOUS DOCUMENTS"}
                            status={CL.md_status}
                            Change={(e) => {
                              handleChange(e);
                            }}
                          />

                          <tr>
                            <td width="58%">
                              <div class="compliance-td-fonts min_heightt marign_bt3">
                                {" "}
                                CHECKED BY:
                              </div>
                            </td>
                            <td>
                              <input
                                type="text"
                                value={CL.checkby}
                                name="checkby"
                                onChange={(e) => {
                                  handleChange(e);
                                }}
                                class="acri-sec blueborder text-center"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td width="58%">
                              <div class="compliance-td-fonts min_heightt marign_bt3">
                                {" "}
                                SENT TO SOLUTION BY:
                              </div>
                            </td>
                            <td>
                              <input
                                type="text"
                                value={CL.senttosolby}
                                name="senttosolby"
                                onChange={(e) => {
                                  handleChange(e);
                                }}
                                class="acri-sec blueborder text-center"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td width="58%">
                              <div class="compliance-td-fonts min_heightt marign_bt3">
                                DATE SENT TO SOLUTION:
                              </div>
                            </td>
                            <td>
                              <input
                                type="text"
                                value={CL.sentDate}
                                name="sentDate"
                                onChange={(e) => {
                                  handleChange(e);
                                }}
                                class="acri-sec blueborder text-center"
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td width="30%" valign="top">
                      <table width="100%">
                        <tbody>
                          <tr>
                            <td width="5%">&nbsp;</td>
                            <td width="15%">
                              <a
                                href="#"
                                class="compliance-td-fonts blueborder text-center"
                              >
                                <img src="/images/card-img6.png" />
                              </a>
                            </td>
                            <td width="5%">&nbsp;</td>
                            <td width="50%">
                              <div class="compliance-td-fonts blueborder redcolor text-center">
                                TOTAL AGED DAYS
                              </div>
                            </td>
                            <td width="5%">&nbsp;</td>
                            <td width="30%">
                              <div class="compliance-td-fonts blueborder redcolor text-center">
                                25
                              </div>
                            </td>
                            <td width="5%">&nbsp;</td>
                          </tr>
                          <tr>
                            <td width="5%">&nbsp;</td>
                            <td width="30%">
                              <div class="  text-center zero-padding min_heightt marign_bt"></div>
                            </td>
                            <td width="50%">&nbsp;</td>
                            <td width="100%">
                              <table width="100%" cellspacing="0">
                                <tbody>
                                  <tr></tr>
                                </tbody>
                              </table>
                            </td>
                            <td width="5%">&nbsp;</td>
                            <td width="5%">&nbsp;</td>
                          </tr>
                          <TR2
                            checkName={"ti"}
                            checked={CL.ti}
                            check1={(e) => {
                              handleCheck(e);
                            }}
                          />
                          <TR2
                            checkName={"kyc"}
                            checked={CL.kyc}
                            check1={(e) => {
                              handleCheck(e);
                            }}
                          />
                          <TR2
                            checkName={"kyb"}
                            checked={CL.kyb}
                            check1={(e) => {
                              handleCheck(e);
                            }}
                          />
                          <TR2
                            checkName={"sd"}
                            checked={CL.sd}
                            check1={(e) => {
                              handleCheck(e);
                            }}
                          />
                          <TR2
                            checkName={"md"}
                            checked={CL.md}
                            check1={(e) => {
                              handleCheck(e);
                            }}
                          />
                          <TR2
                            checkName={"cb"}
                            checked={CL.cb}
                            check1={(e) => {
                              handleCheck(e);
                            }}
                          />
                          <TR2
                            checkName={"sent"}
                            checked={CL.sent}
                            check1={(e) => {
                              handleCheck(e);
                            }}
                          />
                          <TR2
                            checkName={"sentdate"}
                            checked={CL.sentdate}
                            check1={(e) => {
                              handleCheck(e);
                            }}
                          />
                        </tbody>
                      </table>
                      <button
                        onClick={onSubmit}
                        style={{ marginLeft: "50%", marginTop: "20%" }}
                        className="btn btn-primary text-center"
                      >
                        MOVE TO BOARDING DASHBOARD
                      </button>
                    </td>
                    <td width="35%" valign="top">
                      <TRN />
                      {Notes.map((res, id) => {
                        return (
                          <TRNR
                            length={res.length}
                            name={"text"}
                            nameD={"date"}
                            valueD={res.date}
                            value={res.text}
                            dateChange={(e) => {
                              handleDateChange(e, id);
                            }}
                            textChangeHandle={(e) => {
                              notesTextHandler(e, id);
                            }}
                          />
                        );
                      })}
                      <button
                        className="btn btn-primary"
                        onClick={handleAddNotes}
                      >
                        Add Note
                      </button>
                    </td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
