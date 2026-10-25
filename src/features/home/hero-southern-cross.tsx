import { useId } from "react";

// Relative positions follow the supplied view of Crux: Gacrux at the top,
// Acrux below, Imai to the left, Mimosa to the right and Ginan off the main axis.
const cruxStars = [
  { id: "acrux", x: 266, y: 648, radius: 5.6, halo: 54, color: "#f6d98b" },
  { id: "gacrux", x: 548, y: 104, radius: 4.1, halo: 31, color: "#f9e3c8" },
  { id: "mimosa", x: 632, y: 366, radius: 4.4, halo: 36, color: "#d8eeff" },
  { id: "imai", x: 224, y: 220, radius: 3.7, halo: 28, color: "#e8f2ff" },
  { id: "ginan", x: 466, y: 452, radius: 2.7, halo: 21, color: "#f7e2d4" },
] as const;

const fieldStars = [
  [62, 143, 1.2], [126, 382, 0.9], [182, 82, 1], [246, 561, 1.3],
  [312, 239, 0.8], [354, 699, 1], [422, 117, 1.2], [487, 442, 0.8],
  [531, 62, 0.9], [589, 633, 1.3], [648, 294, 0.8], [697, 166, 1],
  [758, 722, 1.1], [813, 514, 0.8], [866, 82, 1.2], [932, 659, 1],
  [997, 204, 0.8], [1061, 733, 1.1], [1124, 463, 0.9], [1182, 121, 1],
  [1241, 604, 1.2], [1304, 296, 0.8], [1367, 504, 1], [1411, 69, 0.9],
] as const;

export function HeroSouthernCross() {
  const id = useId();
  const blueGlow = `${id}-crux-blue`;
  const goldGlow = `${id}-crux-gold`;

  return (
    <div aria-hidden="true" className="southern-cross-sky pointer-events-none absolute inset-0">
      <svg className="absolute inset-0 h-full w-full" fill="white" focusable="false" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1440 800">
        {fieldStars.map(([x, y, radius]) => (
          <circle cx={x} cy={y} key={`${x}-${y}`} opacity={radius > 1 ? 0.45 : 0.22} r={radius} />
        ))}
      </svg>

      <svg className="southern-cross-map" fill="none" focusable="false" viewBox="0 0 860 760">
        <defs>
          <radialGradient id={blueGlow}>
            <stop offset="0" stopColor="#a7d9ff" stopOpacity="0.7" />
            <stop offset="0.2" stopColor="#6abfee" stopOpacity="0.25" />
            <stop offset="1" stopColor="#6abfee" stopOpacity="0" />
          </radialGradient>
          <radialGradient id={goldGlow}>
            <stop offset="0" stopColor="#f6d98b" stopOpacity="0.85" />
            <stop offset="0.22" stopColor="#e6c56e" stopOpacity="0.3" />
            <stop offset="1" stopColor="#e6c56e" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g stroke="#9fcfe8" strokeLinecap="round" strokeOpacity="0.32" strokeWidth="1.2">
          <path className="southern-cross-line" d="M 548 104 L 266 648" pathLength="1" style={{ animationDelay: "0.95s" }} vectorEffect="non-scaling-stroke" />
          <path className="southern-cross-line" d="M 224 220 L 632 366" pathLength="1" style={{ animationDelay: "1.15s" }} vectorEffect="non-scaling-stroke" />
        </g>

        {cruxStars.map((star, index) => (
          <g className="southern-cross-star" data-star={star.id} key={star.id} style={{ animationDelay: `${0.15 + index * 0.18}s` }} transform={`translate(${star.x} ${star.y})`}>
            <circle className="southern-cross-halo" fill={`url(#${star.id === "acrux" ? goldGlow : blueGlow})`} r={star.halo} style={{ animationDelay: `${2.9 + index * 0.55}s` }} />
            <path d={`M ${-star.radius * 2.6} 0 H ${star.radius * 2.6} M 0 ${-star.radius * 2.6} V ${star.radius * 2.6}`} stroke={star.color} strokeOpacity="0.45" strokeWidth="0.8" />
            <circle fill={star.color} r={star.radius} />
            <circle fill="#ffffff" r={star.radius * 0.42} />
          </g>
        ))}

        <text className="southern-cross-label" fill="#e6c56e" x="283" y="677">α · ACRUX</text>
      </svg>
    </div>
  );
}
