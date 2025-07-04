import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/Button'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
// import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import bmfLogo from '../images/clients/unseal/bmfLogo.svg'
import imageLaptop from '@/images/laptop.jpg'
import { loadCaseStudies } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

import hugging_face from '../images/tech/hugging_face.svg'

import openai_dark from '../images/tech/openai_dark.svg'
import python from '../images/tech/python.svg'
import typescript from '../images/tech/typescript.svg'
import nextjs from '../images/tech/nextjs.svg'
import tailwindcss from '../images/tech/tailwindcss.svg'
import postgresql from '../images/tech/postgresql.svg'
import vitejs from '../images/tech/vitejs.svg'


const technologies = [
  ['OpenAI', openai_dark],
  ['Hugging Face', hugging_face],
  ['Python', python],
  ['postgresql', postgresql],
  ['TypeScript', typescript],
  ['Next.js', nextjs],
  ['vitejs', vitejs],
  ['tailwindcss', tailwindcss],

]

function Technologies() {
  return (
    <div className="mt-24 rounded-4xl bg-slate-900 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-[#A78BFA] sm:text-left">
          Building with proven, industry-standard technologies
          </h2>
          <div className="h-px flex-auto bg-[#334155]" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {technologies.map(([technology, logo]) => (
              <li key={technology} className="flex items-center gap-x-4">
                <FadeIn>
                  <Image src={logo} alt={technology} width={40} height={40} unoptimized />
                </FadeIn>
                <FadeIn>
                  <span className="font-display text-white text-lg font-medium">{technology}</span>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Using technology to leverage creativity"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        Technology should amplify human potential — unlocking new ways to create, connect, and solve meaningful problems.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-blue-950/5 transition hover:bg-[#F9FAFB] sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16 rounded-sm"
                      unoptimized
                    />
                  </Link>
                  
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-blue-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-[#334155]" aria-hidden="true">
                    /
                  </span>
                  <span>Past Projects</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-blue-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-[#334155]">
                  {caseStudy.description}
                </p>
                <div className="mt-auto flex justify-end">
                  <p className="mt-6 -mb-2 text-xs font-bold">Learn more →</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help small businesses unlock efficiency through custom software."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We design and develop AI-powered tools that eliminate repetitive tasks, automate workflows, and support your growth — so your team can focus on what matters most.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-180">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <ListItem title="Web development">
            We design and develop clean, intuitive websites that connect with your audience. Whether it’s a landing page or full product suite, we turn your ideas into fast, functional experiences.
            </ListItem>
            <ListItem title="Application development">
            We build powerful, scalable applications using modern frameworks like Next.js, TypeScript, and Python — designed to streamline operations, automate workflows, and scale with your business.
            </ListItem>
            <ListItem title="E-commerce">
            We create custom e-commerce experiences that drive sales, simplify operations, and integrate with your preferred platforms, whether you’re just getting started or ready to scale.
            </ListItem>
            <ListItem title="Custom content management">
            We build tailored dashboards and CMS tools that give you full control over your content and workflows — with simplicity, security, and scalability at the core.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-blue-950 sm:text-7xl">
          AI-Driven Software Solutions for Small Businesses.
          </h1>
          <p className="mt-6 text-xl text-[#334155]">
          We help small businesses and private practices automate repetitive tasks, streamline operations, and unlock new levels of efficiency — so your team can focus on high-value work, not busywork.
          </p>
        </FadeIn>
      </Container>

      <Technologies />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Burdier', logo: bmfLogo }}
      >
        SotoDev delivered exceptional work ahead of schedule. The custom software they built streamlined our internal processes and allowed my team to focus more on serving our clients. It’s saving us over 40 hours a week on repetitive tasks. An absolute game changer for our workflow.
      </Testimonial>

      <Services />

      <ContactSection />
    </RootLayout>
  )
}
