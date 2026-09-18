"use client";

import styles from "./CardCarousel.module.css";
import ThemeCard from "../ui/ThemeCard/ThemeCard";
import { THEMES, IMAGES, THEME_NAME } from "@/constants/theme.constants";
import ThemesCatalogBtn from "../ui/ThemesCatalogBtn/ThemesCatalogBtn";
import { useRouter } from "next/navigation";

export default function ThemeCarousel() {
  const router = useRouter();

  return (
    <div className={styles["main"]}>
      <ThemesCatalogBtn onClick={() => router.push("/auth/catalog")} />
      <div className={styles["carousel-container"]}>
        {THEMES.map((theme) => (
          <ThemeCard
            key={theme}
            themeId={theme}
            imageSrc={IMAGES[theme]}
            themeName={THEME_NAME[theme]}
          />
        ))}
      </div>
    </div>
  );
}
