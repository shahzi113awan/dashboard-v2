export const IBAN = () => async (dispatch) => {
  try {
    dispatch({
      type: "SET_IBAN",
      payload: true,
    });
  } catch (err) {
    dispatch({
      type: "Error in Completed",
    });
    // console.error('Errror from Action');
  }
};
export const CARD = () => async (dispatch) => {
  try {
    dispatch({
      type: "SET_CARD",
      payload: false,
    });
  } catch (err) {
    dispatch({
      type: "Error inm",
    });
  }
};
