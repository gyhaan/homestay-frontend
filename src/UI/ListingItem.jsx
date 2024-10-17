function ListingItem({ item }) {
  return (
    <div className="flex flex-col gap-3">
      <img src="/Rectangle 5.jpg" alt="listing" className=" object-cover " />

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
    </div>
  );
}

export default ListingItem;
