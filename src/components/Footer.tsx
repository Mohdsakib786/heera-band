import { Phone, Mail, MapPin } from 'lucide-react';

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
              <p>Vintage Car</p>
              <p>Ghodi and chhatar</p>
              <p>Baggi</p>
              <p>Shehnai</p>
              <p>Band and Dhol</p>
              <p>Shehnai</p>
            </div>
          </div>

          {/* Let's Connect */}
          <div className="flex flex-col gap-5">
            <h4 className="font-['Playfair_Display'] font-bold text-black">Let's Connect</h4>
            <div className="flex flex-col gap-6">
             
              <div className="flex flex-col gap-4">
              <a
                  href="https://maps.app.goo.gl/Chvr1pvxtVoki5kB7" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-black hover:text-[#968969] transition-colors"
                >
                  <MapPin size={20} />
                  <span> Ramnagar, Uttarakhand, India</span>
                </a>
                <a
                  href="tel:+919639104422"
                  className="flex items-center gap-3 text-black hover:text-[#968969] transition-colors"
                >
                  <Phone size={20} />
                  <span>+91 9639104422</span>
                </a>
                <a
                  href="https://wa.me/916398952562"
                  className="flex items-center gap-3 text-black hover:text-[#968969] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="m17.507 14.307-.009.075c-2.199-1.096-2.429-1.242-2.713-.816-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.293-.506.32-.578.878-1.634.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.576-.05-.997-.042-1.368.344-1.614 1.774-1.207 3.604.174 5.55 2.714 3.552 4.16 4.206 6.804 5.114.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z"/>
                    <path d="M20.52 3.449C12.831-3.984.106 1.407.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c7.905 4.27 17.661-1.4 17.665-10.449 0-3.176-1.24-6.165-3.495-8.411zm1.482 8.417c-.006 7.633-8.385 12.4-15.012 8.504l-.36-.214-3.75.975 1.005-3.645-.239-.375c-4.124-6.565.614-15.145 8.426-15.145a9.865 9.865 0 0 1 7.021 2.91 9.788 9.788 0 0 1 2.909 6.99z"/>
                  </svg>
                  <span>+91 6398952562</span>
                </a>
                <a
                  href="mailto:info@Herraband.com"
                  className="flex items-center gap-3 text-black hover:text-[#968969] transition-colors"
                >
                  <Mail size={20} />
                  <span>info@herraband.com</span>
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
