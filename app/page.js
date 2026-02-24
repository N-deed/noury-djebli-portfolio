'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Home() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0

    const moveCursor = (e) => {
      mx = e.clientX
      my = e.clientY
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
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      })
    }, { threshold: 0.1 })
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))

    return () => document.removeEventListener('mousemove', moveCursor)
  }, [])

  const projects = [
    { id: 1, category: 'Analyse Tactique', year: '2024', title: 'Pressing & Bloc Bas — Étude Comparative L1', desc: 'Analyse des structures défensives de 8 clubs de Ligue 1. Métriques de pression, zones de récupération, et corrélation avec les points au classement.', span: 2 },
    { id: 2, category: 'Scouting', year: '2024', title: 'Profil Milieu Box-to-Box', desc: 'Rapport de scouting data-driven pour identifier des profils à fort potentiel sous-évalués.', span: 1 },
    { id: 3, category: 'Set Pieces', year: '2023', title: 'Coups de Pied Arrêtés Offensifs', desc: 'Modélisation des routines sur phases arrêtées et impact sur le xG.', span: 1 },
    { id: 4, category: 'Data Viz', year: '2023', title: 'Dashboard Performance — Saison 2022/23', desc: "Tableau de bord retraçant l'évolution des KPIs d'une équipe sur 38 journées.", span: 2 },
  ]

  return (
    <>
      <style>{`
        .cursor { position:fixed; width:8px; height:8px; background:#a855f7; border-radius:50%; pointer-events:none; z-index:9999; mix-blend-mode:difference; }
        .cursor-ring { position:fixed; width:36px; height:36px; border:1px solid rgba(168,85,247,0.4); border-radius:50%; pointer-events:none; z-index:9998; transition:width 0.2s, height 0.2s; }
        nav { position:fixed; top:0; left:0; right:0; z-index:100; display:flex; align-items:center; justify-content:space-between; padding:24px 48px; background:linear-gradient(to bottom,rgba(10,10,10,0.95),transparent); }
        .nav-logo { font-family:'Bebas Neue',sans-serif; font-size:22px; letter-spacing:3px; }
        .nav-links { display:flex; gap:36px; list-style:none; }
        .nav-links a { font-family:'DM Mono',monospace; font-size:11px; letter-spacing:2px; text-transform:uppercase; color:#555; text-decoration:none; transition:color 0.2s; }
        .nav-links a:hover { color:#a855f7; }
        .hero { min-height:100vh; display:flex; align-items:flex-end; padding:0 48px 80px; position:relative; overflow:hidden; }
        .hero-bg { position:absolute; inset:0; background:radial-gradient(ellipse 60% 50% at 65% 40%, rgba(168,85,247,0.07) 0%, transparent 70%); }
        .pitch-bg { position:absolute; right:0; top:0; width:42%; height:100%; opacity:0.04; pointer-events:none; }
        .hero-inner { position:relative; z-index:2; width:100%; display:flex; align-items:flex-end; justify-content:space-between; gap:48px; }
        .hero-left { flex:1; }
        .hero-tag { font-family:'DM Mono',monospace; font-size:11px; letter-spacing:4px; text-transform:uppercase; color:#a855f7; margin-bottom:20px; opacity:0; animation:fadeUp 0.6s ease 0.2s forwards; }
        .hero-title { font-family:'Bebas Neue',sans-serif; font-size:clamp(80px,12vw,160px); line-height:0.9; letter-spacing:-1px; opacity:0; animation:fadeUp 0.7s ease 0.4s forwards; }
        .hero-title .accent { color:#a855f7; }
        .hero-desc { margin-top:40px; max-width:380px; color:#666; line-height:1.8; font-size:14px; opacity:0; animation:fadeUp 0.7s ease 0.7s forwards; }
        .hero-skills { display:flex; gap:8px; flex-wrap:wrap; margin-top:24px; opacity:0; animation:fadeUp 0.7s ease 0.9s forwards; }
        .skill-tag { padding:6px 14px; border:1px solid #1e1e1e; font-family:'DM Mono',monospace; font-size:10px; letter-spacing:1px; color:#555; transition:all 0.2s; cursor:default; }
        .skill-tag:hover { border-color:#a855f7; color:#a855f7; }
        .hero-photo { position:relative; flex-shrink:0; opacity:0; animation:fadeUp 0.8s ease 0.5s forwards; }
        .photo-wrap { width:280px; height:380px; position:relative; overflow:hidden; border-radius:16px; }
        .photo-overlay-b { position:absolute; inset:0; background:radial-gradient(ellipse at center, transparent 30%, #0a0a0a 80%); z-index:2; pointer-events:none; }
        .photo-overlay-l { display:none; }
        .available-badge { position:absolute; bottom:16px; right:16px; z-index:10; border:1px solid rgba(168,85,247,0.3); padding:6px 12px; }
        .available-badge span { font-family:'DM Mono',monospace; font-size:9px; letter-spacing:2px; text-transform:uppercase; color:#a855f7; }
        .ticker { border-top:1px solid #1e1e1e; border-bottom:1px solid #1e1e1e; padding:16px 0; overflow:hidden; white-space:nowrap; }
        .ticker-inner { display:inline-flex; gap:60px; animation:ticker 25s linear infinite; }
        .ticker-item { font-family:'Bebas Neue',sans-serif; font-size:13px; letter-spacing:4px; text-transform:uppercase; color:#444; }
        .ticker-item .dot { color:rgba(168,85,247,0.5); }
        .section-label { font-family:'DM Mono',monospace; font-size:10px; letter-spacing:3px; text-transform:uppercase; color:#a855f7; margin-bottom:16px; }
        .projects { padding:80px 48px; }
        .projects-header { display:flex; justify-content:space-between; align-items:baseline; margin-bottom:60px; }
        .section-title { font-family:'Bebas Neue',sans-serif; font-size:clamp(40px,6vw,80px); margin-top:8px; }
        .view-all { font-family:'DM Mono',monospace; font-size:11px; letter-spacing:2px; text-transform:uppercase; color:#555; text-decoration:none; border-bottom:1px solid #1e1e1e; padding-bottom:2px; transition:all 0.2s; }
        .view-all:hover { color:#a855f7; border-color:#a855f7; }
        .grid { display:grid; grid-template-columns:repeat(3,1fr); gap:2px; }
        .card { background:#0d0d0d; border:1px solid #1a1a1a; transition:border-color 0.3s; cursor:pointer; }
        .card:hover { border-color:rgba(168,85,247,0.5); }
        .card.span2 { grid-column:span 2; }
        .card-thumb { height:180px; background:linear-gradient(135deg,#0f0a1a,#1a0f2e); position:relative; display:flex; align-items:center; justify-content:center; overflow:hidden; }
        .card.span2 .card-thumb { height:220px; }
        .card-thumb svg { opacity:0.06; }
        .card-body { padding:28px; }
        .card-meta { display:flex; gap:16px; align-items:center; margin-bottom:12px; }
        .card-cat { font-family:'DM Mono',monospace; font-size:9px; letter-spacing:2px; text-transform:uppercase; color:#a855f7; }
        .card-year { font-family:'DM Mono',monospace; font-size:9px; color:#444; }
        .card-title { font-family:'Bebas Neue',sans-serif; font-size:24px; letter-spacing:0.5px; margin-bottom:10px; }
        .card-desc { font-size:13px; line-height:1.6; color:#555; }
        .card-arrow { margin-top:20px; font-family:'DM Mono',monospace; font-size:10px; letter-spacing:2px; text-transform:uppercase; color:#444; transition:all 0.2s; }
        .card:hover .card-arrow { color:#a855f7; }
        .about { padding:80px 48px; border-top:1px solid #1a1a1a; }
        .about-grid { display:grid; grid-template-columns:1fr 1fr; gap:96px; align-items:center; }
        .about-title { font-family:'Bebas Neue',sans-serif; font-size:clamp(36px,4vw,56px); line-height:1.1; margin-bottom:24px; margin-top:8px; }
        .about-text { color:#555; line-height:1.8; font-size:14px; margin-bottom:16px; }
        .stats-grid { display:grid; grid-template-columns:1fr 1fr; gap:2px; }
        .stat-card { background:#0d0d0d; border:1px solid #1a1a1a; padding:32px; }
        .stat-number { font-family:'Bebas Neue',sans-serif; font-size:52px; color:#a855f7; line-height:1; margin-bottom:8px; }
        .stat-label { font-family:'DM Mono',monospace; font-size:10px; letter-spacing:2px; text-transform:uppercase; color:#444; }
        .contact { padding:80px 48px 120px; border-top:1px solid #1a1a1a; text-align:center; }
        .contact-title { font-family:'Bebas Neue',sans-serif; font-size:clamp(60px,10vw,130px); line-height:0.9; margin-bottom:48px; }
        .contact-title .outline { -webkit-text-stroke:1px #1e1e1e; color:transparent; }
        .contact-btn { display:inline-block; padding:16px 40px; border:1px solid #a855f7; color:#a855f7; font-family:'DM Mono',monospace; font-size:12px; letter-spacing:3px; text-transform:uppercase; text-decoration:none; transition:all 0.25s; }
        .contact-btn:hover { background:#a855f7; color:#0a0a0a; }
        footer { border-top:1px solid #1a1a1a; padding:24px 48px; display:flex; justify-content:space-between; align-items:center; }
        footer p { font-family:'DM Mono',monospace; font-size:10px; letter-spacing:2px; text-transform:uppercase; color:#333; }
        .fade-in { opacity:0; transform:translateY(20px); transition:opacity 0.6s ease, transform 0.6s ease; }
        .fade-in.visible { opacity:1; transform:translateY(0); }
        @keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes ticker { from{transform:translateX(0)} to{transform:translateX(-50%)} }
      `}</style>

      <div ref={cursorRef} className="cursor" />
      <div ref={ringRef} className="cursor-ring" />

      {/* NAV */}
      <nav>
        <div className="nav-logo">ND<span style={{color:'#a855f7'}}>.</span></div>
        <ul className="nav-links">
          {['Projets', 'Parcours', 'Contact'].map(item => (
            <li key={item}><a href={`#${item.toLowerCase()}`}>{item}</a></li>
          ))}
        </ul>
      </nav>

      {/* HERO */}
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
            <p className="hero-tag">// Data Analyst Football</p>
            <h1 className="hero-title">NOURY<br/><span className="accent">DJ</span>EBLI</h1>
            <p className="hero-desc">Je transforme les données du football en insights tactiques actionnables. Chaque chiffre raconte une histoire — je suis là pour la raconter.</p>
            <div className="hero-skills">
              {['Python', 'SQL', 'Wyscout', 'StatsBomb', 'Tableau'].map(s => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>
          </div>
          <div className="hero-photo">
            <div className="photo-wrap">
              <div className="photo-overlay-b" />
              <div className="photo-overlay-l" />
              <Image src="/portrait.jpg" alt="Noury Djebli" fill style={{objectFit:'cover', objectPosition:'top', filter:'grayscale(20%)'}} priority />
            </div>
            <div className="available-badge"><span>Disponible</span></div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker">
        <div className="ticker-inner">
          {['Analyse Tactique','Data Visualisation','Scouting','Expected Goals','Set Pieces','Performance Analysis',
            'Analyse Tactique','Data Visualisation','Scouting','Expected Goals','Set Pieces','Performance Analysis'].map((item,i) => (
            <span key={i} className="ticker-item">{item} <span className="dot">✦</span></span>
          ))}
        </div>
      </div>

      {/* PROJECTS */}
      <section id="projets" className="projects fade-in">
        <div className="projects-header">
          <div>
            <p className="section-label">// 01 — Travaux</p>
            <h2 className="section-title">Projets</h2>
          </div>
          <a href="#" className="view-all">Voir tout →</a>
        </div>
        <div className="grid">
          {projects.map(p => (
            <div key={p.id} className={`card ${p.span===2?'span2':''}`}>
              <div className="card-thumb">
                <svg viewBox="0 0 200 120" fill="none" width="120">
                  <rect x="5" y="5" width="190" height="110" stroke="white" strokeWidth="1"/>
                  <line x1="100" y1="5" x2="100" y2="115" stroke="white" strokeWidth="0.8"/>
                  <circle cx="100" cy="60" r="22" stroke="white" strokeWidth="0.8"/>
                </svg>
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
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="parcours" className="about fade-in">
        <div className="about-grid">
          <div>
            <p className="section-label">// 02 — Parcours</p>
            <h2 className="about-title">Analyste,<br/>pas spectateur.</h2>
            <p className="about-text">Passionné par l'intersection entre le football et la data, j'analyse les performances et les dynamiques tactiques pour aider les clubs à prendre de meilleures décisions.</p>
            <p className="about-text">Mon approche combine rigueur analytique et compréhension tactique profonde du jeu.</p>
          </div>
          <div className="stats-grid">
            {[{n:'12',l:'Projets réalisés'},{n:'4',l:'Clubs partenaires'},{n:'3+',l:"Ans d'expérience"},{n:'L1',l:'Ligues analysées'}].map(s => (
              <div key={s.l} className="stat-card">
                <div className="stat-number">{s.n}</div>
                <div className="stat-label">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact fade-in">
        <p className="section-label">// 03 — Contact</p>
        <h2 className="contact-title">
          <span className="outline">Travaillons</span><br/>Ensemble
        </h2>
        <a href="mailto:noury.djebli@email.com" className="contact-btn">Prendre contact</a>
      </section>

      <footer>
        <p>© 2025 — Noury Djebli</p>
        <p>Data Analyst Football</p>
      </footer>
    </>
  )
}