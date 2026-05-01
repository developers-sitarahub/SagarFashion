import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://sagarfashion.world'),
  title: {
    default: 'Sagar Fashion | Global Exporters of Indian Ethnic Wear',
    template: '%s | Sagar Fashion'
  },
  description: 'Sagar Fashion is a leading exporter and importer of premium Indian ethnic wear. Discover our exclusive collection of traditional garments, sarees, kurtis, and lehengas.',
  keywords: ['Indian ethnic wear', 'garment exporter', 'traditional clothing', 'fashion export', 'sarees', 'kurtis', 'lehengas', 'Mumbai', 'Vasai', 'wholesale'],
  authors: [{ name: 'Sagar Fashion' }],
  creator: 'Sagar Fashion',
  publisher: 'Sagar Fashion',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Sagar Fashion | Global Exporters of Indian Ethnic Wear',
    description: 'Sagar Fashion is a leading exporter and importer of premium Indian ethnic wear.',
    url: 'https://sagarfashion.world',
    siteName: 'Sagar Fashion',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sagar Fashion Indian Ethnic Wear',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sagar Fashion | Global Exporters of Indian Ethnic Wear',
    description: 'Sagar Fashion is a leading exporter and importer of premium Indian ethnic wear.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#d4a574',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geist.className} font-sans antialiased bg-cream text-dark`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
