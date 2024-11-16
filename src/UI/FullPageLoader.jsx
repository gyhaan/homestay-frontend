import Loader from "./Loader";

function FullPageLoader() {
  return (
    <div className="wrapper py-4 flex flex-col justify-center h-[80vh]">
      <Loader />
      <p>Loading...</p>
    </div>
  );
}

export default FullPageLoader;
