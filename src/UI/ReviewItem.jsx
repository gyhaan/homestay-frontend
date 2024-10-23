function ReviewItem({ item }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-6">
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
