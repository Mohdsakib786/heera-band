"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectBanner = ConnectBanner;
var b5a59300a7d1375f73bb4303dcf24ae38b1d16f3_png_1 = require("../assets/b5a59300a7d1375f73bb4303dcf24ae38b1d16f3.png");
function ConnectBanner() {
    var handleContactClick = function () {
        window.location.href = 'tel:+919639104422';
    };
    return (<section id="connect" className="relative lg:py-[150px] px-4 overflow-hidden my-16">
     <div className="py-12 bg-gradient-to-r from-[#faf6f3] via-white to-[#faf6f3]">
       {/* Left Flower Decoration */}
      <div className="absolute left-[38px] top-[91px] w-[261px] h-[564px] opacity-40 pointer-events-none hidden lg:block">
        <div className="absolute inset-0 overflow-hidden">
          <img src={b5a59300a7d1375f73bb4303dcf24ae38b1d16f3_png_1.default} alt="" className="absolute w-full h-[156.74%] top-[-32.27%] left-0 max-w-none"/>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf6f3] via-[rgba(250,246,243,0)] via-[47.115%] to-[#faf6f3]"/>
      </div>

      {/* Right Flower Decoration - rotated */}
      <div className="absolute right-[38px] top-0 w-[261px] h-[564px] opacity-40 pointer-events-none hidden lg:block rotate-180 scale-y-[-1]">
        <div className="absolute inset-0 overflow-hidden">
          <img src={b5a59300a7d1375f73bb4303dcf24ae38b1d16f3_png_1.default} alt="" className="absolute w-full h-[156.74%] top-[-32.27%] left-0 max-w-none"/>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#faf6f3] via-[rgba(250,246,243,0)] via-[47.115%] to-[#faf6f3]"/>
      </div>

      <div className="container mx-auto flex flex-col gap-8 lg:gap-10 items-center text-center relative z-10">
        <div className="flex flex-col gap-3 lg:gap-3">
          <h2 className="font-['Playfair_Display'] font-semibold text-[#968969] text-3xl lg:text-[60px] leading-normal" data-aos="fade-up">
            Ready to Make Your Event Memorable?
          </h2>
          <p className="text-[#505050] text-base lg:text-xl leading-relaxed" data-aos="fade-up">
            Contact us today to discuss your wedding or event needs
          </p>
        </div>
        <button onClick={handleContactClick} className="bg-[#968969] px-10 py-5 text-[#faf6f3] font-medium uppercase hover:bg-[#7a6d54] transition-colors" data-aos="fade-up">
          Get in touch
        </button>
      </div>
     </div>
    </section>);
}
