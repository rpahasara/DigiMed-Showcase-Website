'use client';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProjectScope from '../components/ProjectScope';
import Methodology from '../components/Methodology';
import Technologies from '../components/Technologies';
import Milestones from '../components/Milestones';
import Downloads from '../components/Downloads';
import About from '../components/About';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
      <Navbar />
      <div className="space-y-16 sm:space-y-24 md:space-y-32">
        <Hero />
        <ProjectScope />
        <Methodology />
        <Technologies />
        <Milestones />
        <Downloads />
        <About />
        <Contact />
      </div>
    </main>
  );
}
