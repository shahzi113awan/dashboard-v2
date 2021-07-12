import React, { useState, useEffect } from "react";
import "../assets/css/integratWB.css";
import { useHistory, useParams } from "react-router-dom";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { CreateClient, GetClient } from "../actions/clientAction";
import { UpdateStatus ,Get} from "../actions/ciAction";

export default function ClientDetail() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { urlid } = useParams();

  const data = useSelector((state) => state.clientReducer.state);
  const id = useSelector((state) => state.ciReducer.id);
  useEffect(() => {
    urlid ? dispatch(GetClient()) : console.log("Creating");
  }, []);
  console.log(data);
  const [CD, setCD] = useState({});
  //handlers
  useEffect(() => {
    if (data) {
      setCD(data);
    }
  }, [data]);
  const changeHandler = (e, i) => {
    setCD({
      ...CD,
      [e.target.name]: e.target.value,
    });
    //    let list  = CD.basic;
    //  const newProjects = list.map((p, i) =>
    //    p.name === [e.target.name] + index ? { ...p, [e.target.name]: e.target.value } : p
    //  );

    //  console.log(newProjects);

    //   const { name, value } = e.target;
    //   let newArr = [...CD.basic];
    //   console.log(newArr);
    //   console.log(newArr[i]);
    //  settemp(newArr[i])
    //  temp = {...temp,[name]:value}
    //  console.log(temp);

    //   setCD({
    //     ...CD,
    //     [CD.basic]: newArr,
    //   });
    // console.log(CD);
    // const arr = [];

    // arr[e.target.name + i] = e.target.value;
    // setCD((prev) => ({
    //   ...prev,
    //   basic: [...prev.basic, ...arr],
    // }));
    // console.log(arr);
  };
  // console.log(CD);

  const onSubmit = (e) => {
    const date = moment().format("DD/MM/YYYY");
    e.preventDefault();

    urlid
      ? (dispatch(CreateClient(CD, urlid))) && dispatch(Get())
      : dispatch(CreateClient(CD, id)) && dispatch(Get());

    urlid
      ? dispatch(UpdateStatus("Integration", date, urlid))
      : dispatch(UpdateStatus("Integration", date, id));
      history.push("/integrationDb");
  };
  return (
    <div
      className="App"
      style={{ border: "1px solid black", marginLeft: "2%" }}
    >
      <table
        style={{
          marginLeft: "3%",
          padding: "2%",
          marginTop: "1%",
          marginBottom: "1% ",
        }}
      >
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
              <div class="compliance-small-fonts blueborder">{""}</div>
            </td>
            <td width="10%">
              <div class="compliance-small-fonts blueborder">{""}</div>
            </td>
            <td width="10%">
              <div class="compliance-small-fonts blueborder">{"defalut"}</div>
            </td>
            <td width="10%">
              <div class="compliance-small-fonts">Adult / Dating</div>
            </td>
            <td width="10%">
              <div class="compliance-small-fonts text-center">{""}</div>
            </td>
            <td width="8%">
              <div class="compliance-small-fonts text-center">{""}</div>
            </td>
            <td width="8%">
              <div class="compliance-small-fonts">{""}</div>
            </td>
            <td width="8%">
              <div class="compliance-small-fonts">{""}</div>
            </td>
            <td width="12%">&nbsp;</td>
          </tr>
        </thead>
      </table>
      <td width="12%">&nbsp;</td>
      <td width="29%" style={{ margin: "1%" }}>
        <div
          data-toggle="modal"
          data-target="#exampleModal"
          // to={`/ci/${urlid}`}
          class="compliance-td-fonts blueborder text-center"
        >
          <img src="/images/card-img10.png" />
        </div>
      </td>

      <div class="panel">
        <div class="d-inline-flex bd-highlight" id="main_contact">
          #1 Main Contcat Name:
        </div>
        <input
          value={CD.contactName}
          class="d-inline-flex bd-highlight"
          id="name"
          name="contactName"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
        <div class="d-inline-flex bd-highlight" id="telephone">
          Telephone Number:
        </div>
        <input
          value={CD.phoneNo}
          class="d-inline-flex bd-highlight"
          id="phone"
          name="phoneNo"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
        <div class="d-inline-flex bd-highlight" id="skype_address">
          Skype Address:
        </div>
        <input
          value={CD.skypeAdd}
          class="d-inline-flex bd-highlight"
          id="skype"
          name="skypeAdd"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
        <div class="panel">
          <div class="d-inline-flex bd-highlight" id="other">
            Other:
          </div>
          <input
            value={CD.other}
            class="d-inline-flex bd-highlight"
            id="skype"
            name="other"
            onChange={(e) => {
              changeHandler(e);
            }}
          />
        </div>
      </div>

      <div class="panel">
        <div class="d-inline-flex bd-highlight" id="main_contact">
          #1 Main Contcat Name:
        </div>
        <input
          value={CD.contactName1}
          class="d-inline-flex bd-highlight"
          id="name"
          name="contactName1"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
        <div class="d-inline-flex bd-highlight" id="telephone">
          Telephone Number:
        </div>
        <input
          value={CD.phoneNo1}
          class="d-inline-flex bd-highlight"
          id="phone"
          name="phoneNo1"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
        <div class="d-inline-flex bd-highlight" id="skype_address">
          Skype Address:
        </div>
        <input
          value={CD.skypeAdd1}
          class="d-inline-flex bd-highlight"
          id="skype"
          name="skypeAdd1"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
        <div class="panel">
          <div class="d-inline-flex bd-highlight" id="other">
            Other:
          </div>
          <input
            value={CD.other1}
            class="d-inline-flex bd-highlight"
            id="skype"
            name="other1"
            onChange={(e) => {
              changeHandler(e);
            }}
          />
        </div>
      </div>

      <div class="panel">
        <div class="d-inline-flex bd-highlight" id="main_contact">
          #3 Main Contcat Name:
        </div>
        <input
          value={CD.contactName2}
          class="d-inline-flex bd-highlight"
          id="name"
          name="contactName2"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
        <div class="d-inline-flex bd-highlight" id="telephone">
          Telephone Number:
        </div>
        <input
          value={CD.phoneNo2}
          class="d-inline-flex bd-highlight"
          id="phone"
          name="phoneNo2"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
        <div class="d-inline-flex bd-highlight" id="skype_address">
          Skype Address:
        </div>
        <input
          value={CD.skypeAdd2}
          class="d-inline-flex bd-highlight"
          id="skype"
          name="skypeAdd2"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
        <div class="panel">
          <div class="d-inline-flex bd-highlight" id="other">
            Other:
          </div>
          <input
            value={CD.other2}
            class="d-inline-flex bd-highlight"
            id="skype"
            name="other2"
            onChange={(e) => {
              changeHandler(e);
            }}
          />
        </div>
      </div>

      <div class="panel">
        <div class="d-inline-flex bd-highlight" id="main_contact">
          #4 Main Contcat Name:
        </div>
        <input
          value={CD.contactName3}
          class="d-inline-flex bd-highlight"
          id="name"
          name="contactName3"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
        <div class="d-inline-flex bd-highlight" id="telephone">
          Telephone Number:
        </div>
        <input
          value={CD.phoneNo3}
          class="d-inline-flex bd-highlight"
          id="phone"
          name="phoneNo3"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
        <div class="d-inline-flex bd-highlight" id="skype_address">
          Skype Address:
        </div>
        <input
          value={CD.skypeAdd3}
          class="d-inline-flex bd-highlight"
          id="skype"
          name="skypeAdd3"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
        <div class="panel">
          <div class="d-inline-flex bd-highlight" id="other">
            Other:
          </div>
          <input
            value={CD.other3}
            class="d-inline-flex bd-highlight"
            id="skype"
            name="other3"
            onChange={(e) => {
              changeHandler(e);
            }}
          />
        </div>
      </div>

      <div class="panel">
        <div class="d-inline-flex bd-highlight" id="main_contact">
          Company address:
        </div>
        <input
          value={CD.companyAddress1}
          class="d-inline-flex bd-highlight"
          id="name"
          name="companyAddress1"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
        <div class="d-inline-flex bd-highlight" id="mainURL">
          Main URL Address:
        </div>
        <input
          value={CD.mainUrl}
          name="mainUrl"
          class="d-inline-flex bd-highlight"
          id="mainURLInput"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
        <div class="d-inline-flex bd-highlight" id="tradingURL">
          Trading URL:
        </div>
        <input
          value={CD.tradingUrl}
          name="tradingUrl"
          class="d-inline-flex bd-highlight"
          id="tradingURLInput"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
      </div>
      <div class="panel">
        <input
          value={CD.companyAddress2}
          name="companyAddress2"
          class="d-inline-flex bd-highlight"
          id="address2"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
        <div class="d-inline-flex bd-highlight" id="tradingURL2">
          Trading URL:
        </div>
        <input
          value={CD.tradingUrl2}
          name="tradingUrl2"
          class="d-inline-flex bd-highlight"
          id="tradingURLInput2"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
      </div>
      <div class="panel">
        <input
          value={CD.companyAddress3}
          name="companyAddress3"
          class="d-inline-flex bd-highlight"
          id="address3"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
        <div class="d-inline-flex bd-highlight" id="telephone">
          MDR %:
        </div>
        <input
          value={CD.mdr}
          name="mdr"
          class="d-inline-flex bd-highlight"
          id="phone"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
      </div>
      <div class="panel">
        <input
          value={CD.companyAddress4}
          name="companyAddress4"
          class="d-inline-flex bd-highlight"
          id="address2"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
        <div class="d-inline-flex bd-highlight" id="telephone">
          Transaction Rate:
        </div>
        <input
          value={CD.transactionRate}
          name="transactionRate"
          class="d-inline-flex bd-highlight"
          id="phone"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
        <input
          value={CD.transactionRate1}
          name="transactionRate1"
          class="d-inline-flex bd-highlight"
          id="transactionField"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
        <input
          value={CD.transactionRate2}
          name="transactionRate2"
          class="d-inline-flex bd-highlight"
          id="skype"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
      </div>

      <div class="panel">
        <div class="d-inline-flex bd-highlight" id="main_contact">
          Country:
        </div>
        <input
          value={CD.country}
          name="country"
          class="d-inline-flex bd-highlight"
          id="name"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
        <div class="d-inline-flex bd-highlight" id="telephone">
          Refund Rate:
        </div>
        <input
          value={CD.refundRate}
          name="refundRate"
          class="d-inline-flex bd-highlight"
          id="phone"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
        <input
          value={CD.refundRate1}
          name="refundRate1"
          class="d-inline-flex bd-highlight"
          id="transactionField"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
        <input
          value={CD.refundRate2}
          name="refundRate2"
          class="d-inline-flex bd-highlight"
          id="skype"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
      </div>

      <div style={{ width: "40.5%", marginTop: "2%", marginLeft: "3%" }}>
        <div className="row">
          <div className="col-4 border">
            <input
              style={{ position: "relative" }}
              type="date"
              name={""}
              value={"props.valueD"}
              onChange={""}
              class="acri-sec no_bordr"
            />
          </div>
          <div className="col-8 border">
            <input
              type="text"
              name={""}
              value={""}
              onChange={""}
              class="acri-sec no_bordr"
            />
          </div>
        </div>
        <h1>{""}</h1>
        {/* <button  className="btn btn-primary ml-3 mt-3" onClick={props.delete }>Delete</button> */}
      </div>

      <div class="panel">
        <div class="d-inline-flex bd-highlight" id="Chargeback">
          Chargeback Fee:
        </div>
        <input
          value={CD.chargeBackFee}
          name="chargeBackFee"
          class="d-inline-flex bd-highlight"
          id="phone"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
        <input
          value={CD.chargeBackFee1}
          name="chargeBackFee1"
          class="d-inline-flex bd-highlight"
          id="transactionField"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
        <input
          value={CD.chargeBackFee2}
          name="chargeBackFee2"
          class="d-inline-flex bd-highlight"
          id="skype"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
      </div>
      <div class="panel">
        <div class="d-inline-flex bd-highlight" id="Chargeback">
          Settlement Currancy:
        </div>
        <input
          value={CD.settlementCurr}
          name="settlementCurr"
          class="d-inline-flex bd-highlight"
          id="phone"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
        <input
          value={CD.settlementCurr1}
          name="settlementCurr1"
          class="d-inline-flex bd-highlight"
          id="transactionField"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
        <input
          value={CD.settlementCurr2}
          name="settlementCurr2"
          class="d-inline-flex bd-highlight"
          id="skype"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
      </div>
      <div class="panel">
        <div class="d-inline-flex bd-highlight" id="Chargeback">
          Settlement Time:
        </div>
        <input
          value={CD.settlementTime}
          name="settlementTime"
          class="d-inline-flex bd-highlight"
          id="phone"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
        <input
          value={CD.settlementTime1}
          name="settlementTime1"
          class="d-inline-flex bd-highlight"
          id="transactionField"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
        <input
          value={CD.settlementTime2}
          name="settlementTime2"
          class="d-inline-flex bd-highlight"
          id="skype"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
      </div>
      <div class="panel">
        <div class="d-inline-flex bd-highlight" id="Chargeback">
          Rolling Reserve:
        </div>
        <input
          value={CD.rollingReserve}
          name="rollingReserve"
          class="d-inline-flex bd-highlight"
          id="phone"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
        <input
          value={CD.rollingReserve1}
          name="rollingReserve1"
          class="d-inline-flex bd-highlight"
          id="transactionField"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
        <input
          value={CD.rollingReserve2}
          name="rollingReserve2"
          class="d-inline-flex bd-highlight"
          id="skype"
          onChange={(e) => {
            changeHandler(e);
          }}
        />
      </div>
      <div className="mt-4 mb-4 ml-4">
        <button onClick={e=>{onSubmit(e)}} style={{ backgroundColor: "brown" }} className="btn text-white">
          SEND TO INTEGRATION
        </button>
      </div>
    </div>
  );
}
