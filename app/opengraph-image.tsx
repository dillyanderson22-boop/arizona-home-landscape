import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Arizona Home & Landscape — Landscaping & Turf in Chandler, AZ'

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'linear-gradient(135deg,#0E1411 0%,#16201B 60%,#1B2620 100%)', color: '#E9ECE6', padding: 72, fontFamily: 'sans-serif' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div style={{ width: 64, height: 64, borderRadius: 14, background: '#6FB23E', color: '#0E1411', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 44, fontWeight: 700 }}>A</div>
          <div style={{ fontSize: 30, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 600 }}>Arizona Home &amp; Landscape</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.02, letterSpacing: -1 }}>Desert-built landscapes</div>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.02, letterSpacing: -1, color: '#6FB23E' }}>for the East Valley.</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 26, color: '#9AA89D' }}>
          <span>Chandler, AZ · Since 2009</span>
          <span style={{ color: '#D7A24E' }}>★ 5.0 Google</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
