'use client'

import ProjectLayout from '../_components/ProjectLayout'

const DRIVE_ID = '14bHgR7eszVGhtDs9SM_Ne4U54NNpSlvj'

export default function TrainingNYRB() {
  const meta = {
    category: 'Méthodologie',
    year: '2025',
    tags: ['PDF'],
    title: 'Training Methodology\nNY Red Bulls Academy',
  }

  const contextText = "Ce projet analyse la structure et la philosophie de formation de la New York Red Bulls Academy, un pilier central du modèle global « Red Bull Soccer ». L'objectif est de décrypter comment l'organisation allie une identité tactique agressive à des outils de haute performance pour assurer une transition fluide des jeunes talents vers le niveau professionnel international."

  const anchorSections = [
    { id: 'identite', label: 'Identité & Modèle' },
    { id: 'outils', label: 'Outils du club' },
    { id: 'methodologie', label: 'Méthodologie de recherche' },
  ]

  const embedSection = (
    <div className="embed-container">
      <iframe
        src={`https://drive.google.com/file/d/${DRIVE_ID}/preview`}
        allow="autoplay"
        title="Training Methodology NY Red Bulls Academy"
      />
    </div>
  )

  return (
    <ProjectLayout
      meta={meta}
      contextText={contextText}
      anchorSections={anchorSections}
      embedSection={embedSection}
      prevProject={{ slug: 'microcycle-valencia', title: 'Microcycle Valencia' }}
      nextProject={{ slug: 'these', title: 'Thèse xAb Metric' }}
    >
      <h2 id="identite">Identité & Modèle</h2>
      <ul>
        <li>Identité tactique unifiée : Application rigoureuse d'un système de high-pressing et de transitions verticales dès les U-12, garantissant une cohérence collective absolue à tous les échelons du club.</li>
        <li>Pipeline professionnel performant : Validation du modèle par le succès de joueurs formés au club, tels que Tyler Adams (RB Leipzig) ou John Tolkin (Holstein Kiel), générant des revenus de transfert significatifs pour l'écosystème Red Bull.</li>
        <li>Approche structuraliste du coaching : Méthodologie centrée sur l'entraînement en contexte de jeu, privilégiant la reconnaissance de schémas tactiques et les automatismes collectifs plutôt que l'individualisme.</li>
        <li>Infrastructures et soutien : Un modèle d'académie entièrement gratuit pour les joueurs, soutenu par des installations de pointe et des partenariats stratégiques pour lever les barrières logistiques (transport, bourses).</li>
      </ul>

      <h2 id="outils">Outils du club</h2>
      <ul>
        <li>Analyse vidéo : Utilisation du logiciel Hudl Sportscode pour les breakdowns tactiques et l'identification des déclencheurs de pressing.</li>
        <li>Data de performance : Intégration des données GPS via STATSports pour évaluer les déplacements, la charge de travail et l'intensité physique des joueurs.</li>
        <li>Sciences du sport : Recours à la capture de mouvement, à la cryothérapie et à l'analyse nutritionnelle pour optimiser la récupération et prévenir les blessures.</li>
        <li>Préparation mentale : Intégration de coachs en performance mentale pour développer la résilience et la culture de la gagne chez les jeunes athlètes.</li>
      </ul>

      <h2 id="methodologie">Méthodologie de recherche</h2>
      <ul>
        <li>Insights internes : Échanges directs avec un membre de l'organisation pour obtenir une vision concrète des opérations quotidiennes.</li>
        <li>Veille documentaire : Analyse approfondie des ressources officielles, des sites web spécialisés et des organigrammes de l'académie.</li>
        <li>Analyse de contenu : Étude croisée d'interviews et de conférences de presse données par les directeurs techniques et les entraîneurs de l'académie pour synthétiser leur vision stratégique.</li>
      </ul>
    </ProjectLayout>
  )
}
