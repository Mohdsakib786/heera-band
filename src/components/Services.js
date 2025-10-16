"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Services = Services;
var framer_motion_1 = require("framer-motion");
var _2e5b9a5b8ca02d4fb9ffd5f9afab7141e67da507_png_1 = require("../assets/2e5b9a5b8ca02d4fb9ffd5f9afab7141e67da507.png");
var effdbdbb5c3fa8282a059c98a3d6f13fb10c75ac_png_1 = require("../assets/effdbdbb5c3fa8282a059c98a3d6f13fb10c75ac.png");
var f7838ee2a7add81b78ee9ce2489c339c419a7431_png_1 = require("../assets/f7838ee2a7add81b78ee9ce2489c339c419a7431.png");
var _715bda73f7f4293cf3256e0fb69be4ba056d0313_png_1 = require("../assets/715bda73f7f4293cf3256e0fb69be4ba056d0313.png");
var c36d46e97c04e2ff1498c37afb601d61b899b3b2_png_1 = require("../assets/c36d46e97c04e2ff1498c37afb601d61b899b3b2.png");
var _9f040347af9707bd04482706d59778037d5633ec_png_1 = require("../assets/9f040347af9707bd04482706d59778037d5633ec.png");
var _2132dd84b2f2160f3603220f1670daba7eff06b8_png_1 = require("../assets/2132dd84b2f2160f3603220f1670daba7eff06b8.png");
var ecd9e195a3c16505a136b19b3e3a24a45c1cab26_png_1 = require("../assets/ecd9e195a3c16505a136b19b3e3a24a45c1cab26.png");
var services = [
    { name: 'Vintage Car', image: _2e5b9a5b8ca02d4fb9ffd5f9afab7141e67da507_png_1.default },
    { name: 'Punjabi Dhol', image: effdbdbb5c3fa8282a059c98a3d6f13fb10c75ac_png_1.default },
    { name: 'Turban Maker', image: f7838ee2a7add81b78ee9ce2489c339c419a7431_png_1.default },
    { name: 'Shehnai and Chatar', image: _715bda73f7f4293cf3256e0fb69be4ba056d0313_png_1.default },
    { name: 'Band and Dhol', image: c36d46e97c04e2ff1498c37afb601d61b899b3b2_png_1.default },
    { name: 'Lights', image: ecd9e195a3c16505a136b19b3e3a24a45c1cab26_png_1.default },
    { name: 'Ghodi', image: _9f040347af9707bd04482706d59778037d5633ec_png_1.default },
    { name: 'Baggi', image: _2132dd84b2f2160f3603220f1670daba7eff06b8_png_1.default }
];
function ServiceCard(_a) {
    var name = _a.name, image = _a.image;
    return (<div className="flex flex-col gap-6 items-center group">
      <div className="bg-white shadow-[0px_4px_26px_0px_rgba(0,0,0,0.05)] overflow-hidden w-full aspect-[367/367] flex items-center justify-center p-5">
        <div className="w-full h-full overflow-hidden">
          <framer_motion_1.motion.img src={image} alt={name} className="w-full h-full object-cover" whileHover={{ scale: 1.15, rotate: 3 }} transition={{ duration: 0.5, ease: "easeOut" }}/>
        </div>
      </div>
      <p className="font-['Playfair_Display'] text-2xl lg:text-[28px] text-black text-center leading-relaxed">
        {name}
      </p>
    </div>);
}
function Services() {
    return (<section id="services" className="bg-[#faf6f3] py-12 lg:py-24 px-4 lg:px-12">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 lg:gap-6 items-center mb-12 lg:mb-20">
          <h2 className="font-['Playfair_Display'] text-[#968969] text-3xl lg:text-[60px] text-center" data-aos="fade-up">
            Our Awesome Services For you
          </h2>
          <p className="text-[#505050] text-base lg:text-xl text-center max-w-2xl leading-relaxed" data-aos="fade-up">
            At Heera Band, we believe that every celebration deserves the perfect blend of music, tradition, and grandeur.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" data-aos="fade-up">
          {services.map(function (service, index) { return (<ServiceCard key={index} {...service}/>); })}
        </div>
      </div>
    </section>);
}
