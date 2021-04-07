import { Button } from "reactstrap";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { Get, Delete } from "../actions/ciAction";
import moment from "moment";

export default function MainDashboard() {
  const history = useHistory();
  const { id } = useParams();
  console.log(id);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Get());
  }, [dispatch]);
  const [db, setDb] = useState([]);
  const data = useSelector((state) => state.ciReducer.state);
  // const isLoading = 'useSelector((state) => state.ciReducer.isLoading)'
  console.log(data);
  useEffect(() => {
    setDb(data);
  }, [data]);
  console.log(db);
  const isLoading = useSelector((state) => state.ciReducer.isLoading);
  if (!data) {
    window.location.reload();
  }
  console.log(isLoading);
  const del = async (id) => {
    await dispatch(Delete(id));
    window.location.reload();
    // dispatch(Get());
  };
  const cal = (val) => {
    console.log(val);
    const Start = moment(new Date());
    console.log(Start);
    const End = moment(val).add(90, "d").format("YYYY-MM-DD");
    const Ending = moment(End);
    console.log(Ending);
    const days = Math.ceil(moment.duration(Ending.diff(Start)).asDays());
    console.log(days);
    return days;
  };

  console.log(isLoading);
  console.log(db);
  return isLoading ? (
    <h1 className="text-center">Loading</h1>
  ) : (
    <div className="container-fluid">
      <div class="table-responsive mt-5">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col"> # </th>

              <th scope="col">Shareholder / Director Name</th>
              <th scope="col">Shareholder</th>
              <th scope="col">Shareholding Percentage</th>
              <th scope="col "> Lead Director Passport</th>
              <th scope="col">Country / Nationality</th>
              <th scope="col">Notarised</th>
              <th scope="col "> Start Date</th>

              <th scope="col "> Expiry Date</th>
              <th scope="col "> Remaining Days</th>

              <th scope="col">Proof of Address (POA)</th>
              <th scope="col "> Type of POA</th>
              <th scope="col ">Notarised</th>
              <th scope="col ">POA Start Date</th>
              <th scope="col">POA Expiry Date (+90 days)</th>
              <th scope="col">Expiry Days</th>
              <th scope="col "> Power of Attorney Document</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((res, index) => {
                if (res._id == id) {
                  return res.kyc.map((data1, i) => {
                    return (
                      <tr>
                        {/* <h1>hahaha</h1> */}
                        <th scope="row">{i + 1}</th>

                        <td>{data1.kyc_name ? data1.kyc_name : ""}</td>
                        <td>{data1.kyc_sholders ? data1.kyc_sholders : ""}</td>
                        <td>{data1.kyc_sHolds ? data1.kyc_sHolds : ""}</td>
                        <td>{data1.kyc_notarized}</td>
                        <td>
                          {data1.kyc_nationality ? data1.kyc_nationality : ""}
                        </td>
                        <td>
                          {data1.kyc_notarized ? data1.kyc_notarized : ""}
                        </td>
                        <td>
                          {data1.kyc_startDate ? data1.kyc_startDate : ""}
                        </td>
                        <td>
                          {data1.kyc_ExpiryDate ? data1.kyc_ExpiryDate : ""}
                        </td>
                        <td>
                          {data1.kyc_startDate && moment
                            .duration(
                              moment(data1.kyc_ExpiryDate).diff(
                                moment(data1.kyc_startDate)
                              )
                            )
                            .asDays()}
                        </td>
                        <td>{data1.kyc_Address ? data1.kyc_Address : ""}</td>
                        <td>{data1.kyc_toProof ? data1.kyc_toProof : ""}</td>
                        <td>
                          {data1.kyc_notarized ? data1.kyc_notarized : ""}
                        </td>
                        <td>{data1.kyc_adstartDate}</td>
                        <td>{data1.kyc_adExpiryDate}</td>
                        <td>
                          {moment
                            .duration(
                              moment(data1.kyc_adExpiryDate).diff(
                                moment(data1.kyc_adstartDate)
                              )
                            )
                            .asDays()}
                        </td>
                        <td>
                          {data1.kyc_paDocument ? data1.kyc_paDocument : ""}
                        </td>
                      </tr>
                    );
                  });
                }
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
