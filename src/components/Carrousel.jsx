import Carousel from "react-bootstrap/Carousel";
import { carouselContent } from "../utils/utils.js";
import Image from "react-bootstrap/Image";
function Carrousel() {
  return (
      <Carousel fade className="pija">
        {carouselContent.map((item) => (
          <Carousel.Item key={item.id}>
            <Image fluid={true} src={item.img} alt="slide img" />
          </Carousel.Item>
        ))}
      </Carousel>
  );
}

export default Carrousel;
