'use client';

import { useEffect, useState } from 'react';

import { animate, motion, useMotionValue, useTransform } from 'framer-motion';

import { Center } from '@/components';
import { useDimensions } from '@/hooks';

import { fade, slideUp } from './variants';

const MotionComponent = motion(Center);

export function Preloader() {
  const [count, setCount] = useState(0);
  const { width, height } = useDimensions();
  const progress = useMotionValue(0);
  const scaleX = useTransform(progress, latest => latest / 100);

  useEffect(() => {
    const controls = animate(progress, 100, {
      duration: 3.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: latest => {
        setCount(Math.round(latest));
      },
    });

    return () => {
      controls.stop();
    };
  }, [progress]);

  const initialPath = `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${
    height + 300
  } 0 ${height}  L0 0`;
  const targetPath = `M0 0 L${width} 0 L${width} ${height} Q${
    width / 2
  } ${height} 0 ${height}  L0 0`;

  /** @type {import('framer-motion').Variants} */
  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 1.25, ease: [0.16, 1, 0.3, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 1.35, ease: [0.16, 1, 0.3, 1], delay: 0.45 },
    },
  };

  return (
    <MotionComponent
      className='fixed z-50 h-screen w-screen cursor-wait bg-foreground'
      variants={slideUp}
      initial='initial'
      exit='exit'
    >
      {width > 0 ? (
        <>
          <MotionComponent
            className='w-[min(1320px,92vw)] text-background'
            variants={fade}
            initial='initial'
            animate='enter'
          >
            <div className='mb-10 flex items-end justify-between gap-8 md:mb-12'>
              <p className='text-5xl font-semibold tracking-widest sm:text-6xl md:text-8xl lg:text-9xl'>
                GOKUL
              </p>
              <motion.span
                className='text-[clamp(1rem,2vw,1.4rem)] tabular-nums tracking-[0.28em] text-background/75'
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              >
                {count}%
              </motion.span>
            </div>

            <p className='mb-6 text-[0.72rem] uppercase tracking-[0.52em] text-background/55 sm:text-xs'>
              loading...
            </p>

            <div className='h-[1px] w-full overflow-hidden bg-background/20'>
              <motion.div
                className='h-full w-full origin-left bg-background shadow-[0_0_22px_rgba(255,255,255,0.35)]'
                style={{ scaleX }}
                transition={{ duration: 3.2, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </MotionComponent>
          <motion.svg className='absolute top-0 -z-10 h-[calc(100%+300px)] w-full'>
            <motion.path
              className='fill-foreground'
              variants={curve}
              initial='initial'
              exit='exit'
            />
          </motion.svg>
        </>
      ) : null}
    </MotionComponent>
  );
}
