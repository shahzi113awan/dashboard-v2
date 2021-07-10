import React from "react";
import "../assets/css/integratWB.css";

export default function ClientDetail() {
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
        <input class="d-inline-flex bd-highlight" id="name" />
        <div class="d-inline-flex bd-highlight" id="telephone">
          Telephone Number:
        </div>
        <input class="d-inline-flex bd-highlight" id="phone" />
        <div class="d-inline-flex bd-highlight" id="skype_address">
          Skype Address:
        </div>
        <input class="d-inline-flex bd-highlight" id="skype" />
      </div>
      <div class="panel">
        <div class="d-inline-flex bd-highlight" id="other">
          Other:
        </div>
        <input class="d-inline-flex bd-highlight" id="skype" />
      </div>
      <div class="panel">
        <div class="d-inline-flex bd-highlight" id="main_contact">
          #2 Technical Contcat Name:
        </div>
        <input class="d-inline-flex bd-highlight" id="name" />
        <div class="d-inline-flex bd-highlight" id="telephone">
          Telephone Number:
        </div>
        <input class="d-inline-flex bd-highlight" id="phone" />
        <div class="d-inline-flex bd-highlight" id="skype_address">
          Skype Address:
        </div>
        <input class="d-inline-flex bd-highlight" id="skype" />
      </div>
      <div class="panel">
        <div class="d-inline-flex bd-highlight" id="other">
          Other:
        </div>
        <input class="d-inline-flex bd-highlight" id="skype" />
      </div>
      <div class="panel">
        <div class="d-inline-flex bd-highlight" id="main_contact">
          #3 Accounts Contcat Name:
        </div>
        <input class="d-inline-flex bd-highlight" id="name" />
        <div class="d-inline-flex bd-highlight" id="telephone">
          Telephone Number:
        </div>
        <input class="d-inline-flex bd-highlight" id="phone" />
        <div class="d-inline-flex bd-highlight" id="skype_address">
          Skype Address:
        </div>
        <input class="d-inline-flex bd-highlight" id="skype" />
      </div>
      <div class="panel">
        <div class="d-inline-flex bd-highlight" id="other">
          Other:
        </div>
        <input class="d-inline-flex bd-highlight" id="skype" />
      </div>
      <div class="panel">
        <div class="d-inline-flex bd-highlight" id="main_contact">
          Company address:
        </div>
        <input class="d-inline-flex bd-highlight" id="name" />
        <div class="d-inline-flex bd-highlight" id="mainURL">
          Main URL Address:
        </div>
        <input class="d-inline-flex bd-highlight" id="mainURLInput" />
        <div class="d-inline-flex bd-highlight" id="tradingURL">
          Trading URL:
        </div>
        <input class="d-inline-flex bd-highlight" id="tradingURLInput" />
      </div>
      <div class="panel">
        <input class="d-inline-flex bd-highlight" id="address2" />
        <div class="d-inline-flex bd-highlight" id="tradingURL2">
          Trading URL:
        </div>
        <input class="d-inline-flex bd-highlight" id="tradingURLInput2" />
      </div>
      <div class="panel">
        <input class="d-inline-flex bd-highlight" id="address3" />
        <div class="d-inline-flex bd-highlight" id="telephone">
          MDR %:
        </div>
        <input class="d-inline-flex bd-highlight" id="phone" />
      </div>
      <div class="panel">
        <input class="d-inline-flex bd-highlight" id="address2" />
        <div class="d-inline-flex bd-highlight" id="telephone">
          Transaction Rate:
        </div>
        <input class="d-inline-flex bd-highlight" id="phone" />
        <input class="d-inline-flex bd-highlight" id="transactionField" />
        <input class="d-inline-flex bd-highlight" id="skype" />
      </div>

      <div class="panel">
        <div class="d-inline-flex bd-highlight" id="main_contact">
          Country:
        </div>
        <input class="d-inline-flex bd-highlight" id="name" />
        <div class="d-inline-flex bd-highlight" id="telephone">
          Refund Rate:
        </div>
        <input class="d-inline-flex bd-highlight" id="phone" />
        <input class="d-inline-flex bd-highlight" id="transactionField" />
        <input class="d-inline-flex bd-highlight" id="skype" />
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
        <input class="d-inline-flex bd-highlight" id="phone" />
        <input class="d-inline-flex bd-highlight" id="transactionField" />
        <input class="d-inline-flex bd-highlight" id="skype" />
      </div>
      <div class="panel">
        <div class="d-inline-flex bd-highlight" id="Chargeback">
          Settlement Currancy:
        </div>
        <input class="d-inline-flex bd-highlight" id="phone" />
        <input class="d-inline-flex bd-highlight" id="transactionField" />
        <input class="d-inline-flex bd-highlight" id="skype" />
      </div>
      <div class="panel">
        <div class="d-inline-flex bd-highlight" id="Chargeback">
          Settlement Time:
        </div>
        <input class="d-inline-flex bd-highlight" id="phone" />
        <input class="d-inline-flex bd-highlight" id="transactionField" />
        <input class="d-inline-flex bd-highlight" id="skype" />
      </div>
      <div class="panel">
        <div class="d-inline-flex bd-highlight" id="Chargeback">
          Rolling Reserve:
        </div>
        <input class="d-inline-flex bd-highlight" id="phone" />
        <input class="d-inline-flex bd-highlight" id="transactionField" />
        <input class="d-inline-flex bd-highlight" id="skype" />
      </div>
      <div className="mt-4 mb-4 ml-4">
        <button style={{ backgroundColor: "brown" }} className="btn text-white">
          SEND TO INTEGRATION
        </button>
      </div>
    </div>
  );
}
