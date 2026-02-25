'use client'

import ProjectLayout from '../_components/ProjectLayout'

const DRIVE_ID = '1gWVxHOLzJEpdffz-Q8tRVQ5W3vetk3ka'

export default function GameModelValencia() {
  const meta = {
    category: 'Analyse Tactique',
    year: '2024',
    tag: 'PDF',
    title: 'Game Model\nValencia CF',
    desc: "Proposition d'un nouveau game model complet pour le Valencia CF, réalisée dans le cadre de mon Master au Real Madrid. Chaque phase de jeu (possession, défense, transitions et phases arrêtées) a été analysée et redéfinie en tenant compte du contexte sportif et institutionnel du club.",
  }

  const embedSection = (
    <>
      <p className="embed-label">// Document — PDF</p>
      <div className="embed-container">
        <iframe src={`https://drive.google.com/file/d/${DRIVE_ID}/preview`} allow="autoplay" title="Game Model Valencia CF" />
      </div>
    </>
  )

  return (
    <ProjectLayout meta={meta} embedSection={embedSection} nextProject={{ slug: 'microcycle-valencia', title: 'Microcycle Valencia' }}>
      <h2>Contexte</h2>
      <p>
        Dans le cadre du Master en Football Coaching & Management au Real Madrid, ce projet m'a été assigné. La mission : proposer un game model cohérent pour le Valencia CF en prenant en compte l'histoire du club, son identité tactique, ses effectifs disponibles et son contexte sportif.
      </p>

      <h2>Méthodologie</h2>
      <p>
        Pour chacune des 4 phases du jeu (phase de possession, phase défensive, transition offensive, transition défensive), un objectif, des sous-principes et des actions ont été définis dans les 3 zones du terrain (construction, créative, finition). Les phases arrêtées ont également été traitées en détail : corners offensifs et défensifs, coups-francs centraux et latéraux, sorties de but et touches.
      </p>

      <h2>Outils utilisés</h2>
      <ul>
        <li>Wyscout — analyse vidéo et données statistiques</li>
        <li>InStat — métriques de performance</li>
        <li>Références bibliographiques tactiques (Juego de Posición, Gegenpressing)</li>
      </ul>
    </ProjectLayout>
  )
}
