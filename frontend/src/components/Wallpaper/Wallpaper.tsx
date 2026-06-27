"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Wallpaper.module.css";
import { VIDEOS, AUDIO } from "@/constants/theme.constants";
import useThemesStore from "@/stores/useThemesStore.store";
import useSoundStore from "@/stores/useSoundStore.store";

export default function Wallpaper() {
  const currentThemeKey = useThemesStore((state) => state.activeTheme);

  const video1Ref = useRef<HTMLVideoElement | null>(null);
  const video2Ref = useRef<HTMLVideoElement | null>(null);

  // номер фона который щас виден
  const [activeVideo, setActiveVideo] = useState<1 | 2>(1);
  const [currentSrc, setCurrentSrc] = useState(VIDEOS[currentThemeKey]);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  //
  const soundState = useSoundStore((state) => state.isSoundEnable);

  useEffect(() => {
    audioRef.current = new Audio(AUDIO[currentThemeKey]);

    audioRef.current.loop = true;
    audioRef.current.volume = 0.15;
  }, [currentThemeKey]);

  useEffect(() => {
    console.log("effect запустился");

    if (!audioRef.current) return;

    if (soundState === true) {
      // пока пользователь не повзаимодействовал с сайтом браузер отклоняет вызов play()
      audioRef.current.play().catch(console.error);
    } else {
      audioRef.current.pause();
    }
    return () => {
      audioRef.current?.pause();
      console.log("bye");
    };
  }, [currentThemeKey, soundState]);

  useEffect(() => {
    if (video1Ref.current) {
      video1Ref.current.src = currentSrc;
      video1Ref.current.load();
      video1Ref.current.play();
    }
  }, []);

  useEffect(() => {
    const newSrc = VIDEOS[currentThemeKey];

    if (newSrc === currentSrc) return;

    // номер следующего фона
    const nextVideoNumber = activeVideo === 1 ? 2 : 1;

    const nextVideo =
      nextVideoNumber === 1 ? video1Ref.current : video2Ref.current;

    if (!nextVideo) return;

    nextVideo.src = newSrc;
    nextVideo.load();

    const handleLoadedData = async () => {
      nextVideo.currentTime = 0;

      try {
        await nextVideo.play();
      } catch (error) {
        console.log("Video play error:", error);
      }

      setActiveVideo(nextVideoNumber);
      setCurrentSrc(newSrc);
    };

    nextVideo.addEventListener("loadeddata", handleLoadedData, {
      once: true,
    });

    return () => {
      nextVideo.removeEventListener("loadeddata", handleLoadedData);
    };
  }, [currentThemeKey, currentSrc, activeVideo]);

  return (
    <div className={styles["wallpaper-container"]}>
      <video
        ref={video1Ref}
        className={`${styles["video-wallpaper"]} ${
          activeVideo === 1 ? styles["active"] : ""
        }`}
        muted
        loop
        playsInline
      />

      <video
        ref={video2Ref}
        className={`${styles["video-wallpaper"]} ${
          activeVideo === 2 ? styles["active"] : ""
        }`}
        muted
        loop
        playsInline
      />
    </div>
  );
}
