import "./App.css";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import {Route, BrowserRouter, Routes} from "react-router-dom";

function App() {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    return <Login />;
  }
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
