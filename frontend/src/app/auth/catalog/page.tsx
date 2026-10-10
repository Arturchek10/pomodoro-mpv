import styles from "./ThemesCatalog.module.css";
import CatalogCard from "@/components/ui/CatalogCard/CatalogCard"; // должно быть так "@/components/ui/Card/Card"
import { SideDashboard } from "@/components/SideDashboard/SideDashboard";
import { IMAGES, THEME_NAME, THEMES } from "@/constants/theme.constants";
import InputFilter from "@/components/InputFilter/InputFilter";
export default function ThemesCatalog() {
  return (
    <div className={styles["catalog-layout"]}>
      <SideDashboard />

      <main className={styles["catalog-content"]}>
        <p>Expore New Themes</p>
        <p>Find the perfect atmosphere for focus</p>
        <div className={styles["filters-container"]}>
          <InputFilter
            label="Genre"
            name="genre"
            options={[
              "All Genres",
              "Anime",
              "Nature",
              "Movies",
              "Games",
              "Fantasy",
            ]}
          />

          <InputFilter
            label="Animation"
            name="animation"
            options={["All Types", "Animated", "Static"]}
          />

          <InputFilter
            label="Mood"
            name="mood"
            options={[
              "All Moods",
              "Relaxing",
              "Dark",
              "Cozy",
              "Energetic",
              "Atmospheric",
            ]}
          />

          <InputFilter
            label="Sort By"
            name="sort"
            options={["Featured", "Most Popular", "Newest", "A-Z"]}
          />
          <div className={styles["search-container"]}>
            <img src="/svg/search.svg" alt="search-icon" />
            <input type="text" className={styles["search-input"]}/>
          </div>
        </div>

        <div className={styles["cards-grid"]}>
          {THEMES.map((theme) => (
            <CatalogCard
              key={theme}
              themeId={theme}
              imageSrc={IMAGES[theme]}
              themeName={THEME_NAME[theme]}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
