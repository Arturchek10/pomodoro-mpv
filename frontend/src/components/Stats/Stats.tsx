"use client";

import styles from "./Stats.module.css";
import useSessions from "@/stores/useSessionStore.store";
import EnableMusicBtn from "../EnableMusicBtn/EnableMusicBtn";
export default function Stats() {
  const { sessions, breaks, resetStats } = useSessions();

  return (
    <div className={styles["stats-container"]}>
      <p>goal: </p>
      <p>sessions: {sessions}</p>
      <p>breaks: {breaks}</p>
      <p id={styles["reset-stats"]} onClick={resetStats}>
        click here for reset stats
      </p>
      <EnableMusicBtn />
    </div>
  );
}
