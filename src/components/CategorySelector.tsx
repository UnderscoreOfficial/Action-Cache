"use client"

import { Button, Flex, Modal, Select, Skeleton, Tooltip } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks"
import { useField } from "@mantine/form";
import React, { useEffect } from "react";
import CategoryForm from "./CategoryForm";
import DeleteModal from "./DeleteModal";
import { useCurrentCategoryStore } from "@/stores/current_category_store";
import { useCategoriesStore } from "@/stores/categories_store";
import { useActionsStore } from "@/stores/actions_store";
import { getCategories, getActions } from "@/actions/database";

export default function CategorySelector({ }) {
  const [create_opened, create_handler] = useDisclosure();
  const [delete_opened, delete_handler] = useDisclosure();
  const [edit_opened, edit_handler] = useDisclosure();
  const setCurrentCategory = useCurrentCategoryStore((state) => state.setCategory);
  const category_loading = useCategoriesStore((state) => state.loading);
  const categories = useCategoriesStore((state) => state.categories);

  const setCategoryActions = useActionsStore((state) => state.set);
  const setCategories = useCategoriesStore((state) => state.set);

  useEffect(() => {
    async function fetchData() {
      setCategories(await getCategories());
    }
    fetchData();
  }, [setCategories])

  useEffect(() => {
  }, [setCategoryActions])

  const category_selector = useField({
    initialValue: "1",
    validate: value => (typeof value == "number" || !isNaN(parseInt(value))),
  });

  useEffect(() => {
    const id = localStorage.getItem("selected-category-id") || undefined;
    if (id) {
      category_selector.setValue(id);
    }
  }, []);

  useEffect(() => {
    setCurrentCategory(parseInt(category_selector.getValue()));
    localStorage.setItem("selected-category-id", category_selector.getValue());
    async function fetchData() {
      setCategoryActions(await getActions(Number(category_selector.getValue())));
    }
    fetchData();
  }, [category_selector.getValue(), setCategoryActions, category_selector, setCurrentCategory]);

  return (
    <>
      <div className="w-1/3 min-w-fit max-w-[600px] rounded-md border-[1.9px] border-neutral-700 pb-4 pl-4 pr-4 pt-4 shadow-xl">
        <Flex className="gap-4 pb-4">
          <section className="text-nowrap flex-grow text-[1.5rem] underline decoration-neutral-600 decoration-1 underline-offset-8">
            Select Category
          </section>
          <Tooltip label="Delete Category">
            <Button variant="outline" onClick={() => delete_handler.open()}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M9.5 16.5L9.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M14.5 16.5L14.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </Button>
          </Tooltip>
          <Tooltip label="Edit Category">
            <Button variant="outline" onClick={() => edit_handler.open()}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                <path d="M15.2141 5.98239L16.6158 4.58063C17.39 3.80646 18.6452 3.80646 19.4194 4.58063C20.1935 5.3548 20.1935 6.60998 19.4194 7.38415L18.0176 8.78591M15.2141 5.98239L6.98023 14.2163C5.93493 15.2616 5.41226 15.7842 5.05637 16.4211C4.70047 17.058 4.3424 18.5619 4 20C5.43809 19.6576 6.94199 19.2995 7.57889 18.9436C8.21579 18.5877 8.73844 18.0651 9.78375 17.0198L18.0176 8.78591M15.2141 5.98239L18.0176 8.78591" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11 20H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </Button>
          </Tooltip>
        </Flex>
        <Flex className="items-center gap-4">
          {category_loading ?
            <Skeleton className="w-full min-w-[100px] shadow-lg" height={36} /> :
            <Select
              size="sm"
              spellCheck={false}
              allowDeselect={false}
              searchable={true}
              data={categories.map((i) => ({
                value: i.id.toString(),
                label: i.name,
              }))}
              className="w-full min-w-[100px] shadow-lg"
              comboboxProps={{ position: "bottom", middlewares: { flip: false, shift: false } }}
              {...category_selector.getInputProps()}
            />
          }
          <Tooltip label="Create Category">
            <Button className="min-w-fit" onClick={() => create_handler.open()}>
              +
            </Button>
          </Tooltip>
        </Flex>
      </div>
      <Modal opened={create_opened} onClose={() => create_handler.close()} title="Create Category">
        <CategoryForm close={create_handler.close} setValue={category_selector.setValue} />
      </Modal>
      <DeleteModal id={parseInt(category_selector.getValue())} type="category" path="/" delete_opened={delete_opened} delete_handler={delete_handler}
        setValue={category_selector.setValue} categories={categories} />
      <Modal opened={edit_opened} onClose={() => edit_handler.close()} title="Edit Category">
        <CategoryForm close={edit_handler.close} id={parseInt(category_selector.getValue())} />
      </Modal>
    </>
  )
}

