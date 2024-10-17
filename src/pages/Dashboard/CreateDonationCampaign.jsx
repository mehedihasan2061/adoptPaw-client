import {
  Button,
  Description,
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
  Select,
  Textarea,
} from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { imageUpload } from "../../Api/utils";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";

const CreateDonationCampaign = () => {
    const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const { user } = useContext(AuthContext)
  const axiosSecure=useAxiosSecure()
  const [imageText,setImageText]=useState("Upload Image")
  const navigate=useNavigate()

   const { mutateAsync } = useMutation({
     mutationFn: async (campaignData) => {
       const { data } = await axiosSecure.post(`/campaign`, campaignData);
       
       return data;
     },
     onSuccess: () => {
       console.log("Data Saved Successfully");
       toast.success("Campaign Added Successfully!");
       navigate("/dashboard/my-donation-campaign");
        
     },
   });

  const handleCampaign =async e => {
    e.preventDefault()
    console.log("clicked");
    const form = e.target;
    const image = form.image.files[0];
    const name = form.name.value;
    const maxDonation = form.maxDonation.value;
    const petDonation = form.petDonation.value;
    const startDeadline = startDate;
    const endDeadline= endDate;
    const longDescription = form.longDescription.value;
    const shortDescription = form.shortDescription.value;
    
    

    const campaignUser = {
      name: user?.displayName,
      image:user?.photoURL,
      email:user?.email
      
    }
    console.log(campaignUser);
    try {
      const imageUrl = await imageUpload(image);
      console.log("link img",imageUrl);
    const campaignData = {
      image: imageUrl,
      name,
      maxDonation,
      petDonation,
      startDeadline,
      endDeadline,
      longDescription,
      shortDescription,
      campaignUser,
      };
      if(parseInt(petDonation) > parseInt(maxDonation) )return toast.error("PetDonation range cross.please Don't Cross Your Limit")
      // console.table(campaignData);
      await mutateAsync(campaignData);

    } catch (err) {
      console.log(err);
}
  }
  const handleImageText =async (image) => {
   await setImageText(image.name)
  }

  return (
    <div className="w-full max-w-lg px-4 overflow-x-auto">
      <form onSubmit={handleCampaign}>
        <Fieldset className="space-y-6 rounded-xl  p-6 sm:p-10  bg-gradient-to-r from-blue-500 to-[#0C0D21]">
          <Legend className=" font-semibold text-2xl text-center text-white">
            Create Donation Campaign
          </Legend>
          <Field>
            <div className=" p-4 bg-white w-full  m-auto rounded-lg">
              <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                <div className="flex flex-col w-max mx-auto text-center">
                  <label>
                    <input
                      onChange={(e) => handleImageText(e.target.files[0])}
                      className="text-sm cursor-pointer w-36 hidden"
                      type="file"
                      name="image"
                      id="image"
                      accept="image/*"
                      hidden
                    />
                    <div className="bg-rose-500 text-white border border-gray-300 rounded  font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500">
                      {/* {imageText} */}
                      {imageText.length > 20
                        ? imageText.split(".")[0].slice(0, 15) +
                          "...." +
                          imageText.split(".")[1]
                        : imageText}
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </Field>
          <Field>
            <Label className="text-sm/6 font-medium text-white">
              Pet Name
            </Label>
            <Input
              className={clsx(
                "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
              )}
              name="name"
              id="name"
              type="text"
              
            />
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field>
              <Label className="text-sm/6 font-medium text-white">
                Max Donation
              </Label>
              <Input
                className={clsx(
                  "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                  "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                )}
                name="maxDonation"
                id="donation"
                type="text"
                defaultValue={"100000"}
              />
            </Field>
            <Field>
              <Label className="text-sm/6 font-medium text-white">
                Pet Donation
              </Label>
              <Input
                className={clsx(
                  "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                  "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                )}
                name="petDonation"
                id="donation"
                type="text"
              />
            </Field>

            <div className="flex flex-col gap-2 ">
              <label className="text-white">Start Date</label>

              {/* Date Picker Input Field */}
              <DatePicker
                className="border-none text-white p-2 rounded-md bg-[#3B6EC7]"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-white">End Date</label>
              <DatePicker
                className="border-none text-white p-2 rounded-md bg-[#121D3E]"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
              />
            </div>
            <Field>
              <Label className="text-sm/6 font-medium text-white">
                Short Description
              </Label>

              <Textarea
                className={clsx(
                  "mt-3 block w-full resize-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                  "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                )}
                name="longDescription"
                id="longDescription"
                type="text"
                placeholder="Short Description"
                rows={3}
              />
            </Field>
            <Field>
              <Label className="text-sm/6 font-medium text-white">
                Long Description
              </Label>

              <Textarea
                className={clsx(
                  "mt-3 block w-full resize-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                  "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                )}
                name="shortDescription"
                id="shortDescription"
                type="text"
                placeholder="Long Description"
                rows={3}
              />
            </Field>
          </div>
          <Button
            type="submit"
            className="inline-flex justify-center items-center gap-2 w-full text-center rounded-md bg-blue-500 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-blue-600 data-[open]:bg-blue-700 data-[focus]:outline-1 data-[focus]:outline-white"
          >
            Submit
          </Button>
        </Fieldset>
      </form>
    </div>
  );
};
export default CreateDonationCampaign;