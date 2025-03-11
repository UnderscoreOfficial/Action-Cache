"use client"

import { zodResolver } from 'mantine-form-zod-resolver';
import { useForm } from "@mantine/form"
import Form from "next/form"
import { Button, TextInput } from '@mantine/core';
import { category_schema, status_schema } from '@/util/schemas';
import { createCategory, getCategories, getCategory, updateCategory } from '@/actions/database';
import { z } from 'zod';
import { useEffect } from 'react';
import { useCategoriesStore } from '@/stores/categories_store';

type props = {
  close(): void
  id?: number
  setValue?(value: string): void
};

export default function CategoryForm({ close, id, setValue }: props) {
  const setCategories = useCategoriesStore((state) => state.set);

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

  async function getValue() {
    if (id) {
      const category = await getCategory(id)
      if (category.status.success && category.data) {
        form.setValues({ name: category.data.name })
      }
    }
  }

  async function submitForm(values: typeof form.values) {
    getValue();
    let status: z.infer<typeof status_schema>;
    if (id) {
      const category = await updateCategory(values, id)
      setCategories(await getCategories());
      status = { status: { ...category.status } };
    } else {
      const category = await createCategory(values);
      setCategories(await getCategories());
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
