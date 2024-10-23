function BookingItem({ item }) {
  return (
    <div className="flex flex-col gap-3 h-full max-w-2xl fade-in-up">
      <img
        src={
          item?.listing.images.length > 0
            ? item?.listing?.images[0]
            : "/Rectangle 5.jpg"
        }
        alt="listing"
        className="object-cover "
      />

      <p>
        <span className="font-medium">Host: </span>
        <span>{item?.listing.user?.name}</span>
      </p>
      <p>
        <span className="font-medium">Price: </span>
        <span>${item?.listing?.price}</span>
      </p>
      <p>
        <span className="font-medium">Duration: </span>
        <span>{item?.listing?.duration} days</span>
      </p>
      <p>
        <span className="font-medium">Country: </span>
        <span>{item?.listing?.country}</span>
      </p>
      <p>
        <span className="font-medium">Guests: </span>
        <span>{item?.listing?.maxGuests}</span>
      </p>
      <p>
        <span className="font-medium">Start Date: </span>
        <span>{new Date(item?.startDate).toDateString()}</span>
      </p>
      <p>
        <span className="font-medium">End Date: </span>
        <span>{new Date(item?.endDate).toDateString()}</span>
      </p>
    </div>
  );
}

export default BookingItem;
