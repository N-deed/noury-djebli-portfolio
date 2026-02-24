'use client'

import ProjectLayout from '../_components/ProjectLayout'
import { useState } from 'react'

const PDF_ID = '150R3Nchz-Sh-8dtR0YxsplGTMQMF3wAJ'
const TABLEAU_URL = 'https://public.tableau.com/views/Dashboard_CAN_2025/PAGE1-VuedEnsemble'

export default function CAN2025() {
  const [activeView, setActiveView] = useState('tableau')

  const meta = {
    category: 'Data Viz',
    year: '2025',
    tag: 'Tableau',
    title: 'Analyse\nCAN 2025',
    desc: 'Dashboard interactif et analyse complète sur la formation des joueurs ayant participé à la CAN 2025. Commandé par M. Sahib Dahbi, cadre de la direction technique de la FRMF. Focus sur la diaspora, les académies formatrices, l\'expatriation et les profils des joueurs.',
  }

  const embedSection = (
    <>
      <div style={{display:'flex', gap:'2px', marginBottom:'16px'}}>
        <button
          onClick={() => setActiveView('tableau')}
          style={{
            fontFamily:"'DM Mono',monospace", fontSize:'10px', letterSpacing:'2px',
            textTransform:'uppercase', padding:'10px 20px', border:'1px solid',
            borderColor: activeView === 'tableau' ? '#a855f7' : '#1e1e1e',
            color: activeView === 'tableau' ? '#a855f7' : '#555',
            background:'transparent', cursor:'pointer', transition:'all 0.2s'
          }}
        >
          Dashboard Interactif
        </button>
        <button
          onClick={() => setActiveView('pdf')}
          style={{
            fontFamily:"'DM Mono',monospace", fontSize:'10px', letterSpacing:'2px',
            textTransform:'uppercase', padding:'10px 20px', border:'1px solid',
            borderColor: activeView === 'pdf' ? '#a855f7' : '#1e1e1e',
            color: activeView === 'pdf' ? '#a855f7' : '#555',
            background:'transparent', cursor:'pointer', transition:'all 0.2s'
          }}
        >
          Analyse PDF
        </button>
      </div>

      {activeView === 'tableau' ? (
        <>
          <p className="embed-label">// Dashboard Tableau Public — Interactif</p>
          <div className="embed-container" style={{aspectRatio:'16/10'}}>
            <iframe
              src={`${TABLEAU_URL}?:embed=y&:showVizHome=no&:host_url=https%3A%2F%2Fpublic.tableau.com%2F&:embed_code_version=3&:tabs=no&:toolbar=yes&:animate_transition=yes&:display_static_image=no&:display_spinner=yes&:display_overlay=yes&:display_count=yes&:language=fr-FR`}
              allowFullScreen
              title="Dashboard CAN 2025"
            />
          </div>
        </>
      ) : (
        <>
          <p className="embed-label">// Analyse issue du Dashboard — PDF</p>
          <div className="embed-container">
            <iframe
              src={`https://drive.google.com/file/d/${PDF_ID}/preview`}
              allow="autoplay"
              title="Analyse CAN 2025 PDF"
            />
          </div>
        </>
      )}
    </>
  )

  return (
    <ProjectLayout
      meta={meta}
      embedSection={embedSection}
      prevProject={{ slug: 'these', title: 'Thèse xAb' }}
      nextProject={{ slug: 'game-model-valencia', title: 'Game Model Valencia' }}
    >
      <h2>Contexte</h2>
      <p>
        Ce projet a été commandé par M. Sahib Dahbi, cadre dans la direction technique de la FRMF (Fédération Royale Marocaine de Football). L'objectif : analyser la formation des joueurs ayant participé à la CAN 2025 — avec un focus particulier sur la diaspora africaine et les flux de formation internationaux.
      </p>

      <h2>Axes d'analyse</h2>
      <ul>
        <li><strong>Diaspora</strong> — pays de naissance vs pays représenté, origines des joueurs</li>
        <li><strong>Académies formatrices</strong> — où ont été formés ces joueurs, par pays et par club</li>
        <li><strong>Clubs actuels</strong> — ligues et pays où évoluent les participants à la CAN 2025</li>
        <li><strong>Expatriation</strong> — âge moyen d'expatriation, corrélation avec le niveau sportif</li>
        <li><strong>Profils physiques</strong> — tailles, pieds forts, répartition par poste</li>
        <li><strong>Liens entre pays</strong> — cartographie des flux formation → compétition</li>
      </ul>

      <h2>Outil</h2>
      <p>
        Dashboard développé sur Tableau Public. Les visualisations sont entièrement interactives : filtres par équipe, par poste, par pays de formation. Le rapport PDF associé reprend chaque visualisation avec son analyse chiffrée et contextuelle.
      </p>
    </ProjectLayout>
  )
}
