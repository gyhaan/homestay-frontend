import { useEffect, useState } from "react";
import { getProfile } from "../services/authApi";
import { toast } from "sonner";
import { updateUser } from "../services/userApi";
import Loader from "../UI/Loader"; // Assuming the Loader component is in the same folder

function Profile() {
  const [data, setData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Start with loading true

  useEffect(() => {
    getProfile()
      .then((data) => setData(data.data.user))
      .catch((err) => toast.error(err.message))
      .finally(() => setIsLoading(false)); // Stop loading after fetching data
  }, []);

  async function handleClick() {
    if (!isEditing) {
      setIsEditing(true);
      return;
    }

    try {
      setIsLoading(true);
      await updateUser(data);

      getProfile()
        .then((data) => {
          setData(data.data.user);
          toast.success("Data successfully updated");
        })
        .catch((err) => toast.error(err.message));
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsEditing(false);
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return (
      <div className="py-6">
        <Loader />
      </div>
    ); // Show the loader while fetching data
  }

  return (
    <div className="wrapper flex flex-col py-8 space-y-4 capitalize">
      <label htmlFor="name" className="font-semibold ">
        Name:
      </label>
      {isEditing ? (
        <input
          type="text"
          name="name"
          id="name"
          value={data.name || ""}
          className="min-w-80 max-w-96 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
      ) : (
        <p>{data.name}</p>
      )}

      <label htmlFor="email" className="font-semibold">
        Email:
      </label>
      {isEditing ? (
        <input
          type="text"
          name="email"
          id="email"
          value={data.email || ""}
          className="min-w-80 max-w-96 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
      ) : (
        <p className="normal-case">{data.email}</p>
      )}

      <p>
        <span className="font-semibold ">Role: </span>
        <span>{data.role}</span>
      </p>

      <button
        onClick={handleClick}
        className="mt-4 px-8 py-2 bg-greenish text-white rounded-md shadow w-fit"
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </div>
  );
}

export default Profile;
