import { useContext, useState} from "react";
import { CiNoWaitingSign } from "react-icons/ci";
import { FaEdit, FaPauseCircle } from "react-icons/fa";
import { FaCircleStop } from "react-icons/fa6";
import { IoCheckmark, IoCheckmarkCircleOutline } from "react-icons/io5";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Provider/AuthProvider";
import { Button, Progress } from "@material-tailwind/react";
import toast from "react-hot-toast";
import DonatorModal from "../../Components/Modal/DonatorModal";


const MyDonationCampaign = () => {

  const { user } = useContext(AuthContext);

  const axiosCommon = useAxiosCommon();
      
 const [isOpen, setIsOpen] = useState(false);
 const closeModal = () => {
   setIsOpen(false);
 };

  const {
    data: pets = [],
   
  } = useQuery({
    queryKey: ["campaign"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/campaign");
      return data;
    },
  });




  const handleDonator = (id) => {
    console.log(id);
    donator(pets.id)
  }
 
  return (
    <section className="container px-2 mx-auto pt-12 ">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 ">
          My Donation Campaign
        </h2>

        <span className="px-2 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
          {pets.length}
        </span>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2  sm:-mx-6 lg:-mx-8">
          <div className="  py-2  md:px-6 lg:px-8">
            <div className=" border border-gray-200  md:rounded-lg">
              <table className="w-full divide-y divide-gray-200">
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
                  {pets.map((pet) => (
                    <tr key={pet._id}>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {pet?.name}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {pet?.maxDonation}
                      </td>

                      <td>
                        {pet?.petDonation < 100001 ? (
                          <progress
                            className="progress progress-success w-40 rounded-l-lg rounded-r-lg"
                            value={pet?.petDonation}
                            max={pet?.maxDonation}
                          >
                            {" "}
                            {`${
                              (parseInt(pet?.petDonation) /
                                parseInt(pet?.maxDonation)) *
                              100
                            }%`}
                          </progress>
                        ) : (
                          <p>Over Donation range</p>
                        )}
                      </td>

                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <Button
                          onClick={() => setIsOpen(true)}
                          className="bg-green-600"
                          size="md"
                        >
                          View Donator
                        </Button>
                      </td>
                      <td>
                        <div className="m-20">
                          <DonatorModal
                            isOpen={isOpen}
                            closeModal={closeModal}
                            handleDonator={handleDonator}
                            pet={pet}
                          ></DonatorModal>
                        </div>
                      </td>
                    </tr>
                  ))}
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
