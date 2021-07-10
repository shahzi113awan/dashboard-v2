 
import "../../assets/css/db.css";

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import { Delete, Get } from "../../actions/ciAction";
import Loader from "react-loader-spinner";
import Dashboard1 from "../Dashboard";
 

import moment from "moment";

export default function Dashboard() {
  // const history = useHistory();
  const ref = useRef(null);


  const dispatch = useDispatch();

  const [highlight, sethighlight] = useState(false);
  const [Index, setIndex] = useState();

  const data = useSelector((state) => state.ciReducer.state);
  const isLoading = useSelector((state) => state.ciReducer.isLoading);

  const onScrolling = (e) => {
    // console.log(e.target, 'window')
  };
  useEffect(() => {
    dispatch(Get())
     
   
  }, []);

   

  // console.log(isLoading);
  const del = async (id) => {
    await dispatch(Delete(id));
    window.location.reload();
    // dispatch(Get());
  };
  const cal = (val) => {
    // console.log(val);
    const Start = moment(new Date());
    // console.log(Start);
    const End = moment(val).add(90, "d").format("YYYY-MM-DD");
    const Ending = moment(End);
    // console.log(Ending);
    const days = Math.ceil(moment.duration(Ending.diff(Start)).asDays());
    // console.log(days);
    return days;
  };
  // console.log(isLoading);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  const toggle = (e, index) => {
    console.log("JJJ");
    setIndex(index);
    console.log(Index);
    sethighlight(!highlight);
  };
  console.log(Index);
  return (
    <Dashboard1 status="Integration" dateType={"Date of Integration"} data={data} isLoading={isLoading} />
  );
}
