import styles from "./Controls.module.css";
import { usePomodoroTimer } from "@/components/Timer/usePomodoroTimer";
import { TimerStatus } from "@/types/timer.types";
import { FaArrowRotateLeft } from "react-icons/fa6";

type ControlsProps = {
  startTimer: () => void;
  stopTimer: () => void;
  resetTimer: () => void;
  changeMode: () => void;
  timerStatus: TimerStatus;
};

export default function Controls({
  startTimer,
  stopTimer,
  resetTimer,
  changeMode,
  timerStatus,
}: ControlsProps) {
  return (
    <div className={styles["controls"]}>
      <button
        className={`${styles["btn"]} ${styles["start"]}`}
        onClick={timerStatus === "running" ? stopTimer : startTimer}
      >
        {timerStatus === "running" ? "STOP" : "START"}
      </button>
      <button
        className={`${styles["btn"]} ${styles["reset"]}`}
        onClick={resetTimer}
      >
        <FaArrowRotateLeft size={36}></FaArrowRotateLeft>
      </button>
    </div>
  );
}
