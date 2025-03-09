"use client"

import { getShortcuts, updateShortcut } from "@/actions/database"
import KeyboardLayout from "@/components/KeyboardLayout"
import { Divider, Flex, Group, Skeleton, Tooltip } from "@mantine/core"
import { ShortcutManagerShortcuts } from "@prisma/client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import styles from "@/modules/KeyboardLayout.module.css";
import { z } from "zod"
import { location_schema } from "@/util/schemas"
import { useMediaQuery } from "@mantine/hooks"

type params = {
  params: Promise<{
    location_id: string
    shortcut_name: string[]
  }>
}

export default function ShortcutLocation({ params }: params) {
  // data
  const [url_shortcut_name, setUrlShortcutName] = useState("");
  const [shortcut, setShortcut] = useState<ShortcutManagerShortcuts>();
  const [location, setLocation] = useState<z.infer<typeof location_schema>[]>();

  // keys
  const [shifting, setShifting] = useState(false);
  const [ctrling, setCtrling] = useState(false);

  // misc
  const [loading, setLoading] = useState(true);
  const media_query = useMediaQuery("(max-width: 1200px)");
  const router = useRouter();

  // fetch & set initial values
  async function setValues() {
    const shortcuts = await getShortcuts();
    const { location_id, shortcut_name } = await params
    setUrlShortcutName(decodeURI(String(shortcut_name[0])));

    const local_shortcut = shortcuts.data.filter(s => s.id == Number(location_id))[0];
    setShortcut(local_shortcut);

    if (local_shortcut) {
      const local_location = JSON.parse(local_shortcut.location) as z.infer<typeof location_schema>[];
      setLocation(local_location);
    }
  }

  useEffect(() => {
    setValues();
    // adding setValues as a dep creates an infinite loop...
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // disable scroll to prevent seeing under overlay
  useEffect(() => {
    if (media_query) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [media_query])

  // shift & ctrl eventlisteners
  useEffect(() => {
    function keyDown(event: KeyboardEvent) {
      if (event.shiftKey) {
        setShifting(true);
      }
      if (event.ctrlKey) {
        setCtrling(true);
      }
    };
    function keyUp() {
      setShifting(false);
      setCtrling(false);
    };

    document.addEventListener("keyup", keyUp);
    document.addEventListener("keydown", keyDown);
    return () => {
      document.removeEventListener("keyup", keyUp)
      document.removeEventListener("keydown", keyDown);
    };
    // depends on nothing & only need eventlisteners to be set once
  }, [])

  // verifys url shortcut name string is correct
  useEffect(() => {
    async function verifyUrl() {
      if (url_shortcut_name != "" && shortcut != undefined) {
        if (url_shortcut_name != shortcut?.shortcut) {
          router.replace(`/location/${shortcut.id}/${encodeURI(shortcut.shortcut)}`);
        } else {
        };
      }
    }
    verifyUrl();
  }, [router, url_shortcut_name, shortcut]);


  // sets active keys from db
  useEffect(() => {
    async function setActive() {
      if (shortcut && location) {
        if (location) {
          for (const l of location) {
            const li = document.querySelector(`#${l.location}`);
            const active_class = styles[`key-active-${l.order}`];
            if (active_class) {
              li?.classList.add(active_class);
            }
          }
        }
      }
      setTimeout(() => {
        setLoading(false);
      }, 300);
    }
    setActive();
  }, [shortcut, location]);

  // key press logic
  async function handleClick(event: React.MouseEvent) {
    const target = event.target as HTMLElement;
    const key = target.lastChild?.parentElement?.parentElement as HTMLElement;
    if (key.id && shortcut && location) {
      // id removed, not used
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { id, ...shortcut_params } = shortcut;

      let updated_location = location;

      // get specific id for current key from its class.
      const get_class = Array.from(key.classList).find(cls => cls.startsWith("KeyboardLayout_key-active-"));
      const active_class = get_class?.split("__")[0]?.replace("KeyboardLayout_key-active-", "");

      // active state class and timming
      const button_active = styles[`button-active`] || "";
      const button_active_timeout = 200; // ms

      if (active_class) { // remove key
        // set active state only for valid keys
        key.classList.add(button_active);
        setTimeout(() => key.classList.remove(button_active), button_active_timeout);

        key.classList.remove(styles[`key-active-${active_class}`] || "");
        updated_location = [...location.filter((l) => l.location !== key.id)];

      } else { // add key
        // remove shifted values to get unique count for which color is next.
        const unique_location = location.filter((value, index, self) => (
          self.findIndex((t) => t.order == value.order) == index
        ));

        let active_color = unique_location.length + 1;
        if (shifting) {
          active_color = unique_location.length;
        } else {
          // preventing selecting the same color when removing a previous color & not shifting
          const contains_same_color = location.some(l => l.order == active_color)
          if (contains_same_color) {
            return;
          }
        }
        // preventing colors past 5 since only 1-5 exist
        if (active_color > 5) return;

        // set active state only for valid keys
        key.classList.add(button_active);
        setTimeout(() => key.classList.remove(button_active), button_active_timeout);

        const new_active_class = styles[`key-active-${active_color}`];
        if (new_active_class) {
          key.classList.add(new_active_class);
        }

        // remove any wrong ordered keys only 1-5 allowed & add selected key
        updated_location = [...location.filter((l) => l.order <= 5), { location: key.id, order: Number(active_color) }];

        if (shifting && ctrling) {
          // reset location data if ctrl & shift pressed while clicking key
          updated_location = [];
        }
      }
      if (location != updated_location) {
        // save local & db location data
        setLocation(updated_location);
        await updateShortcut({ ...shortcut_params, location: JSON.stringify(updated_location) }, shortcut?.id, "/");
        if (shifting && ctrling) {
          window.location.reload();
        }
      }
    }
  };

  return (
    <>
      {media_query ?
        <Flex className="flex-col items-center absolute w-full h-lvh z-50 bg-background">
          <Flex className="flex-col gap-4 justify-center mt-16 border-4 p-10 ml-4 mr-4 rounded-md border-neutral-500 bg-neutral-900" >
            <p className="font-bold text-2xl text-center underline underline-offset-4 text-neutral-200">
              Devices smaller than
              <span className="text-red-500 text-3xl"> 1200px </span>
              width not recommended!
            </p>
            <p className="font-bold text-xl text-right text-neutral-400">
              Switch to a
              <span className="text-2xl text-orange-400"> bigger </span>
              device or (
              <span className="text-2xl text-purple-400">rotate</span>
              ) your device.
            </p>
          </Flex>
        </Flex>
        : <></>
      }
      <Flex className="flex-col items-center mt-24">
        {loading ?
          <Group className={`min-w-0 w-3/5 z-30 absolute`}>
            <div className={`flex w-full gap-6`}>
              <Skeleton height={35} className="w-1/2" />
              <Skeleton height={35} className="w-1/2" />
            </div>
          </Group> : ""
        }
        <Group className={`mb-4 font-bold justify-between min-w-0 w-3/5`}>
          <div className="flex w-full gap-4 justify-between overflow-hidden text-neutral-100 text-nowrap text-center">
            <Tooltip label="Shortcut Name">
              <p className="border-2 border-neutral-700 p-1 h-[35px] rounded-md w-full min-w-10 max-w-fit">{shortcut?.shortcut}</p>
            </Tooltip>
            <Tooltip label="Shortcut Description">
              <p className="border-2 border-neutral-700 p-1 h-[35px] rounded-md w-full min-w-10 max-w-fit">{shortcut?.description}</p>
            </Tooltip>
          </div>
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
        <Flex onClick={handleClick} className="mt-32 mb-32">
          <KeyboardLayout />
        </Flex>
      </Flex>
    </>
  )
}
