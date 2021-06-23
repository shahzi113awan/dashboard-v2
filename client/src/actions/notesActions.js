import axios from "axios";
export const CreateNotes = (obj, id) => async (dispatch) => {
  try {
    await axios.put("/api/Notes", { Notes: obj, id: id }).then((res) => {
      console.log("Notes action");
      console.log(res.data);
      dispatch({
        type: "CREATE_Notes",
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
export const GetOneNotes = (id) => async (dispatch) => {
  dispatch(setLoading());
  await axios.get("/api/ci/" + id, { id: id }).then((res) => {
    console.log(res.data.Notes);
    dispatch({
      type: "GET_Notes",
      payload: res.data.Notes,
    });
  });
};
export const INITIATENotes = (data) => async (dispatch) => {
  dispatch(setLoading());

  dispatch({
    type: "INITIALIZE_Notes",
    payload: data,
  });
};
export const setLoading = () => (dispatch) => {
  dispatch({
    type: "LOADING",
  });
};
