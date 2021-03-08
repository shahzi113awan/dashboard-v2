import { Button } from "reactstrap";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Get, Delete } from "../../actions/appActions";
import moment from "moment";

export default function MainDashboard() {
  const history = useHistory();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Get());
  }, [dispatch]);
  const [db, setDb] = useState([]);
  const data = useSelector((state) => state.appReducer.state);
  // const isLoading = 'useSelector((state) => state.ciReducer.isLoading)'
  console.log(data);
  useEffect(() => {
    setDb(data);
  }, [data]);
  console.log(db);
  const isLoading = useSelector((state) => state.appReducer.isLoading);
  // if (!data) {
  //   window.location.reload();
  // }
  console.log(isLoading);
  const del = async (id) => {
    await dispatch(Delete(id));
    window.location.reload();
    // dispatch(Get());
  };
  //   console.log(data[0].App.af_rcn);
  console.log(isLoading);
  //   console.log(db);
  return isLoading ? (
    <h1 className="text-center">Loading</h1>
  ) : (
    <div className="container-fluid">
      <div class="table-responsive mt-5">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col"> # </th>
              <th scope="col" style={{ width: "200px" }} classNa>
                Registered Company Name
              </th>

              <th scope="col ">Application Date</th>
              <th scope="col ">Allocated Acquirer / Solution</th>
              <th scope="col ">Business / Referral Partner</th>
              <th scope="col">Assigned - BDM / Owner</th>
              <th scope="col">Introductory Person</th>
              <th scope="col ">Approval EMS / PayWyz - Buy Rate</th>
              <th scope="col "> Approval EMS / PayWyz - Sell Rate</th>
              <th scope="col "> Trading / New To Cards (NTC)</th>
              <th scope="col "> Vertical / Trading Sector</th>
              <th scope="col "> Trading Website Address</th>
              <th scope="col "> Website Backoffice/Access - User Name</th>
              <th scope="col "> Website Backoffice/Access - Password</th>
              <th scope="col "> Compliance Country Location</th>
              <th scope="col "> EEA Documents</th>
              <th scope="col ">Trading License</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((res, index) => {
                return (
                  <tr>
                    <th scope="row">1</th>
                    <td style={{ position: "relative" }}>
                      <Link to={"/app/" + res._id}>
                        {res.App.af_rcn ? res.App.af_rcn : "Default Name"}
                      </Link>
                    </td>

                    <td>{res.App.af_ad}</td>
                    <td> {res.App.af_sol}</td>
                    <td> {res.App.af_brp}</td>
                    <td> {res.App.af_abo}</td>
                    <td> {res.App.af_iP}</td>
                    <td> {res.App.af_appB}</td>
                    <td> {res.App.af_appS}</td>
                    <td> {res.App.af_ntc}</td>
                    <td> {res.App.af_vts}</td>
                    <td> {res.App.af_twa}</td>
                    <td> {res.App.af_wbaN}</td>
                    <td> {res.App.af_wbaP}</td>
                    <td> {res.App.af_ccl}</td>
                    <td> {res.App.af_eea}</td>
                    <td> {res.App.af_tla}</td>
                    {/* <td></td>
                    <td></td> */}

                    <Button
                      onClick={(e) => {
                        del(res._id);
                      }}
                    >
                      Delete
                    </Button>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
