import { motion, type Variants } from "framer-motion";
import { Link } from "react-scroll";
import { ChevronDown } from "lucide-react";
import { Button } from "../components/ui";
import { BreathingCircle } from "../components/motifs";
import heroImg from "../assets/photos/hero/hero-stage-crowd.jpg";

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const magicLetters = "MAGIC".split("");
  const timeLetters = "TIME".split("");

  const letterContainerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="hero" className="relative w-full h-screen min-h-[100svh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 w-full h-full z-0 bg-cover bg-[position:80%_center] bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/95"></div>
      </div>

      {/* Decorative Breathing Circle */}
      <BreathingCircle className="w-96 h-96 top-1/4 left-1/4 opacity-50 z-0" />
      <BreathingCircle className="w-64 h-64 bottom-1/4 right-1/4 opacity-30 z-0" delay="4s" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center mt-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center max-w-4xl"
        >
          <motion.span 
            variants={itemVariants}
            className="font-body text-sm md:text-base font-light tracking-[0.2em] text-accent-orange uppercase mb-6"
          >
            Your Dream Event, Delivered
          </motion.span>

          <h1 className="font-headline flex flex-col md:flex-row gap-4 md:gap-6 mb-8 items-center justify-center">
            {/* "MAGIC" - Outline / Thin styling */}
            <motion.span 
              variants={letterContainerVariants}
              className="flex text-6xl md:text-8xl lg:text-9xl text-transparent font-light drop-shadow-2xl"
              style={{ WebkitTextStroke: "2px #FF5A1F" }}
            >
              {magicLetters.map((letter, i) => (
                <motion.span key={i} variants={letterVariants}>{letter}</motion.span>
              ))}
            </motion.span>
            
            {/* "TIME" - Bold / White styling */}
            <motion.span 
              variants={letterContainerVariants}
              className="flex text-6xl md:text-8xl lg:text-9xl text-white font-bold"
            >
              {timeLetters.map((letter, i) => (
                <motion.span key={i} variants={letterVariants}>{letter}</motion.span>
              ))}
            </motion.span>
          </h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-text-muted font-body font-light mb-12 max-w-2xl text-balance"
          >
            We create your imagination to reality.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link to="portfolio" smooth={true} duration={500} offset={-80} className="w-full sm:w-auto">
              <Button variant="primary" className="w-full">Explore Our Work</Button>
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-80} className="w-full sm:w-auto">
              <Button variant="outline" className="w-full">Plan Your Event</Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <Link to="about" smooth={true} duration={500} offset={-80} className="cursor-pointer text-white/50 hover:text-white transition-colors">
            <ChevronDown className="w-8 h-8" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
