import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";


import img1 from "../../../assets/slider/cat.jpg";
import img2 from "../../../assets/slider/dog.jpg";
import img3 from "../../../assets/slider/rabbit.jpg";
import img4 from "../../../assets/slider/horse.jpg";
import img5 from "../../../assets/slider/fish.jpg";


const Slider = () => {
  return (
    <div>
      <Carousel>
        <div className="h-[300px]">
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
        <div>
          <img src={img4} />
        </div>
        <div>
          <img src={img5} />
        </div>
        
      </Carousel>
      
    </div>
  );
};

export default Slider;
