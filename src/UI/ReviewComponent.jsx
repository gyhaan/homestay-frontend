function ReviewComponent({
  setReview,
  rating,
  setRating,
  addReview,
  isAddingReview,
  cancelReview,
}) {
  return (
    <>
      <textarea
        className="border-2 border-greenish block py-2 px-3 focus:outline-none rounded-md min-w-80 max-w-96 h-44 "
        cols="50"
        placeholder="Leave a review"
        onChange={(e) => setReview(e.target.value)}
      />
      <div className="flex gap-3 my-4 ">
        {Array.from({ length: 5 }, (_, i) => i + 1).map((i) => (
          <button
            key={i}
            className={`border-2 border-greenish px-4 py-2 rounded-full hover:bg-greenish hover:text-white ${
              rating === i ? "bg-greenish text-white" : ""
            }`}
            onClick={() => setRating(i)}
          >
            {i}
          </button>
        ))}
      </div>
      <div className="flex gap-3 my-2">
        <button
          className="green-button disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={addReview}
          disabled={isAddingReview}
        >
          {isAddingReview ? "...Adding" : "+ Add"}
        </button>
        <button
          className="inverted-button border border-greenish disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={cancelReview}
          disabled={isAddingReview}
        >
          Cancel
        </button>
      </div>
    </>
  );
}

export default ReviewComponent;
