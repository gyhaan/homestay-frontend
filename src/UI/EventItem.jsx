function EventItem({ item }) {
  return (
    <div className="flex flex-col gap-3 fade-in-up">
      <img
        src="/Rectangle 5.jpg"
        alt="listing"
        className=" object-cover max-h-300"
      />

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
        <span>{new Date(item?.date).toDateString()}</span>
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
          className="hover:underline hover:underline-offset-4"
        >
          {item?.link}
        </a>
      </p>
    </div>
  );
}

export default EventItem;
