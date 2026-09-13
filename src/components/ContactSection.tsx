import FadeIn from '@/components/FadeIn';
import ContactButton from '@/components/ContactButton';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="flex min-h-[50vh] flex-col items-center justify-center gap-7 px-5 py-24 text-center sm:px-8 md:px-10"
      style={{ background: 'var(--bg)' }}
    >
      <FadeIn delay={0} y={20}>
        <h2 className="display-font text-[clamp(1.7rem,4.2vw,2.6rem)] font-semibold text-[var(--text)]">
          Sẵn sàng trao đổi thêm
        </h2>
      </FadeIn>
      <FadeIn delay={0.1} y={16}>
        <p className="max-w-[46ch] text-[var(--muted)]">
          Nếu những gì bạn thấy ở trên phù hợp với vị trí đang tuyển, hãy nhắn cho mình - mình trả lời nhanh.
        </p>
      </FadeIn>
      <FadeIn delay={0.2} y={16}>
        <ContactButton />
      </FadeIn>
    </section>
  );
}
