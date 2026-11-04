"use client";

import styles from "./ThemesCatalog.module.css";
import CatalogCard from "@/components/ui/CatalogCard/CatalogCard"; // должно быть так "@/components/ui/Card/Card"
import { SideDashboard } from "@/components/SideDashboard/SideDashboard";
import {
  IMAGES,
  THEME_FILTERS,
  THEME_NAME,
  ThemeCategory,
  THEMES,
  ThemeTag,
} from "@/constants/theme.constants";
import InputFilter from "@/components/InputFilter/InputFilter";
import { useState } from "react";
import AccountMenu from "@/components/Account/AccountMenu";

export default function ThemesCatalog() {
  const [category, setCategory] = useState<ThemeCategory | null>(null);
  const [tags, setTags] = useState<ThemeTag[]>([]);

  const filteredThemes = THEMES.filter((theme) => {
    const filters = THEME_FILTERS[theme]; // здесь хранятся фильтры каждой темы.
    // {category: "real", tags: ["school", "chill"] }

    const matchesCategory = category === null || filters.category === category;
    const matchesTags = tags.every((tag) => filters.tags.includes(tag));

    return matchesCategory && matchesTags;
  });

  return (
    <div className={styles["catalog-layout"]}>
      <SideDashboard />
      <main className={styles["catalog-content"]}>
        <div className={styles["catalog-header-container"]}>
          <div>
            <p className={styles["title"]}>Explore New Themes</p>
            <p className={styles["under-title"]}>Find the perfect atmosphere for focus</p>
          </div>
          <AccountMenu />
        </div>
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
            <input type="text" className={styles["search-input"]} />
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
