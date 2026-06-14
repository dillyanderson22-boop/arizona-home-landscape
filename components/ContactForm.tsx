'use client'
import { useState } from 'react'
import { Send } from 'lucide-react'
import { site } from '@/lib/site'

export function ContactForm() {
  const [f, setF] = useState({ name: '', phone: '', service: 'Desert landscape design', message: '' })
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Quote request — ${f.service}`)
    const body = encodeURIComponent(
      `Name: ${f.name}\nPhone: ${f.phone}\nService: ${f.service}\n\n${f.message}`
    )
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
  }
  const field = 'w-full rounded-xl border border-line bg-bg px-4 py-3 text-fg outline-none transition-colors duration-300 placeholder:text-muted focus:border-accent'
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input required placeholder="Your name" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} className={field} />
        <input required placeholder="Phone number" value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} className={field} />
      </div>
      <select value={f.service} onChange={(e) => setF({ ...f, service: e.target.value })} className={field}>
        {['Desert landscape design', 'Artificial & natural turf', 'Irrigation & drip systems', 'Pavers & hardscape', 'Yard transformation / cleanup', 'Something else'].map((o) => <option key={o}>{o}</option>)}
      </select>
      <textarea required rows={5} placeholder="Tell us about your yard…" value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} className={field} />
      <button type="submit" className="inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 font-medium text-bg transition-colors duration-500 hover:bg-accent-dark">
        <Send size={17} /> Send request
      </button>
      <p className="text-xs text-muted">Prefer to talk? Call {site.phone} — Steve usually picks up.</p>
    </form>
  )
}
