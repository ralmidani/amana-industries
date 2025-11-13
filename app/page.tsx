import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FactoryStatus from "@/components/FactoryStatus";
import MonthlyPerformance from "@/components/MonthlyPerformance";
import Footer from "@/components/Footer";
import factoryData from "@/data/factories.json";

export default function Home() {
  const factories = factoryData.factory_data;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <main className="flex-1">
        <FactoryStatus factories={factories} />
        <MonthlyPerformance factories={factories} />
      </main>
      <Footer />
    </div>
  );
}
