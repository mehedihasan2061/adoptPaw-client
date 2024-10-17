import { Link, NavLink, Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";


const Dashboard = () => {
    return (
      <div>
        <Navbar></Navbar>

        <div className="flex gap-6 relative min-h-screen md:flex">
          <div className=" w-[30%] ">
            <aside
              id="cta-button-sidebar"
              className="fixed top-0  bg-blue-400 w-[25%] z-40 transition-transform -translate-x-full sm:translate-x-0"
              aria-label="Sidebar"
            >
              <div className="container mx-auto h-full my-20  px-3 py-4 overflow-y-auto overflow-x-auto text-white dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                  <li>
                    <NavLink
                      to="/dashboard/add-pet"
                      className="bg-blue-400 hover:bg-blue-600 active:bg-blue-600 focus:outline-none focus:bg-blue-600  focus:ring-blue-600 p-2"
                    >
                      <span className="ms-3 text-white font-bold">
                        Add a Pet
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/my-added-pet"
                      className="bg-blue-400 hover:bg-blue-600 active:bg-blue-600 focus:outline-none focus:bg-blue-600  focus:ring-blue-600 p-2"
                    >
                      <span className="flex-1 ms-3 whitespace-nowrap text-white font-bold">
                        My Added Pets
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/adoption-request"
                      className="bg-blue-400 hover:bg-blue-600 active:bg-blue-600 focus:outline-none focus:bg-blue-600  focus:ring-blue-600 p-2"
                    >
                      <span className="flex-1 ms-3 whitespace-nowrap text-white font-bold">
                        Adoption Request
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/donation-campaign"
                      className="bg-blue-400 hover:bg-blue-600 active:bg-blue-600 focus:outline-none focus:bg-blue-600  focus:ring-blue-600 p-2"
                    >
                      <span className="flex-1 ms-3 whitespace-nowrap text-white font-bold">
                        Create Donation Campaign
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/my-donation-campaign"
                      className="bg-blue-400 hover:bg-blue-600 active:bg-blue-600 focus:outline-none focus:bg-blue-600  focus:ring-blue-600 p-2"
                    >
                      <span className="flex-1 ms-3 whitespace-nowrap text-white font-bold">
                        My Donation Campaign
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/my-donation"
                      className="bg-blue-400 my-4 hover:bg-blue-600 active:bg-blue-600 focus:outline-none focus:bg-blue-600  focus:ring-blue-600 p-2"
                    >
                      <span className="flex-1 ms-3 whitespace-nowrap text-white font-bold">
                        My Donation
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
          <div className="flex-1 w-[70%] ">
            <div className="p-5">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;