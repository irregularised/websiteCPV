
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CalendarSection from '@/components/CalendarSection';
import LearningHub from '@/components/LearningHub';
import FlourishCard from '@/components/FlourishCard';
import RecognitionSection from '@/components/RecognitionSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-snow-white">
      <Header />
      <HeroSection />
      <CalendarSection />
      <LearningHub />
      <FlourishCard />
      <RecognitionSection />
      <Footer />
    </div>
  );
};

export default Index;
