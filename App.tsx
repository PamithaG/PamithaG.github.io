import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticleCanvas from "./components/ParticleCanvas";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900/75 font-sans leading-relaxed">
      <ParticleCanvas />
      <Header />
      <main className="container mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col gap-20 lg:gap-32">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
