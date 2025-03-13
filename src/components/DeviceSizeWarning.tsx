import { Flex } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useEffect } from "react";

type props = {
  type: "width" | "height";
  size: string;
  scroll?: boolean;
}

export default function DeviceSizeWarning({ type, size, scroll }: props) {
  const media_query = useMediaQuery(`(max-${type}: ${size})`);

  useEffect(() => {
    document.body.style.overflow = "auto";
    if (!scroll && media_query) {
      // disabling scroll can prevent issues with small devices scrolling past hidden content
      document.body.style.overflow = "hidden";
    }
  }, [scroll, media_query]);

  return (
    <>
      {media_query ?
        <Flex className="flex-col items-center absolute w-full h-lvh z-50 bg-background">
          <Flex className="flex-col gap-4 justify-center mt-16 border-4 p-10 ml-4 mr-4 rounded-md border-neutral-500 bg-neutral-900" >
            <p className="font-bold text-2xl text-center underline underline-offset-4 text-neutral-200">
              Devices smaller than
              <span className="text-red-500 text-3xl">{` ${size} `}</span>
              {type} not recommended!
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
        : <></>}
    </>
  )
}
