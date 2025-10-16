
import { Navigation } from './components/Navigation.tsx';
import { HeroSlider } from './components/HeroSlider.tsx';
import { Services } from './components/Services.tsx';
import { Story } from './components/Story.tsx';
import { ConnectBanner } from './components/ConnectBanner.tsx';
import { Gallery } from './components/Gallery.tsx';
import { Footer } from './components/Footer.tsx';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function App() {
  return (
    <div className="min-h-screen bg-[#faf6f3]" id="home">
      <AOS.init />
      <Navigation />
      <HeroSlider />
      <Services />
      <Story />
      <ConnectBanner />
      <Gallery />
      <Footer />
    </div>
  );
}
