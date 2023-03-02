import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets/images/carousel/car1.jpg";
import img2 from "../assets/images/carousel/car2.jpg";
import img3 from "../assets/images/carousel/car3.jpg";
import img4 from "../assets/images/carousel/car4.jpg";
import img5 from "../assets/images/carousel/car5.jpg";
import img6 from "../assets/images/carousel/car6.jpg";
import img7 from "../assets/images/carousel/car7.jpg";
import img8 from "../assets/images/carousel/car8.jpg";
import img9 from "../assets/images/carousel/car9.jpg";
import img10 from "../assets/images/carousel/car10.jpg";
import img11 from "../assets/images/carousel/car11.jpg";
import img12 from "../assets/images/carousel/car12.jpg";
import img13 from "../assets/images/carousel/car13.jpg";
import img14 from "../assets/images/carousel/car14.jpg";

function Carrousel() {
  return (
    <header id="home">
      <h2 className="text-center p-4">
        23 años siendo <span className="rose"> tu mejor compañia!!!</span>
      </h2>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
          <Carousel.Caption>
            <h3>
              <span className="rose">Master</span> es...
            </h3>
            <p className="text-center">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </header>
  );
}

export default Carrousel;
