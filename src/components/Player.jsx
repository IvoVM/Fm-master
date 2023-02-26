const Player = (props) => {
  return (
    <div className="player">
      <h3>
        Escucha <span className="master">{props.info.title}</span> en vivo las
        24hs
      </h3>
      <iframe width="350px" height="120px" src={props.info.url}></iframe>
    </div>
  );
};
export default Player;
