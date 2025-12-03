import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Job Portal</h1>

        <div className="space-x-6 text-lg">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/jobs" className="hover:text-gray-200">Jobs</Link>
          <Link to="/login" className="hover:text-gray-200">Login</Link>
          <Link to="/signup" className="hover:text-gray-200">Signup</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
