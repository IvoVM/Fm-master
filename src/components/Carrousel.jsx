import Carousel from "react-bootstrap/Carousel";
import { carouselContent } from "../utils/utils.js";
import Image from 'react-bootstrap/Image'
function Carrousel() {
  return (
    <header id="home">
      <h2 className="text-center p-4">
        23 años siendo <span className="rose"> tu mejor compañia!!!</span>
      </h2>
      <Carousel fade>
        {carouselContent.map((item) => (
          <Carousel.Item key={item.id} className="bb">
            <Image fluid={true} src={item.img} alt="slide img" />
          </Carousel.Item>
        ))}
      </Carousel>
    </header>
  );
}

export default Carrousel;
