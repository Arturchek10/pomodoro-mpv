"use client";

import styles from "./Card.module.css";
import useThemeStore from "@/stores/useThemesStore.store";
import { ThemeId } from "@/constants/theme.constants";

type Props = {
  imageSrc: string;
  themeName: string;
  themeId: ThemeId;
};

export default function ThemeCard({ imageSrc, themeName, themeId }: Props) {
  const activeTheme = useThemeStore((state) => state.activeTheme);
  const setActiveTheme = useThemeStore((state) => state.setActiveTheme);

  const isActive = activeTheme === themeId;

  return (
    <div className={styles["card-container"]}>
      <img
        className={styles["theme-img"]}
        src={imageSrc}
        alt="card-theme"
        onClick={() => {
          setActiveTheme(themeId);
          console.log("themeId: ", themeId);
          console.log("activeTheme: ", activeTheme);
        }}
      />
      <div className={styles["text-container"]}>
        <p
          className={
            isActive
              ? `${styles["click-for-select"]} ${styles["hide"]}`
              : styles["click-for-select"]
          }
        >
          click for select
        </p>
        <p
          className={
            isActive
              ? `${styles["select"]} ${styles["active"]}`
              : styles["select"]
          }
        >
          select
        </p>
        <p className={styles["theme-name"]}>{themeName}</p>
      </div>
    </div>
  );
}
