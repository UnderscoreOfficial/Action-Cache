import { ShortcutManagerCategories, ShortcutManagerShortcuts } from "@prisma/client";
import ShortcutItem from "./ShortcutItem";
import DeleteModal from "./DeleteModal";
import { Modal, Skeleton } from "@mantine/core";
import ShortcutForm from "./ShortcutForm";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

type props = {
  shortcuts: ShortcutManagerShortcuts[]
  shortcut_mode: string
  setShortcutMode(mode: string): void
  selected_category: number
  categories: ShortcutManagerCategories[] 
  setLoading(loading: boolean): void
  loading: boolean
}

export default function ShortcutList({shortcuts, setShortcutMode, shortcut_mode, selected_category, categories, loading, setLoading}: props) {
  const [delete_opened, delete_handler] = useDisclosure();
  const [edit_opened, edit_handler] = useDisclosure();
   
  const [selected_shortcut, setSelectedShortcut] = useState(0);
  
  return (
  <>
    {loading? <ul className="grid grid-cols-4 gap-32">
      <Skeleton className="max-w-[400px] min-w-[200px]" height={76} />
      <Skeleton className="max-w-[200px] min-w-[200px]" height={76} />
      <Skeleton className="max-w-[300px] min-w-[200px]" height={76} />
      <Skeleton className="max-w-[200px] min-w-[200px]" height={76} />
      <Skeleton className="max-w-[300px] min-w-[200px]" height={76} />
      <Skeleton className="max-w-[250px] min-w-[200px]" height={76} />
      <Skeleton className="max-w-[230px] min-w-[200px]" height={76} />
      <Skeleton className="max-w-[320px] min-w-[200px]" height={76} />
      <Skeleton className="max-w-[300px] min-w-[200px]" height={76} />
      <Skeleton className="max-w-[200px] min-w-[200px]" height={76} />
      <Skeleton className="max-w-[275px] min-w-[200px]" height={76} />
      <Skeleton className="max-w-[250px] min-w-[200px]" height={76} />
      <Skeleton className="max-w-[210px] min-w-[200px]" height={76} />
      <Skeleton className="max-w-[200px] min-w-[200px]" height={76} />
      <Skeleton className="max-w-[300px] min-w-[200px]" height={76} />
      <Skeleton className="max-w-[244px] min-w-[200px]" height={76} />
    </ul> : 
    <ul className="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 place-items-center">
      {shortcuts.map(shortcut => (
        <ShortcutItem shortcut={shortcut} key={shortcut.id} shortcut_mode={shortcut_mode} setSelectedShortcut={setSelectedShortcut} 
            delete_handler={delete_handler} edit_handler={edit_handler}
          >
        </ShortcutItem>
      ))}
      <DeleteModal id={selected_shortcut} type="shortcut" path="/" delete_opened={delete_opened} delete_handler={delete_handler} setShortcutMode={setShortcutMode}/>
      <Modal opened={edit_opened} onClose={() => edit_handler.close()} title="Edit Shortcut">
        <ShortcutForm close={edit_handler.close} categories={categories} selected_category={selected_category} 
          shortcut_id={selected_shortcut} shortcuts={shortcuts} setShortcutMode={setShortcutMode} />
      </Modal>
    </ul>
    }
  </>
  )
}
