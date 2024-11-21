import { Link } from "react-router-dom";

function GuideListingItem({ item }) {
  return (
    <div className="flex flex-col gap-3 h-full fade-in-up">
      <img
        src={item.images.length > 0 ? item?.images[0] : "/Rectangle 5.webp"}
        alt="listing"
        className="object-cover flex-1"
      />

      <p>
        <span className="font-medium">Host: </span>
        <span>{item.user?.name}</span>
      </p>
      <p>
        <span className="font-medium">Price: </span>
        <span>${item?.price}</span>
      </p>
      <p>
        <span className="font-medium">Duration: </span>
        <span>{item?.duration} days</span>
      </p>
      <p>
        <span className="font-medium">Country: </span>
        <span>{item?.country}</span>
      </p>
      <p>
        <span className="font-medium">Guests: </span>
        <span>{item?.maxGuests}</span>
      </p>
      <p>
        <span className="font-medium">Ratings Average: </span>
        <span>{item?.ratingsAverage}/5</span>
      </p>
      <Link to={`/guides/listing/${item._id}`}>
        <button className="green-button w-full">View Details</button>
      </Link>
    </div>
  );
}

export default GuideListingItem;
