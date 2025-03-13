import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import LiveStatus from "./components/LiveStatus";
import PNRStatus from "./components/PNRStatus";
import TrainSearch from "./components/TrainSearch";
import TrainSchedule from "./components/TrainSchedule";
import SeatAvailability from "./components/SeatAvailability";
import Login from "./components/Login";
import Register from "./components/Register";
import PrivateRoute from "./components/PrivateRoute"; // Import PrivateRoute
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected Routes */}
            <Route path="/live-status" element={<PrivateRoute><LiveStatus /></PrivateRoute>} />
            <Route path="/pnr-status" element={<PrivateRoute><PNRStatus /></PrivateRoute>} />
            <Route path="/train-search" element={<PrivateRoute><TrainSearch /></PrivateRoute>} />
            <Route path="/train-schedule" element={<PrivateRoute><TrainSchedule /></PrivateRoute>} />
            <Route path="/seat-availability" element={<PrivateRoute><SeatAvailability /></PrivateRoute>} />
          </Routes>
        </main>
      </div>
      <ToastContainer position="top-center" />
    </Router>
  );
}

export default App;
