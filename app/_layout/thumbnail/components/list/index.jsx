'use client';

import Image from 'next/image';
import Link from 'next/link';

import { thumbnailOptions } from '@/data';
import { project_display } from '@/fonts';

const accentThemes = [
  {
    firstLetter: '#10b981',
    chip: 'bg-emerald-200/70 text-emerald-950',
    hoverBg: 'hover:bg-emerald-50/45',
    frame: 'bg-gradient-to-br from-slate-50 to-emerald-100 border-emerald-300/70 rounded-[30%_70%_66%_34%/36%_42%_58%_64%]',
  },
  {
    firstLetter: '#2563eb',
    chip: 'bg-sky-200/70 text-sky-950',
    hoverBg: 'hover:bg-sky-50/45',
    frame: 'bg-gradient-to-br from-blue-50 to-violet-100 border-blue-300/70 rounded-[66%_34%_30%_70%/54%_48%_52%_46%]',
  },
  {
    firstLetter: '#f97316',
    chip: 'bg-orange-200/70 text-orange-950',
    hoverBg: 'hover:bg-orange-50/45',
    frame: 'bg-gradient-to-br from-rose-50 to-orange-100 border-orange-300/70 rounded-[38%_62%_64%_36%/58%_44%_56%_42%]',
  },
  {
    firstLetter: '#0ea5e9',
    chip: 'bg-cyan-200/70 text-cyan-950',
    hoverBg: 'hover:bg-cyan-50/45',
    frame: 'bg-gradient-to-br from-cyan-50 to-teal-100 border-cyan-300/70 rounded-[56%_44%_70%_30%/38%_52%_48%_62%]',
  },
];

/**
 * @param {Object} props
 * @param {(index: number) => void} props.handlePointerEnter
 * @param {(index: number) => void} props.handlePointerLeave
 * @param {(x: number, y: number) => void} props.moveItems
 */
export function ThumbnailList({
  handlePointerEnter,
  handlePointerLeave,
  moveItems,
}) {
  const items = thumbnailOptions.map(({ href, title, description, logo }, index) => {
    const id = index;
    const accent = accentThemes[index % accentThemes.length];
    const reverse = index % 2 !== 0;
    const firstLetter = title.slice(0, 1);
    const restTitle = title.slice(1);

    return (
      <li
        key={`thumbnail-list-${id}`}
        className={`border-t border-solid transition-all duration-300 last-of-type:border-b group-hover:opacity-95 ${accent.hoverBg}`}
        style={{
          paddingInline: 'calc(clamp(1em,3vw,4em) * 2)',
          paddingBlock: 'clamp(1em,3vw,4em)',
        }}
        onPointerEnter={({ clientX, clientY }) => {
          handlePointerEnter(id);
          moveItems(clientX, clientY);
        }}
        onPointerLeave={({ clientX, clientY }) => {
          handlePointerLeave(id);
          moveItems(clientX, clientY);
        }}
      >
        <Link
          href={href}
          className='grid items-center gap-6 lg:grid-cols-[1fr_auto]'
          passHref
        >
          <div className={`flex items-center gap-5 ${reverse ? 'lg:flex-row-reverse lg:justify-end lg:text-right' : ''}`}>
            <div className={`relative h-[92px] w-[92px] border p-2 shadow-[0_10px_26px_rgba(0,0,0,0.12)] ${accent.frame}`}>
              <Image
                src={logo}
                alt={`${title} logo`}
                fill={true}
                className='object-contain p-2'
                sizes='92px'
              />
            </div>
            <h4
              className={`${project_display.className} text-foreground`}
              style={{
                fontSize: 'clamp(2rem, 4.3vw, 4.6rem)',
                lineHeight: 1.1,
              }}
            >
              <span style={{ color: accent.firstLetter }}>{firstLetter}</span>
              {restTitle}
            </h4>
          </div>
          <p
            className={`justify-self-start rounded-full px-4 py-2 text-base font-semibold tracking-[0.02em] lg:justify-self-end ${accent.chip}`}
          >
            {description}
          </p>
        </Link>
      </li>
    );
  });

  return <ul className='group'>{items}</ul>;
}
