import SkeletonItem from "./SkeletonItem";

function Skeleton() {
  return (
    <div className="grid-layout wrapper pt-6">
      {Array.from({ length: 8 }, (_, i) => i + 1).map((el, i) => (
        <SkeletonItem key={i} />
      ))}
    </div>
  );
}

export default Skeleton;
