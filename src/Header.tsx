import './Header.css'
import logo from './assets/icon_2x.png'


function Header () {
    return(
        <>
        <div className='header mb-4'>
            <div className='icon '>
                <a href="/">
                    <img src={logo} alt='Logo de Dulces Pétalos' />
                </a>
            </div>
        </div>
        </>
    )
}

export default Header