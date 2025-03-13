import { Group, Tooltip } from "@mantine/core";

export default function KeyboardKeyGuide() {
  return (
    <Group className="w-3/5 min-w-0 justify-between">
      <Tooltip label="Hold shift while clicking key for optional keys.">
        <p className="border-2 border-neutral-700 p-1 rounded-md text-neutral-300">
          Same
          <span className="text-purple-500 font-bold"> C</span>
          <span className="text-green-400 font-bold">o</span>
          <span className="text-blue-500 font-bold">l</span>
          <span className="text-yellow-500 font-bold">o</span>
          <span className="text-pink-500 font-bold">r </span>
          = Either
        </p>
      </Tooltip>
      <p className="border-2 border-neutral-700 p-1 rounded-md text-neutral-300">
        <span className="text-white">White</span> = Unassigned
      </p>
      <p className="border-2 border-neutral-700 p-1 rounded-md text-neutral-300">
        <span className="text-purple-500">Purple</span> = 1st Key
      </p>
      <p className="border-2 border-neutral-700 p-1 rounded-md text-neutral-300">
        <span className="text-green-400">Green</span> = 2nd Key
      </p>
      <p className="border-2 border-neutral-700 p-1 rounded-md text-neutral-300">
        <span className="text-blue-500">Blue</span> = 3rd Key
      </p>
      <p className="border-2 border-neutral-700 p-1 rounded-md text-neutral-300">
        <span className="text-yellow-500">Yellow</span> = 4th Key
      </p>
      <p className="border-2 border-neutral-700 p-1 rounded-md text-neutral-300">
        <span className="text-pink-500">Pink</span> = 5th Key
      </p>
    </Group>
  )
}
