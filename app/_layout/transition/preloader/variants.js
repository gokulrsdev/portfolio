/** @type {import('framer-motion').Variants} */
export const slideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: '-100vh',
    transition: { duration: 1.45, ease: [0.16, 1, 0.3, 1], delay: 0.35 },
  },
};

/** @type {import('framer-motion').Variants} */
export const fade = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.92,
    transition: { duration: 1.45, delay: 0.25, ease: [0.16, 1, 0.3, 1] },
  },
};
