import Link from 'next/link';
import Image from 'next/image';

import { Transition, Navbar } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Work | Gokul RS',
  description:
    'Selected projects by Gokul RS across AI, cybersecurity, productivity systems, and practical web platforms.',
};

const projects = [
  {
    title: 'Financial Tracker Web App',
    symbol: '💹',
    accent: 'from-amber-300/35 via-amber-50/80 to-white/70',
    summary:
      'A web application to track expenses, monitor spending patterns, and improve financial awareness.',
    focus: 'Productivity, analytics, and personal finance behavior.',
  },
  {
    title: 'Blood Donor Life Link (Frontend)',
    symbol: '🩸',
    accent: 'from-rose-300/30 via-rose-50/80 to-white/70',
    summary:
      'A platform connecting blood donors with recipients with a clean, accessible interface.',
    focus: 'Accessibility-first UI for high-urgency use cases.',
  },
  {
    title: 'No-Code Website Builder for Local Vendors',
    symbol: '🧩',
    accent: 'from-blue-300/30 via-blue-50/80 to-white/70',
    summary:
      'Hackathon project that lets local vendors create and publish websites without coding.',
    focus:
      'Business onboarding, category/template selection, and fast publishing flow.',
  },
  {
    title: 'AI Study & Anti-Distraction System',
    symbol: '🧠',
    accent: 'from-violet-300/30 via-violet-50/80 to-white/70',
    summary:
      'Smart study platform designed to enforce focus and reduce distractions.',
    focus:
      'Attention checks, tab-switch detection, pomodoro/custom timers, and study efficiency reports.',
  },
  {
    title: 'Campus Lost & Found System',
    symbol: '📍',
    accent: 'from-emerald-300/30 via-emerald-50/80 to-white/70',
    summary:
      'A campus utility for reporting lost and found items to improve recovery outcomes.',
    focus: 'Community reliability and faster item traceability.',
  },
  {
    title: 'AI Resume Analyzer',
    symbol: '📄',
    accent: 'from-cyan-300/30 via-cyan-50/80 to-white/70',
    summary:
      'AI tool that analyzes resumes and returns ATS score, skill suggestions, and refinements.',
    focus: 'Job-readiness feedback and profile optimization.',
  },
  {
    title: 'AI Phishing Detector',
    symbol: '🛡️',
    accent: 'from-red-300/30 via-red-50/80 to-white/70',
    summary:
      'Cybersecurity tool that evaluates links/messages with risk scoring and AI explanations.',
    focus: 'Practical phishing awareness and rapid risk triage.',
  },
  {
    title: 'Terms & Conditions Decoder',
    symbol: '⚖️',
    accent: 'from-orange-300/30 via-orange-50/80 to-white/70',
    summary:
      'AI tool that simplifies legal language and highlights key risks in plain words.',
    focus: 'Trust, transparency, and informed decision-making.',
  },
  {
    title: 'Habit Tracker with Heatmap',
    symbol: '🔥',
    accent: 'from-yellow-300/30 via-yellow-50/80 to-white/70',
    summary:
      'A daily tracker with a GitHub-style heatmap to visualize consistency and streaks.',
    focus: 'Behavior design, momentum, and long-term habits.',
  },
];

export default function Work() {
  return (
    <Transition>
      <Navbar />
      <main className='relative overflow-hidden bg-transparent text-foreground'>
        <div aria-hidden='true' className='gold-frame-page pointer-events-none absolute inset-0' />
        <div className='relative z-10'>
        <section className='container pt-36'>
          <p className='text-sm uppercase tracking-[0.35em] text-muted-foreground'>
            Projects
          </p>
          <h1 className='mt-5 max-w-5xl text-[clamp(2rem,6vw,5rem)] leading-[1.02]'>
            Building practical systems across AI, cybersecurity, and web
            product design.
          </h1>
          <p className='mt-8 max-w-3xl text-lg text-muted-foreground'>
            These projects are built to solve real problems, with a focus on
            usability, reliability, and rapid execution.
          </p>

          <div className='mt-12 grid gap-5 md:grid-cols-3'>
            <div className='relative h-56 overflow-hidden rounded-2xl border border-amber-400/55 bg-white/75 shadow-[0_14px_28px_rgba(0,0,0,0.14)]'>
              <Image
                src='/PICS%20AND%20VIDEOS/work1.avif'
                alt='WORK1 preview'
                fill={true}
                className='object-cover'
                sizes='(min-width: 768px) 33vw, 100vw'
              />
            </div>
            <div className='relative h-56 overflow-hidden rounded-2xl border border-amber-400/55 bg-white/75 shadow-[0_14px_28px_rgba(0,0,0,0.14)]'>
              <Image
                src='/PICS%20AND%20VIDEOS/work2.webp'
                alt='WORK2 preview'
                fill={true}
                className='object-cover'
                sizes='(min-width: 768px) 33vw, 100vw'
              />
            </div>
            <div className='relative h-56 overflow-hidden rounded-2xl border border-amber-400/55 bg-white/75 shadow-[0_14px_28px_rgba(0,0,0,0.14)]'>
              <Image
                src='/PICS%20AND%20VIDEOS/work3.jpg'
                alt='WORK3 preview'
                fill={true}
                className='object-cover'
                sizes='(min-width: 768px) 33vw, 100vw'
              />
            </div>
          </div>
        </section>

        <section className='container mt-20 pb-24'>
          <div className='grid gap-6 md:grid-cols-2'>
            {projects.map(project => (
              <article
                key={project.title}
                className={`group relative overflow-hidden rounded-2xl border border-amber-400/45 bg-gradient-to-br ${project.accent} p-7 shadow-[0_16px_30px_rgba(40,24,0,0.11)] transition-transform duration-300 hover:-translate-y-1`}
              >
                <span className='absolute -right-2 -top-6 text-7xl opacity-18 transition-opacity duration-300 group-hover:opacity-30'>
                  {project.symbol}
                </span>
                <h2 className='text-2xl text-zinc-900'>
                  <span className='text-amber-600'>
                    {project.title.charAt(0)}
                  </span>
                  {project.title.slice(1)}
                </h2>
                <p className='mt-4 text-zinc-700'>{project.summary}</p>
                <p className='mt-6 text-sm uppercase tracking-[0.18em] text-muted-foreground'>
                  Focus
                </p>
                <p className='mt-2 text-zinc-800'>{project.focus}</p>
              </article>
            ))}
          </div>

          <div className='mt-16 rounded-lg border border-border p-7'>
            <h3 className='text-xl'>Interested in collaborating?</h3>
            <p className='mt-3 text-muted-foreground'>
              I am open to building high-impact products, fast prototypes, and
              production-ready systems.
            </p>
            <Link
              href='/contact'
              className='mt-6 inline-block border border-foreground px-6 py-3 text-sm uppercase tracking-[0.16em] transition-colors hover:bg-foreground hover:text-background'
            >
              Start a conversation
            </Link>
          </div>
        </section>
        </div>
      </main>
    </Transition>
  );
}
