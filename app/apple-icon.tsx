import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0E1411', color: '#6FB23E', fontSize: 120, fontWeight: 700, fontFamily: 'sans-serif' }}>
        A
      </div>
    ),
    { ...size }
  )
}
