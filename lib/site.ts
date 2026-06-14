export const site = {
  name: 'Arizona Home & Landscape',
  shortName: 'Arizona Home & Landscape',
  owner: 'Steve Brown',
  phone: '(480) 326-6774',
  phoneHref: 'tel:+14803266774',
  email: 'hello@azhomelandscape.com',
  street: '3830 S Heath Way',
  city: 'Chandler',
  region: 'AZ',
  zip: '85248',
  founded: 2009,
  rating: '5.0',
  reviewCount: 12,
  url: 'https://arizona-home-landscape.aydenbuilds.com',
  areas: ['Chandler', 'Gilbert', 'Sun Lakes', 'Tempe', 'Mesa', 'Ahwatukee'],
  tagline: 'Desert-built landscapes for the East Valley.',
}

// Curated Pexels CDN photos (real photography, hotlinked)
export const px = (id: number, w = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`

export const photos = {
  hero: 17158688,
  desertDesign: 34909157,
  turf: 7174104,
  irrigation: 31970476,
  pavers: 37785078,
  gallery: [17158688, 34909157, 33482598, 31970476, 35770883, 32046984, 33078884, 37785078, 14897906, 7174104],
}
