import { useContext } from "react";
import { CiNoWaitingSign } from "react-icons/ci";
import { IoCheckmark, IoCheckmarkCircleOutline } from "react-icons/io5";
import { AuthContext } from "../../Provider/AuthProvider";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaTrash, FaUser, FaUsers } from "react-icons/fa6";
import toast from "react-hot-toast";


const ManageUser = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data: users = [],refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/users");
      return data;
    },
  });

 
  const handleMakeAdmin = async (id) => {
    try {
      const res = await axiosSecure.patch(`/users/admin/${id}`);

      if (res.data.modifiedCount > 0) {
        refetch()
        toast.success("Admin Created");
      } else {
        toast.error("Failed to make admin, no changes made.");
      }
    } catch (error) {
      console.error("Error making admin:", error);
      toast.error("An error occurred while making admin.");
    }
  };


const { mutateAsync } = useMutation({
  mutationFn: async (id) => {
    const { data } = axiosSecure.delete(`/user/${id}`);
    return data;
  },
  onSuccess: (data) => {
    console.log(data);
    toast.success("Successfully deleted.");
    refetch();
  },
});

const handleUser = async (id) => {
  
  try {
    await mutateAsync(id);
  } catch (err) {
    console.log(err);
  }
};

  return (
    <section className="container px-2 mx-auto pt-12">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 ">Adoption Request</h2>

        <span className="px-2 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
          {users.length}
        </span>
      </div>

      <div className="flex flex-col mt-6 ">
        <div className=" overflow-x-auto w-full shadow rounded-lg sm:-mx-6 lg:-mx-8">
          <div className=" min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className=" border border-gray-200  md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 ">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <div className="flex items-center gap-x-3">
                        <span> Name</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <span>Email</span>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <button className="flex items-center gap-x-2">
                        <span>Profile</span>
                      </button>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Role
                    </th>

                    
                    <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  {users.map((user) => (
                    <tr key={user._id}>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {user?.name}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {user?.email}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        <img className="w-12 h-12 rounded-full" src={user?.image} alt="" />
                      </td>

                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-2">
                          {
                            user?.role==="admin"? "Admin":<button onClick={()=>handleMakeAdmin(user?._id)}
                            className="px-3 py-1 rounded-full text-orange-500 bg-blue-100/60
                           text-xl"
                          >
                            <FaUsers></FaUsers>
                          </button>
                          }
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-2">
                          <button onClick={()=>handleUser(user?._id)}
                            className="px-3 py-1 rounded-full text-red-500 bg-blue-100/60
                           text-xl"
                          >
                            <FaTrash></FaTrash>
                          </button>
                        </div>
                      </td>
                      
                      
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageUser;
