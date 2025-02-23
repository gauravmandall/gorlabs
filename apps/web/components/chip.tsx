'use client';
import { ChevronRight } from '@repo/design-system/icons';
import { motion } from 'motion/react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ShinyRotatingBorderButtonVariant1() {
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  // Ensure the component is only rendered on the client side

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      type="button"
      className="group relative overflow-hidden rounded-full bg-neutral-200 p-px transition-transform active:scale-95 dark:bg-neutral-600"
    >
      <motion.span
        initial={{ top: 0, left: 0 }}
        animate={{
          top: ['50%', '0%', '50%', '100%', '50%'],
          left: ['0%', '50%', '100%', '50%', '0%'],
          // top: ['10%', '0%', '15%', '85%', '90%', '80%', '10%'],
          // left: ['10%', '50%', '85%', '85%', '50%', '0%', '10%'],
        }}
        transition={{
          duration: 3,
          ease: 'linear',
          repeat: Number.POSITIVE_INFINITY,
        }}
        className="-translate-x-1/2 -translate-y-1/2 absolute z-10 size-8 transform-gpu blur-sm transition-transform duration-300 group-hover:scale-[3]"
      >
        <motion.span
          animate={{
            rotate: ['0deg', '360deg'],
          }}
          transition={{
            duration: 3,
            ease: 'linear',
            repeat: Number.POSITIVE_INFINITY,
          }}
          className="block size-full transform-gpu rounded-full"
          style={{
            background:
              'linear-gradient(135deg, #3BC4F2, #7A69F9, #F26378, #F5833F)',
          }}
        />
      </motion.span>
      <span className="relative z-10 block rounded-full bg-white px-3 py-1 dark:bg-neutral-800">
        <span className="z-10 flex items-center justify-center gap-1.5 py-0.5 text-neutral-100 text-sm">
          <Image
            src={
              theme === 'dark'
                ? '/icons/sparkles-dark.svg'
                : '/icons/sparkles.svg'
            }
            alt="✨"
            width={24}
            height={24}
            className="h-4 w-4"
          />
          <motion.span
            animate={{
              backgroundImage: [
                'linear-gradient(90deg, #3BC4F2, #7A69F9, #F26378, #F5833F)',
                'linear-gradient(90deg, #F5833F,#3BC4F2, #7A69F9, #F26378)',
                'linear-gradient(90deg, #F26378, #F5833F,#3BC4F2, #7A69F9)',
                'linear-gradient(90deg, #7A69F9, #F26378, #F5833F,#3BC4F2)',
                'linear-gradient(90deg, #3BC4F2, #7A69F9, #F26378, #F5833F)',
              ],
            }}
            transition={{
              duration: 1,
              ease: 'linear',
              repeat: Number.POSITIVE_INFINITY,
            }}
            className="transform-gpu bg-clip-text text-neutral-600 text-sm tracking-tighter transition-colors duration-500 group-hover:text-transparent dark:text-neutral-200"
          >
            Introducing Gorlabs
          </motion.span>
          <ChevronRight
            className="h-4 w-4"
            style={{ color: theme === 'dark' ? '#ffffff' : '#120902' }}
          />
        </span>
      </span>
    </button>
  );
}
