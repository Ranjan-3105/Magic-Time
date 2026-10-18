import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "../components/ui";
import { cn } from "../lib/utils";

// ─── Category Tabs ─────────────────────────────────────────────────────────
type Category = "universities" | "medical" | "corporate" | "festivals";

const CATEGORIES: { id: Category; label: string }[] = [
  { id: "universities", label: "Universities & Colleges" },
  { id: "medical", label: "Medical Institutions" },
  { id: "corporate", label: "Corporate Events" },
  { id: "festivals", label: "Festivals & Mahotsavs" },
];

// ─── Helper: Styled Logo Badge ──────────────────────────────────────────────
function LogoBadge({
  abbr,
  color,
  imgUrl,
}: {
  abbr: string;
  color: string;
  imgUrl?: string;
}) {
  const [imgError, setImgError] = useState(false);

  if (imgUrl && !imgError) {
    return (
      <img
        src={imgUrl}
        alt={abbr}
        onError={() => setImgError(true)}
        className="w-14 h-14 object-contain drop-shadow-lg"
      />
    );
  }

  return (
    <div
      className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-xs text-center leading-tight shadow-lg"
      style={{ background: color }}
    >
      {abbr}
    </div>
  );
}

// ─── Data ───────────────────────────────────────────────────────────────────

interface Client {
  name: string;
  abbr: string;
  color: string;
  imgUrl?: string;
}

