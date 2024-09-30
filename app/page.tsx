import dynamic from "next/dynamic";
import Header from "./components/Header";
import TechStack from "./components/TechStack";
import BigText from "./components/BigText";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PreviewHero from "./components/GlassHero/Preview";

const GlassHero = dynamic(() => import("./components/GlassHero/Scene"), {
  ssr: false,
  loading: () => <PreviewHero />,
});

const Home: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <Header />
      <div className="relative h-screen">
        <GlassHero />
      </div>
      <div className="container mx-auto">
        <TechStack />
      </div>
      <div className="container mx-auto">
        <BigText text="I'm a web developer with over 10 years of experience. I’ve worked on a variety of projects, from small websites to complex digital platforms. This has given me the flexibility to meet both design and technical demands. Let’s work on something great together!" />
      </div>

      <Projects />

      <div className="container mx-auto">
        <Contact />
      </div>
      <div className="container mx-auto">
        <Footer />
      </div>
    </div>
  );
};
export default Home;
