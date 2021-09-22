import React from "react";
import { useDispatch } from "react-redux";
import { addNewRoom } from "../actions";

const AddNewRoom = () => {
  const dispatch = useDispatch();
  const createNewRoom = (e) => {
    e.preventDefault();
    const singleRoom = {
      id: "id" + Math.random().toString(16).slice(2),
      name: e.target.roomName.value,
    };
    dispatch(addNewRoom(singleRoom));
  };

  return (
    <form onSubmit={createNewRoom}>
      <input type="text" name="roomName" />
      <button type="submit">add room</button>{" "}
    </form>
  );
};

export default AddNewRoom;
