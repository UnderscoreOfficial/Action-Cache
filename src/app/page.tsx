import ActionList from "@/components/ActionList";
import Toolbar from "@/components/Toolbar";
import { Divider, Flex } from "@mantine/core";

export default async function Home() {

  return (
    <Flex className="mb-6 ml-10 mr-10 mt-6">
      <main className="w-full">
        <Flex className="flex-col gap-6 w-full">
          <Toolbar />
          <Divider />
          <ActionList />
        </Flex>
      </main>
    </Flex>
  );
}
