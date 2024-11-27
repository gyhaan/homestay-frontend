import { useEffect, useState } from "react";
import Error from "../UI/Error";
import { toast } from "sonner";
import { getMyListings } from "../services/guideApi";
import { House02Icon } from "hugeicons-react";
import { Link } from "react-router-dom";
import Skeleton from "../UI/Skeleton";
import GuideListingItem from "../UI/GuideListingItem";

function GuideListings() {
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    getMyListings()
      .then((data) => {
        data.data.listings.forEach((el) => {
          el.images.sort((a, b) => a.slice(-24).localeCompare(b.slice(-24)));
        });
        setListings(data.data.listings);
      })
      .catch((error) => {
        setIsError(error.message);
        toast.error(error.message);
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
    <>
      <section className="img-content py-16 text-center fade-in-up">
        <h2 className="font-bold text-4xl mb-2">My Listings</h2>
      </section>
      {listings.length ? (
        <Link to="/guides/addListing" className="wrapper block fade-in-up">
          <button className="green-button my-4 ml-auto block">
            + Add Listing
          </button>
        </Link>
      ) : null}
      <section className="grid-layout wrapper fade-in-up">
        {!listings.length ? (
          <div className="text-center space-y-4">
            <House02Icon size={60} color={"#417505"} className="mx-auto" />
            <p>Looks like you have no listings yet</p>
            <Link to="/guides/addListing">
              <button className="green-button my-4">+ Add Listing</button>
            </Link>
          </div>
        ) : (
          listings.map((item, i) => <GuideListingItem item={item} key={i} />)
        )}
      </section>
    </>
  );
}

export default GuideListings;
