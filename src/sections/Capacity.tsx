import { motion } from "framer-motion";
import { Utensils, Music, Clock } from "lucide-react";
import { SectionHeading, AnimatedNumber } from "../components/ui";

const capacities = [
  { value: 200000, label: "sq ft German Hanger" },
  { value: 100000, suffix: "+", label: "Seating Arrangements" },
  { value: 200000, suffix: "+", label: "sq ft Matting, Walling & Ceiling" },
  { value: 200, suffix: "+", label: "German Pagoda Food Stalls" },
  { value: 800, suffix: "+", label: "Autonomous Stalls" },
  { value: 100000, suffix: "+", label: "sq ft Ground Platform" },
  { value: 500, suffix: "+", label: "AC, Coolers & Fans" },
  { isText: true, text: "Flex", label: "Branding" },
];

export function Capacity() {
  return (
    <section className="py-20 md:py-32 bg-bg-primary relative overflow-hidden">
      {/* Subtle Grid Texture */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, var(--text-muted) 1px, transparent 1px), linear-gradient(to bottom, var(--text-muted) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading eyebrow="OUR SERVICE" title="We Have" className="mb-16" align="center" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-20">
          {capacities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-bg-secondary/50 backdrop-blur-sm border border-border-subtle rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-accent-orange/30 transition-colors"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-accent-gold mb-3">
                {item.isText ? (
                  <span>{item.text}</span>
                ) : (
                  <AnimatedNumber value={item.value!} suffix={item.suffix} />
                )}
              </div>
              <div className="text-sm font-body text-text-muted">{item.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center p-6 border border-border-subtle rounded-2xl bg-bg-secondary"
          >
            <Utensils className="w-10 h-10 text-accent-orange mb-4" />
            <h4 className="text-xl font-headline font-bold text-white mb-2">Catering</h4>
            <p className="text-text-muted font-body text-sm">Premium culinary experiences for any scale.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center text-center p-6 border border-accent-orange rounded-2xl bg-accent-orange text-white shadow-[0_0_30px_rgba(255,90,31,0.2)] transform md:-translate-y-4"
          >
            <Music className="w-10 h-10 text-white mb-4" />
            <h4 className="text-xl font-headline font-bold mb-2">National & Int'l Artists</h4>
            <p className="text-white/90 font-body text-sm">Exclusive celebrity and artist management.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center text-center p-6 border border-border-subtle rounded-2xl bg-bg-secondary"
          >
            <Clock className="w-10 h-10 text-accent-orange mb-4" />
            <h4 className="text-xl font-headline font-bold text-white mb-2">24/7 Event Support</h4>
            <p className="text-text-muted font-body text-sm">End-to-End Event Solutions • Experienced Team</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
