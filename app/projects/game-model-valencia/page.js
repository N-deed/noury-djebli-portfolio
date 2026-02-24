'use client'

import ProjectLayout from '../_components/ProjectLayout'

const DRIVE_ID = '1gWVxHOLzJEpdffz-Q8tRVQ5W3vetk3ka'

export default function GameModelValencia() {
  const meta = {
    category: 'Analyse Tactique',
    year: '2024',
    tag: 'PDF',
    title: 'Game Model\nValencia CF',
    desc: 'Proposition d\'un nouveau game model complet pour le Valencia CF, réalisée dans le cadre du Master en Football Analytics au Real Madrid. Chaque phase de jeu — attaquante, défensive, transitions et phases arrêtées — a été analysée et redéfinie en tenant compte du contexte sportif et institutionnel du club.',
  }

  const embedSection = (
    <>
      <p className="embed-label">// Document — PDF</p>
      <div className="embed-container">
        <iframe
          src={`https://drive.google.com/file/d/${DRIVE_ID}/preview`}
          allow="autoplay"
          title="Game Model Valencia CF"
        />
      </div>
    </>
  )

  return (
    <ProjectLayout
      meta={meta}
      embedSection={embedSection}
      nextProject={{ slug: 'microcycle-valencia', title: 'Microcycle Valencia' }}
    >
      <h2>Contexte</h2>
      <p>
        Dans le cadre du Master en Football Analytics au Real Madrid (Valdebebas), ce projet m'a été assigné en solo. La mission : proposer un game model cohérent pour le Valencia CF en prenant en compte l'histoire du club, son identité tactique, ses effectifs disponibles et son contexte sportif.
      </p>

      <h2>Méthodologie</h2>
      <ul>
        <li><strong>Attacking phase</strong> — structures offensives, circuits de passes, profils de buteurs</li>
        <li><strong>Defensive phase</strong> — organisation du bloc, lignes de pression, couvertures</li>
        <li><strong>Attacking transition</strong> — contre-attaque, récupération haute, vitesse de transition</li>
        <li><strong>Defensive transition</strong> — repli défensif, pressing immédiat après perte</li>
        <li><strong>Set pieces</strong> — routines sur corners, coups francs et remises en jeu</li>
      </ul>

      <h2>Outils utilisés</h2>
      <ul>
        <li>Wyscout — analyse vidéo et données statistiques</li>
        <li>InStat — métriques de performance</li>
        <li>Références bibliographiques tactiques (Juego de Posición, Gegenpressing)</li>
      </ul>
    </ProjectLayout>
  )
}
