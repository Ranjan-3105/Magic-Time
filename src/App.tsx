import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Hero } from "./sections/Hero";
import { StatsStrip } from "./sections/StatsStrip";
import { About } from "./sections/About";
import { TrustedBy } from "./sections/TrustedBy";
import { Mission } from "./sections/Mission";
import { Services } from "./sections/Services";
import { Capacity } from "./sections/Capacity";
import { Portfolio } from "./sections/Portfolio";
import { Achievements } from "./sections/Achievements";
import { Contact } from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-accent-orange selection:text-white">
      <Header />
      
      <main>
        <Hero />
        <StatsStrip />
        <About />
        <TrustedBy />
        <Mission />
        <Services />
        <Capacity />
        <Portfolio />
        <Achievements />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
