import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import myPhoto from './avatar.jpg'

function Home() {
    return (
        <>
            <div>
                <section className={styles.home}>
                    <div>
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
                        <img className={styles.img_home} src={myPhoto} />
                    </figure>
                </section>
            </div>
        </>
    )
}

export default Home