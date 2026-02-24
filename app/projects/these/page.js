'use client'

import ProjectLayout from '../_components/ProjectLayout'
import { useState } from 'react'

const THESIS_ID = '1PNynecskM87zdPbXLbJGiEnZjvBTqUiQ'
const PRES_ID = '1s2fwqks0Csc4-L3Ic62fp3yqfuiHXQkT'

export default function These() {
  const [activeDoc, setActiveDoc] = useState('thesis')

  const meta = {
    category: 'Recherche',
    year: '2024',
    tag: 'PDF',
    title: 'Thèse — xAb\nMetric',
    desc: 'Développement d\'une nouvelle métrique conceptuelle (xAb — Expected Action in Build-up) pour quantifier et optimiser la décision entre passe et conduite de balle en phase de build-up. Thèse de Master présentée à Valdebebas (Real Madrid) devant Álvaro Arbeloa.',
  }

  const embedSection = (
    <>
      <div style={{display:'flex', gap:'2px', marginBottom:'16px'}}>
        <button
          onClick={() => setActiveDoc('thesis')}
          style={{
            fontFamily:"'DM Mono',monospace", fontSize:'10px', letterSpacing:'2px',
            textTransform:'uppercase', padding:'10px 20px', border:'1px solid',
            borderColor: activeDoc === 'thesis' ? '#a855f7' : '#1e1e1e',
            color: activeDoc === 'thesis' ? '#a855f7' : '#555',
            background:'transparent', cursor:'pointer', transition:'all 0.2s'
          }}
        >
          Corps de thèse
        </button>
        <button
          onClick={() => setActiveDoc('pres')}
          style={{
            fontFamily:"'DM Mono',monospace", fontSize:'10px', letterSpacing:'2px',
            textTransform:'uppercase', padding:'10px 20px', border:'1px solid',
            borderColor: activeDoc === 'pres' ? '#a855f7' : '#1e1e1e',
            color: activeDoc === 'pres' ? '#a855f7' : '#555',
            background:'transparent', cursor:'pointer', transition:'all 0.2s'
          }}
        >
          Présentation orale
        </button>
      </div>
      <p className="embed-label">
        {activeDoc === 'thesis' ? '// Thèse complète — PDF' : '// Présentation — Valdebebas, Real Madrid'}
      </p>
      <div className="embed-container">
        <iframe
          key={activeDoc}
          src={`https://drive.google.com/file/d/${activeDoc === 'thesis' ? THESIS_ID : PRES_ID}/preview`}
          allow="autoplay"
          title={activeDoc === 'thesis' ? 'Thèse xAb' : 'Présentation orale thèse'}
        />
      </div>
    </>
  )

  return (
    <ProjectLayout
      meta={meta}
      embedSection={embedSection}
      prevProject={{ slug: 'training-nyrb', title: 'Training NY Red Bulls' }}
      nextProject={{ slug: 'can-2025', title: 'Analyse CAN 2025' }}
    >
      <h2>La métrique xAb</h2>
      <p>
        À chaque instant T où un joueur est en possession du ballon lors de la phase de build-up (dans sa propre moitié de terrain), la métrique xAb calcule le score de toutes les options disponibles en temps réel :
      </p>
      <ul>
        <li><strong>xPb (Expected Pass in Build-up)</strong> — score de chaque passe possible, vers chaque coéquipier</li>
        <li><strong>xCb (Expected Carry in Build-up)</strong> — score de chaque conduite de balle possible, dans chaque direction</li>
        <li><strong>xAb</strong> — sélection de la meilleure action parmi toutes les options xPb et xCb</li>
      </ul>

      <h2>Objectif de la métrique</h2>
      <p>
        Fournir aux coaches et analystes un outil pour évaluer la qualité décisionnelle des joueurs en phase de construction — indépendamment du résultat de l'action. La métrique répond à la question : <em>"Le joueur a-t-il pris la meilleure décision disponible à cet instant T ?"</em>
      </p>

      <h2>Présentation</h2>
      <p>
        La thèse a été présentée oralement à Valdebebas (centre de formation du Real Madrid) devant Álvaro Arbeloa — alors entraîneur des Juvenils A du Real Madrid, aujourd'hui en équipe première — et une partie de son staff.
      </p>

      <h2>Limitations & perspectives</h2>
      <p>
        La métrique est pour l'instant conceptuelle : son déploiement opérationnel nécessiterait des données de tracking en temps réel (positions des 22 joueurs à chaque frame). La thèse pose les bases mathématiques et tactiques pour un développement futur avec accès à des données complètes.
      </p>
    </ProjectLayout>
  )
}
