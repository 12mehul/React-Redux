import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counters from "./Counters";
import Users from "./Users";
import Todo from "./Todo";
import Comments from "./Comments";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Counters />} />
          <Route path="/users" element={<Users />} />
          <Route path="/todos" element={<Todo />} />
          <Route path="/comments" element={<Comments />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
