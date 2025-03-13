import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { email, password } = formData;

  const handleChange = ({ target: { name, value } }) => setFormData((prev) => ({ ...prev, [name]: value }));

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/auth/login", formData);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      toast.success("Login successful!");
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong. Try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <form onSubmit={handleLogin} className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-white text-2xl mb-4">Login</h2>
        <input className="p-2 w-full mb-2" name="email" type="email" placeholder="Email" value={email} onChange={handleChange} required />
        <input className="p-2 w-full mb-2" name="password" type="password" placeholder="Password" value={password} onChange={handleChange} required />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">Login</button>
      </form>
    </div>
  );
}

export default Login;
