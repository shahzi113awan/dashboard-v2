import axios from "axios";
export const CreatesolParams = (obj, id) => async (dipatch) => {
  await axios
    .put("/api/sol-params/", {
      solParam: obj,
      id: id,
      //   status: obj.status,
    })
    .then((res) => {
      console.log(res);
      dipatch({
        type: "CREATE_sol_Params",
        payload: res.data,
        // id: res.data._id,
      });
    });
};

export const Get = (obj) => async (dispatch) => {
  dispatch(setLoading());

  const { data } = await axios.get("/api/sol-params");
  dispatch({
    type: "GET_sol_Params",
    payload: data,
  });
};

export const Inital = (data) => async (dispatch) => {
  dispatch(setLoading());

  dispatch({
    type: "INITIAL_sol_Params",
    payload: data,
  });
};
export const GetOnesol = (id) => async (dispatch) => {
  dispatch(setLoading());
  await axios.get("/api/sol-params/" + id, { id: id }).then((res) => {
    console.log("from action");
    console.log(res.data);

    dispatch({
      type: "GET_sol_Params",
      payload: res.data.sol,
    });
  });
};

export const Delete = (id) => async (dispatch) => {
  try {
    let url = "/api/sol-params/";
    await axios.delete(url + id, { id: id }).then((res) =>
      // dispatch({
      //   type: "Delete_sol_Params",
      //   payload: res.data,
      // }),
      console.log(res.data)
    );
  } catch {
    dispatch({
      type: "Error",
    });
  }
};

export const UpdateOne = (obj, urlid) => async (dispatch) => {
  try {
    let url = "/api/sol-params";
    await axios.put(url, { solParam: obj, id: urlid }).then(
      (res) =>
        dispatch({
          type: "Update_sol_Params",
          payload: res.data,
        }),
      console.log(urlid)
    );
  } catch {
    dispatch({
      type: "Error",
    });
  }
};

export const setLoading = () => (dispatch) => {
  dispatch({
    type: "LOADING",
  });
};
