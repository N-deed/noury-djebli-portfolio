'use client'

import ProjectLayout from '../_components/ProjectLayout'

const DRIVE_ID = '1XGUvc7yvZnLmW0mLVlo3hrHuMVOlzeto'

export default function MicrocycleValencia() {
  const meta = {
    category: 'Planification',
    year: '2025',
    tags: ['PDF'],
    title: 'Microcycle\nValencia CF vs Leganés',
  }

  const contextText = "Développé dans le cadre du Master à la Escuela Universitaria Real Madrid, ce projet consiste en la conception d'un microcycle de performance de 6 jours pour le Valencia CF en vue du match contre le CD Leganés. L'approche repose sur une périodisation tactique rigoureuse, où chaque unité d'entraînement est sélectionnée pour répondre à un double impératif : l'application du plan tactique spécifique contre l'adversaire et une gestion scientifique de la charge physique et mentale."

  const anchorSections = [
    { id: 'organisation', label: 'Organisation' },
    { id: 'outils', label: 'Outils & Méthodologies' },
  ]

  const embedSection = (
    <div className="embed-container">
      <iframe
        src={`https://drive.google.com/file/d/${DRIVE_ID}/preview`}
        allow="autoplay"
        title="Microcycle Valencia CF vs Leganés"
      />
    </div>
  )

  return (
    <ProjectLayout
      meta={meta}
      contextText={contextText}
      anchorSections={anchorSections}
      embedSection={embedSection}
      prevProject={{ slug: 'game-model-valencia', title: 'Game Model Valencia' }}
      nextProject={{ slug: 'training-nyrb', title: 'Training NY Red Bulls' }}
    >
      <h2 id="organisation">Organisation</h2>
      <ul>
        <li>Ingénierie des séances : Chaque exercice sur le terrain est défini par des objectifs tactiques clairs (contre-pressing, progression centrale), des dimensions d'espaces précises (ex : 10x8m, 50x65m) et une durée calculée pour optimiser la charge physique.</li>
        <li>Planification logistique et temporelle : Le calendrier intègre les timings des séances vidéo (collectives et individuelles), les séances de salle de sport et les protocoles de récupération.</li>
        <li>Nutrition périodisée : Plan nutritionnel quotidien adapté aux demandes de l'entraînement, précisant la répartition glucides/protéines pour chaque repas afin de garantir les stocks de glycogène et la réparation musculaire.</li>
        <li>Gestion du Matchday : Organisation complète de la journée de match, incluant la séance d'activation matinale pour les coups de pied arrêtés, les horaires de repas, le départ pour le stade et les protocoles d'avant-match.</li>
        <li>Monitoring de la charge : Utilisation de la périodisation tactique espagnole pour alterner les jours de charge maximale (Optimization Day) avec des phases d'activation à basse intensité, assurant un pic de forme au coup d'envoi.</li>
      </ul>

      <h2 id="outils">Outils & Méthodologies</h2>
      <ul>
        <li>Cadre académique : Méthodologies de performance de la Escuela Universitaria Real Madrid.</li>
        <li>Data & Video Scouting : Analyse multidimensionnelle via Opta, FBREF et WyScout pour identifier les failles du 4-2-3-1 de Leganés (notamment les espaces derrière les latéraux).</li>
        <li>Sciences du sport : Protocoles de force (unilatérale, stabilité core) et de prévention des blessures (FIFA 11+) intégrés quotidiennement.</li>
        <li>Design tactique : Transition structurelle vers un 4-1-4-1 pour garantir la supériorité numérique au milieu et une transition défensive sécurisée.</li>
      </ul>
    </ProjectLayout>
  )
}
