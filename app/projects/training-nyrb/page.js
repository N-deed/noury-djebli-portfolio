'use client'

import ProjectLayout from '../_components/ProjectLayout'

const DRIVE_ID = '14bHgR7eszVGhtDs9SM_Ne4U54NNpSlvj'

export default function TrainingNYRB() {
  const meta = {
    category: 'Méthodologie',
    year: '2024',
    tag: 'PDF',
    title: 'Training Methodology\nNY Red Bulls Academy',
    desc: 'Observation et rapport complet sur la méthodologie d\'entraînement de l\'académie des New York Red Bulls. Analyse de l\'ensemble du programme de formation, des principes d\'entraînement et des points d\'amélioration identifiés.',
  }

  const embedSection = (
    <>
      <p className="embed-label">// Document — PDF</p>
      <div className="embed-container">
        <iframe
          src={`https://drive.google.com/file/d/${DRIVE_ID}/preview`}
          allow="autoplay"
          title="Training Methodology NY Red Bulls Academy"
        />
      </div>
    </>
  )

  return (
    <ProjectLayout
      meta={meta}
      embedSection={embedSection}
      prevProject={{ slug: 'analyse-video-valencia', title: 'Analyse Vidéo Valencia' }}
      nextProject={{ slug: 'these', title: 'Thèse xAb' }}
    >
      <h2>Contexte</h2>
      <p>
        Projet réalisé dans le cadre du Master au Real Madrid. L'objectif était d'observer et d'analyser en détail la méthodologie d'entraînement de l'académie des New York Red Bulls — l'une des structures de formation les plus reconnues de MLS.
      </p>

      <h2>Périmètre de l'observation</h2>
      <ul>
        <li><strong>Structure de l'académie</strong> — organisation, catégories d'âge, philosophie de développement</li>
        <li><strong>Principes d'entraînement</strong> — types de séances, progression pédagogique, charge de travail</li>
        <li><strong>Identité de jeu</strong> — style de jeu développé dans les catégories de formation</li>
        <li><strong>Points positifs</strong> — ce que l'académie fait particulièrement bien</li>
        <li><strong>Axes d'amélioration</strong> — recommandations objectives et argumentées</li>
      </ul>

      <h2>Approche</h2>
      <p>
        Analyse documentaire basée sur des sources officielles, vidéos d'entraînements accessibles et entretiens de coaches disponibles publiquement. Le rapport adopte un regard extérieur critique mais constructif.
      </p>
    </ProjectLayout>
  )
}
