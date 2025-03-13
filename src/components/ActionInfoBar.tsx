import { Group, Skeleton, Tooltip } from "@mantine/core";
import { Actions } from "@prisma/client";

type props = {
  loading: boolean;
  action: Actions | undefined;
}

export default function ActionInfoBar({ loading, action }: props) {
  return (
    <>
      {loading ?
        <Group className={`min-w-0 w-3/5 z-30 absolute`}>
          <div className={`flex w-full gap-6`}>
            <Skeleton height={35} className="w-1/2" />
            <Skeleton height={35} className="w-1/2" />
          </div>
        </Group> : ""
      }
      <Group className={`mb-4 font-bold justify-between min-w-0 w-3/5`}>
        <div className="flex w-full gap-4 justify-between overflow-hidden text-neutral-100 text-nowrap text-center">
          <Tooltip label="Action Name">
            <p className="border-2 border-neutral-700 p-1 h-[35px] rounded-md w-full min-w-10 max-w-fit">{action?.name}</p>
          </Tooltip>
          <Tooltip label="Action Description">
            <p className="border-2 border-neutral-700 p-1 h-[35px] rounded-md w-full min-w-10 max-w-fit">{action?.description}</p>
          </Tooltip>
        </div>
      </Group>
    </>
  )
}
