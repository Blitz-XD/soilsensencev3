
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

const HERO_IMG = '../public/images/hero.png';
const PROBLEM_IMG = '../public/images/problem.png';
const DEVICE_IMG = '../public/images/features.png';
const IMPACT_IMG = '../public/images/impact.png';

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
