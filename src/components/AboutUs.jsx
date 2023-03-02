import logo from "../assets/images/logo.jpg";
const AboutUs = () => {
  return (
    <section id="about" className="about-container m-5">
      <h2 className="text-center">Conocenos</h2>
      <div className="p-3 about d-flex align-items-center justify-content-center">
        <div>
          <img src={logo} />
        </div>
        <div className="text-center">
          <h4>Historia de Radio Master</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure,
            sint. Rem, architecto cumque libero sed eveniet facere ducimus nam
            aliquid delectus. Nihil ipsa eum sit ducimus tenetur, cumque porro
            non.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
