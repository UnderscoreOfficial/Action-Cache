import { Flex } from "@mantine/core";
import { Actions } from "@prisma/client";
import Link from "next/link";
import ActionItemSection from "./ActionItemSection";
import { useActionModeStore } from "@/stores/action_mode_store";
import styles from "@/modules/ActionItem.module.css"

type handler = {
  close(): void
  open(): void
  toggle(): void
}

type props = {
  action: Actions
  delete_handler: handler
  edit_handler: handler
  setSelectedAction(action: number): void
}

export default function ActionItem({ action, delete_handler, edit_handler, setSelectedAction }: props) {
  const action_mode = useActionModeStore((state) => state.mode);

  function linkHandler() {
    setSelectedAction(action.id);
    if (action_mode == "delete") {
      delete_handler.open();
    } else if (action_mode == "edit") {
      edit_handler.open();
    }
  }

  function getactionSection() {
    switch (action_mode) {
      case "delete":
        return (
          <button onClick={linkHandler} className={`${styles["item-size"]}`}>
            <Flex className="flex-col gap-1 border-2 border-red-500 rounded-md p-3 shadow-2xl">
              <ActionItemSection action={action} />
            </Flex>
          </button>
        );
      case "edit":
        return (
          <button onClick={linkHandler} className={`${styles["item-size"]}`}>
            <Flex className="flex-col gap-1 border-2 border-orange-400 rounded-md p-3 shadow-2xl">
              <ActionItemSection action={action} />
            </Flex>
          </button>
        );
      default:
        if (action.type == "shortcut") {
          return (
            <Link onClick={linkHandler} href={`location/${action.id}/${encodeURI(action.name)}`} className="cursor-pointer">
              <Flex className="flex-col gap-1 border-2 rounded-md p-3 shadow-2xl bg-background hover:border-blue-400 transition-colors">
                <ActionItemSection action={action} />
              </Flex>
            </Link>
          );
        } else {
          return (
            <Flex className="flex-col gap-1 border-2 rounded-md p-3 shadow-2xl bg-background">
              <ActionItemSection action={action} />
            </Flex>
          );
        }
    }
  }

  return (
    <li className={`${styles["expand"]}`}>
      {getactionSection()}
    </li>
  )
}
