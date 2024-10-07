import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div style={{ fontFamily: "GeistMonoVF" }}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
    </div>
  );
}
