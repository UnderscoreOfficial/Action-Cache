import { randomRange } from "@/util/util";
import { Skeleton } from "@mantine/core";

export default function ActionItemSkeleton() {
  return <Skeleton w={randomRange(25, 350)} h={76} className={`min-w-[200px]`} />
}

