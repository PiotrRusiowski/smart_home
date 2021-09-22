import { useDispatch } from "react-redux";
import { test } from "./actions";
import AddNewRoom from "./components/AddNewRoom";
import RoomsList from "./components/RoomsList";

const App = () => {
  const dispatch = useDispatch(test);
  return (
    <div className="App">
      <h1>jestem</h1>
      <button onClick={() => dispatch(test())}>klik</button>
      <RoomsList />
      <AddNewRoom />
    </div>
  );
};

export default App;
