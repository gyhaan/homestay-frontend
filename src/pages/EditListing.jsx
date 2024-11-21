import { useState, useRef } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { editListing } from "../services/guideApi";
import { toast } from "sonner";

function EditListing() {
  const { id } = useParams();
  console.log(id);
  const [searchParam] = useSearchParams();
  const navigate = useNavigate();
  const price = searchParam.get("price");
  const duration = searchParam.get("duration");
  const country = searchParam.get("country");
  const maxGuests = searchParam.get("guests");
  const [formData, setFormData] = useState({
    price,
    duration,
    country,
    maxGuests,
  });
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate an API request
    try {
      await editListing(id, formData);
      toast.success("Listing updated successfully!!");
      navigate(`/guides/listing/${id}`);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="wrapper h-svh py-10">
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto p-6 border-2 border-gray-200 rounded-lg shadow-sm flex flex-wrap gap-4 items-center"
        ref={formRef}
      >
        <div className="flex-1 min-w-40">
          <label className="block text-sm font-medium">Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-greenish focus:border-greenish"
          />
        </div>

        <div className="flex-1 min-w-40">
          <label className="block text-sm font-medium">Duration:</label>
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-greenish focus:border-greenish"
          />
        </div>

        <div className="flex-1 min-w-40">
          <label className="block text-sm font-medium">Country:</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-greenish focus:border-greenish"
          >
            <option value="">Select a country</option>
            <option value="Kenya">Kenya</option>
            <option value="Uganda">Uganda</option>
            <option value="Tanzania">Tanzania</option>
            <option value="Rwanda">Rwanda</option>
            <option value="Burundi">Burundi</option>
            <option value="South Sudan">South Sudan</option>
          </select>
        </div>

        <div className="flex-1 min-w-40">
          <label className="block text-sm font-medium">Maximum Guests:</label>
          <input
            type="number"
            name="maxGuests"
            value={formData.maxGuests}
            onChange={handleChange}
            required
            min={1}
            max={5}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-greenish focus:border-greenish"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-greenish text-white rounded-md shadow-sm hover:bg-greenish focus:outline-none focus:ring-2 focus:ring-greenish disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? "...Saving" : "Save Changes"}
        </button>
      </form>
    </div>
  );
}

export default EditListing;
