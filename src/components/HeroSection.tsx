import FadeIn from '@/components/FadeIn';

const navLinks = [
  { label: 'Giới thiệu', href: '#about' },
  { label: 'Kinh nghiệm', href: '#experience' },
  { label: 'Liên hệ', href: '#contact' },
];

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center px-5 pb-14 pt-24 sm:px-8 sm:pt-28 md:px-10 md:pt-32">
      {/* Navbar */}
      <FadeIn delay={0} y={-16} className="absolute left-0 right-0 top-0 w-full">
        <nav className="flex flex-wrap items-center justify-between gap-y-3 px-5 pt-6 sm:px-8 md:px-10 md:pt-8">
          <span className="display-font text-base font-semibold tracking-tight text-[var(--text)]">
            Kay
          </span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[var(--muted)] sm:gap-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors duration-200 hover:text-[var(--text)]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </FadeIn>

      {/* Three-line intro, above the video */}
      <div className="mx-auto w-full max-w-4xl text-center">
        <FadeIn delay={0.1} y={20}>
          <h1 className="display-font text-[clamp(1.7rem,4.4vw,2.7rem)] font-bold leading-tight text-[var(--text)]">
            Thay vì gửi mỗi CV, mình quay video này.
          </h1>
        </FadeIn>
        <FadeIn delay={0.2} y={16}>
          <p className="mt-4 text-[clamp(1rem,2vw,1.2rem)] text-[var(--muted)]">
            2 phút, đủ để thấy mình đã làm những gì.
          </p>
        </FadeIn>
        <FadeIn delay={0.3} y={16}>
          <p className="mt-1 text-[clamp(1rem,2vw,1.2rem)] text-[var(--muted)]">
            Có hình ảnh, có video, có thật.
          </p>
        </FadeIn>
      </div>

      {/* Big video player */}
      <FadeIn delay={0.4} y={30} className="mx-auto mt-10 w-full max-w-5xl sm:mt-12">
        <div
          className="relative aspect-video overflow-hidden rounded-md border border-[var(--line)] shadow-2xl"
          style={{ background: 'var(--panel)' }}
        >
          <video
            controls
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
          >
            <source
              src="https://res.cloudinary.com/dcnf2dmf/video/upload/v1789338877/done.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </FadeIn>
    </section>
  );
}
