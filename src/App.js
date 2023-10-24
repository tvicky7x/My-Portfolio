import "./App.css";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <>
      <Navbar />
      <div className="sm:px-4 px-3">
        <div className=" max-w-4xl mx-auto text-slate-900 text-lg">
          <Hero />
          <Skills />
          <Projects />
          <About />
        </div>
      </div>{" "}
      <Footer />
    </>
  );
}

export default App;
