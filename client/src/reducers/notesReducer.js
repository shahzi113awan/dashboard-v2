const initialState = {
  state: [
    {
      text: "",
      date:""
    },
  ],
};

export const NotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INITIALIZE_Notes":
      return { ...state, state: action.payload, isLoading: false };
    case "CREATE_Notes":
      return { ...state, state: action.payload };
    case "GET_Notes":
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
