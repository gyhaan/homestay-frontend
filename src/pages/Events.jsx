import { useEffect, useState } from "react";
import EventItem from "../UI/EventItem";
import Skeleton from "../UI/Skeleton";
import Error from "../UI/Error";
import { getEvents } from "../services/api";
import { toast } from "sonner";

function Events() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    getEvents()
      .then((data) => setEvents(data.data.events))
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
        <h2 className="font-bold text-4xl mb-2">Events</h2>
        <p>Unforgettable Moments, One Event at a Time</p>
      </section>
      <section className="grid-layout wrapper">
        {!events.length ? (
          <div className="text-center">
            <p>No events available at the moment.</p>
          </div>
        ) : (
          events.map((item, i) => <EventItem item={item} key={i} />)
        )}
      </section>
    </>
  );
}

export default Events;
