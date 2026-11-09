import styles from "./EnableMusicBtn.module.css";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import useSoundStore from "@/stores/useSoundStore.store";
import { useEffect } from "react";
export default function EnableMusicBtn() {
  const toggleSound = useSoundStore((state) => state.toggleSound);
  const currentSoundState = useSoundStore((state) => state.isSoundEnable);

  useEffect(() => {
    console.log("currentSoundState: ", currentSoundState);
  }, [currentSoundState]);

  return (
    <button
      className={styles["sound-toggle-btn"]}
      id="sound-toggle"
      onClick={toggleSound}
    >
      {currentSoundState && <VolumeUpIcon />}
      {!currentSoundState && <VolumeOffIcon />}
    </button>
  );
}
