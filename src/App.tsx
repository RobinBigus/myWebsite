import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Technologies />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
