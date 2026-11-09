"use client";

import { useEffect } from "react";
import introJs from "intro.js";
import styles from "./OnboardingTour.module.css";

const TOUR_KEY = "pomodoro-onboarding-completed";

export default function OnboardingTour() {
  useEffect(() => {
    if (localStorage.getItem(TOUR_KEY)) return;
    const startTour = async () => {
      
      const { default: introJs } = await import("intro.js");
      const tour = introJs.tour();

      tour.setOptions({
        tooltipClass: styles.tooltip,
        // showProgress: true,
        showBullets: false,
        disableInteraction: false,
        nextLabel: "Далее",
        prevLabel: "Назад",
        doneLabel: "Понятно",
        steps: [
          {
            element: "#sound-toggle",
            intro: "Включи звук, чтобы слышать уведомления о завершении таймера.",
            position: "right",
          },
        ],
      });
  
      tour.onComplete(() => {
        localStorage.setItem(TOUR_KEY, "true");
      });
  
      tour.onExit(() => {
        localStorage.setItem(TOUR_KEY, "true");
      });
  
      tour.start();
  
      return () => {
        tour.exit(true);
      };

    }
  }, []);

  return null;
}
