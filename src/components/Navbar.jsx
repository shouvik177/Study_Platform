import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Study Hub</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300">Notes</Link>
          <Link to="/resources" className="hover:text-gray-300">Resources</Link>
          <Link to="/practice" className="hover:text-gray-300">Code Practice</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
