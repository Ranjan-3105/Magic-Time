import { motion } from "framer-motion";
import { AnimatedNumber } from "../components/ui";

const stats = [
  { value: 7, suffix: "+", label: "Years of Experience" },
  { value: 800, suffix: "+", label: "Successful Events" },
  { isText: true, text: "National & Int'l", label: "Artists Hosted" },
  { isText: true, text: "24/7", label: "Event Support" },
];

export function StatsStrip() {
  return (
    <section className="relative z-20 bg-bg-secondary border-y border-border-subtle overflow-hidden">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-border-subtle">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-number font-bold tracking-wide text-accent-gold mb-2">
                {stat.isText ? (
                  <span>{stat.text}</span>
                ) : (
                  <AnimatedNumber value={stat.value!} suffix={stat.suffix} />
                )}
              </div>
              <div className="text-sm md:text-base font-body font-medium text-text-muted uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
