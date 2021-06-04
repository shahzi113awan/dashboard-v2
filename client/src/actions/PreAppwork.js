import axios from "axios";
export const CreateAPPW = (obj, id) => async (dispatch) => {
  try {
    let url = "/api/preappw";
    await axios.put(url, { AppW: obj, id: id }).then((res) => {
      console.log("Preappw action");
      console.log(res.data);
      dispatch({
        type: "CREATE_APPW",
        payload: res.data,
      });
    });
  } catch {
    dispatch({
      type: "Error",
    });
  }
};
export const GetOneAPPW = (id) => async (dispatch) => {
  
  await axios.get("/api/App/" + id, { id: id }).then((res) => {
 console.log("get one workbook");

    dispatch({
      type: "GET_APPW",
      payload: res.data.AppW,
    });
  });
};
export const INITIATEAPPW = (data) => async (dispatch) => {
  dispatch({
    type: "INITIALIZE_CTI",
    payload: data,
  });
};
