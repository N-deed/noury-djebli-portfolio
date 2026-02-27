'use client'

import ProjectLayout from '../_components/ProjectLayout'

const DRIVE_ID = '1gWVxHOLzJEpdffz-Q8tRVQ5W3vetk3ka'

export default function GameModelValencia() {
  const meta = {
    category: 'Analyse Tactique',
    year: '2024',
    tags: ['PDF'],
    title: 'Game Model\nValencia CF',
  }

  const contextText = "Proposition d'un nouveau game model complet pour le Valencia CF (2024), réalisée dans le cadre du Master en Football Coaching & Management au Real Madrid. Dans un contexte de reconstruction sportive et financière, la mission était de proposer un modèle de jeu cohérent avec le profil de l'effectif et les réalités du club."

  const anchorSections = [
    { id: 'methodologie', label: 'Méthodologie' },
    { id: 'game-model', label: 'Game Model Proposé' },
    { id: 'outils', label: 'Outils' },
  ]

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
      contextText={contextText}
      anchorSections={anchorSections}
      embedSection={embedSection}
      nextProject={{ slug: 'microcycle-valencia', title: 'Microcycle Valencia' }}
    >

      <h2 id="methodologie">Méthodologie</h2>
      <ul>
        <li>Analyse comparative (Benchmarking) : KPI pour comparer LaLiga aux autres championnats européens (EPL, Bundesliga, Liga NOS) sur critères physiques (vitesse de pointe, sprints, distance couverte) et techniques (attaques directes, style de relance des gardiens).</li>
        <li>Profilage de l'effectif : Analyse démographique (âge moyen 24,1 ans) et évaluation qualitative et quantitative des compétences individuelles pour définir des rôles sur mesure.</li>
        <li>Modélisation des phases de jeu : Définition de macro-principes et sous-principes tactiques pour les quatre phases — possession, transition attaque-défense, hors possession, transition défense-attaque — par zone de terrain (construction, zone créative, finition).</li>
        <li>Visualisation tactique : Schémas de circuits de relance et positionnement par zones pour structurer l'animation collective.</li>
      </ul>

      <h2 id="game-model">Game Model Proposé</h2>
      <ul>
        <li>Optimisation tactique : Passage d'un pressing haut à un bloc médian en 4-1-4-1 pour mieux contrôler le centre et forcer l'adversaire à jouer de longs ballons.</li>
        <li>Exploitation des avantages physiques : Utilisation de la taille et de la vitesse de l'effectif pour dominer les duels et les phases de transition.</li>
        <li>Repositionnement stratégique des joueurs clés : Nouveau rôle de sentinelle pour Javi Guerra, utilisant sa vision de jeu et sa puissance physique pour dicter le rythme.</li>
        <li>Standardisation des phases arrêtées : Protocoles précis pour corners et coups francs, avec marquage mixte pour améliorer l'efficacité offensive et défensive.</li>
        <li>Amélioration de la création : Principes de rotation et de surnombre sur les ailes pour exploiter les qualités en un contre un des ailiers comme Diego López.</li>
      </ul>

      <h2 id="outils">Outils</h2>
      <ul>
        <li>Wyscout — analyse vidéo et données statistiques</li>
        <li>InStat — métriques de performance</li>
        <li>Références tactiques : Juego de Posición, Gegenpressing</li>
      </ul>

    </ProjectLayout>
  )
}
