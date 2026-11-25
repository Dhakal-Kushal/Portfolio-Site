export const profile = {
  name: 'Kushal Dhakal',
  summary: 'I’m a senior studying computer science at the University of Central Florida, graduating in May 2027. I build software that turns camera input into something people can use, from a hands-free mouse to a tool for comparing satellite images of buildings. I also work across the web stack, from React interfaces to the APIs and deployment workflows behind them.',
  photo: '/media/portrait.png',
  github: 'https://github.com/Dhakal-Kushal',
  linkedin: 'https://www.linkedin.com/in/kushal-dhakal-127772227/',
  resume: '/resume.pdf',
  email: 'kushald592@gmail.com',
}

export interface Project {
  slug: string
  title: string
  summary: string
  description: string[]
  image: string
  imageAlt: string
  demo: string
  stack: string[]
  libraries: string[]
  frameworks: string[]
  tools: string[]
}

export const projects: Project[] = [
  {
    slug: "productivity-suite", title: "Team 15 Study App",
    summary: "A web and mobile planner pairs a study timer with session notes and a calendar for scheduling future notes.",
    description: [
      "I connected the React account and note screens to the Express API, including token storage and authenticated requests. I also added date and time selection so students could schedule a note from the calendar.",
      "I built the GitHub Actions workflow that compiles the web client, transfers the application over SSH, and reloads the deployment with PM2 and Nginx. Teammates built the Flutter screens, account recovery and verification flows, and API tests.",
    ],
    image: '/media/study-1.png', imageAlt: 'Isometric study of stacked cubes', demo: '/media/demo.webm',
    stack: ["TypeScript", "Node.js", "MongoDB", "Dart"], libraries: ["React", "bcrypt", "Supertest"],
    frameworks: ["Express", "Flutter", "Bootstrap"], tools: ["Vite", "GitHub Actions", "Nginx", "PM2", "Jest"],
  },
  {
    slug: "ar-visualization", title: "OpenAR",
    summary: "Point a webcam at a reference image and OpenAR draws a 3D model over it. The model follows the image as it moves or tilts.",
    description: [
      "I matched visual features between the reference image and each webcam frame using SIFT and FLANN, with ORB and Hamming-distance matching as a fallback. RANSAC filters out mismatches before the pipeline estimates how the reference plane maps onto the camera frame.",
      "I used that mapping and the camera intrinsics to project faces loaded by a lightweight Wavefront OBJ parser. Averaging the last three frame estimates reduced visible jitter, although tracking stability remained a limitation of the prototype.",
    ],
    image: '/media/study-2.png', imageAlt: 'Three-dimensional wireframe terrain', demo: '/media/demo.webm',
    stack: ["Python", "Wavefront OBJ"], libraries: ["OpenCV", "NumPy"],
    frameworks: [], tools: [],
  },
  {
    slug: "note-detector", title: "Note Detector Pro",
    summary: "A desktop tuner listens to a microphone and shows the detected note, how sharp or flat it is, and whether it fits a selected key and scale.",
    description: [
      "I used Praat through Parselmouth to estimate the fundamental frequency of incoming audio. The app converts that frequency into a note and an offset in cents, which drives a tuner needle and a scrolling pitch graph.",
      "Audio capture runs in a background worker. A bounded queue feeds the interface, and a fixed-length pitch history keeps the graph responsive. Musicians can export a session as CSV to review their tuning afterward.",
    ],
    image: '/media/study-3.png', imageAlt: 'Peach audio waveform on black', demo: '/media/demo.webm',
    stack: ["Python", "PortAudio"], libraries: ["PyAudio", "NumPy", "Parselmouth", "Matplotlib"],
    frameworks: ["Tkinter"], tools: ["Praat"],
  },
  {
    slug: "hotkey-monitor", title: "Hotkey Monitor",
    summary: "A native Windows utility counts presses of up to eight configurable Ctrl shortcuts, charts their use live, and saves events to a local SQLite database.",
    description: [
      "I wrote a background worker that polls keyboard state and counts each shortcut once per press, even when the keys stay held. Atomic counters and messages to the Win32 interface thread let the chart update independently of keyboard polling.",
      "I drew the bar chart with Windows GDI and used prepared SQLite statements to record shortcut events locally.",
    ],
    image: '/media/study-4.png', imageAlt: 'Twisted wireframe ring', demo: '/media/demo.webm',
    stack: ["C", "Windows", "SQLite"], libraries: ["Win32 API", "Windows GDI"],
    frameworks: [], tools: ["MinGW-w64", "GCC"],
  },
  {
    slug: "claude-claude-fruit", title: "ClaudeClaudeFruit",
    summary: "This hands-free mouse prototype maps webcam gaze to cursor movement. A left wink clicks once, a right wink double-clicks, and blinking both eyes pauses movement.",
    description: [
      "I implemented the threaded mouse controller and gaze mapper. The mapper uses iris position relative to each eye, piecewise affine calibration, Kalman smoothing, and head-pose compensation. The controller accounts for Windows display scaling and freezes the cursor when tracking drops.",
      "The team built a six-step calibration followed by a separate eight-target check. It reports median and 90th-percentile cursor error, directional bias, and jitter so users can evaluate a session before reusing a profile with compatible camera and display settings.",
    ],
    image: '/media/study-2.png', imageAlt: 'Three-dimensional wireframe terrain', demo: '/media/demo.webm',
    stack: ["Python"], libraries: ["MediaPipe Face Mesh", "OpenCV", "NumPy", "mouse"],
    frameworks: ["Tkinter", "CustomTkinter"], tools: [],
  },
  {
    slug: "suntacts", title: "Suntacts",
    summary: "A browser-based address book lets each user register, sign in, and manage contacts with names, email addresses, and phone numbers.",
    description: [
      "I built six PHP endpoints for registration, login, and contact creation, search, updates, and deletion. Prepared MySQL statements handle the queries, and each contact query is scoped to the signed-in user’s ID.",
      "I tested the endpoints in Postman, aligned their JSON fields with the JavaScript client, and fixed a registration bug. The OpenAPI specification documents request formats, responses, and HTTP error codes for all six endpoints.",
    ],
    image: '/media/study-1.png', imageAlt: 'Isometric study of stacked cubes', demo: '/media/demo.webm',
    stack: ["LAMP", "PHP", "MySQL", "HTML", "CSS", "JavaScript"], libraries: ["MySQLi"],
    frameworks: [], tools: ["OpenAPI / Swagger", "Postman"],
  },
  {
    slug: "greenlp", title: "GreeNLP",
    summary: "GreeNLP estimates a prompt’s relative compute intensity from its token count, wording, and selected model class. It flags open-ended requests and suggests edits directly in the browser.",
    description: [
      "I built a client-side scoring pipeline that combines tokenization, model-class baselines, and rules for wording such as requests for exhaustive answers. Users can apply a suggested rewrite and score the revised prompt.",
      "After 50 scored prompts, the app can fit a local least-squares model using previously predicted output lengths. IndexedDB stores the history and coefficients, with options to export or clear the data. The score is a relative estimate without measured energy or model-output data.",
    ],
    image: '/media/study-4.png', imageAlt: 'Twisted wireframe ring', demo: '/media/demo.webm',
    stack: ["JavaScript", "CSS", "IndexedDB"], libraries: ["React", "gpt-tokenizer"],
    frameworks: [], tools: ["Vite"],
  },
  {
    slug: "satellite-damage-assessment", title: "L12DemoMVP",
    summary: "This team prototype compares aligned satellite images taken before and after an event. It highlights visual changes on individual roofs for a reviewer to inspect.",
    description: [
      "I integrated the building detection and anomaly assessment stages. RemoteCLIP screens each image pair for relevance and visibility. Tiled OWLv2 detection locates buildings in the earlier image, overlapping detections are filtered by confidence, and SAM 2 outlines the roofs.",
      "AnomalyDINO compares corresponding building crops. Its scores are projected back onto the later image as roof-masked heatmaps. Shared run IDs, image hashes, and JSON reports tie each result to its inputs. Confirming how well the scores indicate damage requires validation against labeled examples.",
    ],
    image: '/media/study-2.png', imageAlt: 'Three-dimensional wireframe terrain', demo: '/media/demo.webm',
    stack: ["Python"], libraries: ["OpenCLIP", "Hugging Face Transformers", "OpenCV", "NumPy", "Pillow"],
    frameworks: ["PyTorch", "Anomalib"], tools: ["RemoteCLIP", "OWLv2", "SAM 2", "AnomalyDINO"],
  },
]

export const experience = [
  {
    id: 'target', role: 'Front of Store Attendant', organization: 'Target Corporation',
    period: 'March 2023 – present', location: 'Oviedo, FL',
    description: 'I work with teammates and customers to resolve point-of-sale errors and keep checkout moving. I work 15 hours a week alongside a full-time computer science course load.',
  },
]

export const technicalStack = [
  { label: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'Java', 'C', 'C++', 'HTML/CSS'] },
  { label: 'Frameworks and libraries', items: ['PyTorch', 'Hugging Face Transformers', 'Anomalib', 'NumPy', 'OpenCV', 'MediaPipe', 'React', 'Node.js', 'Express'] },
  { label: 'Tools and environments', items: ['Git', 'GitHub Actions', 'Linux', 'MongoDB', 'SQLite', 'Postman', 'Python unittest', 'Vitest', 'Nginx', 'PM2'] },
]
