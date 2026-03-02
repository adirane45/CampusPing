import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhatIs from '@/components/WhatIs';
import Features from '@/components/Features';
import MultiUser from '@/components/MultiUser';
import Security from '@/components/Security';
import Notifications from '@/components/Notifications';
import Advanced from '@/components/Advanced';
import WhyCampusPing from '@/components/WhyCampusPing';
import CTA from '@/components/CTA';
import WaitlistForm from '@/components/WaitlistForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhatIs />
      <Features />
      <MultiUser />
      <Security />
      <Notifications />
      <Advanced />
      <WhyCampusPing />
      <CTA />
      <WaitlistForm />
      <Footer />
    </main>
  );
}
