import styles from "./ThemesCatalog.module.css";
import CatalogCard from "@/components/ui/CatalogCard/CatalogCard"; // должно быть так "@/components/ui/Card/Card"
import { IMAGES, THEME_NAME, THEMES } from "@/constants/theme.constants";

export default function ThemesCatalog() {
  return (
    <div>
      <h1>themes</h1>
      {/* сетка с карточками, на которые можно нажимать и они будут анимироваться 
      + описание сюжета карточки*/}
      <div className={styles["cards-grid"]}>
        {THEMES.map((theme) => (
          <CatalogCard
            key={theme}
            themeId={theme} // уникальное название темы
            imageSrc={IMAGES[theme]}
            themeName={THEME_NAME[theme]}
          />
        ))}
      </div>
    </div>
  );
}
