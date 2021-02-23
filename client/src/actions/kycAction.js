import axios from "axios";
export const Create = (obj, id) => async (dispatch) => {
  try {
   await axios.put("/api/KYC", { kyc: obj, id: id }).then((res) => {
      console.log("kyc action");
      console.log(res.data);
      dispatch({
        type: "CREATE_KYC",
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
      type: "GET_KYC",
      payload: res.data.kyc,
    });
  });
};
export default Create;
