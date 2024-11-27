import { useEffect, useState } from "react";

import Error from "../UI/Error";
import BookingItem from "../UI/BookingItem";
import { getMyBookings } from "../services/userApi";

import { toast } from "sonner";
import Skeleton from "../UI/Skeleton";

function ViewBooking() {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getMyBookings()
      .then((data) => {
        data.data.listings.forEach((el) => {
          el.listing.images.sort((a, b) =>
            a.slice(-24).localeCompare(b.slice(-24))
          );
        });
        setBookings(data.data.listings);
      })
      .catch((err) => {
        setIsError(err.message);
        toast.error(err.message);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) {
    return (
      <div className="wrapper py-4 flex flex-col justify-center h-[80vh]">
        <Error message={isError} />
      </div>
    );
  }

  return (
    <div className="wrapper grid-layout py-8">
      {!bookings.length ? (
        <Error message={"Looks like you haven't made bookings yet"} />
      ) : (
        bookings.map((item, i) => <BookingItem item={item} key={i} />)
      )}
    </div>
  );
}

export default ViewBooking;
