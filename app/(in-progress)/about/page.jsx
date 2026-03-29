import Image from 'next/image';
import {
  Award,
  Brain,
  Briefcase,
  Code2,
  Cpu,
  Mic,
  Sparkles,
  Target,
  Trophy,
  Wrench,
} from 'lucide-react';

import { Transition, Navbar } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'About | Gokul RS',
  description:
    'About Gokul RS, a Creative Developer focused on AI, cybersecurity, intelligent systems, and practical product development.',
};

const whatImDoing = [
  'B.Tech in Computer Science + Minor in Robotics',
  'CGPA: 8.8',
  'Exploring AI, Cybersecurity & Intelligent Systems',
  'Building real-world projects & rapid prototypes',
  'Active in hackathons and technical events',
];

const activities = [
  {
    title: 'Web Development Intern (Upcoming)',
    body: 'IIIT Kottayam - Mind Labs (Machine Intelligence & Data Science Lab), starting May 1.',
  },
  {
    title: "Event Coordinator - Brahma'26 (ASIET)",
    body: 'Coordinated a national-level techno-cultural fest with strong ownership under pressure.',
  },
  {
    title: "Cybersecurity Workshop - NIT Calicut (Tathva '24)",
    body: 'Hands-on exposure to practical security concepts and real-world cyber hygiene.',
  },
  {
    title: 'Hackathons',
    body: 'FugenHack (SNGCE), Hackstra (ASIET), and Build With AI (GDGOC ASIET x MuLearn).',
  },
  {
    title: 'Published Article (Upcoming)',
    body: 'Article on Doom Scrolling and Its Impact for a Computer Science magazine.',
  },
];

const skillGroups = [
  {
    title: 'Languages',
    items: ['Python', 'C', 'Java (basic)', 'JavaScript (basic scripting)'],
  },
  {
    title: 'Development',
    items: [
      'Web application development',
      'Frontend interfaces',
      'Prototype building',
    ],
  },
  {
    title: 'Tools & Platforms',
    items: ['GitHub', 'VS Code', 'Netlify', 'Gradio (basic familiarity)'],
  },
  {
    title: 'Concepts',
    items: [
      'Programming fundamentals',
      'Debugging',
      'Basic API integration understanding',
    ],
  },
  {
    title: 'Design',
    items: [
      'Practical interface structuring',
      'Usability-focused layout design',
    ],
  },
];

const achievements = [
  "INCEPTUS'24 - Competition Winner",
  "Brahma '26 - Knives Out Investigation Event (First Prize)",
];

const softSkills = [
  'Technical presentation and explanation',
  'Confident public speaking',
  'Rapid learning and adaptability',
  'Creative and structured thinking',
];

const currentLearning = [
  'Data Structures & Algorithms',
  'AI-powered applications',
  'Cybersecurity fundamentals',
  'Scalable system design',
];

const goals = [
  'Become a high-level software engineer',
  'Build impactful AI-driven products',
  'Specialize in cybersecurity & intelligent systems',
  'Create scalable, real-world tech solutions',
];

