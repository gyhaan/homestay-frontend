function EventItem({ item }) {
  return (
    <div className="flex flex-col gap-3">
      <img src="/Rectangle 5.jpg" alt="listing" className=" object-cover " />

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
        <a href={`${item?.link}`} target="_blank">
          {item?.link}
        </a>
      </p>
    </div>
  );
}

export default EventItem;
