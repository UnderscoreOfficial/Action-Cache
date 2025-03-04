import { Flex } from "@mantine/core";
import { ShortcutManagerShortcuts } from "@prisma/client";
import Link from "next/link";
import ShortcutItemSection from "./ShortcutItemSection";

type handler = {
  close(): void
  open(): void
  toggle(): void
}

type props = {
  shortcut: ShortcutManagerShortcuts
  shortcut_mode: string
  setSelectedShortcut(shortcut: number): void
  delete_handler: handler
  edit_handler: handler
}

export default function ShortcutItem({ shortcut, shortcut_mode, setSelectedShortcut, delete_handler, edit_handler }: props) {
  function linkHandler() {
    setSelectedShortcut(shortcut.id);
    if (shortcut_mode == "delete") {
      delete_handler.open();
    } else if (shortcut_mode == "edit") {
      edit_handler.open();
    }
  }

  function getShortcutSection() {
    switch (shortcut_mode) {
      case "delete":
        return (
          <button onClick={linkHandler}>
            <Flex className="flex-col gap-1 border-2 border-red-500 rounded-md p-3 shadow-2xl">
              <ShortcutItemSection shortcut={shortcut} />
            </Flex>
          </button>
        );
      case "edit":
        return (
          <button onClick={linkHandler}>
            <Flex className="flex-col gap-1 border-2 border-orange-400 rounded-md p-3 shadow-2xl">
              <ShortcutItemSection shortcut={shortcut} />
            </Flex>
          </button>
        );
      default:
        return (
          <Link onClick={linkHandler} href={`location/${shortcut.id}/${encodeURI(shortcut.shortcut)}`} className="cursor-pointer">
            <Flex className="flex-col gap-1 border-2 rounded-md p-3 shadow-2xl">
              <ShortcutItemSection shortcut={shortcut} />
            </Flex>
          </Link>
        );
    }
  }

  return (
    <li className="min-w-fit max-w-fit hover:scale-110 transition-transform">
      {getShortcutSection()}
    </li>
  )
}
