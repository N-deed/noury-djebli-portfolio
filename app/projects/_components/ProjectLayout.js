'use client'

import Link from 'next/link'

const STYLES = `
  * { margin:0; padding:0; box-sizing:border-box; }
  body { background:#0a0a0a; color:#e8e8e8; font-family:'DM Mono',monospace; }
  a { color:inherit; }

  .proj-nav { position:fixed; top:0; left:0; right:0; z-index:100; display:flex; align-items:center; justify-content:space-between; padding:24px 48px; background:rgba(10,10,10,0.95); border-bottom:1px solid #1a1a1a; }
  .nav-logo { font-family:'Bebas Neue',sans-serif; font-size:22px; letter-spacing:3px; text-decoration:none; }
  .back-link { font-family:'DM Mono',monospace; font-size:11px; letter-spacing:2px; text-transform:uppercase; color:#555; text-decoration:none; transition:color 0.2s; display:flex; align-items:center; gap:8px; }
  .back-link:hover { color:#a855f7; }

  .proj-header { padding:140px 48px 60px; border-bottom:1px solid #1a1a1a; }
  .proj-meta { display:flex; gap:24px; align-items:center; margin-bottom:24px; }
  .proj-cat { font-family:'DM Mono',monospace; font-size:10px; letter-spacing:3px; text-transform:uppercase; color:#a855f7; }
  .proj-year { font-family:'DM Mono',monospace; font-size:10px; color:#444; }
  .proj-tag { font-family:'DM Mono',monospace; font-size:9px; letter-spacing:2px; text-transform:uppercase; padding:4px 10px; border:1px solid rgba(168,85,247,0.4); color:#a855f7; }
  .proj-title { font-family:'Bebas Neue',sans-serif; font-size:clamp(48px,7vw,100px); line-height:0.95; margin-bottom:32px; }
  .proj-desc { max-width:640px; color:#666; line-height:1.8; font-size:14px; }

  .proj-body { padding:60px 48px; }
  .proj-body h2 { font-family:'Bebas Neue',sans-serif; font-size:28px; margin-bottom:16px; margin-top:48px; }
  .proj-body p { color:#666; line-height:1.8; font-size:14px; margin-bottom:16px; }
  .proj-body ul { color:#666; line-height:1.8; font-size:14px; margin-bottom:16px; padding-left:20px; }
  .proj-body ul li { margin-bottom:8px; }
  .proj-body li::marker { color:#a855f7; }

  .embed-container { width:100%; aspect-ratio:16/9; border:1px solid #1a1a1a; margin:32px 0; background:#0d0d0d; overflow:hidden; position:relative; }
  .embed-container iframe { width:100%; height:100%; border:none; }
  .embed-label { font-family:'DM Mono',monospace; font-size:9px; letter-spacing:2px; text-transform:uppercase; color:#444; margin-bottom:8px; }

  .proj-footer { border-top:1px solid #1a1a1a; padding:48px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px; }
  .proj-nav-links { display:flex; gap:24px; }
  .proj-nav-btn { font-family:'DM Mono',monospace; font-size:11px; letter-spacing:2px; text-transform:uppercase; color:#555; text-decoration:none; border:1px solid #1e1e1e; padding:12px 24px; transition:all 0.2s; }
  .proj-nav-btn:hover { border-color:#a855f7; color:#a855f7; }
  .proj-nav-btn.primary { border-color:#a855f7; color:#a855f7; }
  .proj-nav-btn.primary:hover { background:#a855f7; color:#0a0a0a; }

  footer { border-top:1px solid #1a1a1a; padding:24px 48px; display:flex; justify-content:space-between; align-items:center; }
  footer p { font-family:'DM Mono',monospace; font-size:10px; letter-spacing:2px; text-transform:uppercase; color:#333; }

  @media (max-width: 768px) {
    .proj-nav, .proj-header, .proj-body, .proj-footer, footer { padding-left:24px; padding-right:24px; }
    .proj-header { padding-top:100px; }
  }
`

export default function ProjectLayout({ meta, embedSection, children, prevProject, nextProject }) {
  return (
    <>
      <style>{STYLES}</style>

      <nav className="proj-nav">
        <Link href="/" className="nav-logo">ND<span style={{color:'#a855f7'}}>.</span></Link>
        <Link href="/" className="back-link">← Retour aux projets</Link>
      </nav>

      <header className="proj-header">
        <div className="proj-meta">
          <span className="proj-cat">{meta.category}</span>
          <span className="proj-year">{meta.year}</span>
          <span className="proj-tag">{meta.tag}</span>
        </div>
        <h1 className="proj-title">{meta.title}</h1>
        <p className="proj-desc">{meta.desc}</p>
      </header>

      <div className="proj-body">
        {embedSection}
        {children}
      </div>

      <div className="proj-footer">
        <div className="proj-nav-links">
          {prevProject && (
            <Link href={`/projects/${prevProject.slug}`} className="proj-nav-btn">← {prevProject.title}</Link>
          )}
          {nextProject && (
            <Link href={`/projects/${nextProject.slug}`} className="proj-nav-btn">{nextProject.title} →</Link>
          )}
        </div>
        <Link href="/" className="proj-nav-btn primary">Voir tous les projets</Link>
      </div>

      <footer>
        <p>© 2025 — Noury Djebli</p>
        <p>Football Data Analyst</p>
      </footer>
    </>
  )
}
