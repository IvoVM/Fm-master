import { Players, Carrousel } from './index'
const Header = () => {
    return (
        <header id="home">
            <h2 className="text-center p-4">
                23 años siendo <span className="rose"> Tu mejor compañia!!!</span>
            </h2>
            <div className='header'>
                <Carrousel />
                <Players />
            </div>
        </header>
    )
}
export default Header;