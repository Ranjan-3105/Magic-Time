import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "../components/ui";
import { cn } from "../lib/utils";

// Use Vite's glob import to get all gallery images
const imagesRecord = import.meta.glob('../assets/photos/gallery/*/*.{jpg,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' });

interface GalleryItem {
  id: string;
  url: string;
  category: string;
}

const CATEGORY_MAP: Record<string, string> = {
  "concerts-artists": "Concerts & Festivals",
  "college-fests": "College Fests",
  "corporate-government": "Corporate & Government",
  "production-infrastructure": "Production & Infrastructure",
  "decor-design": "Décor & Design",
};

const FILTERS = ["All", ...Object.values(CATEGORY_MAP)];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Parse glob result into items array
  const items: GalleryItem[] = useMemo(() => {
    return Object.entries(imagesRecord).map(([path, module]) => {
      // Path example: ../assets/photos/gallery/college-fests/image.jpg
      const parts = path.split('/');
      const categoryDir = parts[parts.length - 2];
      const category = CATEGORY_MAP[categoryDir] || categoryDir;
      return {
        id: path,
        url: module as string,
        category,
      };
    });
  }, []);

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return items;
    return items.filter(item => item.category === activeFilter);
  }, [items, activeFilter]);

  // Lightbox Navigation
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };
  const closeLightbox = () => setLightboxIndex(null);
  
  const navigateLightbox = (direction: 1 | -1) => {
    if (lightboxIndex === null) return;
    let newIndex = lightboxIndex + direction;
    if (newIndex < 0) newIndex = filteredItems.length - 1;
    if (newIndex >= filteredItems.length) newIndex = 0;
    setLightboxIndex(newIndex);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigateLightbox(-1);
      if (e.key === "ArrowRight") navigateLightbox(1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredItems]);

  // Lock scroll
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [lightboxIndex]);

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-bg-secondary relative">
      <div className="container mx-auto px-6">
        <SectionHeading eyebrow="PORTFOLIO" title="Our Work" className="mb-12" align="center" />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-4 py-2 rounded-full font-body text-sm font-medium transition-all duration-300",
                activeFilter === filter 
                  ? "bg-accent-orange text-white" 
                  : "bg-transparent text-text-muted hover:text-white hover:bg-border-subtle"
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group bg-bg-primary"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={item.url} 
                  alt={`Magic Time Event - ${item.category}`} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-body font-medium px-4 text-center">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-sm"
          >
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 text-white/50 hover:text-white z-50 transition-colors bg-black/20 rounded-full"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button 
              onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
              className="absolute left-4 md:left-10 p-4 text-white/50 hover:text-white z-50 transition-colors bg-black/20 rounded-full"
              aria-label="Previous"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button 
              onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
              className="absolute right-4 md:right-10 p-4 text-white/50 hover:text-white z-50 transition-colors bg-black/20 rounded-full"
              aria-label="Next"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              src={filteredItems[lightboxIndex].url}
              alt="Gallery Image"
              className="max-w-full max-h-[90vh] object-contain px-4"
            />
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 font-body text-sm bg-black/40 px-4 py-2 rounded-full">
              {lightboxIndex + 1} / {filteredItems.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
