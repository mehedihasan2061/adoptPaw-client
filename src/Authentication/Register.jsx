import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo/images-removebg-preview.png";
import signupImg from "../assets/authentication/signup.avif";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { imgbbAPIKey } from "../pages/Dashboard/AddPet";
import toast from "react-hot-toast";

const Register = () => {
  const {
    signInWithGoogle,
    createUser,
    updateUserProfile,
    setUser,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0]; // Get selected file

    // Upload image to imgbb
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData.success);
        if (imgData?.success) {
          const profileImg = imgData.data.url;
          const userInfo = {
            displayName: name,
            email: email,
            photoURL: profileImg,
          };

          // Create user with email and password
          createUser(email, password)
            .then((result) => {
              const newUser = result.user;
              const uid = newUser.uid;

              // Prepare user data for the database
              const dbUser = {
                ...userInfo,
                uid: uid,
                role: "user", // Set default role as "user"
              };

              // Update user profile in Firebase
              updateUserProfile(
                name,
                profileImg,
              ).then(() => {
                // Save user to the database
                fetch("http://localhost:5000/users", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(dbUser),
                })
                  .then((res) => res.json())
                  .then(() => {
                   
                      toast.success("Account created successfully!");
                      navigate("/", { replace: true });
                   
                  })
                  .catch((error) => {
                    console.error(error);
                    toast.error("Failed to save user to the database.");
                  });
              });
            })
            .catch((error) => {
              console.error(error);
              toast.error("Failed to create user.");
            });
        } else {
          toast.error("Image upload failed.");
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to upload image.",error);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] ">
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl ">
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <img className="w-auto h-7 sm:h-8" src={logo} alt="" />
          </div>
          <p className="mt-3 text-xl text-center text-gray-600 ">
            Get Your Free Account Now.
          </p>
          <form onSubmit={handleSignUp}>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600"
                htmlFor="name"
              >
                Username
              </label>
              <input
                id="name"
                name="name"
                required
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg"
                type="text"
              />
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600"
                htmlFor="LoggingEmailAddress"
              >
                Email Address
              </label>
              <input
                id="LoggingEmailAddress"
                name="email"
                required
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg"
                type="email"
              />
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600"
                htmlFor="loggingPassword"
              >
                Password
              </label>
              <input
                id="loggingPassword"
                name="password"
                required
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg"
                type="password"
              />
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600"
                htmlFor="image"
              >
                Select Image:
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                required
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg"
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize bg-gray-800 rounded-lg"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b  md:w-1/4"></span>
            <Link
              to="/login"
              className="text-xs text-gray-500 uppercase  hover:underline"
            >
              or sign in
            </Link>
            <span className="w-1/5 border-b  md:w-1/4"></span>
          </div>
        </div>
        <div
          className="hidden bg-cover bg-center lg:block lg:w-1/2"
          style={{ backgroundImage: `url(${signupImg})` }}
        ></div>
      </div>
    </div>
  );
};

export default Register;
