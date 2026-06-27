import { create } from "zustand";

type SoundState = {
  isSoundEnable: boolean;
  toggleSound: () => void;
};

const useSoundStore = create<SoundState>((set) => ({
  isSoundEnable: false,
  toggleSound: () =>
    set((state) => {
      return { isSoundEnable: !state.isSoundEnable };
    }),
}));

export default useSoundStore;
