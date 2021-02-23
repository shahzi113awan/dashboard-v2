import axios from "axios";
export const Get = () => async (dispatch) => {
  let url = "/api/ci";

  try {
    dispatch({
      type: "Product_List_Request",
    });
    const { data } = await axios.get(url);
    dispatch({
      type: "GET_MDB",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "Product_List_Fail",
      payload: "Error",
    });
  }
};
//   try {
//    const {data} =  await axios.get(url);
//         dispatch({
//           payload: data,
//         }),

//   } catch {
//     dispatch({
//       type: "Error",
//     });
//   }
// };
export default Create;
