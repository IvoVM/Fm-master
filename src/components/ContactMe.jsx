const ContactMe = () => {
  return (
    <section id="contact">
      <h2 className="text-center">Contactanos</h2>
      <div className="d-flex  justify-content-center align-center">
        <div className="content p-4 d-flex flex-wrap justify-content-center align-center flex-wrap ">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1677049580383!6m8!1m7!1sy5hyZ4Zgfi9YKgNYUCF9dg!2m2!1d-38.27598257225861!2d-57.84665095768474!3f276.0588543433749!4f-5.897620023795611!5f0.7820865974627469"
              width="300"
              height="300"
              loading="lazy"
            ></iframe>
          </div>
          <div className="text-center mx-3">
            <div className="mt-4">
              <p className="fw-bold m-0">Dirección</p>
              <p className="m-0">Avenida 26 N° 2001</p>
            </div>
            <div className="mt-4">
              <p className="fw-bold m-0">Teléfonos</p>
              <p className="m-0"> 42-0300 ó 42-0389</p>
            </div>
            <div className="mt-4">
              <p className="fw-bold m-0">Facebook</p>
              <div><a href="" target="_blank" className="text-decoration-none">Juan Mastrangelo</a></div>
            </div>
            <div className="mt-4">
              <p className="fw-bold m-0">Email</p>
              <p className="m-0">fmmastermiramar@yahoo.com.ar</p>
            </div>
          </div>
        </div>
      </div>
    </section>


  );
};
export default ContactMe;
