import dynamic from "next/dynamic";
import { ShortcutManagerCategories, ShortcutManagerShortcuts } from "@prisma/client";
import ShortcutItem from "./ShortcutItem";
import DeleteModal from "./DeleteModal";
import { Modal } from "@mantine/core";
import ShortcutForm from "./ShortcutForm";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
// I tried a few possible fixes like below with ssr: false but all cause skeletons to load after page like useEffect ect.
const ShortcutListSkeleton = dynamic(() => import("./skeletons/ShortcutListSkeleton"), { ssr: true, })

type props = {
  shortcuts: ShortcutManagerShortcuts[]
  shortcut_mode: string
  setShortcutMode(mode: string): void
  selected_category: number
  categories: ShortcutManagerCategories[]
  setLoading(loading: boolean): void
  loading: boolean
}


export default function ShortcutList({ shortcuts, setShortcutMode, shortcut_mode, selected_category, categories, loading, setLoading }: props) {
  const [delete_opened, delete_handler] = useDisclosure();
  const [edit_opened, edit_handler] = useDisclosure();
  const [selected_shortcut, setSelectedShortcut] = useState(0);

  return (
    <ul className="flex gap-6 w-full min-w-52 flex-wrap justify-center" suppressHydrationWarning={true}>
      {/*causes hydration issue because of random skeletons I think it should be ok since only loaded anyways temporally until real data is loaded.*/}
      {loading ? <ShortcutListSkeleton min={2} max={50} /> :
        <>
          {shortcuts.map(shortcut => (
            <ShortcutItem shortcut={shortcut} key={shortcut.id} shortcut_mode={shortcut_mode} setSelectedShortcut={setSelectedShortcut}
              delete_handler={delete_handler} edit_handler={edit_handler}
            >
            </ShortcutItem>
          ))}
          <DeleteModal id={selected_shortcut} type="shortcut" path="/" delete_opened={delete_opened} delete_handler={delete_handler} setShortcutMode={setShortcutMode} />
          <Modal opened={edit_opened} onClose={() => edit_handler.close()} title="Edit Shortcut">
            <ShortcutForm close={edit_handler.close} categories={categories} selected_category={selected_category}
              shortcut_id={selected_shortcut} shortcuts={shortcuts} setShortcutMode={setShortcutMode} />
          </Modal>
        </>
      }
    </ul >
  )
}
