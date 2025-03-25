import Header from '../components/header';
import UrlShortener from '../components/url-shortener';
import HeroSection from '../components/hero';
import Features from '../components/features';
import Pricing from '../components/pricing';
import CallToAction from '../components/cta';
import Footer from '../components/footer';

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
