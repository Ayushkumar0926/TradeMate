import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("https://trademate-2a46.onrender.com/signup", formData);
            window.location.href = "http://localhost:3001";
        } catch (err) {
            if (err.response) {
                alert(err.response.data.message);
            } else {
                alert("Something went wrong");
            }
        }
    };

    return (
        <div className="row">
            <div className="col-6 offset-3">
                <form className="m-5" onSubmit={handleSubmit}>
                    <h2 className="mb-4">Create Account</h2>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            id="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="mt-3 mb-3 btn btn-primary">Sign Up</button>
                    <p>Already have an account? Please <Link to="/login">Login</Link></p>
                </form>
            </div>
        </div>
    );
}

export default Signup;
