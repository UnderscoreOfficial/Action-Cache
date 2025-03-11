"use client"

import { zodResolver } from 'mantine-form-zod-resolver';
import { useForm } from "@mantine/form"
import Form from "next/form"
import { Button, Select, TextInput } from '@mantine/core';
import { action_schema, status_schema } from '@/util/schemas';
import { createAction, getAction, getActions, updateAction } from '@/actions/database';
import { useEffect, useState } from 'react';
import { z } from 'zod';
import { useCategoriesStore } from '@/stores/categories_store';
import { useActionModeStore } from '@/stores/action_mode_store';
import { useCurrentCategoryStore } from '@/stores/current_category_store';
import { useActionsStore } from '@/stores/actions_store';

type props = {
  close(): void
  id?: number
}

export default function ActionForm({ close, id }: props) {
  const [location, setLocation] = useState("[]");
  const categories = useCategoriesStore((state) => state.categories);
  const setActionMode = useActionModeStore((state) => state.setMode);
  const current_category_id = useCurrentCategoryStore((state) => state.id);
  const setCategoryActions = useActionsStore((state) => state.set);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      description: "",
      type: "shortcut",
    },
    validate: zodResolver(action_schema.omit({ category_id: true, location: true })),
  });

  useEffect(() => {
    getValue();
    // getValue is needed outside of Effect but needs to run once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getValue() {
    if (id) {
      const action = await getAction(id);
      if (action.status.success && action.data) {
        setLocation(action.data.location);
        form.setValues({ name: action.data.name, description: action.data.description, type: action.data.type });
      }
    }
  }

  async function submitForm(values: typeof form.values) {
    const params: z.infer<typeof action_schema> = {
      ...values,
      category_id: current_category_id,
      location: location,
    };

    getValue();
    let action_response: z.infer<typeof status_schema>;
    if (id) {
      action_response = await updateAction(params, id)
      setCategoryActions(await getActions(current_category_id));
    } else {
      action_response = await createAction(params);
      setCategoryActions(await getActions(current_category_id));
    }
    if (action_response.status.success) {
      console.log(action_response.status.message);
      closeHandler();
    } else {
      console.error(action_response.status.message);
      form.setFieldError("description", action_response.status.message);
    }
  }

  function closeHandler() {
    close()
    if (setActionMode) {
      setActionMode("");
    }
  }

  return (
    <Form action={"/"} onSubmit={form.onSubmit(submitForm)} className="flex flex-col gap-4">
      <Select
        size="sm"
        label="Category"
        disabled={true}
        allowDeselect={false}
        key={form.key("category_id")}
        value={String(current_category_id)}
        data={categories.map((i) => ({
          value: i.id.toString(),
          label: i.name,
        }))}
        comboboxProps={{ position: "bottom", middlewares: { flip: false, shift: false } }}
        {...form.getInputProps("category_id")}
      />
      <Select
        size="sm"
        label="Type"
        data={[
          { value: "shortcut", label: "Shortcut" },
          { value: "command", label: "Command" },
        ]}
        allowDeselect={false}
        key={form.key("type")}
        {...form.getInputProps("type")}
      />
      <TextInput
        withAsterisk
        label="Name"
        placeholder="Action Name"
        key={form.key("name")}
        {...form.getInputProps("name")}
      />
      <TextInput
        withAsterisk
        label="Description"
        placeholder="Action Description"
        key={form.key("description")}
        {...form.getInputProps("description")}
      />
      <Button type={"submit"} className="w-full mt-2">
        Submit
      </Button>
    </Form>
  )
}
