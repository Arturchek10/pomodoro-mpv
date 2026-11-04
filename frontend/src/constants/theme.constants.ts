export const THEMES = [
  "classroom",
  "deathnote",
  "harrypotter",
  "strangerthings",
  "haikuii",
  "lotr",
] as const;
export type ThemeKey = (typeof THEMES)[number]; // тип любого элемента массива

export const VIDEOS: Record<ThemeKey, string> = {
  classroom: "/videos/Classroom-wallpaper+.mp4",
  deathnote: "/videos/Death-Note-wallpaper+.mp4",
  harrypotter: "/videos/Harry-Potter-wallpaper+.mp4",
  strangerthings: "/videos/Stranger-Things-wallpaper+.mp4",
  haikuii: "",
  lotr: "/videos/lotr-wallpaper.mp4",
};

export const AUDIO: Record<ThemeKey, string> = {
  classroom: "/audio/10min-Classroom-audio.m4a",
  deathnote: "/audio/10min-Death-Note-audio.m4a",
  harrypotter: "/audio/10min-Harry-Potter-audio.m4a",
  strangerthings: "/audio/10min-stranger-things-audio.m4a",
  haikuii: "",
  lotr: "/audio/lotr-sound-10min.mp3",
};

export const IMAGES: Record<ThemeKey, string> = {
  classroom: "/images/classroom-theme.jpg",
  deathnote: "/images/death-note-theme3.jpg",
  harrypotter: "/images/harry-potter-theme.jpg",
  strangerthings: "/images/stranger-things-theme.jpg",
  haikuii: "/images/haikuii-theme.jpg",
  lotr: "/images/lotr-theme.jpg",
};

export const THEME_NAME: Record<ThemeKey, string> = {
  classroom: "Classroom",
  deathnote: "Death Note",
  harrypotter: "Harry Potter",
  strangerthings: "Stranger Things",
  haikuii: "Haikuii",
  lotr: "Lord of the Ring",
};


export type ThemeCategory = "real" | "anime" | "movies" | "series" | "fantasy";

export type ThemeTag = "sport" | "school" | "epic" | "nature" | "chill" | "rain";

type ThemeFilters = {
  category: ThemeCategory,
  tags: ThemeTag[]
}

export const THEME_FILTERS: Record<ThemeKey, ThemeFilters> = {
  classroom: {category: "real", tags: ["school", "chill"] },
  deathnote: {category: "anime", tags: ["chill"]},
  harrypotter: {category: "movies", tags: ["school", "chill"]},
  strangerthings: {category: "series", tags: []},
  haikuii: {category: "anime", tags: ["school", "sport"]},
  lotr: {category: "movies", tags: ["epic"]}
};
