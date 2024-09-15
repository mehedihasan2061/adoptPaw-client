import img from "../../../assets/template/inspiration.jpg"
import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import Modal from "react-modal";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    padding:"30px",
    marginRight: "-50%",
    marginTop: "70px",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement("#yourAppElement");


const AdoptItem = () => {

  

   const {
     register,
     handleSubmit,
     watch,
     formState: { errors },
   } = useForm();

   const onSubmit = (data) => console.log(data);

   console.log(watch("example"));

 let subtitle;
 const [modalIsOpen, setIsOpen] = React.useState(false);

 function openModal() {
   setIsOpen(true);
 }

 function afterOpenModal() {
   // references are now sync'd and can be accessed.
   subtitle.style.color = "#f00";
 }

 function closeModal() {
   setIsOpen(false);
 }




    return (
      <div className="grid grid-cols-2 gap-20">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          {/* content  */}

          <a
            href="#"
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <div className="flex justify-between items-center">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Whiskers
              </h5>
              <p>Available</p>
            </div>
            <p className=" text-gray-700 dark:text-gray-400 text-3xl font-bold ">
              About
            </p>
            <div>
              <div className="flex justify-between items-center mr-32 mt-3 ">
                <h1 className="text-[20px] font-bold">Name </h1>
                <span>Whisker</span>
              </div>
              <div className="flex justify-between items-center mr-32 mt-3 ">
                <h1 className="text-[20px] font-bold">Age </h1>
                <span>3 Years</span>
              </div>
              <div className="flex justify-between items-center mr-32 mt-3 ">
                <h1 className="text-[20px] font-bold">Location </h1>
                <span>Mymensingh</span>
              </div>
              <div className="flex justify-between items-center mr-32 mt-3">
                <h1 className="text-[20px] font-bold">Name: </h1>
                <span>Whisker</span>
              </div>
              <div className="flex justify-between items-center mr-32 mt-3">
                <h1 className="text-[20px] font-bold">Name: </h1>
                <span>Whisker</span>
              </div>
              {/* <div className="flex justify-between items-center mt-8 ">
                <button
                  type="button"
                  class="focus:outline-none w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                  Adopt Now
                </button>
              </div> */}

              {/* dlajlflja */}

              <div>
                <button
                  onClick={openModal}
                  className="focus:outline-none w-full mt-10 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                  Adopt Now
                </button>
                <div className="m-20">
                  <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                  >
                    {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
                    <h1 className="text-center mt-4 text-xl font -semibold text-blue-500">
                      User Information
                    </h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      {/* Name */}
                      <div>
                        <label htmlFor="name">Name</label> <br />
                        <input
                          id="name"
                          type="text"
                          className="form-control border border-black"
                          {...register("name", {
                            required: "Name is required",
                          })}
                        />
                        {errors.name && (
                          <p className="text-red-600">{errors.name.message}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email">Email</label> <br />
                        <input
                          id="email"
                          type="email"
                          className="form-control border border-black"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value:
                                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                              message: "Enter a valid email",
                            },
                          })}
                        />
                        {errors.email && (
                          <p className="text-red-600">{errors.email.message}</p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="phone">Phone Number</label> <br />
                        <input
                          id="phone"
                          type="tel"
                          className="form-control border border-black"
                          {...register("phone", {
                            required: "Phone number is required",
                            pattern: {
                              value: /^[0-9]{10,15}$/,
                              message: "Enter a valid phone number",
                            },
                          })}
                        />
                        {errors.phone && (
                          <p className="text-red-600">{errors.phone.message}</p>
                        )}
                      </div>

                      {/* Address */}
                      <div>
                        <label htmlFor="address">Address</label> <br />
                        <textarea
                          id="address"
                          className=" ml-2 my-2form-control border border-black"
                          {...register("address", {
                            required: "Address is required",
                          })}
                        />
                        {errors.address && (
                          <p className="text-red-600">
                            {" "}
                            {errors.address.message}
                          </p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <button
                        className="bg-blue-500 text-white w-full text-center hover:bg-blue=800 rounded-lg hover:font-bold"
                        type="submit"
                      >
                        Submit
                      </button>
                    </form>
                  </Modal>
                </div>
              </div>

             
            </div>
          </a>
        </div>
      </div>
    );
};

export default AdoptItem;