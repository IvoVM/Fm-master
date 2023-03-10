import Player from "./Player";
import { players } from "../utils/utils";
const Players = () => {
  return (
    <section id="players" >
      <div >
        {players.map((item) => (
          <Player key={item.id} info={item} />
        ))}
      </div>
    </section>
  );
};
export default Players;
