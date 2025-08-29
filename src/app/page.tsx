import HeroSection from "@/components/HeroSection";
import LatestPosts from "@/components/LatestPosts";
import Publications from "@/components/SelectedPublications";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <LatestPosts />
        <Publications />
      </main>
    </div>
  );
};

export default Index;
