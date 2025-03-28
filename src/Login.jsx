import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import CSS file

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", formData);
            toast.success("Login successful");
            localStorage.setItem("token", res.data.token);

            navigate("/welcome");
        } catch (err) {
            toast.error(err.response?.data?.msg || "Login failed");
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                    <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
