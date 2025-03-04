import { Divider } from "@mantine/core";
import { ShortcutManagerShortcuts } from "@prisma/client";

type props = {
  shortcut: ShortcutManagerShortcuts
};

export default function ShortcutItemSection({shortcut}: props) {
  return (
    <section>
      <p className="text-center">
        {shortcut.shortcut}
      </p>
      <Divider />
      <p className="italic text-secondary">
        {shortcut.description}
      </p>
    </section>
  )
}
