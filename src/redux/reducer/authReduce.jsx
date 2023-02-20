const initialState = {
  data: {
    name: "",
    email: "",
  },
  isLoading: false,
};

export const usersReducer = (state = initialState, action) => {
  if (action.type === "userLoginPending") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "userLoginSuccess") {
    return {
      ...state,
      data: action.payload,
      isLoading: false,
    };
  } else {
    return state;
  }
};
