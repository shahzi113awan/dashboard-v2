import axios from "axios";
export const CreateKYB = (obj, id) => async (dispatch) => {
  try {
    await axios.put("/api/kyb", { kyb: obj, id: id }).then((res) => {
      console.log(res.data);
      dispatch({
        type: "CREATE_KYB",
        payload: res.data,
      });
    });
  } catch (err) {
    dispatch({
      type: "Error in Completed",
    });
    // console.error('Errror from Action');
  }
};
export const GetOneKYB = (id) => async (dispatch) => {
  await axios.get("/api/ci/" + id, { id: id }).then((res) => {
    dispatch({
      type: "GET_KYB",
      payload: res.data.kyb,
    });
  });
};
export const INITIATEKYB = (data) => async (dispatch) => {
 

  dispatch({
    type: "INITIALIZE_KYB",
    payload: data,
  });
};

export const ResetKYB = () => (dispatch) => {
  dispatch({
    type: "RESET_KYB",
  });
};