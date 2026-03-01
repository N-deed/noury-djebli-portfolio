'use client'

import ProjectLayout from '../_components/ProjectLayout'

const DRIVE_ID = '11QDr55bYZ5aI4-AEoxbtGFNf1SakP0yJ'

export default function AnalyseVideoValencia() {
  const meta = {
    category: 'Scouting Vidéo',
    year: '2025',
    tags: ['PPTX'],
    title: 'Pré-match\nValencia CF vs Real Sociedad',
  }

  const contextText = "Réalisé en tant qu'Opponent Video Analyst dans le cadre du Master à la Escuela Universitaria Real Madrid, ce projet propose une préparation tactique complète pour le Valencia CF. L'étude intègre une analyse exhaustive des cinq phases de jeu (possession, transition défensive, défense organisée, transition offensive et coups de pied arrêtés) mise en relation directe avec le Game Model de Valencia. L'objectif est double : exploiter les vulnérabilités structurelles de la Real Sociedad tout en ajustant le système de Valencia pour neutraliser les forces adverses susceptibles de pénaliser nos propres faiblesses."

  const anchorSections = [
    { id: 'axes', label: "Axes d'analyse" },
    { id: 'outils', label: 'Outils & Méthodologies' },
  ]

  const embedSection = (
    <div className="embed-container">
      <iframe
        src={`https://drive.google.com/file/d/${DRIVE_ID}/preview`}
        allow="autoplay"
        title="Analyse Vidéo Valencia CF vs Real Sociedad"
      />
    </div>
  )

  return (
    <ProjectLayout
      meta={meta}
      contextText={contextText}
      anchorSections={anchorSections}
      embedSection={embedSection}
      prevProject={{ slug: 'these', title: 'Thèse xAb Metric' }}
      nextProject={{ slug: 'can-2025', title: 'Analyse CAN 2025' }}
    >

      <h2 id="axes">Axes d'analyse</h2>
      <ul>
        <li>Analyse holistique des phases de jeu : Évaluation détaillée du cycle de jeu complet, incluant le build-up adverse, leur pressing haut agressif et la gestion des phases arrêtées (corners et coups francs latéraux).</li>
        <li>Adaptation systémique au Game Model : Utilisation d'un bloc médian compact (4-1-4-1) pour contrer la supériorité centrale adverse, forçant la Real Sociedad à abandonner son jeu de possession court pour des ballons longs où Valencia possède un avantage athlétique.</li>
        <li>Focus individuel stratégique : Identification de Martín Zubimendi (régulateur du tempo) et Takefusa Kubo (danger dans les poches d'espace) comme cibles prioritaires ; consignes de cadrage et de couverture spécifiques pour limiter leur influence.</li>
        <li>Optimisation des transitions et phases arrêtées : Plan d'exploitation des espaces laissés par les latéraux adverses en transition offensive et ciblage du second poteau sur les phases arrêtées, identifié comme zone de faiblesse majeure dans leur défense de zone.</li>
      </ul>

      <h2 id="outils">Outils & Méthodologies</h2>
      <ul>
        <li>Analyse vidéo (LongoMatch) : Séquençage et tagging systématique des deux derniers matchs de l'adversaire (MD6 et MD7) pour identifier les patterns tactiques récurrents.</li>
        <li>Data Analysis & Profiling : Utilisation des données de performance (possession, efficacité des centres, duels aériens) pour corroborer les observations vidéo et orienter le plan de match.</li>
        <li>Conception tactique : Élaboration de schémas de positionnement (4-1-4-1) et de circuits préférentiels pour répondre aux triggers de pressing de la Real Sociedad.</li>
        <li>Scouting d'opposition : Étude des structures variables de l'adversaire (4-1-2-1-2 et 4-1-4-1) afin d'anticiper les ajustements nécessaires en cours de match.</li>
      </ul>

    </ProjectLayout>
  )
}
