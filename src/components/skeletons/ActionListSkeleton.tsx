import { randomRange } from "@/util/util";
import ActionItemSkeleton from "./ActionItemSkeleton";

type props = {
  min: number
  max: number
}

export default function ActionListSkeleton({ min, max }: props) {
  return (
    <>
      {Array.from({ length: randomRange(min, max) }, (_, i) => <ActionItemSkeleton key={i} />)}
    </>
  );
}
