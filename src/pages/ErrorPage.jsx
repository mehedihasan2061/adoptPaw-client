import { Link, useRouteError } from "react-router-dom";
import errorImg from "../assets/errorPage/6983265.webp";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="text-center ">
      <img className="w-64 mx-auto" src={errorImg} alt="" />
      <h1 className="text-xl font-semibold my-2">Oops!</h1>
      <p className="text-semibold my-2 ">
        {" "}
        Sorry, an unexpected error has occurred.
      </p>
      <p>
        <i className="text-xl text-semibold text-red-600 mb-3">
          {error.statusText || error.message}
        </i>
      </p>
      <Link to="/">
        <button className="bg-blue-500 text-white p-2 rounded-xl my-2">Go Back</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
