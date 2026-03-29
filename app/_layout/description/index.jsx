'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

import { ParallaxFade, ParallaxReveal } from '@/components';

import { Title, Wrapper } from './index.styled';

const phrase =
  'I am Gokul RS, a Computer Science Engineering student at Adi Shankara Institute of Engineering and Technology, pursuing a minor in Robotics and building intelligent systems for real-world impact.';

export function Description() {
  return (
    <article className='container relative'>
      <Wrapper>
        <div className='basis-full lg:basis-9/12'>
          <Title>
            <ParallaxReveal paragraph={phrase} />
          </Title>
        </div>

        <div className='basis-7/12 lg:basis-3/12'>
          <ParallaxFade>
            <Balancer as='p' className='mt-2 text-lg leading-relaxed lg:text-xl'>
              I enjoy turning ideas into practical systems across AI,
              cybersecurity, and product development, with a focus on speed,
              clarity, and meaningful outcomes.
            </Balancer>
          </ParallaxFade>
        </div>

        <motion.div
          whileInView={{ y: '-15%' }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
          }}
        >
          <div className='absolute right-0 top-3/4 flex flex-col items-center lg:top-full lg:me-10'>
            <Link
              href='/about'
              className='relative block h-[clamp(8rem,14vw,11.5rem)] w-[clamp(8rem,14vw,11.5rem)] overflow-hidden rounded-[38%] border border-zinc-300/45 bg-white/85 shadow-[0_12px_28px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:scale-105'
              aria-label='About me'
            >
              <Image
                src='/PICS%20AND%20VIDEOS/click-eye-logo.svg'
                alt='Eye logo'
                fill={true}
                className='object-contain p-2'
                sizes='(min-width: 1024px) 11.5rem, 8rem'
              />
            </Link>
            <p
              className='mt-3 text-[clamp(2rem,4vw,3.5rem)] italic leading-none text-black/90'
              style={{
                fontFamily: 'Brush Script MT, Segoe Script, cursive',
                transform: 'rotate(-12deg)',
              }}
            >
              <span className='text-red-600'>C</span>lick <span className='text-red-600'>M</span>e
            </p>
          </div>
        </motion.div>
      </Wrapper>
    </article>
  );
}
