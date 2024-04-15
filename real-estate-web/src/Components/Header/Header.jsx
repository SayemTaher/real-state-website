import { Link, NavLink } from "react-router-dom";
import './header.css'
const Header = () => {
  const navigation = (
    <div
      className="flex lg:flex-row flex-col gap-10 items-start p-4 lg:p-0 lg:items-center"
      id="navigation"
    >
      <NavLink to="/">
        <a>
          <li>Home</li>
        </a>
      </NavLink>
      <NavLink to="/updateProfile">
        <a><li>Update Profile</li></a>
        
      </NavLink>
      <NavLink to="/register">
        <a><li>Register</li></a>
        
      </NavLink>
    </div>
  );
  return (
    <div className="navbar bg-primaryWhite ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navigation}
          </ul>
        </div>
        <Link to="/">
          <img
            src="https://i.ibb.co/2S9815f/Screenshot-2024-04-14-at-23-46-55-removebg-preview.png"
            alt="logo"
            className="w-[200px] h-[50px] object-cover"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navigation}</ul>
      </div>
      <div className="navbar-end">
        <div className="mr-5">
          <Link to='/login'>
            <button>Login</button>
          </Link>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
