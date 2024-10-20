import dynamic from "next/dynamic";
import Header from "./components/Header";
import TechStack from "./components/TechStack";
import BigText from "./components/BigText";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PreviewHero from "./components/GlassHero/Preview";
import Boxes from "./components/Boxes";

const GlassHero = dynamic(() => import("./components/GlassHero/Scene"), {
  ssr: false,
  loading: () => <PreviewHero />,
});

const Globe = dynamic(() => import("./components/Globe/Scene"), {
  ssr: false,
  loading: () => <PreviewHero />,
});

const Home: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <Header />
      <div className="relative pt-24 md:h-screen">
        <GlassHero />
        {/* <div className="text-center relative text-3xl" style={{ top: "-80px" }}>
          Website development by Jacek Kubas
        </div> */}
      </div>
      <div className="container mx-auto">
        <BigText text="I'm a web developer with over 10 years of experience. I’ve worked on a variety of projects, from small websites to complex digital platforms. This has given me the flexibility to meet both design and technical demands. Let’s work on something great together!" />
      </div>
      <div className="container mx-auto">
        <Boxes />
      </div>
      <div className="container mx-auto">
        <TechStack />
      </div>

      <Globe text="As a web developer, I've had the privilege of working with a diverse range of clients from across the globe. My portfolio includes projects for businesses and individuals from countries such as Poland, Germany, Switzerland, Italy, the UK, Japan, Ukraine, Luxembourg, Sweden, South Africa, and Norway. This international experience has enriched my approach, allowing me to adapt to different cultural needs, design preferences, and business practices, ensuring that each client receives a website that resonates with their target audience." />
      <Globe
        reverse
        text="Working with clients from such varied regions has also given me insight into global market trends and technical expectations. Whether it's understanding the minimalist design preferences in Northern Europe or creating more dynamic, interactive sites for markets like Japan or South Africa, I ensure that each website is tailored to both local tastes and international standards. This experience has not only broadened my technical skill set but has also deepened my ability to communicate effectively across cultural and linguistic barriers, making each project a seamless experience for my clients."
      />

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
