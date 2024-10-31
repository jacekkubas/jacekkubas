import Header from "./components/Header";
import TechStack from "./components/TechStack";
import BigText from "./components/BigText";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Boxes from "./components/Boxes";
import GlassHero from "./components/GlassHero";
import Globe from "./components/Globe";
import Projects from "./components/Projects";

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
        <BigText text="I'm a web developer with over 10 years of experience. I've worked on a variety of international projects, from small websites to complex digital platforms. This has given me the flexibility to meet both design and technical demands. Let’s work on something great together!" />
      </div>
      <div className="container mx-auto">
        <Boxes />
      </div>
      <div className="container mx-auto">
        <TechStack />
      </div>

      <Globe text="As a registered freelancer in Austria, I'm excited to collaborate with local and international clients. In the past I've had the privilege of working with clients worldwide, including those from Germany, Poland, Switzerland, Italy, the UK, Japan, Ukraine, Luxembourg, Sweden, South Africa, and Norway. Wide range of clients has helped me adapt to different cultural needs, design styles, and business practices. This enables me to deliver websites that resonate deeply with each client's unique audience." />
      <Globe
        reverse
        text="Working with clients from such varied regions has also given me insight into global market trends and technical expectations. Each website is tailored to both local tastes and international standards. This experience has not only broadened my technical skill set but has also deepened my ability to communicate effectively across cultural and linguistic barriers, making each project a seamless experience for my clients."
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
