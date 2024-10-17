import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import AllPet from "../pages/PetListing/AllPet/AllPet";
import SinglePet from "../pages/PetListing/SinglePet/SinglePet";
import Register from "../Authentication/Register";
import Login from "../Authentication/Login";
import Dashboard from "../layout/Dashboard";
import AddPet from "../pages/Dashboard/AddPet";
import MyAddPets from "../pages/Dashboard/MyAddPets";
import AdoptionRequest from "../pages/Dashboard/AdoptionRequest";
import CreateDonationCampaign from "../pages/Dashboard/CreateDonationCampaign";
import MyDonationCampaign from "../pages/Dashboard/MyDonationCampaign";
import MyDonation from "../pages/Dashboard/MyDonation";
import DonationCampaign from "../pages/DonationCampaign/DonationCampaign";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "../Provider/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-pets",
        element: <AllPet></AllPet>,
      },
      {
        path: "/donation-campaign",
        element: <DonationCampaign></DonationCampaign>,
      },
      {
        path: "/pet/:id",
        element: <SinglePet></SinglePet>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      // {
      //     path: "/dashboard/add-pet",
      //     element:<PrivateRoute allowedRoles={["user","admin"]}><AddPet/> </PrivateRoute>

      // },
      {
        path: "/dashboard/add-pet",
        element: (
          <PrivateRoute>
            <AddPet />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-added-pet",
        element: (
          <PrivateRoute>
            <MyAddPets></MyAddPets>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/adoption-request",
        element: (
          <PrivateRoute>
            <AdoptionRequest></AdoptionRequest>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/donation-campaign",
        element: <CreateDonationCampaign></CreateDonationCampaign>,
      },
      {
        path: "/dashboard/my-donation-campaign",
        element: (
          <PrivateRoute>
            <MyDonationCampaign></MyDonationCampaign>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-donation",
        element: (
          <PrivateRoute>
            <MyDonation></MyDonation>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;