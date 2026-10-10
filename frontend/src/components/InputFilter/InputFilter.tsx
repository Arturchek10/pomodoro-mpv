"use client";

import * as Select from "@radix-ui/react-select";
import styles from "./InputFilter.module.css";

type InputFilterProps = {
  label: string;
  name: string;
  options: string[];
};

export default function InputFilter({
  label,
  name,
  options,
}: InputFilterProps) {
  return (
    <div className={styles["filter-container"]}>
      <label>{label}</label>

      <Select.Root name={name} defaultValue={options[0]}>
        <Select.Trigger className={styles.trigger} aria-label={label}>
          <Select.Value />
          <Select.Icon>
            <img src="/svg/arrow-bottom-white.svg" className={styles["arr-btm-svg"]}/>
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            className={styles.content}
            position="popper"
            sideOffset={5}
          >
            <Select.Viewport>
              {options.map((option) => (
                <Select.Item
                  key={option}
                  value={option}
                  className={styles.item}
                >
                  <Select.ItemText>{option}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
}
