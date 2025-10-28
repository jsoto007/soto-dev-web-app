import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'

const recruiterHighlights = [
  {
    title: 'Senior talent with automation expertise',
    body:
      'We place engineers who blend product thinking with AI workflow automation, so you can respond to client requests that demand more than staff augmentation.',
  },
  {
    title: 'Predictable onboarding playbooks',
    body:
      'Our engineers ship a 30-60-90 plan, environment checklists, and knowledge transfer docs that help your client teams hit productivity faster.',
  },
  {
    title: 'White-label delivery support',
    body:
      'Need backfill during peak demand? We co-deliver under your brand with weekly reporting, safeguarding your client relationships.',
  },
]

export function RecruiterSection() {
  return (
    <section className="mt-24 sm:mt-32 lg:mt-40">
      <SectionIntro
        eyebrow="Recruiter Enablement"
        title="Purpose-built partnership support for technical recruiters"
      >
        Give your clients immediate access to vetted software engineers who
        understand regulated industries, automation, and stakeholder
        communication. We bridge discovery, delivery, and retention so you can
        close roles faster and retain accounts longer.
      </SectionIntro>

      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {recruiterHighlights.map((highlight) => (
            <FadeIn
              key={highlight.title}
              className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm shadow-neutral-200/40"
            >
              <h3 className="font-display text-2xl font-semibold text-neutral-950">
                {highlight.title}
              </h3>
              <p className="mt-4 text-base text-neutral-600">{highlight.body}</p>
            </FadeIn>
          ))}
        </FadeInStagger>

        <FadeIn className="mt-16 rounded-3xl bg-neutral-950 px-8 py-10 text-white sm:px-12 sm:py-12 lg:flex lg:items-center lg:justify-between">
          <div>
            <h3 className="font-display text-2xl font-semibold text-white">
              Need a candidate shortlist this week?
            </h3>
            <p className="mt-4 max-w-xl text-base text-neutral-300">
              Book a 20-minute intake call. We will review your role, share
              relevant case studies, and deliver pre-vetted profiles within four
              business days.
            </p>
          </div>
          <div className="mt-8 flex items-center gap-4 lg:mt-0">
            <Button href="/contact" invert>
              Schedule intake call
            </Button>
            <a
              href="/work"
              className="text-sm font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
            >
              Explore client wins
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
