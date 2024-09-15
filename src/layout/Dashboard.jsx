import { Link, Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";


const Dashboard = () => {
    return (
      <div>
        
          <Navbar></Navbar>
     
        <div className="flex gap-6  ">
          <div className="w-64 bg-blue-400 min-h-screen  ">
            {/* <ul classNameName="p-4 font-bold">
              <li>
                <Link classNameName="text-white " to="/dashboard/add-pet">
                  Add a Pet
                </Link>
              </li>
              <p classNameName=" divide-y"></p>
              <li>
                <Link to="/dashboard/my-added-pet">My Added Pets</Link>
              </li>

              <li>
                <Link to="/dashboard/adoption-request">Adoption Request</Link>
              </li>

              <li>
                <Link to="/dashboard/donation-campaign">
                  Create Donation Campaign
                </Link>
              </li>

              <li>
                <Link to="/dashboard/my-donation-campaign">
                  My Donation Campaign
                </Link>
              </li>

              <li>
                <Link to="/dashboard/my-donation">My Donations</Link>
              </li>
            </ul> */}

            {/* <button
              data-drawer-target="cta-button-sidebar"
              data-drawer-toggle="cta-button-sidebar"
              aria-controls="cta-button-sidebar"
              type="button"
              className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button> */}

            <aside
              id="cta-button-sidebar"
              className="fixed top-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
              aria-label="Sidebar"
            >
              <div className="container mx-auto h-full my-20  px-3 py-4 overflow-y-auto text-white dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                  <li>
                    <Link
                      to="/dashboard/add-pet"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-600 dark:hover:bg-gray-700 group"
                    >
                      <span className="ms-3 text-white font-bold">
                        Add a Pet
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/my-added-pet"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-600 dark:hover:bg-gray-700 group"
                    >
                      <span className="flex-1 ms-3 whitespace-nowrap text-white font-bold">
                        My Added Pets
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/adoption-request"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-600 dark:hover:bg-gray-700 group"
                    >
                      <span className="flex-1 ms-3 whitespace-nowrap text-white font-bold">
                        Adoption Request
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/donation-campaign"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-600 dark:hover:bg-gray-700 group"
                    >
                      <span className="flex-1 ms-3 whitespace-nowrap text-white font-bold">
                        Create Donation Campaign
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/my-donation-campaign"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-600 dark:hover:bg-gray-700 group"
                    >
                      <span className="flex-1 ms-3 whitespace-nowrap text-white font-bold">
                        My Donation Campaign
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/my-donation"
                      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-600 dark:hover:bg-gray-700 group"
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
          <div className="flex-1 ">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;