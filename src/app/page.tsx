import Header from '@/components/layout/header';
import UrlShortener from '@/components/features/url-shortener';
import HeroSection from '@/components/features/hero';
import Features from '@/components/features/features';
import Pricing from '@/components/features/pricing';
import CallToAction from '@/components/features/cta';
import Footer from '@/components/layout/footer';

export default function UrlShortenerLanding() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <UrlShortener />
        <HeroSection />
        <Features />
        <Pricing />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
