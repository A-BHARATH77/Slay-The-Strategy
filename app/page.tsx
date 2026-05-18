// @ts-nocheck
import React from 'react';
import Preloader from '../components/Preloader';
import QuoteAnimation from '../components/QuoteAnimation';
import GlobalStyles from '../components/GlobalStyles';
import ModalContact from '../components/ModalContact';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Expertises from '../components/Expertises';
import SelectedWork from '../components/SelectedWork';
import Clients from '../components/Clients';
import Footer from '../components/Footer';
import BodyScripts from '../components/BodyScripts';
import LenisSetup from '../components/LenisSetup';

export default function Home() {
  return (
    <>
      <div className="page-wrapper">
        <QuoteAnimation />
        <Preloader />
        <GlobalStyles />
        <ModalContact />
        <Navbar />
        <div className="main-wrapper">
          <Hero />
          <Intro />
          <Expertises />
          <SelectedWork />
          <Clients />
          <Footer />
        </div>
      </div>
      <BodyScripts />
      <LenisSetup />
    </>
  );
}
