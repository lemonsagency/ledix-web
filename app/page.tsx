import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import FeaturedProject from "@/components/FeaturedProject";
import ClientLogos from "@/components/ClientLogos";
import CatalogDownload from "@/components/CatalogDownload";
import Warranty from "@/components/Warranty";
import SolutionsGrid from "@/components/SolutionsGrid";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProductGrid />
      <FeaturedProject />
      <SolutionsGrid />
      <ClientLogos />
      <CatalogDownload />
      <Warranty />
    </main>
  );
}