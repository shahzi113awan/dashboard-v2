export const Received = () => async (dispatch) => {
  try {
    dispatch({
      type: "SET_completed",
      payload: true,
    });
  } catch (err) {
    dispatch({
      type: "Error in Completed",
    });
    // console.error('Errror from Action');
  }
};
export const pending = () => async (dispatch) => {
  try {
    dispatch({
      type: "SET_pending",
      payload: false,
    });
  } catch (err) {
    dispatch({
      type: "Error inm",
    });
  }
};
