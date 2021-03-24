import axios from "axios";
export const CreateContact = (obj) => async (dipatch) => {
  await axios
    .post("/api/contact", {
      contact: obj,
      //   status: obj.status,
    })
    .then((res) => {
      console.log("contact action");
      console.log(res.data);
      dipatch({
        type: "CREATE_CONTACT",
        payload: res.data.state,
        id: res.data._id,
      });
    });
};

export const GetContacts = (obj) => async (dispatch) => {
  dispatch(setLoading());

  const { data } = await axios.get("/api/contact"); 
  dispatch({
    type: "GET_CONTACT",
    payload: data,
  });
};
 
export const Inital = (data) => async (dispatch) => {
  dispatch(setLoading());

  
  dispatch({
    type: "INITIAL_CONTACT",
    payload: data,
  });
};
export const GetOnecontact = (id) => async (dispatch) => {
  dispatch(setLoading());
  await axios.get("/api/contact/" + id, { id: id }).then((res) => {
    console.log("from action");
    console.log(res.data);

    dispatch({
      type: "GET_CONTACT",
      payload: res.data.contact,
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
    let url = "/api/contact/";
    await axios.delete(url + id, { id: id }).then((res) =>
      // dispatch({
      //   type: "Delete_CONTACT",
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
    let url = "/api/contact";
    await axios.put(url, { contact: obj, id: urlid }).then(
      (res) =>
        dispatch({
          type: "Update_CONTACT",
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
