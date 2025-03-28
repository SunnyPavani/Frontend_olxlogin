import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Welcome from "./Welcome"; // Import Welcome page
import "./app.css";

const Home = () => {
  const navigate = useNavigate();

  return (
      <div className="container">
          <h2>Welcome to OLX Auth</h2>
          <button onClick={() => navigate("/register")}>Register</button>
      </div>
  );
};


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/welcome" element={<Welcome />} /> {/* New welcome route */}
            </Routes>
        </Router>
    );
}

export default App;
