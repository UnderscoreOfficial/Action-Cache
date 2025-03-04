"use client"

import { zodResolver } from 'mantine-form-zod-resolver';
import { useForm } from "@mantine/form"
import Form from "next/form"
import { Button, TextInput } from '@mantine/core';
import { category_schema, status_schema } from '@/util/schemas';
import { createCategory, updateCategory } from '@/actions/database';
import { z } from 'zod';
import { useEffect } from 'react';
import { ShortcutManagerCategories } from '@prisma/client';

type props = {
  close(): void
  categories?: ShortcutManagerCategories[],
  category_id?: number
  setValue?(value: string): void
};

export default function CategoryForm({ close, category_id, categories, setValue }: props) {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
    },
    validate: zodResolver(category_schema),
  });

  useEffect(() => {
    getValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getValue() {
    if (category_id && categories) {
      const cat = categories.filter(c => c.id == category_id);
      if (cat.length == 1) {
        const name = cat[0]?.name || "";
        form.setValues({ name: name })
      }
    }

  }

  async function submitForm(values: typeof form.values) {
    getValue();
    let status: z.infer<typeof status_schema>;
    if (category_id) {
      const category = await updateCategory(values, category_id, "/")
      status = { status: { ...category.status } };
    } else {
      const category = await createCategory(values, "/");
      const id = category.data?.id;
      if (id && setValue) {
        setValue(String(id));
      }
      status = { status: { ...category.status } };
    }
    if (status.status.success) {
      console.log(status.status.message);
      close();
    } else {
      console.error(status.status.message);
      form.setFieldError("name", status.status.message);
    }
  };

  return (
    <Form action={"/"} onSubmit={form.onSubmit(submitForm)} className="flex flex-col gap-6">
      <TextInput
        withAsterisk
        label="Name"
        placeholder="Category name"
        key={form.key("name")}
        {...form.getInputProps("name")}
      />
      <Button type={"submit"}>Submit</Button>
    </Form>
  )
}
