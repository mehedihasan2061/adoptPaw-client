import PropTypes from "prop-types";

import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

import { Fragment, useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const DonatorModal = ({ closeModal, isOpen,pet }) => {

//   console.log(pet);
//   const axiosSecure = useAxiosSecure();
//   const { mutateAsync } = useMutation({
//     mutationFn: async (adoptData) => {
//       const { data } = await axiosSecure.post("/adopt", adoptData);
//       return data;
//     },
//     onSuccess: () => {
//       console.log("Data Saved Successfully");
//       toast.success("Adopt Successfully!");
//       //  navigate("/dashboard/my-listings");
//       //  setLoading(false);
//     },
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(e.target);
//     const form = e.target;
//     const number = form.number.value;
//     const address = form.address.value;
//     const adoptUser = {
//       name: user?.displayName,
//       email: user?.email,
//       status: "pending",
//     };
//     console.table(number, address, adoptUser);
//     try {
//       const adoptData = {
//         petId: pet?._id,
//         name: pet?.name,
//         image: pet?.image,
//         number,
//         address,
//         adoptUser,
//       };
//       await mutateAsync(adoptData);
//     } catch (err) {
//       toast.error(err.message);
//     }
//   };
    
    
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md mt-16 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  className="text-lg font-medium text-center leading-6 text-gray-900"
                >
                  Review Info Before Reserve
                </DialogTitle>
                <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
                                  <p>mehedi</p>
                </div>

               
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};



export default DonatorModal;
