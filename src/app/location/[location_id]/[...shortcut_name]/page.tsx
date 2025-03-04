"use client"

import { getShortcuts, updateShortcut } from "@/actions/database"
import KeyboardLayout from "@/components/KeyboardLayout"
import { Divider, Flex, Group, Skeleton, Tooltip } from "@mantine/core"
import { ShortcutManagerShortcuts } from "@prisma/client"
import { redirect } from "next/navigation"
import { useEffect, useState } from "react"
import styles from "@/modules/KeyboardLayout.module.css";
import { z } from "zod"
import { location_schema } from "@/util/schemas"

type params = {
  params: Promise<{
    location_id: string
    shortcut_name: string[]
  }>
}

export default function ShortcutLocation({ params }: params) {
  const [url_shortcut_name, setUrlShortcutName] = useState("");
  const [shortcuts, setShortcuts] = useState<ShortcutManagerShortcuts[]>();
  const [shortcut, setShortcut] = useState<ShortcutManagerShortcuts>();
  const [shifting, setShifting] = useState(false);
  const [loading, setLoading] = useState(true);

  async function setValues() {
    const shortcuts = await getShortcuts();
    const { location_id, shortcut_name } = await params
    setUrlShortcutName(decodeURI(String(shortcut_name[0])));
    setShortcuts(shortcuts.data);
    setShortcut(shortcuts.data.filter(s => s.id == Number(location_id))[0]);
  }
  useEffect(() => {
    setValues()
    function keyDown(event: KeyboardEvent) {
      if (event.shiftKey) {
        setShifting(true);
      }
    };
    function keyUp() {
      setShifting(false);
    };

    document.addEventListener("keyup", keyUp);
    document.addEventListener("keydown", keyDown);
    return () => {
      document.removeEventListener("keyup", keyUp)
      document.removeEventListener("keydown", keyDown);
    };
  }, [])

  useEffect(() => {
    async function verifyUrl() {
      if (url_shortcut_name != "" && shortcut != undefined) {
        if (url_shortcut_name != shortcut?.shortcut) {
          redirect(`/location/${shortcut.id}/${encodeURI(shortcut.shortcut)}`);
        } else {
        };
      }
    }
    verifyUrl();
  }, [shortcuts]);


  useEffect(() => {
    async function setActive() {
      if (shortcut) {
        const location = await JSON.parse(shortcut.location) as z.infer<typeof location_schema>[];
        if (location) {
          for (const l of location) {
            const li = document.querySelector(`#${l.location}`);
            li?.classList.add(styles[`key-active-${l.order}`] || "");
          }
        }
      }
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
    setActive();
  }, [shortcut]);

  async function handleClick(event: React.MouseEvent) {
    const target = event.target as HTMLElement;
    const key = target.lastChild?.parentElement?.parentElement as HTMLElement;
    if (key.id && shortcut && location) {
      const location = await JSON.parse(shortcut.location) as z.infer<typeof location_schema>[];

      //if (active_classes.some(active => key.classList.contains(String(active)))) { // idk cool method .some()
      const get_class = Array.from(key.classList).find(cls => cls.startsWith("KeyboardLayout_key-active-"));
      const active_class = get_class?.split("__")[0]?.replace("KeyboardLayout_key-active-", "");
      if (active_class) {
        key.classList.remove(styles[`key-active-${active_class}`] || "")
        const updated_location = [...location.filter((l) => l.location !== key.id)];
        const { id, ...shortcut_params } = shortcut;
        await updateShortcut({ ...shortcut_params, location: JSON.stringify(updated_location) }, shortcut?.id, "/");
      } else {
        const set_key_count = location.filter((value, index, self) => (
          self.findIndex((t) => t.order == value.order) == index
        ));
        let active_id = set_key_count.length + 1;
        if (shifting) {
          active_id = set_key_count.length;
        }
        try {
          key.classList.add(styles[`key-active-${active_id}`] || "");
          const updated_location = [...location, { location: key.id, order: Number(active_id) }];
          const { id, ...shortcut_params } = shortcut;
          await updateShortcut({ ...shortcut_params, location: JSON.stringify(updated_location) }, shortcut?.id, "/");
        } catch (e) {
        };
      }
      setValues();
    }
  };

  return (
    <Flex className="flex-col items-center mt-24">
      {loading ?
        <Group className={`mb-4 font-bold justify-between min-w-0 w-3/5 z-30 absolute`}>
          <Skeleton height={35} width={100} />
          <Skeleton height={35} width={400} />
        </Group> : ""
      }
      <Group className={`mb-4 font-bold justify-between min-w-0 w-3/5`}>
        <Tooltip label="Shortcut Name">
          <p className="transition-none border-2 border-neutral-700 h-[35px] p-1 rounded-md text-neutral-100">{shortcut?.shortcut}</p>
        </Tooltip>
        <Tooltip label="Shortcut Description">
          <p className="border-2 border-neutral-700 p-1 h-[35px] rounded-md text-neutral-100">{shortcut?.description}</p>
        </Tooltip>
      </Group>
      <Divider className="w-3/5 mb-4" />
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
      <Flex onClick={handleClick} className="mt-32">
        <KeyboardLayout />
      </Flex>
    </Flex>
  )
}
