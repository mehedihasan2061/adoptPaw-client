import img from "../../../assets/template/inspiration.jpg"
import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";
import AdoptModal from "../../../Components/Modal/AdoptModal";






const AdoptItem = ({id}) => {
  const axiosCommon = useAxiosCommon()
    
 const [isOpen, setIsOpen] = useState(false);

//  const  openModal=()=> {
//    setModalIsOpen(true);
//  }
 const  closeModal=()=> {
  setIsOpen(false);
  }
  


 
  
  const {
    data: pet = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["pet"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/pet/${id}`);
      
      return data;
    },
  });
 

 if(isLoading) return <span className="loading loading-bars loading-lg"></span>;
    return (
      <div className="grid grid-cols-2 gap-20">
        <div>
          <img src={pet.image} alt="" />
        </div>
        <div>
          {/* content  */}

          <a
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <div className="flex justify-between items-center">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {pet?.name}
              </h5>
              <p>Available</p>
            </div>
            <p className=" text-gray-700 dark:text-gray-400 text-3xl font-bold ">
              About
            </p>
            <div>
              <div className="flex justify-between items-center mr-32 mt-3 ">
                <h1 className="text-[20px] font-bold">Name </h1>
                <span>{pet?.name}</span>
              </div>
              <div className="flex justify-between items-center mr-32 mt-3 ">
                <h1 className="text-[20px] font-bold">Age </h1>
                <span>{pet?.age} Years</span>
              </div>
              <div className="flex justify-between items-center mr-32 mt-3 ">
                <h1 className="text-[20px] font-bold">Location </h1>
                <span>{pet?.location}</span>
              </div>
              <div className="flex justify-between items-center mr-32 mt-3">
                <h1 className="text-[20px] font-bold">Description: </h1>
                <span>{pet?.shortDescription}</span>
              </div>
             
              <div>
                <button
                  onClick={() => setIsOpen(true)}
                  className="focus:outline-none w-full mt-10 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                  Adopt Now
                </button>
                <div className="m-20">
                  <AdoptModal
                    isOpen={isOpen}
                    closeModal={closeModal}
                    // handleAdoptModal={handleAdoptModal}
                    pet={pet}
                  ></AdoptModal>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
};

export default AdoptItem;