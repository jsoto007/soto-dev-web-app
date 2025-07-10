import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { loadArticles } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Purpose-driven, people-first."
        invert
      >
        <p>
          We’re a remote-first, values-led team that blends creativity with accountability. Our success comes from collaboration, transparency, and real ownership.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Integrity" invert>
            We’re honest, transparent, and committed to doing what’s best for our clients and team.
          </GridListItem>
          <GridListItem title="Responsibility" invert>
            We take ownership of our work — and treat every client’s success as our own.
          </GridListItem>
          <GridListItem title="Empathy" invert>
            We listen first. Understanding our clients and each other is at the heart of great software.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}


export const metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <RootLayout>
      <PageIntro eyebrow="About us" title="Intelligent software. Built with heart.">
        <p>
          SotoDev specializes in smart, scalable software tailored to your unique business needs. Our mission is to empower small businesses and private practices through thoughtful automation and elegant design.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            We eliminate bloated costs and confusion. Instead, we bring clarity and efficiency, combining modern tech with a human-centered approach. Every product we build is designed to serve, scale, and simplify.
          </p>
          <p>
            From idea to launch, SotoDev partners with you every step of the way — ensuring your vision comes to life through dependable, intuitive software.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="12+" label="Projects launched" />
          <StatListItem value="100%" label="Client retention rate" />
          <StatListItem value="$0" label="Wasted resources" />
        </StatList>
      </Container>

      <Culture />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Our team of experienced designers and developers has just one thing on their mind; working on your ideas to draw a smile on the face of your users worldwide. From conducting Brand Sprints to UX Design."
        pages={blogArticles}
      />

      <ContactSection />
    </RootLayout>
  )
}
