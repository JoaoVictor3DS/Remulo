import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'
import styles from './Contatos.module.css'

function Sobre() {
    return (
        <>
            <section className={styles.contats}>
                <h2 className={styles.title2}>Contatos</h2>

                <h3>Entre em contato</h3>

                <div className={styles.icons}>

                    <a href='mailto:joaovictorpinheiro1510@gmail.com' target='_blank' rel='noopener noreferrer'>
                        <GoMail className={styles.icon} />
                    </a>

                    <a href='https://github.com/JoaoVictor3DS' target='_blank' rel='noopener noreferrer'>
                        <BsGithub className={styles.icon} />
                    </a>

                    <a href='https://www.linkedin.com/in/jo%C3%A3o-victor-pinheiro-reis-966b3728b/' target='_blank' rel='noopener noreferrer'>
                        <BsLinkedin className={styles.icon} />
                    </a>

                </div>

            </section>
        </>
    )
}

export default Sobre