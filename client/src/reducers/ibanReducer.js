const iniTisalState = { iban: false };

export const IbanReducer = (state = iniTisalState, action) => {
  switch (action.type) {
    case "SET_IBAN":
      //   console.log(action.payload);
      return { ...state, iban: action.payload };

    case "SET_CARD":
      //   console.log("log from Reducer");
      //   console.log(action.payload);
      return { ...state, iban: action.payload };
    default:
      return state;
  }
};
