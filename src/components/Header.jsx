import { Players, Carrousel } from './index'
const Header = () => {
    return (
        <header id="players">
            <h2 className="text-center p-4">
                23 años siendo <span className="rose"> tu mejor compañia!!!</span>
            </h2>
            <div className='header'>
                <Carrousel />
                <Players />
            </div>
        </header>
    )
}
export default Header;