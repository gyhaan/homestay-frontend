import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

import { getListing } from "../services/api";

import Loader from "../UI/Loader";
import Error from "../UI/Error";
import ReviewItem from "../UI/ReviewItem";
import ViewListingItemGuide from "../UI/ViewListingItemGuide";

function ViewGuideListing() {
  const { id } = useParams();
  const [listing, setListing] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");

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
    <div className="wrapper py-10">
      <div className="grid-layout mb-4">
        {listing?.images?.map((el, i) => (
          <img src={el} alt="listing" key={i} className="w-full h-auto" />
        ))}
      </div>
      <ViewListingItemGuide item={listing} />
      <h4 className="font-bold my-3 mt-6 text-xl">Reviews</h4>
      {!listing?.reviews?.length ? (
        <p>No Reviews yet!!</p>
      ) : (
        <ReviewItem item={listing?.reviews} />
      )}
    </div>
  );
}

export default ViewGuideListing;
