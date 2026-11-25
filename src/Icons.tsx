const paths = {
  terminal: 'm4 6 6 6-6 6m9 0h7',
  home: 'm3 10 9-7 9 7v10h-6v-7H9v7H3z',
  grid: 'M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h7v7h-7z',
  case: 'M3 8h18v12H3z M8 8V5h8v3 M3 12q9 5 18 0 M12 12v3',
  layers: 'm2 8 10-5 10 5-10 5z M2 12l10 5 10-5 M2 16l10 5 10-5',
  mail: 'M2 5h20v14H2z m1 1 9 7 9-7',
  moon: 'M20.5 14A9 9 0 0 1 10 3a9 9 0 1 0 10.5 11z',
  sun: 'M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z M12 1v3m0 16v3M1 12h3m16 0h3M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2',
  github: 'M9 21v-3c-4 1-4-2-6-2m12 5v-4c0-1-.4-1.6-1-2 3-.4 6-1.5 6-6 0-1.1-.4-2.2-1.2-3 .2-.7.4-2-.2-3-1.2 0-2.6.8-3.4 1.3a12 12 0 0 0-6.4 0C8 3.8 6.6 3 5.4 3c-.6 1-.4 2.3-.2 3A4.4 4.4 0 0 0 4 9c0 4.5 3 5.6 6 6-.7.5-1 1.2-1 2',
  linkedin: 'M3 9h3v12H3z M3 4h3v2H3z M10 21V9h3v2c2-4 8-3 8 3v7h-3v-7c0-3-5-3-5 1v6z',
  file: 'M5 2h9l5 5v15H5z M14 2v6h5 M8 13h8m-8 4h6',
  copy: 'M8 8h12v13H8z M16 5V2H3v15h2',
  check: 'm3 12 6 6L21 6',
  arrow: 'M5 19 19 5M6 5h13v13',
  back: 'M20 12H4m7-7-7 7 7 7',
  code: 'm7 7-5 5 5 5m10-10 5 5-5 5m-4-14-3 18',
  library: 'M3 4h4v16H3z M10 4h3v16h-3z m5 1 3-1 4 15-3 1z',
  tools: 'm4 20 10-10a6 6 0 0 1 7-7l-4 4 1 2 4-3a6 6 0 0 1-7 7L6 22z',
  frame: 'M5 2v20M19 2v20M2 5h20M2 19h20',
  braces: 'M9 3H7Q5 3 5 6v3q0 3-3 3 3 0 3 3v3q0 3 4 3m6-18h2q2 0 2 3v3q0 3 3 3-3 0-3 3v3q0 3-4 3',
  database: 'M3 6c0-5 18-5 18 0s-18 5-18 0z M3 6v12c0 5 18 5 18 0V6 M3 12c0 5 18 5 18 0',
  chip: 'M5 5h14v14H5z M9 9h6v6H9z M9 2v3m6-3v3M9 19v3m6-3v3M2 9h3m-3 6h3m14-6h3m-3 6h3',
}
export type IconName = keyof typeof paths

export function Icon({ name }: { name: IconName }) {
  return <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round"><path d={paths[name]} /></svg>
}
