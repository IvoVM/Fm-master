import Player from "./Player";
import { players } from "../utils/utils";
import logo from "../assets/images/grupo-master-logo.jpeg";

const Players = () => {
  return (
    <section id="players" className="row mt-4 px-3" >
      <img src={logo}  height="300px" className="rounded-5 w-50 col d-none d-md-block" />

      <div className="d-flex justify-content-center align-items-center col" >
        {players.map((item) => (
          <Player key={item.id} info={item} />
        ))}
      </div>

    </section>
  );
};
export default Players;
