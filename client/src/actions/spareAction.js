import axios from "axios";
export const CreateSpare = (obj, id) => async (dispatch) => {
  try {
    await axios.put("/api/Spare", { spare: obj, id: id }).then((res) => {
      console.log("Spare action");
      console.log(res.data);
      dispatch({
        type: "CREATE_Spare",
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
export const GetOneSpare = (id) => async (dispatch) => {
  dispatch(setLoading());
  await axios.get("/api/ci/" + id, { id: id }).then((res) => {
    console.log(res.data.Spare);
    dispatch({
      type: "GET_Spare",
      payload: res.data.Spare,
    });
  });
};
export const INITIATESpare = (data) => async (dispatch) => {
  dispatch(setLoading());

  dispatch({
    type: "INITIALIZE_Spare",
    payload: data,
  });
};
export const setLoading = () => (dispatch) => {
  dispatch({
    type: "LOADING",
  });
};
