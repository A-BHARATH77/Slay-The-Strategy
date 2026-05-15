import { StudioContent } from '@/components/Studio';
import Navbar from '@/components/Navbar';
import LenisSetup from '@/components/LenisSetup';
import BodyScripts from '@/components/BodyScripts';
import GlobalStyles from '@/components/GlobalStyles';
import Preloader from '@/components/Preloader';
import ModalContact from '@/components/ModalContact';

export default function StudioPage() {
  return (
    <>
      <div className="page-wrapper">
        <GlobalStyles />
        <Navbar />
        <div className="main-wrapper">
          <StudioContent />
        </div>
      </div>
      <BodyScripts />
      <LenisSetup />
    </>
  );
}