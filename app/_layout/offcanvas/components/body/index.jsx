'use client';

import { motion } from 'framer-motion';

import { FixedOverlay } from '@/components';

import { OffcanvasBackdrop } from './back-drop';
import { OffcanvasFooter } from './footer';
import { OffcanvasLinks } from './links';
import { slideLeft } from './variants';

const MotionComponent = motion(FixedOverlay);

const doodles = [
  {
    className: 'left-10 top-8 rotate-[-14deg]',
    content: (
      <svg viewBox='0 0 64 64' className='h-11 w-11' fill='none'>
        <rect x='10' y='16' width='44' height='28' rx='6' stroke='currentColor' strokeWidth='3' />
        <circle cx='24' cy='30' r='3' fill='currentColor' />
        <circle cx='40' cy='30' r='3' fill='currentColor' />
        <path d='M20 48h24' stroke='currentColor' strokeWidth='3' strokeLinecap='round' />
      </svg>
    ),
  },
  {
    className: 'left-28 top-32 rotate-[8deg]',
    content: (
      <svg viewBox='0 0 64 64' className='h-12 w-12' fill='none'>
        <circle cx='32' cy='32' r='10' stroke='currentColor' strokeWidth='3' />
        <circle cx='16' cy='20' r='4' fill='currentColor' />
        <circle cx='48' cy='20' r='4' fill='currentColor' />
        <circle cx='50' cy='44' r='4' fill='currentColor' />
        <path d='M20 24l8 6M36 30l10-6M38 34l8 8' stroke='currentColor' strokeWidth='3' strokeLinecap='round' />
      </svg>
    ),
  },
  {
    className: 'right-20 top-16 rotate-[12deg]',
    content: (
      <svg viewBox='0 0 64 64' className='h-11 w-11' fill='none'>
        <rect x='16' y='16' width='32' height='32' rx='6' stroke='currentColor' strokeWidth='3' />
        <path d='M24 32h16M32 24v16' stroke='currentColor' strokeWidth='3' strokeLinecap='round' />
      </svg>
    ),
  },
  {
    className: 'right-12 bottom-24 rotate-[-10deg]',
    content: (
      <svg viewBox='0 0 64 64' className='h-12 w-12' fill='none'>
        <circle cx='32' cy='32' r='7' fill='currentColor' />
        <circle cx='16' cy='16' r='5' stroke='currentColor' strokeWidth='3' />
        <circle cx='48' cy='16' r='5' stroke='currentColor' strokeWidth='3' />
        <circle cx='16' cy='48' r='5' stroke='currentColor' strokeWidth='3' />
        <circle cx='48' cy='48' r='5' stroke='currentColor' strokeWidth='3' />
        <path d='M21 21l7 7M43 21l-7 7M21 43l7-7M43 43l-7-7' stroke='currentColor' strokeWidth='3' strokeLinecap='round' />
      </svg>
    ),
  },
  {
    className: 'left-14 bottom-20 rotate-[7deg]',
    content: (
      <svg viewBox='0 0 64 64' className='h-10 w-10' fill='none'>
        <ellipse cx='32' cy='18' rx='16' ry='8' stroke='currentColor' strokeWidth='3' />
        <path d='M16 18v20c0 4 7 8 16 8s16-4 16-8V18' stroke='currentColor' strokeWidth='3' />
      </svg>
    ),
  },
  {
    className: 'left-1/2 bottom-8 -translate-x-1/2 rotate-[-8deg]',
    content: (
      <svg viewBox='0 0 64 64' className='h-11 w-11' fill='none'>
        <rect x='10' y='14' width='44' height='30' rx='4' stroke='currentColor' strokeWidth='3' />
        <path d='M20 54h24' stroke='currentColor' strokeWidth='3' strokeLinecap='round' />
        <path d='M24 30l6 5-6 5M35 40h8' stroke='currentColor' strokeWidth='3' strokeLinecap='round' />
      </svg>
    ),
  },
];

export function OffcanvasBody() {
  return (
    <MotionComponent
      className='z-40'
      variants={slideLeft}
      initial='initial'
      animate='enter'
      exit='exit'
    >
      <OffcanvasBackdrop />

      <div className='absolute right-0 top-0 h-screen bg-foreground text-background'>
        <div aria-hidden='true' className='pointer-events-none absolute inset-0 overflow-hidden'>
          {doodles.map(({ className, content }, index) => (
            <div
              key={`offcanvas-doodle-${index}`}
              className={`absolute text-background/15 ${className}`}
            >
              {content}
            </div>
          ))}
        </div>

        <div className='flex h-full flex-col justify-between p-24'>
          <OffcanvasLinks />
          <OffcanvasFooter />
        </div>
      </div>
    </MotionComponent>
  );
}
