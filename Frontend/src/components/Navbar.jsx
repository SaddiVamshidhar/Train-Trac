import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Bars3Icon, 
  XMarkIcon, 
  ChevronDownIcon, 
  RocketLaunchIcon, 
  TicketIcon, 
  MagnifyingGlassIcon, 
  ClockIcon, 
  UserGroupIcon, 
  ChartBarIcon 
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    const checkAuth = () => {
      setIsAuthenticated(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  const navItems = [
    { name: "Live Status", path: "/live-status", icon: RocketLaunchIcon },
    { name: "PNR Status", path: "/pnr-status", icon: TicketIcon },
    { name: "Train Search", path: "/train-search", icon: MagnifyingGlassIcon },
    { name: "Train Schedule", path: "/train-schedule", icon: ClockIcon },
    { name: "Seat Availability", path: "/seat-availability", icon: UserGroupIcon },
    { name: "Analytics", path: "/analytics", icon: ChartBarIcon }
  ];

  return (
    <nav className="bg-primary-800/90 backdrop-blur-sm sticky top-0 z-50 border-b border-primary-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <RocketLaunchIcon className="h-8 w-8 text-accent-500" />
            <span className="text-2xl font-bold text-white">TrainTracker</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <button onClick={handleLogout} className="text-gray-300 hover:text-red-400 px-4 py-2 rounded-lg hover:bg-primary-700/50">
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="text-gray-300 hover:text-accent-500 px-4 py-2 rounded-lg hover:bg-primary-700/50">
                  Login
                </Link>
                <Link to="/register" className="text-gray-300 hover:text-accent-500 px-4 py-2 rounded-lg hover:bg-primary-700/50">
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-300 hover:text-white p-2">
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </nav>
  );
}
