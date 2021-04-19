import { Button } from "reactstrap";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Get, Delete, GetId } from "../../actions/ciAction";
import '../../assets/css/db.css'

import Loader from "react-loader-spinner";

import moment from "moment";

export default function MainDashboard() {
  const history = useHistory();

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

  console.log(isLoading);
  const del = async (id) => {
    await dispatch(Delete(id));
    window.location.reload();
    // dispatch(GetLive());
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
    <div
      style={{
        position: "absolute",
        zIndex: 10,
        width: "100%",
        height: "100%",
        backgroundColor: "lightgrey",
        opacity: 0.8,
        left: 0,
        // bottom: 0,
      }}
    >
      <div
        style={{
          textAlign: "center",
          // color: "white",
          marginTop: "20%",
        }}
      >
        <Loader type="Puff" color="#161f22" height={100} width={100} />
      </div>
    </div>
  ) : (
    <div className="container-fluid">
      <div class="table-responsive mt-5">
        <table class="table table-striped">
          <thead>
            <tr>
              <th className="th" scope="col"> # </th>
              <th className="th" scope="col" style={{ width: "200px" }}>
                Registered Company Name
              </th>
              <th className="th" scope="col">Company Information</th>
              <th className="th" scope="col ">Company Trading Info</th>
              <th className="th" scope="col">Know Your Customer</th>
              <th className="th" scope="col">Know your Business</th>
              <th className="th" scope="col ">Supporting Docs</th>
              <th className="th" scope="col ">Check List</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((res, index) => {
                {
                  if (res.ci) {
                    return (
                      <tr>
                        <th className="th" scope="row">{index + 1}</th>
                        <td style={{ position: "relative" }}>
                          {" "}
                          <Link to={"/ci/" + res._id}>
                            {res.ci.tpi_rcName === ""
                              ? "Default Name"
                              : res.ci.tpi_rcName}
                          </Link>
                        </td>
                        <td>{res.ci ? "Done" : "Missing"}</td>

                        <td>
                          {res.cti ? (
                            "Done"
                          ) : (
                            <Button
                              tag={Link}
                              onClick={(e) => {
                                dispatch(GetId(res._id));
                              }}
                              to={"/cti/"}
                            >
                              {"Missing"}
                            </Button>
                          )}
                        </td>
                        <td>
                          {res.kyc ? (
                            "Done"
                          ) : (
                            <Button
                              tag={Link}
                              onClick={(e) => {
                                dispatch(GetId(res._id));
                              }}
                              to={"/kyc/"}
                            >
                              {"Missing"}
                            </Button>
                          )}
                        </td>
                        <td>
                          {res.kyb ? (
                            "Done"
                          ) : (
                            <Button
                              tag={Link}
                              onClick={(e) => {
                                dispatch(GetId(res._id));
                              }}
                              to={"/kyb/"}
                            >
                              {"Missing"}
                            </Button>
                          )}
                        </td>
                        <td>
                          {res.sd ? (
                            "Done"
                          ) : (
                            <Button
                              tag={Link}
                              onClick={(e) => {
                                dispatch(GetId(res._id));
                              }}
                              to={"/sdkyb"}
                            >
                              {"Missing"}
                            </Button>
                          )}
                        </td>
                        <td>
                          {res.cl ? (
                            "Done"
                          ) : (
                            <Button
                              tag={Link}
                              onClick={(e) => {
                                dispatch(GetId(res._id));
                              }}
                              to={"/check-list"}
                            >
                              {"Missing"}
                            </Button>
                          )}
                        </td>
                      </tr>
                    );
                  }
                }
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
