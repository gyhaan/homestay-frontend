import { RssErrorIcon } from "hugeicons-react";

function Error({ message }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <RssErrorIcon size={50} color={"#3b873e"} variant={"stroke"} />
      <p>{message}</p>
    </div>
  );
}

export default Error;
