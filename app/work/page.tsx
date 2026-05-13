import Work from '@/components/Work';
import Navbar from '@/components/Navbar';
import LenisSetup from '@/components/LenisSetup';
import BodyScripts from '@/components/BodyScripts';

export default function WorkPage() {
  return (
    <main>
      <Navbar />
      <Work />
      <LenisSetup />
      <BodyScripts />
    </main>
  );
}
