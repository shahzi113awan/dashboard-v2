import axios from "axios";
export const CreateCTI = (obj, id) => async (dispatch) => {
  try {
    let url = "/api/cti";
    await axios.put(url, { cti: obj, id: id }).then((res) => {
      console.log("Cti action");
      console.log(res.data);
      dispatch({
        type: "CREATE_CTI",
        payload: res.data,
      });
    });
  } catch {
    dispatch({
      type: "Error",
    });
  }
};
export const GetOneCTI = (id) => async (dispatch) => {
  await axios.get("/api/ci/" + id, { id: id }).then((res) => {
    dispatch({
      type: "GET_CTI",
      payload: res.data.cti,
    });
  });
};
export const INITIATECTI = (data) => async (dispatch) => {
  dispatch({
    type: "INITIALIZE_CTI",
    payload: data,
  });
};
