import logo from "../assets/images/grupo-master-logo.jpeg";
import publiCirco from "../assets/images/publi_circo.jpeg";
import { players } from "../utils/utils";
import Player from "./Player";

const Players = () => {
  return (
    <section id="players" className="row mt-4 px-3 g-3 align-items-center">
      {/* Publicidad circo izquierda */}{" "}
      <div className="col-12 col-md-2 d-flex justify-content-center">

       {/*  <img
          src={publiCirco}
          alt="Publicidad del circo"
          className="img-fluid"
          style={{ maxHeight: "300px", objectFit: "contain" }}
        /> */}
      </div>
      {/* Logo */}
      <div className="col-12 col-md-4 d-flex justify-content-center">
        {" "}
        <img
          src={logo}
          height="300px"
          className="rounded-5 img-fluid d-none d-md-block"
          alt="Logo"
        />{" "}
      </div>{" "}
      {/* Players */}{" "}
      <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
        {" "}
        {players.map((item) => (
          <Player key={item.id} info={item} />
        ))}{" "}
      </div>{" "}
    </section>
  );
};
export default Players;
