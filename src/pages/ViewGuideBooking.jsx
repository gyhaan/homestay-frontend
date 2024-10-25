import { useEffect, useState } from "react";
import Error from "../UI/Error";
import Loader from "../UI/Loader";
import BookingItem from "../UI/BookingItem";
import { toast } from "sonner";
import { getGuideBookings } from "../services/guideApi";

function ViewGuideBooking() {
  const role = JSON.parse(sessionStorage.getItem("role"));
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  console.log(bookings);

  useEffect(() => {
    getGuideBookings()
      .then((data) => {
        console.log(data.data.listings);
        setBookings(data.data.listings);
      })
      .catch((err) => {
        setIsError(err.message);
        toast.error(err.message);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <div className="wrapper py-4 flex flex-col justify-center h-[80vh]">
        <Loader />
      </div>
    );
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

export default ViewGuideBooking;
