const Player = (props) => {
  return (
    <div className="player w-100 h-100 d-flex align-items-center flex-column p-2">
      <h3 className="my-2 text-center" >
        Escucha <span className="rose">{props.info.title}</span> en vivo las 24hs
      </h3>
      <div className="p-3 w-100 h-100">
        <iframe width="100%" height="100%" src={props.info.url} className="rounded-5"></iframe>

      </div>
    </div>
  );
};
export default Player;
