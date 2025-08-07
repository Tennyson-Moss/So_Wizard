import Image from "next/image";


import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FollowUsSection from '../components/FollowUsSection';
import RhythmBombSection from '../components/RhythmBombSection';
import NewsletterSignupSection from '../components/NewsletterSignupSection';

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white">
      <HeroSection />
      <RhythmBombSection />
      <NewsletterSignupSection />
      <AboutSection />
      <FollowUsSection />
    </main>
  );
}
