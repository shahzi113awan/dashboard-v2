import axios from "axios";

export const CreateSD = (obj, id) => async (dispatch) => {
  try {
    await axios.put("/api/sd", { sd: obj, id: id }).then((res) => {
      dispatch({
        type: "CREATE_SD",
        payload: res.data,
      });
    });
  } catch (error) {
    dispatch({
      type: "Error",
      payload: error,
    });
  }
};
export const GetOneSD = (id) => async (dispatch) => {
  await axios.get("/api/ci/" + id, { id: id }).then((res) => {
    dispatch({
      type: "GET_SD",
      payload: res.data.sd,
    });
  });
};
export const INITIATESD = (data) => async (dispatch) => {
  dispatch({
    type: "INITIALIZE_SD",
    payload: data,
  });
};
export const ResetSD = () => (dispatch) => {
  dispatch({
    type: "RESET_SD",
  });
};