import { toast } from "sonner";
import { deleteBooking } from "../services/bookingApi";
import { useState } from "react";
import { useAuth } from "../Context/AuthProvider";

function BookingItem({ item }) {
  const { role, token } = useAuth();
  const [isCancel, setIsCancel] = useState(false);

  async function handleCancelBooking() {
    try {
      setIsCancel(true);
      await deleteBooking(item._id, token);
      toast.success("Booking successfully cancelled");
      window.location.reload();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsCancel(false);
    }
  }
  return (
    <div className="flex flex-col gap-3 h-full max-w-xl fade-in-up">
      <img
        src={
          item?.listing.images.length > 0
            ? item?.listing?.images[0]
            : "/Rectangle 5.jpg"
        }
        alt="listing"
        className="object-cover "
      />

      {role === "user" ? (
        <p>
          <span className="font-medium">Host: </span>
          <span>{item?.listing.user?.name}</span>
        </p>
      ) : (
        <p>
          <span className="font-medium">Guest: </span>
          <span>{item?.user?.name}</span>
        </p>
      )}

      <p>
        <span className="font-medium">Price: </span>
        <span>${item?.listing?.price}</span>
      </p>
      <p>
        <span className="font-medium">Duration: </span>
        <span>{item?.listing?.duration} days</span>
      </p>
      <p>
        <span className="font-medium">Country: </span>
        <span>{item?.listing?.country}</span>
      </p>
      <p>
        <span className="font-medium">Guests: </span>
        <span>{item?.listing?.maxGuests}</span>
      </p>
      <p>
        <span className="font-medium">Start Date: </span>
        <span>{new Date(item?.startDate).toDateString()}</span>
      </p>
      <p>
        <span className="font-medium">End Date: </span>
        <span>{new Date(item?.endDate).toDateString()}</span>
      </p>
      {role === "user" && (
        <button
          className="bg-red-500 text-white py-2 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleCancelBooking}
          disabled={isCancel}
        >
          Cancel
        </button>
      )}
    </div>
  );
}

export default BookingItem;
