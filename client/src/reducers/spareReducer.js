const initialState = {
  state: [
    {
      text: "",
      note: "",
      status: "",
      path: ""
    },
  ],
};

export const SpareReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INITIALIZE_Spare":
      return { ...state, state: action.payload, isLoading: false };
    case "CREATE_Spare":
      return { ...state, state: action.payload };
    case "GET_Spare":
      return { ...state, state: action.payload, isLoading: false };
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
