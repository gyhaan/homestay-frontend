import { useRef, useState } from "react";
import { toast } from "sonner";
import { addListing } from "../services/guideApi";
import { useNavigate } from "react-router-dom";

function ListingForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    price: "",
    duration: "",
    images: [],
    country: "",
    maxGuests: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      let selectedFiles = Array.from(files);

      if (selectedFiles.length > 3) {
        toast.info(
          "You can only upload up to 3 images. The first 3 images have been selected."
        );
        selectedFiles = selectedFiles.slice(0, 3); // Keep only the first 3 files
      }

      setFormData({
        ...formData,
        [name]: selectedFiles,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new FormData object from the form reference
    const data = new FormData(formRef.current);

    try {
      setIsLoading(true);
      await addListing(data);
      toast.success("New listing added");
      navigate("/guides/myListings");
      console.log("Listing added successfully");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }

    console.log("Form Data:", data);
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
          <label className="block text-sm font-medium ">Duration:</label>
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-greenish focus:border-greenish"
          />
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium ">Images:</label>
          <input
            type="file"
            name="images"
            accept="image/*"
            multiple
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-greenish focus:border-greenish"
          />
        </div>
        <div className="flex-1 min-w-40">
          <label className="block text-sm font-medium ">Country:</label>
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
          <label className="block text-sm font-medium ">Maximum Guests:</label>
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
          {isLoading ? "...Submitting" : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default ListingForm;
