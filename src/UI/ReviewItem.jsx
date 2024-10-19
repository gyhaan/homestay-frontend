function ReviewItem({ item }) {
  return (
    <div className="grid">
      {item.map((el, i) => (
        <div key={i} className="fade-in-up">
          <p className="font-medium ">By: {el.user.name}</p>
          <p>{el.review}</p>
          <p className="italic">Rating: {el.rating}/5</p>
        </div>
      ))}
    </div>
  );
}

export default ReviewItem;
