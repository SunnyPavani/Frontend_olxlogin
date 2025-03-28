import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./Register.css"; // Import CSS file

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
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
            const res = await axios.post("https://backend-olxlogin.onrender.com//api/auth/register", formData, {
                headers: { "Content-Type": "application/json" }
            });
            toast.success(res.data.msg);
            navigate("/login");
        } catch (err) {
            console.error("Registration Error:", err.response?.data || err);
            toast.error(err.response?.data?.msg || "Registration failed");
        }
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
                    <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                    <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
