const TeamCard = (props) => {
  return (
    <div className="card">
      <img className="card-image" src={props.props.img} alt="equipo master" />
      <div className="card-description">
        <h4 className="pt-4"> {props.props.name}</h4>
        <h5 className="rose">Programas:</h5>
        <p>{props.props.participations}</p>
      </div>
    </div>
  );
};
export default TeamCard;
