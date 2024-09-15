import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../../shared/Navbar/Navbar.css"
import logo from "../../assets/logo/images-removebg-preview.png"
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {
  const { user } = useContext(AuthContext)
  console.log(user);

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    
    return (
      <div>
        <header className="container mx-auto sticky top-0 z-50  p-2 bg-blue-500  text-white font-bold  opacity-80">
          <div className=" flex justify-between  items-center  ">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Back to homepage"
              className="flex items-center p-2"
            >
             <img className="h-12 w-12 rounded-full" src={logo} alt="" />
            </a>
            <ul className="items-stretch hidden space-x-3 lg:flex">
              <li className="flex">
                <NavLink
                  to="/"
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600"
                >
                  Home
                </NavLink>
              </li>
              <li className="flex">
                <NavLink
                  to="/all-pets"
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
                >
                  Pet Listing
                </NavLink>
              </li>
              <li className="flex">
                <Link to="/donation-campaign"
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
                >
                  Donation Campaigns
                </Link>
              </li>
              {/* <li className="flex">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
                >
                  Link
                </a>
              </li> */}
            </ul>

            <div className="profile-dropdown z-50 ">
              <div className="profile" onClick={toggleDropdown}>
                <img
                  src="https://via.placeholder.com/40"
                  alt="Profile"
                  className="profile-picture"
                />
              </div>
              {isOpen && (
                <div className="dropdown-menu">
                  <ul>
                    <li>
                      <Link to="/dashboard/add-pet">Dashboard</Link>
                    </li>
                    {/* <li>
                      <a href="/profile">Profile</a>
                    </li> */}
                    <li>Logout</li>
                    {/* onClick={handleLogout} */}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </header>
      </div>
    );
};

export default Navbar;