import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import TrendingArticles from "@/components/TrendingArticles";
import LatestArticles from "@/components/LatestArticles";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Categories />
      <TrendingArticles />
      <LatestArticles />
      <Footer />
    </div>
  );
};

export default Index;
