import { Link } from 'react-router-dom'
import styles from './Home.module.css'

function Home() {
    return (
        <>
            <div>
                <section className={styles.home}>
                    <div className={styles.apresentacao}>
                        <p>
                            Olá, sou <br />
                            <span>João Victor Pinheiro Reis</span> <br />
                            Dev Full Stack
                        </p>
                        <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
                            Saiba mais sobre mim
                        </Link>
                    </div>
                    <figure>
                        <img className={styles.img_home} src="" alt="Foto Minha" />
                    </figure>
                </section>
            </div>
        </>
    )
}

export default Home