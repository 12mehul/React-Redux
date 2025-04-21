import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./Counter";
import UserInfo from "./UserInfo";
import AddEmployees from "./AddEmployees";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/users" element={<UserInfo />} />
          <Route path="/employees" element={<AddEmployees />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
