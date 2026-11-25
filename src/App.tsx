import { useEffect, useState } from 'react'
import { experience, profile, projects, technicalStack, type Project } from './content'
import { Icon, type IconName } from './Icons'

function IconLink({ href, label, icon, className = '' }: {
  href: string; label: string; icon: IconName; className?: string
}) {
  return <a href={href} className={'control ' + className} aria-label={label} title={label}><Icon name={icon} /></a>
}

const sections = [
  ['projects', 'Projects', 'grid'], ['experience', 'Experience', 'case'],
  ['stack', 'Technical stack', 'layers'], ['contact', 'Contact', 'mail'],
] as const

function Header() {
  const [theme, setTheme] = useState(document.documentElement.dataset.theme || 'light')
  function switchTheme() {
    const next = theme === 'light' ? 'dark' : 'light'
    document.documentElement.dataset.theme = next
    setTheme(next)
    try { localStorage.setItem('portfolio-theme', next) } catch { /* Keep the choice for this page. */ }
  }
  useEffect(() => {
    const sync = () => {
      try {
        const stored = localStorage.getItem('portfolio-theme')
        if (stored === 'light' || stored === 'dark') {
          document.documentElement.dataset.theme = stored
          setTheme(stored)
        }
      } catch { /* Storage can be unavailable in private browsing. */ }
    }
    window.addEventListener('pageshow', sync)
    window.addEventListener('storage', sync)
    return () => { window.removeEventListener('pageshow', sync); window.removeEventListener('storage', sync) }
  }, [])
  return <header className="mast"><div className="mast-inner">
    <IconLink href="/" label="Portfolio home" icon="terminal" className="brand" />
    <nav aria-label="Portfolio sections">{sections.map(([id, label, icon]) =>
      <IconLink key={id} href={'/#' + id} label={label} icon={icon} />)}</nav>
    <button className="control theme" onClick={switchTheme} aria-label="Dark mode" aria-pressed={theme === 'dark'} title="Switch theme"><Icon name={theme === 'dark' ? 'sun' : 'moon'} /></button>
  </div></header>
}

function Lines({ text, heading = false }: { text?: string; heading?: boolean }) {
  if (text) return <span>{text}</span>
  return <span aria-hidden="true" className={heading ? 'placeholder heading-line' : 'placeholder copy-lines'}><i />{!heading && <><i /><i /></>}</span>
}

function SectionTitle({ label, icon, visible = false }: { label: string; icon: IconName; visible?: boolean }) {
  return <h2 className="section-title"><Icon name={icon} />{visible ? label : <><span className="sr">{label}</span><Lines heading /></>}<span className="rule" /></h2>
}

const techIcons: IconName[] = ['code', 'database', 'terminal', 'braces', 'chip', 'layers']

function Tags({ items, count = 3 }: { items: string[]; count?: number }) {
  return <ul className="tags">{items.length ? items.map(item => <li key={item}>{item}</li>) :
    techIcons.slice(0, count).map(icon => <li key={icon} aria-hidden="true"><Icon name={icon} /></li>)}</ul>
}

function Hero() {
  return <section className="hero" aria-label="Profile">
    <div className="intro"><div className="avatar-row"><img className="avatar" src={profile.photo} alt="Placeholder profile portrait" /><span className="avatar-rule" /></div>
      <h1>{!profile.heading && <span className="sr">{profile.name}</span>}<Lines heading text={profile.heading} /></h1>
      <p><Lines text={profile.summary} /></p>
      <div className="socials"><IconLink href={profile.github} label="GitHub" icon="github" />
        <IconLink href={profile.linkedin} label="LinkedIn" icon="linkedin" />
        <IconLink href={profile.resume} label="Résumé PDF" icon="file" />
        <IconLink href={'mailto:' + profile.email} label="Email" icon="mail" /></div>
    </div><div className="hero-art"><img src="/media/knot.png" alt="" width="820" height="560" /></div>
  </section>
}

function Projects() {
  return <section id="projects"><SectionTitle visible label="Projects" icon="grid" />
    <div className="project-grid">{projects.map(project => <a className="project-card" key={project.slug}
      href={'/?project=' + encodeURIComponent(project.slug)} aria-label={'View ' + project.title}>
      <img className="cover" src={project.image} alt={project.imageAlt} width="600" height="360" loading="lazy" />
      <div className="card-body"><div><h3>{project.title}</h3><p>{project.summary}</p></div>
        <span className="open"><Icon name="arrow" /></span></div>
    </a>)}</div>
  </section>
}

function Contact() {
  const [status, setStatus] = useState<'idle' | 'copied' | 'manual'>('idle')
  useEffect(() => {
    if (status !== 'copied') return
    const timer = window.setTimeout(() => setStatus('idle'), 2400)
    return () => window.clearTimeout(timer)
  }, [status])
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setStatus('copied')
    } catch { setStatus('manual') }
  }
  return <section id="contact" className="contact"><div><SectionTitle label="Contact me" icon="mail" />
    <a className="email-link" href={'mailto:' + profile.email} aria-label={'Email ' + profile.name}><Lines heading /><Icon name="arrow" /></a></div>
    <button className="control copy" title="Copy email address" aria-label="Copy email address" onClick={copyEmail}><Icon name={status === 'copied' ? 'check' : 'copy'} /></button>
    <span role="status" className="sr">{status === 'copied' ? 'Email copied' : status === 'manual' ? 'Select the address to copy it manually' : ''}</span>
    {status === 'manual' && <input readOnly value={profile.email} aria-label="Email address to copy" onFocus={e => e.target.select()} />}
  </section>
}

function Home() {
  return <><Hero /><Projects /><div className="lower-grid">
    <section id="experience"><SectionTitle label="Experience" icon="case" /><div className="experience">{experience.map(item =>
      <article key={item.id}><span className="timeline-dot" /><div><h3><Lines heading text={item.role} /></h3><p><Lines text={item.description} /></p></div></article>)}</div></section>
    <section id="stack"><SectionTitle label="Technical stack" icon="layers" /><Tags items={technicalStack} count={6} /></section>
  </div><Contact /></>
}

function ProjectPage({ project }: { project: Project }) {
  return <article className="detail"><div className="detail-head">
    <IconLink href="/#projects" label="Back to projects" icon="back" />
    <h1>{project.title}</h1></div>
    <video controls playsInline preload="none" poster={project.image} src={project.demo} aria-label={project.title + ' demo video'} />
    <section><SectionTitle visible label="Description" icon="file" />{project.description.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</section>
    <div className="detail-grid">{([
      ['Tech stack', 'layers', project.stack], ['Libraries', 'library', project.libraries],
      ['Frameworks', 'frame', project.frameworks], ['Tools', 'tools', project.tools],
    ] as const).filter(([, , items]) => items.length > 0).map(([label, icon, items]) => <section key={label}><SectionTitle visible label={label} icon={icon} /><Tags items={items} /></section>)}</div>
  </article>
}

export default function App() {
  const slug = new URLSearchParams(window.location.search).get('project')
  const project = projects.find(item => item.slug === slug)
  useEffect(() => {
    document.title = project ? project.title + ' | Portfolio' : profile.name + ' | Portfolio'
    if (!project && window.location.hash) document.getElementById(window.location.hash.slice(1))?.scrollIntoView()
  }, [project])
  return <><a href="#main" className="skip" aria-label="Skip to main content"><Icon name="back" /></a>
    <Header /><main id="main" tabIndex={-1}>{project ? <ProjectPage project={project} /> : <Home />}</main></>
}
