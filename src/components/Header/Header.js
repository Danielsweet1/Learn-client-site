import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext/AuthProvider";
import logo from "../../images/logo.jpg";

const Header = () => {
  const [theme, setTheme] = useState(true);
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <div className="navbar bg-base-100 text-blue-500 font-bold shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li onClick={() => setTheme(!theme)}>
                {theme ? <button>Light</button> : <button>Dark</button>}
              </li>
            </ul>
          </div>
          <div  className="flex items-center">
          <img className="w-16" src={logo} alt="" />
          <h2 className="text-xl ml-2 text-orange-400">LEARN</h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li onClick={() => setTheme(!theme)}>
              {theme ? <button >Light</button> : <button >Dark</button>}
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <>
              <img
                className="w-12 rounder-circle mr-3"
                title={user?.displayName}
                src={user?.photoURL}
                alt=""
              />
              <button onClick={logout} className="btn">
                Log out
              </button>
            </>
          ) : (
            <button className="btn">
              <Link to="/login">Log In</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
