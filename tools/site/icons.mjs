// Ícones de linha no estilo Lucide (ISC), desenhados inline.
// pathLength="1" permite a animação de "desenho" via stroke-dashoffset.

const P = (d) => `<path pathLength="1" d="${d}"/>`;
const C = (cx, cy, r) => `<circle pathLength="1" cx="${cx}" cy="${cy}" r="${r}"/>`;

const shapes = {
  health:
    P("M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z") +
    P("M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"),
  shield:
    P("M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z") +
    P("m9 12 2 2 4-4"),
  family:
    P("M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2") + C(9, 7, 4) +
    P("M22 21v-2a4 4 0 0 0-3-3.87") + P("M16 3.13a4 4 0 0 1 0 7.75"),
  bank:
    P("M3 22h18") + P("M6 18v-7") + P("M10 18v-7") + P("M14 18v-7") + P("M18 18v-7") + P("M12 2 20 7H4z"),
  document:
    P("M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z") + P("M14 2v4a2 2 0 0 0 2 2h4") +
    P("M10 9H8") + P("M16 13H8") + P("M16 17H8"),
  home:
    P("M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z") +
    P("M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"),
  scale:
    P("m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z") + P("m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z") +
    P("M7 21h10") + P("M12 3v18") + P("M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"),
  arrow: P("M5 12h14") + P("m12 5 7 7-7 7"),
  arrowDown: P("M12 5v14") + P("m19 12-7 7-7-7"),
  plus: P("M5 12h14") + P("M12 5v14"),
  check: P("M20 6 9 17l-5-5"),
  pin: P("M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0") + C(12, 10, 3),
  phone: P("M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"),
  instagram: `<rect pathLength="1" x="2" y="2" width="20" height="20" rx="5" ry="5"/>` + P("M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z") + P("M17.5 6.5h.01"),
  monitor: `<rect pathLength="1" x="2" y="3" width="20" height="14" rx="2"/>` + P("M8 21h8") + P("M12 17v4"),
  building: `<rect pathLength="1" x="4" y="2" width="16" height="20" rx="2"/>` + P("M9 22v-4h6v4") + P("M8 6h.01") + P("M16 6h.01") + P("M12 6h.01") + P("M12 10h.01") + P("M12 14h.01") + P("M16 10h.01") + P("M16 14h.01") + P("M8 10h.01") + P("M8 14h.01"),
  message: P("M7.9 20A9 9 0 1 0 4 16.1L2 22Z"),
  close: P("M18 6 6 18") + P("m6 6 12 12"),
};

export function icon(name, { size = 24, cls = "icon", stroke = 1.5 } = {}) {
  return `<svg class="${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${shapes[name]}</svg>`;
}

export const whatsappIcon = (cls = "icon") =>
  `<svg class="${cls}" viewBox="0 0 32 32" width="24" height="24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M16.04 4.02c-6.6 0-11.97 5.28-11.97 11.78 0 2.08.56 4.1 1.63 5.88l-1.73 6.3 6.53-1.69a12.2 12.2 0 0 0 5.54 1.38c6.6 0 11.97-5.28 11.97-11.78S22.64 4.02 16.04 4.02Zm0 21.66c-1.82 0-3.6-.49-5.15-1.42l-.37-.22-3.88 1 1.03-3.72-.25-.38a9.65 9.65 0 0 1-1.48-5.14c0-5.4 4.53-9.79 10.1-9.79 5.58 0 10.1 4.39 10.1 9.79 0 5.39-4.52 9.88-10.1 9.88Zm5.54-7.38c-.3-.15-1.8-.87-2.08-.97-.28-.1-.48-.15-.68.15-.2.29-.78.96-.96 1.16-.18.2-.35.22-.65.07-.3-.15-1.28-.46-2.44-1.47-.9-.79-1.51-1.77-1.69-2.06-.18-.3-.02-.46.13-.6.14-.13.3-.34.45-.51.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.68-1.61-.93-2.2-.24-.58-.49-.5-.68-.5h-.58c-.2 0-.52.08-.8.37-.28.3-1.05 1.01-1.05 2.46 0 1.45 1.08 2.85 1.23 3.05.15.2 2.13 3.2 5.16 4.49.72.31 1.28.49 1.72.63.72.22 1.38.19 1.9.12.58-.08 1.8-.72 2.05-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z"/></svg>`;

// Símbolo da justiça em traço, para o pré-loader se "desenhar".
export const justiceLineArt = `<svg class="preloader-mark" viewBox="0 0 128 128" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
  <circle pathLength="1" cx="64" cy="64" r="61"/>
  <path pathLength="1" d="M64 24c7.2 0 13 5.8 13 13v7.5c0 6.8-5.1 12.4-11.7 12.9l8.1 43.6H54.6l8.1-43.6C56.1 56.9 51 51.3 51 44.5V37c0-7.2 5.8-13 13-13Z"/>
  <path pathLength="1" d="M40 51h48"/>
  <path pathLength="1" d="M35 55 22 80h26L35 55Z"/>
  <path pathLength="1" d="M93 55 80 80h26L93 55Z"/>
  <path pathLength="1" d="M48 103h32"/>
  <path pathLength="1" d="M42 112h44"/>
</svg>`;
