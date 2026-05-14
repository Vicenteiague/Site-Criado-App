import { lazy, Suspense } from 'react';

const Header = lazy(() => import('./components/Header'));
const Hero = lazy(() => import('./components/Hero'));
const Services = lazy(() => import('./components/Services'));
const VideoSection = lazy(() => import('./components/VideoSection'));
const Metrics = lazy(() => import('./components/Metrics'));
const Partners = lazy(() => import('./components/Partners'));
const Roadmap = lazy(() => import('./components/Roadmap'));
const About = lazy(() => import('./components/About'));
const CTA = lazy(() => import('./components/CTA'));
const MapSection = lazy(() => import('./components/MapSection'));
const Footer = lazy(() => import('./components/Footer'));
const WhatsAppFab = lazy(() => import('./components/WhatsAppFab'));

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans relative">
      <Suspense fallback={<div className="h-20 bg-black" />}>
        <Header />
      </Suspense>
      
      <main className="flex-grow">
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
          <Hero />
          <Services />
          <VideoSection />
          <Metrics />
          <Partners />
          <Roadmap />
          <About />
          <CTA />
          <MapSection />
        </Suspense>
      </main>

      <Suspense fallback={<div className="h-40 bg-black" />}>
        <Footer />
      </Suspense>
      
      <Suspense fallback={null}>
        <WhatsAppFab />
      </Suspense>
    </div>
  );
}
