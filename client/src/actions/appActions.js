import axios from "axios";
export const CreateApp = (obj) => async (dipatch) => {
  await axios
    .post("/api/App", {
      App: obj,
      //   status: obj.status,
    })
    .then((res) => {
      console.log("App action");
      console.log(res.data);
      dipatch({
        type: "CREATE_App",
        payload: res.data.state,
        id: res.data._id,
      });
    });
};

export const Get = (obj) => async (dispatch) => {
  dispatch(setLoading());

  const { data } = await axios.get("/api/App"); 
  dispatch({
    type: "GET_App",
    payload: data,
  });
};
export const GetApproved = (obj) => async (dispatch) => {
  dispatch(setLoading());

  const { data } = await axios.get("/api/AppA"); 
  dispatch({
    type: "GET_App",
    payload: data,
  });
};
export const GetLost = (obj) => async (dispatch) => {
  dispatch(setLoading());

  const { data } = await axios.get("/api/AppL"); 
  dispatch({
    type: "GET_App",
    payload: data,
  });
};
export const Inital = (data) => async (dispatch) => {
  dispatch(setLoading());

  
  dispatch({
    type: "INITIAL_App",
    payload: data,
  });
};
export const GetOneApp = (id) => async (dispatch) => {
  dispatch(setLoading());
  await axios.get("/api/App/" + id, { id: id }).then((res) => {
    console.log("from action");
    console.log(res.data);
     if(!res.data.AppW){
       
       
         dispatch({
           type: "GET_App",
           payload: res.data.App,
           id:res.data._id

         });
           }
           else{
            dispatch({
              type: "GET_App",
              payload: res.data.App,
             
   
            });
           }
     
     
  });
};
// export const Update = (obj, id) => async (dispatch) => {
//   try {
//     let url = "/api/cti";
//     await axios.put(url, { App: obj, id: id }).then(
//       (res) =>
//         dispatch({
//           type: "CREATE_CTI",
//           payload: res.data,
//         }),
//       console.log("XXXXXX" + id)
//     );
//   } catch {
//     dispatch({
//       type: "Error",
//     });
//   }
// };
export const Delete = (id) => async (dispatch) => {
  try {
    let url = "/api/App/";
    await axios.delete(url + id, { id: id }).then((res) =>
      // dispatch({
      //   type: "Delete_App",
      //   payload: res.data,
      // }),
      console.log(res.data)
    );
  } catch {
    dispatch({
      type: "Error",
    });
  }
};

export const UpdateOne = (obj, urlid) => async (dispatch) => {
  try {
    let url = "/api/App";
    await axios.put(url, { App: obj, id: urlid }).then(
      (res) =>
        dispatch({
          type: "Update_App",
          payload: res.data,
        }),
      console.log(urlid)
    );
  } catch {
    dispatch({
      type: "Error",
    });
  }
};

export const setLoading = () => (dispatch) => {
  dispatch({
    type: "LOADING",
  });
};
