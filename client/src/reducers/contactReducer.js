const initialState = {
  state: {
    fn: "",
    comp: "",
    jt: "",
    fa: "",
    email: "",
    da: "",
    waAdd: "",
    IMAdd: "",
    business: "",
    home: "",
    Bfax: "",
    mob: "",
    Add: "",
  },
  isLoading: true,
};
export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_CONTACT":
      return {
        ...state,
        state: action.payload,
        id: action.id,
      };
    case "Delete_CONTACT":
      return {
        ...state,
        state: action.payload,
        id: action.id,
      };
    case "GET_CONTACT":
      return {
        ...state,
        state: action.payload,
        // id: action.id,
        isLoading: false,
      };
    case "Update_CONTACT":
      return {
        ...state,
        state: action.payload,
        // id: action.id,
        isLoading: false,
      };
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
