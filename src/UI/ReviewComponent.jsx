import { useState } from "react";
import StarRating from "./StarRating";

function ReviewComponent({
  setReview,
  rating,
  setRating,
  addReview,
  isAddingReview,
  cancelReview,
}) {
  const [tempRating, setTempRating] = useState(0);
  return (
    <div className="fade-in-up">
      <textarea
        className="border-2 border-greenish block py-2 px-3 focus:outline-none min-w-72 max-w-full rounded-md h-44 "
        cols="50"
        placeholder="Leave a review"
        onChange={(e) => setReview(e.target.value)}
      />
      <div className="flex gap-0 my-3">
        {Array.from({ length: 5 }, (_, i) => i + 1).map((i) => (
          <StarRating
            key={i}
            setRating={setRating}
            setTempRating={setTempRating}
            full={tempRating ? tempRating >= i : rating >= i}
            index={i}
          />
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
    </div>
  );
}

export default ReviewComponent;
