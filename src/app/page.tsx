import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1">
        <Hero />
      </div>
      <Footer />
    </main>
  );
}
