import { useState, useEffect, useRef } from "react";
import {
  Mode,
  SESSION_DURATION,
  BREAK_DURATION,
} from "@/constants/session.constants";
import { TimerStatus } from "@/types/timer.types";
import useSessions from "@/stores/useSessionStore.store";

export function usePomodoroTimer() {
  const [mode, setMode] = useState<Mode>("session"); // режим таймера session / break
  const [endTime, setEndTime] = useState<number | null>(null); // время окончания таймера в миллисекундах

  const [time, setTime] = useState<number>(SESSION_DURATION); //  оставшееся время секундах
  const [timerStatus, setTimerStatus] = useState<TimerStatus>("standing"); // стуатус таймера (идет или стоит)
  // оболочка для интервала чтобы не было перерендера
  const intervalRef = useRef<number | null>(null);

  // zustand store useSessions
  const increaseSession = useSessions((state) => state.increaseSession);
  const increaseBreak = useSessions((state) => state.increaseBreak);

  const endTimerAudio = new Audio("audio/time-is-up-sound.wav")
  endTimerAudio.volume = 0.15

  const startTimer = () => {
    console.log("start timer");
    setTimerStatus("running");
    const duration = time;
    const end = Date.now() + time * 1000;
    setTime(duration);
    setEndTime(end);
  };

  const stopTimer = () => {
    console.log("stop timer");
    setTimerStatus("standing");
    setEndTime(null); // зачем то сбрасывается время окончания
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // очищаем интервал
      intervalRef.current = null; // сбрасываем ссылку на интервал
    }
  };

  const resetTimer = () => {
    setTimerStatus("standing");
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
    setEndTime(null);
    setTime(mode === "session" ? SESSION_DURATION : BREAK_DURATION);
  };

  const changeMode = (newMode: Mode) => {
    setTimerStatus("standing");
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setMode(newMode);
    setTime(newMode === "session" ? SESSION_DURATION : BREAK_DURATION);
    setEndTime(null);
  };

  // обработчик окончания сессии или перерыва
  const handleFinish = () => {
    endTimerAudio.play().catch(console.error); // звук окончания сессии
    if (mode === "session") {
      increaseSession();
      setMode("break");
      setTime(BREAK_DURATION);
      setEndTime(null);
      setTimerStatus("standing");
    } else if (mode === "break") {
      increaseBreak();
      setMode("session");
      setTime(SESSION_DURATION);
      setEndTime(null);
      setTimerStatus("standing");
    }
  };

  useEffect(() => {
    if (!endTime) return;

    const tick = () => {
      const remainingMs = endTime - Date.now();
      const remainingSec = Math.round(remainingMs / 1000);

      // время сессии или перерыва закончилось
      if (remainingSec <= 0) {
        handleFinish();
        console.log("handleFinish");
        return;
      }

      setTime(remainingSec);
    };

    tick();
    intervalRef.current = window.setInterval(tick, 1000);

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [endTime]);

  return {
    mode,
    time,
    timerStatus,
    startTimer,
    stopTimer,
    resetTimer,
    changeMode,
  };
}