export default function About() {
  return (
    <Transition>
      <Navbar />
      <main className='relative overflow-hidden bg-transparent text-foreground'>
        <div aria-hidden='true' className='gold-frame-page pointer-events-none absolute inset-0' />
        <div className='relative z-10'>
        <section className='container grid items-start gap-16 pt-36 lg:grid-cols-[1.2fr_0.8fr]'>
          <div>
            <p className='text-sm uppercase tracking-[0.35em] text-muted-foreground'>
              About Me
            </p>
            <h1 className='heading-outline-accent mt-5 max-w-5xl text-[clamp(2.3rem,6.5vw,5.6rem)] font-semibold leading-[1.04]'>
              Hi <span className='inline-block origin-bottom-right'>👋</span>, I am
              Gokul RS. I build practical intelligence, cybersecurity systems,
              and meaningful digital products.
            </h1>
            <div className='mt-8 flex justify-start'>
              <div className='relative h-56 w-44 overflow-hidden rounded-[1.25rem] border border-amber-400/55 bg-white/80 shadow-[0_14px_30px_rgba(0,0,0,0.18)] sm:h-64 sm:w-52'>
                <Image
                  src='/PICS%20AND%20VIDEOS/gokul2.jpeg'
                  alt='Gokul2 portrait'
                  fill={true}
                  className='object-cover'
                  sizes='(min-width: 640px) 13rem, 11rem'
                />
              </div>
            </div>
            <div className='mt-10 max-w-4xl rounded-2xl border border-amber-400/45 bg-white/72 p-8 shadow-[0_18px_34px_rgba(30,20,5,0.11)] backdrop-blur-[1px]'>
              <p className='text-xl leading-relaxed text-zinc-700'>
                <span className='rounded-md bg-sky-100 px-2 py-0.5 font-semibold text-sky-700'>
                  Computer Science Engineering
                </span>{' '}
                student at Adi Shankara Institute of Engineering and
                Technology, currently pursuing a minor in
                <span className='rounded-md bg-indigo-100 px-2 py-0.5 font-semibold text-indigo-700'>
                  Robotics
                </span>
                . Passionate about building creative and impactful
                technology at the intersection of AI, cybersecurity, and product
                development.
              </p>
              <p className='mt-6 text-xl leading-relaxed text-zinc-700'>
                Active in hackathons, workshops, and hands-on projects that push
                thinking beyond the classroom. Focused on learning fast,
                experimenting deeply, and shipping practical solutions with real
                outcomes.
              </p>
              <div className='mt-6 flex flex-wrap gap-2'>
                <span className='rounded-full border border-indigo-300 bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-700'>
                  Internship Track
                </span>
                <span className='rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700'>
                  Hackathon Builder
                </span>
                <span className='rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-700'>
                  CGPA 8.8
                </span>
              </div>
            </div>
          </div>

          <div className='mx-auto w-full max-w-[30rem] lg:pt-12'>
            <div className='relative aspect-square w-full'>
              <div className='absolute -left-6 top-6 h-[82%] w-[82%] bg-slate-300/35 blur-[0.5px]' />
              <div className='absolute inset-[9%] rotate-45 border-[5px] border-amber-500/65' />
              <div className='absolute inset-[14%] bg-white/90 shadow-[0_12px_30px_rgba(0,0,0,0.24)]' />
              <div className='absolute inset-[17%] overflow-hidden border border-zinc-300/60'>
                <Image
                  src='/PICS%20AND%20VIDEOS/gokul-rs-profile.png'
                  alt='Gokul RS framed profile photo'
                  fill={true}
                  className='object-cover'
                  sizes='(min-width: 1024px) 28rem, 80vw'
                  priority={true}
                />
              </div>
            </div>
            <article className='relative mt-8 overflow-hidden rounded-2xl border border-amber-400/45 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-6 text-zinc-100 shadow-[0_14px_30px_rgba(0,0,0,0.3)]'>
              <span className='absolute -right-3 -top-4 rounded-full border border-amber-300/50 bg-amber-200/15 px-4 py-1 text-xs uppercase tracking-[0.2em] text-amber-200'>
                C++
              </span>
              <p className='text-xs uppercase tracking-[0.22em] text-zinc-300'>
                Builder Console
              </p>
              <pre className='mt-4 overflow-x-auto rounded-xl border border-zinc-700/80 bg-black/25 p-4 text-[0.78rem] leading-6 text-emerald-200'>
{`#include <iostream>
int main() {
  std::cout << "Build. Break. Learn. Ship.";
  return 0;
}`}
              </pre>
              <div className='mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.15em]'>
                <span className='rounded-full bg-indigo-500/25 px-3 py-1 text-indigo-100'>AI</span>
                <span className='rounded-full bg-emerald-500/25 px-3 py-1 text-emerald-100'>Cybersecurity</span>
                <span className='rounded-full bg-amber-500/25 px-3 py-1 text-amber-100'>Robotics</span>
              </div>
            </article>
          </div>
        </section>

        <section className='container mt-24 grid gap-16 lg:grid-cols-2'>
          <article className='rounded-2xl border border-amber-400/45 bg-gradient-to-br from-amber-50/85 via-white/85 to-amber-100/70 p-7 shadow-[0_16px_30px_rgba(120,80,10,0.1)]'>
            <h2 className='flex items-center gap-3 text-3xl'>
              <Sparkles className='h-8 w-8 text-amber-600' />
              <span className='bg-gradient-to-r from-amber-700 via-orange-600 to-rose-600 bg-clip-text text-transparent'>
                What I am doing
              </span>
            </h2>
            <ul className='mt-8 space-y-4 text-lg text-muted-foreground'>
              {whatImDoing.map(item => (
                <li key={item} className='rounded-xl border border-amber-300/55 bg-white/70 px-4 py-3 text-zinc-700'>
                  {item.includes('Minor in Robotics') ? (
                    <>
                      B.Tech in Computer Science +{' '}
                      <span className='font-semibold text-indigo-700'>
                        Minor in Robotics
                      </span>
                    </>
                  ) : item.includes('CGPA: 8.8') ? (
                    <>
                      <span className='font-semibold text-amber-700'>CGPA:</span>{' '}
                      <span className='font-semibold text-emerald-700'>8.8</span>
                    </>
                  ) : (
                    item
                  )}
                </li>
              ))}
            </ul>
          </article>

          <article className='rounded-2xl border border-indigo-300/45 bg-gradient-to-br from-indigo-50/80 via-white/85 to-sky-100/65 p-7 shadow-[0_16px_30px_rgba(30,60,120,0.11)]'>
            <h2 className='flex items-center gap-3 text-3xl'>
              <Brain className='h-8 w-8 text-indigo-600' />
              <span className='bg-gradient-to-r from-indigo-700 via-sky-600 to-cyan-600 bg-clip-text text-transparent'>
                Currently learning
              </span>
            </h2>
            <ul className='mt-8 space-y-4 text-lg text-muted-foreground'>
              {currentLearning.map(item => (
                <li key={item} className='rounded-xl border border-indigo-300/55 bg-white/72 px-4 py-3 text-zinc-700'>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className='container mt-24'>
          <h2 className='flex items-center gap-3 text-3xl'>
            <Trophy className='h-8 w-8 text-rose-600' />
            <span className='bg-gradient-to-r from-rose-700 via-orange-600 to-amber-600 bg-clip-text text-transparent'>
              Experience & Activities
            </span>
          </h2>
          <div className='mt-8 grid gap-6 md:grid-cols-2'>
            {activities.map((activity, index) => {
              const words = activity.title.split(' ');
              const lead = words[0] ?? '';
              const trailing = words.slice(1).join(' ');
              const symbols = ['💼', '🎪', '🔐', '⚡', '📝'];

              return (
              <article
                key={activity.title}
                className='rounded-2xl border border-rose-300/45 bg-gradient-to-br from-white/86 via-rose-50/70 to-orange-50/70 p-6 shadow-[0_14px_28px_rgba(120,40,20,0.1)]'
              >
                <div className='flex items-start justify-between gap-3'>
                  <h3 className='text-2xl text-zinc-900'>
                    <span className='font-semibold text-rose-700'>{lead}</span>
                    {trailing ? ` ${trailing}` : ''}
                  </h3>
                  <span className='rounded-full border border-rose-300/65 bg-rose-100/80 px-2.5 py-1 text-xl leading-none'>
                    {symbols[index % symbols.length]}
                  </span>
                </div>
                <div className='mt-2 inline-flex items-center gap-2 rounded-full border border-amber-300/70 bg-amber-50 px-3 py-1 text-xs uppercase tracking-[0.13em] text-amber-700'>
                  <Briefcase className='h-3.5 w-3.5' />
                  Experience Highlight
                </div>
                <p className='mt-4 text-lg text-zinc-700'>{activity.body}</p>
              </article>
              );
            })}
          </div>
        </section>

        <section className='container mt-24'>
          <h2 className='flex items-center gap-3 text-3xl'>
            <Wrench className='h-8 w-8 text-emerald-600' />
            <span className='bg-gradient-to-r from-emerald-700 via-teal-600 to-cyan-600 bg-clip-text text-transparent'>
              Technical Skills
            </span>
          </h2>
          <div className='mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {skillGroups.map(group => (
              <article
                key={group.title}
                className='rounded-2xl border border-emerald-300/45 bg-gradient-to-br from-white/84 via-emerald-50/70 to-teal-50/60 p-6 shadow-[0_14px_28px_rgba(20,95,70,0.1)]'
              >
                <h3 className='flex items-center gap-2 text-xl text-zinc-900'>
                  <Code2 className='h-5 w-5 text-emerald-600' />
                  {group.title}
                </h3>
                <ul className='mt-4 space-y-2 text-lg text-zinc-700'>
                  {group.items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className='container mt-24 grid gap-8 lg:grid-cols-2'>
          <article className='rounded-2xl border border-amber-300/50 bg-gradient-to-br from-amber-50/85 via-white/86 to-orange-50/70 p-7 shadow-[0_14px_28px_rgba(125,90,20,0.1)]'>
            <h2 className='flex items-center gap-3 text-3xl'>
              <Award className='h-8 w-8 text-amber-600' />
              <span className='bg-gradient-to-r from-amber-700 via-orange-600 to-rose-600 bg-clip-text text-transparent'>
                Achievements
              </span>
            </h2>
            <ul className='mt-7 space-y-4'>
              {achievements.map(item => (
                <li
                  key={item}
                  className='rounded-xl border border-amber-300/55 bg-white/78 px-4 py-3 text-lg text-zinc-700'
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className='rounded-2xl border border-blue-300/50 bg-gradient-to-br from-blue-50/85 via-white/85 to-indigo-50/70 p-7 shadow-[0_14px_28px_rgba(40,75,140,0.1)]'>
            <h2 className='flex items-center gap-3 text-3xl'>
              <Mic className='h-8 w-8 text-blue-600' />
              <span className='bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-600 bg-clip-text text-transparent'>
                Soft Skills
              </span>
            </h2>
            <ul className='mt-7 space-y-4'>
              {softSkills.map(item => (
                <li
                  key={item}
                  className='rounded-xl border border-blue-300/55 bg-white/78 px-4 py-3 text-lg text-zinc-700'
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className='container mt-24 pb-24'>
          <h2 className='flex items-center gap-3 text-3xl'>
            <Target className='h-8 w-8 text-violet-600' />
            <span className='bg-gradient-to-r from-violet-700 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent'>
              Goals
            </span>
          </h2>
          <ul className='mt-8 grid gap-4 md:grid-cols-2'>
            {goals.map(goal => (
              <li
                key={goal}
                className='rounded-2xl border border-violet-300/45 bg-gradient-to-br from-white/85 via-violet-50/68 to-fuchsia-50/58 p-5 text-lg text-zinc-700 shadow-[0_12px_24px_rgba(78,40,120,0.08)]'
              >
                {goal}
              </li>
            ))}
          </ul>

          <div className='mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]'>
            <blockquote className='rounded-2xl border border-zinc-300/55 bg-gradient-to-br from-white/85 via-zinc-50/80 to-zinc-100/75 p-7 text-2xl italic shadow-[0_12px_24px_rgba(0,0,0,0.08)]'>
              "I don’t just learn technology — I build with it."
            </blockquote>

            <article className='rounded-2xl border border-sky-300/55 bg-gradient-to-br from-sky-50/85 via-white/86 to-indigo-50/70 p-6 shadow-[0_12px_24px_rgba(30,70,130,0.1)]'>
              <p className='flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-sky-700'>
                <Cpu className='h-4 w-4' />
                Beyond Code
              </p>
              <p className='mt-3 text-lg leading-relaxed text-zinc-700'>
                Outside of tech, I enjoy gaming, listening to indie pop music,
                and exploring creative ideas. I build things that are not only
                functional, but meaningful and memorable.
              </p>
            </article>
          </div>
        </section>
        </div>
      </main>
    </Transition>
  );
}
