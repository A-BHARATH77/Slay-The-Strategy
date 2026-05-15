import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import LenisSetup from "@/components/LenisSetup";
import GlobalStyles from "@/components/GlobalStyles";

export default function ContactPage() {
  return (
    <main className="h-screen overflow-hidden">
      <Navbar />
      <GlobalStyles />
      <Contact />
      <LenisSetup />
    </main>
  );
}