'use client'

import Navbar from './components/navbar'
import StyledComponentsRegistry from './lib/registry'
import { GlobalStyles } from './styles/GlobalStyles'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='pt-br'>
      <head />
      <body >
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Navbar />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}