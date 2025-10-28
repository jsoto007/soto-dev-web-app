export const hiringSoftwareEngineerFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does it cost to hire a software engineer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Budgets are driven by project scope, complexity, and required integrations. Most growth-focused clients allocate $12k–$25k per month for a dedicated senior engineer or automation specialist, aligning to timelines of 8–16 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do we keep the project on schedule?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Weekly delivery checkpoints, backlog grooming, and automated testing pipelines are the most reliable levers for staying on track. Transparent burndown reporting keeps stakeholders aligned on scope changes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should we prepare before kickoff?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Document user journeys, quantify the business problem, and prioritize integrations. Providing access to subject-matter experts accelerates onboarding and shortens time-to-value.',
      },
    },
  ],
}
