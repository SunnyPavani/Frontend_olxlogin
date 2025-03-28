import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css"; // Import CSS file

const Welcome = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login"); // Redirect to login if not authenticated
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("token"); // Remove token from storage
        navigate("/login"); // Redirect to login page
    };

    return (
        <div className="welcome-container">
            <div className="welcome-box">
                <h2>Welcome to the Dashboard</h2>
                <p>You are successfully logged in!</p>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default Welcome;
