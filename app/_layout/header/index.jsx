'use client';

import { motion } from 'framer-motion';
import { MoveDownRight } from 'lucide-react';

import { ParallaxSlider } from '@/components';
import { display_serif } from '@/fonts';

import { slideUp } from './variants';

export function Header() {
  return (
    <motion.header
      className='relative h-screen overflow-hidden bg-secondary-foreground text-background'
      variants={slideUp}
      initial='initial'
      animate='enter'
    >
      <video
        className='absolute inset-0 z-0 h-full w-full object-cover'
        src='/PICS%20AND%20VIDEOS/website-intro-video.mp4'
        autoPlay
        loop
        muted
        playsInline
      />
      <div className='absolute inset-0 z-10 bg-black/45' />

      <div className='relative z-20 flex h-full flex-col justify-end gap-2 md:flex-col-reverse md:justify-normal'>
        <div className='select-none'>
          <h1 className={`${display_serif.className} text-[max(9em,15vw)] leading-[0.9] tracking-[0.015em]`}>
            <ParallaxSlider repeat={4} baseVelocity={2}>
              <span className='pe-12'>
                Gokul RS
                <span className='spacer'>—</span>
              </span>
            </ParallaxSlider>
          </h1>
        </div>

        <div className='md:ml-auto'>
          <div className='mx-10 max-md:my-12 md:mx-36'>
            <div className='mb-4 md:mb-20'>
              <MoveDownRight size={28} strokeWidth={1.25} />
            </div>

            <h4 className='max-w-[36rem] text-[clamp(1.1em,1.7vw,1.8em)] leading-relaxed'>
              <span className='block'>Creative Developer | AI + Cybersecurity Explorer | Building Real-World Tech</span>
            </h4>

            <p className='mt-4 max-w-[44rem] text-sm text-background/85 md:text-base'>
              I design and build intelligent systems that solve real problems -
              from AI-powered tools to productivity platforms and cybersecurity
              solutions.
            </p>

            <p className='mt-6 border-s border-background/40 ps-4 text-sm uppercase tracking-[0.2em] text-background/75 md:mt-8 md:text-base'>
              "I don’t just learn technology — I build with it."
            </p>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
