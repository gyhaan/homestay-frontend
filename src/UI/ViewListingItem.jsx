function ViewListingItem({ item }) {
  return (
    <div className="flex flex-wrap gap-5">
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
        <span className="font-medium">Rating Average: </span>
        <span>{item?.ratingsAverage}</span>
      </p>
      <p>
        <span className="font-medium">Ratings: </span>
        <span>{item?.ratingsQuantity}</span>
      </p>
    </div>
  );
}

export default ViewListingItem;
