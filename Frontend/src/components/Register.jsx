import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();
  const { username, email, password } = formData;

  const handleChange = ({ target: { name, value } }) => setFormData((prev) => ({ ...prev, [name]: value }));

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
        await axios.post("http://localhost:5000/auth/register", formData);
      toast.success("Registration successful! Please login.");
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong. Try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <form onSubmit={handleRegister} className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-white text-2xl mb-4">Register</h2>
        <input className="p-2 w-full mb-2" name="username" placeholder="Username" value={username} onChange={handleChange} required />
        <input className="p-2 w-full mb-2" name="email" type="email" placeholder="Email" value={email} onChange={handleChange} required />
        <input className="p-2 w-full mb-2" name="password" type="password" placeholder="Password" value={password} onChange={handleChange} required />
        <button type="submit" className="bg-green-500 text-white p-2 w-full">Register</button>
      </form>
    </div>
  );
}

export default Register;
