import styles from "./CardCarousel.module.css";
import ThemeCard from "../ui/Card/Card";
import { THEMES, IMAGES, THEME_NAME } from "@/constants/theme.constants";

export default function ThemeCarousel() {
  return (
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
  );
}
