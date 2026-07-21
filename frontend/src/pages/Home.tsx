import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Journey";
import Contact from "../components/Contact";
import Certificates from "../components/Certificates";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
};

export default Home;