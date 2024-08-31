import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return (
    <header className="flex items-center justify-between p-4 text-white bg-gray-800">
      <div className="text-2xl font-bold">
        <Link to="/">QuickCart</Link>
      </div>
      {isAuthenticated && (
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/auth" className="hover:underline">
            Logout
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
