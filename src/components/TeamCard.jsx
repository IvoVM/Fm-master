import img from '../assets/images/carousel/car15.jpg'
const TeamCard = (props)=>{
    return(
    <div className="card">
        <img  className='card-image' src={img} alt="equipo master" />
        <div className='p-4 '>
            <h4> Camila López</h4>
            <h5 className='rose' >Participaciones:</h5>
            <p>"A Cami tenes"</p>
        </div>
    </div>
    )
}
export default TeamCard;