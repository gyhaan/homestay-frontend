import { useEffect, useState } from "react";
import ListingItem from "../UI/ListingItem";
import Loader from "../UI/Loader";
import Error from "../UI/Error";
import { toast } from "sonner";
import { getMyListings } from "../services/guideApi";
import { House02Icon } from "hugeicons-react";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";

function GuideListings() {
  const { token } = useAuth();
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    getMyListings(token)
      .then((data) => {
        setListings(data.data.listings);
      })
      .catch((error) => {
        setIsError(error.message);
        toast.error(error.message);
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
    <>
      <section className="img-content py-16 text-center">
        <h2 className="font-bold text-4xl mb-2">My Listings</h2>
      </section>
      <section className="grid-layout wrapper">
        {!listings.length ? (
          <div className="text-center space-y-4">
            <House02Icon size={60} color={"#417505"} className="mx-auto" />
            <p>Looks like you have no listings yet</p>
            <Link to="/guides/addListing">
              <button className="green-button">+ Add Listing</button>
            </Link>
          </div>
        ) : (
          listings.map((item, i) => <ListingItem item={item} key={i} />)
        )}
      </section>
    </>
  );
}

export default GuideListings;
