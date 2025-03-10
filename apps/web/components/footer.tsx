import { env } from '@/env';
// import type { legal as LegalPostMeta } from '@repo/cms';
import { Status } from '@repo/observability/status';
import Link from 'next/link';

export const Footer = () => {
  const navigationItems = [
    {
      title: 'Company',
      href: '/',
      description: '',
      items: [
        {
          title: 'About',
          href: '/about',
        },
        {
          title: 'grants',
          href: 'https://grants.gorlabs.com',
        },
        {
          title: 'Source code',
          href: '/code',
        },
      ],
    },
    {
      title: 'Resources',
      description: 'Managing a small business today is already tough.',
      items: [
        //   {
        //     title: 'Blog',
        //     href: '/blog',
        //   },
      ],
    },
    {
      title: 'Legal',
      description: 'We stay on top of the latest legal requirements.',
      items: [
        {
          title: 'Terms & Privacy',
          href: '/legal',
        },
      ],
    },
  ];

  if (env.NEXT_PUBLIC_DOCS_URL) {
    navigationItems.at(1)?.items?.push({
      title: 'Docs',
      href: env.NEXT_PUBLIC_DOCS_URL,
    });
  }

  return (
    <section className="dark border-foreground/10 border-t">
      <div className="w-full bg-background py-20 text-foreground lg:py-40">
        <div className="container mx-auto">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="flex flex-col items-start gap-8">
              <div className="flex flex-col gap-2">
                <h2 className="max-w-xl text-left font-regular text-3xl tracking-tighter md:text-5xl">
                  gorlabs
                </h2>
                <p className="max-w-lg text-left text-foreground/75 text-lg leading-relaxed tracking-tight">
                  Our mission is to providing best blockchain Infrastructure by
                  making Gorlabs effortless, affordable, and accessible to all.
                </p>
              </div>
              <Status />
            </div>
            <div className="grid items-start gap-10 lg:grid-cols-3">
              {navigationItems.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-start gap-1 text-base"
                >
                  <div className="flex flex-col gap-2">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="flex items-center justify-between"
                        target={
                          item.href.includes('http') ? '_blank' : undefined
                        }
                        rel={
                          item.href.includes('http')
                            ? 'noopener noreferrer'
                            : undefined
                        }
                      >
                        <span className="text-xl">{item.title}</span>
                      </Link>
                    ) : (
                      <p className="text-xl">{item.title}</p>
                    )}
                    {item.items?.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="flex items-center justify-between"
                        target={
                          subItem.href.includes('http') ? '_blank' : undefined
                        }
                        rel={
                          subItem.href.includes('http')
                            ? 'noopener noreferrer'
                            : undefined
                        }
                      >
                        <span className="text-foreground/75">
                          {subItem.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between space-y-4 text-sm text-zinc-500 md:flex-row md:space-y-0'>
            <div className="flex items-center space-x-4">
                <div className='mb-4 flex items-center gap-1'>
                  © 2025 Gorlabs LLC. All rights reserved.
                </div>
            </div>
            {/* <div className="flex items-center space-x-4">
              <Link
                href="x.com/gauravmandall"
                className='transition-colors duration-200 ease-in-out hover:text-black dark:hover:text-white'
              >
                Say Hello 𝕏
              </Link>
              <span>•</span>
              <span>❤️ Thanks for visiting!</span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
