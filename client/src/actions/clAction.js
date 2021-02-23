import axios from "axios";
export const Create = (obj, id) => async (dispatch) => {
  try {
    let url = "/api/cl/";
    axios.put(url, { cl: obj, id: id }).then(
      (res) =>
        dispatch({
          type: "CREATE_cl",
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
export const GetOne = (id) => async (dispatch) => {
  await axios.get("/api/ci/" + id, { id: id }).then((res) => {
    // console.log("dispatchingggggggg");
    dispatch({
      type: "GET_CL",
      payload: res.data.cl,
    });
  });
};
export default Create;
