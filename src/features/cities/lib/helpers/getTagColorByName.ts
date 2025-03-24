const hslToHex = (h: number, s: number, l: number): string => {
  l /= 100;
  const a = (s / 100) * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`.toUpperCase();
};

export const getTagColorByName = (name: string): string => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash << 5) - hash + name.charCodeAt(i);
    hash |= 0;
  }

  const h = Math.abs(hash) % 360; // Тон (0-359)
  const s = 80; // Насыщенность 80% (яркие цвета)
  const l = 40; // Светлота 40% (достаточно темный для контраста)

  return hslToHex(h, s, l);
};
