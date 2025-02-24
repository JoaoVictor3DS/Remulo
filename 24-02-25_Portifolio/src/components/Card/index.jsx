import styles from './Card.module.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'

function Card() {
    return (
        <section className={styles.card}>
            <h3>Portifólio</h3>
            <p>Este projeto consiste em uma apresentação de minhas competências como programador full stack e uma breve apresentação pessoal.</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icons}>
                    <FaHtml5 />
                    <FaCss3Alt />
                    <FaJs />
                    <FaReact />
                </div>
                <button className={styles.btn}>
                    <BsArrowRight />
                </button>
            </div>
        </section>
    )
}

export default Card