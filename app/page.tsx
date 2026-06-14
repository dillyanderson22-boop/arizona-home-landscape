import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowUpRight, Star, ShieldCheck, MapPin, Sprout, Droplets, Grid3x3, Trees } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { Counter } from '@/components/Counter'
import { site, px, photos } from '@/lib/site'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-bg2 grain">
        <Image src={px(photos.hero, 2000)} alt="A finished East Valley backyard landscaped by Arizona Home & Landscape" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/55 via-bg/20 to-bg/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/70 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-shell px-5 pb-16 lg:px-10 lg:pb-24">
          <div className="kicker flex items-center gap-3 text-accent">
            <span className="h-px w-8 bg-accent" /> Chandler, Arizona · Since 2009
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(48px,8.5vw,128px)] font-700 font-semibold uppercase leading-[0.9] tracking-tight">
            Your yard, <span className="text-accent">desert-built</span> to last.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg/85">
            Custom landscapes, turf, irrigation and paver hardscape for homes across the East Valley — designed for Arizona sun and built by the owner, not subcontractors.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href={site.phoneHref} className="inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 font-medium text-bg transition-colors duration-500 ease-[var(--ease-quint)] hover:bg-accent-dark">
              <Phone size={18} /> Call {site.phone}
            </a>
            <Link href="/work" className="group inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 font-medium text-fg backdrop-blur-sm transition-colors duration-500 hover:border-fg/40">
              See our work <ArrowUpRight size={18} className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="border-y border-line bg-bg2">
        <div className="mx-auto flex max-w-shell flex-wrap items-center justify-between gap-x-10 gap-y-4 px-5 py-5 text-sm lg:px-10">
          <span className="inline-flex items-center gap-2 text-fg/80"><Star size={16} className="fill-sand text-sand" /> {site.rating}★ on Google · {site.reviewCount} reviews</span>
          <span className="inline-flex items-center gap-2 text-fg/80"><ShieldCheck size={16} className="text-accent" /> Family-owned & owner-operated</span>
          <span className="inline-flex items-center gap-2 text-fg/80"><MapPin size={16} className="text-accent" /> Serving the East Valley</span>
          <span className="hidden text-fg/80 sm:inline">Est. {site.founded}</span>
        </div>
      </div>

      {/* SERVICES */}
      <Reveal className="mx-auto max-w-shell px-5 py-28 lg:px-10 lg:py-36">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div data-reveal className="kicker text-accent">What we do</div>
            <h2 data-reveal className="mt-4 max-w-2xl font-display text-5xl font-semibold uppercase leading-[0.95] tracking-tight md:text-7xl">
              Full-service yards, start to finish.
            </h2>
          </div>
          <p data-reveal className="max-w-sm text-muted">
            One crew handles design, build and the dial-in afterward — so your project never gets handed off or left half-done.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-12">
          <div data-reveal className="group relative overflow-hidden rounded-2xl md:col-span-7">
            <div className="relative aspect-[16/11] w-full">
              <Image src={px(photos.desertDesign, 1400)} alt="Modern low-water desert landscape design with gravel and stepping stones" fill sizes="(max-width:768px) 100vw, 58vw" className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-quint)] group-hover:scale-[1.04]" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent" />
            </div>
            <div className="absolute bottom-0 p-7">
              <Sprout className="mb-3 text-accent" />
              <h3 className="font-display text-3xl font-semibold uppercase tracking-tight md:text-4xl">Desert landscape design</h3>
              <p className="mt-2 max-w-md text-sm text-fg/80">Low-water, low-maintenance yards built around plants that actually thrive in Chandler heat — designed to look good year round.</p>
            </div>
          </div>

          <div className="flex flex-col gap-5 md:col-span-5">
            {[
              { icon: Grid3x3, t: 'Artificial & natural turf', d: 'Premium synthetic grass and real sod — clean edges, proper base, no seams showing.' },
              { icon: Droplets, t: 'Irrigation & drip systems', d: 'Full front- and backyard irrigation tuned to save water and keep everything alive through summer.' },
              { icon: Trees, t: 'Pavers, plants & cleanups', d: 'Paver patios and walkways, tree and plant installs, and full yard transformations.' },
            ].map((s) => (
              <div key={s.t} data-reveal className="flex flex-1 flex-col justify-center rounded-2xl border border-line bg-card p-7 transition-colors duration-500 hover:border-accent/40">
                <s.icon className="mb-3 text-accent" />
                <h3 className="font-display text-2xl font-semibold uppercase tracking-tight">{s.t}</h3>
                <p className="mt-2 text-sm text-muted">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <Link href="/services" className="link-sweep inline-flex items-center gap-2 font-display uppercase tracking-wide text-accent">
            All services <ArrowUpRight size={18} />
          </Link>
        </div>
      </Reveal>

      {/* BY THE NUMBERS */}
      <section className="border-y border-line bg-bg2">
        <Reveal className="mx-auto max-w-shell px-5 py-24 lg:px-10">
          <div data-reveal className="kicker mb-12 text-accent">By the numbers</div>
          <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4">
            {[
              { v: <Counter to={17} suffix="+" />, l: 'Years in the Valley' },
              { v: <Counter to={5.0} decimals={1} />, l: 'Star Google rating' },
              { v: <Counter to={12} />, l: 'Five-star reviews' },
              { v: <Counter to={6} />, l: 'Cities served' },
            ].map((n, i) => (
              <div key={i} data-reveal>
                <div className="font-display text-6xl font-bold text-accent md:text-7xl">{n.v}</div>
                <div className="mt-2 text-sm uppercase tracking-wide text-muted">{n.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* PROCESS */}
      <Reveal className="mx-auto max-w-shell px-5 py-28 lg:px-10 lg:py-36">
        <div data-reveal className="kicker text-accent">How it works</div>
        <h2 data-reveal className="mt-4 max-w-2xl font-display text-5xl font-semibold uppercase leading-[0.95] tracking-tight md:text-6xl">
          Simple, start to finish.
        </h2>
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {[
            { n: '01', t: 'Walk the yard', d: 'We come out, listen to what you want, and give you a clear, fair quote — no pressure, no upsell.' },
            { n: '02', t: 'Build it right', d: 'The owner runs the crew on your job. Proper base, clean lines, and we keep the site tidy day to day.' },
            { n: '03', t: 'Dial it in', d: 'We set your irrigation, show you how to run it, and make sure everything is exactly how you pictured it.' },
          ].map((s) => (
            <div key={s.n} data-reveal className="bg-bg p-8 lg:p-10">
              <div className="font-display text-5xl font-bold text-accent/30">{s.n}</div>
              <h3 className="mt-4 font-display text-2xl font-semibold uppercase tracking-tight">{s.t}</h3>
              <p className="mt-3 text-muted">{s.d}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* WORK PREVIEW */}
      <Reveal className="mx-auto max-w-shell px-5 pb-28 lg:px-10 lg:pb-36">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <div data-reveal className="kicker text-accent">Recent work</div>
            <h2 data-reveal className="mt-4 font-display text-5xl font-semibold uppercase leading-[0.95] tracking-tight md:text-6xl">Yards we&apos;ve built.</h2>
          </div>
          <Link href="/work" className="link-sweep hidden items-center gap-2 font-display uppercase tracking-wide text-accent sm:inline-flex">
            See all <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {photos.gallery.slice(0, 6).map((id, i) => (
            <div key={id} data-reveal className={`group relative overflow-hidden rounded-xl ${i === 0 ? 'col-span-2 row-span-2 aspect-square md:aspect-auto' : 'aspect-[4/3]'}`}>
              <Image src={px(id, 900)} alt="Arizona Home & Landscape project in the East Valley" fill sizes="(max-width:768px) 50vw, 33vw" className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-quint)] group-hover:scale-[1.05]" />
            </div>
          ))}
        </div>
      </Reveal>

      {/* TESTIMONIALS */}
      <section className="border-y border-line bg-bg2">
        <Reveal className="mx-auto max-w-shell px-5 py-24 lg:px-10">
          <div data-reveal className="kicker mb-12 text-accent">From the neighbors</div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { q: 'Steve and his crew installed a full irrigation system in the front and backyard, finished in two days. Very fair pricing and great, clean work.', a: 'Google review · Chandler' },
              { q: 'They put down about 800 square feet of turf in a single day. The quality of the turf is great compared to other companies I looked at.', a: 'Google review · East Valley' },
              { q: 'The whole team is fantastic — always on time, professional, and super responsive the entire project.', a: 'Google review · Gilbert' },
            ].map((t, i) => (
              <figure key={i} data-reveal className="flex flex-col rounded-2xl border border-line bg-bg p-7">
                <div className="mb-4 flex gap-0.5 text-sand">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} className="fill-sand" />)}
                </div>
                <blockquote className="flex-1 text-fg/90">&ldquo;{t.q}&rdquo;</blockquote>
                <figcaption className="mt-5 text-sm text-muted">{t.a}</figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <Reveal className="mx-auto max-w-shell px-5 py-28 text-center lg:px-10 lg:py-36">
        <h2 data-reveal className="mx-auto max-w-3xl font-display text-5xl font-semibold uppercase leading-[0.95] tracking-tight md:text-7xl">
          Ready to rebuild your yard?
        </h2>
        <p data-reveal className="mx-auto mt-6 max-w-md text-muted">
          Call Steve for a straight-up quote. Most estimates are scheduled within a couple of days.
        </p>
        <div data-reveal className="mt-9 flex flex-wrap justify-center gap-4">
          <a href={site.phoneHref} className="inline-flex items-center gap-2.5 rounded-full bg-accent px-8 py-4 font-medium text-bg transition-colors duration-500 hover:bg-accent-dark">
            <Phone size={18} /> {site.phone}
          </a>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-line px-8 py-4 font-medium transition-colors duration-500 hover:border-fg/40">
            Request a quote
          </Link>
        </div>
      </Reveal>
    </>
  )
}
