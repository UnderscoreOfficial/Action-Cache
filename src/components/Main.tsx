"use client"

import { Divider, Flex } from "@mantine/core";
import Toolbar from "./Toolbar";
import ShortcutList from "./ShortcutList";
import { ShortcutManagerCategories, ShortcutManagerShortcuts } from "@prisma/client";
import { useEffect, useState } from "react";

type props = {
  categories: ShortcutManagerCategories[]
  shortcuts: ShortcutManagerShortcuts[]
};

export default function Main({categories, shortcuts}: props) {
  const [selected_category, setCategoryId] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  },[shortcuts]);

  const [shortcut_mode, setShortcutMode] = useState("");
  
  return(
    <Flex className="flex-col gap-6">
      <Toolbar
        categories={categories} selected_category={selected_category} setCategoryId={setCategoryId} 
        setShortcutMode={setShortcutMode} shortcut_mode={shortcut_mode}
        loading={loading} setLoading={setLoading}
      />
      <Divider />
      <ShortcutList 
        shortcut_mode={shortcut_mode} setShortcutMode={setShortcutMode}
        shortcuts={shortcuts.filter(shortcut => shortcut.category_id == selected_category).reverse()}
        categories={categories} selected_category={selected_category}
        loading={loading} setLoading={setLoading}
      />
    </Flex>
  )
}
