import { Group, Skeleton, Stack } from "@mantine/core";
import styles from "@/modules/KeyboardLayout.module.css"

export default function KeyboardLayoutSkeleton() {
  return (
  <ul className={`flex gap-10 ${styles["unordered-list"]}`}>
    <Stack className="gap-3">
      <Group /*L1*/ className="gap-3">
        <Skeleton id="ESC" key="ESC" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="ONE" key="ONE" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="TWO" key="TWO" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="THREE" key="THREE" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="FOUR" key="FOUR" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="FIVE" key="FIVE" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="DASH" key="DASH" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
      </Group>
      <Group /*L2*/ className="gap-3">
        <Skeleton id="TAB" key="TAB" className={`border-2 w-28 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="Q" key="Q" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="W" key="W" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="E" key="E" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="P" key="P" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="T" key="T" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
      </Group>
      <Group /*L3*/ className="gap-3">
        <Skeleton id="CAPS" key="CAPS" className={`border-2 w-32 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="A" key="A" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="D" key="D" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="S" key="S" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="F" key="F" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="G" key="G" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
      </Group>
      <Group /*L4*/ className="gap-3">
        <Skeleton id="L-SHIFT" key="L-SHIFT" className={`border-2 w-36 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="X" key="X" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="C" key="C" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="B" key="B" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="V" key="V" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="Z" key="Z" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
      </Group>
      <Group /*L5*/ className="gap-3">
        <Skeleton id="L-CTRL" key="L-CTRL" className={`border-2 w-20 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="L-SUPER" key="L-SUPER" className={`border-2 w-20 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="L-ALT" key="L-ALT" className={`border-2 w-20 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="L-DOT-DOT-DOT" key="L-DOT-DOT-DOT" className={`border-2 w-28 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="L-DASH-DASH-DASH" key="L-DASH-DASH-DASH" className={`border-2 w-24 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
      </Group>
      <Group /*L6*/ className="gap-3 justify-end mr-6">
        <Skeleton id="L-DOT-DOT" key="L-DOT-DOT" className={`border-2 w-28 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="L-DOT" key="L-DOT" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
      </Group>
    </Stack>
    <Stack className="gap-3">
      <Group /*R1*/ className="gap-3 justify-end">
        <Skeleton id="PLUS" key="PLUS" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="SIX" key="SIX" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="SEVEN" key="SEVEN" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="EIGHT" key="EIGHT" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="NINE" key="NINE" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="ZERO" key="ZERO" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="BACKSPACE" key="BACKSPACE" className={`border-2 w-36 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
      </Group>
      <Group /*R2*/ className="gap-3 justify-end">
        <Skeleton id="R" key="R" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="I" key="I" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="U" key="U" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="Y" key="Y" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="O" key="O" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="L-BRACKET" key="L-BRACKET" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="R-BRACKET" key="R-BRACKET" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="PIPE" key="PIPE" className={`border-2 w-24 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
      </Group>
      <Group /*R3*/ className="gap-3 justify-end">
        <Skeleton id="H" key="H" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="J" key="J" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="K" key="K" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="L" key="L" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="SEMICOLON" key="SEMICOLON" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="QUOTE" key="QUOTE" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="ENTER" key="ENTER" className={`border-2 w-40 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
      </Group>
      <Group /*R4*/ className="gap-3 justify-end">
        <Skeleton id="N" key="N" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="M" key="M" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="LESS-THAN" key="LESS-THAN" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="GREATER-THAN" key="GREATER-THAN" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="FORWARD-SLASH" key="FORWARD-SLASH" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="R-SHIFT" key="R-SHIFT" className={`border-2 w-48 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
      </Group>
      <Group /*R5*/ className="gap-3 justify-end">
        <Skeleton id="R-DASH-DASH-DASH" key="R-DASH-DASH-DASH" className={`border-2 w-20 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="R-DOT-DOT-DOT" key="R-DOT-DOT-DOT" className={`border-2 w-28 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="R-ALT" key="R-ALT" className={`border-2 w-20 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="FN" key="FN" className={`border-2 w-20 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="R-SUPER" key="R-SUPER" className={`border-2 w-20 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="R-CTRL" key="R-CTRL" className={`border-2 w-20 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
      </Group>
      <Group /*R6*/ className="gap-3 justify-start ml-14">
        <Skeleton id="R-DOT" key="R-DOT" className={`border-2 w-16 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
        <Skeleton id="R-DOT-DOT" key="R-DOT-DOT" className={`border-2 w-28 h-16 rounded-md  flex justify-center transition-all duration-75`}>
        </Skeleton>
      </Group>
    </Stack>
  </ul>
  )
}
