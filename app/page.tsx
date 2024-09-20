import dynamic from "next/dynamic";
import Header from "./components/Header";
import TechStack from "./components/TechStack";
import BigText from "./components/BigText";
import Projects from "./components/Projects";

const Scene = dynamic(() => import("./components/GlassHero/Scene"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const Home: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <Header />
      <div className="relative h-screen">
        <Scene />
      </div>
      <div className="container mx-auto">
        <TechStack />
        <BigText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra quis ipsum quis aliquam. Aliquam venenatis dictum felis, vel malesuada dolor posuere eu. Vivamus feugiat condimentum lectus ac euismod. Integer aliquet velit eu elit dictum, eget pulvinar mi condimentum. Nulla at ornare nisl." />
        <Projects />
      </div>
    </div>
  );
};
export default Home;
