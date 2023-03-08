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
          <div>
            <div className="m-3 text-center">
              <div className="fw-bold">Dirección</div>
              <div>Avenida 26</div>
              <div>N° 2001</div>
            </div>
            <div className="m-3 text-center">
              <div className="fw-bold">Teléfono</div>
              <div> 420300</div>
              <div>420389</div>
            </div>
            <div className="m-3 text-center">
              <div className="fw-bold">Email</div>
              <div>fmmastermiramar@yahoo.com.ar</div>
            </div>
            <div className="m-3 text-center">
              <div className="fw-bold">Facebook</div>
              <div><a href="" target="_blank" className="text-decoration-none">Juan Mastrangelo</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>


  );
};
export default ContactMe;
