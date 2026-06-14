import Link from 'next/link'

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Arizona Home & Landscape — home">
      <span className="grid h-9 w-9 place-items-center rounded-[7px] bg-accent text-bg font-display font-bold text-lg leading-none transition-transform duration-500 ease-[var(--ease-quint)] group-hover:rotate-[-6deg]">
        A
      </span>
      <span className={`font-display font-semibold uppercase leading-[0.95] tracking-tight ${light ? 'text-bg' : 'text-fg'}`}>
        <span className="block text-[13px]">Arizona Home</span>
        <span className="block text-[13px] text-accent">&amp; Landscape</span>
      </span>
    </Link>
  )
}
