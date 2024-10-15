function ListingItem({ item }) {
  return (
    <div className="flex flex-col gap-3">
      <img src="/Rectangle 5.jpg" alt="listing" className="object-cover" />
      <p>
        <span className="font-medium">Host: </span>
        <span>Ganza Owen Yhaan</span>
      </p>
      <p>
        <span className="font-medium">Price: </span>
        <span>$150</span>
      </p>
      <p>
        <span className="font-medium">Duration: </span>
        <span>30 days</span>
      </p>
      <p>
        <span className="font-medium">Country: </span>
        <span>Rwanda</span>
      </p>
      <p>
        <span className="font-medium">Guests: </span>
        <span>3</span>
      </p>
    </div>
  );
}

export default ListingItem;
