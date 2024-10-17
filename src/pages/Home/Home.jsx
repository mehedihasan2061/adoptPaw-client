import About from "./About/About";
import Category from "./Category/Category";
import Slider from "./Slider/Slider";
import Template from "./Template/Template";
import Testmonial from "./Testmonial/Testmonial";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div>
        <Slider></Slider>
        <Category></Category>
        <Template></Template>
        <About></About>

        <Testmonial></Testmonial>
      </div>
    </div>
  );
};

export default Home;
