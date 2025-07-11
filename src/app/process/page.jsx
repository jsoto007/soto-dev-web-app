import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import { RootLayout } from '@/components/RootLayout'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-135 flex-none lg:w-180">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-148 lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We begin by deeply understanding your business challenges, operations, and objectives. Through collaborative workshops and targeted discovery sessions, we gather the insights necessary to recommend tailored solutions.
        </p>
        <p>
          Our goal in this phase is to uncover the root problems and validate assumptions so that we can architect practical, scalable software aligned with your vision.
        </p>
        <p>
          This phase ends with a clear plan of action and aligned expectations on deliverables and outcomes.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Discovery workshops</TagListItem>
        <TagListItem>Process mapping</TagListItem>
        <TagListItem>User interviews</TagListItem>
        <TagListItem>Requirements gathering</TagListItem>
        <TagListItem>Technical feasibility</TagListItem>
        <TagListItem>Project scope definition</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Once the plan is in place, we move into agile development sprints. We prioritize transparency, collaboration, and quality, ensuring that each iteration brings you closer to a functional solution.
        </p>
        <p>
          Our team uses modern, proven technologies and best practices to build secure, maintainable, and performant software that solves your real-world business problems.
        </p>
        <p>
          We keep communication open throughout, providing regular demos and check-ins to gather feedback and adapt to evolving needs.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Jordan Lee', role: 'Founder of SmallBiz Solutions' }}
        className="mt-12"
      >
        SotoDev i s custom software empowered our team to streamline operations and work smarter. Their clarity, communication, and innovative use of AI made a real difference for our business.
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          As we near completion, we ensure your product is thoroughly tested, documented, and deployed with minimal disruption to your business.
        </p>
        <p>
          Our launch process includes QA, performance tuning, and end-user training when needed—ensuring you’re fully equipped to get value from day one.
        </p>
        <p>
          Post-launch, we offer maintenance and support options to keep your software running smoothly as your business grows.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Quality Assurance">
          We rigorously test every feature to ensure reliability, usability, and performance before launch.
        </ListItem>
        <ListItem title="Infrastructure">
          We deploy your solution using scalable and secure cloud infrastructure tailored to your needs.
        </ListItem>
        <ListItem title="Support">
          From bug fixes to future iterations, our team is available to support and evolve your software.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-100 stroke-neutral-950/5"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Balancing reliability and innovation"
      >
        <p>
          At SotoDev, we believe in solving problems through practical design, strategic reuse, and focused innovation. These values guide how we collaborate, build, and deliver impact to small businesses.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Client-Focused">
            We build with our clients real goals in mind—not abstract ideas or unnecessary features.
          </GridListItem>
          <GridListItem title="Efficient">
            We reuse proven components and patterns to save time, reduce risk, and maximize value.
          </GridListItem>
          <GridListItem title="Reliable">
            Our process and communication are dependable—we do what we say, and we deliver.
          </GridListItem>
          <GridListItem title="Transparent">
            We keep clients in the loop with updates, feedback cycles, and honest timelines.
          </GridListItem>
          <GridListItem title="Pragmatic">
            We prioritize solutions that work today, but can scale for tomorrow.
          </GridListItem>
          <GridListItem title="Innovative">
            We stay current with modern tools so you get thoughtful, sustainable software—not just trend-driven tech.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
          At SotoDev, we focus on efficiency and purposeful reuse to deliver maximum value to our clients. Our approach builds on proven solutions while tailoring each project to fit the specific needs of small businesses and private practices.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </RootLayout>
  )
}
