import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const handleContactClick = () => {
    window.location.href = 'tel:+919639104422 ';
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-black/70' : ''
      }`}
    >
      <div className="max-w-[1660px] mx-auto px-4 lg:px-12 py-6 lg:py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex flex-col items-center leading-none text-white cursor-pointer"
          >
            <p className="font-['Playfair_Display'] font-bold text-2xl lg:text-[40px] uppercase">
              Heera Band
            </p>
            <p className="font-['Lato'] text-xs lg:text-base text-center">
              Weeding and event spacialist
            </p>
          </button>

          {/* Desktop Menu - Centered Navigation */}
          <div className="hidden lg:flex items-center justify-between flex-1 ml-auto">
            <div className="flex gap-12 font-['Lato'] font-semibold text-base text-white uppercase mx-auto">
              <button onClick={() => scrollToSection('home')} className="hover:text-[#968969] transition-colors text-base uppercase">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="hover:text-[#968969] transition-colors text-base uppercase">
                Services
              </button>
              <button onClick={() => scrollToSection('story')} className="hover:text-[#968969] transition-colors text-base uppercase">
                About
              </button>
              <button onClick={() => scrollToSection('gallery')} className="hover:text-[#968969] transition-colors text-base uppercase">
                Our Gallery
              </button>
            </div>
            <button
              onClick={handleContactClick}
              className="bg-[#968969] px-10 py-5 text-[#faf6f3] font-medium text-base uppercase hover:bg-[#7a6d54] transition-colors ml-12"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white font-['Lato'] uppercase text-left py-2 hover:text-[#968969] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('story')}
              className="text-white font-['Lato'] uppercase text-left py-2 hover:text-[#968969] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-white font-['Lato'] uppercase text-left py-2 hover:text-[#968969] transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-white font-['Lato'] uppercase text-left py-2 hover:text-[#968969] transition-colors"
            >
              Our Gallery
            </button>
            <button
              onClick={handleContactClick}
              className="bg-[#968969] px-8 py-4 text-[#faf6f3] font-['Lato'] uppercase text-center hover:bg-[#7a6d54] transition-colors"
            >
              Contact Us
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
