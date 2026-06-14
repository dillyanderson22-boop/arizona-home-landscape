import Image from 'next/image'
import Link from 'next/link'
import { Phone, ShieldCheck, HandHeart, Sun } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { site, px, photos } from '@/lib/site'

export const metadata = {
  title: 'About — Family-owned Chandler landscaper since 2009',
  description: 'Arizona Home & Landscape is a family-owned, owner-operated landscaping company in Chandler, AZ, building desert yards across the East Valley since 2009.',
}

export default function About() {
  return (
    <>
      <Reveal className="mx-auto flex min-h-[72vh] max-w-shell flex-col justify-center px-5 pt-32 lg:px-10">
        <div data-reveal className="kicker text-accent">About us</div>
        <h1 data-reveal className="mt-5 max-w-5xl font-display text-[clamp(44px,8vw,120px)] font-semibold uppercase leading-[0.9] tracking-tight">
          Built by the owner, <span className="text-accent">not subcontractors.</span>
        </h1>
        <p data-reveal className="mt-8 max-w-2xl text-xl leading-relaxed text-fg/85">
          Arizona Home &amp; Landscape has been transforming East Valley yards out of Chandler since 2009. When you hire us, Steve is on your job — not a rotating crew of subs you&apos;ll never meet.
        </p>
      </Reveal>

      <Reveal className="mx-auto grid max-w-shell items-center gap-12 px-5 py-24 lg:grid-cols-2 lg:px-10">
        <div data-reveal className="relative aspect-[4/5] overflow-hidden rounded-2xl">
          <Image src={px(photos.turf, 1200)} alt="A freshly landscaped East Valley backyard with healthy turf" fill sizes="(max-width:1024px) 100vw, 45vw" className="object-cover" />
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-fg/85">
          <p data-reveal>It started with a simple idea: do honest, careful landscaping work and treat every yard like it&apos;s your own. Seventeen years later, that hasn&apos;t changed.</p>
          <p data-reveal>We&apos;re a small, hands-on team. That means we keep our jobs tight, our pricing fair, and our sites clean — and we&apos;re responsive when you call, before <em>and</em> after the work is done.</p>
          <p data-reveal>From full desert redesigns to turf, irrigation and pavers, we build yards that hold up to Arizona summers and look good with minimal upkeep.</p>
          <a data-reveal href={site.phoneHref} className="inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 font-medium text-bg transition-colors duration-500 hover:bg-accent-dark">
            <Phone size={18} /> Talk to Steve
          </a>
        </div>
      </Reveal>

      <section className="border-y border-line bg-bg2">
        <Reveal className="mx-auto max-w-shell px-5 py-24 lg:px-10">
          <div data-reveal className="kicker mb-12 text-accent">What you can count on</div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: ShieldCheck, t: 'Owner-run jobs', d: 'The person who quotes your project is the person running it. Nothing gets handed off.' },
              { icon: HandHeart, t: 'Fair, clear pricing', d: 'Straight quotes with no surprise line items. You know the number before we start.' },
              { icon: Sun, t: 'Built for the desert', d: 'Plants, turf and irrigation chosen to survive Arizona heat and keep water bills down.' },
            ].map((v) => (
              <div key={v.t} data-reveal>
                <v.icon className="mb-4 text-accent" size={28} />
                <h3 className="font-display text-2xl font-semibold uppercase tracking-tight">{v.t}</h3>
                <p className="mt-3 text-muted">{v.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <Reveal className="mx-auto max-w-shell px-5 py-28 text-center lg:px-10">
        <h2 data-reveal className="font-display text-4xl font-semibold uppercase tracking-tight md:text-6xl">See what we can do with your yard.</h2>
        <div data-reveal className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/work" className="rounded-full bg-accent px-8 py-4 font-medium text-bg transition-colors duration-500 hover:bg-accent-dark">View our work</Link>
          <Link href="/contact" className="rounded-full border border-line px-8 py-4 font-medium transition-colors duration-500 hover:border-fg/40">Get a quote</Link>
        </div>
      </Reveal>
    </>
  )
}
