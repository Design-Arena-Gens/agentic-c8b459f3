export const metadata = {
  title: 'Accelio Lab - AI Infrastructure Consulting',
  description: 'Building AI Infrastructures for medium to large sized businesses',
}

import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
