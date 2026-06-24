"use client";

import styles from "./Timer.module.css";
import Controls from "./Controls";
import { usePomodoroTimer } from "./usePomodoroTimer";

export default function Timer() {
  const {
    mode,
    time,
    timerStatus,
    startTimer,
    stopTimer,
    resetTimer,
    changeMode,
  } = usePomodoroTimer();

  const timeFormating = (time: number) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className={styles["timer-controls-container"]}>
      <h1 className={styles["timer-title"]}>
        Pomodoro Timer{" "}
        <a href="https://github.com/Arturchek10" target="_blank">
          by Arturchek10
        </a>
      </h1>

      <div className={styles["timer-container"]}>
        <div className={styles["timer-mode"]}>
          <div
            className={`${styles["session-mode"]} ${mode === "session" ? styles["active"] : ""}`}
          >
            <p onClick={() => changeMode("session")}>sessions</p>
          </div>
          <div
            className={`${styles["session-mode"]} ${mode === "break" ? styles["active"] : ""}`}
          >
            <p onClick={() => changeMode("break")}>breaks</p>
          </div>
        </div>
        {/* отображение таймера */}
        <span id={styles["timer-display"]}>{timeFormating(time)}</span>
      </div>

      <Controls
        startTimer={startTimer}
        stopTimer={stopTimer}
        resetTimer={resetTimer}
        timerStatus={timerStatus}
      />
    </div>
  );
}
