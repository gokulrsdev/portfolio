'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navItems } from '@/data';
import { randomId } from '@/utils';

export function NavbarList() {
  const pathname = usePathname();

  const items = navItems.slice(1).map(({ href, title }) => {
    const id = randomId();
    const isActive = pathname === href;

    return (
      <li key={id} className='p-2'>
        <Link
          href={href}
          className={`inline-block rounded-full border px-5 py-2 text-sm font-bold uppercase tracking-[0.14em] transition-all duration-300 ${
            isActive
              ? 'border-background bg-background text-foreground'
              : 'border-background/55 bg-black/30 text-background hover:border-background hover:bg-background hover:text-foreground'
          }`}
        >
          {title}
        </Link>
      </li>
    );
  });

  return <ul className='flex items-center max-lg:hidden'>{items}</ul>;
}
