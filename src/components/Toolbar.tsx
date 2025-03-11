"use client"

import { Flex } from "@mantine/core";
import CategorySelector from "./CategorySelector";
import ActionModes from "./ActionModes";

export default function Toolbar({ }) {
  return (
    <Flex className="gap-10 items-center flex-col sm:flex-row">
      <CategorySelector />
      <ActionModes />
    </Flex>
  )
}


