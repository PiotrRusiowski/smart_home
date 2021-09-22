import { actionsTypes } from "../actions/actionsTypes";
const inicialState = {
  test: "jest",
  roomsList: [],
};

const reducer = (state = inicialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case actionsTypes.TEST:
      console.log("object");
      return { ...state, test: payload };
    case actionsTypes.ADD_NEW_ROOM:
      return { ...state, roomsList: [...state.roomsList, payload] };

    default:
      return state;
  }
};
export default reducer;
