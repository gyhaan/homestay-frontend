import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getListing } from "../services/api";
import { toast } from "sonner";
import Loader from "../UI/Loader";
import Error from "../UI/Error";
import { createReview } from "../services/reviewApi";

function ViewListing() {
  const { id } = useParams();
  const [listing, setListing] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(1);
  const [isReviewing, setIsReviewing] = useState(false);
  const [isAddingReview, setIsAddingReview] = useState(false);

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

  function cancelReview() {
    setRating(1);
    setReview("");
    setIsReviewing(false);
  }

  async function addReview() {
    if (!review) {
      toast.message("Please add a review");
    }
    setIsAddingReview(true);
    await createReview({ rating, review, listing: id });
    getListing(id)
      .then((listing) => {
        setListing(listing.data.listing);
        cancelReview();
      })
      .catch((error) => {
        console.error("error", error.message);
        setIsError(error.message);
        toast.error(error.message);
      })
      .finally(() => {
        setIsLoading(false);
        setIsAddingReview(false);
      });
  }

  return (
    <div className="wrapper py-10">
      {isLoading && <Loader />}
      {isError && <Error message={isError} />}
      {!isLoading && !isError && (
        <>
          <div className="grid mb-4">
            {listing?.images?.map((el, i) => (
              <img src={el} alt="listing" key={i} className="w-full h-auto" />
            ))}
            <div className="flex flex-col gap-2">
              <p>
                <span className="font-medium">Host: </span>
                <span>{listing.user?.name}</span>
              </p>
              <p>
                <span className="font-medium">Price: </span>
                <span>${listing?.price}</span>
              </p>
              <p>
                <span className="font-medium">Duration: </span>
                <span>{listing?.duration} days</span>
              </p>
              <p>
                <span className="font-medium">Country: </span>
                <span>{listing?.country}</span>
              </p>
              <p>
                <span className="font-medium">Guests: </span>
                <span>{listing?.maxGuests}</span>
              </p>
              <p>
                <span className="font-medium">Rating Average: </span>
                <span>{listing?.ratingsAverage}</span>
              </p>
              <p>
                <span className="font-medium">Ratings: </span>
                <span>{listing?.ratingsQuantity}</span>
              </p>
            </div>
          </div>
          <div className="my-8">
            {!isReviewing ? (
              <button
                className="green-button"
                onClick={() => setIsReviewing(true)}
              >
                Add A Review
              </button>
            ) : null}

            {isReviewing ? (
              <>
                <textarea
                  className="border-2 border-greenish block py-2 px-3 focus:outline-none rounded-md min-w-80 max-w-96 h-44 "
                  cols="50"
                  onChange={(e) => setReview(e.target.value)}
                />
                <div className="flex gap-3 my-4 ">
                  {Array.from({ length: 5 }, (_, i) => i + 1).map((i) => (
                    <button
                      key={i}
                      className={`border-2 border-greenish px-4 py-2 rounded-full hover:bg-greenish hover:text-white ${
                        rating === i ? "bg-greenish text-white" : ""
                      }`}
                      onClick={() => setRating(i)}
                    >
                      {i}
                    </button>
                  ))}
                </div>
                <div className="flex gap-3 my-2">
                  <button className="green-button" onClick={addReview}>
                    {isAddingReview ? "...Adding" : "+ Add"}
                  </button>
                  <button
                    className="inverted-button border border-greenish"
                    onClick={cancelReview}
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : null}
            <h4 className="font-bold my-2 text-xl">Reviews</h4>
            {!listing?.reviews.length ? (
              <p>No Reviews yet!!</p>
            ) : (
              <div className="grid">
                {listing?.reviews.map((el, i) => (
                  <div key={i}>
                    <p className="font-medium ">By: {el.user.name}</p>
                    <p>{el.review}</p>
                    <p className="italic">Rating: {el.rating}/5</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default ViewListing;
