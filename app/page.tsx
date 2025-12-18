import { About } from "./components/About";
import { DashboardPreview } from "./components/DashboardPreview";
import { Features } from "./components/Features";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Pricing } from "./components/Pricing";
import { Testimonial } from "./components/Testimonial";
import { TrustBar } from "./components/TrustBar";

export default function Home() {
  return (
    <div className="min-h-dvh bg-natural-white">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <DashboardPreview />
        <HowItWorks />
        <Testimonial />
        <Pricing />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
