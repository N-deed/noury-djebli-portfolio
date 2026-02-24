'use client'

import ProjectLayout from '../_components/ProjectLayout'

// Google Slides - ID extrait de l'URL de partage
const SLIDES_ID = '16LRKv17nbFpBBQL4A-R-uLWuKFxPi0hW'

export default function AnalyseVideoValencia() {
  const meta = {
    category: 'Scouting Vidéo',
    year: '2024',
    tag: 'PPT',
    title: 'Pré-match\nValencia CF vs Real Sociedad',
    desc: 'Analyse vidéo complète de la Real Sociedad réalisée en tant qu\'analyste vidéo du Valencia CF. Chaque moment du jeu de l\'adversaire est décortiqué — forces, faiblesses, joueurs clés — et mis en relation avec le game model de Valencia.',
  }

  const embedSection = (
    <>
      <p className="embed-label">// Présentation — Google Slides</p>
      <div className="embed-container">
        <iframe
          src={`https://docs.google.com/presentation/d/${SLIDES_ID}/embed?start=false&loop=false&delayms=3000`}
          allowFullScreen
          title="Analyse Vidéo Valencia CF vs Real Sociedad"
        />
      </div>
    </>
  )

  return (
    <ProjectLayout
      meta={meta}
      embedSection={embedSection}
      prevProject={{ slug: 'microcycle-valencia', title: 'Microcycle Valencia' }}
      nextProject={{ slug: 'training-nyrb', title: 'Training NY Red Bulls' }}
    >
      <h2>Contexte</h2>
      <p>
        Dans le cadre du Master au Real Madrid, j'ai endossé le rôle d'analyste vidéo du Valencia CF pour préparer le match aller contre la Real Sociedad. La mission : fournir au staff un rapport complet sur l'adversaire, utilisable en réunion d'équipe et en séances vidéo individuelles.
      </p>

      <h2>Contenu de l'analyse</h2>
      <ul>
        <li><strong>Attacking phase</strong> — organisation offensive, schéma de construction, zones préférentielles</li>
        <li><strong>Defensive phase</strong> — structure défensive, ligne de pression, organisation du bloc</li>
        <li><strong>Transitions</strong> — réactions à la perte et à la récupération du ballon</li>
        <li><strong>Set pieces</strong> — routines offensives et défensives sur phases arrêtées</li>
        <li><strong>Joueurs clés</strong> — profils individuels, habitudes, zones d'influence</li>
        <li><strong>Mise en relation</strong> — points à exploiter selon le game model de Valencia CF</li>
      </ul>

      <h2>Méthodologie</h2>
      <p>
        Analyse de plusieurs matchs récents de la Real Sociedad via Wyscout. Extraction de clips vidéo illustrant chaque principe. Présentation structurée pour une utilisation directe par le staff et les joueurs.
      </p>
    </ProjectLayout>
  )
}
