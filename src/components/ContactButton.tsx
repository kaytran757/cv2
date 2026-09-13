type ContactButtonProps = {
  className?: string;
};

export default function ContactButton({ className }: ContactButtonProps) {
  return (
    <a
      href="https://zalo.me/0398519485"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-sm px-8 py-3.5 text-center text-sm font-medium text-[#10141A] transition-transform duration-200 hover:scale-[1.02] ${className ?? ''}`}
      style={{ background: 'var(--accent)' }}
    >
      Liên hệ qua Zalo
    </a>
  );
}
