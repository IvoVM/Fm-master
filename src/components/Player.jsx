const Player = (props) => {
  return (
    <div  className="player m-2 p-2  d-flex flex-column align-items-center">
      <h3 className="p-2">
        Escucha <span className="rose">{props.info.title}</span> en vivo las 24hs
      </h3>
      <iframe width="295px" height="120px" src={props.info.url}></iframe>
    </div>
  );
};
export default Player;
