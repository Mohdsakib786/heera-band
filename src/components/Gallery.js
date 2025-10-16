"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gallery = Gallery;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var framer_motion_1 = require("framer-motion");
var bb8e44cbceb5594f25f5e77747b0823a0975d1da_png_1 = require("../assets/bb8e44cbceb5594f25f5e77747b0823a0975d1da.png");
var aca18567fe22bce5c1a177f346c04acf5f2465fd_png_1 = require("../assets/aca18567fe22bce5c1a177f346c04acf5f2465fd.png");
var ba520acd9eaeb42e427de0549615b741ab03aa2a_png_1 = require("../assets/ba520acd9eaeb42e427de0549615b741ab03aa2a.png");
var b1f00b4b644e3b8a98d47f42b5231f7d2e598c07_png_1 = require("../assets/b1f00b4b644e3b8a98d47f42b5231f7d2e598c07.png");
var _484b545497c0326f79c3ffbacdf8de2164afa1a6_png_1 = require("../assets/484b545497c0326f79c3ffbacdf8de2164afa1a6.png");
var _68af5301c0d08d6c78160ca8cc1187a7d2538d81_png_1 = require("../assets/68af5301c0d08d6c78160ca8cc1187a7d2538d81.png");
var fb348505e96b2b6c124b4d4032cfc2d5f2e5eb49_png_1 = require("../assets/fb348505e96b2b6c124b4d4032cfc2d5f2e5eb49.png");
var c36d46e97c04e2ff1498c37afb601d61b899b3b2_png_1 = require("../assets/c36d46e97c04e2ff1498c37afb601d61b899b3b2.png");
var f7838ee2a7add81b78ee9ce2489c339c419a7431_png_1 = require("../assets/f7838ee2a7add81b78ee9ce2489c339c419a7431.png");
// ...existing code...
function Gallery() {
    var _a = (0, react_1.useState)(null), selectedImage = _a[0], setSelectedImage = _a[1];
    return (<section id="gallery" className="bg-[#faf6f3] py-12 lg:py-24 px-4 lg:px-12" data-aos="fade-up">
      <div className="container mx-auto max-w-[1560px]">
        <div className="flex flex-col gap-3 mb-12 lg:mb-16">
          <h2 className="font-['Playfair_Display'] font-semibold text-[#968969] text-3xl lg:text-[60px] leading-normal">
            Our Gallery
          </h2>
          <p className="text-[#505050] text-base lg:text-xl leading-relaxed max-w-[547px]">
            At Herra Band, we believe that every celebration deserves the perfect blend of music, tradition, and grandeur.
          </p>
        </div>

        {/* Gallery Grid - matching Figma layout */}
    <div className="gallery-grid">
  <div className="gallery-item item-1" onClick={function () { return setSelectedImage(bb8e44cbceb5594f25f5e77747b0823a0975d1da_png_1.default); }}>
    <img src={bb8e44cbceb5594f25f5e77747b0823a0975d1da_png_1.default} alt="Gallery 1"/>
  </div>
  <div className="gallery-item item-2" onClick={function () { return setSelectedImage(aca18567fe22bce5c1a177f346c04acf5f2465fd_png_1.default); }}>
    <img src={aca18567fe22bce5c1a177f346c04acf5f2465fd_png_1.default} alt="Gallery 2"/>
  </div>
  <div className="gallery-item item-3" onClick={function () { return setSelectedImage(_68af5301c0d08d6c78160ca8cc1187a7d2538d81_png_1.default); }}>
    <img src={_68af5301c0d08d6c78160ca8cc1187a7d2538d81_png_1.default} alt="Gallery 3"/>
  </div>
  <div className="gallery-item item-4" onClick={function () { return setSelectedImage(fb348505e96b2b6c124b4d4032cfc2d5f2e5eb49_png_1.default); }}>
    <img src={fb348505e96b2b6c124b4d4032cfc2d5f2e5eb49_png_1.default} alt="Gallery 4"/>
  </div>
  <div className="gallery-item item-5" onClick={function () { return setSelectedImage(ba520acd9eaeb42e427de0549615b741ab03aa2a_png_1.default); }}>
    <img src={ba520acd9eaeb42e427de0549615b741ab03aa2a_png_1.default} alt="Gallery 5"/>
  </div>
  <div className="gallery-item item-6" onClick={function () { return setSelectedImage(c36d46e97c04e2ff1498c37afb601d61b899b3b2_png_1.default); }}>
    <img src={c36d46e97c04e2ff1498c37afb601d61b899b3b2_png_1.default} alt="Gallery 6"/>
  </div>
  <div className="gallery-item item-7" onClick={function () { return setSelectedImage(b1f00b4b644e3b8a98d47f42b5231f7d2e598c07_png_1.default); }}>
    <img src={b1f00b4b644e3b8a98d47f42b5231f7d2e598c07_png_1.default} alt="Gallery 7"/>
  </div>
  <div className="gallery-item item-8" onClick={function () { return setSelectedImage(_484b545497c0326f79c3ffbacdf8de2164afa1a6_png_1.default); }}>
    <img src={_484b545497c0326f79c3ffbacdf8de2164afa1a6_png_1.default} alt="Gallery 8"/>
  </div>
  <div className="gallery-item item-9" onClick={function () { return setSelectedImage(f7838ee2a7add81b78ee9ce2489c339c419a7431_png_1.default); }}>
    <img src={f7838ee2a7add81b78ee9ce2489c339c419a7431_png_1.default} alt="Gallery 9"/>
  </div>
    </div>
      </div>

      {/* Lightbox */}
      <framer_motion_1.AnimatePresence>
        {selectedImage && (<framer_motion_1.motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={function () { return setSelectedImage(null); }} className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button onClick={function () { return setSelectedImage(null); }} className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors">
              <lucide_react_1.X size={32}/>
            </button>
            <framer_motion_1.motion.img initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} src={selectedImage} alt="Gallery preview" className="max-w-full max-h-full object-contain" onClick={function (e) { return e.stopPropagation(); }}/>
          </framer_motion_1.motion.div>)}
      </framer_motion_1.AnimatePresence>
    </section>);
}
