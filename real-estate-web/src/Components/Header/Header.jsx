import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import "./header.css";
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [loggedUser, setLoggedUser] = useState(null)
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("Successfully logged out");
            })
            .catch(error => {
                toast.error(error.message);
        })
          
    }

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
        <a>
          <li>Update Profile</li>
        </a>
      </NavLink>
      <NavLink to="/register">
        <a>
          <li>Register</li>
        </a>
      </NavLink>
    </div>
  );
    const AuthenticatedDropdown = ({ user, handleLogOut }) => (
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src={
                user
                  ? user.photoURL
                  : "https://i.ibb.co/nC23FQB/Screenshot-2024-04-15-at-15-53-08.png"
              }
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li className="pt-2 pb-2">
            <span>{user.displayName}</span>
            <a className="justify-between text-xs">{user.email}</a>
          </li>
          <li>
            <Link to="updateProfile">Update Profile</Link>
          </li>
          <li>
            <button
              onClick={handleLogOut}
              className="pt-1 pb-1 pr-2 pl-2 bg-red-500 w-[70px] text-xs mt-2 ml-3 text-center rounded-full text-white "
            >
              Log Out
            </button>
          </li>
        </ul>
      </div>
    );

    const UnauthenticatedDropdown = () => (
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt="logo"
              className="w-[200px] h-[50px] object-cover"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link to="/login">
              <button className="rounded-full p-3 bg-primaryGreen text-primaryWhite text-xs">
                Sign In
              </button>
            </Link>
          </li>
        </ul>
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
            alt="logo"
            src="https://i.ibb.co/2S9815f/Screenshot-2024-04-14-at-23-46-55-removebg-preview.png"
            className="w-[200px] h-[50px] object-cover"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navigation}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <AuthenticatedDropdown user={user} handleLogOut={handleLogOut} />
        ) : (
          <UnauthenticatedDropdown />
        )}
      </div>

      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Header;
