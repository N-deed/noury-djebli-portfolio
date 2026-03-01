'use client'

import ProjectLayout from '../_components/ProjectLayout'
import { useState } from 'react'

const PDF_ID = '150R3Nchz-Sh-8dtR0YxsplGTMQMF3wAJ'
const TABLEAU_EMBED = 'https://public.tableau.com/views/Dashboard_CAN_2025/PAGE1-VuedEnsemble?:embed=y&:showVizHome=no&:toolbar=no&:language=fr-FR'

export default function CAN2025() {
  const [activeDoc, setActiveDoc] = useState('tableau')

  const meta = {
    category: 'Data Viz',
    year: '2026',
    tags: ['PDF', 'Tableau'],
    title: 'Analyse\nCAN 2025',
  }

  const contextText = "Ce projet propose une analyse statistique approfondie des 652 joueurs sélectionnés pour la CAN 2025, s'appuyant sur un dashboard interactif et un rapport d'analyse détaillé pour décrypter les dynamiques de formation et les flux migratoires. L'approche permet d'explorer les trajectoires individuelles et collectives à travers une interface visuelle, offrant une compréhension granulaire des modèles de développement des talents africains. L'objectif est de mettre en lumière l'équilibre entre l'ancrage local et l'apport stratégique de la diaspora au sein des 24 nations qualifiées."

  const anchorSections = [
    { id: 'resultats', label: 'Résultats & Insights' },
    { id: 'outils', label: 'Outils & Méthodologies' },
  ]

  const embedSection = (
    <>
      <div style={{display:'flex', gap:'8px', marginBottom:'20px'}}>
        <button
          onClick={() => setActiveDoc('tableau')}
          style={{
            fontFamily:"'DM Mono',monospace", fontSize:'10px', letterSpacing:'2px',
            textTransform:'uppercase', padding:'10px 20px', border:'1px solid',
            borderColor: activeDoc === 'tableau' ? '#a855f7' : '#555',
            color: activeDoc === 'tableau' ? '#a855f7' : '#e8e8e8',
            background: activeDoc === 'tableau' ? 'rgba(168,85,247,0.05)' : 'transparent',
            cursor:'pointer', transition:'all 0.2s', borderRadius:'2px'
          }}
        >
          Dashboard Tableau
        </button>
        <button
          onClick={() => setActiveDoc('pdf')}
          style={{
            fontFamily:"'DM Mono',monospace", fontSize:'10px', letterSpacing:'2px',
            textTransform:'uppercase', padding:'10px 20px', border:'1px solid',
            borderColor: activeDoc === 'pdf' ? '#a855f7' : '#555',
            color: activeDoc === 'pdf' ? '#a855f7' : '#e8e8e8',
            background: activeDoc === 'pdf' ? 'rgba(168,85,247,0.05)' : 'transparent',
            cursor:'pointer', transition:'all 0.2s', borderRadius:'2px'
          }}
        >
          Rapport PDF
        </button>
      </div>
      <div className="embed-container">
        <iframe
          key={activeDoc}
          src={activeDoc === 'tableau'
            ? TABLEAU_EMBED
            : `https://drive.google.com/file/d/${PDF_ID}/preview`
          }
          allow="autoplay"
          title={activeDoc === 'tableau' ? 'Dashboard Tableau CAN 2025' : 'Rapport CAN 2025'}
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
      prevProject={{ slug: 'analyse-video-valencia', title: 'Analyse Vidéo Valencia' }}
      nextProject={{ slug: 'game-model-valencia', title: 'Game Model Valencia' }}
    >
      <h2 id="resultats">Résultats & Insights</h2>
      <ul>
        <li>Démographie et morphologie : La compétition présente un âge moyen de 26,9 ans et une taille moyenne de 177 cm, avec une prédominance tactique des profils défensifs (33 % de l'effectif).</li>
        <li>Poids de la diaspora : Environ 28 % des joueurs sont nés hors du pays qu'ils représentent, la France s'imposant comme le premier incubateur mondial avec 32 % des parcours de formation junior.</li>
        <li>Focus Maroc : Les Lions de l'Atlas illustrent un modèle hybride unique (50 % local / 50 % diaspora), alliant une formation nationale solide à une intégration maîtrisée de joueurs issus de 5 pays différents.</li>
        <li>Fiches joueurs individuelles : Le dashboard permet d'accéder à une analyse détaillée par joueur, incluant le parcours en club (junior/senior) et l'historique en sélection nationale pour l'ensemble des effectifs.</li>
        <li>Expatriation précoce : L'analyse révèle un âge moyen de départ en formation à l'étranger de 15,4 ans, certaines nations comme l'Algérie ou le Maroc misant sur des connexions très précoces avec les académies européennes.</li>
      </ul>

      <h2 id="outils">Outils & Méthodologies</h2>
      <ul>
        <li>Collecte de données : Extraction via web scraping à partir de Wikipedia, Sofascore et Transfermarkt.</li>
        <li>Visualisation : Tableau Public pour le dashboard interactif et Mapbox pour la cartographie des flux migratoires.</li>
        <li>Analyse exploratoire (EDA) : Étude des profils biographiques et sportifs des 652 athlètes, avec modélisation des trajectoires via diagrammes de Sankey et scatter plots pour corréler mobilité et continents de formation.</li>
        <li>Qualité des données : Base de données finale avec un indice de fiabilité estimé à 95 %, les méthodes de scraping étant soumises aux limites de disponibilité des sources.</li>
      </ul>
    </ProjectLayout>
  )
}
