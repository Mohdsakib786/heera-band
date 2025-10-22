"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroSlider = HeroSlider;
var framer_motion_1 = require("framer-motion");
var react_slick_1 = require("react-slick");
require("slick-carousel/slick/slick.css");
require("slick-carousel/slick/slick-theme.css");
require("./custom.css");
var _5242b2e58ad5c4c7ce78e97b8095ee8179272091_png_1 = require("../assets/5242b2e58ad5c4c7ce78e97b8095ee8179272091.png");
var _3d4e33797459d70535a21f7d3aa6175f0c97db00_webp_1 = require("../assets/3d4e33797459d70535a21f7d3aa6175f0c97db00.webp");
var slides = [
    {
        title: "Premier Wedding & Event Band in Jim Corbett",
        description: "Creating magical moments with traditional music and celebrations across Uttarakhand. Your perfect wedding celebration starts here.",
        image: _3d4e33797459d70535a21f7d3aa6175f0c97db00_png_1.default
    },
    {
        title: "Traditional Music Meets Modern Celebration",
        description: "Bringing joy and grandeur to your special day with authentic Punjabi dhol, band, and complete wedding services.",
        image: _5242b2e58ad5c4c7ce78e97b8095ee8179272091_png_1.default
    },
    {
        title: "Making Your Event Unforgettable",
        description: "With decades of experience across Uttarakhand, we deliver excellence in every beat and celebration.",
        image: _3d4e33797459d70535a21f7d3aa6175f0c97db00_webp_1.default
    }
];
function HeroSlider() {
    var scrollToSection = function (sectionId) {
        var element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        pauseOnHover: false,
        arrows: false,
        appendDots: function (dots) { return (<div className="absolute bottom-8 w-full">
        <ul className="flex justify-center gap-3"> {dots} </ul>
      </div>); },
        customPaging: function () { return (<div className="w-3 h-3 rounded-full bg-white/40 hover:bg-white transition-all cursor-pointer"/>); }
    };
    return (<div className="hero-slider relative w-full h-screen overflow-hidden">
      <react_slick_1.default {...settings}>
        {slides.map(function (slide, index) { return (<div key={index} className="relative h-screen">
            <div className="absolute inset-0">
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover"/>
              <div className="absolute inset-0 custom-bg-overlay"/>
            </div>
            <div className="relative h-full flex flex-col items-center justify-center px-4 text-center" >
              <framer_motion_1.motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="font-['Playfair_Display'] text-white text-3xl md:text-5xl lg:text-[80px] max-w-[90%] lg:max-w-[982px] leading-tight mb-6 ">
                {slide.title}
              </framer_motion_1.motion.h1>
              <framer_motion_1.motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-white/80 text-base md:text-lg lg:text-xl max-w-[90%] lg:max-w-[763px] leading-relaxed mb-8">
                {slide.description}
              </framer_motion_1.motion.p>
              <framer_motion_1.motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-col sm:flex-row gap-3">
                <button onClick={function () { return scrollToSection('footer'); }} className="bg-[#968969] px-8 lg:px-10 py-4 lg:py-5 text-[#faf6f3] uppercase hover:bg-[#7a6d54] transition-colors">
                  Let's Connect
                </button>
                <button onClick={function () { return scrollToSection('gallery'); }} className="bg-white px-8 lg:px-10 py-4 lg:py-5 text-[#968968] uppercase hover:bg-gray-100 transition-colors">
                  View Gallery
                </button>
              </framer_motion_1.motion.div>
            </div>
          </div>); })}
      </react_slick_1.default>
    </div>);
}
