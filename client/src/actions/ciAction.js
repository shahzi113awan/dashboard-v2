import axios from "axios";
export const CreateCI = (obj) => async (dipatch) => {
  console.log("create action should"); 

  await axios
    .post("/api/ci", {
      ci: obj,
      name: obj.tpi_rcName,
    })
    .then((res) => {
      console.log("Ci action");
      console.log(res.data);
      dipatch({
        type: "CREATE_CI",
        payload: res.data.state,
        id: res.data._id,
      });
    });
};

export const Get = (obj) => async (dispatch) => {
  console.log("this action should");
  dispatch(setLoading());

  const { data } = await axios.get("/api/ci");
  dispatch({
    type: "GET_CI",
    payload: data,
  });
};
export const GetIBAN = (obj) => async (dispatch) => {
  console.log("this action should");
  dispatch(setLoading());

  const { data } = await axios.get("/api/IBAN");
  dispatch({
    type: "GET_IBAN",
    payload: data,
  });
};
//Live Getter
export const GetLive = (obj) => async (dispatch) => {
  dispatch(setLoading());

  const { data } = await axios.get("/api/ciLive");
  dispatch({
    type: "GET_CI",
    payload: data,
  });
};
export const GetArchive = (obj) => async (dispatch) => {
  dispatch(setLoading());

  const { data } = await axios.get("/api/ciArchive");
  dispatch({
    type: "GET_CI",
    payload: data,
  });
};
//Archive Getter
export const GetTrading = (obj) => async (dispatch) => {
  dispatch(setLoading());

  const { data } = await axios.get("/api/ciTrading");
  dispatch({
    type: "GET_CI",
    payload: data,
  });
};
export const GetOneCI = (id) => async (dispatch) => {
  console.log("getone action should");

  dispatch(setLoading());
  await axios.get("/api/ci/" + id, { id: id }).then((res) => {
    // console.log("from action");
    // console.log(res.data);

    dispatch({
      type: "GETONE_CI",
      payload: res.data.ci,
    });
  });
};
export const Update = (obj, id) => async (dispatch) => {
  console.log("update action should");

  try {
    let url = "/api/cti";
    await axios.put(url, { cti: obj, id: id }).then(
      (res) =>
        dispatch({
          type: "CREATE_CTI",
          payload: res.data,
        }),
      console.log("XXXXXX" + id)
    );
  } catch {
    dispatch({
      type: "Error",
    });
  }
};
export const Delete = (id) => async (dispatch) => {
  try {
    let url = "/api/CI/";
    await axios.delete(url + id, { id: id }).then((res) =>
      // dispatch({
      //   type: "Delete_CI",
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
  console.log("update one action should");

  try {
    let url = "/api/ci";
    await axios.put(url, { ci: obj, id: urlid }).then(
      (res) =>
        dispatch({
          type: "Update_CI",
          payload: res.data,
        }),
     
    );
  } catch {
    dispatch({
      type: "Error",
    });
  }
};
export const UpdateStatus = (status,date, urlid) => async (dispatch) => {
 

  try {
    let url = "/api/cistatus/";
    await axios
      .put(url + urlid, { id: urlid, cistatus: status, api_date:date })
      .then((res) =>
        dispatch({
          type: "Update_Status",
          payload: res.data,
        })
      );
  } catch {
    dispatch({
      type: "Error",
    });
  }
};
export const GetId = (id) => (dispatch) => {
  dispatch({
    type: 'UPDATE_ID',
    id: id
  })
}
export const setLoading = () => (dispatch) => {
  dispatch({
    type: "LOADING",
  });
};
export const setIBAN = () => (dispatch) => {
  dispatch({
    type: "IBAN",
    isIBAN:false
  });
};
export const ResetCI = () => (dispatch) => {
  dispatch({
    type: "RESET_CI",
  });
};
