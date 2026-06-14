import type { Metadata } from 'next'
import { SmoothScroll } from '@/components/SmoothScroll'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { site } from '@/lib/site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Arizona Home & Landscape — Landscaping & Turf in Chandler, AZ',
    template: '%s | Arizona Home & Landscape',
  },
  description:
    'Chandler-based landscaping since 2009. Custom desert yard design, artificial & natural turf, irrigation, and paver hardscapes across the East Valley. 5.0★ on Google.',
  keywords: ['landscaping Chandler AZ', 'artificial turf Chandler', 'irrigation install', 'desert landscaping', 'paver patio', 'East Valley landscaper'],
  openGraph: {
    title: 'Arizona Home & Landscape — Landscaping & Turf in Chandler, AZ',
    description: 'Custom desert yards, turf, irrigation & hardscape across the East Valley since 2009.',
    url: site.url,
    siteName: site.name,
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LandscapingBusiness',
  name: site.name,
  image: `${site.url}/opengraph-image`,
  url: site.url,
  telephone: '+14803266774',
  foundingDate: '2009',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.street,
    addressLocality: site.city,
    addressRegion: site.region,
    postalCode: site.zip,
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 33.2486, longitude: -111.8606 },
  areaServed: site.areas.map((a) => ({ '@type': 'City', name: a })),
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00', closes: '16:00',
  }],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: site.rating, reviewCount: site.reviewCount },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </head>
      <body className="font-body antialiased">
        <SmoothScroll>
          <Nav />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