const UNIVERSITIES: Client[] = [
  {
    name: "SOA IBCS",
    abbr: "SOA\nIBCS",
    color: "linear-gradient(135deg,#1a3c6e,#2a5caa)",
    imgUrl: "/logo/SOA.webp",
  },
  {
    name: "SOA SPS FAS",
    abbr: "SOA\nSPS",
    color: "linear-gradient(135deg,#1a3c6e,#2a5caa)",
    imgUrl: "/logo/SOA.webp",
  },
  {
    name: "SOA Veterinary",
    abbr: "SOA\nVet",
    color: "linear-gradient(135deg,#1a3c6e,#2a5caa)",
    imgUrl: "/logo/SOA.webp",
  },
  {
    name: "SOA Agriculture",
    abbr: "SOA\nAgri",
    color: "linear-gradient(135deg,#1a3c6e,#2a5caa)",
    imgUrl: "/logo/SOA.webp",
  },
  {
    name: "SOA ITER",
    abbr: "SOA\nITER",
    color: "linear-gradient(135deg,#1a3c6e,#2a5caa)",
    imgUrl: "/logo/SOA.webp",
  },
  {
    name: "SOA Nursing",
    abbr: "SOA\nNrsg",
    color: "linear-gradient(135deg,#1a3c6e,#2a5caa)",
    imgUrl: "/logo/SOA.webp",
  },
  {
    name: "IMS SUM Hospital 1",
    abbr: "IMS\nSUM-1",
    color: "linear-gradient(135deg,#0e4d27,#1a7a3f)",
    imgUrl: "/logo/IMS_SUM.webp",
  },
  {
    name: "IMS SUM-2 Nursing & Pharmacy",
    abbr: "IMS\nSUM-2",
    color: "linear-gradient(135deg,#0e4d27,#1a7a3f)",
    imgUrl: "/logo/IMS_SUM.webp",
  },
  {
    name: "IDS SUM",
    abbr: "IDS\nSUM",
    color: "linear-gradient(135deg,#0e4d27,#1a7a3f)",
    imgUrl: "/logo/IMS_SUM.webp",
  },
  {
    name: "XIM University",
    abbr: "XIM",
    color: "linear-gradient(135deg,#8b0000,#c0392b)",
    imgUrl: "/logo/XIMB.webp",
  },
  {
    name: "Xavier University (XUV)",
    abbr: "XUV",
    color: "linear-gradient(135deg,#8b0000,#c0392b)",
    imgUrl: "/logo/XIMB.webp",
  },
  {
    name: "CET OUTR",
    abbr: "CET\nOUTR",
    color: "linear-gradient(135deg,#003580,#005cbf)",
    imgUrl: "/logo/OUTR.webp",
  },
  {
    name: "BJB College",
    abbr: "BJB",
    color: "linear-gradient(135deg,#5b2c6f,#8e44ad)",
    imgUrl: "/logo/BJB.webp",
  },
  {
    name: "OUAT Bhubaneswar",
    abbr: "OUAT",
    color: "linear-gradient(135deg,#145a32,#1e8449)",
    imgUrl: "/logo/OUAT.webp",
  },
  {
    name: "KIIT University",
    abbr: "KIIT",
    color: "linear-gradient(135deg,#c0392b,#e74c3c)",
    imgUrl: "/logo/KIIT.webp",
  },
  {
    name: "NIT Rourkela",
    abbr: "NIT\nRKL",
    color: "linear-gradient(135deg,#004080,#0066cc)",
    imgUrl: "/logo/NITR.webp",
  },
  {
    name: "Sri Sri University",
    abbr: "SSU",
    color: "linear-gradient(135deg,#7d5a0e,#c49a1a)",
    imgUrl: "/logo/SSU.webp",
  },
  {
    name: "RCM College",
    abbr: "RCM",
    color: "linear-gradient(135deg,#1b4f72,#2e86c1)",
    imgUrl: "/logo/RCM.webp",
  },
  {
    name: "GITA College",
    abbr: "GITA",
    color: "linear-gradient(135deg,#154360,#1a5276)",
    imgUrl: "/logo/GITA.webp",
  },
  {
    name: "NISS College",
    abbr: "NISS",
    color: "linear-gradient(135deg,#212f3c,#34495e)",
  },
  {
    name: "Centurion University",
    abbr: "CUTN",
    color: "linear-gradient(135deg,#7b241c,#b03a2e)",
    imgUrl: "/logo/Centurion.webp",
  },
  {
    name: "Aryan College",
    abbr: "Aryan",
    color: "linear-gradient(135deg,#1a5276,#2874a6)",
  },
  {
    name: "IIIT Bhubaneswar",
    abbr: "IIIT\nBBSR",
    color: "linear-gradient(135deg,#154360,#1f618d)",
    imgUrl: "/logo/IIITB.webp",
  },
  {
    name: "NLUO Cuttack",
    abbr: "NLUO",
    color: "linear-gradient(135deg,#1c2833,#2c3e50)",
    imgUrl: "/logo/NLUO.webp",
  },
  {
    name: "HITECH Rourkela",
    abbr: "HiTech\nRKL",
    color: "linear-gradient(135deg,#1a3c6e,#2760ae)",
    imgUrl: "/logo/HiTech.jpeg",
  },
  {
    name: "HITECH Bhubaneswar",
    abbr: "HiTech\nBBSR",
    color: "linear-gradient(135deg,#1a3c6e,#2760ae)",
    imgUrl: "/logo/HiTech.jpeg",
  },
  {
    name: "Centurion Jatani Bhubaneswar",
    abbr: "CUTN\nJatani",
    color: "linear-gradient(135deg,#7b241c,#b03a2e)",
    imgUrl: "/logo/Centurion.webp",
  },
  {
    name: "NIST Berhampur",
    abbr: "NIST\nBrhm",
    color: "linear-gradient(135deg,#1b2631,#2e4057)",
    imgUrl: "/logo/NIST.png",
  },
  {
    name: "GIET Bhubaneswar",
    abbr: "GIET\nBBSR",
    color: "linear-gradient(135deg,#154360,#1a5276)",
  },
  {
    name: "NIFT Bhubaneswar",
    abbr: "NIFT",
    color: "linear-gradient(135deg,#76448a,#9b59b6)",
  },
  {
    name: "IGIT Sarang",
    abbr: "IGIT\nSrng",
    color: "linear-gradient(135deg,#1c5e30,#27ae60)",
  },
];

