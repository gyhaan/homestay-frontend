import { useEffect, useState } from "react";
import ListingItem from "../UI/ListingItem";
import Loader from "../UI/Loader";
import Error from "../UI/Error";
import { toast } from "sonner";
import { getMyListings } from "../services/guideApi";
import { House02Icon } from "hugeicons-react";

function GuideListings() {
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    getMyListings()
      .then((listings) => {
        setListings(listings.data.listings);
      })
      .catch((error) => {
        console.error("error", error.message);
        setIsError(error.message);
        toast.error(error.message);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <section className="img-content py-16 text-center">
        <h2 className="font-bold text-4xl mb-2">My Listings</h2>
      </section>
      <section className="grid wrapper">
        {isLoading && <Loader />}
        {isError && <Error message={isError} />}
        {!isLoading &&
          !isError &&
          (listings.length > 0 ? (
            listings.map((item, i) => <ListingItem item={item} key={i} />)
          ) : (
            <div className="text-center">
              <House02Icon size={48} color={"#417505"} className="mx-auto" />
              <p>Look like you have no listings yet</p>
            </div>
          ))}
      </section>
    </>
  );
}

export default GuideListings;
