import type { Metadata, Viewport } from 'next'
import { Geist_Mono, DM_Sans } from 'next/font/google'
import './globals.css'


const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'NGBOOKINS',
  description:
    'NGBOOKINS',
  applicationName: 'NGBOOKINS',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    // apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#030303' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>

        <body className={`${dmSans.className} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
