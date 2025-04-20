import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Sidenav from '../components/Sidenav' // Added Sidenav here

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Oladapo | My Personal Hub',
  keywords: 'Oladapo, personal hub, portfolio, blog',
  authors: [{ name: 'Oladapo' }],
  creator: 'Oladapo',
  publisher: 'Oladapo',
  description: 'My Personal Hub',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Sidenav /> {/* Added navbar globally */}
        {children}
      </body>
    </html>
  )
}
