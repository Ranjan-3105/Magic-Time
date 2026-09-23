import { motion } from "framer-motion";
import { Check, Quote } from "lucide-react";
import { SectionHeading } from "../components/ui";
import { ConcentricRings } from "../components/motifs";
import aboutImg from "../assets/photos/gallery/college-fests/about-crowd-cheering.jpg";

const checklist = [
  "800+ Successful Events",
  "Corporate & College Events",
  "Celebrity Management",
  "Concerts & Festivals",
  "Wedding & Private Events",
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden bg-bg-primary">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Image Side */}
          <motion.div 
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-accent-orange/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay"></div>
              <img 
                src={aboutImg} 
                alt="Crowd cheering at a Magic Time Event" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 z-0 hidden md:block">
              <ConcentricRings className="w-24 h-24 text-accent-rust" />
            </div>
          </motion.div>

          {/* Text Side */}
          <div className="w-full md:w-1/2">
            <SectionHeading eyebrow="ABOUT" title="Our Events" className="mb-10" />

            <div className="flex flex-col gap-6 mb-12">
              {checklist.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-orange/10 flex items-center justify-center border border-accent-orange/30">
                    <Check className="w-4 h-4 text-accent-orange" />
                  </div>
                  <span className="font-body text-lg text-text-primary font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Pull Quote */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative pl-8 border-l-2 border-accent-orange"
            >
              <Quote className="absolute -left-3 -top-2 w-8 h-8 text-accent-orange/20 fill-accent-orange/10" />
              <p className="font-headline text-2xl md:text-3xl text-text-muted italic leading-relaxed">
                "From intimate celebrations to large-scale concerts, we transform ideas into extraordinary events."
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
