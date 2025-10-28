
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import { RootLayout } from '@/components/RootLayout'

import ContactForm from '@/components/ContactForm'

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        How we collaborate
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        Soto Dev, LLC is a remote-first studio with team members across the
        United States. We gladly meet virtually and schedule on-site working
        sessions when projects demand it.
      </p>

      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Reach our team
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ['New projects', 'projects@sotodevllc.com'],
            ['Partnerships', 'hello@sotodevllc.com'],
            // ['Press', 'press@studioagency.com'],
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Stay in touch
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

export const metadata = {
  title: 'Contact Soto Dev, LLC',
  description:
    'Let’s design your next software win. Tell us about your project and the Soto Dev, LLC team will get right back to you.',
}

export default function Contact() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Contact Soto Dev, LLC" title="Let’s build momentum together">
        <p>
          Share where you want to take your product or operations, and we’ll map
          a plan to get you there. Most prospective clients hear back within one
          business day.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </RootLayout>
  )
}
