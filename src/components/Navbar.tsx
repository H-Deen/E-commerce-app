import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogOut = () => {
    logout();
    navigate("/login");
  };
  return (
    <nav className="flex flex-wrap items-center justify-between bg-gray-600 px-6 py-3">
      <div className="mr-6 flex flex-shrink-0 items-center text-white">
        <img
          className="mx-auto h-10 w-auto"
          src="https://baitussalam.org/images/logo-2.svg"
          alt="Your Company"
        />
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center rounded border border-gray-500 px-3 py-2 text-gray-400 hover:border-white hover:text-white">
          <svg
            className="h-3 w-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="block w-full flex-grow lg:flex lg:w-auto lg:items-center">
        <div className="text-sm lg:flex-grow">
          <NavLink
            to="/"
            className="mr-4 mt-4 block text-gray-300 hover:text-white lg:mt-0 lg:inline-block"
          >
            Home
          </NavLink>
          <NavLink
            to="/cart"
            className="mr-4 mt-4 block text-gray-300 hover:text-white lg:mt-0 lg:inline-block"
          >
            Cart
          </NavLink>
        </div>
        <div>
          <button
            onClick={handleLogOut}
            className="mt-4 inline-block rounded border border-gray-400 px-4 py-2 text-sm leading-none text-gray-300 hover:bg-gray-300 hover:text-gray-800 lg:mt-0"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
