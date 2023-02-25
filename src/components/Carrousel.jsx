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
    <header className="carousel-container d-flex justify-content-center align-items-center">
      <h2>23 años siendo tu mejor compañia!!!</h2>
      <div className="carousel-container__inner">
        <Carousel fade>
          <Carousel.Item className="carousel-items">
            <img
              className="d-block w-100 carousel-img"
              src={img1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3><span className="master">Master</span> es...</h3>
              <p>Eventos de Renombre</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-items">
            <img
              className="d-block w-100 carousel-img"
              src={img2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3><span className="master">Master</span> es...</h3>
              <p>Familia y Amigos</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-items">
            <img
              className="d-block w-100 carousel-img"
              src={img8}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3><span className="master">Master</span> es...</h3>
              <p>Seriedad e información</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-items">
            <img
              className="d-block w-100 carousel-img"
              src={img3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3><span className="master">Master</span> es...</h3>
              <p>Diversión Asegurada</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-items">
            <img
              className="d-block w-100 carousel-img"
              src={img4}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3><span className="master">Master</span> es...</h3>
              <p>Arte y Poesía</p>
            </Carousel.Caption>
          </Carousel.Item>{" "}
          <Carousel.Item className="carousel-items">
            <img
              className="d-block w-100 carousel-img"
              src={img5}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3><span className="master">Master</span> es...</h3>
              <p>Artistas de Renombre</p>
            </Carousel.Caption>
          </Carousel.Item>{" "}
          <Carousel.Item className="carousel-items">
            <img
              className="d-block w-100 carousel-img"
              src={img6}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3><span className="master">Master</span> es...</h3>
              <p>Reconocimiento</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-items">
            <img
              className="d-block w-100 carousel-img"
              src={img7}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3><span className="master">Master</span> es...</h3>
              <p>Apoyo de la Gente</p>
            </Carousel.Caption>
          </Carousel.Item>   
          <Carousel.Item className="carousel-items">
            <img
              className="d-block w-100 carousel-img"
              src={img9}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3><span className="master">Master</span> es...</h3>
              <p>Un Equipo</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-items">
            <img
              className="d-block w-100 carousel-img"
              src={img10}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3><span className="master">Master</span> es...</h3>
              <p>Recuerdos y Emociones</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-items">
            <img
              className="d-block w-100 carousel-img"
              src={img11}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3><span className="master">Master</span> es...</h3>
              <p>Compromiso con la comunidad</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-items">
            <img
              className="d-block w-100 carousel-img"
              src={img12}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3><span className="master">Master</span> es...</h3>
              <p>Reconocimieno a sus colaboradores</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-items">
            <img
              className="d-block w-100 carousel-img"
              src={img13}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3><span className="master">Master</span> es...</h3>
              <p>Cultura </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-items">
            <img
              className="d-block w-100 carousel-img"
              src={img14}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3><span className="master">Master</span> es...</h3>
              <p>Deportes</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </header>
  );
}

export default Carrousel;
