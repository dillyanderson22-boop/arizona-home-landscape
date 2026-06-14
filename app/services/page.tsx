import Image from 'next/image'
import { Phone, Check } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { site, px, photos } from '@/lib/site'

export const metadata = {
  title: 'Services — Landscaping, turf, irrigation & pavers in Chandler',
  description: 'Desert landscape design, artificial & natural turf installation, full irrigation and drip systems, paver patios and yard transformations across the East Valley.',
}

const services = [
  { id: 'design', t: 'Desert landscape design', img: photos.desertDesign,
    d: 'Custom front- and backyard designs built around low-water, low-maintenance plants that thrive in Chandler heat. We plan the whole yard so it looks intentional — not pieced together.',
    points: ['Full front & backyard layouts', 'Drought-tolerant plant selection', 'Gravel, rock & decomposed granite', 'Year-round curb appeal'] },
  { id: 'turf', t: 'Artificial & natural turf', img: photos.turf,
    d: 'Premium synthetic grass and real sod installed over a proper compacted base with clean edges and no visible seams. Great for kids, pets and putting the mower away for good.',
    points: ['Pet- & kid-friendly synthetic turf', 'Natural sod installation', 'Proper base prep & drainage', 'Tight, invisible seams'] },
  { id: 'irrigation', t: 'Irrigation & drip systems', img: photos.irrigation,
    d: 'Complete irrigation and drip systems for the whole yard, tuned to keep everything alive through summer while cutting your water bill. We set the controller and show you how to run it.',
    points: ['Full front & backyard systems', 'Water-saving drip lines', 'Timer & controller setup', 'Repairs & re-routes'] },
  { id: 'pavers', t: 'Pavers & hardscape', img: photos.pavers,
    d: 'Paver patios, walkways and seating areas that tie the yard together. Built on a solid base so they stay level and last — not just laid on sand.',
    points: ['Patios & walkways', 'Stepping-stone paths', 'Borders & edging', 'Seating & fire-pit areas'] },
  { id: 'transform', t: 'Transformations & cleanups', img: photos.gallery[2],
    d: 'Full yard overhauls and cleanups — tree and plant installs, hauling, regrading and disaster recovery. If your yard has gotten away from you, we bring it back.',
    points: ['Tree & plant installation', 'Full yard makeovers', 'Cleanups & haul-away', 'Storm & disaster recovery'] },
]

export default function Services() {
  return (
    <>
      <Reveal className="mx-auto flex min-h-[58vh] max-w-shell flex-col justify-center px-5 pt-32 lg:px-10">
        <div data-reveal className="kicker text-accent">Services</div>
        <h1 data-reveal className="mt-5 max-w-4xl font-display text-[clamp(44px,8vw,120px)] font-semibold uppercase leading-[0.9] tracking-tight">
          Everything your yard needs.
        </h1>
        <p data-reveal className="mt-8 max-w-2xl text-xl leading-relaxed text-fg/85">
          One crew for design, build and the dial-in afterward — so your project never gets handed off halfway.
        </p>
      </Reveal>

      <div className="mx-auto max-w-shell px-5 lg:px-10">
        {services.map((s, i) => (
          <Reveal key={s.id} className="border-t border-line py-20">
            <div id={s.id} className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              <div data-reveal className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src={px(s.img, 1200)} alt={s.t} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
              </div>
              <div>
                <div data-reveal className="font-display text-5xl font-bold text-accent/25">0{i + 1}</div>
                <h2 data-reveal className="mt-2 font-display text-4xl font-semibold uppercase tracking-tight md:text-5xl">{s.t}</h2>
                <p data-reveal className="mt-4 max-w-md text-lg leading-relaxed text-fg/85">{s.d}</p>
                <ul data-reveal className="mt-6 grid grid-cols-2 gap-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-muted"><Check size={16} className="mt-0.5 shrink-0 text-accent" />{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mx-auto max-w-shell px-5 py-28 text-center lg:px-10">
        <h2 data-reveal className="font-display text-4xl font-semibold uppercase tracking-tight md:text-6xl">Not sure where to start?</h2>
        <p data-reveal className="mx-auto mt-5 max-w-md text-muted">Call and tell us what you&apos;re thinking. We&apos;ll walk the yard and give you a clear quote.</p>
        <a data-reveal href={site.phoneHref} className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-accent px-8 py-4 font-medium text-bg transition-colors duration-500 hover:bg-accent-dark">
          <Phone size={18} /> Call {site.phone}
        </a>
      </Reveal>
    </>
  )
}
