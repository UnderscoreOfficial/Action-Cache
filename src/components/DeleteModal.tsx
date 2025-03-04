import { deleteCategory, deleteShortcut } from "@/actions/database";
import { status_schema } from "@/util/schemas";
import { Button, Group, Modal } from "@mantine/core";
import { ShortcutManagerCategories } from "@prisma/client";
import { useState } from "react";
import { z } from "zod";

type props = {
  id: number
  type: string
  path: string
  delete_opened: boolean
  delete_handler: {
    close(): void
    open(): void
    toggle(): void 
  }
  setShortcutMode?(mode: string): void
  setValue?(value: string): void
  categories?: ShortcutManagerCategories[],
};

export default function DeleteModal({delete_opened, delete_handler, id, type, path, setShortcutMode, setValue, categories}: props) {
  const [error, setError] = useState("");
   
  let delete_response: z.infer<typeof status_schema>;
  async function deleteHandler() {
    if (type == "category") {
      delete_response = await deleteCategory(id, path);
    } else if (type == "shortcut") {
      delete_response = await deleteShortcut(id, path);
    } 
    if (delete_response)
      if (delete_response.status.success) {
        closeHandler();
        if (type == "category" && setValue && categories) {
          if (categories.length > 0) {
            setValue(String(categories[0]?.id));
          }
        }
      }   else {
        setError(delete_response.status.message);
      }
  }

  function closeHandler() {
    delete_handler.close()
    setError("");
    if (setShortcutMode) {
      setShortcutMode("");
    }
  }

  return (
    <Modal opened={delete_opened} onClose={closeHandler} title={(type == "category") ? "Delete Category?": "Delete Shortcut"}>
      <p>
        Are you sure you want to delete this
        {(type == "category") ? " Category? " : " Shortcut? "}
        This action cannot be undone.
      </p>
      <p className="text-red-600">
        {error}
      </p>
      <Group mt="lg" justify="flex-end">
        <Button onClick={closeHandler} variant="default">
          Cancel
        </Button>
        <Button onClick={deleteHandler} color="red">
          Confirm
        </Button>
      </Group>
    </Modal>
  )
}
