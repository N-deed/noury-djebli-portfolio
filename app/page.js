'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const timeline = [
  {
    id: 'isep', label: 'ISEP Paris', type: 'academic', start: 2016.75, end: 2021.5, color: '#3b82f6', top: true,
    subtitle: 'Ingénieur en Business Intelligence (M. Eng.)',
    period: '09/16 – 07/21',
    bullets: [
      'Cours fondamentaux : Mathématiques appliquées, Physique & mécanique, Informatique, Machine Learning, Big Data, Data Mining, Data Visualization, Cloud Computing, Intelligence artificielle, Gestion de projet, Cybersécurité, Traitement du signal.',
      'Expérience internationale : Semestre à l\'étranger à Heriot-Watt University, Édimbourg (2018).',
    ]
  },
  {
    id: 'hwu', label: 'Heriot-Watt University', type: 'academic', start: 2018.0, end: 2018.42, color: '#ef4444', top: true, nested: true,
    subtitle: 'Semestre d\'échange',
    period: '01/18 – 05/18',
    bullets: [
      'Semestre d\'échange à Édimbourg dans le cadre du cursus ingénieur de l\'ISEP Paris.',
    ]
  },
  {
    id: 'rmeu', label: 'Real Madrid EU', type: 'academic', start: 2024.75, end: 2025.5, color: '#e8e8e8', top: true,
    subtitle: 'Master en Football Coaching et Management',
    period: '09/24 – 07/25',
    bullets: [
      'Cours fondamentaux : Méthodologie d\'entraînement, Staff technique : sciences et nouvelles technologies, Développement des talents, Management de club, etc.',
      'Certification : AI & Big Data for Sport & Management [10/10].',
      'Thèse : "Improving Decision Making between Passing and Carrying the ball during the Build-Up Phase Using an Action score (xAb)" – [9.7/10].',
    ]
  },
  {
    id: 'kls', label: 'Crédit Agricole Lending Services (KLS)', type: 'pro', start: 2020.08, end: 2020.5, color: '#eab308', top: false,
    subtitle: 'Data Analyst (stagiaire)',
    period: '02/20 – 06/20',
    bullets: [
      'Création de dashboards automatisés avec Power BI pour aligner les équipes produit et tech sur le suivi en temps réel des performances.',
      'Développement de pipelines d\'automatisation avec VBA et Cypress (debugging), réduisant la charge manuelle et augmentant la fiabilité.',
    ]
  },
  {
    id: 'deloitte', label: 'Deloitte', type: 'pro', start: 2021.17, end: 2021.5, color: '#22c55e', top: false,
    subtitle: 'Consultant Transaction Services (stagiaire)',
    period: '03/21 – 06/21',
    bullets: [
      'Réalisation d\'analyses financières de PME marocaines pour évaluer leur éligibilité aux prêts à 0 % d\'intérêt dans le cadre du programme national de relance post-COVID.',
      'Nettoyage, structuration et gestion des données financières et opérationnelles fournies par le Groupe ALSA pour soutenir les consultants seniors lors du processus de M&A.',
    ]
  },
  {
    id: 'idoko', label: 'Idoko', type: 'pro', start: 2021.67, end: 2022.5, color: '#3b82f6', top: false,
    subtitle: 'Data Analyst',
    period: '09/21 – 06/22',
    bullets: [
      'Conception et déploiement de l\'infrastructure data de l\'entreprise, avec migration de données non structurées vers une base MySQL.',
      'Développement de tableaux de bord Power BI pour fournir aux décideurs des données à jour sur les situations sensibles clients.',
    ]
  },
  {
    id: 'solutec', label: 'Solutec', type: 'pro', start: 2022.58, end: 2024.5, color: '#ef4444', top: false,
    subtitle: 'Data Consultant',
    period: '08/22 – 06/24',
    bullets: [
      'Consultant Data déployé sur deux missions : Data Engineer chez CAFPI et Data Scientist chez CACIB.',
    ]
  },
  {
    id: 'cafpi', label: 'CAFPI', type: 'pro', start: 2022.67, end: 2023.42, color: '#f97316', top: false, nested: true,
    subtitle: 'Data Engineer (via Solutec)',
    period: '09/22 – 06/23',
    bullets: [
      'Migration et optimisation des pipelines ETL de SQL Server vers Microsoft Azure (Data Factory, Databricks, Blob Storage), avec amélioration des performances et réduction des coûts.',
      'Automatisation des workflows avec des outils CI/CD (Azure DevOps) et développement de scripts Python et flux Power Automate pour l\'extraction et le traitement de données open source.',
    ]
  },
  {
    id: 'cacib', label: 'CACIB', type: 'pro', start: 2023.5, end: 2024.08, color: '#22c55e', top: false, nested: true,
    subtitle: 'Data Scientist (via Solutec)',
    period: '06/23 – 02/24',
    bullets: [
      'Développement de modèles de machine learning pour la prévision de flux de trésorerie à court terme et la détection d\'anomalies dans des séries temporelles transactionnelles.',
      'Application de techniques de clustering pour la segmentation d\'entités et l\'identification de patterns comportementaux.',
    ]
  },
  {
    id: 'rm', label: 'Real Madrid (Juvenil A)', type: 'pro', start: 2024.75, end: 2025.33, color: '#e8e8e8', top: false,
    subtitle: 'Academy Analyst Trainee',
    period: '10/24 – 05/25',
    bullets: [
      'Contribution à l\'analyse d\'avant-match par l\'analyse vidéo des adversaires et l\'exploitation de données de tracking et contextuelles.',
      'Immersion au sein du Juvenil A (U19) et observation des équipes Castilla et académie féminine, avec exposition aux méthodologies d\'entraînement espagnoles et aux processus de préparation des matchs.',
    ]
  },
  {
    id: 'botswana', label: 'Botswana FA', type: 'pro', start: 2025.42, end: 2025.58, color: '#38bdf8', top: false,
    subtitle: 'Coach Assistant & Analyst',
    period: '06/25 – 07/25',
    bullets: [
      'Collaboration avec le Head Coach (Alex Malete) sur la conception des microcycles durant la CAN féminine, afin d\'équilibrer la charge physique et mentale des joueuses.',
      'Conception de séances tactiques pour la préparation des matchs.',
    ]
  },
  {
    id: 'gc', label: 'Game Changers', type: 'pro', start: 2025.58, end: 2025.92, color: '#4ade80', top: false,
    subtitle: 'Sports Data Analyst',
    period: '07/25 – 12/25',
    bullets: [
      'Développement d\'une plateforme d\'IA agentique visant à analyser et prédire les comportements et les niveaux d\'engagement des fans.',
      'Création de tableaux de bord Power BI et Looker Studio pour le suivi de l\'engagement des fans, de la billetterie et du merchandising.',
      'Réalisation d\'audits de données et missions de conseil sur la Fan Experience, avec identification des gaps et recommandations d\'amélioration via la solution FACT.',
    ]
  },
]

