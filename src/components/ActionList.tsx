"use client"

import dynamic from "next/dynamic";
import ActionItem from "./ActionItem";
import DeleteModal from "./DeleteModal";
import { Modal } from "@mantine/core";
import ActionForm from "./ActionForm";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { useActionsStore } from "@/stores/actions_store";
// I tried a few possible fixes like below with ssr: false but all cause skeletons to load after page like useEffect ect.
const ActionListSkeleton = dynamic(() => import("./skeletons/ActionListSkeleton"), { ssr: true, })

export default function ActionList({ }) {
  const [delete_opened, delete_handler] = useDisclosure();
  const [edit_opened, edit_handler] = useDisclosure();
  const [selected_action_id, setSelectedActionId] = useState(0);
  const actions = useActionsStore((state) => state.actions);
  const loading = useActionsStore((state) => state.loading);

  return (
    <ul className="flex gap-6 w-full min-w-52 flex-wrap justify-center" >
      {/*causes hydration issue because of random skeletons I think it should be ok since only loaded anyways temporally until real data is loaded.*/}
      {loading ? <ActionListSkeleton min={2} max={50} /> :
        <>
          {actions.map(action => (
            <ActionItem action={action} key={action.id} setSelectedAction={setSelectedActionId}
              delete_handler={delete_handler} edit_handler={edit_handler}
            >
            </ActionItem>
          ))}
          <DeleteModal id={selected_action_id} type="action" path="/" delete_opened={delete_opened} delete_handler={delete_handler} />
          <Modal opened={edit_opened} onClose={() => edit_handler.close()} title="Edit Action">
            <ActionForm close={edit_handler.close} id={selected_action_id} />
          </Modal>
        </>
      }
    </ul >
  )
}
