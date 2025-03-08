import { Group, Stack } from "@mantine/core";
import styles from "@/modules/KeyboardLayout.module.css"

export default function KeyboardLayout() {
  return (
    <ul className={`flex gap-10 ${styles["unordered-list"]}`}>
      <Stack className="gap-3">
        <Group /*L1*/ className="gap-3">
          <li id="ESC" key="ESC" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              ESC
            </button>
          </li>
          <li id="ONE" key="ONE" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              1
            </button>
          </li>
          <li id="TWO" key="TWO" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              2
            </button>
          </li>
          <li id="THREE" key="THREE" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              3
            </button>
          </li>
          <li id="FOUR" key="FOUR" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              4
            </button>
          </li>
          <li id="FIVE" key="FIVE" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              5
            </button>
          </li>
          <li id="DASH" key="DASH" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              -
            </button>
          </li>
        </Group>
        <Group /*L2*/ className="gap-3">
          <li id="TAB" key="TAB" className={`h-16 w-28 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[6.5rem]`}>
              TAB
            </button>
          </li>
          <li id="Q" key="Q" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              Q
            </button>
          </li>
          <li id="W" key="W" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              W
            </button>
          </li>
          <li id="E" key="E" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              E
            </button>
          </li>
          <li id="P" key="P" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              P
            </button>
          </li>
          <li id="T" key="T" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              T
            </button>
          </li>
        </Group>
        <Group /*L3*/ className="gap-3">
          <li id="CAPS" key="CAPS" className={`h-16 w-32 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[7.5rem]`}>
              CAPS
            </button>
          </li>
          <li id="A" key="A" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              A
            </button>
          </li>
          <li id="D" key="D" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              D
            </button>
          </li>
          <li id="S" key="S" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              S
            </button>
          </li>
          <li id="F" key="F" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              F
            </button>
          </li>
          <li id="G" key="G" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              G
            </button>
          </li>
        </Group>
        <Group /*L4*/ className="gap-3">
          <li id="L-SHIFT" key="L-SHIFT" className={`h-16 w-36 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[8.5rem]`}>
              SHIFT
            </button>
          </li>
          <li id="X" key="X" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              X
            </button>
          </li>
          <li id="C" key="C" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              C
            </button>
          </li>
          <li id="B" key="B" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              B
            </button>
          </li>
          <li id="V" key="V" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              V
            </button>
          </li>
          <li id="Z" key="Z" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              Z
            </button>
          </li>
        </Group>
        <Group /*L5*/ className="gap-3">
          <li id="L-CTRL" key="L-CTRL" className={`h-16 w-20 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[4.5rem]`}>
              CTRL
            </button>
          </li>
          <li id="L-SUPER" key="L-SUPER" className={`h-16 w-20 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[4.5rem]`}>
              SUPER
            </button>
          </li>
          <li id="L-ALT" key="L-ALT" className={`h-16 w-20 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[4.5rem]`}>
              ALT
            </button>
          </li>
          <li id="L-DOT-DOT-DOT" key="L-DOT-DOT-DOT" className={`h-16 w-28 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[6.5rem]`}>
              ...
            </button>
          </li>
          <li id="L-DASH-DASH-DASH" key="L-DASH-DASH-DASH" className={`h-16 w-24 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[5.5rem]`}>
              ---
            </button>
          </li>
        </Group>
        <Group /*L6*/ className="mr-6 justify-end gap-3">
          <li id="L-DOT-DOT" key="L-DOT-DOT" className={`h-16 w-28 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[6.5rem]`}>
              ..
            </button>
          </li>
          <li id="L-DOT" key="L-DOT" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              .
            </button>
          </li>
        </Group>
      </Stack>
      <Stack className="gap-3">
        <Group /*R1*/ className="justify-end gap-3">
          <li id="PLUS" key="PLUS" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              +
            </button>
          </li>
          <li id="SIX" key="SIX" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              6
            </button>
          </li>
          <li id="SEVEN" key="SEVEN" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              7
            </button>
          </li>
          <li id="EIGHT" key="EIGHT" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              8
            </button>
          </li>
          <li id="NINE" key="NINE" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              9
            </button>
          </li>
          <li id="ZERO" key="ZERO" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              0
            </button>
          </li>
          <li id="BACKSPACE" key="BACKSPACE" className={`h-16 w-36 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[8.5rem]`}>
              BACKSPACE
            </button>
          </li>
        </Group>
        <Group /*R2*/ className="justify-end gap-3">
          <li id="R" key="R" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              R
            </button>
          </li>
          <li id="I" key="I" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              I
            </button>
          </li>
          <li id="U" key="U" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              U
            </button>
          </li>
          <li id="Y" key="Y" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              Y
            </button>
          </li>
          <li id="O" key="O" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              O
            </button>
          </li>
          <li id="L-BRACKET" key="L-BRACKET" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              [
            </button>
          </li>
          <li id="R-BRACKET" key="R-BRACKET" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              ]
            </button>
          </li>
          <li id="PIPE" key="PIPE" className={`h-16 w-24 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[5.5rem]`}>
              |
            </button>
          </li>
        </Group>
        <Group /*R3*/ className="justify-end gap-3">
          <li id="H" key="H" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              H
            </button>
          </li>
          <li id="J" key="J" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              J
            </button>
          </li>
          <li id="K" key="K" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              K
            </button>
          </li>
          <li id="L" key="L" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              L
            </button>
          </li>
          <li id="SEMICOLON" key="SEMICOLON" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              ;
            </button>
          </li>
          <li id="QUOTE" key="QUOTE" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              &#34;
            </button>
          </li>
          <li id="ENTER" key="ENTER" className={`h-16 w-40 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[9.5rem]`}>
              ENTER
            </button>
          </li>
        </Group>
        <Group /*R4*/ className="justify-end gap-3">
          <li id="N" key="N" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              N
            </button>
          </li>
          <li id="M" key="M" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              M
            </button>
          </li>
          <li id="LESS-THAN" key="LESS-THAN" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              {"<"}
            </button>
          </li>
          <li id="GREATER-THAN" key="GREATER-THAN" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              {">"}
            </button>
          </li>
          <li id="FORWARD-SLASH" key="FORWARD-SLASH" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              /
            </button>
          </li>
          <li id="R-SHIFT" key="R-SHIFT" className={`h-16 w-48 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[11.5rem]`}>
              SHIFT
            </button>
          </li>
        </Group>
        <Group /*R5*/ className="justify-end gap-3">
          <li id="R-DASH-DASH-DASH" key="R-DASH-DASH-DASH" className={`h-16 w-20 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[4.5rem]`}>
              ---
            </button>
          </li>
          <li id="R-DOT-DOT-DOT" key="R-DOT-DOT-DOT" className={`h-16 w-28 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[6.5rem]`}>
              ...
            </button>
          </li>
          <li id="R-ALT" key="R-ALT" className={`h-16 w-20 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[4.5rem]`}>
              ALT
            </button>
          </li>
          <li id="FN" key="FN" className={`h-16 w-20 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[4.5rem]`}>
              FN
            </button>
          </li>
          <li id="R-SUPER" key="R-SUPER" className={`h-16 w-20 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[4.5rem]`}>
              SUPER
            </button>
          </li>
          <li id="R-CTRL" key="R-CTRL" className={`h-16 w-20 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[4.5rem]`}>
              CTRL
            </button>
          </li>
        </Group>
        <Group /*R6*/ className="ml-14 justify-start gap-3">
          <li id="R-DOT" key="R-DOT" className={`h-16 w-16 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[3.5rem]`}>
              .
            </button>
          </li>
          <li id="R-DOT-DOT" key="R-DOT-DOT" className={`h-16 w-28 ${styles["key-li"]}`}>
            <button className={`h-[3.4rem] w-[6.5rem]`}>
              ..
            </button>
          </li>
        </Group>
      </Stack>
    </ul>
  );
}
