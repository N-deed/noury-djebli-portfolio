'use client'

import Link from 'next/link'

const STYLES = `
  * { margin:0; padding:0; box-sizing:border-box; }
  body { background:#0a0a0a; color:#e8e8e8; font-family:'DM Mono',monospace; }
  a { color:inherit; }

  .proj-nav { position:fixed; top:0; left:0; right:0; z-index:100; display:flex; align-items:center; justify-content:space-between; padding:24px 48px; background:rgba(10,10,10,0.95); border-bottom:1px solid #1a1a1a; }
  .nav-logo { font-family:'Bebas Neue',sans-serif; font-size:22px; letter-spacing:3px; text-decoration:none; }
  .back-link { font-family:'DM Mono',monospace; font-size:11px; letter-spacing:2px; text-transform:uppercase; color:#aaa; text-decoration:none; transition:color 0.2s; display:flex; align-items:center; gap:8px; }
  .back-link:hover { color:#a855f7; }

  .proj-header { padding:140px 48px 48px; border-bottom:1px solid #1a1a1a; }
  .proj-meta { display:flex; gap:16px; align-items:center; margin-bottom:24px; flex-wrap:wrap; }
  .proj-cat { font-family:'DM Mono',monospace; font-size:10px; letter-spacing:3px; text-transform:uppercase; color:#a855f7; }
  .proj-year { font-family:'DM Mono',monospace; font-size:10px; color:#aaa; }
  .proj-tag { font-family:'DM Mono',monospace; font-size:9px; letter-spacing:2px; text-transform:uppercase; padding:3px 10px; border:1px solid rgba(168,85,247,0.4); color:#a855f7; background:rgba(168,85,247,0.05); border-radius:2px; }
  .proj-title { font-family:'Bebas Neue',sans-serif; font-size:clamp(48px,7vw,100px); line-height:0.95; letter-spacing:2px; margin-bottom:0; white-space:pre-line; }

  /* Texte contexte dans le header */
  .proj-context { margin-top:32px; max-width:680px; color:#aaa; line-height:1.8; font-size:14px; text-align:justify; }

  /* Boutons ancres */
  .proj-anchors { display:flex; gap:12px; margin-top:32px; flex-wrap:wrap; }
  .proj-anchor-btn { font-family:'DM Mono',monospace; font-size:10px; letter-spacing:2px; text-transform:uppercase; color:#aaa; border:1px solid #2a2a2a; padding:10px 20px; text-decoration:none; transition:all 0.2s; border-radius:2px; cursor:pointer; background:transparent; }
  .proj-anchor-btn:hover { border-color:#a855f7; color:#a855f7; }

  .proj-body { padding:40px 48px 60px; }
  .proj-body h2 { font-family:'Bebas Neue',sans-serif; font-size:28px; letter-spacing:2px; margin-bottom:20px; margin-top:56px; color:#e8e8e8; scroll-margin-top:90px; }
  .proj-body h2:first-child { margin-top:0; }
  .proj-body p { color:#aaa; line-height:1.8; font-size:14px; margin-bottom:16px; max-width:75%; text-align:justify; }
  .proj-body ul { color:#aaa; line-height:1.8; font-size:14px; margin-bottom:16px; list-style:none; padding:0; max-width:75%; }
  .proj-body ul li { margin-bottom:10px; padding-left:18px; position:relative; text-align:justify; }
  .proj-body ul li::before { content:'▸'; position:absolute; left:0; color:#a855f7; font-size:10px; top:3px; }

  .embed-wrap { margin:24px 0 40px; }
  .embed-container { width:100%; aspect-ratio:16/10; border:1px solid #1e1e1e; background:#0d0d0d; overflow:hidden; border-radius:4px; }
  .embed-container iframe { width:100%; height:100%; border:none; }
  .embed-label { display:none; }

  .proj-footer { border-top:1px solid #1a1a1a; padding:48px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px; }
  .proj-nav-links { display:flex; gap:24px; }
  .proj-nav-btn { font-family:'DM Mono',monospace; font-size:11px; letter-spacing:2px; text-transform:uppercase; color:#aaa; text-decoration:none; border:1px solid #2a2a2a; padding:12px 24px; transition:all 0.2s; border-radius:2px; }
  .proj-nav-btn:hover { border-color:#a855f7; color:#a855f7; }
  .proj-nav-btn.primary { border-color:#a855f7; color:#a855f7; }
  .proj-nav-btn.primary:hover { background:#a855f7; color:#0a0a0a; }

  footer { border-top:1px solid #1a1a1a; padding:24px 48px; display:flex; justify-content:space-between; align-items:center; }
  footer p { font-family:'DM Mono',monospace; font-size:10px; letter-spacing:2px; text-transform:uppercase; color:#555; }

  @media (max-width: 768px) {
    .proj-nav { padding:20px 24px; }
    .proj-header { padding:100px 24px 40px; }
    .proj-body { padding:40px 24px; }
    .proj-body p, .proj-body ul { max-width:100%; }
    .proj-footer { padding:32px 24px; flex-direction:column; align-items:flex-start; }
    footer { padding:20px 24px; flex-direction:column; gap:8px; }
    .proj-anchors { gap:8px; }
  }
`

export default function ProjectLayout({ meta, embedSection, children, prevProject, nextProject, contextText, anchorSections }) {
  const tags = meta.tags || (meta.tag ? [meta.tag] : [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <style>{STYLES}</style>

      <nav className="proj-nav">
        <Link href="/" className="nav-logo">ND<span style={{color:'#a855f7'}}>.</span></Link>
        <Link href="/#projets" className="back-link">← Retour aux projets</Link>
      </nav>

      <header className="proj-header">
        <div className="proj-meta">
          <span className="proj-cat">{meta.category}</span>
          <span className="proj-year">{meta.year}</span>
          {tags.map(tag => <span key={tag} className="proj-tag">{tag}</span>)}
        </div>
        <h1 className="proj-title">{meta.title}</h1>

        {/* Contexte juste sous le titre */}
        {contextText && <p className="proj-context">{contextText}</p>}

        {/* Boutons ancres vers les sections sous le PDF */}
        {anchorSections && anchorSections.length > 0 && (
          <div className="proj-anchors">
            {anchorSections.map(s => (
              <button key={s.id} className="proj-anchor-btn" onClick={() => scrollTo(s.id)}>
                {s.label} ↓
              </button>
            ))}
          </div>
        )}
      </header>

      <div className="proj-body">
        {/* Embed en premier */}
        {embedSection && <div className="embed-wrap">{embedSection}</div>}
        {/* Sections de contenu en dessous */}
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
        <Link href="/#projets" className="proj-nav-btn primary">Voir tous les projets</Link>
      </div>

      <footer>
        <p>© 2026 — Noury Djebli</p>
        <p>Football Data Analyst</p>
      </footer>
    </>
  )
}
