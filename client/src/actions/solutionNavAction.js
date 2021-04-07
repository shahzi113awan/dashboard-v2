import axios from "axios";
export const Createsol = (obj) => async (dipatch) => {
  await axios
    .post("/api/sol", {
      sol: obj,
      //   status: obj.status,
    })
    .then((res) => {
      console.log(res);
      dipatch({
        type: "CREATE_sol",
        payload: res.data,
        id: res.data._id,
      });
    });
};

export const Get = (obj) => async (dispatch) => {
  dispatch(setLoading());

  const { data } = await axios.get("/api/sol");
  dispatch({
    type: "GET_sol",
    payload: data,
  });
};

export const Inital = (data) => async (dispatch) => {
  dispatch(setLoading());

  dispatch({
    type: "INITIAL_sol",
    payload: data,
  });
};
export const GetOnesol = (id) => async (dispatch) => {
  dispatch(setLoading());
  await axios.get("/api/sol/" + id, { id: id }).then((res) => {
    console.log("from action");
    console.log(res.data);

    dispatch({
      type: "GET_sol",
      payload: res.data.sol,
    });
  });
};

export const Delete = (id) => async (dispatch) => {
  try {
    let url = "/api/sol/";
    await axios.delete(url + id, { id: id }).then((res) =>
      // dispatch({
      //   type: "Delete_sol",
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
    let url = "/api/sol";
    await axios.put(url, { sol: obj, id: urlid }).then(
      (res) =>
        dispatch({
          type: "Update_sol",
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
