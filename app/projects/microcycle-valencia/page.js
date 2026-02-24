'use client'

import ProjectLayout from '../_components/ProjectLayout'

const DRIVE_ID = '1XGUvc7yvZnLmW0mLVlo3hrHuMVOlzeto'

export default function MicrocycleValencia() {
  const meta = {
    category: 'Planification',
    year: '2024',
    tag: 'PDF',
    title: 'Microcycle\nValencia CF vs Leganés',
    desc: 'Préparation complète d\'une semaine de compétition pour Valencia CF en vue de la 8e journée contre CD Leganés. Chaque détail est planifié et justifié : intensité des séances, taille des terrains, type d\'exercices, récupération, nutrition et logistique du déplacement.',
  }

  const embedSection = (
    <>
      <p className="embed-label">// Document — PDF</p>
      <div className="embed-container">
        <iframe
          src={`https://drive.google.com/file/d/${DRIVE_ID}/preview`}
          allow="autoplay"
          title="Microcycle Valencia CF vs Leganés"
        />
      </div>
    </>
  )

  return (
    <ProjectLayout
      meta={meta}
      embedSection={embedSection}
      prevProject={{ slug: 'game-model-valencia', title: 'Game Model Valencia' }}
      nextProject={{ slug: 'analyse-video-valencia', title: 'Analyse Vidéo Valencia' }}
    >
      <h2>Contexte</h2>
      <p>
        Projet réalisé dans le cadre du Master au Real Madrid. Dans la peau du staff technique de Valencia CF, l'objectif était de concevoir un microcycle complet pour préparer le match contre CD Leganés (J8 de Liga).
      </p>

      <h2>Structure de la semaine</h2>
      <ul>
        <li><strong>Analyse adversaire</strong> — courte analyse vidéo de Leganés, identification des points à exploiter</li>
        <li><strong>Programmation des entraînements</strong> — exercices sur et hors terrain, justification de l'intensité et des dimensions</li>
        <li><strong>Récupération</strong> — protocoles de récupération active et passive selon le calendrier</li>
        <li><strong>Séances vidéo</strong> — contenu et timing des réunions tactiques collectives et individuelles</li>
        <li><strong>Nutrition</strong> — plan alimentaire adapté à chaque phase de la semaine</li>
        <li><strong>Logistique J</strong> — timing du déplacement, heure de réveil, pré-activation, échauffement</li>
      </ul>

      <h2>Principe directeur</h2>
      <p>
        Chaque exercice d'entraînement est justifié tactiquement et physiquement. La taille des terrains, le nombre de joueurs par exercice et le type d'effort sont tous calibrés en fonction de la charge hebdomadaire et des principes de jeu de l'équipe.
      </p>
    </ProjectLayout>
  )
}
