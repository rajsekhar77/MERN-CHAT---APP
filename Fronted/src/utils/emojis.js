const emojis = [
  "🎉", "🍕", "😄", "🐱", "🌸",
  "🚀", "🎈", "🍔", "🏀", "🎧",
  "🌍", "🐶", "🌞", "🌟", "🚗",
  "🍩", "🎲", "🏝️", "🍉", "💡",
  "🌈", "🐻", "🍦", "🎤", "🎮",
  "🍎", "🚴", "🏆", "🖼️", "🍿",
  "📚", "🦄", "💻", "🎵", "🎂",
  "✈️", "📸", "⚽", "🧩", "🚁"
];

export const getRandomEmojis = () => {
    return emojis[Math.floor(Math.random() * emojis.length)];
}
