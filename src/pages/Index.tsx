import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <main>
        <HeroSection></HeroSection>
      </main>
      <Footer />
    </div>
  );
};