const START_YEAR = 2016
const END_YEAR = 2026
const TOTAL = END_YEAR - START_YEAR

function toPercent(val) {
  return ((val - START_YEAR) / TOTAL) * 100
}

function GanttBar({ item, active, onInteract }) {
  const left = toPercent(item.start)
  const width = toPercent(item.end) - left
  return (
    <div
      className="gantt-bar"
      onMouseEnter={() => onInteract(item.id, 'enter')}
      onMouseLeave={() => onInteract(item.id, 'leave')}
      onTouchEnd={(e) => { e.preventDefault(); onInteract(item.id, 'tap') }}
      style={{
        position: 'absolute',
        left: left + '%',
        width: width + '%',
        height: item.nested ? '8px' : '14px',
        top: item.nested ? '24px' : '13px',
        background: item.color,
        borderRadius: '2px',
        opacity: active ? 1 : 0.75,
        cursor: 'pointer',
        transition: 'opacity 0.2s, transform 0.2s',
        transform: active ? 'scaleY(1.3)' : 'scaleY(1)',
        transformOrigin: 'center',
        zIndex: item.nested ? 2 : 1,
        WebkitTapHighlightColor: 'transparent',
      }}
    />
  )
}

function ContactBtn({ label, detail, href }) {
  const [showDetail, setShowDetail] = useState(false)
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      onMouseEnter={() => setShowDetail(true)}
      onMouseLeave={() => setShowDetail(false)}
      style={{
        display: 'inline-block',
        padding: '16px 40px',
        border: `1px solid ${showDetail ? '#a855f7' : '#333'}`,
        color: showDetail ? '#a855f7' : '#aaa',
        fontFamily: "'DM Mono',monospace",
        fontSize: '12px',
        letterSpacing: '3px',
        textTransform: 'uppercase',
        textDecoration: 'none',
        transition: 'all 0.25s',
        minWidth: '200px',
        textAlign: 'center',
        background: 'transparent',
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      {showDetail && detail
        ? <span style={{color:'#e8e8e8', letterSpacing:'1px', fontSize:'11px'}}>{detail}</span>
        : label}
    </a>
  )
}

export default function Home() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)
  const [ganttActive, setGanttActive] = useState(null)
  const [expanded, setExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const handleOutsideTouch = useCallback((e) => {
    if (!e.target.closest('.gantt-bar')) setGanttActive(null)
  }, [])

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
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
    document.addEventListener('touchstart', handleOutsideTouch)
    animateRing()
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.1 })
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))
    return () => {
      document.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('touchstart', handleOutsideTouch)
      window.removeEventListener('resize', checkMobile)
    }
  }, [handleOutsideTouch])

  const handleGanttInteract = (id, type) => {
    if (type === 'enter') setGanttActive(id)
    else if (type === 'leave') setGanttActive(null)
    else if (type === 'tap') setGanttActive(prev => prev === id ? null : id)
  }

  const projects = [
    { id: 1, slug: 'can-2025', category: 'Data Viz', year: '2026', title: 'Analyse CAN 2025', desc: "Dashboard interactif sur la formation des joueurs de la CAN 2025 — diaspora, académies, expatriation et profils des joueurs.", span: 2, tags: ['PDF', 'Tableau'], thumb: '/thumb-can-2025.png' },
    { id: 2, slug: 'game-model-valencia', category: 'Analyse Tactique', year: '2024', title: 'Game Model — Valencia CF', desc: "Proposition d'un nouveau game model complet pour le Valencia CF. Chaque phase de jeu analysée et redéfinie en tenant compte du contexte sportif et institutionnel du club.", span: 1, tags: ['PDF'], thumb: '/thumb-game-model.png' },
    { id: 3, slug: 'these', category: 'Recherche', year: '2025', title: 'Thèse — xAb Metric', desc: "Développement d'une métrique conceptuelle (xAb) pour optimiser la décision entre passe et conduite de balle en phase de build-up.", span: 1, tags: ['PDF'], thumb: '/thumb-these.png' },
    { id: 4, slug: 'analyse-video-valencia', category: 'Scouting Vidéo', year: '2025', title: 'Pré-match — Valencia CF vs Real Sociedad', desc: "Analyse vidéo complète de la Real Sociedad en tant qu'analyste de Valencia CF. Chaque moment du jeu décortiqué.", span: 2, tags: ['PPTX'], thumb: '/thumb-analyse-video.png' },
    { id: 5, slug: 'microcycle-valencia', category: 'Planification', year: '2025', title: 'Microcycle — Valencia CF vs Leganés', desc: "Préparation complète d'une semaine de compétition : entraînements, récupération, séances vidéo, nutrition et logistique.", span: 1, tags: ['PDF'], thumb: '/thumb-microcycle.png' },
    { id: 6, slug: 'training-nyrb', category: 'Méthodologie', year: '2025', title: 'Training Methodology — NY Red Bulls Academy', desc: "Observation et rapport complet sur la méthodologie d'entraînement de l'académie des New York Red Bulls.", span: 1, tags: ['PDF'], thumb: '/thumb-training-nyrb.png' },
  ]

  const tickerItems = ['Analyse Tactique','Data Visualisation','Microcycle','Game Model','Training Methodology','Analyse Vidéo','Performance Analysis','Business Intelligence','Machine Learning','Research','xAb Metric']
  const activeItem = timeline.find(t => t.id === ganttActive)
  const years = Array.from({length: END_YEAR - START_YEAR + 1}, (_, i) => START_YEAR + i)

  const para1 = "Ingénieur diplômé de l'ISEP Paris, j'ai développé une solide capacité à structurer, analyser et transformer la donnée en éléments exploitables pour la prise de décision au cours de trois années d'expérience professionnelle dans des rôles liés à la data dans différents secteurs, avant de décider de l'appliquer au football de haut niveau en intégrant le Master en Football Coaching & Management de l'Escuela Universitaria Real Madrid."
  const para2 = "Cette formation m'a permis de travailler sur différents projets, tels que l'élaboration de game models, la planification de microcycles, l'analyse vidéo et la réalisation d'une thèse, tout en évoluant dans un environnement exigeant. J'ai notamment suivi l'équipe Real Madrid Juvenil A dirigée par Álvaro Arbeloa durant la saison 2024/25, en contribuant à l'analyse de l'adversaire lors de la préparation de certaines rencontres."
  const para3 = "À l'issue du master, j'ai rejoint Alex Malete, sélectionneur du Botswana, en tant que coach assistant et analyste pour la CAN féminine organisée au Maroc. Dans ce cadre, j'ai participé à la conception du mésocycle de la compétition, à la préparation tactique et à l'élaboration des séances d'entraînement, en lien direct avec le staff et les joueuses."
  const para4 = "Plus récemment, chez Game Changers, j'ai travaillé sur des projets data et fan experience pour des acteurs majeurs du football, dont la Saudi Pro League, ce qui m'a permis de combiner analyse de données, conseil stratégique et compréhension des enjeux opérationnels des organisations sportives."
  const para5 = "L'ensemble de ces expériences m'a permis de construire un profil hybride, à l'interface entre data et football, capable d'intervenir aussi bien sur des problématiques analytiques avancées que sur des sujets directement liés au terrain. Ce qui me motive : transformer la donnée en décisions concrètes, qu'il s'agisse de préparer un match, d'identifier un profil joueur ou d'optimiser une semaine d'entraînement."

  const visibleParas = isMobile ? [para1] : [para1, para2]
  const hiddenParas  = isMobile ? [para2, para3, para4, para5] : [para3, para4, para5]

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
        .nav-links a { font-family:'DM Mono',monospace; font-size:12px; letter-spacing:2px; text-transform:uppercase; color:#aaa; text-decoration:none; transition:color 0.2s; }
        .nav-links a:hover { color:#a855f7; }

        .hero { min-height:100vh; display:flex; flex-direction:column; justify-content:flex-end; padding:0 48px 0; position:relative; overflow:hidden; }
        .hero-bg { position:absolute; inset:0; background:radial-gradient(ellipse 60% 50% at 65% 40%, rgba(168,85,247,0.07) 0%, transparent 70%); }
        .pitch-bg { position:absolute; right:0; top:0; width:42%; height:100%; opacity:0.04; pointer-events:none; }
        .hero-inner { position:relative; z-index:2; width:100%; display:flex; align-items:flex-end; justify-content:space-between; gap:48px; padding-bottom:40px; }
        .hero-left { flex:1; }
        .hero-tag { font-family:'DM Mono',monospace; font-size:14px; letter-spacing:4px; text-transform:uppercase; color:#a855f7; margin-bottom:20px; opacity:0; animation:fadeUp 0.6s ease 0.2s forwards; }
        .hero-title { font-family:'Bebas Neue',sans-serif; font-size:clamp(80px,12vw,160px); line-height:0.9; letter-spacing:2px; opacity:0; animation:fadeUp 0.7s ease 0.4s forwards; }
        .hero-desc { margin-top:40px; max-width:440px; color:#aaa; line-height:1.8; font-size:14px; opacity:0; animation:fadeUp 0.7s ease 0.7s forwards; text-align:justify; }
        .hero-photo { position:relative; flex-shrink:0; opacity:0; animation:fadeUp 0.8s ease 0.5s forwards; }
        .photo-wrap { width:280px; height:360px; position:relative; overflow:hidden; border-radius:4px; }
        .photo-vignette { position:absolute; inset:0; z-index:2; pointer-events:none; background:radial-gradient(ellipse at center, transparent 40%, rgba(10,10,10,0.85) 100%), linear-gradient(to bottom, rgba(10,10,10,0.4) 0%, transparent 30%, transparent 60%, rgba(10,10,10,0.9) 100%), linear-gradient(to right, rgba(10,10,10,0.5) 0%, transparent 40%); }
        .photo-corner-tl { position:absolute; top:0; left:0; width:20px; height:20px; border-top:1px solid rgba(168,85,247,0.5); border-left:1px solid rgba(168,85,247,0.5); z-index:3; }
        .photo-corner-br { position:absolute; bottom:0; right:0; width:20px; height:20px; border-bottom:1px solid rgba(168,85,247,0.5); border-right:1px solid rgba(168,85,247,0.5); z-index:3; }

        .ticker { border-top:1px solid #1e1e1e; border-bottom:1px solid #1e1e1e; padding:16px 0; overflow:hidden; white-space:nowrap; position:relative; z-index:2; background:#0a0a0a; }
        .ticker-inner { display:inline-flex; gap:60px; animation:ticker 30s linear infinite; }
        .ticker-item { font-family:'Bebas Neue',sans-serif; font-size:13px; letter-spacing:4px; text-transform:uppercase; color:#aaa; }
        .ticker-item .dot { color:rgba(168,85,247,0.6); }

        .section-label { font-family:'DM Mono',monospace; font-size:14px; letter-spacing:3px; text-transform:uppercase; color:#a855f7; margin-bottom:16px; }
        .section-title { font-family:'Bebas Neue',sans-serif; font-size:clamp(56px,7vw,96px); margin-top:8px; letter-spacing:2px; }

        .projects { padding:80px 48px; }
        .projects-header { margin-bottom:60px; }
        .grid { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; }
        .card { background:#0d0d0d; border:1px solid #2a2a2a; transition:border-color 0.3s, box-shadow 0.3s; text-decoration:none; display:block; border-radius:4px; overflow:hidden; }
        .card:hover { border-color:rgba(168,85,247,0.6); box-shadow:0 0 20px rgba(168,85,247,0.08); }
        .card.span2 { grid-column:span 2; }
        .card-thumb { height:180px; background:linear-gradient(135deg,#0f0a1a,#1a0f2e); position:relative; overflow:hidden; }
        .card.span2 .card-thumb { height:220px; }
        .card-thumb-img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:top; filter:brightness(0.85) saturate(0.85); transition:filter 0.3s; }
        .card:hover .card-thumb-img { filter:brightness(1) saturate(1.1); }
        .card-body { padding:28px; }
        .card-meta { display:flex; gap:10px; align-items:center; margin-bottom:12px; flex-wrap:wrap; }
        .card-cat { font-family:'DM Mono',monospace; font-size:9px; letter-spacing:2px; text-transform:uppercase; color:#a855f7; }
        .card-year { font-family:'DM Mono',monospace; font-size:9px; color:#888; }
        .card-title-row { display:flex; align-items:flex-start; justify-content:space-between; gap:12px; margin-bottom:10px; }
        .card-title { font-family:'Bebas Neue',sans-serif; font-size:24px; letter-spacing:2px; color:#e8e8e8; }
        .card-tags { display:flex; gap:6px; flex-shrink:0; margin-top:4px; }
        .card-tag { font-family:'DM Mono',monospace; font-size:9px; letter-spacing:2px; text-transform:uppercase; padding:3px 8px; border:1px solid rgba(168,85,247,0.5); color:#a855f7; background:rgba(168,85,247,0.05); border-radius:2px; }
        .card-desc { font-size:13px; line-height:1.6; color:#999; }
        .card-arrow { margin-top:20px; font-family:'DM Mono',monospace; font-size:10px; letter-spacing:2px; text-transform:uppercase; color:#777; transition:all 0.2s; }
        .card:hover .card-arrow { color:#a855f7; }

        .about { padding:80px 48px; border-top:1px solid #1a1a1a; }
        .about-title { font-family:'Bebas Neue',sans-serif; font-size:clamp(48px,5vw,72px); line-height:1.05; letter-spacing:2px; margin-bottom:32px; margin-top:8px; }
        .about-text { color:#aaa; line-height:1.9; font-size:14px; margin-bottom:16px; max-width:860px; text-align:justify; }
        .read-more-btn { background:none; border:none; color:#a855f7; font-family:'DM Mono',monospace; font-size:11px; letter-spacing:2px; text-transform:uppercase; cursor:pointer; padding:0; margin-top:4px; text-decoration:underline; text-underline-offset:3px; }

        .gantt-wrap { margin-top:56px; overflow-x:auto; padding-bottom:8px; }
        .gantt-inner { min-width:860px; }
        .gantt-row-label { font-family:'DM Mono',monospace; font-size:9px; letter-spacing:2px; text-transform:uppercase; color:#aaa; margin-bottom:4px; }
        .gantt-row { position:relative; height:44px; }
        .gantt-grid-line { position:absolute; top:0; bottom:0; width:1px; background:#1e1e1e; }
        .gantt-axis-wrap { position:relative; height:36px; }
        .gantt-axis-year { position:absolute; font-family:'DM Mono',monospace; font-size:9px; color:#a855f7; letter-spacing:1px; opacity:0.85; white-space:nowrap; top:2px; }
        .gantt-tooltip-inline { margin-top:20px; padding:18px 22px; background:#111; border:1px solid #2a2a2a; border-left:3px solid; display:inline-block; max-width:680px; }
        .gantt-tooltip-header { display:flex; align-items:baseline; gap:10px; flex-wrap:wrap; margin-bottom:3px; }
        .gantt-tooltip-name { font-family:'Bebas Neue',sans-serif; font-size:20px; letter-spacing:2px; }
        .gantt-tooltip-subtitle { font-family:'DM Mono',monospace; font-size:11px; color:inherit; opacity:0.75; }
        .gantt-tooltip-period { font-family:'DM Mono',monospace; font-size:10px; color:#888; margin-left:auto; white-space:nowrap; }
        .gantt-tooltip-type { font-family:'DM Mono',monospace; font-size:9px; letter-spacing:2px; text-transform:uppercase; color:#555; margin-bottom:12px; }
        .gantt-tooltip-bullets { list-style:none; padding:0; margin:0; }
        .gantt-tooltip-bullets li { font-family:'DM Mono',monospace; font-size:11px; color:#999; line-height:1.7; padding-left:14px; position:relative; margin-bottom:4px; }
        .gantt-tooltip-bullets li::before { content:'▸'; position:absolute; left:0; color:#555; font-size:9px; top:2px; }

        .contact { padding:80px 48px 120px; border-top:1px solid #1a1a1a; text-align:center; }
        .contact-title { font-family:'Bebas Neue',sans-serif; font-size:clamp(60px,10vw,130px); line-height:0.9; margin-bottom:48px; }
        .contact-solid { color:#e8e8e8; display:block; letter-spacing:2px; }
        .contact-outline { display:block; letter-spacing:4px; color:#333; }
        @supports (-webkit-hyphens:none) {
          .contact-outline { color:transparent; -webkit-text-stroke:1px #444; }
        }
        .contact-links { display:flex; gap:16px; justify-content:center; flex-wrap:wrap; }

        footer { border-top:1px solid #1a1a1a; padding:24px 48px; display:flex; justify-content:space-between; align-items:center; }
        footer p { font-family:'DM Mono',monospace; font-size:10px; letter-spacing:2px; text-transform:uppercase; color:#555; }

        .fade-in { opacity:0; transform:translateY(20px); transition:opacity 0.6s ease, transform 0.6s ease; }
        .fade-in.visible { opacity:1; transform:translateY(0); }
        @keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes ticker { from{transform:translateX(0)} to{transform:translateX(-50%)} }

        @media (max-width: 768px) {
          body { cursor:auto; }
          nav { padding:20px 24px; }
          .nav-links { gap:20px; }
          .nav-links a { font-size:10px; letter-spacing:1px; }
          .hero { padding:0 24px 0; min-height:100svh; }
          .hero-inner { flex-direction:column; align-items:center; text-align:center; padding-top:100px; padding-bottom:32px; gap:32px; }
          .hero-left { order:1; }
          .hero-photo { order:2; }
          .hero-tag { font-size:11px; letter-spacing:3px; margin-bottom:12px; }
          .hero-title { font-size:clamp(72px,20vw,110px); }
          .hero-desc { margin-top:24px; max-width:100%; font-size:13px; }
          .photo-wrap { width:180px; height:240px; }
          .ticker { margin:0 -24px !important; }
          .projects { padding:60px 24px; }
          .grid { grid-template-columns:1fr; gap:16px; }
          .card.span2 { grid-column:span 1; }
          .card-thumb { height:200px !important; }
          .about { padding:60px 24px; }
          .about-title { font-size:clamp(40px,10vw,56px); }
          .about-text { font-size:13px; }
          .gantt-wrap { margin-top:40px; }
          .gantt-hint { display:block !important; }
          .gantt-tooltip-inline { max-width:100%; }
          .contact { padding:60px 24px 80px; }
          .contact-title { font-size:clamp(48px,14vw,80px); }
          .contact-links { flex-direction:column; align-items:center; gap:12px; }
          .contact-links a { width:100%; max-width:320px; min-width:unset !important; padding:16px 24px; }
          footer { padding:20px 24px; flex-direction:column; gap:8px; text-align:center; }
          .cursor, .cursor-ring { display:none; }
        }
      `}</style>

      <div ref={cursorRef} className="cursor" />
      <div ref={ringRef} className="cursor-ring" />

      <nav>
        <Link href="/" className="nav-logo">ND<span style={{color:'#a855f7'}}>.</span></Link>
        <ul className="nav-links">
          {[['Travaux', 'projets'], ['Parcours', 'parcours'], ['Contact', 'contact']].map(([label, anchor]) => (
            <li key={anchor}><a href={`#${anchor}`}>{label}</a></li>
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
              Data Analyst spécialisé en football, avec un solide background technique et une compréhension approfondie du jeu.<br/><br/>
              Je transforme la donnée en insights actionnables pour accompagner les décisions tactiques, la préparation de la compétition et l'optimisation de la performance.
            </p>
          </div>
          <div className="hero-photo">
            <div className="photo-wrap">
              <div className="photo-vignette" />
              <div className="photo-corner-tl" />
              <div className="photo-corner-br" />
              <Image src="/Portrait_Noury.jpeg" alt="Noury Djebli" fill style={{objectFit:'cover', objectPosition:'top', filter:'grayscale(15%) contrast(1.05)'}} priority />
            </div>
          </div>
        </div>
        <div className="ticker" style={{margin:'0 -48px'}}>
          <div className="ticker-inner">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} className="ticker-item">{item} <span className="dot">✦</span></span>
            ))}
          </div>
        </div>
      </section>

      <section id="projets" className="projects fade-in">
        <div className="projects-header">
          <p className="section-label">// 01 — Travaux</p>
          <h2 className="section-title">Projets</h2>
        </div>
        <div className="grid">
          {projects.map(p => (
            <Link key={p.id} href={`/projects/${p.slug}`} className={`card ${p.span===2?'span2':''}`}>
              <div className="card-thumb">
                <img src={p.thumb} alt={p.title} className="card-thumb-img" />
              </div>
              <div className="card-body">
                <div className="card-meta">
                  <span className="card-cat">{p.category}</span>
                  <span className="card-year">{p.year}</span>
                </div>
                <div className="card-title-row">
                  <div className="card-title">{p.title}</div>
                  <div className="card-tags">
                    {p.tags.map(tag => <span key={tag} className="card-tag">{tag}</span>)}
                  </div>
                </div>
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

        {visibleParas.map((p, i) => (
          <p key={i} className="about-text">{p}</p>
        ))}
        {expanded && hiddenParas.map((p, i) => (
          <p key={i} className="about-text">{p}</p>
        ))}
        <button className="read-more-btn" onClick={() => setExpanded(!expanded)}>
          {expanded ? '↑ Réduire' : '↓ Lire la suite'}
        </button>

        <div className="gantt-wrap">
          <p className="gantt-hint" style={{display:'none', fontFamily:"'DM Mono',monospace", fontSize:'10px', color:'#666', letterSpacing:'2px', textTransform:'uppercase', marginBottom:'12px'}}>
            ← Appuyer sur une barre pour les détails →
          </p>
          <div className="gantt-inner">
            <div className="gantt-row-label">Académique</div>
            <div className="gantt-row">
              {years.map(y => <div key={y} className="gantt-grid-line" style={{left: toPercent(y) + '%'}} />)}
              {timeline.filter(t => t.top).map(item => (
                <GanttBar key={item.id} item={item} active={ganttActive === item.id} onInteract={handleGanttInteract} />
              ))}
            </div>
            <div className="gantt-axis-wrap">
              {years.map((y, i) => {
                let transform = 'translateX(-50%)'
                let left = toPercent(y) + '%'
                if (i === 0) { transform = 'translateX(0)'; left = '0' }
                if (i === years.length - 1) { transform = 'translateX(-100%)'; left = '100%' }
                return <span key={y} className="gantt-axis-year" style={{left, transform}}>{y}</span>
              })}
              <svg width="100%" height="16" style={{position:'absolute', bottom:0, left:0}} preserveAspectRatio="none">
                <defs>
                  <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                    <polygon points="0 0, 8 3, 0 6" fill="rgba(168,85,247,0.6)" />
                  </marker>
                </defs>
                <line x1="0" y1="8" x2="99%" y2="8" stroke="rgba(168,85,247,0.5)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
              </svg>
            </div>
            <div className="gantt-row-label">Professionnel</div>
            <div className="gantt-row">
              {years.map(y => <div key={y} className="gantt-grid-line" style={{left: toPercent(y) + '%'}} />)}
              {timeline.filter(t => !t.top).map(item => (
                <GanttBar key={item.id} item={item} active={ganttActive === item.id} onInteract={handleGanttInteract} />
              ))}
            </div>
            {activeItem && (
              <div className="gantt-tooltip-inline" style={{borderLeftColor: activeItem.color}}>
                <div className="gantt-tooltip-header">
                  <span className="gantt-tooltip-name" style={{color: activeItem.color}}>{activeItem.label}</span>
                  <span className="gantt-tooltip-subtitle" style={{color: activeItem.color}}>{activeItem.subtitle}</span>
                  <span className="gantt-tooltip-period">{activeItem.period}</span>
                </div>
                <div className="gantt-tooltip-type">
                  {activeItem.type === 'academic' ? 'Académique' : 'Professionnel'}
                  {activeItem.nested ? (activeItem.id === 'hwu' ? ' — Échange' : ' — Mission') : ''}
                </div>
                <ul className="gantt-tooltip-bullets">
                  {activeItem.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="contact" className="contact fade-in">
        <p className="section-label">// 03 — Contact</p>
        <h2 className="contact-title">
          <span className="contact-solid">Travaillons</span>
          <span className="contact-outline">Ensemble</span>
        </h2>
        <div className="contact-links">
          {isMobile ? (
            <>
              <a href="mailto:n.djebli98@gmail.com" style={{display:'inline-block',padding:'16px 24px',border:'1px solid #333',color:'#aaa',fontFamily:"'DM Mono',monospace",fontSize:'11px',letterSpacing:'2px',textTransform:'uppercase',textDecoration:'none',width:'100%',maxWidth:'320px',textAlign:'center'}}>
                n.djebli98@gmail.com
              </a>
              <a href="https://wa.me/33619048534" target="_blank" rel="noopener noreferrer" style={{display:'inline-block',padding:'16px 24px',border:'1px solid #333',color:'#aaa',fontFamily:"'DM Mono',monospace",fontSize:'11px',letterSpacing:'2px',textTransform:'uppercase',textDecoration:'none',width:'100%',maxWidth:'320px',textAlign:'center'}}>
                WhatsApp · +33 6 19 04 85 34
              </a>
              <a href="https://www.linkedin.com/in/noury-djebli/" target="_blank" rel="noopener noreferrer" style={{display:'inline-block',padding:'16px 24px',border:'1px solid #333',color:'#aaa',fontFamily:"'DM Mono',monospace",fontSize:'11px',letterSpacing:'2px',textTransform:'uppercase',textDecoration:'none',width:'100%',maxWidth:'320px',textAlign:'center'}}>
                LinkedIn
              </a>
            </>
          ) : (
            <>
              <ContactBtn label="Email" detail="n.djebli98@gmail.com" href="mailto:n.djebli98@gmail.com" />
              <ContactBtn label="WhatsApp" detail="+33 6 19 04 85 34" href="https://wa.me/33619048534" />
              <ContactBtn label="LinkedIn" href="https://www.linkedin.com/in/noury-djebli/" />
            </>
          )}
        </div>
      </section>

      <footer>
        <p>© 2026 — Noury Djebli</p>
        <p>Football Data Analyst</p>
      </footer>
    </>
  )
}
