const Player = (props) => {
  return (
    <div className="player d-flex flex-column align-items-center">
      <h3 className="p-2">
        Escucha <span className="player-title">{props.info.title}</span> en vivo las 24hs
      </h3>
      <iframe width="310px" height="120px" src={props.info.url}></iframe>
    </div>
  );
};
export default Player;
