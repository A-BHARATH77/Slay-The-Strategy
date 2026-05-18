import Work from '@/components/Work';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LenisSetup from '@/components/LenisSetup';
import BodyScripts from '@/components/BodyScripts';
import GlobalStyles from '@/components/GlobalStyles';

export default function WorkPage() {
  return (
    <main>
      <Navbar />
      <GlobalStyles />
      <Work />
      <Footer />
      <LenisSetup />
      <BodyScripts />
    </main>
  );
}
