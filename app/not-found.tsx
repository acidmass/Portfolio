import Link from 'next/link'
import { Container } from '@/components/container'
import { LocalizedText } from '@/components/localized-text'

export default function NotFound() {
  return (
    <Container className="pb-32 pt-24 md:pt-40">
      <p className="eyebrow text-muted-foreground">Error 404</p>
      <h1 className="mt-6 text-6xl font-bold leading-[0.9] md:text-8xl">
        <LocalizedText es="Página no encontrada" en="Page not found" />
      </h1>
      <Link href="/" className="mt-10 inline-flex items-center gap-3 rounded-full bg-brand px-5 py-3 font-semibold">
        ← <LocalizedText es="Volver al inicio" en="Back to home" />
      </Link>
    </Container>
  )
}
