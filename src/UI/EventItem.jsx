import { dateChecker } from "../utils/helper";
import Tag from "./Tag";

function EventItem({ item }) {
  return (
    <div className="flex flex-col gap-3 fade-in-up">
      <img src={item?.image} alt="listing" className="object-cover h-96" />

      <p>
        <span className="font-medium">Event Title: </span>
        <span>{item?.name}</span>
      </p>
      <p>
        <span className="font-medium">Price: </span>
        <span>{item?.price}</span>
      </p>
      <p>
        <span className="font-medium">Date: </span>
        <span className="gap-2">
          {new Date(item?.date).toDateString()}{" "}
          {dateChecker(item?.date) ? <Tag /> : null}
        </span>
      </p>
      <p>
        <span className="font-medium">Location: </span>
        <span>{item?.location}</span>
      </p>
      <p>
        <span className="font-medium">Link: </span>
        <a
          href={`${item?.link}`}
          target="_blank"
          className="underline underline-offset-4"
        >
          {item?.link}
        </a>
      </p>
    </div>
  );
}

export default EventItem;
