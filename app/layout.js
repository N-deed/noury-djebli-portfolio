import './globals.css'

export const metadata = {
  title: 'Noury Djebli — Data Analyst Football',
  description: 'Portfolio de Noury Djebli, Data Analyst Football. Analyse tactique, scouting, visualisation de données.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
