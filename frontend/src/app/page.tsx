import styles from "./page.module.css";
import Timer from "@/components/Timer/Timer";
import ThemeCarousel from "@/components/CardCarousel/CardsCarousel";
import Header from "@/components/Header/Header";
export default function Home() {
  return (
    <div>
      <Header />
      <div className={styles["home-container"]}>
        <section className={styles["timer-section"]}>
          <Timer />
        </section>

        <section className={styles["themes-section"]}>
          <ThemeCarousel />
        </section>
      </div>
    </div>
  );
}
