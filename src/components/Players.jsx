import Player from "./Player";
import { players } from "../utils/utils";
const Players = () => {
  return (
    <section id="players" >
      <h2 className="text-center mt-4 mb-4">Escuchanos por Internet</h2>
      <div className="d-flex flex-wrap justify-content-around">
        {players.map((item) => (
          <Player key={item.id} info={item} />
        ))}
      </div>
    </section>
  );
};
export default Players;
