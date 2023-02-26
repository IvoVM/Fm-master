import Player from "./Player";
import { players } from "../utils/utils";
const Players = () => {
  return (
    <section className="players-section">
      <h3>Escuchanos por Internet</h3>
      <div className="players">
        {players.map((item) => (
          <Player key={item.id} info={item} />
        ))}
      </div>
    </section>
  );
};
export default Players;
