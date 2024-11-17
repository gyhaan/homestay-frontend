function StarRating({ rating, setRating, tempRating, setTempRating, full, i }) {
  return (
    <div className="hover:cursor-pointer">
      {full ? (
        <img
          src="/fullStar.svg"
          alt="star"
          className="w-8 h-auto"
          onClick={() => setRating(i)}
          onMouseEnter={() => {
            setTempRating(i);
          }}
          onMouseLeave={() => setTempRating(0)}
        />
      ) : (
        <img
          src="/emptyStar.svg"
          alt="star"
          className="w-8 h-auto"
          onClick={() => setRating(i)}
          onMouseEnter={() => setTempRating(i)}
          onMouseLeave={() => setTempRating(0)}
        />
      )}
    </div>
  );
}

export default StarRating;
