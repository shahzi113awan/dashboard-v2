const iniTisalState = { complete: false };

export const completedReducer = (state = iniTisalState, action) => {
  switch (action.type) {
    case "SET_completed":
      //   console.log(action.payload);
      return { ...state, complete: action.payload };

    case "SET_pending":
      //   console.log("log from Reducer");
      //   console.log(action.payload);
      return { ...state, complete: action.payload };
    default:
      return state;
  }
};
