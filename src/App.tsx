import Hero from "@/components/sections/Hero";
import PerChi from "@/components/sections/PerChi";
import Vantaggi from "@/components/sections/Vantaggi";
import ComeFunziona from "@/components/sections/ComeFunziona";
import Wizard from "@/components/sections/Wizard";
import Piani from "@/components/sections/Piani";
import Dealer from "@/components/sections/Dealer";
import LegalInfo from "@/components/sections/LegalInfo";
import Contatti from "@/components/sections/Contatti";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Collegare l'api dei contatti, la newsletter, forse quella della mappa e del wizard */}
      <Navbar />
      <Hero />
      <PerChi />
      <Vantaggi />
      <ComeFunziona />
      <Wizard />
      <Piani />
      <Dealer />
      <LegalInfo />
      <Contatti />
      <Footer />
    </main>
  );
}
