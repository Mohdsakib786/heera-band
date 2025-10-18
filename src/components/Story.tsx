import imgRectangle53 from '../assets/18579741b0ceb25b48267224f946714601f6c255.png';

export function Story() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="story" className="relative bg-[#faf6f3] h-[864px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src={imgRectangle53}
          alt=""
          className="w-full h-[146.21%] object-cover absolute top-[-10.26%] left-0"
        />
      </div>
      <div className="container mx-auto px-4 lg:px-12 relative h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-full items-end">
          {/* Empty space for larger screens */}
          <div className="hidden lg:block" />
          
          {/* Content - positioned at bottom */}
          <div className="bg-[#faf6f3] p-8 lg:p-[60px] flex flex-col gap-8 lg:gap-[60px] mb-0 lg:w-[606px] lg:ml-auto">
            <div className="flex flex-col gap-5">
              <h2 className="font-['Playfair_Display'] font-semibold text-[#968969] text-3xl lg:text-[60px] leading-normal" data-aos="fade-up">
                Our Story
              </h2>
              <p className="text-[#505050] text-base lg:text-xl leading-relaxed" data-aos="fade-up">
                At Heera Band, we believe that every celebration deserves the perfect blend of music, tradition, and grandeur. With decades of experience in bringing joy to weddings and special events, we are proud to be one of the most trusted wedding bands in Ramnagar, Jim Corbett, Nainital, and across Uttarakhand.
              </p>
            </div>
            {/* <button
              onClick={() => scrollToSection('home')}
              className="bg-[#968969] px-10 py-5 text-[#faf6f3] font-medium uppercase w-fit hover:bg-[#7a6d54] transition-colors" data-aos="fade-up"
            >
              Know More
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
