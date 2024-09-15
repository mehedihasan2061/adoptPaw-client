import { CiNoWaitingSign } from "react-icons/ci";
import { IoCheckmark, IoCheckmarkCircleOutline } from "react-icons/io5";

const AdoptionRequest = () => {
  return (
    <section className="container px-2 mx-auto pt-12">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 ">
         Adoption Request
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
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>User Name</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <span>Email</span>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <button className="flex items-center gap-x-2">
                        <span>Phone Number</span>
                      </button>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                     Location
                    </th>

                    <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                     Pet Name
                    </th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                      Adaption Status
                    </th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  <tr>
                    <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                      Mehedi
                    </td>

                    <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                      hasan_17@gmail.com
                    </td>

                    <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                      Dog
                    </td>

                    <td
                      title=""
                      className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap"
                    >
                      <img src="#" alt="" />
                    </td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <div className="flex items-center gap-x-2">
                        <p
                          className="px-3 py-1 rounded-full text-blue-500 bg-blue-100/60
                           text-xs"
                        >
                          Tommy
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <div className="flex items-center gap-x-2">
                        <p
                          className="px-3 py-1 rounded-full text-blue-500 bg-blue-100/60
                           text-xs"
                        >
                          Pending
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <div className="flex items-center gap-x-6">
                        
                        <button className="text-gray-500 text-xl transition-colors duration-200   hover:text-yellow-500 focus:outline-none">
                          <IoCheckmark />
                        </button>
                        <button className="text-gray-500 text-xl transition-colors duration-200   hover:text-yellow-500 focus:outline-none">
                          <CiNoWaitingSign />
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

export default AdoptionRequest;
