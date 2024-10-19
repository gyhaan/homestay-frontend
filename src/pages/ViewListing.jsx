import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

import { getListing } from "../services/api";
import { createReview } from "../services/reviewApi";

import Loader from "../UI/Loader";
import Error from "../UI/Error";
import ReviewItem from "../UI/ReviewItem";
import ViewListingItem from "../UI/ViewListingItem";
import ReviewComponent from "../UI/ReviewComponent";

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
      toast.info("Please add a review");
      return;
    }
    setIsAddingReview(true);

    try {
      await createReview({ rating, review, listing: id });
      toast.success("Review was added successfully");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsAddingReview(false);
      setIsReviewing(false);
    }

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
      });
  }

  return (
    <div className="wrapper py-10 ">
      {isLoading && <Loader />}
      {isError && <Error message={isError} />}
      {!isLoading && !isError && (
        <>
          <div className="grid mb-4">
            {listing?.images?.map((el, i) => (
              <img src={el} alt="listing" key={i} className="w-full h-auto" />
            ))}
            <ViewListingItem item={listing} />
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
              <ReviewComponent
                setReview={setReview}
                rating={rating}
                setRating={setRating}
                addReview={addReview}
                isAddingReview={isAddingReview}
                cancelReview={cancelReview}
              />
            ) : null}
            <h4 className="font-bold my-2 text-xl">Reviews</h4>
            {!listing?.reviews.length ? (
              <p>No Reviews yet!!</p>
            ) : (
              <ReviewItem item={listing?.reviews} />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default ViewListing;
