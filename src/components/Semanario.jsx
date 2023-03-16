import img from '../assets/images/semanario-logo.png';
const Semanario = () => {
    return (
        <section id="semanario"  className="d-flex justify-content-center align-items-center flex-column mt-5">
            <img src={img}/>
            <h4 className='mb-5 text-center mt-4'>Enterate de las últimas noticias de <span className="rose">Miramar.</span></h4>
            <iframe  className="semanario" width="1100px" height="450px" src="https://elsemanariomiramar.com.ar/"></iframe>
        </section>
    )

}
export default Semanario;