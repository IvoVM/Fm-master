import Player from "./Player";
import { players } from "../utils/utils";
const Players = () => {
  return (
    <section >
      <h3 className="text-center pt-5">Escuchanos por Internet</h3>
      <div className="d-flex flex-wrap justify-content-around">
        {players.map((item) => (
          <Player key={item.id} info={item} />
        ))}
      </div>
    </section>
  );
};
export default Players;
