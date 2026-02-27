'use client'

import Link from 'next/link'

export default function AnalyseVideoValencia() {
  const driveFileId = '11QDr55bYZ5aI4-AEoxbtGFNf1SakP0yJ'
  const embedUrl = `https://drive.google.com/file/d/${driveFileId}/preview`

  return (
    <>
      <style>{`
        * { margin:0; padding:0; box-sizing:border-box; }
        body { background:#0a0a0a; color:#e8e8e8; font-family:'DM Mono',monospace; }
        a { color:inherit; text-decoration:none; }
        nav { position:fixed; top:0; left:0; right:0; z-index:100; display:flex; align-items:center; justify-content:space-between; padding:24px 48px; background:linear-gradient(to bottom,rgba(10,10,10,0.95),transparent); }
        .nav-logo { font-family:'Bebas Neue',sans-serif; font-size:22px; letter-spacing:3px; }
        .back-btn { font-family:'DM Mono',monospace; font-size:11px; letter-spacing:2px; text-transform:uppercase; color:#aaa; transition:color 0.2s; }
        .back-btn:hover { color:#a855f7; }
        .hero { padding:120px 48px 48px; }
        .label { font-family:'DM Mono',monospace; font-size:12px; letter-spacing:3px; text-transform:uppercase; color:#a855f7; margin-bottom:16px; }
        h1 { font-family:'Bebas Neue',sans-serif; font-size:clamp(48px,7vw,96px); letter-spacing:2px; line-height:0.95; margin-bottom:24px; }
        .meta { display:flex; gap:24px; flex-wrap:wrap; margin-bottom:40px; }
        .meta-item { font-family:'DM Mono',monospace; font-size:11px; letter-spacing:2px; text-transform:uppercase; color:#666; }
        .meta-item span { color:#aaa; }
        .desc { max-width:700px; color:#aaa; line-height:1.8; font-size:14px; margin-bottom:48px; }
        .embed-wrap { width:100%; aspect-ratio:16/11; border:1px solid #1e1e1e; border-radius:4px; overflow:hidden; background:#0d0d0d; }
        .embed-wrap iframe { width:100%; height:100%; border:none; }
        .embed-note { margin-top:16px; font-family:'DM Mono',monospace; font-size:10px; color:#555; letter-spacing:1px; }
        .embed-note a { color:#a855f7; }
        footer { border-top:1px solid #1a1a1a; padding:24px 48px; display:flex; justify-content:space-between; align-items:center; margin-top:80px; }
        footer p { font-family:'DM Mono',monospace; font-size:10px; letter-spacing:2px; text-transform:uppercase; color:#555; }
        @media (max-width:768px) {
          nav { padding:20px 24px; }
          .hero { padding:90px 24px 32px; }
          footer { padding:20px 24px; flex-direction:column; gap:8px; }
        }
      `}</style>

      <nav>
        <Link href="/" className="nav-logo">ND<span style={{color:'#a855f7'}}>.</span></Link>
        <Link href="/#projets" className="back-btn">← Retour</Link>
      </nav>

      <div className="hero">
        <p className="label">// Scouting Vidéo — 2025</p>
        <h1>Pré-match<br/>Valencia CF<br/>vs Real Sociedad</h1>
        <div className="meta">
          <div className="meta-item">Type <span>Analyse Vidéo</span></div>
          <div className="meta-item">Contexte <span>Master Real Madrid EU</span></div>
          <div className="meta-item">Format <span>PDF interactif</span></div>
        </div>
        <p className="desc">
          Analyse vidéo complète de la Real Sociedad réalisée dans le cadre du rôle d'analyste de Valencia CF. Chaque phase de jeu est décortiquée — organisation défensive, principes offensifs, transitions et phases arrêtées. Le document contient des liens cliquables renvoyant directement vers les séquences vidéo correspondantes.
        </p>

        <div className="embed-wrap">
          <iframe
            src={embedUrl}
            allow="autoplay"
            title="Analyse Vidéo — Valencia CF vs Real Sociedad"
          />
        </div>
        <p className="embed-note">
          Document non affiché ?{' '}
          <a href={`https://drive.google.com/file/d/${driveFileId}/view`} target="_blank" rel="noopener noreferrer">
            Ouvrir dans Google Drive →
          </a>
        </p>
      </div>

      <footer>
        <p>© 2026 — Noury Djebli</p>
        <p>Football Data Analyst</p>
      </footer>
    </>
  )
}
