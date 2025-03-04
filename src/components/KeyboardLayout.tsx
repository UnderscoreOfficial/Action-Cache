import { Group, Stack } from "@mantine/core";
import styles from "@/modules/KeyboardLayout.module.css"

export default function KeyboardLayout() {
  return (
  <ul className={`flex gap-10 ${styles["unordered-list"]}`}>
    <Stack className="gap-3">
      <Group /*L1*/ className="gap-3">
        <li id="ESC" key="ESC" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            ESC
          </button>
        </li>
        <li id="ONE" key="ONE" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            1
          </button>
        </li>
        <li id="TWO" key="TWO" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            2
          </button>
        </li>
        <li id="THREE" key="THREE" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            3
          </button>
        </li>
        <li id="FOUR" key="FOUR" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            4
          </button>
        </li>
        <li id="FIVE" key="FIVE" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            5
          </button>
        </li>
        <li id="DASH" key="DASH" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            -
          </button>
        </li>
      </Group>
      <Group /*L2*/ className="gap-3">
        <li id="TAB" key="TAB" className={`border-2 w-28 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[6.5rem] h-[3.4rem] flex justify-center items-center`}>
            TAB
          </button>
        </li>
        <li id="Q" key="Q" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            Q
          </button>
        </li>
        <li id="W" key="W" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            W
          </button>
        </li>
        <li id="E" key="E" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            E
          </button>
        </li>
        <li id="P" key="P" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            P
          </button>
        </li>
        <li id="T" key="T" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            T
          </button>
        </li>
      </Group>
      <Group /*L3*/ className="gap-3">
        <li id="CAPS" key="CAPS" className={`border-2 w-32 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[7.5rem] h-[3.4rem] flex justify-center items-center`}>
            CAPS
          </button>
        </li>
        <li id="A" key="A" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            A
          </button>
        </li>
        <li id="D" key="D" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            D
          </button>
        </li>
        <li id="S" key="S" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            S
          </button>
        </li>
        <li id="F" key="F" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            F
          </button>
        </li>
        <li id="G" key="G" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            G
          </button>
        </li>
      </Group>
      <Group /*L4*/ className="gap-3">
          <li id="L-SHIFT" key="L-SHIFT" className={`border-2 w-36 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[8.5rem] h-[3.4rem] flex justify-center items-center`}>
            SHIFT
          </button>
        </li>
        <li id="X" key="X" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            X
          </button>
        </li>
        <li id="C" key="C" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            C
          </button>
        </li>
        <li id="B" key="B" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            B
          </button>
        </li>
        <li id="V" key="V" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            V
          </button>
        </li>
        <li id="Z" key="Z" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            Z
          </button>
        </li>
      </Group>
      <Group /*L5*/ className="gap-3">
        <li id="L-CTRL" key="L-CTRL" className={`border-2 w-20 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[4.5rem] h-[3.4rem] flex justify-center items-center`}>
            CTRL
          </button>
        </li>
        <li id="L-SUPER" key="L-SUPER" className={`border-2 w-20 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[4.5rem] h-[3.4rem] flex justify-center items-center`}>
            SUPER
          </button>
        </li>
        <li id="L-ALT" key="L-ALT" className={`border-2 w-20 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[4.5rem] h-[3.4rem] flex justify-center items-center`}>
            ALT
          </button>
        </li>
        <li id="L-DOT-DOT-DOT" key="L-DOT-DOT-DOT" className={`border-2 w-28 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[6.5rem] h-[3.4rem] flex justify-center items-center`}>
            ...
          </button>
        </li>
        <li id="L-DASH-DASH-DASH" key="L-DASH-DASH-DASH" className={`border-2 w-24 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[5.5rem] h-[3.4rem] flex justify-center items-center`}>
            ---
          </button>
        </li>
      </Group>
      <Group /*L6*/ className="gap-3 justify-end mr-6">
        <li id="L-DOT-DOT" key="L-DOT-DOT" className={`border-2 w-28 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[6.5rem] h-[3.4rem] flex justify-center items-center`}>
            ..
          </button>
        </li>
        <li id="L-DOT" key="L-DOT" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            .
          </button>
        </li>
      </Group>
    </Stack>
    <Stack className="gap-3">
      <Group /*R1*/ className="gap-3 justify-end">
        <li id="PLUS" key="PLUS" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            +
          </button>
        </li>
        <li id="SIX" key="SIX" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            6
          </button>
        </li>
        <li id="SEVEN" key="SEVEN" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            7
          </button>
        </li>
        <li id="EIGHT" key="EIGHT" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            8
          </button>
        </li>
        <li id="NINE" key="NINE" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            9
          </button>
        </li>
        <li id="ZERO" key="ZERO" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            0
          </button>
        </li>
        <li id="BACKSPACE" key="BACKSPACE" className={`border-2 w-36 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[8.5rem] h-[3.4rem] flex justify-center items-center`}>
            BACKSPACE
          </button>
        </li>
      </Group>
      <Group /*R2*/ className="gap-3 justify-end">
        <li id="R" key="R" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            R
          </button>
        </li>
        <li id="I" key="I" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            I
          </button>
        </li>
        <li id="U" key="U" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            U
          </button>
        </li>
        <li id="Y" key="Y" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            Y
          </button>
        </li>
        <li id="O" key="O" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            O
          </button>
        </li>
        <li id="L-BRACKET" key="L-BRACKET" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            [
          </button>
        </li>
        <li id="R-BRACKET" key="R-BRACKET" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            ]
          </button>
        </li>
        <li id="PIPE" key="PIPE" className={`border-2 w-24 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[5.5rem] h-[3.4rem] flex justify-center items-center`}>
            |
          </button>
        </li>
      </Group>
      <Group /*R3*/ className="gap-3 justify-end">
        <li id="H" key="H" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            H
          </button>
        </li>
        <li id="J" key="J" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            J
          </button>
        </li>
        <li id="K" key="K" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            K
          </button>
        </li>
        <li id="L" key="L" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            L
          </button>
        </li>
        <li id="SEMICOLON" key="SEMICOLON" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            ;
          </button>
        </li>
        <li id="QUOTE" key="QUOTE" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            "
          </button>
        </li>
        <li id="ENTER" key="ENTER" className={`border-2 w-40 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[9.5rem] h-[3.4rem] flex justify-center items-center`}>
            ENTER
          </button>
        </li>
      </Group>
      <Group /*R4*/ className="gap-3 justify-end">
        <li id="N" key="N" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            N
          </button>
        </li>
        <li id="M" key="M" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            M
          </button>
        </li>
        <li id="LESS-THAN" key="LESS-THAN" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            {"<"}
          </button>
        </li>
        <li id="GREATER-THAN" key="GREATER-THAN" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            {">"}
          </button>
        </li>
        <li id="FORWARD-SLASH" key="FORWARD-SLASH" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            /
          </button>
        </li>
        <li id="R-SHIFT" key="R-SHIFT" className={`border-2 w-48 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[11.5rem] h-[3.4rem] flex justify-center items-center`}>
            SHIFT
          </button>
        </li>
      </Group>
      <Group /*R5*/ className="gap-3 justify-end">
        <li id="R-DASH-DASH-DASH" key="R-DASH-DASH-DASH" className={`border-2 w-20 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[4.5rem] h-[3.4rem] flex justify-center items-center`}>
            ---
          </button>
        </li>
        <li id="R-DOT-DOT-DOT" key="R-DOT-DOT-DOT" className={`border-2 w-28 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[6.5rem] h-[3.4rem] flex justify-center items-center`}>
            ...
          </button>
        </li>
        <li id="R-ALT" key="R-ALT" className={`border-2 w-20 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[4.5rem] h-[3.4rem] flex justify-center items-center`}>
            ALT
          </button>
        </li>
        <li id="FN" key="FN" className={`border-2 w-20 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[4.5rem] h-[3.4rem] flex justify-center items-center`}>
            FN
          </button>
        </li>
        <li id="R-SUPER" key="R-SUPER" className={`border-2 w-20 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[4.5rem] h-[3.4rem] flex justify-center items-center`}>
            SUPER
          </button>
        </li>
        <li id="R-CTRL" key="R-CTRL" className={`border-2 w-20 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[4.5rem] h-[3.4rem] flex justify-center items-center`}>
            CTRL
          </button>
        </li>
      </Group>
      <Group /*R6*/ className="gap-3 justify-start ml-14">
        <li id="R-DOT" key="R-DOT" className={`border-2 w-16 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[3.5rem] h-[3.4rem] flex justify-center items-center`}>
            .
          </button>
        </li>
        <li id="R-DOT-DOT" key="R-DOT-DOT" className={`border-2 w-28 h-16 rounded-md ${styles["key-li"]} flex justify-center transition-all duration-75`}>
          <button className={`bg-background rounded-md w-[6.5rem] h-[3.4rem] flex justify-center items-center`}>
            ..
          </button>
        </li>
      </Group>
    </Stack>
  </ul>
  );
}
