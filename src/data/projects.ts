export const projects = [
  {
    title: "Full-Stack Productivity Suite",
    tech: ["React", "Node.js", "Express", "MongoDB", "Flutter"],
    description: "Architected a RESTful API to serve web and mobile clients, implementing JWT automated refresh logic to eliminate session timeouts.",
    impact: "Implemented optimistic UI patterns with client-side UUIDs, reducing perceived user latency to near-zero.",
    link: "https://github.com/Dhakal-Kushal/Team15LargeProject"
  },
  {
    title: "AR Visualization Tool",
    tech: ["Python", "OpenCV", "SIFT/ORB"],
    description: "Engineered a real-time AR pipeline utilizing feature detection to track 3D model overlays with a minimum 8-inlier requirement.",
    impact: "Reduced visual jitter using a 3-frame temporal smoothing buffer and RANSAC-based homography estimation.",
    link: "https://github.com/Dhakal-Kushal/AR_logic"
  },
  {
    title: "Real-Time Note Detector",
    tech: ["Python", "NumPy", "PyAudio", "Parselmouth"],
    description: "Developed a live pitch detection tool processing 44.1kHz audio streams, utilizing 2048-sample buffers.",
    impact: "Achieved sub-100ms end-to-end processing latency via NumPy vectorization for live vocal feedback.",
    link: "https://github.com/Dhakal-Kushal/NoteDetectorPro"
  },
  {
    title: "Systems Hotkey Monitor",
    tech: ["C", "Win32 API", "SQLite3", "GDI"],
    description: "Programmed a low-level application for global keyboard event monitoring across all active Windows processes.",
    impact: "Achieved a 10ms polling interval (100Hz) while maintaining thread-safe state management via Interlocked operations.",
    link: "https://github.com/Dhakal-Kushal/Hotkey-counter"
  }
];