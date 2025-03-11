import { Divider } from "@mantine/core";
import { Actions } from "@prisma/client";

type props = {
  action: Actions
};

export default function ActionItemSection({ action }: props) {
  return (
    <section>
      <p className="text-center overflow-hidden text-ellipsis">
        {action.name}
      </p>
      <Divider />
      <p className="italic text-neutral-200 overflow-hidden text-ellipsis">
        {action.description}
      </p>
    </section>
  )
}
