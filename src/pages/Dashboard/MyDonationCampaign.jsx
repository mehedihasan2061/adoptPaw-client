import { CiNoWaitingSign } from "react-icons/ci";
import { FaEdit, FaPauseCircle } from "react-icons/fa";
import { FaCircleStop } from "react-icons/fa6";
import { IoCheckmark, IoCheckmarkCircleOutline } from "react-icons/io5";

const MyDonationCampaign = () => {
  return (
    <section className="container px-2 mx-auto pt-12">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 ">
          My Posted Adoption
        </h2>

        <span className="px-2 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
          05
        </span>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <span>Pet Name</span>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <button className="flex items-center gap-x-2">
                        <span>Maximum Donation </span>
                      </button>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Donation Progress Bar
                    </th>

                    <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  <tr>
                    <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                      Tommy
                    </td>

                    <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                      Dog
                    </td>

                    <td
                      title=""
                      className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap"
                    >
                      Progress Bar
                    </td>

                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <div className="flex items-center gap-x-6">
                        <button className="text-gray-500 text-xl transition-colors duration-200   hover:text-red-500 focus:outline-none">
                          <FaPauseCircle />
                        </button>

                        <button className="text-gray-500 text-xl transition-colors duration-200   hover:text-yellow-500 focus:outline-none">
                          <FaCircleStop />
                        </button>
                        <button className="text-gray-500 text-xl transition-colors duration-200   hover:text-yellow-500 focus:outline-none">
                          <FaEdit />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyDonationCampaign;
