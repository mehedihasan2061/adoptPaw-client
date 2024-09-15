import React from 'react';
import { useForm } from "react-hook-form";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    padding: "30px",
    marginRight: "-50%",
    marginTop: "70px",
    transform: "translate(-50%, -50%)",
  },
};
const CreateDonationCampaign = () => {

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
      <div className="m-20">
        <h1 className=" my-4 text-xl font-bold text-blue-500">
          Donation Campaign
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
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
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
              <p className="text-red-600"> {errors.address.message}</p>
            )}
          </div>
          <div className='my-6'>
             <input type="file" id="myFile" name="filename"/>
          </div>

          {/* Submit Button */}
          <button
            className="bg-blue-500 text-white px-6 py-2 text-center hover:bg-blue=800 rounded-lg hover:font-bold"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
};

export default CreateDonationCampaign;