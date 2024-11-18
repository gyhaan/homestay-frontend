import { useEffect, useState } from "react";
import ListingItem from "../UI/ListingItem";
import Skeleton from "../UI/Skeleton";
import Error from "../UI/Error";
import { getAllListings } from "../services/api";
import { toast } from "sonner";

function Listings() {
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    getAllListings()
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
        <h2 className="font-bold text-4xl mb-2">Listings</h2>
        <p>Explore all the possibilities</p>
      </section>
      <section className="grid-layout wrapper">
        {!listings.length ? (
          <div className="wrapper py-4 flex flex-col justify-center h-[30vh]">
            <Error message="No listings available at the moment." />
          </div>
        ) : (
          listings.map((item, i) => <ListingItem item={item} key={i} />)
        )}
      </section>
    </>
  );
}

export default Listings;
