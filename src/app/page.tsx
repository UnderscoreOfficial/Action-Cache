import { getCategories, getShortcuts } from "@/actions/database";
import Main from "@/components/Main";
import { Flex } from "@mantine/core";
import { Suspense } from "react";

export default async function Home() {
  const categories = await getCategories();
  const shortcuts = await getShortcuts();

  return (
    <Flex className="mr-10 ml-10 mt-6 mb-6">
      <main className="w-full">
        <Main categories={categories.data} shortcuts={shortcuts.data}/>
      </main>
    </Flex>
  );
}
