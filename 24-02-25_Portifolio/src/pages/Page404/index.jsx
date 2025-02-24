import styles from './Page404.module.css'

function Page404() {
    return (
        <section className={styles.page404}>
            <h2 className={styles.title2}>Ocorreu Algum Engano!</h2>
            <div className={styles.text}>
                <span className={`${styles.big_text} ${styles.red_text}`}>Error 404</span> <br />
                <strong className={`${styles.medium_text} ${styles.red_text}`}>Página Não Localizada!</strong>
            </div>
        </section>
    )
}

export default Page404