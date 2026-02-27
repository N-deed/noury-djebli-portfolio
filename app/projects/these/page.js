'use client'

import ProjectLayout from '../_components/ProjectLayout'
import { useState } from 'react'

const THESIS_ID = '1PNynecskM87zdPbXLbJGiEnZjvBTqUiQ'
const PRES_ID = '1s2fwqks0Csc4-L3Ic62fp3yqfuiHXQkT'

export default function These() {
  const [activeDoc, setActiveDoc] = useState('thesis')

  const meta = {
    category: 'Recherche',
    year: '2025',
    tags: ['PDF'],
    title: 'Thèse — xAb\nMetric',
  }

  const contextText = "Projet de thèse réalisé dans le cadre du Master à la Escuela Universitaria Real Madrid, visant à développer une nouvelle métrique, l'Expected Action Build-up (xAb). L'objectif est de quantifier la qualité de la prise de décision en phase de build-up en comparant, au moment de la réception du ballon, l'efficacité potentielle d'une passe (xPb) par rapport à une conduite de balle (xCb)."

  const anchorSections = [
    { id: 'resultats', label: 'Résultats & Analyse' },
    { id: 'applications', label: 'Applications Pratiques' },
    { id: 'limitations', label: 'Limitations & Perspectives' },
  ]

  const embedSection = (
    <>
      <div style={{display:'flex', gap:'8px', marginBottom:'20px'}}>
        <button
          onClick={() => setActiveDoc('thesis')}
          style={{
            fontFamily:"'DM Mono',monospace", fontSize:'10px', letterSpacing:'2px',
            textTransform:'uppercase', padding:'10px 20px', border:'1px solid',
            borderColor: activeDoc === 'thesis' ? '#a855f7' : '#555',
            color: activeDoc === 'thesis' ? '#a855f7' : '#e8e8e8',
            background: activeDoc === 'thesis' ? 'rgba(168,85,247,0.05)' : 'transparent',
            cursor:'pointer', transition:'all 0.2s', borderRadius:'2px'
          }}
        >
          Corps de thèse
        </button>
        <button
          onClick={() => setActiveDoc('pres')}
          style={{
            fontFamily:"'DM Mono',monospace", fontSize:'10px', letterSpacing:'2px',
            textTransform:'uppercase', padding:'10px 20px', border:'1px solid',
            borderColor: activeDoc === 'pres' ? '#a855f7' : '#555',
            color: activeDoc === 'pres' ? '#a855f7' : '#e8e8e8',
            background: activeDoc === 'pres' ? 'rgba(168,85,247,0.05)' : 'transparent',
            cursor:'pointer', transition:'all 0.2s', borderRadius:'2px'
          }}
        >
          Présentation orale
        </button>
      </div>
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
      contextText={contextText}
      anchorSections={anchorSections}
      embedSection={embedSection}
      prevProject={{ slug: 'training-nyrb', title: 'Training NY Red Bulls' }}
      nextProject={{ slug: 'can-2025', title: 'Analyse CAN 2025' }}
    >

      <h2 id="resultats">Résultats et analyse data</h2>
      <p>Le modèle repose sur une approche duale combinant interprétabilité et performance prédictive :</p>
      <ul>
        <li>La régression linéaire a permis d'identifier les fondamentaux tactiques, mettant en évidence la valorisation des passes au sol et la pénalisation des actions sous forte pression, avec des performances de référence (R² ≈ 30 %).</li>
        <li>L'utilisation de XGBoost a ensuite permis de capturer des interactions non linéaires complexes liées au contexte de jeu, améliorant significativement les performances prédictives (R² ≈ 49 % pour les passes et ≈ 30 % pour les conduites).</li>
      </ul>
      <p>Ces résultats confirment que les modèles avancés sont essentiels pour refléter la complexité et l'imprévisibilité du football moderne.</p>

      <h2 id="applications">Applications pratiques</h2>
      <p>Le score xAb est conçu comme un outil d'aide à la décision exploitable à différents niveaux :</p>
      <ul>
        <li>Analyse post-match : identification objective des choix sous-optimaux en phase de relance.</li>
        <li>Développement individuel : support quantitatif pour le feedback joueur et l'amélioration de la lecture de jeu.</li>
        <li>Scouting et stratégie : analyse des comportements adverses pour orienter le pressing vers des situations à faible xAb.</li>
      </ul>

      <h2 id="limitations">Limitations et perspectives</h2>
      <ul>
        <li>Le modèle est actuellement basé sur des données d'événements et ne prend pas encore en compte les mouvements sans ballon ou les intentions tactiques non observables.</li>
        <li>Les perspectives incluent l'intégration de données de tracking et de skeleton afin d'enrichir le score avec l'orientation corporelle, la densité défensive et le contexte spatial, ainsi qu'une future combinaison avec des modèles de Pitch Control et d'Expected Possession Value (EPV).</li>
      </ul>

    </ProjectLayout>
  )
}
