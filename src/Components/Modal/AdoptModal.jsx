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
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const AdoptModal = ({ closeModal, isOpen,pet }) => {
  const { user } = useContext(AuthContext)
  console.log(pet);
 const axiosSecure=useAxiosSecure()
 const { mutateAsync } = useMutation({
   mutationFn: async (adoptData) => {
     const { data } = await axiosSecure.post("/adopt", adoptData);
     return data;
   },
   onSuccess: () => {
     console.log("Data Saved Successfully");
     toast.success("Adopt Successfully!");
    //  navigate("/dashboard/my-listings");
    //  setLoading(false);
   },
 });




  const handleSubmit = async e => {
    e.preventDefault()
    console.log(e.target);
    const form = e.target;
    const number = form.number.value;
    const address = form.address.value;
      const adoptUser = {
        name: user?.displayName,
        email: user?.email,
        status:"pending"
      };
console.table(number,address,adoptUser)
    try {
      const adoptData = {
        petId: pet?._id,
        name: pet?.name,
        image: pet?.image,
        number,
        address,
        adoptUser,
        
      }
      await mutateAsync(adoptData);
    } catch (err) {
      toast.error(err.message);
    }
   
  }
    
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
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                      <div className="space-y-6">
                        <div className="space-y-1 text-sm">
                          <label htmlFor="name" className="block text-gray-600">
                            Name
                          </label>
                          <input
                            className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                            name="name"
                            id="name"
                            type="text"
                            placeholder="name"
                            defaultValue={user?.displayName}
                            disabled={true}
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="space-y-1 text-sm">
                          <label
                            htmlFor="email"
                            className="block text-gray-600"
                          >
                            Email
                          </label>
                          <input
                            className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                            name="email"
                            id="email"
                            type="email"
                            placeholder="email"
                            defaultValue={user?.email}
                            disabled={true}
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="space-y-1 text-sm">
                          <label
                            htmlFor="number"
                            className="block text-gray-600"
                          >
                            Phone Number
                          </label>
                          <input
                            className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                            name="number"
                            id="number"
                            type="number"
                            placeholder="Number"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="space-y-1 text-sm">
                          <label
                            htmlFor="address"
                            className="block text-gray-600"
                          >
                            Address
                          </label>
                          <input
                            className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
                            name="address"
                            id="address"
                            type="text"
                            placeholder="address"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <hr className="mt-8 " />
                    {/* checkout form */}
                    <div className="flex mt-2 justify-around">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                      >
                        Submit
                      </button>
                      <button
                        onClick={closeModal}
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      >
                        No
                      </button>
                    </div>
                  </form>
                </div>

                {/* <form onSubmit={handleSubmit} className="w-full max-w-md px-4">
                  <Field>
                    <Label className="text-sm/6 font-medium text-blue-500">
                      Name
                    </Label>

                    <input
                      className={clsx(
                        "mt-3 block w-full rounded-lg border-2 bg-blue/5 py-1.5 px-3 text-sm/6 text-black",
                        "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                      )}
                      name="name"
                      type="text"
                      placeholder="Name"
                      defaultValue={name}
                      required
                    />
                  </Field>
                  <Field>
                    <Label className="text-sm/6 font-medium text-blue-500">
                      Email
                    </Label>

                    <Input
                      className={clsx(
                        "mt-3 block w-full rounded-lg border-2 bg-blue/5 py-1.5 px-3 text-sm/6 text-black",
                        "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                      )}
                      name="email"
                      type="email"
                      placeholder="Email"
                      defaultValue={email}
                      required
                    />
                  </Field>
                  <Field>
                    <Label className="text-sm/6 font-medium text-blue-500">
                      Phone Number
                    </Label>

                    <Input
                      className={clsx(
                        "mt-3 block w-full rounded-lg border-2 bg-blue/5 py-1.5 px-3 text-sm/6 text-black",
                        "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                      )}
                      name="number"
                      type="number"
                      placeholder="Phone Number"
                      required
                    />
                  </Field>
                  <Field>
                    <Label className="text-sm/6 font-medium text-blue-500">
                      Address
                    </Label>

                    <Input
                      className={clsx(
                        "mt-3 block w-full rounded-lg border-2 bg-blue/5 py-1.5 px-3 text-sm/6 text-black",
                        "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                      )}
                      name="address"
                      type="text"
                      placeholder="Address"
                      required
                    />
                  </Field>
                </form> */}

                {/* <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    From: {format(new Date(bookingInfo.from), "PP")} - To:{" "}
                    {format(new Date(bookingInfo.to), "PP")}
                  </p>
                </div> */}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

AdoptModal.propTypes = {
  bookingInfo: PropTypes.object,
  closeModal: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default AdoptModal;
