import axios from 'axios'
export const CreateClient = (obj, id) => async (dispatch) => {
  try {
    let url = "/api/client";
    await axios.put(url, { client: obj, id: id }).then((res) => {
      console.log("Client action");
      console.log(res.data);
      dispatch({
        type: "CREATE_CLIENT",
        payload: res.data,
      });
    });
  } catch {
    dispatch({
      type: "Error",
    });
  }
};
export const GetClient = (id) => async (dispatch) => {
  await axios.get("/api/ci/" + id, { id: id }).then((res) => {
    dispatch({
      type: "GET_CLIENT",
      payload: res.data.client,
    });
  });
};
export const INITIATEClient = (data) => async (dispatch) => {
  dispatch({
    type: "INITIALIZE_CLIENT",
    payload: data,
  });
};
export const ResetClient = () => (dispatch) => {
  dispatch({
    type: "RESET_CLIENT",
  });
};