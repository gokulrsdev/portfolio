'use client';

import { motion } from 'framer-motion';
import { ArrowDownLeft, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import { MagneticButton } from '@/components';

import { Container, ImageWrapper, MainTitle, Row } from './index.styled';

/**
 * @param {Object} props
 * @param {import('framer-motion').MotionValue<number>} props.transformX
 */
export function UserDetails({ transformX }) {
  return (
    <Container>
      <Row>
        <div className='flex items-center gap-8'>
          <ImageWrapper>
            <Image
              src='/PICS%20AND%20VIDEOS/gokul-rs-profile.png'
              className='rounded-full object-cover'
              fill={true}
              alt='Gokul RS Profile Picture'
            />
          </ImageWrapper>
          <MainTitle className='font-[system-ui,-apple-system,Segoe_UI,Roboto,Helvetica,Arial,sans-serif] font-extrabold tracking-tight'>
            Have a vision?
          </MainTitle>
        </div>
        <div className='flex items-center justify-between'>
          <MainTitle className='font-[system-ui,-apple-system,Segoe_UI,Roboto,Helvetica,Arial,sans-serif] font-extrabold tracking-tight'>
            Let’s{' '}
            <span className='font-black text-cyan-300 drop-shadow-[0_2px_10px_rgba(34,211,238,0.35)]'>
              engineer it.
            </span>
          </MainTitle>
          <div>
            <ArrowDownLeft size={28} strokeWidth={1.25} />
          </div>
        </div>

        <p
          className='mt-5 inline-block rounded-xl border border-cyan-300/45 bg-zinc-900/65 px-5 py-3 ps-5 text-[clamp(1.25rem,2.2vw,1.8rem)] leading-[1.2] text-cyan-100 transition-transform duration-300 hover:scale-[1.04] fist-cursor font-[JetBrains_Mono,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation_Mono,Courier_New,monospace]'
        >
          <span className='block'>If you want to collab or just talk</span>
          <span className='mt-2 inline-block rounded-md bg-cyan-400/20 px-2 py-1 font-semibold text-cyan-300'>
            come on Dap me up.
          </span>
        </p>
      </Row>

      <Row>
        <div className='relative w-full'>
          <div className='h-[1px] bg-muted-foreground' />
          <div className='absolute right-0 top-0 z-20 -translate-x-1/2 -translate-y-1/2'>
            <motion.div style={{ x: transformX }}>
              <Link href='/contact' passHref>
                <MagneticButton
                  variant='default'
                  size='default'
                  className='fist-cursor !p-0 h-[clamp(9.5rem,17vw,14.8rem)] w-[clamp(9.5rem,17vw,14.8rem)] rounded-full border border-indigo-300/45 bg-transparent shadow-[0_18px_35px_rgba(45,72,245,0.35)] transition-transform duration-300 hover:scale-[1.04] before:!bg-transparent after:!bg-transparent'
                >
                  <Image
                    src='/PICS%20AND%20VIDEOS/dap.jpg'
                    alt='DAP visual'
                    width={420}
                    height={420}
                    className='h-[clamp(9.5rem,17vw,14.8rem)] w-[clamp(9.5rem,17vw,14.8rem)] rounded-full object-cover'
                    sizes='(min-width: 1024px) 14.8rem, 9.5rem'
                  />
                  <span className='sr-only'>Get in touch</span>
                </MagneticButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </Row>

      <Row>
        <div className='flex w-full flex-col gap-4 lg:flex-row'>
          <div>
            <a href='mailto:gokulrsdev@gmail.com'>
              <MagneticButton
                variant='outline'
                size='md'
                className='w-full rounded-full border-cyan-300/70 bg-slate-900/35 px-7 text-base text-slate-100 shadow-[0_8px_22px_rgba(15,23,42,0.28)] backdrop-blur-md font-[JetBrains_Mono,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation_Mono,Courier_New,monospace]'
              >
                <Mail size={18} />
                gokulrsdev@gmail.com
              </MagneticButton>
            </a>
          </div>
        </div>
        <p className='mt-6 text-sm italic text-slate-400/75 font-[JetBrains_Mono,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation_Mono,Courier_New,monospace]'>
          "I don’t just learn technology — I build with it."
        </p>
      </Row>
    </Container>
  );
}
