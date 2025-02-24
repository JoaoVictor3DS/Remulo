import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Container from '../../components/Container'

function Home() {
    return (
        <>
            <div>
                <Header />
                <Container>
                    <section className={styles.home}>
                        <div className={styles.apresentacao}>
                            <p>
                                Olá, sou <br />
                                <span>João Victor Pinheiro</span> <br />
                                Dev Full Stack
                            </p>
                            <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
                                Saiba mais sobre mim
                            </Link>
                        </div>
                        <figure>
                            <img className={styles.img_home} src="/developer-red.svg" alt="Imagem de Home" />
                        </figure>
                    </section>
                </Container>
                <Footer />
            </div>
        </>
    )
}

export default Home