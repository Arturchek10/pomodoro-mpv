export const THEMES = ["classroom", 'deathnote', "harrypotter", "strangerthings"] as const;
export type ThemeKey = typeof THEMES[number] // тип любого элемента массива

export const VIDEOS: Record<ThemeKey, string> = {
  classroom: "videos/Classroom-wallpaper+.mp4",
  deathnote: "videos/Death-Note-wallpaper+.mp4",
  harrypotter:  "videos/Harry-Potter-wallpaper+.mp4",
  strangerthings: "videos/Stranger-Things-wallpaper+.mp4",
}

export const IMAGES: Record<ThemeKey, string> = {
  classroom: "images/classroom-theme.jpg",
  deathnote: "images/death-note-theme3.jpg",
  harrypotter:  "images/harry-potter-theme.jpg",
  strangerthings: "images/stranger-things-theme.jpg",
}

export const THEME_NAME: Record<ThemeKey, string> = {
  classroom: "Classroom",
  deathnote: "Death Note",
  harrypotter:  "Harry Potter",
  strangerthings: "Stranger Things",
}