import axios from "axios";

export const Create = (obj, id) => async (dispatch) => {
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
export const GetOne = (id) => async (dispatch) => {
  await axios.get("/api/ci/" + id, { id: id }).then((res) => {
    dispatch({
      type: "GET_SD",
      payload: res.data.sd,
    });
  });
};
export default Create;
