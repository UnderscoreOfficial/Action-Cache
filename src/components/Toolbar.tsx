"use client"

import { Flex } from "@mantine/core";
import { ShortcutManagerCategories } from "@prisma/client";
import CategorySelector from "./CategorySelector";
import ShortcutActions from "./ShortcutActions";

type param = {
  categories: ShortcutManagerCategories[]
  selected_category: number
  setCategoryId(id: number): void,
  shortcut_mode: string
  setShortcutMode(mode: string): void
  setLoading(loading: boolean): void
  loading: boolean
};

export default function Toolbar({categories, setCategoryId, selected_category, setShortcutMode, shortcut_mode, loading, setLoading}: param) {
  return (
    <Flex className="gap-10 items-center flex-col sm:flex-row">
      <CategorySelector categories={categories} setCategoryId={setCategoryId}
        loading={loading} setLoading={setLoading}
      />
      <ShortcutActions 
        categories={categories} selected_category={selected_category} 
        setShortcutMode={setShortcutMode} shortcut_mode={shortcut_mode}
      />
    </Flex>
  )
}


