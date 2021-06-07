import { Button } from "reactstrap";
import '../assets/css/db.css'

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { GetIBAN,Delete } from "../actions/ciAction";
import Loader from "react-loader-spinner";
import Dashboard from './Dashboard'
import { HiOutlineDocumentReport } from 'react-icons/hi'

import moment from "moment";

export default function MainDashboard() {
  const history = useHistory();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetIBAN());
  }, [dispatch]);
  const [db, setDb] = useState([]);
  const data = useSelector((state) => state.ciReducer.state);
  // const isLoading = 'useSelector((state) => state.ciReducer.isLoading)'
  const isLoading = useSelector((state) => state.ciReducer.isLoading);
  console.log(data);
  useEffect(() => {
    setDb(data);
  }, [data]);

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
  return ( <Dashboard data={data} isLoading={isLoading}/>)


  
}
