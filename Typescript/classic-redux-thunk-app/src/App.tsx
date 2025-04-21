import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counters from "./Counters";
import UserInfo from "./UserInfo";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Counters />} />
          <Route path="/users" element={<UserInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
