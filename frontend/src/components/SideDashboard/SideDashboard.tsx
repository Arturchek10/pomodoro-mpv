import Link from "next/link";
import styles from "./SideDashboard.module.css"

export function SideDashboard() {
  return (
    <aside className={styles.sidebar}>
      <Link href="/">PomodoroTimer</Link>
      <div className={styles["header-container"]}>
        <p>Active Timer</p>
        <p>24:00</p>
        <div className={styles["stop-start-timer-container"]}>
          <img src="/svg/start.svg" alt="stop|run timer" className={styles["start-timer-svg"]}/>
          <p>start session</p>
        </div>
      </div>

      <nav>
        <div>
          <Link href="/auth/catalog">Explore</Link>
        </div>
        <div>
          <Link href="/auth/my-themes">My Themes</Link>
        </div>
        <div>
          <Link href="/auth/settings">Settings</Link>
        </div>
      </nav>

      <div className={styles["account-container"]}>
        <img src="/svg/account.svg" alt="svg-acc" className={styles["acc-svg"]} />
        <p>My Account</p>
      </div>
    </aside>
  );
}
