"use client"

import { zodResolver } from 'mantine-form-zod-resolver';
import { useForm } from "@mantine/form"
import Form from "next/form"
import { Button, Select, TextInput } from '@mantine/core';
import { shortcut_schema, status_schema } from '@/util/schemas';
import { createShortcut, updateShortcut } from '@/actions/database';
import { ShortcutManagerCategories, ShortcutManagerShortcuts } from "@prisma/client";
import { useEffect, useState } from 'react';
import { z } from 'zod';

type props = {
  close(): void
  categories: ShortcutManagerCategories[]
  selected_category: number
  shortcut_id?: number
  shortcuts?: ShortcutManagerShortcuts[]
  setShortcutMode?(mode: string): void
};

export default function ShortcutForm({close, categories, selected_category, shortcuts, shortcut_id, setShortcutMode}: props) {
  const [location, setLocation] = useState("[]");

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      shortcut: "",
      description: "",
    },
    validate: zodResolver(shortcut_schema.omit({category_id: true, location: true})),
  });

  useEffect(() => {
    getValue();
  }, []);

  function getValue() {
    if (shortcut_id && shortcuts) {
      const short = shortcuts.filter(s => s.id == shortcut_id);
      if (short.length == 1) {
        const name = short[0]?.shortcut || "";
        const description = short[0]?.description || "";
        const location = short[0]?.location || "[]";
        short
        setLocation(location);
        form.setValues({shortcut: name, description: description})
      }
    }

  }
  async function submitForm(values: typeof form.values) {
    const params = {...values, category_id: selected_category, location: location};
    getValue();
    let shortcut_response: z.infer<typeof status_schema>;
    if (shortcut_id) {
      shortcut_response = await updateShortcut(params, shortcut_id, "/")
    } else {
      shortcut_response = await createShortcut(params, "/");
    }
    if (shortcut_response.status.success) {
      console.log(shortcut_response.status.message);
      closeHandler();
    } else {
      console.error(shortcut_response.status.message);
      form.setFieldError("description", shortcut_response.status.message);
    }
  }

  function closeHandler() {
    close()
    if (setShortcutMode) {
      setShortcutMode("");
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
        value={String(selected_category)}
        data={categories.map((i) => ({
          value: i.id.toString(),
          label: i.name,
        }))}
        comboboxProps={{ position: "bottom", middlewares: { flip: false, shift: false } }}
        {...form.getInputProps("category_id")}
      />
      <TextInput
        withAsterisk
        label="Name"
        placeholder="Shortcut Name"
        key={form.key("shortcut")}
        {...form.getInputProps("shortcut")}
      />
      <TextInput
        withAsterisk
        label="Description"
        placeholder="Shortcut Description"
        key={form.key("description")}
        {...form.getInputProps("description")}
      />
      <Button type={"submit"} className="w-full mt-2">
        Submit
      </Button>
    </Form>
  )
}
