import FadeIn from '@/components/FadeIn';

type SocialLink = {
  name: string;
  href: string;
  icon: JSX.Element;
};

const socialLinks: SocialLink[] = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/kaynguyen1512',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 sm:h-6 sm:w-6">
        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
      </svg>
    ),
  },
  {
    name: 'Zalo',
    href: 'https://zalo.me/0398519485',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 sm:h-6 sm:w-6">
        <path d="M12 2C6.48 2 2 6.14 2 11.25c0 2.86 1.4 5.42 3.6 7.12-.12.98-.46 2.36-1.35 3.5a.4.4 0 0 0 .43.63c1.5-.4 3.13-1.16 4.24-1.78 1 .27 2.06.4 3.08.4 5.52 0 10-4.14 10-9.27C22 6.14 17.52 2 12 2Z" />
        <text x="12" y="15.2" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#10141A">
          Z
        </text>
      </svg>
    ),
  },
  {
    name: 'Điện thoại',
    href: 'tel:0398519485',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 sm:h-6 sm:w-6">
        <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
      </svg>
    ),
  },
];

export default function SocialWidget() {
  return (
    <FadeIn
      delay={0.6}
      x={20}
      y={0}
      className="fixed right-3 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-2.5 sm:right-5 sm:gap-3"
    >
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target={link.href.startsWith('tel:') ? undefined : '_blank'}
          rel={link.href.startsWith('tel:') ? undefined : 'noopener noreferrer'}
          aria-label={link.name}
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--line)] bg-[var(--bg)]/80 text-[var(--text)] backdrop-blur-sm transition-transform duration-200 hover:scale-110 hover:bg-[var(--text)]/10 sm:h-12 sm:w-12"
        >
          {link.icon}
        </a>
      ))}
    </FadeIn>
  );
}
