function StarRating({ setRating, setTempRating, full, index }) {
  return (
    <div className="hover:cursor-pointer">
      {full ? (
        <img
          src="/fullStar.svg"
          alt="star"
          className="w-8 h-auto"
          onClick={() => setRating(index)}
          onMouseEnter={() => {
            setTempRating(index);
          }}
          onMouseLeave={() => setTempRating(0)}
        />
      ) : (
        <img
          src="/emptyStar.svg"
          alt="star"
          className="w-8 h-auto"
          onMouseEnter={() => setTempRating(index)}
          onMouseLeave={() => setTempRating(0)}
        />
      )}
    </div>
  );
}

export default StarRating;
