import { useEffect, useState } from "react";
import ListingItem from "../UI/ListingItem";
import Loader from "../UI/Loader";
import Error from "../UI/Error";
import { getAllListings } from "../services/api";
import { toast } from "sonner";

function Listings() {
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    getAllListings()
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
        <h2 className="font-bold text-4xl mb-2">Listings</h2>
        <p>Explore all the possibilities</p>
      </section>
      <section className="grid-layout wrapper">
        {isLoading && <Loader />}
        {isError && <Error message={isError} />}
        {!isLoading &&
          !isError &&
          listings.map((item, i) => <ListingItem item={item} key={i} />)}
      </section>
    </>
  );
}

export default Listings;