const MEDICAL: Client[] = [
  {
    name: "Sundargarh Medical College",
    abbr: "VSGH\nMed",
    color: "linear-gradient(135deg,#922b21,#c0392b)",
  },
  {
    name: "Puri Medical College",
    abbr: "Puri\nMed",
    color: "linear-gradient(135deg,#784212,#a04000)",
  },
  {
    name: "Keonjhar Medical College",
    abbr: "Kenj\nMed",
    color: "linear-gradient(135deg,#1a5276,#2980b9)",
  },
  {
    name: "Balasore Medical College FMGCH",
    abbr: "FMGCH\nBLSR",
    color: "linear-gradient(135deg,#0e6655,#148f77)",
  },
  {
    name: "MKCG Berhampur",
    abbr: "MKCG\nBrhm",
    color: "linear-gradient(135deg,#1b2631,#2e4057)",
  },
  {
    name: "Baripada Medical College",
    abbr: "Med\nBrpd",
    color: "linear-gradient(135deg,#6c3483,#8e44ad)",
  },
  {
    name: "Jajpur Medical College",
    abbr: "Med\nJjpr",
    color: "linear-gradient(135deg,#154360,#1f618d)",
  },
  {
    name: "SCB Medical College Cuttack",
    abbr: "SCB\nMed",
    color: "linear-gradient(135deg,#1a237e,#283593)",
    imgUrl: "https://scbmck.edu.in/wp-content/uploads/2022/01/scb-logo.png",
  },
  {
    name: "VIMSAR Burla",
    abbr: "VIMSAR\nBurla",
    color: "linear-gradient(135deg,#004d40,#00695c)",
    imgUrl: "https://vimsar.ac.in/wp-content/uploads/2020/08/vimsar-logo.png",
  },
  {
    name: "SCB JDA Cuttack",
    abbr: "SCB\nJDA",
    color: "linear-gradient(135deg,#1a237e,#283593)",
  },
  {
    name: "MKCG JDA Berhampur",
    abbr: "MKCG\nJDA",
    color: "linear-gradient(135deg,#1b2631,#2e4057)",
  },
  {
    name: "MKCG Nursing Berhampur",
    abbr: "MKCG\nNrsg",
    color: "linear-gradient(135deg,#1b2631,#2e4057)",
  },
];

const CORPORATE: Client[] = [
  {
    name: "Tata Group",
    abbr: "TATA",
    color: "linear-gradient(135deg,#003399,#0047ab)",
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/200px-Tata_logo.svg.png",
  },
  {
    name: "Aditya Birla Group",
    abbr: "Aditya\nBirla",
    color: "linear-gradient(135deg,#cc0000,#e60000)",
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Aditya_Birla_Group_Logo.svg/200px-Aditya_Birla_Group_Logo.svg.png",
  },
  {
    name: "UltraTech Cement",
    abbr: "Ultra\nTech",
    color: "linear-gradient(135deg,#1a1a2e,#16213e)",
    imgUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/UltraTech_Cement_Logo.svg/200px-UltraTech_Cement_Logo.svg.png",
  },
  {
    name: "RCM College",
    abbr: "RCM",
    color: "linear-gradient(135deg,#1b4f72,#2e86c1)",
    imgUrl: "/logo/RCM.webp",
  },
  {
    name: "Adani Ports",
    abbr: "ADANI\nPort",
    color: "linear-gradient(135deg,#005288,#003d66)",
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Adani_2012_logo.svg/200px-Adani_2012_logo.svg.png",
  },
  {
    name: "Maruti Suzuki",
    abbr: "SUZUKI",
    color: "linear-gradient(135deg,#c0392b,#e74c3c)",
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Suzuki_logo_2.svg/200px-Suzuki_logo_2.svg.png",
  },
  {
    name: "KIA Motors",
    abbr: "KIA",
    color: "linear-gradient(135deg,#1a1a1a,#333333)",
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Kia-logo.svg/200px-Kia-logo.svg.png",
  },
  {
    name: "HDFC Bank",
    abbr: "HDFC\nBank",
    color: "linear-gradient(135deg,#004c97,#003d7a)",
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/200px-HDFC_Bank_Logo.svg.png",
  },
  {
    name: "Kotak Mahindra Bank",
    abbr: "KOTAK\nBank",
    color: "linear-gradient(135deg,#ed1c24,#b5001f)",
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Kotak_Mahindra_Bank_logo.svg/200px-Kotak_Mahindra_Bank_logo.svg.png",
  },
  {
    name: "Federal Bank",
    abbr: "Federal\nBank",
    color: "linear-gradient(135deg,#003087,#001a4d)",
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/The_Federal_Bank_Logo.svg/200px-The_Federal_Bank_Logo.svg.png",
  },
  {
    name: "MCL (Mahanadi Coalfields)",
    abbr: "MCL",
    color: "linear-gradient(135deg,#1a3c6e,#2e5fa0)",
    imgUrl: "https://mcl.gov.in/sites/default/files/MCL-Logo.png",
  },
  {
    name: "JSW Group",
    abbr: "JSW",
    color: "linear-gradient(135deg,#0056a0,#003d73)",
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/JSW_Group_logo.svg/200px-JSW_Group_logo.svg.png",
  },
];

