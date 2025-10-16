import { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import img2 from '../assets/bb8e44cbceb5594f25f5e77747b0823a0975d1da.png';
import imgImg20251005Wa0027 from '../assets/aca18567fe22bce5c1a177f346c04acf5f2465fd.png';
import imgImg20251005Wa21 from '../assets/ba520acd9eaeb42e427de0549615b741ab03aa2a.png';
import imgImg20251005Wa24 from '../assets/b1f00b4b644e3b8a98d47f42b5231f7d2e598c07.png';
import imgImg20251005Wa15 from '../assets/484b545497c0326f79c3ffbacdf8de2164afa1a6.png';
import imgImg20251005Wa14 from '../assets/68af5301c0d08d6c78160ca8cc1187a7d2538d81.png';
import imgImg20251005Wa16 from '../assets/fb348505e96b2b6c124b4d4032cfc2d5f2e5eb49.png';
import imgImg20251005Wa293 from '../assets/c36d46e97c04e2ff1498c37afb601d61b899b3b2.png';
import imgImg20251005Wa18 from '../assets/f7838ee2a7add81b78ee9ce2489c339c419a7431.png';
// ...existing code...

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="bg-[#faf6f3] py-12 lg:py-24 px-4 lg:px-12" data-aos="fade-up">
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
  <div className="gallery-item item-1" onClick={() => setSelectedImage(img2)}>
    <img src={img2} alt="Gallery 1" />
  </div>
  <div className="gallery-item item-2" onClick={() => setSelectedImage(imgImg20251005Wa0027)}>
    <img src={imgImg20251005Wa0027} alt="Gallery 2" />
  </div>
  <div className="gallery-item item-3" onClick={() => setSelectedImage(imgImg20251005Wa14)}>
    <img src={imgImg20251005Wa14} alt="Gallery 3" />
  </div>
  <div className="gallery-item item-4" onClick={() => setSelectedImage(imgImg20251005Wa16)}>
    <img src={imgImg20251005Wa16} alt="Gallery 4" />
  </div>
  <div className="gallery-item item-5" onClick={() => setSelectedImage(imgImg20251005Wa21)}>
    <img src={imgImg20251005Wa21} alt="Gallery 5" />
  </div>
  <div className="gallery-item item-6" onClick={() => setSelectedImage(imgImg20251005Wa293)}>
    <img src={imgImg20251005Wa293} alt="Gallery 6" />
  </div>
  <div className="gallery-item item-7" onClick={() => setSelectedImage(imgImg20251005Wa24)}>
    <img src={imgImg20251005Wa24} alt="Gallery 7" />
  </div>
  <div className="gallery-item item-8" onClick={() => setSelectedImage(imgImg20251005Wa15)}>
    <img src={imgImg20251005Wa15} alt="Gallery 8" />
  </div>
  <div className="gallery-item item-9" onClick={() => setSelectedImage(imgImg20251005Wa18)}>
    <img src={imgImg20251005Wa18} alt="Gallery 9" />
  </div>
</div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selectedImage}
              alt="Gallery preview"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
