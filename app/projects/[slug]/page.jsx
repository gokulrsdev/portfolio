import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Navbar, Transition } from '@/layout';

const projectDetails = {
  'financial-tracker-web-app': {
    title: 'Financial Tracker Web App',
    brief:
      'Smart money dashboard to track income, expenses, and savings with clear visual analytics.',
    stack: ['JavaScript', 'Frontend UI', 'Data Visualization'],
    mainImage: '/project-real/financial-tracker.png',
    challenge:
      'Students and early professionals often know they are overspending, but lack a simple way to understand daily money flow and category trends.',
    approach:
      'Designed a clean dashboard-first experience where users quickly add transactions, see categorized totals, and monitor month-wise spending patterns.',
    highlights: [
      'Income, expense, and savings tracking in one workflow',
      'Category-level spend breakdown for better budgeting decisions',
      'Simple visual summaries focused on clarity over complexity',
    ],
    impact: [
      'Improved spending awareness with faster daily logging',
      'Reduced financial blind spots through visual trend visibility',
    ],
  },
  'ai-study-anti-distraction-system': {
    title: 'AI Study & Anti-Distraction System',
    brief:
      'A focused learning assistant with distraction checks, timer flow, and study-performance insights.',
    stack: ['AI Concepts', 'Productivity Logic', 'Web App UX'],
    mainImage: '/project-real/ai-study-anti-distraction.png',
    challenge:
      'Many learners lose momentum from constant tab-switching and unstructured sessions, which hurts deep focus and consistency.',
    approach:
      'Built a study environment that combines session timing, distraction monitoring, and AI-assisted feedback to keep study blocks productive.',
    highlights: [
      'Anti-distraction checks with behavioral nudges',
      'Pomodoro and custom timer support for flexible routines',
      'Session analytics to reflect focus quality and consistency',
    ],
    impact: [
      'Helps users maintain focused study sessions for longer periods',
      'Converts scattered effort into measurable learning routines',
    ],
  },
  'ai-phishing-detector': {
    title: 'AI Phishing Detector',
    brief:
      'Security-focused tool that evaluates suspicious links and messages with instant risk clarity.',
    stack: ['Cybersecurity', 'AI Analysis', 'Trust UX'],
    mainImage: '/project-real/ai-phishing-detection.jpg',
    challenge:
      'Users frequently receive suspicious links or emails but struggle to quickly evaluate risk and make safe decisions.',
    approach:
      'Created an AI-assisted checker that classifies potential phishing attempts and explains the risk signals in simple language.',
    highlights: [
      'Fast risk scoring for links and message content',
      'Readable AI explanations instead of purely technical warnings',
      'Interface designed for quick yes-or-no safety decisions',
    ],
    impact: [
      'Improves phishing awareness for non-technical users',
      'Encourages safer click behavior through explainable feedback',
    ],
  },
  'habit-tracker-with-heatmap': {
    title: 'Habit Tracker with Heatmap',
    brief:
      'Consistency tracker with streak visualizations to build momentum and long-term behavior.',
    stack: ['Behavior Design', 'Progress Tracking', 'Frontend Development'],
    mainImage: '/project-real/habit-tracker-heatmap.png',
    challenge:
      'People start habits with motivation but fail to sustain consistency because progress is not visible enough day to day.',
    approach:
      'Implemented a lightweight daily tracker with a heatmap-based progress view to make consistency and streak patterns instantly visible.',
    highlights: [
      'Daily habit logging with low friction interaction',
      'GitHub-style heatmap to visualize consistency over time',
      'Streak-focused design to reinforce positive routines',
    ],
    impact: [
      'Makes long-term progress more motivating and trackable',
      'Improves habit continuity through visual momentum cues',
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(projectDetails).map(slug => ({ slug }));
}

export function generateMetadata({ params }) {
  const project = projectDetails[params.slug];

  if (!project) {
    return {
      title: 'Project | Gokul RS',
      description: 'Project case study',
    };
  }

  return {
    title: `${project.title} | Gokul RS`,
    description: project.brief,
  };
}

export default function ProjectDetailPage({ params }) {
  const project = projectDetails[params.slug];

  if (!project) {
    notFound();
  }

  return (
    <Transition>
      <Navbar />
      <main className='relative overflow-hidden bg-transparent text-foreground'>
        <div
          aria-hidden='true'
          className='gold-frame-page pointer-events-none absolute inset-0'
        />

        <section className='container relative z-10 pt-36 pb-24'>
          <Link
            href='/'
            className='inline-flex rounded-full border border-amber-300/65 bg-white/75 px-4 py-2 text-sm font-semibold tracking-[0.08em] text-amber-800 transition-colors hover:bg-amber-50'
          >
            Back to Home
          </Link>

          <h1 className='mt-6 max-w-5xl text-[clamp(2rem,6vw,4.6rem)] leading-[1.02]'>
            {project.title}
          </h1>
          <p className='mt-6 max-w-3xl rounded-xl border border-zinc-300/50 bg-white/80 p-5 text-lg text-zinc-700 shadow-[0_12px_24px_rgba(0,0,0,0.08)]'>
            {project.brief}
          </p>

          <div className='mt-10 relative h-[clamp(16rem,45vw,34rem)] w-full overflow-hidden rounded-3xl border border-amber-300/60 bg-white/75 shadow-[0_16px_34px_rgba(0,0,0,0.16)]'>
            <Image
              src={project.mainImage}
              alt={`${project.title} main visual`}
              fill={true}
              className='object-cover'
              sizes='100vw'
              priority={true}
            />
          </div>

          <div className='mt-12'>
            <h2 className='text-2xl font-semibold'>Tech Snapshot</h2>
            <div className='mt-4 flex flex-wrap gap-3'>
              {project.stack.map(item => (
                <span
                  key={item}
                  className='rounded-full border border-cyan-300/70 bg-cyan-50/80 px-4 py-1.5 text-sm font-semibold text-cyan-900'
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className='mt-12 grid gap-6 md:grid-cols-2'>
            <article className='rounded-2xl border border-zinc-300/55 bg-white/80 p-6 shadow-[0_12px_24px_rgba(0,0,0,0.08)]'>
              <h2 className='text-2xl font-semibold'>Problem</h2>
              <p className='mt-3 text-zinc-700'>{project.challenge}</p>
            </article>

            <article className='rounded-2xl border border-cyan-300/55 bg-cyan-50/55 p-6 shadow-[0_12px_24px_rgba(12,74,110,0.09)]'>
              <h2 className='text-2xl font-semibold'>Approach</h2>
              <p className='mt-3 text-zinc-700'>{project.approach}</p>
            </article>
          </div>

          <div className='mt-8 grid gap-6 md:grid-cols-2'>
            <article className='rounded-2xl border border-amber-300/55 bg-amber-50/60 p-6 shadow-[0_12px_24px_rgba(100,70,20,0.08)]'>
              <h2 className='text-2xl font-semibold'>Key Features</h2>
              <ul className='mt-4 space-y-3'>
                {project.highlights.map(item => (
                  <li
                    key={item}
                    className='rounded-lg border border-amber-300/60 bg-white/80 px-4 py-3 text-zinc-700'
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className='rounded-2xl border border-emerald-300/55 bg-emerald-50/55 p-6 shadow-[0_12px_24px_rgba(30,90,70,0.08)]'>
              <h2 className='text-2xl font-semibold'>Project Impact</h2>
              <ul className='mt-4 space-y-3'>
                {project.impact.map(item => (
                  <li
                    key={item}
                    className='rounded-lg border border-emerald-300/60 bg-white/80 px-4 py-3 text-zinc-700'
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className='mt-10 rounded-2xl border border-zinc-300/55 bg-white/80 p-6 shadow-[0_12px_24px_rgba(0,0,0,0.08)]'>
            <h2 className='text-2xl font-semibold'>Summary</h2>
            <p className='mt-3 text-zinc-700'>
              This project reflects a practical build mindset: identify a real
              pain point, design a focused user flow, and deliver measurable
              value through a clean and usable interface.
            </p>
          </div>
        </section>
      </main>
    </Transition>
  );
}