const FESTIVALS: Client[] = [
  {
    name: "Ganjam Bhanjanagar Mahotsav",
    abbr: "Ganjam\nMht",
    color: "linear-gradient(135deg,#7d5a0e,#c49a1a)",
  },
  {
    name: "Rajo Mahotsav",
    abbr: "Rajo\nMht",
    color: "linear-gradient(135deg,#6c3483,#9b59b6)",
  },
];

const DATA: Record<Category, Client[]> = {
  universities: UNIVERSITIES,
  medical: MEDICAL,
  corporate: CORPORATE,
  festivals: FESTIVALS,
};

// ─── Animated Card ──────────────────────────────────────────────────────────
function ClientCard({ client, index }: { client: Client; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.04, ease: "easeOut" }}
      whileHover={{ y: -6, scale: 1.04 }}
      className="group flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/[0.04] border border-white/[0.07] backdrop-blur-sm hover:border-accent-orange/40 hover:bg-white/[0.08] transition-all duration-300 cursor-default"
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-2xl bg-accent-orange/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150" />
        <LogoBadge abbr={client.abbr} color={client.color} imgUrl={client.imgUrl} />
      </div>
      <p className="text-text-muted group-hover:text-white text-[11px] font-body font-medium text-center leading-tight transition-colors duration-200 max-w-[90px]">
        {client.name}
      </p>
    </motion.div>
  );
}

// ─── Counter Badge ──────────────────────────────────────────────────────────
function CountBadge({ count, label }: { count: number; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "backOut" }}
      className="flex flex-col items-center gap-1 px-6 py-4 rounded-xl bg-accent-orange/10 border border-accent-orange/20"
    >
      <span className="font-number text-3xl font-bold tracking-wide text-accent-orange">{count}+</span>
      <span className="font-body text-xs text-text-muted uppercase tracking-wider">{label}</span>
    </motion.div>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────
export function Achievements() {
  const [activeTab, setActiveTab] = useState<Category>("universities");
  const scrollRef = useRef<HTMLDivElement>(null);

  const clients = DATA[activeTab];

  const totalUniversities = UNIVERSITIES.length;
  const totalMedical = MEDICAL.length;
  const totalCorporate = CORPORATE.length;
  const totalFestivals = FESTIVALS.length;

  return (
    <section
      id="achievements"
      className="py-20 md:py-32 bg-bg-primary relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-orange/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-rust/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <SectionHeading
          eyebrow="OUR LEGACY"
          title={
            <>
              Past{" "}
              <span className="text-accent-orange italic">Achievements</span>
            </>
          }
          align="center"
          className="mb-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-text-muted font-body text-base md:text-lg text-center max-w-2xl mx-auto mb-12"
        >
          Trusted by leading universities, medical institutions, corporates, and
          cultural festivals across Odisha and beyond.
        </motion.p>

        {/* Summary Counters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-14"
        >
          <CountBadge count={totalUniversities} label="Colleges" />
          <CountBadge count={totalMedical} label="Medical Colleges" />
          <CountBadge count={totalCorporate} label="Corporates" />
          <CountBadge count={totalFestivals} label="Festivals" />
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveTab(cat.id);
                if (scrollRef.current) scrollRef.current.scrollTop = 0;
              }}
              className={cn(
                "px-5 py-2.5 rounded-full font-body text-sm font-medium transition-all duration-300",
                activeTab === cat.id
                  ? "bg-accent-orange text-white shadow-[0_0_20px_rgba(255,90,31,0.4)]"
                  : "bg-white/[0.05] text-text-muted hover:bg-white/[0.1] hover:text-white border border-white/[0.08]"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Client Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            ref={scrollRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 gap-3 md:gap-4"
          >
            {clients.map((client, i) => (
              <ClientCard key={client.name} client={client} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Decorative bottom strip */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-accent-orange/40 to-transparent"
        />
      </div>
    </section>
  );
}
