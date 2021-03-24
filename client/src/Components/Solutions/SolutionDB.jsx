import { Button } from "reactstrap";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Get } from "../../actions/solutionNavAction";

import Loader from "react-loader-spinner";

import moment from "moment";

export default function MainDashboard() {
  const history = useHistory();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Get());
  }, [dispatch]);
  const [db, setDb] = useState([]);
  const data = useSelector((state) => state.solReducer.state);
  // const isLoading = 'useSelector((state) => state.ciReducer.isLoading)'
  console.log(data);
  useEffect(() => {
    setDb(data);
  }, [data]);
  console.log(db);
  const isLoading = useSelector((state) => state.solReducer.isLoading);

  //   console.log(isLoading);
  //   const del = async (id) => {
  //     await dispatch(Delete(id));
  //     window.location.reload();
  //     // dispatch(GetLive());
  //   };

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
              <th scope="col"> # </th>
              <th scope="col" style={{ width: "200px" }}>
                Solution Name
              </th>
              <th scope="col">Solution Type</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((res, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>
                      <Link to={"/solution-nav/" + res._id}>
                        {res.solution_name ? res.solution_name : "Default Name"}
                      </Link>
                    </td>
                    <td>{res.solution_type}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
