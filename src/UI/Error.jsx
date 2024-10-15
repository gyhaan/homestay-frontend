import { RssErrorIcon } from "hugeicons-react";

function Error() {
  return (
    <div className="flex flex-col items-center gap-2">
      <RssErrorIcon size={50} color={"#3b873e"} variant={"stroke"} />
      <p>Something went wrong, reload the page again</p>
    </div>
  );
}

export default Error;
