import { useEffect, useState } from "react";
import AppNav from "../UI/AppNav";
import EventItem from "../UI/EventItem";

import Loader from "../UI/Loader";
import Error from "../UI/Error";
import { getEvents } from "../services/api";
import { toast } from "sonner";

function Events() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    getEvents()
      .then((events) => setEvents(events.data.events))
      .catch((error) => {
        console.error("error", error.message);
        setIsError(error.message);
        toast.error(error.message);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <AppNav />
      <section className="img-content py-16 text-center">
        <h2 className="font-bold text-4xl mb-2">Listings</h2>
        <p>Explore all the possibilities</p>
      </section>
      <section className="grid wrapper">
        {isLoading && <Loader />}
        {isError && <Error message={isError} />}
        {!isLoading &&
          !isError &&
          events.map((item, i) => <EventItem item={item} key={i} />)}
      </section>
    </>
  );
}

export default Events;
