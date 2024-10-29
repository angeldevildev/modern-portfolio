import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
//import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <div style={{ fontFamily: "GeistMonoVF" }}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Footer />
      <Analytics />
    </div>
  );
}
