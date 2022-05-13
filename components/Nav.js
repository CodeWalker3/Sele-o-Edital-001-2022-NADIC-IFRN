import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className={navStyles.nav}>       
            <h1><Link href='/'>Sistema De Eleição</Link></h1>
            <ul>
                <li>
                    <Link href='/'>Início</Link>
                </li>
                <li>
                    <Link href='/login'>Entrar</Link>
                </li>
                <li>
                    <Link href='/register'>Registrar-se</Link>
                </li>
                <li>
                    <Link href='/lista'>Pleitos</Link>
                </li>
            </ul>

        </nav>
    )
}

export default Nav