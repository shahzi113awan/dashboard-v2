import axios from "axios";
export const CreateKYB = (obj, id) => async (dispatch) => {
  try {
    await axios.put("/api/kyb", { kyb: obj, id: id }).then((res) => {
      console.log("action clicked");
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
export const GetOneKYB = (id) => (dispatch) => {
  axios.get("/api/ci/" + id, { id: id }).then((res) => {
    dispatch({
      type: "GET_KYB",
      payload: res.data.kyb,
    });
  });
};
