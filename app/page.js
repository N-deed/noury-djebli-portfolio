'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
    {
      id: 1,
      slug: 'game-model-valencia',
      category: 'Analyse Tactique',
      year: '2024',
      title: 'Game Model — Valencia CF',
      desc: 'Proposition d\'un nouveau game model pour Valencia CF : attacking phase, defensive phase, transitions et set pieces.',
      span: 2,
      tag: 'PDF',
      thumb: '/thumb-game-model.png'
    },
    {
      id: 2,
      slug: 'can-2025',
      category: 'Data Viz',
      year: '2025',
      title: 'Analyse CAN 2025',
      desc: 'Dashboard interactif sur la formation des joueurs de la CAN 2025 — diaspora, académies, expatriation. Commandé par la FRMF.',
      span: 1,
      tag: 'Tableau',
      thumb: '/thumb-can-2025.png'
    },
    {
      id: 3,
      slug: 'these',
      category: 'Recherche',
      year: '2024',
      title: 'Thèse — xAb Metric',
      desc: 'Développement d\'une métrique conceptuelle (xAb) pour optimiser la décision entre passe et conduite de balle en phase de build-up.',
      span: 1,
      tag: 'PDF',
      thumb: '/thumb-these.png'
    },
    {
      id: 4,
      slug: 'analyse-video-valencia',
      category: 'Scouting Vidéo',
      year: '2024',
      title: 'Pré-match — Valencia CF vs Real Sociedad',
      desc: 'Analyse vidéo complète de la Real Sociedad en tant qu\'analyste de Valencia CF. Chaque moment du jeu décortiqué.',
      span: 2,
      tag: 'PPT',
      thumb: '/thumb-analyse-video.png'
    },
    {
      id: 5,
      slug: 'microcycle-valencia',
      category: 'Planification',
      year: '2024',
      title: 'Microcycle — Valencia CF vs Leganés',
      desc: 'Préparation complète d\'une semaine de compétition : entraînements, récupération, séances vidéo, nutrition et logistique.',
      span: 1,
      tag: 'PDF',
      thumb: '/thumb-microcycle.png'
    },
    {
      id: 6,
      slug: 'training-nyrb',
      category: 'Méthodologie',
      year: '2024',
      title: 'Training Methodology — NY Red Bulls Academy',
      desc: 'Observation et rapport complet sur la méthodologie d\'entraînement de l\'académie des New York Red Bulls.',
      span: 1,
      tag: 'PDF',
      thumb: '/thumb-training-nyrb.png'
    },
  ]

  return (
    <>
      <style>{`
        * { margin:0; padding:0; box-sizing:border-box; }
        body { background:#0a0a0a; color:#e8e8e8; font-family:'DM Mono',monospace; cursor:none; }
        a { color:inherit; }

        .cursor { position:fixed; width:8px; height:8px; background:#a855f7; border-radius:50%; pointer-events:none; z-index:9999; mix-blend-mode:difference; }
        .cursor-ring { position:fixed; width:36px; height:36px; border:1px solid rgba(168,85,247,0.4); border-radius:50%; pointer-events:none; z-index:9998; transition:width 0.2s, height 0.2s; }

        nav { position:fixed; top:0; left:0; right:0; z-index:100; display:flex; align-items:center; justify-content:space-between; padding:24px 48px; background:linear-gradient(to bottom,rgba(10,10,10,0.95),transparent); }
        .nav-logo { font-family:'Bebas Neue',sans-serif; font-size:22px; letter-spacing:3px; text-decoration:none; }
        .nav-links { display:flex; gap:36px; list-style:none; }
        .nav-links a { font-family:'DM Mono',monospace; font-size:11px; letter-spacing:2px; text-transform:uppercase; color:#555; text-decoration:none; transition:color 0.2s; }
        .nav-links a:hover { color:#a855f7; }

        /* HERO */
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

        /* PHOTO avec vignette */
        .hero-photo { position:relative; flex-shrink:0; opacity:0; animation:fadeUp 0.8s ease 0.5s forwards; }
        .photo-wrap { width:280px; height:380px; position:relative; overflow:hidden; border-radius:4px; }
        .photo-vignette {
          position:absolute; inset:0; z-index:2; pointer-events:none;
          background:
            radial-gradient(ellipse at center, transparent 40%, rgba(10,10,10,0.85) 100%),
            linear-gradient(to bottom, rgba(10,10,10,0.4) 0%, transparent 30%, transparent 60%, rgba(10,10,10,0.9) 100%),
            linear-gradient(to right, rgba(10,10,10,0.5) 0%, transparent 40%);
        }
        .photo-corner-tl { position:absolute; top:0; left:0; width:20px; height:20px; border-top:1px solid rgba(168,85,247,0.5); border-left:1px solid rgba(168,85,247,0.5); z-index:3; }
        .photo-corner-br { position:absolute; bottom:0; right:0; width:20px; height:20px; border-bottom:1px solid rgba(168,85,247,0.5); border-right:1px solid rgba(168,85,247,0.5); z-index:3; }
        .available-badge { position:absolute; bottom:16px; right:16px; z-index:10; border:1px solid rgba(168,85,247,0.3); padding:6px 12px; background:rgba(10,10,10,0.8); }
        .available-badge span { font-family:'DM Mono',monospace; font-size:9px; letter-spacing:2px; text-transform:uppercase; color:#a855f7; }

        /* TICKER */
        .ticker { border-top:1px solid #1e1e1e; border-bottom:1px solid #1e1e1e; padding:16px 0; overflow:hidden; white-space:nowrap; }
        .ticker-inner { display:inline-flex; gap:60px; animation:ticker 25s linear infinite; }
        .ticker-item { font-family:'Bebas Neue',sans-serif; font-size:13px; letter-spacing:4px; text-transform:uppercase; color:#444; }
        .ticker-item .dot { color:rgba(168,85,247,0.5); }

        /* SECTIONS */
        .section-label { font-family:'DM Mono',monospace; font-size:10px; letter-spacing:3px; text-transform:uppercase; color:#a855f7; margin-bottom:16px; }
        .section-title { font-family:'Bebas Neue',sans-serif; font-size:clamp(40px,6vw,80px); margin-top:8px; }

        /* PROJECTS GRID */
        .projects { padding:80px 48px; }
        .projects-header { display:flex; justify-content:space-between; align-items:baseline; margin-bottom:60px; }
        .view-all { font-family:'DM Mono',monospace; font-size:11px; letter-spacing:2px; text-transform:uppercase; color:#555; text-decoration:none; border-bottom:1px solid #1e1e1e; padding-bottom:2px; transition:all 0.2s; }
        .view-all:hover { color:#a855f7; border-color:#a855f7; }
        .grid { display:grid; grid-template-columns:repeat(3,1fr); gap:2px; }
        .card { background:#0d0d0d; border:1px solid #1a1a1a; transition:border-color 0.3s; text-decoration:none; display:block; }
        .card:hover { border-color:rgba(168,85,247,0.5); }
        .card.span2 { grid-column:span 2; }
        .card-thumb { height:180px; background:linear-gradient(135deg,#0f0a1a,#1a0f2e); position:relative; display:flex; align-items:center; justify-content:center; overflow:hidden; }
        .card.span2 .card-thumb { height:220px; }
        .card-thumb svg { opacity:0.06; }
        .card-thumb-img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:top; filter:brightness(0.45) saturate(0.7); transition:filter 0.3s; }
        .card:hover .card-thumb-img { filter:brightness(0.6) saturate(1); }
        .card-tag { position:absolute; top:14px; right:14px; font-family:'DM Mono',monospace; font-size:9px; letter-spacing:2px; text-transform:uppercase; padding:4px 10px; border:1px solid rgba(168,85,247,0.4); color:#a855f7; background:rgba(10,10,10,0.7); z-index:2; }
        .card-body { padding:28px; }
        .card-meta { display:flex; gap:16px; align-items:center; margin-bottom:12px; }
        .card-cat { font-family:'DM Mono',monospace; font-size:9px; letter-spacing:2px; text-transform:uppercase; color:#a855f7; }
        .card-year { font-family:'DM Mono',monospace; font-size:9px; color:#444; }
        .card-title { font-family:'Bebas Neue',sans-serif; font-size:24px; letter-spacing:0.5px; margin-bottom:10px; color:#e8e8e8; }
        .card-desc { font-size:13px; line-height:1.6; color:#555; }
        .card-arrow { margin-top:20px; font-family:'DM Mono',monospace; font-size:10px; letter-spacing:2px; text-transform:uppercase; color:#444; transition:all 0.2s; }
        .card:hover .card-arrow { color:#a855f7; }

        /* ABOUT */
        .about { padding:80px 48px; border-top:1px solid #1a1a1a; }
        .about-grid { display:grid; grid-template-columns:1fr 1fr; gap:96px; align-items:center; }
        .about-title { font-family:'Bebas Neue',sans-serif; font-size:clamp(36px,4vw,56px); line-height:1.1; margin-bottom:24px; margin-top:8px; }
        .about-text { color:#555; line-height:1.8; font-size:14px; margin-bottom:16px; }
        .stats-grid { display:grid; grid-template-columns:1fr 1fr; gap:2px; }
        .stat-card { background:#0d0d0d; border:1px solid #1a1a1a; padding:32px; }
        .stat-number { font-family:'Bebas Neue',sans-serif; font-size:52px; color:#a855f7; line-height:1; margin-bottom:8px; }
        .stat-label { font-family:'DM Mono',monospace; font-size:10px; letter-spacing:2px; text-transform:uppercase; color:#444; }

        /* CONTACT */
        .contact { padding:80px 48px 120px; border-top:1px solid #1a1a1a; text-align:center; }
        .contact-title { font-family:'Bebas Neue',sans-serif; font-size:clamp(60px,10vw,130px); line-height:0.9; margin-bottom:48px; }
        .contact-title .outline { -webkit-text-stroke:1px #1e1e1e; color:transparent; }
        .contact-links { display:flex; gap:16px; justify-content:center; flex-wrap:wrap; }
        .contact-btn { display:inline-block; padding:16px 40px; border:1px solid #a855f7; color:#a855f7; font-family:'DM Mono',monospace; font-size:12px; letter-spacing:3px; text-transform:uppercase; text-decoration:none; transition:all 0.25s; }
        .contact-btn:hover { background:#a855f7; color:#0a0a0a; }
        .contact-btn.secondary { border-color:#1e1e1e; color:#555; }
        .contact-btn.secondary:hover { border-color:#a855f7; color:#a855f7; background:transparent; }

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
        <Link href="/" className="nav-logo">ND<span style={{color:'#a855f7'}}>.</span></Link>
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
            <p className="hero-tag">// Football Data Analyst</p>
            <h1 className="hero-title">NOURY<br/><span className="accent">DJ</span>EBLI</h1>
            <p className="hero-desc">
              Analyste football formé au Real Madrid. Je transforme les données et la vidéo en insights tactiques actionnables — du build-up phase à la planification de microcycle.
            </p>
            <div className="hero-skills">
              {['Python', 'SQL', 'Tableau', 'Wyscout', 'StatsBomb', 'Analyse Vidéo'].map(s => (
                <span key={s} className="skill-tag">{s}</span>
              ))}
            </div>
          </div>
          <div className="hero-photo">
            <div className="photo-wrap">
              <div className="photo-vignette" />
              <div className="photo-corner-tl" />
              <div className="photo-corner-br" />
              <Image
                src="/Portrait_Noury.jpeg"
                alt="Noury Djebli"
                fill
                style={{objectFit:'cover', objectPosition:'top', filter:'grayscale(15%) contrast(1.05)'}}
                priority
              />
            </div>
            <div className="available-badge"><span>Disponible</span></div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker">
        <div className="ticker-inner">
          {['Analyse Tactique','Data Visualisation','Scouting Vidéo','Expected Goals','Microcycle','Performance Analysis','xAb Metric','Game Model',
            'Analyse Tactique','Data Visualisation','Scouting Vidéo','Expected Goals','Microcycle','Performance Analysis','xAb Metric','Game Model'].map((item,i) => (
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

      {/* ABOUT */}
      <section id="parcours" className="about fade-in">
        <div className="about-grid">
          <div>
            <p className="section-label">// 02 — Parcours</p>
            <h2 className="about-title">Analyste,<br/>pas spectateur.</h2>
            <p className="about-text">
              Diplômé d'un Master en Football Analytics au Real Madrid (Valdebebas), j'ai travaillé sur des projets pour Valencia CF, NY Red Bulls et la FRMF. Ma thèse, présentée devant Álvaro Arbeloa, porte sur une nouvelle métrique de décision en build-up phase.
            </p>
            <p className="about-text">
              Mon approche combine analyse vidéo, data science et compréhension tactique profonde — pour ne rien laisser au hasard.
            </p>
          </div>
          <div className="stats-grid">
            {[
              {n:'6', l:'Projets académiques'},
              {n:'3', l:'Clubs analysés'},
              {n:'1', l:'Thèse publiée'},
              {n:'RM', l:'Formé à Valdebebas'}
            ].map(s => (
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
