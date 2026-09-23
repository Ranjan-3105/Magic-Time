import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Mic2, Tent, ChevronDown } from "lucide-react";
import { SectionHeading } from "../components/ui";

const servicesList = [
  {
    title: "Event Planning & Talent",
    icon: Sparkles,
    items: [
      "End-to-end event planning",
      "Venue coordination",
      "Production management",
      "On-site execution",
      "Celebrity appearances",
      "Artist bookings",
      "Influencer collaborations",
      "Talent management",
    ],
  },
  {
    title: "Stage & Technical Production",
    icon: Mic2,
    items: [
      "Stage setup",
      "Sound & lighting",
      "LED walls",
      "Technical support",
      "Artist technical rider",
      "DG & fuel",
    ],
  },
  {
    title: "Infrastructure & Décor",
    icon: Tent,
    items: [
      "German hanger",
      "German pagoda",
      "Seating arrangements",
      "Ground platform",
      "Decorations",
      "Flex branding",
    ],
  },
];

function ServiceCard({ service, index }: { service: typeof servicesList[0], index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-bg-primary rounded-2xl p-8 border border-border-subtle hover:border-accent-orange/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(255,90,31,0.15)] flex flex-col h-full overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent-orange/5 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
      
      <div className="w-14 h-14 rounded-xl bg-bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent-orange transition-colors duration-300">
        <Icon className="w-7 h-7 text-accent-orange group-hover:text-white transition-colors duration-300" />
      </div>
      
      <h3 className="text-2xl font-headline font-bold text-white mb-6">
        {service.title}
      </h3>

      {/* Mobile Toggle */}
      <button 
        className="md:hidden flex items-center justify-between w-full text-left text-text-muted mb-2 font-medium"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span>View Services</span>
        <ChevronDown className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
      </button>

      {/* List */}
      <AnimatePresence initial={false}>
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isExpanded || window.innerWidth >= 768 ? "auto" : 0, 
            opacity: isExpanded || window.innerWidth >= 768 ? 1 : 0 
          }}
          className="flex flex-col gap-3 overflow-hidden md:!h-auto md:!opacity-100 flex-1"
        >
          {service.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-text-muted font-body">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-orange mt-2 flex-shrink-0"></span>
              <span>{item}</span>
            </li>
          ))}
        </motion.ul>
      </AnimatePresence>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="what-we-do" className="py-20 md:py-32 bg-bg-secondary relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <SectionHeading eyebrow="WHAT WE DO?" title="Our Expertise" className="mb-6" />
          <p className="text-lg md:text-xl text-text-muted font-body leading-relaxed">
            At MagicTime Events, we specialize in planning, managing, and executing memorable events that inspire, entertain, and connect people. From intimate celebrations to large-scale productions, we bring every vision to life with creativity and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
