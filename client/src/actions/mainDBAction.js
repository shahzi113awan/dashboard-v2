import axios from "axios";

export const GetMDB = (obj) => async (dispatch) => {
  console.log("this action should");
  dispatch(setLoading());

  const { data } = await axios.get("/api/ci");
  dispatch({
    type: "GET_MDB",
    payload: data,
  });
};
export const setLoading = () => (dispatch) => {
  dispatch({
    type: "LOADING",
  });
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
