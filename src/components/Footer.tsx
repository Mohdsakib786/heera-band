import { Phone, Mail } from 'lucide-react';

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer id="footer" className="bg-white py-12 lg:py-12 pb-0 px-4 lg:px-12 relative">
      <div className="container mx-auto">
          {/* Logo and Rotating Text */}
          <div className="pb-6">
            <div className="flex items-center gap-4">
              <h3 className="font-['Playfair_Display'] ml-4 font-extrabold text-[#968969] text-4xl lg:text-[150px] uppercase leading-tight footer-logo-text">
                Heera Band
              </h3>
              <div className="rotating-text-container mx-auto">
                <svg className="rotating-circle" viewBox="0 0 100 100" width="140" height="140">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text className="rotating-text">
                    <textPath href="#circlePath" startOffset="0">
                      HEERA BAND • HEERA BAND • 
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Quick Links */}
          <div className="flex flex-col gap-5">
            <h4 className="font-['Playfair_Display'] font-bold text-base text-black">Quick links</h4>
            <div className="flex flex-col gap-2 font-['Lato'] text-[#505050]">
              <button onClick={() => scrollToSection('home')} className="text-left hover:text-[#968969] transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('story')} className="text-left hover:text-[#968969] transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left hover:text-[#968969] transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-left hover:text-[#968969] transition-colors">
                Our Gallery
              </button>
            </div>
          </div>

          {/* Our Services */}
          <div className="flex flex-col gap-5">
            <h4 className="font-['Playfair_Display'] font-bold text-black">Our Services</h4>
            <div className="flex flex-col gap-2 text-[#505050]">
              <p>Ghori</p>
              <p>Baggi</p>
              <p>Dhol</p>
              <p>Band & Shehnai</p>
              <p>Flower Chhatar</p>
            </div>
          </div>

          {/* Let's Connect */}
          <div className="flex flex-col gap-5">
            <h4 className="font-['Playfair_Display'] font-bold text-black">Let's Connect</h4>
            <div className="flex flex-col gap-6">
              <div className="bg-[#faf6f3] px-5 py-4">
                <input
                  type="email"
                  placeholder="Drop your mail.."
                  className="bg-transparent text-base text-[#505050]/60 w-full outline-none"
                />
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-black hover:text-[#968969] transition-colors"
                >
                  <Phone size={20} />
                  <span>+91 98765 43210</span>
                </a>
                <a
                  href="mailto:info@Herraband.com"
                  className="flex items-center gap-3 text-black hover:text-[#968969] transition-colors"
                >
                  <Mail size={20} />
                  <span>info@Herraband.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
        <div className="mt-12 text-center text-[#505050] text-sm lg:text-base pt-8 border-t border-[#e0e0e0] pb-6 pt-4">
          &copy; {new Date().getFullYear()} Heera Band. All rights reserved.
        </div>
    </footer>
  );
}
