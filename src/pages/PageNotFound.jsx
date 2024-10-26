import { RssErrorIcon } from "hugeicons-react";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-[70svh] gap-3 text-center px-3 max-w-96 mx-auto">
      <RssErrorIcon size={50} color={"#3b873e"} variant={"stroke"} />
      <p>
        Oops! It seems this homestay took an unplanned trip. The page you're
        looking for isn't here.
      </p>
      <button className="green-button" onClick={() => navigate(-1)}>
        Go back
      </button>
    </div>
  );
}

export default PageNotFound;
