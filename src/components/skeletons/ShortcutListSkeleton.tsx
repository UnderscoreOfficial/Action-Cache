import { randomRange } from "@/util/util";
import ShortcutItemSkeleton from "./ShortcutItemSkeleton";

type props = {
  min: number
  max: number
}

export default function ShortcutListSkeleton({ min, max }: props) {
  return (
    <>
      {Array.from({ length: randomRange(min, max) }, (_, i) => <ShortcutItemSkeleton key={i} />)}
    </>
  );
}
