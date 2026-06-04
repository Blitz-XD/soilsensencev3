const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import Navbar from '../components/geoscribe/Navbar';
import HeroSection from '../components/geoscribe/HeroSection';
import SectionDivider from '../components/geoscribe/SectionDivider';
import ProblemSection from '../components/geoscribe/ProblemSection';
import SolutionSection from '../components/geoscribe/SolutionSection';
import FeaturesSection from '../components/geoscribe/FeaturesSection';
import ProcessSection from '../components/geoscribe/ProcessSection';
import ImpactSection from '../components/geoscribe/ImpactSection';
import SDGSection from '../components/geoscribe/SDGSection';
import Footer from '../components/geoscribe/Footer';

const HERO_IMG = 'https://media.db.com/images/public/6a1fe87e24e14fbf2d64caf6/b85f86322_generated_1cfeabd5.png';
const PROBLEM_IMG = 'https://media.db.com/images/public/6a1fe87e24e14fbf2d64caf6/89d836f65_generated_image.png';
const DEVICE_IMG = 'https://media.db.com/images/public/6a1fe87e24e14fbf2d64caf6/9df312f80_generated_image.png';
const IMPACT_IMG = 'https://media.db.com/images/public/6a1fe87e24e14fbf2d64caf6/aaca93e49_generated_7d80ec23.png';

export default function Home() {
  return (
    <div className="min-h-screen bg-sand">
      <Navbar />
      <HeroSection heroImage={HERO_IMG} />
      <SectionDivider />
      <ProblemSection problemImage={PROBLEM_IMG} />
      <SectionDivider />
      <SolutionSection />
      <SectionDivider />
      <FeaturesSection deviceImage={DEVICE_IMG} />
      <SectionDivider />
      <ProcessSection />
      <SectionDivider />
      <ImpactSection impactImage={IMPACT_IMG} />
      <SectionDivider />
      <SDGSection />
      <Footer />
    </div>
  );
}