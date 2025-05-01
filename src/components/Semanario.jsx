import img from "../assets/images/semanario-logo.png";
import fiestaLogo from "../assets/images/fiesta_25_años.jpg";

const Semanario = () => {
  return (
    <section className="row px-1  px-xxl-5  mt-5" id="semanario">
      <div className="col-12 col-xxl-4  pt-5 px-1  px-xxl-5 d-flex justify-content-center">
        <img src={fiestaLogo} height="100%" width="100%" className="h-100-responsive" />
      </div>
      <div className="col-12 col-xxl-8 d-flex align-items-center flex-column  mt-5 mt-xxl-0">
        <img src={img} />
        <h4 className="mb-5 text-center ">
          Enterate de las últimas noticias de{" "}
          <span className="rose">Miramar.</span>
        </h4>
        <iframe
          className="semanario "
          width="100%"
          height="100%"
          src="https://elsemanariomiramar.com.ar/"
        ></iframe>
      </div>
    </section>
  );
};
export default Semanario;
