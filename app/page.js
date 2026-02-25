'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const timeline = [
  { id: 'isep', label: 'ISEP Paris', type: 'academic', start: 2016.75, end: 2021.5, color: '#3b82f6', top: true },
  { id: 'hwu', label: 'Heriot-Watt University', type: 'academic', start: 2018.0, end: 2018.5, color: '#ef4444', top: true, nested: true },
  { id: 'rmeu', label: 'Real Madrid EU', type: 'academic', start: 2024.75, end: 2025.5, color: '#e8e8e8', top: true },
  { id: 'kls', label: 'KLS', type: 'pro', start: 2020.08, end: 2020.5, color: '#eab308', top: false },
  { id: 'deloitte', label: 'Deloitte', type: 'pro', start: 2021.17, end: 2021.5, color: '#22c55e', top: false },
  { id: 'idoko', label: 'Idoko', type: 'pro', start: 2021.67, end: 2022.5, color: '#3b82f6', top: false },
  { id: 'solutec', label: 'Solutec', type: 'pro', start: 2022.58, end: 2024.5, color: '#ef4444', top: false },
  { id: 'cafpi', label: 'CAFPI', type: 'pro', start: 2022.67, end: 2023.5, color: '#f97316', top: false, nested: true },
  { id: 'cacib', label: 'CACIB', type: 'pro', start: 2023.42, end: 2024.08, color: '#22c55e', top: false, nested: true },
  { id: 'rm', label: 'Real Madrid', type: 'pro', start: 2024.75, end: 2025.33, color: '#e8e8e8', top: false },
  { id: 'botswana', label: 'Botswana FA', type: 'pro', start: 2025.42, end: 2025.58, color: '#38bdf8', top: false },
  { id: 'gc', label: 'Game Changers', type: 'pro', start: 2025.58, end: 2025.92, color: '#4ade80', top: false },
]

const START_YEAR = 2016
const END_YEAR = 2026
const TOTAL = END_YEAR - START_YEAR

function toPercent(val) {
  return ((val - START_YEAR) / TOTAL) * 100
}

function GanttBar({ item, hovered, onHover, onLeave }) {
  const left = toPercent(item.start)
  const width = toPercent(item.end) - left
  const isHovered = hovered === item.id
  return (
    <div
      onMouseEnter={() => onHover(item.id)}
      onMouseLeave={onLeave}
      style={{
        position: 'absolute',
        left: left + '%',
        width: width + '%',
        height: item.nested ? '8px' : '14px',
        top: item.nested ? '24px' : '13px',
        background: item.color,
        borderRadius: '2px',
        opacity: isHovered ? 1 : 0.7,
        cursor: 'default',
        transition: 'opacity 0.2s, transform 0.2s',
        transform: isHovered ? 'scaleY(1.3)' : 'scaleY(1)',
        transformOrigin: 'center',
        zIndex: item.nested ? 2 : 1,
      }}
    />
  )
}

