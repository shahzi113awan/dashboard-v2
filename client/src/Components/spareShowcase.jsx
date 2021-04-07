import { Button } from "reactstrap";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Get } from "../actions/ciAction"

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
  useEffect(() => {
    setDb(data);
  }, [data]);
  console.log(db);
  const isLoading = useSelector((state) => state.ciReducer.isLoading);
   
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
                        <td>{res.spare.text}</td>
                        <td>{res.spare.status}</td>
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
