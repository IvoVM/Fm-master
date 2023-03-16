import logo from "../assets/images/grupo-master-logo.jpeg";
const AboutUs = () => {
  return (
    <section id="about" className="about-container m-5">
      <h2 className="text-center">Historia del <span className="rose">Grupo Master de Comunicación</span></h2>
      <div className="p-3 about d-flex align-items-center justify-content-center">
        <div>
          <img src={logo} width="400" height="260" />
        </div>
        <div className="text-center m-4">
          <p>
            El 1 de agosto del año 2000, comenzaba a emitir su señal FM Master en su canal digital 105.30 mhz, con la dirección de Juan Mastrángelo y Graciela Curone, teniendo su planta
            transmisora en avenida 40 n° 732, 4 años después con su propia planta y estudio, en avenida 26 n° 2001, formandose el Grupo Master con la emisión de una nueva señal denominada FM Mas 106.50 mhz,
            y el formato digital <a href="https://elsemanariomiramar.com.ar/" target="_blank">El semanario del sudeste</a>.
          </p>
          <p>
            Nuestra emisora contempla una programación variada y con mucha información, apuntando al trabajo social,
            con eventos distinguidos en nuestro distrito, como la "Llegada de Papa Noél",
            Programas especiales (dia del niño,  dia del padre y dia de la madre),
            y la impronta de cada uno de los conductores en el trabajo social y la ayuda a la comunidad.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
