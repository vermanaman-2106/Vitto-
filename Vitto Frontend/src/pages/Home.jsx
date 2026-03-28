import Hero from "../components/Hero";
import Problem from "../components/problem";
import Solution from "../components/Solution";
import Modules from "../components/Modules";
import Impact from "../components/Impact";
import SocialProof from "../components/SocialProof";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <Modules />
      <Impact />
      <SocialProof />
      <CTA />
      <Footer />
    </div>
  );
}