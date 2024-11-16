function ReviewItem({ item }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-6">
      {item.map((el, i) => (
        <div key={i} className="fade-in-up">
          <p className="font-medium ">By: {el.user.name}</p>
          <p>{el.review}</p>
          <div className="flex gap-1 my-1">
            {Array.from({ length: 5 }, (_, i) => i + 1).map((i) => (
              <>
                {el.rating >= i ? (
                  <img src="/fullStar.svg" alt="star" className="w-4 h-auto" />
                ) : (
                  <img src="/emptyStar.svg" alt="star" className="w-4 h-auto" />
                )}
              </>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReviewItem;
