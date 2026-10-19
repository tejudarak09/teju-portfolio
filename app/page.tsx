import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import MetricCards from "@/components/MetricCards";
import StatCards from "@/components/StatCards";
import Journey from "@/components/Journey";
import About from "@/components/About";
import Projects from "@/components/Projects";
import PipelineDemo from "@/components/PipelineDemo";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-grid min-h-screen bg-ink text-white">
      <Sidebar />
      <main className="lg:pl-[240px]">
        <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-10">
          <Hero />
          <MetricCards />
          <StatCards />
          <Journey />
          <About />
          <Projects />
          <PipelineDemo />
          <Skills />
          <Education />
          <Contact />
        </div>
      </main>
    </div>
  );
}
