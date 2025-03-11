"use client"

import { getAction, updateAction } from "@/actions/database"
import KeyboardLayout from "@/components/KeyboardLayout"
import { Divider, Flex } from "@mantine/core"
import { Actions } from "@prisma/client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import styles from "@/modules/KeyboardLayout.module.css";
import { z } from "zod"
import { location_schema } from "@/util/schemas"
import DeviceSizeWarning from "@/components/DeviceSizeWarning"
import ActionInfoBar from "@/components/ActionInfoBar"
import KeyboardKeyGuide from "@/components/KeyboardKeyGuide"

type params = {
  params: Promise<{
    location_id: string
    action_name: string[]
  }>
}

export default function ActionLocation({ params }: params) {
  // data
  const [url_action_name, setUrlActionName] = useState("");
  const [action, setAction] = useState<Actions>();
  const [location, setLocation] = useState<z.infer<typeof location_schema>[]>();

  // keys
  const [shifting, setShifting] = useState(false);
  const [ctrling, setCtrling] = useState(false);

  // misc
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // fetch & set initial values
  async function setValues() {
    const { location_id, action_name } = await params
    const local_action = await getAction(Number(location_id));
    setUrlActionName(decodeURI(String(action_name[0])));

    if (local_action.status.success && local_action.data) {
      setAction(local_action.data);
      const local_location = JSON.parse(local_action.data.location) as z.infer<typeof location_schema>[];
      setLocation(local_location);
    } else {
      console.error(local_action.status.message);
    }
  }

  useEffect(() => {
    setValues();
    // adding setValues as a dep creates an infinite loop...
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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

  // verifys url action name string is correct
  useEffect(() => {
    async function verifyUrl() {
      if (url_action_name != "" && action != undefined) {
        if (url_action_name != action?.name) {
          router.replace(`/location/${action.id}/${encodeURI(action.name)}`);
        } else {
        };
      }
    }
    verifyUrl();
  }, [router, url_action_name, action]);


  // sets active keys from db
  useEffect(() => {
    async function setActive() {
      if (action && location) {
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
  }, [action, location]);

  // key press logic
  async function handleClick(event: React.MouseEvent) {
    const target = event.target as HTMLElement;
    const key = target.lastChild?.parentElement?.parentElement as HTMLElement;
    if (key.id && action && location) {
      // id removed, not used
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { id, ...action_params } = action;

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
        await updateAction({ ...action_params, location: JSON.stringify(updated_location), type: "shortcut" }, action?.id);
        if (shifting && ctrling) {
          window.location.reload();
        }
      }
    }
  };

  return (
    <>
      <DeviceSizeWarning type="width" size="1200px" scroll={false} />
      <Flex className="flex-col items-center mt-24">
        <ActionInfoBar loading={loading} action={action} />
        <Divider className="w-3/5 mb-4" />
        <KeyboardKeyGuide />
        <Flex onClick={handleClick} className="mt-32 mb-32">
          <KeyboardLayout />
        </Flex>
      </Flex>
    </>
  )
}
