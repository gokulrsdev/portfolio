import Link from 'next/link';
import Image from 'next/image';
import { Mail, Linkedin, Github, Instagram } from 'lucide-react';

import { Transition, Navbar } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Contact | Gokul RS',
  description:
    'Contact Gokul RS for projects, collaboration, internships, and innovative product opportunities.',
};

export default function Contact() {
  return (
    <Transition>
      <Navbar />
      <main className='relative overflow-hidden bg-transparent text-foreground'>
        <div aria-hidden='true' className='gold-frame-page pointer-events-none absolute inset-0' />
        <div className='relative z-10'>
        <section className='container pt-36 pb-24'>
          <p className='text-sm uppercase tracking-[0.35em] text-muted-foreground'>
            Contact
          </p>
          <h1 className='mt-5 max-w-4xl text-[clamp(2rem,6vw,5rem)] leading-[1.02]'>
            Let us build something meaningful and high-impact.
          </h1>
          <p className='mt-8 max-w-3xl text-lg text-muted-foreground'>
            I am open to project collaboration, internships, hackathons, and
            product development opportunities.
          </p>

          <div className='mt-12 grid gap-5 md:grid-cols-2'>
            <div className='relative h-52 overflow-hidden rounded-2xl border border-amber-400/55 bg-white/75 shadow-[0_14px_28px_rgba(0,0,0,0.14)]'>
              <Image
                src='/PICS%20AND%20VIDEOS/code.webp'
                alt='CODE visual'
                fill={true}
                className='object-cover'
                sizes='(min-width: 768px) 50vw, 100vw'
              />
              <span className='absolute left-4 top-3 rounded-full bg-black/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white'>
                CODE
              </span>
            </div>
            <div className='relative h-52 overflow-hidden rounded-2xl border border-amber-400/55 bg-white/75 shadow-[0_14px_28px_rgba(0,0,0,0.14)]'>
              <Image
                src='/PICS%20AND%20VIDEOS/cook.jpg'
                alt='COOK visual'
                fill={true}
                className='object-cover'
                sizes='(min-width: 768px) 50vw, 100vw'
              />
              <span className='absolute left-4 top-3 rounded-full bg-black/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white'>
                COOK
              </span>
            </div>
          </div>

          <div className='mt-14 grid gap-6 md:grid-cols-2'>
            <a
              href='mailto:gokulrsdev@gmail.com'
              className='group relative overflow-hidden rounded-2xl border border-blue-300/65 bg-gradient-to-br from-blue-100/75 via-white/90 to-blue-50/80 p-6 shadow-[0_14px_28px_rgba(35,65,128,0.15)] transition-all duration-300 hover:-translate-y-1'
            >
              <Mail className='pointer-events-none absolute -right-3 -top-3 h-20 w-20 text-blue-600/25' />
              <p className='text-sm uppercase tracking-[0.16em] text-muted-foreground'>
                Email
              </p>
              <p className='mt-3 text-lg'>gokulrsdev@gmail.com</p>
            </a>

            <Link
              href='https://www.linkedin.com/in/gokulrsdev'
              target='_blank'
              rel='noopener'
              className='group relative overflow-hidden rounded-2xl border border-sky-300/65 bg-gradient-to-br from-sky-100/75 via-white/90 to-cyan-50/80 p-6 shadow-[0_14px_28px_rgba(10,108,171,0.16)] transition-all duration-300 hover:-translate-y-1'
            >
              <Linkedin className='pointer-events-none absolute -right-3 -top-3 h-20 w-20 text-sky-700/30' />
              <p className='text-sm uppercase tracking-[0.16em] text-muted-foreground'>
                LinkedIn
              </p>
              <p className='mt-3 text-lg'>linkedin.com/in/gokulrsdev</p>
            </Link>

            <Link
              href='https://github.com/gokulrsdev'
              target='_blank'
              rel='noopener'
              className='group relative overflow-hidden rounded-2xl border border-zinc-300/70 bg-gradient-to-br from-zinc-100/80 via-white/90 to-zinc-50/80 p-6 shadow-[0_14px_28px_rgba(34,34,34,0.16)] transition-all duration-300 hover:-translate-y-1'
            >
              <Github className='pointer-events-none absolute -right-3 -top-3 h-20 w-20 text-zinc-700/30' />
              <p className='text-sm uppercase tracking-[0.16em] text-muted-foreground'>
                GitHub (Main)
              </p>
              <p className='mt-3 text-lg'>github.com/gokulrsdev</p>
            </Link>

            <Link
              href='https://github.com/gokulrsog'
              target='_blank'
              rel='noopener'
              className='group relative overflow-hidden rounded-2xl border border-amber-300/70 bg-gradient-to-br from-amber-100/78 via-white/92 to-orange-50/82 p-6 shadow-[0_14px_28px_rgba(130,90,20,0.16)] transition-all duration-300 hover:-translate-y-1'
            >
              <Github className='pointer-events-none absolute -right-3 -top-3 h-20 w-20 text-amber-700/28' />
              <p className='text-sm uppercase tracking-[0.16em] text-muted-foreground'>
                GitHub (Alt)
              </p>
              <p className='mt-3 text-lg'>github.com/gokulrsog</p>
            </Link>

            <Link
              href='https://www.instagram.com/itz_gokzz/'
              target='_blank'
              rel='noopener'
              className='group relative overflow-hidden rounded-2xl border border-fuchsia-300/70 bg-gradient-to-br from-fuchsia-100/75 via-pink-50/88 to-orange-50/75 p-6 shadow-[0_14px_28px_rgba(151,28,101,0.16)] transition-all duration-300 hover:-translate-y-1 md:col-span-2'
            >
              <Instagram className='pointer-events-none absolute -right-4 -top-4 h-24 w-24 text-fuchsia-700/25' />
              <p className='text-sm uppercase tracking-[0.16em] text-muted-foreground'>
                Instagram
              </p>
              <p className='mt-3 text-lg'>instagram.com/itz_gokzz</p>
            </Link>
          </div>

          <blockquote className='mt-16 border-s-2 border-foreground/70 ps-6 text-xl italic'>
            "I don’t just learn technology — I build with it."
          </blockquote>
        </section>
        </div>
      </main>
    </Transition>
  );
}
