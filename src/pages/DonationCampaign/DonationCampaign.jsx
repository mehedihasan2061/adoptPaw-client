import React from 'react';
import useCard from '../../hooks/useCard';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAxiosCommon from '../../hooks/useAxiosCommon';

const DonationCampaign = () => {
  const axiosCommon=useAxiosCommon()
   const { data: pets = [] } = useQuery({
     queryKey: ["camapaign"],
     queryFn: async () => {
       const { data } = await axiosCommon.get("/campaign");
       return data;
     },
   });
    return (
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-10 ">
        {pets.map((item) => (
          <div
            key={item._id}
            className="max-w-sm mt-20 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img className="rounded-t-lg" src={item.image} alt="" />
            </a>
            <div className="p-5">
              <div className="flex justify-between items-center">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.name}
                </h5>
              </div>
              <a href="#">
                <h5 className="mb-2 text-xl  tracking-tight text-gray-900 dark:text-white">
                  Max donation :$ {item.maxDonation}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <span className='bg-gray-300 font-semibold p-1 rounded-lg'>Donate Amount:</span> $ {item.petDonation}
              </p>
              <Link
                to={`/donate/${item.id}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                View Details
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
};

export default DonationCampaign;