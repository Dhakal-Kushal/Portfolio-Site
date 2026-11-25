export const profile = {
  name: 'Kushal Dhakal',
  heading: '',
  summary: '',
  photo: '/media/portrait.png',
  github: 'https://github.com/Dhakal-Kushal',
  linkedin: 'https://www.linkedin.com/in/kushal-dhakal-127772227/',
  resume: '/resume.pdf',
  email: 'Kushald592@gmail.com',
}

export interface Project {
  slug: string
  label: string
  title: string
  summary: string
  description: string
  image: string
  imageAlt: string
  demo: string
  stack: string[]
  libraries: string[]
  frameworks: string[]
  tools: string[]
}

const placeholder = {
  title: '', summary: '', description: '',
  demo: '/media/demo.webm',
  stack: [], libraries: [], frameworks: [], tools: [],
}

export const projects: Project[] = [
  {
    ...placeholder,
    slug: 'productivity-suite', label: 'Productivity suite',
    image: '/media/study-1.png', imageAlt: 'Isometric study of stacked cubes',
  },
  {
    ...placeholder,
    slug: 'ar-visualization', label: 'AR visualization',
    image: '/media/study-2.png', imageAlt: 'Three-dimensional wireframe terrain',
  },
  {
    ...placeholder,
    slug: 'note-detector', label: 'Note detector',
    image: '/media/study-3.png', imageAlt: 'Peach audio waveform on black',
  },
  {
    ...placeholder,
    slug: 'hotkey-monitor', label: 'Hotkey monitor',
    image: '/media/study-4.png', imageAlt: 'Twisted wireframe ring',
  },
]

export const experience = [
  { id: 'first', role: '', description: '' },
  { id: 'second', role: '', description: '' },
]

export const technicalStack: string[] = []
