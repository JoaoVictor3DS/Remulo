import { Link } from 'react-router-dom';
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <a href='mailto:joaovictorpinheiro1510@gmail.com' target='_blank' rel='noopener noreferrer'>
                joaovictorpinheiro1510@gmail.com
            </a>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/projetos">Projetos</Link>
                <Link to="/contatos">Contatos</Link>
            </nav>
        </header>
    )
}

export default Header