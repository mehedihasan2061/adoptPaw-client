import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider";
   export const imgbbAPIKey = "2e2f010b39558b29e546e7e2fbad2974";
const AddPet = () => {
const {user} = useContext(AuthContext)

    // Initial form values
    const initialValues = {
        name: "",
        age: "",
        category: "",
        location: "",
        shortDescription: "",
        longDescription: "",
        image: null, // This will store the file object
    };

    // Validation schema
    const validationSchema = Yup.object({
        name: Yup.string().required("Pet name is required"),
        age: Yup.number()
            .required("Age is required")
            .min(0, "Age cannot be negative"),
        category: Yup.string().required("Category is required"),
        location: Yup.string().required("Location is required"),
        shortDescription: Yup.string().required("Short description is required"),
        longDescription: Yup.string().required("Long description is required"),
        image: Yup.mixed().required("Image is required"),
    });

    // Function to handle image upload to imgbb
    const uploadImageToImgbb = async (imageFile) => {
        const formData = new FormData();
        formData.append("image", imageFile);

        try {
            const response = await axios.post(
                `https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`,
                formData
            );
            return response.data.data.url; // Return the image URL
        } catch (error) {
            console.error("Error uploading image to imgbb:", error);
            throw new Error("Failed to upload image.");
        }
    };

    // Form submission handler
    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            // Step 1: Upload the image to imgbb and get the URL
            const imageUrl = await uploadImageToImgbb(values.image);

            // Step 2: Send the form data along with the image URL to the backend API
            const petData = {
              ...values,
              image: imageUrl,
              userId: user?._id,
              adopted: false,
            };

            // API call to your backend to add the pet
            const response = await axios.post("http://localhost:5000/pets", petData);

            console.log("Pet added successfully:", response.data);

            // Reset the form after successful submission
            resetForm();
            setSubmitting(false);
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitting(false);
        }
    };

    return (
      <div className="container mt-5">
        <h1 className="text-3xl font-bold text-center mb-6 ">Add a Pet</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, isSubmitting }) => (
            <Form className="bg-white p-6 rounded-md shadow-lg max-w-lg mx-auto">
              {/* Pet Name */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Pet Name
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="form-control border border-black"
                  placeholder="Enter pet name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Pet Age */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="age">
                  Pet Age
                </label>
                <Field
                  type="number"
                  id="age"
                  name="age"
                  className="form-control border border-black"
                  placeholder="Enter pet age"
                />
                <ErrorMessage
                  name="age"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Pet Category */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="category">
                  Pet Category
                </label>
                <Field
                  as="select"
                  id="category"
                  name="category"
                  className="form-select border border-black "
                >
                  <option value="" disabled>
                    Select Category
                  </option>
                  <option value="Dog">Dog</option>
                  <option value="Cat">Cat</option>
                  <option value="Rabbit">Rabbit</option>
                  <option value="Fish">Fish</option>
                  <option value="Horse">Horse</option>
                </Field>
                <ErrorMessage
                  name="category"
                  component="div"
                  className="text-red-500 text-sm "
                />
              </div>

              {/* Pet Location */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="location">
                  Location
                </label>
                <Field
                  type="text"
                  id="location"
                  name="location"
                  className="form-control border border-black"
                  placeholder="Enter location"
                />
                <ErrorMessage
                  name="location"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Short Description */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 mb-2"
                  htmlFor="shortDescription"
                >
                  Short Description
                </label>
                <Field
                  as="textarea"
                  id="shortDescription"
                  name="shortDescription"
                  className="form-control border border-black"
                  rows="2"
                  placeholder="Write a short description"
                />
                <ErrorMessage
                  name="shortDescription"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Long Description */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 mb-2"
                  htmlFor="longDescription"
                >
                  Long Description
                </label>
                <Field
                  as="textarea"
                  id="longDescription"
                  name="longDescription"
                  className="form-control border border-black"
                  rows="4"
                  placeholder="Write a detailed description"
                />
                <ErrorMessage
                  name="longDescription"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Pet Image */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="image">
                  Pet Image
                </label>
                <input
                  id="image"
                  name="image"
                  type="file"
                  className="form-control "
                  onChange={(event) =>
                    setFieldValue("image", event.currentTarget.files[0])
                  }
                />
                <ErrorMessage
                  name="image"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
}

export default AddPet