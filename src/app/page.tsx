import NavBar from "@/components/NavBar/NavBar";
import Home from "@/components/Home/Home";
import About from "@/components/About/About";
import Portfolio from "@/components/Portfolio/Portfolio";
import Experience from "@/components/Experience/Experience";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Page() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
