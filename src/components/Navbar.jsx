import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="bg-gray-800 p-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      <div className="text-white font-bold text-2xl">My Website</div>
      <div className="space-x-4">
      
        <Link to="/login" className="text-white font-semibold hover:text-gray-400">Login</Link>
        <Link to="/register" className="text-white font-semibold hover:text-gray-400">Registration</Link>
      </div>
    </div>
  );
}

export default Navbar;
