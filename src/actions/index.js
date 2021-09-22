import { actionsTypes } from "./actionsTypes";
export const test = () => ({
  type: actionsTypes.TEST,
  payload: "jest ",
});
export const addNewRoom = (singleRoom) => ({
  type: actionsTypes.ADD_NEW_ROOM,
  payload: singleRoom,
});
