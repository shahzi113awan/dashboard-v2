import axios from "axios";
export const CreateCI = (obj) => async (dipatch) => {
  await axios
    .post("/api/ci", {
      ci: obj,
      name: obj.tpi_rcName,
    })
    .then((res) => {
      console.log("Ci action");
      console.log(res.data);
      dipatch({
        type: "CREATE_CI",
        payload: res.data.state,
        id: res.data._id,
      });
    });
};

export const Get = (obj) => async (dispatch) => {
  dispatch(setLoading());

  const { data } = await axios.get("/api/ci");
  dispatch({
    type: "GET_CI",
    payload: data,
  });
};
export const GetOneCI = (id) => async (dispatch) => {
  dispatch(setLoading());
  await axios.get("/api/ci/" + id, { id: id }).then((res) => {
    // console.log("from action");
    // console.log(res.data);

    dispatch({
      type: "GET_CI",
      payload: res.data.ci,
    });
  });
};
export const Update = (obj, id) => async (dispatch) => {
  try {
    let url = "/api/cti";
    await axios.put(url, { cti: obj, id: id }).then(
      (res) =>
        dispatch({
          type: "CREATE_CTI",
          payload: res.data,
        }),
      console.log("XXXXXX" + id)
    );
  } catch {
    dispatch({
      type: "Error",
    });
  }
};
export const Delete = (id) => async (dispatch) => {
  try {
    let url = "/api/CI/";
    await axios.delete(url + id, { id: id }).then((res) =>
      // dispatch({
      //   type: "Delete_CI",
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
    let url = "/api/ci";
    await axios.put(url, { ci: obj, id: urlid }).then(
      (res) =>
        dispatch({
          type: "Update_CI",
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
