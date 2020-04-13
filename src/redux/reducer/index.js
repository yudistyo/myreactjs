const InitialiseState = {
  Islogin: "from app islogin",
  PopUp: "from app popup",
  IsInternet: true
};

const reducer = (state = InitialiseState, action) => {
  if (action.type === "Change_Action_PopUp") {
    return {
      ...state,
      PopUp: action.value
    };
  }
  if (action.type === "Change_Action_Islogin") {
    return {
      ...state,
      Islogin: action.value
    };
  }
  if (action.type === "Change_Action_IsInternet") {
    return {
      ...state,
      IsInternet: action.value
    };
  }
  return state;
};

export default reducer;
