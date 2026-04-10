import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import OverseasSection from "../components/OverseasSection";
import HostelsSection from "../components/HostelsSection";
import HospitalsSection from "../components/HospitalsSection";
import RealEstatesSection from "../components/RealEstatesSection";
import TrainingInstitutesSection from "../components/TrainingInstitutesSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      
      <OverseasSection />
      <HostelsSection />
      <HospitalsSection />
      <RealEstatesSection />
      <TrainingInstitutesSection />
      <Footer />
    </>
  );
}