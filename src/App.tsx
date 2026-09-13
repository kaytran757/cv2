import HeroSection from '@/components/HeroSection';
import CareerSection from '@/components/CareerSection';
import ContactSection from '@/components/ContactSection';
import SocialWidget from '@/components/SocialWidget';

export default function App() {
  return (
    <div className="relative bg-[var(--bg)]" style={{ overflowX: 'clip' }}>
      <HeroSection />
      <CareerSection />
      <ContactSection />
      <SocialWidget />
    </div>
  );
}
