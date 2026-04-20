import Hero from "./sections/Hero";
import TrustStrip from "./sections/TrustStrip";
import HowItWorks from "./sections/HowItWorks";
import FormatShowcase from "./sections/FormatShowcase";
import UseCases from "./sections/UseCases";
import Pricing from "./sections/Pricing";
import FAQ from "./sections/FAQ";
import RecentPosts from "./sections/RecentPosts";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <HowItWorks />
      <FormatShowcase />
      <UseCases />
      <Pricing />
      <FAQ />
      <RecentPosts />
      <Footer />
    </>
  );
}
