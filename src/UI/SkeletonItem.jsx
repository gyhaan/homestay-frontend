function SkeletonItem() {
  return (
    <div className="space-y-4 p-3 max-w-md mx-auto w-full">
      <div className="bg-gray-300 rounded-md h-40 w-full animate-pulse"></div>
      <div className="space-y-2">
        <div className="bg-gray-300 h-4 w-3/4 rounded animate-pulse"></div>
        <div className="bg-gray-300 h-4 w-1/2 rounded animate-pulse"></div>
      </div>
    </div>
  );
}

export default SkeletonItem;
