import {create} from "zustand";

type SessionStore = {
  sessions: number;
  breaks: number;
  increaseSession: () => void;
  increaseBreak: () => void;
  resetStats: () => void;
}

const useSessions = create<SessionStore>((set) => ({
  sessions: 0,
  breaks: 0,
  increaseSession: () => set((state) => ({
    sessions: state.sessions + 1
  })),
  increaseBreak: () => set((state) =>  ({
    breaks: state.breaks + 1
  })),
  resetStats: () => set((state) => ({
    sessions: 0,
    breaks: 0,
  })),
}));

export default useSessions;