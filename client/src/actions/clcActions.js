import axios from "axios";
export const Counter = (obj, id) => async (dispatch) => {
  try {
    let url = "/api/clc";
    await axios.put(url, { clc: obj, id: id }).then((res) => {
      console.log("Clc action");
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
export const GetOne = (id) => async (dispatch) => {
  await axios.get("/api/ci/" + id, { id: id }).then((res) => {
    dispatch({
      type: "GET_CTI",
      payload: res.data.cti,
    });
  });
};
export default Create;
