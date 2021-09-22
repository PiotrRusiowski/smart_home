import React from "react";
import { useSelector } from "react-redux";

const RoomsList = () => {
  //   const roomsList = useContext(roomsList);
  const roomsList = useSelector((state) => state.roomsList);
  return (
    <ul>
      {roomsList.map((room) => (
        <li>{room.name}</li>
      ))}
    </ul>
  );
};

export default RoomsList;
