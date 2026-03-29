import { rootMetadata } from '@/config';
import { neue_montreal } from '@/fonts';
import { Offcanvas } from '@/layout';
import { Providers } from '@/providers';
import {
  Bot,
  BarChart3,
  Brain,
  BrainCircuit,
  CloudCog,
  Cpu,
  Globe,
  KeyRound,
  Laptop,
  MessageSquareMore,
  Mic,
  MonitorUp,
  Network,
  Search,
  Shield,
  Smartphone,
  Usb,
  Workflow,
} from 'lucide-react';
import './globals.css';

/** @type {import('next').Metadata} */
export const metadata = rootMetadata;

const doodles = [
  { Icon: Bot, className: 'left-[6%] top-[11%] rotate-[-10deg]', size: 36 },
  { Icon: BrainCircuit, className: 'left-[16%] top-[16%] rotate-[9deg]', size: 44 },
  { Icon: Cpu, className: 'left-[28%] top-[10%] rotate-[-6deg]', size: 40 },
  { Icon: Network, className: 'left-[39%] top-[15%] rotate-[8deg]', size: 38 },
  { Icon: MonitorUp, className: 'left-[8%] top-[32%] rotate-[-4deg]', size: 43 },
  { Icon: Brain, className: 'left-[19%] top-[35%] rotate-[6deg]', size: 40 },
  { Icon: CloudCog, className: 'left-[30%] top-[31%] rotate-[-7deg]', size: 42 },
  { Icon: Workflow, className: 'left-[41%] top-[36%] rotate-[6deg]', size: 40 },
  { Icon: Search, className: 'right-[13%] top-[11%] rotate-[11deg]', size: 33 },
  { Icon: Globe, className: 'right-[7%] top-[20%] rotate-[-8deg]', size: 34 },
  { Icon: Laptop, className: 'right-[16%] top-[31%] rotate-[8deg]', size: 44 },
  { Icon: Shield, className: 'right-[7%] top-[42%] rotate-[-12deg]', size: 37 },
  { Icon: Smartphone, className: 'right-[13%] top-[53%] rotate-[7deg]', size: 34 },
  { Icon: KeyRound, className: 'left-[8%] bottom-[18%] rotate-[11deg]', size: 35 },
  { Icon: Mic, className: 'left-[18%] bottom-[12%] rotate-[-8deg]', size: 34 },
  { Icon: BarChart3, className: 'left-[31%] bottom-[16%] rotate-[6deg]', size: 36 },
  { Icon: MessageSquareMore, className: 'right-[21%] bottom-[16%] rotate-[-8deg]', size: 35 },
  { Icon: Usb, className: 'right-[10%] bottom-[10%] rotate-[14deg]', size: 34 },
];

/** @param {import('react').PropsWithChildren<unknown>} */
export default function RootLayout({ children }) {
  return (
    <html lang='en' dir='ltr' className={neue_montreal.variable}>
      <body className={neue_montreal.className}>
        <div aria-hidden='true' className='fixed inset-0 z-0 bg-[#f4f5f7]' />
        <div
          aria-hidden='true'
          className='architectural-bg pointer-events-none fixed inset-0 z-30'
        />
        <div
          aria-hidden='true'
          className='architectural-red-accent pointer-events-none fixed inset-0 z-20'
        />
        <div aria-hidden='true' className='pointer-events-none fixed inset-0 z-10 overflow-hidden'>
          {doodles.map(({ Icon, className, size }, index) => (
            <div
              key={`global-doodle-${index}`}
              className={`absolute text-zinc-900/10 ${className}`}
            >
              <Icon size={size} strokeWidth={1.75} />
            </div>
          ))}
        </div>

        <div className='relative z-30'>
          <Providers>
            <Offcanvas />
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
}
