import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "../components/ui";
import { Starburst } from "../components/motifs";
// Assume image exists, we'll verify or it will throw at build time but we can check later
import missionImg from "../assets/photos/gallery/concerts-artists/bw-crowd-stage-wide.jpg";

export function Mission() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect for desktop, check if mobile via CSS or we just apply the transform and let CSS handle it
  // We'll apply the transform via framer-motion, and use a media query wrapper or just let it be subtle.
  // The brief says disable on mobile, we can use a small hook or CSS.
  // For simplicity, we'll use a subtle transform that isn't too distracting on mobile, or check window width.
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const yParallax = useTransform(scrollYProgress, [0, 1], [isMobile ? 0 : -50, isMobile ? 0 : 50]);

  return (
    <section ref={containerRef} className="py-20 md:py-32 bg-bg-primary relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Text Side */}
          <div className="w-full md:w-1/2 relative z-10">
            <SectionHeading eyebrow="OUR MISSION" title="To Create Extraordinary Experiences" className="mb-8" />
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl font-headline font-semibold text-white mb-6 leading-relaxed"
            >
              To become a trusted leader in event management by creating world-class experiences that connect people, brands, and communities.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-text-muted font-body leading-relaxed text-lg"
            >
              At MagicTime Events, our mission is to transform ideas into unforgettable experiences through creativity, precision, and flawless execution. We strive to deliver events that inspire, engage, and leave lasting memories.
            </motion.p>
          </div>

          {/* Image Side */}
          <div className="w-full md:w-1/2 relative h-[500px] rounded-2xl overflow-hidden">
            <motion.div 
              className="absolute inset-0 w-full h-[120%] -top-[10%]"
              style={{ y: yParallax }}
            >
              <div className="absolute inset-0 bg-accent-orange/10 mix-blend-overlay z-10"></div>
              <img 
                src={missionImg} 
                alt="Concert Crowd" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            <Starburst className="absolute top-4 right-4 z-20 text-accent-gold" />
          </div>

        </div>
      </div>
    </section>
  );
}