export default function Home() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)
  const [hovered, setHovered] = useState(null)

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0
    const moveCursor = (e) => {
      mx = e.clientX; my = e.clientY
      if (cursorRef.current) {
        cursorRef.current.style.left = (mx - 4) + 'px'
        cursorRef.current.style.top = (my - 4) + 'px'
      }
    }
    const animateRing = () => {
      rx += (mx - rx - 18) * 0.12
      ry += (my - ry - 18) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px'
        ringRef.current.style.top = ry + 'px'
      }
      requestAnimationFrame(animateRing)
    }
    document.addEventListener('mousemove', moveCursor)
    animateRing()
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.1 })
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
    return () => document.removeEventListener('mousemove', moveCursor)
  }, [])

  const projects = [
    { id: 1, slug: 'game-model-valencia', category: 'Analyse Tactique', year: '2024', title: 'Game Model — Valencia CF', desc: "Proposition d'un nouveau game model complet pour le Valencia CF. Chaque phase de jeu (possession, défense, transitions et phases arrêtées) a été analysée et redéfinie en tenant compte du contexte sportif et institutionnel du club.", span: 2, tag: 'PDF', thumb: '/thumb-game-model.png' },
    { id: 2, slug: 'can-2025', category: 'Data Viz', year: '2025', title: 'Analyse CAN 2025', desc: "Dashboard interactif sur la formation des joueurs de la CAN 2025 — diaspora, académies, expatriation et profils des joueurs.", span: 1, tag: 'Tableau', thumb: '/thumb-can-2025.png' },
    { id: 3, slug: 'these', category: 'Recherche', year: '2024', title: 'Thèse — xAb Metric', desc: "Développement d'une métrique conceptuelle (xAb) pour optimiser la décision entre passe et conduite de balle en phase de build-up.", span: 1, tag: 'PDF', thumb: '/thumb-these.png' },
    { id: 4, slug: 'analyse-video-valencia', category: 'Scouting Vidéo', year: '2024', title: 'Pré-match — Valencia CF vs Real Sociedad', desc: "Analyse vidéo complète de la Real Sociedad en tant qu'analyste de Valencia CF. Chaque moment du jeu décortiqué.", span: 2, tag: 'PPT', thumb: '/thumb-analyse-video.png' },
    { id: 5, slug: 'microcycle-valencia', category: 'Planification', year: '2024', title: 'Microcycle — Valencia CF vs Leganés', desc: "Préparation complète d'une semaine de compétition : entraînements, récupération, séances vidéo, nutrition et logistique.", span: 1, tag: 'PDF', thumb: '/thumb-microcycle.png' },
    { id: 6, slug: 'training-nyrb', category: 'Méthodologie', year: '2024', title: 'Training Methodology — NY Red Bulls Academy', desc: "Observation et rapport complet sur la méthodologie d'entraînement de l'académie des New York Red Bulls.", span: 1, tag: 'PDF', thumb: '/thumb-training-nyrb.png' },
  ]

  const tickerItems = ['Analyse Tactique','Data Visualisation','Microcycle','Game Model','Training Methodology','Analyse Vidéo','Performance Analysis','Business Intelligence','Machine Learning','Research','xAb Metric']
  const hoveredItem = timeline.find(t => t.id === hovered)
  const years = Array.from({length: END_YEAR - START_YEAR + 1}, (_, i) => START_YEAR + i)

  return (
    <>
      <style>{`
        * { margin:0; padding:0; box-sizing:border-box; }
        body { background:#0a0a0a; color:#e8e8e8; font-family:'DM Mono',monospace; cursor:none; }
        a { color:inherit; }
        .cursor { position:fixed; width:8px; height:8px; background:#a855f7; border-radius:50%; pointer-events:none; z-index:9999; mix-blend-mode:difference; }
        .cursor-ring { position:fixed; width:36px; height:36px; border:1px solid rgba(168,85,247,0.4); border-radius:50%; pointer-events:none; z-index:9998; }
        nav { position:fixed; top:0; left:0; right:0; z-index:100; display:flex; align-items:center; justify-content:space-between; padding:24px 48px; background:linear-gradient(to bottom,rgba(10,10,10,0.95),transparent); }
        .nav-logo { font-family:'Bebas Neue',sans-serif; font-size:22px; letter-spacing:3px; text-decoration:none; }
        .nav-links { display:flex; gap:36px; list-style:none; }
        .nav-links a { font-family:'DM Mono',monospace; font-size:11px; letter-spacing:2px; text-transform:uppercase; color:#777; text-decoration:none; transition:color 0.2s; }
        .nav-links a:hover { color:#a855f7; }
        .hero { min-height:100vh; display:flex; align-items:flex-end; padding:0 48px 80px; position:relative; overflow:hidden; }
        .hero-bg { position:absolute; inset:0; background:radial-gradient(ellipse 60% 50% at 65% 40%, rgba(168,85,247,0.07) 0%, transparent 70%); }
        .pitch-bg { position:absolute; right:0; top:0; width:42%; height:100%; opacity:0.04; pointer-events:none; }
        .hero-inner { position:relative; z-index:2; width:100%; display:flex; align-items:flex-end; justify-content:space-between; gap:48px; }
        .hero-left { flex:1; }
        .hero-tag { font-family:'DM Mono',monospace; font-size:11px; letter-spacing:4px; text-transform:uppercase; color:#a855f7; margin-bottom:20px; opacity:0; animation:fadeUp 0.6s ease 0.2s forwards; }
        .hero-title { font-family:'Bebas Neue',sans-serif; font-size:clamp(80px,12vw,160px); line-height:0.9; letter-spacing:-1px; opacity:0; animation:fadeUp 0.7s ease 0.4s forwards; }
        .hero-desc { margin-top:40px; max-width:440px; color:#999; line-height:1.8; font-size:14px; opacity:0; animation:fadeUp 0.7s ease 0.7s forwards; }
        .hero-photo { position:relative; flex-shrink:0; opacity:0; animation:fadeUp 0.8s ease 0.5s forwards; }
        .photo-wrap { width:280px; height:380px; position:relative; overflow:hidden; border-radius:4px; }
        .photo-vignette { position:absolute; inset:0; z-index:2; pointer-events:none; background:radial-gradient(ellipse at center, transparent 40%, rgba(10,10,10,0.85) 100%), linear-gradient(to bottom, rgba(10,10,10,0.4) 0%, transparent 30%, transparent 60%, rgba(10,10,10,0.9) 100%), linear-gradient(to right, rgba(10,10,10,0.5) 0%, transparent 40%); }
        .photo-corner-tl { position:absolute; top:0; left:0; width:20px; height:20px; border-top:1px solid rgba(168,85,247,0.5); border-left:1px solid rgba(168,85,247,0.5); z-index:3; }
        .photo-corner-br { position:absolute; bottom:0; right:0; width:20px; height:20px; border-bottom:1px solid rgba(168,85,247,0.5); border-right:1px solid rgba(168,85,247,0.5); z-index:3; }
        .available-badge { position:absolute; bottom:16px; right:16px; z-index:10; border:1px solid rgba(168,85,247,0.3); padding:6px 12px; background:rgba(10,10,10,0.8); }
        .available-badge span { font-family:'DM Mono',monospace; font-size:9px; letter-spacing:2px; text-transform:uppercase; color:#a855f7; }
        .ticker { border-top:1px solid #1e1e1e; border-bottom:1px solid #1e1e1e; padding:16px 0; overflow:hidden; white-space:nowrap; }
        .ticker-inner { display:inline-flex; gap:60px; animation:ticker 30s linear infinite; }
        .ticker-item { font-family:'Bebas Neue',sans-serif; font-size:13px; letter-spacing:4px; text-transform:uppercase; color:#666; }
        .ticker-item .dot { color:rgba(168,85,247,0.5); }
        .section-label { font-family:'DM Mono',monospace; font-size:10px; letter-spacing:3px; text-transform:uppercase; color:#a855f7; margin-bottom:16px; }
        .section-title { font-family:'Bebas Neue',sans-serif; font-size:clamp(40px,6vw,80px); margin-top:8px; }
        .projects { padding:80px 48px; }
        .projects-header { margin-bottom:60px; }
        .grid { display:grid; grid-template-columns:repeat(3,1fr); gap:2px; }
        .card { background:#0d0d0d; border:1px solid #1a1a1a; transition:border-color 0.3s; text-decoration:none; display:block; }
        .card:hover { border-color:rgba(168,85,247,0.5); }
        .card.span2 { grid-column:span 2; }
        .card-thumb { height:180px; background:linear-gradient(135deg,#0f0a1a,#1a0f2e); position:relative; display:flex; align-items:center; justify-content:center; overflow:hidden; }
        .card.span2 .card-thumb { height:220px; }
        .card-thumb-img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:top; filter:brightness(0.6) saturate(0.8); transition:filter 0.3s; }
        .card:hover .card-thumb-img { filter:brightness(0.75) saturate(1); }
        .card-tag { position:absolute; top:14px; right:14px; font-family:'DM Mono',monospace; font-size:9px; letter-spacing:2px; text-transform:uppercase; padding:4px 10px; border:1px solid rgba(168,85,247,0.4); color:#a855f7; background:rgba(10,10,10,0.7); z-index:2; }
        .card-body { padding:28px; }
        .card-meta { display:flex; gap:16px; align-items:center; margin-bottom:12px; }
        .card-cat { font-family:'DM Mono',monospace; font-size:9px; letter-spacing:2px; text-transform:uppercase; color:#a855f7; }
        .card-year { font-family:'DM Mono',monospace; font-size:9px; color:#777; }
        .card-title { font-family:'Bebas Neue',sans-serif; font-size:24px; letter-spacing:0.5px; margin-bottom:10px; color:#e8e8e8; }
        .card-desc { font-size:13px; line-height:1.6; color:#888; }
        .card-arrow { margin-top:20px; font-family:'DM Mono',monospace; font-size:10px; letter-spacing:2px; text-transform:uppercase; color:#666; transition:all 0.2s; }
        .card:hover .card-arrow { color:#a855f7; }
        .about { padding:80px 48px; border-top:1px solid #1a1a1a; }
        .about-title { font-family:'Bebas Neue',sans-serif; font-size:clamp(36px,4vw,56px); line-height:1.1; margin-bottom:32px; margin-top:8px; }
        .about-text { color:#999; line-height:1.9; font-size:14px; margin-bottom:16px; max-width:860px; }
        .gantt-wrap { margin-top:56px; overflow-x:auto; padding-bottom:8px; }
        .gantt-inner { min-width:800px; }
        .gantt-legend { display:flex; gap:24px; margin-bottom:20px; flex-wrap:wrap; }
        .gantt-legend-item { display:flex; align-items:center; gap:8px; font-family:'DM Mono',monospace; font-size:10px; letter-spacing:1px; color:#777; }
        .gantt-legend-dot { width:10px; height:10px; border-radius:2px; }
        .gantt-labels { display:flex; justify-content:space-between; margin-bottom:6px; }
        .gantt-year { font-family:'DM Mono',monospace; font-size:9px; color:#555; letter-spacing:1px; }
        .gantt-row-label { font-family:'DM Mono',monospace; font-size:9px; letter-spacing:2px; text-transform:uppercase; color:#555; margin-bottom:4px; }
        .gantt-row { position:relative; height:44px; border-bottom:1px solid #1a1a1a; margin-bottom:16px; }
        .gantt-grid-line { position:absolute; top:0; bottom:0; width:1px; background:#1a1a1a; }
        .gantt-tooltip-inline { margin-top:16px; padding:10px 16px; background:#111; border:1px solid #2a2a2a; display:inline-block; min-width:200px; }
        .contact { padding:80px 48px 120px; border-top:1px solid #1a1a1a; text-align:center; }
        .contact-title { font-family:'Bebas Neue',sans-serif; font-size:clamp(60px,10vw,130px); line-height:0.9; margin-bottom:48px; }
        .contact-title .outline { -webkit-text-stroke:1px #1e1e1e; color:transparent; }
        .contact-links { display:flex; gap:16px; justify-content:center; flex-wrap:wrap; }
        .contact-btn { display:inline-block; padding:16px 40px; border:1px solid #a855f7; color:#a855f7; font-family:'DM Mono',monospace; font-size:12px; letter-spacing:3px; text-transform:uppercase; text-decoration:none; transition:all 0.25s; }
        .contact-btn:hover { background:#a855f7; color:#0a0a0a; }
        .contact-btn.secondary { border-color:#2a2a2a; color:#777; }
        .contact-btn.secondary:hover { border-color:#a855f7; color:#a855f7; background:transparent; }
        footer { border-top:1px solid #1a1a1a; padding:24px 48px; display:flex; justify-content:space-between; align-items:center; }
        footer p { font-family:'DM Mono',monospace; font-size:10px; letter-spacing:2px; text-transform:uppercase; color:#444; }
        .fade-in { opacity:0; transform:translateY(20px); transition:opacity 0.6s ease, transform 0.6s ease; }
        .fade-in.visible { opacity:1; transform:translateY(0); }
        @keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes ticker { from{transform:translateX(0)} to{transform:translateX(-50%)} }
      `}</style>

      <div ref={cursorRef} className="cursor" />
      <div ref={ringRef} className="cursor-ring" />

      <nav>
        <Link href="/" className="nav-logo">ND<span style={{color:'#a855f7'}}>.</span></Link>
        <ul className="nav-links">
          {['Projets', 'Parcours', 'Contact'].map(item => (
            <li key={item}><a href={`#${item.toLowerCase()}`}>{item}</a></li>
          ))}
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-bg" />
        <div className="pitch-bg">
          <svg viewBox="0 0 400 600" fill="none" width="100%" height="100%">
            <rect x="20" y="20" width="360" height="560" stroke="white" strokeWidth="2"/>
            <line x1="20" y1="300" x2="380" y2="300" stroke="white" strokeWidth="1.5"/>
            <circle cx="200" cy="300" r="60" stroke="white" strokeWidth="1.5"/>
            <rect x="100" y="20" width="200" height="90" stroke="white" strokeWidth="1.5"/>
            <rect x="100" y="490" width="200" height="90" stroke="white" strokeWidth="1.5"/>
            <rect x="150" y="20" width="100" height="40" stroke="white" strokeWidth="1.5"/>
            <rect x="150" y="540" width="100" height="40" stroke="white" strokeWidth="1.5"/>
          </svg>
        </div>
        <div className="hero-inner">
          <div className="hero-left">
            <p className="hero-tag">// Football Data Analyst</p>
            <h1 className="hero-title">
              <span style={{color:'#a855f7'}}>N</span>OURY<br/>
              <span style={{color:'#a855f7'}}>D</span>JEBLI
            </h1>
            <p className="hero-desc">
              Data Analyst alliant solide background technique et expérience concrète en football performance analysis. Je transforme la donnée en insights actionnables, avec une compréhension du jeu qui permet d'aller du traitement des données jusqu'aux décisions tactiques et à la préparation de la compétition.
            </p>
          </div>
          <div className="hero-photo">
            <div className="photo-wrap">
              <div className="photo-vignette" />
              <div className="photo-corner-tl" />
              <div className="photo-corner-br" />
              <Image src="/Portrait_Noury.jpeg" alt="Noury Djebli" fill style={{objectFit:'cover', objectPosition:'top', filter:'grayscale(15%) contrast(1.05)'}} priority />
            </div>
            <div className="available-badge"><span>Disponible</span></div>
          </div>
        </div>
      </section>

      <div className="ticker">
        <div className="ticker-inner">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="ticker-item">{item} <span className="dot">✦</span></span>
          ))}
        </div>
      </div>

      <section id="projets" className="projects fade-in">
        <div className="projects-header">
          <p className="section-label">// 01 — Travaux</p>
          <h2 className="section-title">Projets</h2>
        </div>
        <div className="grid">
          {projects.map(p => (
            <Link key={p.id} href={`/projects/${p.slug}`} className={`card ${p.span===2?'span2':''}`}>
              <div className="card-thumb">
                <span className="card-tag">{p.tag}</span>
                <img src={p.thumb} alt={p.title} className="card-thumb-img" />
              </div>
              <div className="card-body">
                <div className="card-meta">
                  <span className="card-cat">{p.category}</span>
                  <span className="card-year">{p.year}</span>
                </div>
                <div className="card-title">{p.title}</div>
                <div className="card-desc">{p.desc}</div>
                <div className="card-arrow">Voir le projet →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="parcours" className="about fade-in">
        <p className="section-label">// 02 — Parcours</p>
        <h2 className="about-title">De la donnée<br/>au terrain.</h2>
        <p className="about-text">
          Ingénieur diplômé de l'ISEP Paris, j'ai acquis 3 ans d'expérience professionnelle dans des rôles liés à la data au sein de différents secteurs avant de rejoindre le Master en Football Coaching & Management de l'Escuela Universitaria Real Madrid. Cette année de formation m'a permis de travailler sur des projets variés, game model, planification de microcycle, analyse vidéo, tout en suivant les Juvenil A d'Álvaro Arbeloa durant la saison 2024/25.
        </p>
        <p className="about-text">
          À l'issue du master, j'ai rejoint Alex Malete, sélectionneur du Botswana, comme coach assistant et analyste pour la CAN féminine au Maroc, où j'ai conçu le mésocycle de la compétition et participé à la conception des séances d'entraînement. Plus récemment chez Game Changers, j'ai travaillé sur des projets data et Fan Experience pour des clients comme la Saudi Pro League.
        </p>
        <p className="about-text">
          Ces expériences m'ont permis de construire un profil à la croisée de la data et du football, capable d'intervenir aussi bien sur des sujets techniques que sur des problématiques purement footballistiques. Ce qui me motive : transformer la donnée en décisions concrètes, qu'il s'agisse de préparer un match, d'identifier un profil ou d'optimiser une semaine d'entraînement.
        </p>

        <div className="gantt-wrap">
          <div className="gantt-inner">
            <div className="gantt-legend">
              <div className="gantt-legend-item"><div className="gantt-legend-dot" style={{background:'#3b82f6'}} /><span>Académique</span></div>
              <div className="gantt-legend-item"><div className="gantt-legend-dot" style={{background:'#777'}} /><span>Professionnel</span></div>
              <div className="gantt-legend-item"><div className="gantt-legend-dot" style={{background:'#1a1a1a', border:'1px solid #333', width:'8px', height:'8px'}} /><span>Mission / échange</span></div>
            </div>
            <div className="gantt-labels">
              {years.map(y => <span key={y} className="gantt-year">{y}</span>)}
            </div>
            <div className="gantt-row-label">Académique</div>
            <div className="gantt-row">
              {years.map(y => <div key={y} className="gantt-grid-line" style={{left: toPercent(y) + '%'}} />)}
              {timeline.filter(t => t.top).map(item => (
                <GanttBar key={item.id} item={item} hovered={hovered} onHover={setHovered} onLeave={() => setHovered(null)} />
              ))}
            </div>
            <div className="gantt-row-label">Professionnel</div>
            <div className="gantt-row">
              {years.map(y => <div key={y} className="gantt-grid-line" style={{left: toPercent(y) + '%'}} />)}
              {timeline.filter(t => !t.top).map(item => (
                <GanttBar key={item.id} item={item} hovered={hovered} onHover={setHovered} onLeave={() => setHovered(null)} />
              ))}
            </div>
            {hoveredItem && (
              <div className="gantt-tooltip-inline">
                <div style={{color: hoveredItem.color, fontSize:'12px', marginBottom:'4px', letterSpacing:'1px', fontFamily:"'DM Mono',monospace"}}>{hoveredItem.label}</div>
                <div style={{color:'#666', fontSize:'10px', letterSpacing:'1px', textTransform:'uppercase', fontFamily:"'DM Mono',monospace"}}>{hoveredItem.type === 'academic' ? 'Académique' : 'Professionnel'}{hoveredItem.nested ? ' — mission' : ''}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="contact" className="contact fade-in">
        <p className="section-label">// 03 — Contact</p>
        <h2 className="contact-title">
          <span className="outline">Travaillons</span><br/>Ensemble
        </h2>
        <div className="contact-links">
          <a href="mailto:n.djebli98@gmail.com" className="contact-btn">Envoyer un email</a>
          <a href="https://www.linkedin.com/in/noury-djebli" target="_blank" rel="noopener noreferrer" className="contact-btn secondary">LinkedIn →</a>
        </div>
      </section>

      <footer>
        <p>© 2025 — Noury Djebli</p>
        <p>Football Data Analyst</p>
      </footer>
    </>
  )
}
