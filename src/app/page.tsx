import HeroSection from "@/components/HeroSection";
import LatestPosts from "@/components/LatestPosts";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <LatestPosts />
      </main>
    </div>
  );
};

export default Index;
