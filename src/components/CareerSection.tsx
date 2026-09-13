import FadeIn from '@/components/FadeIn';

type Stage = {
  period: string;
  title: string;
  description: string;
  tags: string[];
};

const stages: Stage[] = [
  {
    period: 'Giai đoạn 1',
    title: 'Sales Consultant - coaching business (Canada, remote)',
    description:
      'Tư vấn bán hàng từ xa cho một coaching business tại Canada. Làm việc trực tiếp với khách hàng quốc tế, rèn kỹ năng giao tiếp, chốt sale và làm việc độc lập theo giờ nước ngoài.',
    tags: ['Sales tư vấn', 'Làm việc từ xa', 'Khách hàng quốc tế'],
  },
  {
    period: 'Giai đoạn 2',
    title: 'Sales Consultant - đội nhóm tư vấn thứ hai (remote)',
    description:
      'Tiếp tục công việc tư vấn từ xa ở một đội nhóm khác, mở rộng kinh nghiệm làm việc với nhiều mô hình khách hàng và quy trình sale khác nhau.',
    tags: ['Consulting', 'Remote'],
  },
  {
    period: 'Giai đoạn 3',
    title: 'Affiliate Marketing',
    description:
      'Tự dựng và phát triển 2 kênh Instagram lên khoảng 45.000 và 35.000 người theo dõi. Tự biên tập video, xây nội dung, và kiếm tiền qua affiliate marketing.',
    tags: ['Video editing', 'Content', 'Instagram growth', 'Affiliate marketing'],
  },
  {
    period: 'Giai đoạn 4',
    title: 'AI Automation - hệ thống email tìm & tiếp cận khách hàng',
    description:
      'Xây hệ thống tự động thu thập lead từ LinkedIn và job board, dựng chân dung khách hàng mục tiêu (ICP), gửi tự động cả nghìn email cá nhân hoá mỗi ngày qua Instantly/make.com.',
    tags: ['Lead generation', 'Email automation', 'n8n', 'ICP & personalization'],
  },
  {
    period: 'Hiện tại',
    title: 'Web Development - vibe coding',
    description:
      'Tự thiết kế và dựng website bằng các công cụ vibe-coding hiện đại, đi từ ý tưởng đến sản phẩm, website được host nhanh, không phụ thuộc vào đội ngũ kỹ thuật lớn.',
    tags: ['Web development', 'Vibe coding', 'Thiết kế giao diện'],
  },
];

export default function CareerSection() {
  return (
    <section
      id="experience"
      className="px-5 py-20 sm:px-8 md:px-10 md:py-28"
      style={{ background: 'var(--bg-light)' }}
    >
      <FadeIn delay={0} y={20}>
        <h2 className="display-font mx-auto max-w-4xl text-[clamp(1.5rem,3.4vw,2.2rem)] font-semibold text-[var(--text-dark)]">
          Kinh nghiệm làm việc
        </h2>
      </FadeIn>

      <div className="mx-auto mt-10 flex max-w-4xl flex-col gap-4">
        {stages.map((stage, i) => (
          <FadeIn key={stage.period} delay={i * 0.08} y={20}>
            <div
              className="rounded-md border border-[var(--line-dark)] p-7 md:p-9"
              style={{ background: 'var(--panel-light)' }}
            >
              <span className="text-sm font-medium" style={{ color: 'var(--accent)' }}>
                {stage.period}
              </span>
              <h3 className="display-font mt-2 text-lg font-semibold text-[var(--text-dark)] md:text-xl">
                {stage.title}
              </h3>
              <p className="mt-3 max-w-[62ch] text-sm leading-relaxed text-[var(--muted-dark)] md:text-base">
                {stage.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {stage.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-sm border border-[var(--line-dark)] px-3 py-1 text-xs text-[var(--text-dark)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
