import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import Services from "@/components/Services";
import Founders from "@/components/Founders";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative">
      {/* Global Background */}
      <div className="fixed inset-0 w-full h-full bg-gradient-to-b from-integra-dark via-[#1a1a1a] to-[#252525] -z-50"></div>
      
      <Hero />
      <Quote />
      <Services />
      <Founders />
      <Footer />
    </main>
  );
}
