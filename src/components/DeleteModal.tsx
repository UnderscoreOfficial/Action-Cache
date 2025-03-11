import { deleteCategory, deleteAction, getCategories, getActions } from "@/actions/database";
import { useCategoriesStore } from "@/stores/categories_store";
import { useCurrentCategoryStore } from "@/stores/current_category_store";
import { useActionModeStore } from "@/stores/action_mode_store";
import { useActionsStore } from "@/stores/actions_store";
import { status_schema } from "@/util/schemas";
import { Button, Group, Modal } from "@mantine/core";
import { Categories } from "@prisma/client";
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
  categories?: Categories[],
  setValue?(value: string): void
};

export default function DeleteModal({ delete_opened, delete_handler, id, type, setValue, categories }: props) {
  const [error, setError] = useState("");
  const setActionMode = useActionModeStore((state) => state.setMode);
  const setCategories = useCategoriesStore((state) => state.set);
  const current_category_id = useCurrentCategoryStore((state) => state.id);
  const setCategoryActions = useActionsStore((state) => state.set);

  let delete_response: z.infer<typeof status_schema>;
  async function deleteHandler() {
    if (type == "category") {
      delete_response = await deleteCategory(id);
      setCategories(await getCategories());
    } else if (type == "action") {
      delete_response = await deleteAction(id);
      setCategoryActions(await getActions(current_category_id));
    }
    if (delete_response)
      if (delete_response.status.success) {
        closeHandler();
        if (type == "category" && setValue && categories) {
          if (categories.length > 0) {
            setValue(String(categories[0]?.id));
          }
        }
      } else {
        setError(delete_response.status.message);
      }
  }

  function closeHandler() {
    delete_handler.close()
    setError("");
    if (setActionMode) {
      setActionMode("");
    }
  }

  return (
    <Modal opened={delete_opened} onClose={closeHandler} title={(type == "category") ? "Delete Category?" : "Delete Action"}>
      <p>
        Are you sure you want to delete this
        {(type == "category") ? " Category? " : " Action? "}
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
