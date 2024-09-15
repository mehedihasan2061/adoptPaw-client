import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../../assets/logo/images-removebg-preview.png"
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
    return (
      <div>
        <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <a
                href="https://flowbite.com/"
                className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
              >
                <img src={logo} className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  AdoptPaw
                </span>
              </a>
              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6">
                    Licensing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
            {/* <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                Flowbite™
              </a>
              . All Rights Reserved.
            </span> */}
          </div>
          <div className="flex items-center gap-3 text-xl justify-center">
            <a href="https://web.facebook.com/Hasan.Mehedi.17">
              <FaFacebook></FaFacebook>
            </a>

            <a href="https://github.com/mehedihasan2061">
              <FaGithub></FaGithub>
            </a>

            <a href="https://www.instagram.com/">
              <FaInstagram></FaInstagram>
            </a>

            <a href="#">
              {" "}
              <FaTwitter></FaTwitter>
            </a>
          </div>
        </footer>
      </div>
    );
};

export default Footer;