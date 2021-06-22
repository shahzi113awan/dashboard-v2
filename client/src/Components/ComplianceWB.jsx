import React, { useState, useEffect } from "react";
import $ from "jquery";
import "../assets/css/trading-book.css";
import TR from "./ComplianceR";
import TR1 from "./ComplianceR1";
import TR2 from "./ComplianceR2";
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
import { CreateSpare } from "../actions/spareAction";

import { FaDraft2Digital } from "react-icons/fa";

export default function PreApproval() {
  const dispatch = useDispatch();
  const [view, setView] = useState(false);

  const history = useHistory();
  const data = useSelector((state) => state.clReducer.state);
  const data1 = useSelector((state) => state.ciReducer.state);

  console.log(data1);
  const SpareData = useSelector((state) => state.SpareReducer.state);
  console.log(SpareData);
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
        dispatch(GetOneCI())
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
  const handleCheck = (e) => {
    console.log("hahah");
    console.log(e.target.checked);
    setCL({
      ...CL,
      [e.target.name]: e.target.checked,
    });
  };

  const [CL, setCL] = React.useState({
    // fcaf_status: "",
    // fcaf_fileName: "Pending",
    // cdf_status: "pending",
    // cdf_fileName: "fileName",
    // bi_status: "pending",
    // bi_fileName: "fileName",
    // ota_status: "pending",
    // ota_fileName: "fileName",
    // aps_status: "pending",
    // aps_fileName: "fileName",
    // hwua_status: "pending",
    // hwua_fileName: "fileName",
    // wc_status: "pending",
    // wc_fileName: "fileName",
    // wuod_status: "pending",
    // wuod_fileName: "fileName",
    // owsc_status: "pending",
    // owsc_fileName: "fileName",
    // bp_status: "pending",
    // bp_fileName: "fileName",
    // ldp_status: "pending",
    // ldp_fileName: "fileName",
    // ldpa_status: "pending",
    // ldpa_fileName: "fileName",
    // pad_status: "pending",
    // pad_fileName: "fileName",
    // sdp_tatus: "pending",
    // sdp_fileName: "fileName",
    // sdpa_status: "pending",
    // sdpa_fileName: "fileName",
    // tdp_status: "pending",
    // tdp_fileName: "fileName",
    // tdpa_status: "pending",
    // tdpa_fileName: "fileName",
    // fdp_status: "pending",
    // fdp_fileName: "fileName",
    // fdpa_status: "pending",
    // fdpa_fileName: "fileName",
    // coi_status: "pending",
    // coi_fileName: "fileName",
    // moa_status: "pending",
    // moa_fileName: "fileName",
    // aoa_status: "pending",
    // aoa_fileName: "fileName",
    // sr_status: "pending",
    // sr_fileName: "fileName",
    // scs_status: "pending",
    // scs_fileName: "fileName",
    // ccre_status: "pending",
    // ccre_fileName: "fileName",
    // cbs_status: "pending",
    // cbs_fileName: "fileName",
    // pbs_status: "pending",
    // pbs_fileName: "fileName",
    // pow_status: "pending",
    // pow_fileName: "fileName",
    // cap_status: "pending",
    // cap_fileName: "fileName",
    // gofl_status: "pending",
    // gofl_fileName: "fileName",
    // cora_status: "pending",
    // cora_fileName: "fileName",
    // fodsa_status: "pending",
    // fodsa_fileName: "fileName",
    // status: "pending",
    // fcr_fileName: "fileName",
    // shs_status: "pending",
    // shs_fileName: "fileName",
    // df_status: "pending",
    // df_fileName: "fileName",
  });
  //Spare Section -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=--
  useEffect(() => {
    setSpare(SpareData);
  }, [SpareData]);
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
        text: "",
        note: "",
        status: "",
        path: "",
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
    console.log(url);
  };

  //Spare section End-=-=-=-=====-=-=-=-==============-=---=-=-=-===============-
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

  console.log(CL);
  const onSubmit = async (e) => {
    e.preventDefault();
    urlid
      ? (await dispatch(CreateCL(CL, urlid))) && dispatch(Get())
      : dispatch(CreateCL(CL, id)) && dispatch(Get());
    urlid
      ? await dispatch(CreateSpare(Spare, urlid))
      : dispatch(CreateSpare(Spare, id));
    history.push("/");
    console.log(Spare);
  };

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
                  4xcube Limited{" "}
                </div>
              </td>
              <td width="10%">
                <div class="compliance-small-fonts blueborder">CCBill </div>
              </td>
              <td width="10%">
                <div class="compliance-small-fonts blueborder">1/1/2020</div>
              </td>
              <td width="10%">
                <div class="compliance-small-fonts">Adult / Dating</div>
              </td>
              <td width="10%">
                <div class="compliance-small-fonts text-center">NTC</div>
              </td>
              <td width="8%">
                <div class="compliance-small-fonts text-center">Trading</div>
              </td>
              <td width="8%">
                <div class="compliance-small-fonts">UK</div>
              </td>
              <td width="8%">
                <div class="compliance-small-fonts">No</div>
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
                      <td width="7%" rowspan="10">
                        <div class="compliance-td-fonts text-rotate-div">
                          <span class="text-rotate">
                            COMPANY DOCUMENTS / WEBSITE REVIEW
                          </span>
                        </div>
                      </td>
                    </tr>

                    <TR
                      name1={"Fully Completed Application Form"}
                      value={CL.fcaf_status}
                      name={"fcaf_status"}
                      Change={(e) => {
                        handleChange(e);
                      }}
                    />
                    <TR
                      name1={"Bank Information (Welcome Letter)"}
                      name={"bi_status"}
                      value={CL.bi_status}
                      Change={(e) => {
                        handleChange(e);
                      }}
                    />
                    <TR
                      name1={"Office Tenancy Agreement"}
                      name={"ota_status"}
                      value={CL.ota_status}
                      Change={(e) => {
                        handleChange(e);
                      }}
                    />
                    <TR
                      name1={"Acquiring Processing Statements"}
                      name={"aps_status"}
                      value={CL.aps_status}
                      Change={(e) => {
                        handleChange(e);
                      }}
                    />
                    <TR
                      name1={"Headline Website URL Address"}
                      name={"hwua_status"}
                      value={CL.hwua_status}
                      Change={(e) => {
                        handleChange(e);
                      }}
                    />
                    <TR
                      name1={"Website Compliance"}
                      name={"wc_status"}
                      value={CL.wc_status}
                      Change={(e) => {
                        handleChange(e);
                      }}
                    />
                    <TR
                      name1={"Website URL - Proof of Domain"}
                      name={"wuod_status"}
                      value={CL.wuod_status}
                      Change={(e) => {
                        handleChange(e);
                      }}
                    />
                    <TR
                      name1={"Ownership Structure Chart"}
                      name={"owsc_status"}
                      value={CL.owsc_status}
                      Change={(e) => {
                        handleChange(e);
                      }}
                    />
                    <TR
                      name1={"Business Plan"}
                      name={"bp_status"}
                      value={CL.bp_status}
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
                    />
                  </tbody>
                </table>
              </td>
              <td width="35%" valign="top">
                <table
                  width="100%"
                  border="1"
                  cellpadding="0"
                  cellspacing="0"
                  class="mb-2 bordercllr"
                >
                  <tr>
                    <td colspan="2">
                      <div class="td-preaproval solu-notess">
                        SOLUTION NOTES & ACTIVITY
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td width="33%">
                      <div class="td-preaproval solu-dates no_bordr min_heightt">
                        &nbsp;&nbsp; DATE &nbsp;&nbsp;
                      </div>
                    </td>
                    <td width="67%">
                      <div class="td-preaproval solu-dates no_bordr min_heightt">
                        E-mail | Skype | WhatsApp | Telegram
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="date"
                        name="note-date"
                        value=""
                        class="acri-sec no_bordr"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="note-box"
                        value="Sent to IFX"
                        class="acri-sec no_bordr"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="date"
                        name="note-date"
                        value=""
                        class="acri-sec no_bordr"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="note-box"
                        value="Sent to IFX"
                        class="acri-sec no_bordr"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="date"
                        name="note-date"
                        value=""
                        class="acri-sec no_bordr"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="note-box"
                        value="Sent to IFX"
                        class="acri-sec no_bordr"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="date"
                        name="note-date"
                        value=""
                        class="acri-sec no_bordr"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="note-box"
                        value="Sent to IFX"
                        class="acri-sec no_bordr"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="date"
                        name="note-date"
                        value=""
                        class="acri-sec no_bordr"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="note-box"
                        value="Sent to IFX"
                        class="acri-sec no_bordr"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="date"
                        name="note-date"
                        value=""
                        class="acri-sec no_bordr"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="note-box"
                        value="Sent to IFX"
                        class="acri-sec no_bordr"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="date"
                        name="note-date"
                        value=""
                        class="acri-sec no_bordr"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="note-box"
                        value="Sent to IFX"
                        class="acri-sec no_bordr"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="date"
                        name="note-date"
                        value=""
                        class="acri-sec no_bordr"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="note-box"
                        value="Sent to IFX"
                        class="acri-sec no_bordr"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="date"
                        name="note-date"
                        value=""
                        class="acri-sec no_bordr"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="note-box"
                        value="Sent to IFX"
                        class="acri-sec no_bordr"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="date"
                        name="note-date"
                        value=""
                        class="acri-sec no_bordr"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="note-box"
                        value="Sent to IFX"
                        class="acri-sec no_bordr"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="date"
                        name="note-date"
                        value=""
                        class="acri-sec no_bordr"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="note-box"
                        value="Sent to IFX"
                        class="acri-sec no_bordr"
                      />
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </thead>
        </table>

        <div class="accordion" id="accordionExample">
          <div class="card">
            <div class="card-header" id="headingOne">
              <h2 class="mb-0">
                <button
                  class="btn  btn-block text-left"
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
              class="collapse "
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
                              <a
                                href="#"
                                class="compliance-td-fonts blueborder text-center"
                              >
                                <img src="/images/card-img10.png" />
                              </a>
                            </td>
                            <td width="3%">&nbsp;</td>

                            <td width="10%">
                              <a
                                href="#"
                                class="compliance-td-fonts blueborder text-center"
                              >
                                <img src="/images/card-img10.png" />
                              </a>
                            </td>
                            <td width="3%">&nbsp;</td>

                            <td width="10%">
                              <a
                                href="#"
                                class="compliance-td-fonts blueborder text-center"
                              >
                                <img src="/images/card-img10.png" />
                              </a>
                            </td>
                            <td width="3%">&nbsp;</td>

                            <td width="10%">
                              <a
                                href="#"
                                class="compliance-td-fonts blueborder text-center"
                              >
                                <img src="/images/card-img10.png" />
                              </a>
                            </td>
                            <td width="30%">&nbsp;</td>
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
                            <td width="7%" rowspan="10">
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
                           
                          /> */}
                        </tbody>
                      </table>
                    </td>
                    <td width="35%" valign="top">
                      <table
                        width="100%"
                        border="1"
                        cellpadding="0"
                        cellspacing="0"
                        class="mb-2 bordercllr"
                      >
                        <tr>
                          <td colspan="2">
                            <div class="td-preaproval solu-notess">
                              SOLUTION NOTES & ACTIVITY
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td width="33%">
                            <div class="td-preaproval solu-dates no_bordr min_heightt">
                              &nbsp;&nbsp; DATE &nbsp;&nbsp;
                            </div>
                          </td>
                          <td width="67%">
                            <div class="td-preaproval solu-dates no_bordr min_heightt">
                              E-mail | Skype | WhatsApp | Telegram
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                      </table>
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
                  class="btn  btn-block text-left collapsed "
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
                            <td width="7%" rowspan="10">
                              <div class="compliance-td-fonts text-rotate-div">
                                <span class="text-rotate">
                                  COMPANY DOCUMENTS / WEBSITE REVIEW
                                </span>
                              </div>
                            </td>
                          </tr>

                          <TR
                            name1={"Certificate of Incorporation"}
                            value={CL.coi_status}
                            name={"coi_status"}
                            Change={(e) => {
                              handleChange(e);
                            }}
                          />
                          <TR
                            name1={"Memorandum of Association"}
                            value={CL.moa_status}
                            name={"moa_status"}
                            Change={(e) => {
                              handleChange(e);
                            }}
                          />
                          <TR
                            name1={"Articles of Association"}
                            value={CL.aoa_status}
                            name={"aoa_status"}
                            Change={(e) => {
                              handleChange(e);
                            }}
                          />
                          <TR
                            name1={"Share Register"}
                            value={CL.sr_status}
                            name={"sr_status"}
                            Change={(e) => {
                              handleChange(e);
                            }}
                          />
                          <TR
                            name1={"Share Certificate(s) - Signed"}
                            value={CL.scs_status}
                            name={"scs_status"}
                            Change={(e) => {
                              handleChange(e);
                            }}
                          />
                          <TR
                            name1={"Current Commercial Register Extract"}
                            value={CL.ccre_status}
                            name={"ccre_status"}
                            Change={(e) => {
                              handleChange(e);
                            }}
                          />
                          <TR
                            name1={"Current Letter of Good Standing"}
                            value={CL.clg_status}
                            name={"clg_status"}
                            Change={(e) => {
                              handleChange(e);
                            }}
                          />
                          <TR
                            name1={""}
                            value={""}
                            name={"clg_status"}
                            Change={(e) => {
                              handleChange(e);
                            }}
                          />
                          <TR
                            name1={""}
                            value={""}
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
                           
                          /> */}
                        </tbody>
                      </table>
                    </td>
                    <td width="35%" valign="top">
                      <table
                        width="100%"
                        border="1"
                        cellpadding="0"
                        cellspacing="0"
                        class="mb-2 bordercllr"
                      >
                        <tr>
                          <td colspan="2">
                            <div class="td-preaproval solu-notess">
                              SOLUTION NOTES & ACTIVITY
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td width="33%">
                            <div class="td-preaproval solu-dates no_bordr min_heightt">
                              &nbsp;&nbsp; DATE &nbsp;&nbsp;
                            </div>
                          </td>
                          <td width="67%">
                            <div class="td-preaproval solu-dates no_bordr min_heightt">
                              E-mail | Skype | WhatsApp | Telegram
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                      </table>
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
                  class="btn  btn-block text-left collapsed"
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
                            <td width="7%" rowspan="10">
                              <div class="compliance-td-fonts text-rotate-div">
                                <span class="text-rotate">
                                  COMPANY DOCUMENTS / WEBSITE REVIEW
                                </span>
                              </div>
                            </td>
                            <td width="58%">
                              <div class="compliance-td-fonts min_heightt marign_bt3">
                                Fulfilment or Drop Shipping Agreement
                              </div>
                            </td>
                            <td width="35%">
                              <select
                                value={""}
                                class="compliance-td-fonts yellobg text-center min_heightt marign_bt3 width_100"
                              >
                                <option>Complete</option>
                                <option>Pending</option>
                              </select>
                            </td>
                          </tr>

                          <TR
                            id={"check9"}
                            id1={"check10"}
                            id3={"check11"}
                            name1={"Copywrite or Re-seller Agreement"}
                            status={"COMPLETE"}
                          />
                          <TR
                            id={"check12"}
                            id1={"check13"}
                            id3={"check14"}
                            name1={"Corporate Bank Statements"}
                            status={"COMPLETE"}
                          />
                          <TR
                            id={"check15"}
                            id1={"check16"}
                            id3={"check17"}
                            name1={"Personal Bank Statements"}
                            status={"COMPLETE"}
                          />
                          <TR
                            id={"check18"}
                            id1={"check19"}
                            id3={"check20"}
                            name1={"Proof of Wealth"}
                            status={"COMPLETE"}
                          />
                          <TR
                            id={"check21"}
                            id1={"check22"}
                            id3={"check23"}
                            name1={"Company AML Policy"}
                            status={"COMPLETE"}
                          />
                          <TR
                            id={"check24"}
                            id1={"check25"}
                            id3={"check26"}
                            name1={"Gambling or Forex License"}
                            status={"COMPLETE"}
                          />
                          <TR
                            id={"check27"}
                            id1={"check28"}
                            id3={"check29"}
                            name1={"FBO (Food) Company Registration"}
                            status={"COMPLETE"}
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
                          <TR1 id2={"check9"} id1={"check10"} id3={"check11"} />
                          <TR1
                            id2={"check12"}
                            id1={"check13"}
                            id3={"check14"}
                          />
                          <TR1
                            id2={"check15"}
                            id1={"check16"}
                            id3={"check17"}
                          />
                          <TR1
                            id2={"check18"}
                            id1={"check19"}
                            id3={"check20"}
                          />
                          <TR1
                            id2={"check21"}
                            id1={"check22"}
                            id3={"check23"}
                          />
                          <TR1
                            id2={"check24"}
                            id1={"check25"}
                            id3={"check26"}
                          />
                          <TR1
                            id2={"check29"}
                            id1={"check28"}
                            id3={"check27"}
                          />
                          <TR1
                            id2={"check30"}
                            id1={"check31"}
                            id3={"check32"}
                          />
                          <TR1
                            id2={"check35"}
                            id1={"check34"}
                            id3={"check33"}
                          />
                          <TR1
                            id2={"check38"}
                            id1={"check37"}
                            id3={"check36"}
                          />
                        </tbody>
                      </table>
                    </td>
                    <td width="35%" valign="top">
                      <table
                        width="100%"
                        border="1"
                        cellpadding="0"
                        cellspacing="0"
                        class="mb-2 bordercllr"
                      >
                        <tr>
                          <td colspan="2">
                            <div class="td-preaproval solu-notess">
                              SOLUTION NOTES & ACTIVITY
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td width="33%">
                            <div class="td-preaproval solu-dates no_bordr min_heightt">
                              &nbsp;&nbsp; DATE &nbsp;&nbsp;
                            </div>
                          </td>
                          <td width="67%">
                            <div class="td-preaproval solu-dates no_bordr min_heightt">
                              E-mail | Skype | WhatsApp | Telegram
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                      </table>
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
                  class="btn  btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapsefour"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  MISCELLANEOUS DOCUMENTS
                </button>
              </h2>
            </div>
            <div
              id="collapsefour"
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
                            <td width="7%" rowspan="10">
                              <div class="compliance-td-fonts text-rotate-div">
                                <span class="text-rotate">
                                  COMPANY DOCUMENTS / WEBSITE REVIEW
                                </span>
                              </div>
                            </td>
                            <td width="58%">
                              <div class="compliance-td-fonts min_heightt marign_bt3">
                                Sales Handoff Sheet (CCBill Only)
                              </div>
                            </td>
                            <td width="35%">
                              <select
                                value={""}
                                class="compliance-td-fonts yellobg text-center min_heightt marign_bt3 width_100"
                              >
                                <option>Complete</option>
                                <option>Pending</option>
                              </select>
                            </td>
                          </tr>

                          <TR
                            id={"check9"}
                            id1={"check10"}
                            id3={"check11"}
                            name1={"Confirmation & Declaration Form (GGS Only)"}
                            status={"COMPLETE"}
                          />
                          <TR
                            id={"check12"}
                            id1={"check13"}
                            id3={"check14"}
                            name1={"spare"}
                            status={"COMPLETE"}
                          />
                          <TR
                            id={"check15"}
                            id1={"check16"}
                            id3={"check17"}
                            name1={"spare"}
                            status={"COMPLETE"}
                          />
                          <TR
                            id={"check18"}
                            id1={"check19"}
                            id3={"check20"}
                            name1={"spare"}
                            status={"COMPLETE"}
                          />
                          <TR
                            id={"check21"}
                            id1={"check22"}
                            id3={"check23"}
                            name1={"spare"}
                            status={"COMPLETE"}
                          />
                          <TR
                            id={"check24"}
                            id1={"check25"}
                            id3={"check26"}
                            name1={"spare"}
                            status={"COMPLETE"}
                          />
                          <TR
                            id={"check27"}
                            id1={"check28"}
                            id3={"check29"}
                            name1={"spare"}
                            status={"COMPLETE"}
                          />
                          <TR
                            id={"check30"}
                            id1={"check31"}
                            id3={"check32"}
                            name1={"spare"}
                            status={"COMPLETE"}
                          />
                          <TR
                            id={"check9"}
                            id1={"check"}
                            id3={"check35"}
                            name1={"spare  "}
                            status={"COMPLETE"}
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
                                    id="check59"
                                    name="merchant-checkbox"
                                  />
                                  <label for="check59"></label>
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
                          <TR1 id2={"check9"} id1={"check10"} id3={"check11"} />
                          <TR1
                            id2={"check12"}
                            id1={"check13"}
                            id3={"check14"}
                          />
                          <TR1
                            id2={"check15"}
                            id1={"check16"}
                            id3={"check17"}
                          />
                          <TR1
                            id2={"check18"}
                            id1={"check19"}
                            id3={"check20"}
                          />
                          <TR1
                            id2={"check21"}
                            id1={"check22"}
                            id3={"check23"}
                          />
                          <TR1
                            id2={"check24"}
                            id1={"check25"}
                            id3={"check26"}
                          />
                          <TR1
                            id2={"check29"}
                            id1={"check28"}
                            id3={"check27"}
                          />
                          <TR1
                            id2={"check30"}
                            id1={"check31"}
                            id3={"check32"}
                          />
                          <TR1
                            id2={"check35"}
                            id1={"check34"}
                            id3={"check33"}
                          />
                          <TR1
                            id2={"check38"}
                            id1={"check37"}
                            id3={"check36"}
                          />
                        </tbody>
                      </table>
                    </td>
                    <td width="35%" valign="top">
                      <table
                        width="100%"
                        border="1"
                        cellpadding="0"
                        cellspacing="0"
                        class="mb-2 bordercllr"
                      >
                        <tr>
                          <td colspan="2">
                            <div class="td-preaproval solu-notess">
                              SOLUTION NOTES & ACTIVITY
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td width="33%">
                            <div class="td-preaproval solu-dates no_bordr min_heightt">
                              &nbsp;&nbsp; DATE &nbsp;&nbsp;
                            </div>
                          </td>
                          <td width="67%">
                            <div class="td-preaproval solu-dates no_bordr min_heightt">
                              E-mail | Skype | WhatsApp | Telegram
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                      </table>
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
                  class="btn  btn-block text-left collapsed"
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
                            <td width="7%" rowspan="10">
                              <div class="compliance-td-fonts text-rotate-div">
                                <span class="text-rotate">
                                  COMPANY DOCUMENTS / WEBSITE REVIEW
                                </span>
                              </div>
                            </td>
                            <td width="58%">
                              <div class="compliance-td-fonts min_heightt marign_bt3">
                                TRADING INFORMATION
                              </div>
                            </td>
                            <td width="35%">
                              <select
                                value={""}
                                class="compliance-td-fonts yellobg text-center min_heightt marign_bt3 width_100"
                              >
                                <option>Complete</option>
                                <option>Pending</option>
                              </select>
                            </td>
                          </tr>

                          <TR
                            id={"check9"}
                            id1={"check10"}
                            id3={"check11"}
                            name1={"KNOW YOUR CUSTOMER (KYC)"}
                            status={"COMPLETE"}
                          />
                          <TR
                            id={"check12"}
                            id1={"check13"}
                            id3={"check14"}
                            name1={"KNOW YOUR BUSINESS (KYB)"}
                            status={"COMPLETE"}
                          />
                          <TR
                            id={"check15"}
                            id1={"check16"}
                            id3={"check17"}
                            name1={"SUPPORTING DOCUMENTS"}
                            status={"COMPLETE"}
                          />
                          <TR
                            id={"check18"}
                            id1={"check19"}
                            id3={"check20"}
                            name1={"MISCELLANEOUS DOCUMENTS"}
                            status={"COMPLETE"}
                          />
                          <TR
                            id={"check21"}
                            id1={"check22"}
                            id3={"check23"}
                            name1={"CHECKED BY:"}
                            status={"COMPLETE"}
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
                                value={""}
                                name="ApprovalBuyRate2"
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
                                value={""}
                                name="ApprovalBuyRate2"
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
                                value={""}
                                name="ApprovalBuyRate2"
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
                          <TR2 id={"check9"} id1={"check10"} id3={"check11"} />
                          <TR2 id={"check12"} id1={"check13"} id3={"check14"} />
                          <TR2 id={"check15"} id1={"check16"} id3={"check17"} />
                          <TR2 id={"check18"} id1={"check19"} id3={"check20"} />
                          <TR2 id={"check21"} id1={"check22"} id3={"check23"} />
                          <TR2 />
                          <TR2 />
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
                      <table
                        width="100%"
                        border="1"
                        cellpadding="0"
                        cellspacing="0"
                        class="mb-2 bordercllr"
                      >
                        <tr>
                          <td colspan="2">
                            <div class="td-preaproval solu-notess">
                              SOLUTION NOTES & ACTIVITY
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td width="33%">
                            <div class="td-preaproval solu-dates no_bordr min_heightt">
                              &nbsp;&nbsp; DATE &nbsp;&nbsp;
                            </div>
                          </td>
                          <td width="67%">
                            <div class="td-preaproval solu-dates no_bordr min_heightt">
                              E-mail | Skype | WhatsApp | Telegram
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="date"
                              name="note-date"
                              value=""
                              class="acri-sec no_bordr"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              name="note-box"
                              value="Sent to IFX"
                              class="acri-sec no_bordr"
                            />
                          </td>
                        </tr>
                      </table>
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
