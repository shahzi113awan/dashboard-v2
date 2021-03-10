import { Button } from "reactstrap";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Get } from "../actions/ciAction";

export default function MainDashboard() {
  const { id } = useParams();
  console.log(id);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Get());
  }, [dispatch]);
  const [db, setDb] = useState([]);
  const data = useSelector((state) => state.ciReducer.state);
  // const isLoading = 'useSelector((state) => state.ciReducer.isLoading)'
  console.log(data.cl);
  useEffect(() => {
    setDb(data);
  }, [data]);
  console.log(db);
  const isLoading = useSelector((state) => state.ciReducer.isLoading);
  if (!data) {
    window.location.reload();
  }
  console.log(isLoading);

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

              <th scope="col"> Spare Doc Name</th>
              <th scope="col"> Status</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((res, index) => {
                if (res._id == id) {
                  return (
                    <React.Fragment>
                      <tr>
                        {/* <h1>hahaha</h1> */}
                        <th scope="row">{index + 1}</th>
                        <td>{res.cl.spare_Text}</td>
                        <td>{res.cl.spare}</td>
                      </tr>
                      <tr>
                        <th scope="row">{index + 2}</th>

                        <td>{res.cl.spare1_Text}</td>
                        <td>{res.cl.spare1}</td>
                      </tr>
                      <tr>
                        <th scope="row">{index + 3}</th>

                        <td>{res.cl.spare2_Text}</td>
                        <td>{res.cl.spare2}</td>
                      </tr>
                      <tr>
                        <th scope="row">{index + 4}</th>

                        <td>{res.cl.spare3_Text}</td>
                        <td>{res.cl.spare3}</td>
                      </tr>
                      <tr>
                        <th scope="row">{index + 5}</th>

                        <td>{res.cl.spare4_Text}</td>
                        <td>{res.cl.spare4}</td>
                      </tr>
                      <tr>
                        <th scope="row">{index + 6}</th>

                        <td>{res.cl.spare5_Text}</td>
                        <td>{res.cl.spare5}</td>
                      </tr>
                    </React.Fragment>
                  );
                }
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
