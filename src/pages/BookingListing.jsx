import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getListing } from "../services/api";
import { toast } from "sonner";
import Loader from "../UI/Loader";
import Error from "../UI/Error";
import { useNavigate, useParams } from "react-router-dom";
import { createBooking } from "../services/bookingApi";

function BookingListing() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [listing, setListing] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVV, setCardCVV] = useState("");

  // const blockedIntervals = [
  //   {
  //     start: new Date(2024, 10, 15, 0, 0, 0),
  //     end: new Date(2024, 10, 22, 23, 59, 59),
  //   }, // October 15-22, 2024
  //   {
  //     start: new Date(2024, 10, 25, 0, 0, 0),
  //     end: new Date(2024, 10, 27, 23, 59, 59),
  //   }, // October 25-27, 2024
  // ];

  const isDateBlocked = (date) => {
    return listing?.unavailableDates.some(
      (interval) => date >= interval.start && date <= interval.end
    );
  };

  const handleStartDateChange = (date) => {
    if (isDateBlocked(date)) {
      toast.error("Selected start date is unavailable.");
    } else {
      setStartDate(date);
      if (endDate && date >= endDate) {
        setEndDate(null);
      }
    }
  };

  const handleEndDateChange = (date) => {
    if (isDateBlocked(date)) {
      toast.error("Selected end date is unavailable.");
    } else {
      setEndDate(date);
    }
  };

  useEffect(() => {
    getListing(id)
      .then((listing) => {
        setListing(listing.data.listing);
      })
      .catch((error) => {
        console.error("error", error.message);
        setIsError(error.message);
        toast.error(error.message);
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  const isCardNumberValid = (number) => {
    // Regular expression for card number validation (13-19 digits)
    const regex = /^\d{13,19}$/;
    return regex.test(number);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Validate that both dates are selected
    if (!startDate) {
      toast.error("Start date is required.");
      return;
    }
    if (!endDate) {
      toast.error("End date is required.");
      return;
    }

    // Validate card number
    if (!isCardNumberValid(cardNumber)) {
      toast.error("Card number is invalid. It must be 13 to 19 digits.");
      return;
    }

    // Set end date to the end of the day
    endDate.setHours(23, 59, 59, 999);

    setIsLoading(true);
    try {
      // Make the API call to create the booking
      await createBooking({ listing: id, startDate, endDate });
      // Display success message if booking is created
      toast.success("Payment details submitted successfully!");
      navigate("/users/myBookings");
    } catch (error) {
      // Handle any errors during the API call
      toast.error(
        `Booking failed: ${error.message || "An unexpected error occurred."}`
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="wrapper">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="wrapper">
        <Error message={isError} />
      </div>
    );
  }

  return (
    <div className="wrapper flex flex-wrap justify-around">
      <form
        onSubmit={handleFormSubmit}
        className="w-full max-w-lg p-6 bg-white rounded-lg border-gray-600 space-y-4"
      >
        <div>
          <DatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            minDate={new Date()}
            maxDate={
              endDate
                ? new Date(new Date(endDate).setDate(endDate.getDate() - 1))
                : null
            }
            placeholderText="Select a start date"
            excludeDateIntervals={listing?.unavailableDates}
            closeOnScroll={true}
            className="min-w-80 px-4 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-greenish focus:border-greenish"
          />
        </div>
        <div>
          <DatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            minDate={
              startDate
                ? new Date(new Date(startDate).setDate(startDate.getDate() + 1))
                : new Date()
            }
            maxDate={null}
            placeholderText="Select an end date"
            excludeDateIntervals={listing?.unavailableDates}
            closeOnScroll={true}
            className="min-w-80 px-4 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-greenish focus:border-greenish"
          />
        </div>

        <div>
          <input
            type="text"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            placeholder="Cardholder Name"
            className="w-full px-4 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-greenish focus:border-greenish"
            required
          />
        </div>
        <div>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Card Number"
            className="w-full px-4 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-greenish focus:border-greenish"
            required
          />
        </div>
        <div className="flex space-x-4">
          <input
            type="text"
            value={cardExpiry}
            onChange={(e) => setCardExpiry(e.target.value)}
            placeholder="MM/YY"
            className="w-1/2 px-4 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-greenish focus:border-greenish"
            required
          />
          <input
            type="text"
            value={cardCVV}
            onChange={(e) => setCardCVV(e.target.value)}
            placeholder="CVV"
            className="w-1/2 px-4 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-greenish focus:border-greenish"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-greenish text-white rounded-md shadow-sm hover:bg-greenish focus:outline-none focus:ring-2 focus:ring-greenish disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? "...Submitting" : "Submit Payment"}
        </button>
      </form>
    </div>
  );
}

export default BookingListing;
